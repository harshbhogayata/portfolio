(()=>{var Au=0,rh=1,Ru=2;var sh=1,Cu=2,Ui=3,ni=0,Pn=1,un=2,Ai=0,Fr=1,fn=2,oh=3,ah=4,Pu=5,dr=100,Iu=101,Du=102,Lu=103,Uu=104,Nu=200,Fu=201,Bu=202,Ou=203,ba=204,Sa=205,zu=206,ku=207,Hu=208,Vu=209,Gu=210,Wu=211,Xu=212,qu=213,Yu=214,Qa=0,ja=1,tl=2,Br=3,el=4,nl=5,il=6,rl=7,lh=0,Zu=1,Ju=2,tr=0,sl=1,ol=2,al=3,Ds=4,ll=5,cl=6,hl=7;var ch=300,Wr=301,Xr=302,ul=303,fl=304,Bo=306,Ei=1e3,fr=1001,Ea=1002,Jn=1003,$u=1004;var Oo=1005;var wi=1006,dl=1007;var _r=1008;var Ni=1009,hh=1010,uh=1011,Ls=1012,pl=1013,vr=1014,Fi=1015,gi=1016,ml=1017,gl=1018,Us=1020,fh=35902,dh=35899,ph=1021,mh=1022,xi=1023,vs=1026,Ns=1027,gh=1028,xl=1029,xh=1030,_l=1031;var vl=1033,zo=33776,ko=33777,Ho=33778,Vo=33779,yl=35840,Ml=35841,bl=35842,Sl=35843,El=36196,wl=37492,Tl=37496,Al=37808,Rl=37809,Cl=37810,Pl=37811,Il=37812,Dl=37813,Ll=37814,Ul=37815,Nl=37816,Fl=37817,Bl=37818,Ol=37819,zl=37820,kl=37821,Hl=36492,Vl=36494,Gl=36495,Wl=36283,Xl=36284,ql=36285,Yl=36286;var co=2300,wa=2301,Ma=2302,Yc=2400,Zc=2401,Jc=2402;var Ku=3200,Qu=3201;var ju=0,tf=1,er="",mn="srgb",Or="srgb-linear",ho="linear",ze="srgb";var Nr=7680;var $c=519,ef=512,nf=513,rf=514,_h=515,sf=516,of=517,af=518,lf=519,Ta=35044;var vh="300 es",Si=2e3,uo=2001;var Qi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let r=n[t];if(r!==void 0){let s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,t);t.target=null}}},Ln=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var yc=Math.PI/180,Aa=180/Math.PI;function $i(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ln[i&255]+Ln[i>>8&255]+Ln[i>>16&255]+Ln[i>>24&255]+"-"+Ln[t&255]+Ln[t>>8&255]+"-"+Ln[t>>16&15|64]+Ln[t>>24&255]+"-"+Ln[e&63|128]+Ln[e>>8&255]+"-"+Ln[e>>16&255]+Ln[e>>24&255]+Ln[n&255]+Ln[n>>8&255]+Ln[n>>16&255]+Ln[n>>24&255]).toLowerCase()}function Re(i,t,e){return Math.max(t,Math.min(e,i))}function Id(i,t){return(i%t+t)%t}function Mc(i,t,e){return(1-e)*i+e*t}function Pi(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Xe(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var xt=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6],this.y=r[1]*e+r[4]*n+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Re(this.x,t.x,e.x),this.y=Re(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Re(this.x,t,e),this.y=Re(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Re(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Re(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),r=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*r+t.x,this.y=s*r+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},di=class{constructor(t=0,e=0,n=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=r}static slerpFlat(t,e,n,r,s,o,a){let l=n[r+0],c=n[r+1],u=n[r+2],h=n[r+3],f=s[o+0],d=s[o+1],g=s[o+2],x=s[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h;return}if(a===1){t[e+0]=f,t[e+1]=d,t[e+2]=g,t[e+3]=x;return}if(h!==x||l!==f||c!==d||u!==g){let p=1-a,m=l*f+c*d+u*g+h*x,_=m>=0?1:-1,v=1-m*m;if(v>Number.EPSILON){let w=Math.sqrt(v),M=Math.atan2(w,m*_);p=Math.sin(p*M)/w,a=Math.sin(a*M)/w}let y=a*_;if(l=l*p+f*y,c=c*p+d*y,u=u*p+g*y,h=h*p+x*y,p===1-a){let w=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=w,c*=w,u*=w,h*=w}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,r,s,o){let a=n[r],l=n[r+1],c=n[r+2],u=n[r+3],h=s[o],f=s[o+1],d=s[o+2],g=s[o+3];return t[e]=a*g+u*h+l*d-c*f,t[e+1]=l*g+u*f+c*h-a*d,t[e+2]=c*g+u*d+a*f-l*h,t[e+3]=u*g-a*h-l*f-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,r){return this._x=t,this._y=e,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,r=t._y,s=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(r/2),h=a(s/2),f=l(n/2),d=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"YXZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"ZXY":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"ZYX":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"YZX":this._x=f*u*h+c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h-f*d*g;break;case"XZY":this._x=f*u*h-c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,r=Math.sin(n);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],r=e[4],s=e[8],o=e[1],a=e[5],l=e[9],c=e[2],u=e[6],h=e[10],f=n+a+h;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(s-c)*d,this._z=(o-r)*d}else if(n>a&&n>h){let d=2*Math.sqrt(1+n-a-h);this._w=(u-l)/d,this._x=.25*d,this._y=(r+o)/d,this._z=(s+c)/d}else if(a>h){let d=2*Math.sqrt(1+a-n-h);this._w=(s-c)/d,this._x=(r+o)/d,this._y=.25*d,this._z=(l+u)/d}else{let d=2*Math.sqrt(1+h-n-a);this._w=(o-r)/d,this._x=(s+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Re(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let r=Math.min(1,e/n);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,r=t._y,s=t._z,o=t._w,a=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-r*a,this._w=o*u-n*a-r*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,r=this._y,s=this._z,o=this._w,a=o*t._w+n*t._x+r*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;let l=1-a*a;if(l<=Number.EPSILON){let d=1-e;return this._w=d*o+e*this._w,this._x=d*n+e*this._x,this._y=d*r+e*this._y,this._z=d*s+e*this._z,this.normalize(),this}let c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-e)*u)/c,f=Math.sin(e*u)/c;return this._w=o*h+this._w*f,this._x=n*h+this._x*f,this._y=r*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},k=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(tu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(tu.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*r,this.y=s[1]*e+s[4]*n+s[7]*r,this.z=s[2]*e+s[5]*n+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,r=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,r=this.z,s=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*r-a*n),u=2*(a*e-s*r),h=2*(s*n-o*e);return this.x=e+l*c+o*h-a*u,this.y=n+l*u+a*c-s*h,this.z=r+l*h+s*u-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*r,this.y=s[1]*e+s[5]*n+s[9]*r,this.z=s[2]*e+s[6]*n+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Re(this.x,t.x,e.x),this.y=Re(this.y,t.y,e.y),this.z=Re(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Re(this.x,t,e),this.y=Re(this.y,t,e),this.z=Re(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Re(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,r=t.y,s=t.z,o=e.x,a=e.y,l=e.z;return this.x=r*l-s*a,this.y=s*o-n*l,this.z=n*a-r*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return bc.copy(this).projectOnVector(t),this.sub(bc)}reflect(t){return this.sub(bc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Re(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,r=this.z-t.z;return e*e+n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let r=Math.sin(e)*t;return this.x=r*Math.sin(n),this.y=Math.cos(e)*t,this.z=r*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},bc=new k,tu=new di,be=class i{constructor(t,e,n,r,s,o,a,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,o,a,l,c)}set(t,e,n,r,s,o,a,l,c){let u=this.elements;return u[0]=t,u[1]=r,u[2]=a,u[3]=e,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,r=e.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],d=n[5],g=n[8],x=r[0],p=r[3],m=r[6],_=r[1],v=r[4],y=r[7],w=r[2],M=r[5],E=r[8];return s[0]=o*x+a*_+l*w,s[3]=o*p+a*v+l*M,s[6]=o*m+a*y+l*E,s[1]=c*x+u*_+h*w,s[4]=c*p+u*v+h*M,s[7]=c*m+u*y+h*E,s[2]=f*x+d*_+g*w,s[5]=f*p+d*v+g*M,s[8]=f*m+d*y+g*E,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8];return e*o*u-e*a*c-n*s*u+n*a*l+r*s*c-r*o*l}invert(){let t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=u*o-a*c,f=a*l-u*s,d=c*s-o*l,g=e*h+n*f+r*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return t[0]=h*x,t[1]=(r*c-u*n)*x,t[2]=(a*n-r*o)*x,t[3]=f*x,t[4]=(u*e-r*l)*x,t[5]=(r*s-a*e)*x,t[6]=d*x,t[7]=(n*l-c*e)*x,t[8]=(o*e-n*s)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,r,s,o,a){let l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-r*c,r*l,-r*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Sc.makeScale(t,e)),this}rotate(t){return this.premultiply(Sc.makeRotation(-t)),this}translate(t,e){return this.premultiply(Sc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let r=0;r<9;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Sc=new be;function yh(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function fo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function cf(){let i=fo("canvas");return i.style.display="block",i}var eu={};function ys(i){i in eu||(eu[i]=!0,console.warn(i))}function hf(i,t,e){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}var nu=new be().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),iu=new be().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Dd(){let i={enabled:!0,workingColorSpace:Or,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===ze&&(r.r=Ki(r.r),r.g=Ki(r.g),r.b=Ki(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ze&&(r.r=_s(r.r),r.g=_s(r.g),r.b=_s(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===er?ho:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return ys("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return ys("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Or]:{primaries:t,whitePoint:n,transfer:ho,toXYZ:nu,fromXYZ:iu,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:mn},outputColorSpaceConfig:{drawingBufferColorSpace:mn}},[mn]:{primaries:t,whitePoint:n,transfer:ze,toXYZ:nu,fromXYZ:iu,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:mn}}}),i}var Ne=Dd();function Ki(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function _s(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var ns,Ra=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{ns===void 0&&(ns=fo("canvas")),ns.width=t.width,ns.height=t.height;let r=ns.getContext("2d");t instanceof ImageData?r.putImageData(t,0,0):r.drawImage(t,0,0,t.width,t.height),n=ns}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=fo("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let r=n.getImageData(0,0,t.width,t.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Ki(s[o]/255)*255;return n.putImageData(r,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Ki(e[n]/255)*255):e[n]=Ki(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Ld=0,Ms=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ld++}),this.uuid=$i(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Ec(r[o].image)):s.push(Ec(r[o]))}else s=Ec(r);n.url=s}return e||(t.images[this.uuid]=n),n}};function Ec(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ra.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Ud=0,wc=new k,Vn=class i extends Qi{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=fr,r=fr,s=wi,o=_r,a=xi,l=Ni,c=i.DEFAULT_ANISOTROPY,u=er){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ud++}),this.uuid=$i(),this.name="",this.source=new Ms(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new xt(0,0),this.repeat=new xt(1,1),this.center=new xt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new be,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(wc).x}get height(){return this.source.getSize(wc).y}get depth(){return this.source.getSize(wc).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let r=this[e];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==ch)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ei:t.x=t.x-Math.floor(t.x);break;case fr:t.x=t.x<0?0:1;break;case Ea:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ei:t.y=t.y-Math.floor(t.y);break;case fr:t.y=t.y<0?0:1;break;case Ea:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Vn.DEFAULT_IMAGE=null;Vn.DEFAULT_MAPPING=ch;Vn.DEFAULT_ANISOTROPY=1;var tn=class i{constructor(t=0,e=0,n=0,r=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,r){return this.x=t,this.y=e,this.z=n,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,r=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*r+o[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,r,s,l=t.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],g=l[9],x=l[2],p=l[6],m=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-x)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+x)<.1&&Math.abs(g+p)<.1&&Math.abs(c+d+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let v=(c+1)/2,y=(d+1)/2,w=(m+1)/2,M=(u+f)/4,E=(h+x)/4,T=(g+p)/4;return v>y&&v>w?v<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(v),r=M/n,s=E/n):y>w?y<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),n=M/r,s=T/r):w<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(w),n=E/s,r=T/s),this.set(n,r,s,e),this}let _=Math.sqrt((p-g)*(p-g)+(h-x)*(h-x)+(f-u)*(f-u));return Math.abs(_)<.001&&(_=1),this.x=(p-g)/_,this.y=(h-x)/_,this.z=(f-u)/_,this.w=Math.acos((c+d+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Re(this.x,t.x,e.x),this.y=Re(this.y,t.y,e.y),this.z=Re(this.z,t.z,e.z),this.w=Re(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Re(this.x,t,e),this.y=Re(this.y,t,e),this.z=Re(this.z,t,e),this.w=Re(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Re(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Ca=class extends Qi{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:wi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new tn(0,0,t,e),this.scissorTest=!1,this.viewport=new tn(0,0,t,e);let r={width:t,height:e,depth:n.depth},s=new Vn(r);this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){let e={minFilter:wi,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=n,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let r=Object.assign({},t.textures[e].image);this.textures[e].source=new Ms(r)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},wn=class extends Ca{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},po=class extends Vn{constructor(t=null,e=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=Jn,this.minFilter=Jn,this.wrapR=fr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Pa=class extends Vn{constructor(t=null,e=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=Jn,this.minFilter=Jn,this.wrapR=fr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var pr=class{constructor(t=new k(1/0,1/0,1/0),e=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(yi.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(yi.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=yi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,yi):yi.fromBufferAttribute(s,o),yi.applyMatrix4(t.matrixWorld),this.expandByPoint(yi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Jo.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Jo.copy(n.boundingBox)),Jo.applyMatrix4(t.matrixWorld),this.union(Jo)}let r=t.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,yi),yi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(js),$o.subVectors(this.max,js),is.subVectors(t.a,js),rs.subVectors(t.b,js),ss.subVectors(t.c,js),or.subVectors(rs,is),ar.subVectors(ss,rs),Ir.subVectors(is,ss);let e=[0,-or.z,or.y,0,-ar.z,ar.y,0,-Ir.z,Ir.y,or.z,0,-or.x,ar.z,0,-ar.x,Ir.z,0,-Ir.x,-or.y,or.x,0,-ar.y,ar.x,0,-Ir.y,Ir.x,0];return!Tc(e,is,rs,ss,$o)||(e=[1,0,0,0,1,0,0,0,1],!Tc(e,is,rs,ss,$o))?!1:(Ko.crossVectors(or,ar),e=[Ko.x,Ko.y,Ko.z],Tc(e,is,rs,ss,$o))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,yi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(yi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Wi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Wi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Wi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Wi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Wi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Wi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Wi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Wi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Wi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Wi=[new k,new k,new k,new k,new k,new k,new k,new k],yi=new k,Jo=new pr,is=new k,rs=new k,ss=new k,or=new k,ar=new k,Ir=new k,js=new k,$o=new k,Ko=new k,Dr=new k;function Tc(i,t,e,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){Dr.fromArray(i,s);let a=r.x*Math.abs(Dr.x)+r.y*Math.abs(Dr.y)+r.z*Math.abs(Dr.z),l=t.dot(Dr),c=e.dot(Dr),u=n.dot(Dr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}var Nd=new pr,to=new k,Ac=new k,zr=class{constructor(t=new k,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Nd.setFromPoints(t).getCenter(n);let r=0;for(let s=0,o=t.length;s<o;s++)r=Math.max(r,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;to.subVectors(t,this.center);let e=to.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),r=(n-this.radius)*.5;this.center.addScaledVector(to,r/n),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ac.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(to.copy(t.center).add(Ac)),this.expandByPoint(to.copy(t.center).sub(Ac))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Xi=new k,Rc=new k,Qo=new k,lr=new k,Cc=new k,jo=new k,Pc=new k,bs=class{constructor(t=new k,e=new k(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Xi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Xi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Xi.copy(this.origin).addScaledVector(this.direction,e),Xi.distanceToSquared(t))}distanceSqToSegment(t,e,n,r){Rc.copy(t).add(e).multiplyScalar(.5),Qo.copy(e).sub(t).normalize(),lr.copy(this.origin).sub(Rc);let s=t.distanceTo(e)*.5,o=-this.direction.dot(Qo),a=lr.dot(this.direction),l=-lr.dot(Qo),c=lr.lengthSq(),u=Math.abs(1-o*o),h,f,d,g;if(u>0)if(h=o*l-a,f=o*a-l,g=s*u,h>=0)if(f>=-g)if(f<=g){let x=1/u;h*=x,f*=x,d=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-o*s+a)),f=h>0?-s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-s,-l),s),d=f*(f+2*l)+c):(h=Math.max(0,-(o*s+a)),f=h>0?s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+c);else f=o>0?-s:s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Rc).addScaledVector(Qo,f),d}intersectSphere(t,e){Xi.subVectors(t.center,this.origin);let n=Xi.dot(this.direction),r=Xi.dot(Xi)-n*n,s=t.radius*t.radius;if(r>s)return null;let o=Math.sqrt(s-r),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,r,s,o,a,l,c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,r=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,r=(t.min.x-f.x)*c),u>=0?(s=(t.min.y-f.y)*u,o=(t.max.y-f.y)*u):(s=(t.max.y-f.y)*u,o=(t.min.y-f.y)*u),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(t.min.z-f.z)*h,l=(t.max.z-f.z)*h):(a=(t.max.z-f.z)*h,l=(t.min.z-f.z)*h),n>l||a>r)||((a>n||n!==n)&&(n=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,e)}intersectsBox(t){return this.intersectBox(t,Xi)!==null}intersectTriangle(t,e,n,r,s){Cc.subVectors(e,t),jo.subVectors(n,t),Pc.crossVectors(Cc,jo);let o=this.direction.dot(Pc),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;lr.subVectors(this.origin,t);let l=a*this.direction.dot(jo.crossVectors(lr,jo));if(l<0)return null;let c=a*this.direction.dot(Cc.cross(lr));if(c<0||l+c>o)return null;let u=-a*lr.dot(Pc);return u<0?null:this.at(u/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Fe=class i{constructor(t,e,n,r,s,o,a,l,c,u,h,f,d,g,x,p){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,o,a,l,c,u,h,f,d,g,x,p)}set(t,e,n,r,s,o,a,l,c,u,h,f,d,g,x,p){let m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=r,m[1]=s,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=u,m[10]=h,m[14]=f,m[3]=d,m[7]=g,m[11]=x,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,r=1/os.setFromMatrixColumn(t,0).length(),s=1/os.setFromMatrixColumn(t,1).length(),o=1/os.setFromMatrixColumn(t,2).length();return e[0]=n[0]*r,e[1]=n[1]*r,e[2]=n[2]*r,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,r=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(t.order==="XYZ"){let f=o*u,d=o*h,g=a*u,x=a*h;e[0]=l*u,e[4]=-l*h,e[8]=c,e[1]=d+g*c,e[5]=f-x*c,e[9]=-a*l,e[2]=x-f*c,e[6]=g+d*c,e[10]=o*l}else if(t.order==="YXZ"){let f=l*u,d=l*h,g=c*u,x=c*h;e[0]=f+x*a,e[4]=g*a-d,e[8]=o*c,e[1]=o*h,e[5]=o*u,e[9]=-a,e[2]=d*a-g,e[6]=x+f*a,e[10]=o*l}else if(t.order==="ZXY"){let f=l*u,d=l*h,g=c*u,x=c*h;e[0]=f-x*a,e[4]=-o*h,e[8]=g+d*a,e[1]=d+g*a,e[5]=o*u,e[9]=x-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let f=o*u,d=o*h,g=a*u,x=a*h;e[0]=l*u,e[4]=g*c-d,e[8]=f*c+x,e[1]=l*h,e[5]=x*c+f,e[9]=d*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let f=o*l,d=o*c,g=a*l,x=a*c;e[0]=l*u,e[4]=x-f*h,e[8]=g*h+d,e[1]=h,e[5]=o*u,e[9]=-a*u,e[2]=-c*u,e[6]=d*h+g,e[10]=f-x*h}else if(t.order==="XZY"){let f=o*l,d=o*c,g=a*l,x=a*c;e[0]=l*u,e[4]=-h,e[8]=c*u,e[1]=f*h+x,e[5]=o*u,e[9]=d*h-g,e[2]=g*h-d,e[6]=a*u,e[10]=x*h+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Fd,t,Bd)}lookAt(t,e,n){let r=this.elements;return ti.subVectors(t,e),ti.lengthSq()===0&&(ti.z=1),ti.normalize(),cr.crossVectors(n,ti),cr.lengthSq()===0&&(Math.abs(n.z)===1?ti.x+=1e-4:ti.z+=1e-4,ti.normalize(),cr.crossVectors(n,ti)),cr.normalize(),ta.crossVectors(ti,cr),r[0]=cr.x,r[4]=ta.x,r[8]=ti.x,r[1]=cr.y,r[5]=ta.y,r[9]=ti.y,r[2]=cr.z,r[6]=ta.z,r[10]=ti.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,r=e.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],d=n[13],g=n[2],x=n[6],p=n[10],m=n[14],_=n[3],v=n[7],y=n[11],w=n[15],M=r[0],E=r[4],T=r[8],b=r[12],S=r[1],A=r[5],I=r[9],P=r[13],O=r[2],z=r[6],F=r[10],W=r[14],q=r[3],K=r[7],rt=r[11],vt=r[15];return s[0]=o*M+a*S+l*O+c*q,s[4]=o*E+a*A+l*z+c*K,s[8]=o*T+a*I+l*F+c*rt,s[12]=o*b+a*P+l*W+c*vt,s[1]=u*M+h*S+f*O+d*q,s[5]=u*E+h*A+f*z+d*K,s[9]=u*T+h*I+f*F+d*rt,s[13]=u*b+h*P+f*W+d*vt,s[2]=g*M+x*S+p*O+m*q,s[6]=g*E+x*A+p*z+m*K,s[10]=g*T+x*I+p*F+m*rt,s[14]=g*b+x*P+p*W+m*vt,s[3]=_*M+v*S+y*O+w*q,s[7]=_*E+v*A+y*z+w*K,s[11]=_*T+v*I+y*F+w*rt,s[15]=_*b+v*P+y*W+w*vt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],r=t[8],s=t[12],o=t[1],a=t[5],l=t[9],c=t[13],u=t[2],h=t[6],f=t[10],d=t[14],g=t[3],x=t[7],p=t[11],m=t[15];return g*(+s*l*h-r*c*h-s*a*f+n*c*f+r*a*d-n*l*d)+x*(+e*l*d-e*c*f+s*o*f-r*o*d+r*c*u-s*l*u)+p*(+e*c*h-e*a*d-s*o*h+n*o*d+s*a*u-n*c*u)+m*(-r*a*u-e*l*h+e*a*f+r*o*h-n*o*f+n*l*u)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=t[9],f=t[10],d=t[11],g=t[12],x=t[13],p=t[14],m=t[15],_=h*p*c-x*f*c+x*l*d-a*p*d-h*l*m+a*f*m,v=g*f*c-u*p*c-g*l*d+o*p*d+u*l*m-o*f*m,y=u*x*c-g*h*c+g*a*d-o*x*d-u*a*m+o*h*m,w=g*h*l-u*x*l-g*a*f+o*x*f+u*a*p-o*h*p,M=e*_+n*v+r*y+s*w;if(M===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let E=1/M;return t[0]=_*E,t[1]=(x*f*s-h*p*s-x*r*d+n*p*d+h*r*m-n*f*m)*E,t[2]=(a*p*s-x*l*s+x*r*c-n*p*c-a*r*m+n*l*m)*E,t[3]=(h*l*s-a*f*s-h*r*c+n*f*c+a*r*d-n*l*d)*E,t[4]=v*E,t[5]=(u*p*s-g*f*s+g*r*d-e*p*d-u*r*m+e*f*m)*E,t[6]=(g*l*s-o*p*s-g*r*c+e*p*c+o*r*m-e*l*m)*E,t[7]=(o*f*s-u*l*s+u*r*c-e*f*c-o*r*d+e*l*d)*E,t[8]=y*E,t[9]=(g*h*s-u*x*s-g*n*d+e*x*d+u*n*m-e*h*m)*E,t[10]=(o*x*s-g*a*s+g*n*c-e*x*c-o*n*m+e*a*m)*E,t[11]=(u*a*s-o*h*s-u*n*c+e*h*c+o*n*d-e*a*d)*E,t[12]=w*E,t[13]=(u*x*r-g*h*r+g*n*f-e*x*f-u*n*p+e*h*p)*E,t[14]=(g*a*r-o*x*r-g*n*l+e*x*l+o*n*p-e*a*p)*E,t[15]=(o*h*r-u*a*r+u*n*l-e*h*l-o*n*f+e*a*f)*E,this}scale(t){let e=this.elements,n=t.x,r=t.y,s=t.z;return e[0]*=n,e[4]*=r,e[8]*=s,e[1]*=n,e[5]*=r,e[9]*=s,e[2]*=n,e[6]*=r,e[10]*=s,e[3]*=n,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,r))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),r=Math.sin(e),s=1-n,o=t.x,a=t.y,l=t.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+n,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,r,s,o){return this.set(1,n,s,0,t,1,o,0,e,r,1,0,0,0,0,1),this}compose(t,e,n){let r=this.elements,s=e._x,o=e._y,a=e._z,l=e._w,c=s+s,u=o+o,h=a+a,f=s*c,d=s*u,g=s*h,x=o*u,p=o*h,m=a*h,_=l*c,v=l*u,y=l*h,w=n.x,M=n.y,E=n.z;return r[0]=(1-(x+m))*w,r[1]=(d+y)*w,r[2]=(g-v)*w,r[3]=0,r[4]=(d-y)*M,r[5]=(1-(f+m))*M,r[6]=(p+_)*M,r[7]=0,r[8]=(g+v)*E,r[9]=(p-_)*E,r[10]=(1-(f+x))*E,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,n){let r=this.elements,s=os.set(r[0],r[1],r[2]).length(),o=os.set(r[4],r[5],r[6]).length(),a=os.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],Mi.copy(this);let c=1/s,u=1/o,h=1/a;return Mi.elements[0]*=c,Mi.elements[1]*=c,Mi.elements[2]*=c,Mi.elements[4]*=u,Mi.elements[5]*=u,Mi.elements[6]*=u,Mi.elements[8]*=h,Mi.elements[9]*=h,Mi.elements[10]*=h,e.setFromRotationMatrix(Mi),n.x=s,n.y=o,n.z=a,this}makePerspective(t,e,n,r,s,o,a=Si,l=!1){let c=this.elements,u=2*s/(e-t),h=2*s/(n-r),f=(e+t)/(e-t),d=(n+r)/(n-r),g,x;if(l)g=s/(o-s),x=o*s/(o-s);else if(a===Si)g=-(o+s)/(o-s),x=-2*o*s/(o-s);else if(a===uo)g=-o/(o-s),x=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,r,s,o,a=Si,l=!1){let c=this.elements,u=2/(e-t),h=2/(n-r),f=-(e+t)/(e-t),d=-(n+r)/(n-r),g,x;if(l)g=1/(o-s),x=o/(o-s);else if(a===Si)g=-2/(o-s),x=-(o+s)/(o-s);else if(a===uo)g=-1/(o-s),x=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=h,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let r=0;r<16;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},os=new k,Mi=new Fe,Fd=new k(0,0,0),Bd=new k(1,1,1),cr=new k,ta=new k,ti=new k,ru=new Fe,su=new di,Di=class i{constructor(t=0,e=0,n=0,r=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,r=this._order){return this._x=t,this._y=e,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let r=t.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],h=r[2],f=r[6],d=r[10];switch(e){case"XYZ":this._y=Math.asin(Re(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Re(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Re(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Re(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Re(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Re(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return ru.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ru,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return su.setFromEuler(this),this.setFromQuaternion(su,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Di.DEFAULT_ORDER="XYZ";var Ss=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Od=0,ou=new k,as=new di,qi=new Fe,ea=new k,eo=new k,zd=new k,kd=new di,au=new k(1,0,0),lu=new k(0,1,0),cu=new k(0,0,1),hu={type:"added"},Hd={type:"removed"},ls={type:"childadded",child:null},Ic={type:"childremoved",child:null},$n=class i extends Qi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Od++}),this.uuid=$i(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new k,e=new Di,n=new di,r=new k(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Fe},normalMatrix:{value:new be}}),this.matrix=new Fe,this.matrixWorld=new Fe,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ss,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return as.setFromAxisAngle(t,e),this.quaternion.multiply(as),this}rotateOnWorldAxis(t,e){return as.setFromAxisAngle(t,e),this.quaternion.premultiply(as),this}rotateX(t){return this.rotateOnAxis(au,t)}rotateY(t){return this.rotateOnAxis(lu,t)}rotateZ(t){return this.rotateOnAxis(cu,t)}translateOnAxis(t,e){return ou.copy(t).applyQuaternion(this.quaternion),this.position.add(ou.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(au,t)}translateY(t){return this.translateOnAxis(lu,t)}translateZ(t){return this.translateOnAxis(cu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(qi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ea.copy(t):ea.set(t,e,n);let r=this.parent;this.updateWorldMatrix(!0,!1),eo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?qi.lookAt(eo,ea,this.up):qi.lookAt(ea,eo,this.up),this.quaternion.setFromRotationMatrix(qi),r&&(qi.extractRotation(r.matrixWorld),as.setFromRotationMatrix(qi),this.quaternion.premultiply(as.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(hu),ls.child=t,this.dispatchEvent(ls),ls.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Hd),Ic.child=t,this.dispatchEvent(Ic),Ic.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),qi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),qi.multiply(t.parent.matrixWorld)),t.applyMatrix4(qi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(hu),ls.child=t,this.dispatchEvent(ls),ls.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,r=this.children.length;n<r;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(eo,t,zd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(eo,kd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(t),r.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let h=l[c];s(t.shapes,h)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(t.materials,this.material[l]));r.material=a}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];r.animations.push(s(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),u=o(t.images),h=o(t.shapes),f=o(t.skeletons),d=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=r,n;function o(a){let l=[];for(let c in a){let u=a[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let r=t.children[n];this.add(r.clone())}return this}};$n.DEFAULT_UP=new k(0,1,0);$n.DEFAULT_MATRIX_AUTO_UPDATE=!0;$n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var bi=new k,Yi=new k,Dc=new k,Zi=new k,cs=new k,hs=new k,uu=new k,Lc=new k,Uc=new k,Nc=new k,Fc=new tn,Bc=new tn,Oc=new tn,Ji=class i{constructor(t=new k,e=new k,n=new k){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,r){r.subVectors(n,e),bi.subVectors(t,e),r.cross(bi);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,n,r,s){bi.subVectors(r,e),Yi.subVectors(n,e),Dc.subVectors(t,e);let o=bi.dot(bi),a=bi.dot(Yi),l=bi.dot(Dc),c=Yi.dot(Yi),u=Yi.dot(Dc),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;let f=1/h,d=(c*l-a*u)*f,g=(o*u-a*l)*f;return s.set(1-d-g,g,d)}static containsPoint(t,e,n,r){return this.getBarycoord(t,e,n,r,Zi)===null?!1:Zi.x>=0&&Zi.y>=0&&Zi.x+Zi.y<=1}static getInterpolation(t,e,n,r,s,o,a,l){return this.getBarycoord(t,e,n,r,Zi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Zi.x),l.addScaledVector(o,Zi.y),l.addScaledVector(a,Zi.z),l)}static getInterpolatedAttribute(t,e,n,r,s,o){return Fc.setScalar(0),Bc.setScalar(0),Oc.setScalar(0),Fc.fromBufferAttribute(t,e),Bc.fromBufferAttribute(t,n),Oc.fromBufferAttribute(t,r),o.setScalar(0),o.addScaledVector(Fc,s.x),o.addScaledVector(Bc,s.y),o.addScaledVector(Oc,s.z),o}static isFrontFacing(t,e,n,r){return bi.subVectors(n,e),Yi.subVectors(t,e),bi.cross(Yi).dot(r)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,r){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,n,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return bi.subVectors(this.c,this.b),Yi.subVectors(this.a,this.b),bi.cross(Yi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,r,s){return i.getInterpolation(t,this.a,this.b,this.c,e,n,r,s)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,r=this.b,s=this.c,o,a;cs.subVectors(r,n),hs.subVectors(s,n),Lc.subVectors(t,n);let l=cs.dot(Lc),c=hs.dot(Lc);if(l<=0&&c<=0)return e.copy(n);Uc.subVectors(t,r);let u=cs.dot(Uc),h=hs.dot(Uc);if(u>=0&&h<=u)return e.copy(r);let f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),e.copy(n).addScaledVector(cs,o);Nc.subVectors(t,s);let d=cs.dot(Nc),g=hs.dot(Nc);if(g>=0&&d<=g)return e.copy(s);let x=d*c-l*g;if(x<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(hs,a);let p=u*g-d*h;if(p<=0&&h-u>=0&&d-g>=0)return uu.subVectors(s,r),a=(h-u)/(h-u+(d-g)),e.copy(r).addScaledVector(uu,a);let m=1/(p+x+f);return o=x*m,a=f*m,e.copy(n).addScaledVector(cs,o).addScaledVector(hs,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},uf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},hr={h:0,s:0,l:0},na={h:0,s:0,l:0};function zc(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Ht=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=mn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ne.colorSpaceToWorking(this,e),this}setRGB(t,e,n,r=Ne.workingColorSpace){return this.r=t,this.g=e,this.b=n,Ne.colorSpaceToWorking(this,r),this}setHSL(t,e,n,r=Ne.workingColorSpace){if(t=Id(t,1),e=Re(e,0,1),n=Re(n,0,1),e===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=zc(o,s,t+1/3),this.g=zc(o,s,t),this.b=zc(o,s,t-1/3)}return Ne.colorSpaceToWorking(this,r),this}setStyle(t,e=mn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s,o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){let s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=mn){let n=uf[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ki(t.r),this.g=Ki(t.g),this.b=Ki(t.b),this}copyLinearToSRGB(t){return this.r=_s(t.r),this.g=_s(t.g),this.b=_s(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=mn){return Ne.workingToColorSpace(Un.copy(this),t),Math.round(Re(Un.r*255,0,255))*65536+Math.round(Re(Un.g*255,0,255))*256+Math.round(Re(Un.b*255,0,255))}getHexString(t=mn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Ne.workingColorSpace){Ne.workingToColorSpace(Un.copy(this),e);let n=Un.r,r=Un.g,s=Un.b,o=Math.max(n,r,s),a=Math.min(n,r,s),l,c,u=(a+o)/2;if(a===o)l=0,c=0;else{let h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-n)/h+2;break;case s:l=(n-r)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=Ne.workingColorSpace){return Ne.workingToColorSpace(Un.copy(this),e),t.r=Un.r,t.g=Un.g,t.b=Un.b,t}getStyle(t=mn){Ne.workingToColorSpace(Un.copy(this),t);let e=Un.r,n=Un.g,r=Un.b;return t!==mn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(t,e,n){return this.getHSL(hr),this.setHSL(hr.h+t,hr.s+e,hr.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(hr),t.getHSL(na);let n=Mc(hr.h,na.h,e),r=Mc(hr.s,na.s,e),s=Mc(hr.l,na.l,e);return this.setHSL(n,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*r,this.g=s[1]*e+s[4]*n+s[7]*r,this.b=s[2]*e+s[5]*n+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Un=new Ht;Ht.NAMES=uf;var Vd=0,ji=class extends Qi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Vd++}),this.uuid=$i(),this.name="",this.type="Material",this.blending=Fr,this.side=ni,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ba,this.blendDst=Sa,this.blendEquation=dr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ht(0,0,0),this.blendAlpha=0,this.depthFunc=Br,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=$c,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Nr,this.stencilZFail=Nr,this.stencilZPass=Nr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Fr&&(n.blending=this.blending),this.side!==ni&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ba&&(n.blendSrc=this.blendSrc),this.blendDst!==Sa&&(n.blendDst=this.blendDst),this.blendEquation!==dr&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Br&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==$c&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Nr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Nr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Nr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){let o=[];for(let a in s){let l=s[a];delete l.metadata,o.push(l)}return o}if(e){let s=r(t.textures),o=r(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let r=e.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},Ie=class extends ji{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ht(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Di,this.combine=lh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var pn=new k,ia=new xt,Gd=0,Pe=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Gd++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Ta,this.updateRanges=[],this.gpuType=Fi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[n+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ia.fromBufferAttribute(this,e),ia.applyMatrix3(t),this.setXY(e,ia.x,ia.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)pn.fromBufferAttribute(this,e),pn.applyMatrix3(t),this.setXYZ(e,pn.x,pn.y,pn.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)pn.fromBufferAttribute(this,e),pn.applyMatrix4(t),this.setXYZ(e,pn.x,pn.y,pn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)pn.fromBufferAttribute(this,e),pn.applyNormalMatrix(t),this.setXYZ(e,pn.x,pn.y,pn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)pn.fromBufferAttribute(this,e),pn.transformDirection(t),this.setXYZ(e,pn.x,pn.y,pn.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Pi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Xe(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Pi(e,this.array)),e}setX(t,e){return this.normalized&&(e=Xe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Pi(e,this.array)),e}setY(t,e){return this.normalized&&(e=Xe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Pi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Xe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Pi(e,this.array)),e}setW(t,e){return this.normalized&&(e=Xe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Xe(e,this.array),n=Xe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,r){return t*=this.itemSize,this.normalized&&(e=Xe(e,this.array),n=Xe(n,this.array),r=Xe(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t*=this.itemSize,this.normalized&&(e=Xe(e,this.array),n=Xe(n,this.array),r=Xe(r,this.array),s=Xe(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ta&&(t.usage=this.usage),t}};var mo=class extends Pe{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var go=class extends Pe{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var ae=class extends Pe{constructor(t,e,n){super(new Float32Array(t),e,n)}},Wd=0,fi=new Fe,kc=new $n,us=new k,ei=new pr,no=new pr,Sn=new k,Le=class i extends Qi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Wd++}),this.uuid=$i(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(yh(t)?go:mo)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new be().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return fi.makeRotationFromQuaternion(t),this.applyMatrix4(fi),this}rotateX(t){return fi.makeRotationX(t),this.applyMatrix4(fi),this}rotateY(t){return fi.makeRotationY(t),this.applyMatrix4(fi),this}rotateZ(t){return fi.makeRotationZ(t),this.applyMatrix4(fi),this}translate(t,e,n){return fi.makeTranslation(t,e,n),this.applyMatrix4(fi),this}scale(t,e,n){return fi.makeScale(t,e,n),this.applyMatrix4(fi),this}lookAt(t){return kc.lookAt(t),kc.updateMatrix(),this.applyMatrix4(kc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(us).negate(),this.translate(us.x,us.y,us.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let r=0,s=t.length;r<s;r++){let o=t[r];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ae(n,3))}else{let n=Math.min(t.length,e.count);for(let r=0;r<n;r++){let s=t[r];e.setXYZ(r,s.x,s.y,s.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new pr);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,r=e.length;n<r;n++){let s=e[n];ei.setFromBufferAttribute(s),this.morphTargetsRelative?(Sn.addVectors(this.boundingBox.min,ei.min),this.boundingBox.expandByPoint(Sn),Sn.addVectors(this.boundingBox.max,ei.max),this.boundingBox.expandByPoint(Sn)):(this.boundingBox.expandByPoint(ei.min),this.boundingBox.expandByPoint(ei.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new zr);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(t){let n=this.boundingSphere.center;if(ei.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){let a=e[s];no.setFromBufferAttribute(a),this.morphTargetsRelative?(Sn.addVectors(ei.min,no.min),ei.expandByPoint(Sn),Sn.addVectors(ei.max,no.max),ei.expandByPoint(Sn)):(ei.expandByPoint(no.min),ei.expandByPoint(no.max))}ei.getCenter(n);let r=0;for(let s=0,o=t.count;s<o;s++)Sn.fromBufferAttribute(t,s),r=Math.max(r,n.distanceToSquared(Sn));if(e)for(let s=0,o=e.length;s<o;s++){let a=e[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Sn.fromBufferAttribute(a,c),l&&(us.fromBufferAttribute(t,c),Sn.add(us)),r=Math.max(r,n.distanceToSquared(Sn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,r=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Pe(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let T=0;T<n.count;T++)a[T]=new k,l[T]=new k;let c=new k,u=new k,h=new k,f=new xt,d=new xt,g=new xt,x=new k,p=new k;function m(T,b,S){c.fromBufferAttribute(n,T),u.fromBufferAttribute(n,b),h.fromBufferAttribute(n,S),f.fromBufferAttribute(s,T),d.fromBufferAttribute(s,b),g.fromBufferAttribute(s,S),u.sub(c),h.sub(c),d.sub(f),g.sub(f);let A=1/(d.x*g.y-g.x*d.y);isFinite(A)&&(x.copy(u).multiplyScalar(g.y).addScaledVector(h,-d.y).multiplyScalar(A),p.copy(h).multiplyScalar(d.x).addScaledVector(u,-g.x).multiplyScalar(A),a[T].add(x),a[b].add(x),a[S].add(x),l[T].add(p),l[b].add(p),l[S].add(p))}let _=this.groups;_.length===0&&(_=[{start:0,count:t.count}]);for(let T=0,b=_.length;T<b;++T){let S=_[T],A=S.start,I=S.count;for(let P=A,O=A+I;P<O;P+=3)m(t.getX(P+0),t.getX(P+1),t.getX(P+2))}let v=new k,y=new k,w=new k,M=new k;function E(T){w.fromBufferAttribute(r,T),M.copy(w);let b=a[T];v.copy(b),v.sub(w.multiplyScalar(w.dot(b))).normalize(),y.crossVectors(M,b);let A=y.dot(l[T])<0?-1:1;o.setXYZW(T,v.x,v.y,v.z,A)}for(let T=0,b=_.length;T<b;++T){let S=_[T],A=S.start,I=S.count;for(let P=A,O=A+I;P<O;P+=3)E(t.getX(P+0)),E(t.getX(P+1)),E(t.getX(P+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Pe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let r=new k,s=new k,o=new k,a=new k,l=new k,c=new k,u=new k,h=new k;if(t)for(let f=0,d=t.count;f<d;f+=3){let g=t.getX(f+0),x=t.getX(f+1),p=t.getX(f+2);r.fromBufferAttribute(e,g),s.fromBufferAttribute(e,x),o.fromBufferAttribute(e,p),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,p),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,d=e.count;f<d;f+=3)r.fromBufferAttribute(e,f+0),s.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Sn.fromBufferAttribute(t,e),Sn.normalize(),t.setXYZ(e,Sn.x,Sn.y,Sn.z)}toNonIndexed(){function t(a,l){let c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u),d=0,g=0;for(let x=0,p=l.length;x<p;x++){a.isInterleavedBufferAttribute?d=l[x]*a.data.stride+a.offset:d=l[x]*u;for(let m=0;m<u;m++)f[g++]=c[d++]}return new Pe(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,r=this.attributes;for(let a in r){let l=r[a],c=t(l,n);e.setAttribute(a,c)}let s=this.morphAttributes;for(let a in s){let l=[],c=s[a];for(let u=0,h=c.length;u<h;u++){let f=c[u],d=t(f,n);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let r={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){let d=c[h];u.push(d.toJSON(t.data))}u.length>0&&(r[l]=u,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let r=t.attributes;for(let c in r){let u=r[c];this.setAttribute(c,u.clone(e))}let s=t.morphAttributes;for(let c in s){let u=[],h=s[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,u=o.length;c<u;c++){let h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},fu=new Fe,Lr=new bs,ra=new zr,du=new k,sa=new k,oa=new k,aa=new k,Hc=new k,la=new k,pu=new k,ca=new k,le=class extends $n{constructor(t=new Le,e=new Ie){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){let n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(r,t);let a=this.morphTargetInfluences;if(s&&a){la.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let u=a[l],h=s[l];u!==0&&(Hc.fromBufferAttribute(h,t),o?la.addScaledVector(Hc,u):la.addScaledVector(Hc.sub(e),u))}e.add(la)}return e}raycast(t,e){let n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ra.copy(n.boundingSphere),ra.applyMatrix4(s),Lr.copy(t.ray).recast(t.near),!(ra.containsPoint(Lr.origin)===!1&&(Lr.intersectSphere(ra,du)===null||Lr.origin.distanceToSquared(du)>(t.far-t.near)**2))&&(fu.copy(s).invert(),Lr.copy(t.ray).applyMatrix4(fu),!(n.boundingBox!==null&&Lr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Lr)))}_computeIntersections(t,e,n){let r,s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,f=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=f.length;g<x;g++){let p=f[g],m=o[p.materialIndex],_=Math.max(p.start,d.start),v=Math.min(a.count,Math.min(p.start+p.count,d.start+d.count));for(let y=_,w=v;y<w;y+=3){let M=a.getX(y),E=a.getX(y+1),T=a.getX(y+2);r=ha(this,m,t,n,c,u,h,M,E,T),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=p.materialIndex,e.push(r))}}else{let g=Math.max(0,d.start),x=Math.min(a.count,d.start+d.count);for(let p=g,m=x;p<m;p+=3){let _=a.getX(p),v=a.getX(p+1),y=a.getX(p+2);r=ha(this,o,t,n,c,u,h,_,v,y),r&&(r.faceIndex=Math.floor(p/3),e.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,x=f.length;g<x;g++){let p=f[g],m=o[p.materialIndex],_=Math.max(p.start,d.start),v=Math.min(l.count,Math.min(p.start+p.count,d.start+d.count));for(let y=_,w=v;y<w;y+=3){let M=y,E=y+1,T=y+2;r=ha(this,m,t,n,c,u,h,M,E,T),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=p.materialIndex,e.push(r))}}else{let g=Math.max(0,d.start),x=Math.min(l.count,d.start+d.count);for(let p=g,m=x;p<m;p+=3){let _=p,v=p+1,y=p+2;r=ha(this,o,t,n,c,u,h,_,v,y),r&&(r.faceIndex=Math.floor(p/3),e.push(r))}}}};function Xd(i,t,e,n,r,s,o,a){let l;if(t.side===Pn?l=n.intersectTriangle(o,s,r,!0,a):l=n.intersectTriangle(r,s,o,t.side===ni,a),l===null)return null;ca.copy(a),ca.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(ca);return c<e.near||c>e.far?null:{distance:c,point:ca.clone(),object:i}}function ha(i,t,e,n,r,s,o,a,l,c){i.getVertexPosition(a,sa),i.getVertexPosition(l,oa),i.getVertexPosition(c,aa);let u=Xd(i,t,e,n,sa,oa,aa,pu);if(u){let h=new k;Ji.getBarycoord(pu,sa,oa,aa,h),r&&(u.uv=Ji.getInterpolatedAttribute(r,a,l,c,h,new xt)),s&&(u.uv1=Ji.getInterpolatedAttribute(s,a,l,c,h,new xt)),o&&(u.normal=Ji.getInterpolatedAttribute(o,a,l,c,h,new k),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new k,materialIndex:0};Ji.getNormal(sa,oa,aa,f.normal),u.face=f,u.barycoord=h}return u}var Ue=class i extends Le{constructor(t=1,e=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};let a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);let l=[],c=[],u=[],h=[],f=0,d=0;g("z","y","x",-1,-1,n,e,t,o,s,0),g("z","y","x",1,-1,n,e,-t,o,s,1),g("x","z","y",1,1,t,n,e,r,o,2),g("x","z","y",1,-1,t,n,-e,r,o,3),g("x","y","z",1,-1,t,e,n,r,s,4),g("x","y","z",-1,-1,t,e,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new ae(c,3)),this.setAttribute("normal",new ae(u,3)),this.setAttribute("uv",new ae(h,2));function g(x,p,m,_,v,y,w,M,E,T,b){let S=y/E,A=w/T,I=y/2,P=w/2,O=M/2,z=E+1,F=T+1,W=0,q=0,K=new k;for(let rt=0;rt<F;rt++){let vt=rt*A-P;for(let Gt=0;Gt<z;Gt++){let ie=Gt*S-I;K[x]=ie*_,K[p]=vt*v,K[m]=O,c.push(K.x,K.y,K.z),K[x]=0,K[p]=0,K[m]=M>0?1:-1,u.push(K.x,K.y,K.z),h.push(Gt/E),h.push(1-rt/T),W+=1}}for(let rt=0;rt<T;rt++)for(let vt=0;vt<E;vt++){let Gt=f+vt+z*rt,ie=f+vt+z*(rt+1),de=f+(vt+1)+z*(rt+1),_e=f+(vt+1)+z*rt;l.push(Gt,ie,_e),l.push(ie,de,_e),q+=6}a.addGroup(d,q,b),d+=q,f+=W}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function qr(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let r=i[e][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=r.clone():Array.isArray(r)?t[e][n]=r.slice():t[e][n]=r}}return t}function Fn(i){let t={};for(let e=0;e<i.length;e++){let n=qr(i[e]);for(let r in n)t[r]=n[r]}return t}function qd(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Mh(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ne.workingColorSpace}var Bn={clone:qr,merge:Fn},Yd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Zd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,He=class extends ji{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Yd,this.fragmentShader=Zd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=qr(t.uniforms),this.uniformsGroups=qd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let r in this.uniforms){let o=this.uniforms[r].value;o&&o.isTexture?e.uniforms[r]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[r]={type:"m4",value:o.toArray()}:e.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},xo=class extends $n{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Fe,this.projectionMatrix=new Fe,this.projectionMatrixInverse=new Fe,this.coordinateSystem=Si,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},ur=new k,mu=new xt,gu=new xt,En=class extends xo{constructor(t=50,e=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Aa*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(yc*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Aa*2*Math.atan(Math.tan(yc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ur.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ur.x,ur.y).multiplyScalar(-t/ur.z),ur.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ur.x,ur.y).multiplyScalar(-t/ur.z)}getViewSize(t,e){return this.getViewBounds(t,mu,gu),e.subVectors(gu,mu)}setViewOffset(t,e,n,r,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(yc*.5*this.fov)/this.zoom,n=2*e,r=this.aspect*n,s=-.5*r,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,e-=o.offsetY*n/c,r*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},fs=-90,ds=1,Ia=class extends $n{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new En(fs,ds,t,e);r.layers=this.layers,this.add(r);let s=new En(fs,ds,t,e);s.layers=this.layers,this.add(s);let o=new En(fs,ds,t,e);o.layers=this.layers,this.add(o);let a=new En(fs,ds,t,e);a.layers=this.layers,this.add(a);let l=new En(fs,ds,t,e);l.layers=this.layers,this.add(l);let c=new En(fs,ds,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,r,s,o,a,l]=e;for(let c of e)this.remove(c);if(t===Si)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===uo)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,l,c,u]=this.children,h=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,r),t.render(e,s),t.setRenderTarget(n,1,r),t.render(e,o),t.setRenderTarget(n,2,r),t.render(e,a),t.setRenderTarget(n,3,r),t.render(e,l),t.setRenderTarget(n,4,r),t.render(e,c),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,r),t.render(e,u),t.setRenderTarget(h,f,d),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},_o=class extends Vn{constructor(t=[],e=Wr,n,r,s,o,a,l,c,u){super(t,e,n,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Da=class extends wn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},r=[n,n,n,n,n,n];this.texture=new _o(r),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Ue(5,5,5),s=new He({name:"CubemapFromEquirect",uniforms:qr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Pn,blending:Ai});s.uniforms.tEquirect.value=e;let o=new le(r,s),a=e.minFilter;return e.minFilter===_r&&(e.minFilter=wi),new Ia(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,r=!0){let s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,r);t.setRenderTarget(s)}},Rn=class extends $n{constructor(){super(),this.isGroup=!0,this.type="Group"}},Jd={type:"move"},Es=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Rn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Rn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Rn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let r=null,s=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let x of t.hand.values()){let p=e.getJointPose(x,n),m=this._getHandJoint(c,x);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}let u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=e.getPose(t.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Jd)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Rn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},vo=class i{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ht(t),this.density=e}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var yo=class extends $n{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Di,this.environmentIntensity=1,this.environmentRotation=new Di,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},Mo=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Ta,this.updateRanges=[],this.version=0,this.uuid=$i()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let r=0,s=this.stride;r<s;r++)this.array[t+r]=e.array[n+r];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=$i()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=$i()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Hn=new k,ws=class i{constructor(t,e,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Hn.fromBufferAttribute(this,e),Hn.applyMatrix4(t),this.setXYZ(e,Hn.x,Hn.y,Hn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Hn.fromBufferAttribute(this,e),Hn.applyNormalMatrix(t),this.setXYZ(e,Hn.x,Hn.y,Hn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Hn.fromBufferAttribute(this,e),Hn.transformDirection(t),this.setXYZ(e,Hn.x,Hn.y,Hn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Pi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Xe(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=Xe(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Xe(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Xe(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Xe(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Pi(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Pi(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Pi(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Pi(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Xe(e,this.array),n=Xe(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Xe(e,this.array),n=Xe(n,this.array),r=Xe(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Xe(e,this.array),n=Xe(n,this.array),r=Xe(r,this.array),s=Xe(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=r,this.data.array[t+3]=s,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[r+s])}return new Pe(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},ii=class extends ji{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ht(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},ps,io=new k,ms=new k,gs=new k,xs=new xt,ro=new xt,ff=new Fe,ua=new k,so=new k,fa=new k,xu=new xt,Vc=new xt,_u=new xt,pi=class extends $n{constructor(t=new ii){if(super(),this.isSprite=!0,this.type="Sprite",ps===void 0){ps=new Le;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Mo(e,5);ps.setIndex([0,1,2,0,2,3]),ps.setAttribute("position",new ws(n,3,0,!1)),ps.setAttribute("uv",new ws(n,2,3,!1))}this.geometry=ps,this.material=t,this.center=new xt(.5,.5),this.count=1}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ms.setFromMatrixScale(this.matrixWorld),ff.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),gs.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ms.multiplyScalar(-gs.z);let n=this.material.rotation,r,s;n!==0&&(s=Math.cos(n),r=Math.sin(n));let o=this.center;da(ua.set(-.5,-.5,0),gs,o,ms,r,s),da(so.set(.5,-.5,0),gs,o,ms,r,s),da(fa.set(.5,.5,0),gs,o,ms,r,s),xu.set(0,0),Vc.set(1,0),_u.set(1,1);let a=t.ray.intersectTriangle(ua,so,fa,!1,io);if(a===null&&(da(so.set(-.5,.5,0),gs,o,ms,r,s),Vc.set(0,1),a=t.ray.intersectTriangle(ua,fa,so,!1,io),a===null))return;let l=t.ray.origin.distanceTo(io);l<t.near||l>t.far||e.push({distance:l,point:io.clone(),uv:Ji.getInterpolation(io,ua,so,fa,xu,Vc,_u,new xt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function da(i,t,e,n,r,s){xs.subVectors(i,e).addScalar(.5).multiply(n),r!==void 0?(ro.x=s*xs.x-r*xs.y,ro.y=r*xs.x+s*xs.y):ro.copy(xs),i.copy(t),i.x+=ro.x,i.y+=ro.y,i.applyMatrix4(ff)}var Ts=class extends Vn{constructor(t=null,e=1,n=1,r,s,o,a,l,c=Jn,u=Jn,h,f){super(null,o,a,l,c,u,r,s,h,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Gc=new k,$d=new k,Kd=new be,Zn=class{constructor(t=new k(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,r){return this.normal.set(t,e,n),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let r=Gc.subVectors(n,e).cross($d.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(Gc),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Kd.getNormalMatrix(t),r=this.coplanarPoint(Gc).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ur=new zr,Qd=new xt(.5,.5),pa=new k,bo=class{constructor(t=new Zn,e=new Zn,n=new Zn,r=new Zn,s=new Zn,o=new Zn){this.planes=[t,e,n,r,s,o]}set(t,e,n,r,s,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Si,n=!1){let r=this.planes,s=t.elements,o=s[0],a=s[1],l=s[2],c=s[3],u=s[4],h=s[5],f=s[6],d=s[7],g=s[8],x=s[9],p=s[10],m=s[11],_=s[12],v=s[13],y=s[14],w=s[15];if(r[0].setComponents(c-o,d-u,m-g,w-_).normalize(),r[1].setComponents(c+o,d+u,m+g,w+_).normalize(),r[2].setComponents(c+a,d+h,m+x,w+v).normalize(),r[3].setComponents(c-a,d-h,m-x,w-v).normalize(),n)r[4].setComponents(l,f,p,y).normalize(),r[5].setComponents(c-l,d-f,m-p,w-y).normalize();else if(r[4].setComponents(c-l,d-f,m-p,w-y).normalize(),e===Si)r[5].setComponents(c+l,d+f,m+p,w+y).normalize();else if(e===uo)r[5].setComponents(l,f,p,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ur.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ur.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ur)}intersectsSprite(t){Ur.center.set(0,0,0);let e=Qd.distanceTo(t.center);return Ur.radius=.7071067811865476+e,Ur.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ur)}intersectsSphere(t){let e=this.planes,n=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let r=e[n];if(pa.x=r.normal.x>0?t.max.x:t.min.x,pa.y=r.normal.y>0?t.max.y:t.min.y,pa.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(pa)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var La=class extends ji{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ht(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},vu=new Fe,Kc=new bs,ma=new zr,ga=new k,As=class extends $n{constructor(t=new Le,e=new La){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,r=this.matrixWorld,s=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ma.copy(n.boundingSphere),ma.applyMatrix4(r),ma.radius+=s,t.ray.intersectsSphere(ma)===!1)return;vu.copy(r).invert(),Kc.copy(t.ray).applyMatrix4(vu);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){let f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let g=f,x=d;g<x;g++){let p=c.getX(g);ga.fromBufferAttribute(h,p),yu(ga,p,l,r,t,e,this)}}else{let f=Math.max(0,o.start),d=Math.min(h.count,o.start+o.count);for(let g=f,x=d;g<x;g++)ga.fromBufferAttribute(h,g),yu(ga,g,l,r,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function yu(i,t,e,n,r,s,o){let a=Kc.distanceSqToPoint(i);if(a<e){let l=new k;Kc.closestPointToPoint(i,l),l.applyMatrix4(n);let c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var mi=class extends Vn{constructor(t,e,n,r,s,o,a,l,c){super(t,e,n,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},So=class extends Vn{constructor(t,e,n=vr,r,s,o,a=Jn,l=Jn,c,u=vs,h=1){if(u!==vs&&u!==Ns)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:t,height:e,depth:h};super(f,r,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Ms(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Eo=class extends Vn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}};var Cn=class i extends Le{constructor(t=1,e=32,n=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:r},e=Math.max(3,e);let s=[],o=[],a=[],l=[],c=new k,u=new xt;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let h=0,f=3;h<=e;h++,f+=3){let d=n+h/e*r;c.x=t*Math.cos(d),c.y=t*Math.sin(d),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[f]/t+1)/2,u.y=(o[f+1]/t+1)/2,l.push(u.x,u.y)}for(let h=1;h<=e;h++)s.push(h,h+1,0);this.setIndex(s),this.setAttribute("position",new ae(o,3)),this.setAttribute("normal",new ae(a,3)),this.setAttribute("uv",new ae(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Ce=class i extends Le{constructor(t=1,e=1,n=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};let c=this;r=Math.floor(r),s=Math.floor(s);let u=[],h=[],f=[],d=[],g=0,x=[],p=n/2,m=0;_(),o===!1&&(t>0&&v(!0),e>0&&v(!1)),this.setIndex(u),this.setAttribute("position",new ae(h,3)),this.setAttribute("normal",new ae(f,3)),this.setAttribute("uv",new ae(d,2));function _(){let y=new k,w=new k,M=0,E=(e-t)/n;for(let T=0;T<=s;T++){let b=[],S=T/s,A=S*(e-t)+t;for(let I=0;I<=r;I++){let P=I/r,O=P*l+a,z=Math.sin(O),F=Math.cos(O);w.x=A*z,w.y=-S*n+p,w.z=A*F,h.push(w.x,w.y,w.z),y.set(z,E,F).normalize(),f.push(y.x,y.y,y.z),d.push(P,1-S),b.push(g++)}x.push(b)}for(let T=0;T<r;T++)for(let b=0;b<s;b++){let S=x[b][T],A=x[b+1][T],I=x[b+1][T+1],P=x[b][T+1];(t>0||b!==0)&&(u.push(S,A,P),M+=3),(e>0||b!==s-1)&&(u.push(A,I,P),M+=3)}c.addGroup(m,M,0),m+=M}function v(y){let w=g,M=new xt,E=new k,T=0,b=y===!0?t:e,S=y===!0?1:-1;for(let I=1;I<=r;I++)h.push(0,p*S,0),f.push(0,S,0),d.push(.5,.5),g++;let A=g;for(let I=0;I<=r;I++){let O=I/r*l+a,z=Math.cos(O),F=Math.sin(O);E.x=b*F,E.y=p*S,E.z=b*z,h.push(E.x,E.y,E.z),f.push(0,S,0),M.x=z*.5+.5,M.y=F*.5*S+.5,d.push(M.x,M.y),g++}for(let I=0;I<r;I++){let P=w+I,O=A+I;y===!0?u.push(O,O+1,P):u.push(O+1,O,P),T+=3}c.addGroup(m,T,y===!0?1:2),m+=T}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Nn=class i extends Ce{constructor(t=1,e=1,n=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,t,e,n,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},wo=class i extends Le{constructor(t=[],e=[],n=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:r};let s=[],o=[];a(r),c(n),u(),this.setAttribute("position",new ae(s,3)),this.setAttribute("normal",new ae(s.slice(),3)),this.setAttribute("uv",new ae(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(_){let v=new k,y=new k,w=new k;for(let M=0;M<e.length;M+=3)d(e[M+0],v),d(e[M+1],y),d(e[M+2],w),l(v,y,w,_)}function l(_,v,y,w){let M=w+1,E=[];for(let T=0;T<=M;T++){E[T]=[];let b=_.clone().lerp(y,T/M),S=v.clone().lerp(y,T/M),A=M-T;for(let I=0;I<=A;I++)I===0&&T===M?E[T][I]=b:E[T][I]=b.clone().lerp(S,I/A)}for(let T=0;T<M;T++)for(let b=0;b<2*(M-T)-1;b++){let S=Math.floor(b/2);b%2===0?(f(E[T][S+1]),f(E[T+1][S]),f(E[T][S])):(f(E[T][S+1]),f(E[T+1][S+1]),f(E[T+1][S]))}}function c(_){let v=new k;for(let y=0;y<s.length;y+=3)v.x=s[y+0],v.y=s[y+1],v.z=s[y+2],v.normalize().multiplyScalar(_),s[y+0]=v.x,s[y+1]=v.y,s[y+2]=v.z}function u(){let _=new k;for(let v=0;v<s.length;v+=3){_.x=s[v+0],_.y=s[v+1],_.z=s[v+2];let y=p(_)/2/Math.PI+.5,w=m(_)/Math.PI+.5;o.push(y,1-w)}g(),h()}function h(){for(let _=0;_<o.length;_+=6){let v=o[_+0],y=o[_+2],w=o[_+4],M=Math.max(v,y,w),E=Math.min(v,y,w);M>.9&&E<.1&&(v<.2&&(o[_+0]+=1),y<.2&&(o[_+2]+=1),w<.2&&(o[_+4]+=1))}}function f(_){s.push(_.x,_.y,_.z)}function d(_,v){let y=_*3;v.x=t[y+0],v.y=t[y+1],v.z=t[y+2]}function g(){let _=new k,v=new k,y=new k,w=new k,M=new xt,E=new xt,T=new xt;for(let b=0,S=0;b<s.length;b+=9,S+=6){_.set(s[b+0],s[b+1],s[b+2]),v.set(s[b+3],s[b+4],s[b+5]),y.set(s[b+6],s[b+7],s[b+8]),M.set(o[S+0],o[S+1]),E.set(o[S+2],o[S+3]),T.set(o[S+4],o[S+5]),w.copy(_).add(v).add(y).divideScalar(3);let A=p(w);x(M,S+0,_,A),x(E,S+2,v,A),x(T,S+4,y,A)}}function x(_,v,y,w){w<0&&_.x===1&&(o[v]=_.x-1),y.x===0&&y.z===0&&(o[v]=w/2/Math.PI+.5)}function p(_){return Math.atan2(_.z,-_.x)}function m(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.details)}};var ri=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,r=this.getPoint(0),s=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),s+=n.distanceTo(r),e.push(s),r=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),r=0,s=n.length,o;e?o=e:o=t*n[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=n[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,n[r]===o)return r/(s-1);let u=n[r],f=n[r+1]-u,d=(o-u)/f;return(r+d)/(s-1)}getTangent(t,e){let r=t-1e-4,s=t+1e-4;r<0&&(r=0),s>1&&(s=1);let o=this.getPoint(r),a=this.getPoint(s),l=e||(o.isVector2?new xt:new k);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new k,r=[],s=[],o=[],a=new k,l=new Fe;for(let d=0;d<=t;d++){let g=d/t;r[d]=this.getTangentAt(g,new k)}s[0]=new k,o[0]=new k;let c=Number.MAX_VALUE,u=Math.abs(r[0].x),h=Math.abs(r[0].y),f=Math.abs(r[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let d=1;d<=t;d++){if(s[d]=s[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(r[d-1],r[d]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(Re(r[d-1].dot(r[d]),-1,1));s[d].applyMatrix4(l.makeRotationAxis(a,g))}o[d].crossVectors(r[d],s[d])}if(e===!0){let d=Math.acos(Re(s[0].dot(s[t]),-1,1));d/=t,r[0].dot(a.crossVectors(s[0],s[t]))>0&&(d=-d);for(let g=1;g<=t;g++)s[g].applyMatrix4(l.makeRotationAxis(r[g],d*g)),o[g].crossVectors(r[g],s[g])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Rs=class extends ri{constructor(t=0,e=0,n=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new xt){let n=e,r=Math.PI*2,s=this.aEndAngle-this.aStartAngle,o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);let a=this.aStartAngle+t*s,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*u-d*h+this.aX,c=f*h+d*u+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Ua=class extends Rs{constructor(t,e,n,r,s,o){super(t,e,n,n,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}};function bh(){let i=0,t=0,e=0,n=0;function r(s,o,a,l){i=s,t=a,e=-3*s+3*o-2*a-l,n=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){r(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,u,h){let f=(o-s)/c-(a-s)/(c+u)+(a-o)/u,d=(a-o)/u-(l-o)/(u+h)+(l-a)/h;f*=u,d*=u,r(o,a,f,d)},calc:function(s){let o=s*s,a=o*s;return i+t*s+e*o+n*a}}}var xa=new k,Wc=new bh,Xc=new bh,qc=new bh,Na=class extends ri{constructor(t=[],e=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=r}getPoint(t,e=new k){let n=e,r=this.points,s=r.length,o=(s-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,u;this.closed||a>0?c=r[(a-1)%s]:(xa.subVectors(r[0],r[1]).add(r[0]),c=xa);let h=r[a%s],f=r[(a+1)%s];if(this.closed||a+2<s?u=r[(a+2)%s]:(xa.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=xa),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(h),d),x=Math.pow(h.distanceToSquared(f),d),p=Math.pow(f.distanceToSquared(u),d);x<1e-4&&(x=1),g<1e-4&&(g=x),p<1e-4&&(p=x),Wc.initNonuniformCatmullRom(c.x,h.x,f.x,u.x,g,x,p),Xc.initNonuniformCatmullRom(c.y,h.y,f.y,u.y,g,x,p),qc.initNonuniformCatmullRom(c.z,h.z,f.z,u.z,g,x,p)}else this.curveType==="catmullrom"&&(Wc.initCatmullRom(c.x,h.x,f.x,u.x,this.tension),Xc.initCatmullRom(c.y,h.y,f.y,u.y,this.tension),qc.initCatmullRom(c.z,h.z,f.z,u.z,this.tension));return n.set(Wc.calc(l),Xc.calc(l),qc.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let r=t.points[e];this.points.push(r.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let r=this.points[e];t.points.push(r.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let r=t.points[e];this.points.push(new k().fromArray(r))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Mu(i,t,e,n,r){let s=(n-t)*.5,o=(r-e)*.5,a=i*i,l=i*a;return(2*e-2*n+s+o)*l+(-3*e+3*n-2*s-o)*a+s*i+e}function jd(i,t){let e=1-i;return e*e*t}function t0(i,t){return 2*(1-i)*i*t}function e0(i,t){return i*i*t}function ao(i,t,e,n){return jd(i,t)+t0(i,e)+e0(i,n)}function n0(i,t){let e=1-i;return e*e*e*t}function i0(i,t){let e=1-i;return 3*e*e*i*t}function r0(i,t){return 3*(1-i)*i*i*t}function s0(i,t){return i*i*i*t}function lo(i,t,e,n,r){return n0(i,t)+i0(i,e)+r0(i,n)+s0(i,r)}var To=class extends ri{constructor(t=new xt,e=new xt,n=new xt,r=new xt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=r}getPoint(t,e=new xt){let n=e,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(lo(t,r.x,s.x,o.x,a.x),lo(t,r.y,s.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Fa=class extends ri{constructor(t=new k,e=new k,n=new k,r=new k){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=r}getPoint(t,e=new k){let n=e,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(lo(t,r.x,s.x,o.x,a.x),lo(t,r.y,s.y,o.y,a.y),lo(t,r.z,s.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Ao=class extends ri{constructor(t=new xt,e=new xt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new xt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new xt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ba=class extends ri{constructor(t=new k,e=new k){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new k){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new k){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ro=class extends ri{constructor(t=new xt,e=new xt,n=new xt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new xt){let n=e,r=this.v0,s=this.v1,o=this.v2;return n.set(ao(t,r.x,s.x,o.x),ao(t,r.y,s.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Oa=class extends ri{constructor(t=new k,e=new k,n=new k){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new k){let n=e,r=this.v0,s=this.v1,o=this.v2;return n.set(ao(t,r.x,s.x,o.x),ao(t,r.y,s.y,o.y),ao(t,r.z,s.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Co=class extends ri{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new xt){let n=e,r=this.points,s=(r.length-1)*t,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],c=r[o],u=r[o>r.length-2?r.length-1:o+1],h=r[o>r.length-3?r.length-1:o+2];return n.set(Mu(a,l.x,c.x,u.x,h.x),Mu(a,l.y,c.y,u.y,h.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let r=t.points[e];this.points.push(r.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let r=this.points[e];t.points.push(r.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let r=t.points[e];this.points.push(new xt().fromArray(r))}return this}},Qc=Object.freeze({__proto__:null,ArcCurve:Ua,CatmullRomCurve3:Na,CubicBezierCurve:To,CubicBezierCurve3:Fa,EllipseCurve:Rs,LineCurve:Ao,LineCurve3:Ba,QuadraticBezierCurve:Ro,QuadraticBezierCurve3:Oa,SplineCurve:Co}),za=class extends ri{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Qc[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),r=this.getCurveLengths(),s=0;for(;s<r.length;){if(r[s]>=n){let o=r[s]-n,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}s++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,r=this.curves.length;n<r;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let r=0,s=this.curves;r<s.length;r++){let o=s[r],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){let u=l[c];n&&n.equals(u)||(e.push(u),n=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let r=t.curves[e];this.curves.push(r.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let r=this.curves[e];t.curves.push(r.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let r=t.curves[e];this.curves.push(new Qc[r.type]().fromJSON(r))}return this}},Li=class extends za{constructor(t){super(),this.type="Path",this.currentPoint=new xt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Ao(this.currentPoint.clone(),new xt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,r){let s=new Ro(this.currentPoint.clone(),new xt(t,e),new xt(n,r));return this.curves.push(s),this.currentPoint.set(n,r),this}bezierCurveTo(t,e,n,r,s,o){let a=new To(this.currentPoint.clone(),new xt(t,e),new xt(n,r),new xt(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Co(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,r,s,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,r,s,o),this}absarc(t,e,n,r,s,o){return this.absellipse(t,e,n,n,r,s,o),this}ellipse(t,e,n,r,s,o,a,l){let c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+c,e+u,n,r,s,o,a,l),this}absellipse(t,e,n,r,s,o,a,l){let c=new Rs(t,e,n,r,s,o,a,l);if(this.curves.length>0){let h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);let u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Tn=class extends Li{constructor(t){super(t),this.uuid=$i(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,r=this.holes.length;n<r;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let r=t.holes[e];this.holes.push(r.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let r=this.holes[e];t.holes.push(r.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let r=t.holes[e];this.holes.push(new Li().fromJSON(r))}return this}};function o0(i,t,e=2){let n=t&&t.length,r=n?t[0]*e:i.length,s=df(i,0,r,e,!0),o=[];if(!s||s.next===s.prev)return o;let a,l,c;if(n&&(s=u0(i,t,s,e)),i.length>80*e){a=1/0,l=1/0;let u=-1/0,h=-1/0;for(let f=e;f<r;f+=e){let d=i[f],g=i[f+1];d<a&&(a=d),g<l&&(l=g),d>u&&(u=d),g>h&&(h=g)}c=Math.max(u-a,h-l),c=c!==0?32767/c:0}return Po(s,o,e,a,l,c,0),o}function df(i,t,e,n,r){let s;if(r===b0(i,t,e,n)>0)for(let o=t;o<e;o+=n)s=bu(o/n|0,i[o],i[o+1],s);else for(let o=e-n;o>=t;o-=n)s=bu(o/n|0,i[o],i[o+1],s);return s&&Cs(s,s.next)&&(Do(s),s=s.next),s}function kr(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Cs(e,e.next)||ln(e.prev,e,e.next)===0)){if(Do(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Po(i,t,e,n,r,s,o){if(!i)return;!o&&s&&g0(i,n,r,s);let a=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(s?l0(i,n,r,s):a0(i)){t.push(l.i,i.i,c.i),Do(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=c0(kr(i),t),Po(i,t,e,n,r,s,2)):o===2&&h0(i,t,e,n,r,s):Po(kr(i),t,e,n,r,s,1);break}}}function a0(i){let t=i.prev,e=i,n=i.next;if(ln(t,e,n)>=0)return!1;let r=t.x,s=e.x,o=n.x,a=t.y,l=e.y,c=n.y,u=Math.min(r,s,o),h=Math.min(a,l,c),f=Math.max(r,s,o),d=Math.max(a,l,c),g=n.next;for(;g!==t;){if(g.x>=u&&g.x<=f&&g.y>=h&&g.y<=d&&oo(r,a,s,l,o,c,g.x,g.y)&&ln(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function l0(i,t,e,n){let r=i.prev,s=i,o=i.next;if(ln(r,s,o)>=0)return!1;let a=r.x,l=s.x,c=o.x,u=r.y,h=s.y,f=o.y,d=Math.min(a,l,c),g=Math.min(u,h,f),x=Math.max(a,l,c),p=Math.max(u,h,f),m=jc(d,g,t,e,n),_=jc(x,p,t,e,n),v=i.prevZ,y=i.nextZ;for(;v&&v.z>=m&&y&&y.z<=_;){if(v.x>=d&&v.x<=x&&v.y>=g&&v.y<=p&&v!==r&&v!==o&&oo(a,u,l,h,c,f,v.x,v.y)&&ln(v.prev,v,v.next)>=0||(v=v.prevZ,y.x>=d&&y.x<=x&&y.y>=g&&y.y<=p&&y!==r&&y!==o&&oo(a,u,l,h,c,f,y.x,y.y)&&ln(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;v&&v.z>=m;){if(v.x>=d&&v.x<=x&&v.y>=g&&v.y<=p&&v!==r&&v!==o&&oo(a,u,l,h,c,f,v.x,v.y)&&ln(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;y&&y.z<=_;){if(y.x>=d&&y.x<=x&&y.y>=g&&y.y<=p&&y!==r&&y!==o&&oo(a,u,l,h,c,f,y.x,y.y)&&ln(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function c0(i,t){let e=i;do{let n=e.prev,r=e.next.next;!Cs(n,r)&&mf(n,e,e.next,r)&&Io(n,r)&&Io(r,n)&&(t.push(n.i,e.i,r.i),Do(e),Do(e.next),e=i=r),e=e.next}while(e!==i);return kr(e)}function h0(i,t,e,n,r,s){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&v0(o,a)){let l=gf(o,a);o=kr(o,o.next),l=kr(l,l.next),Po(o,t,e,n,r,s,0),Po(l,t,e,n,r,s,0);return}a=a.next}o=o.next}while(o!==i)}function u0(i,t,e,n){let r=[];for(let s=0,o=t.length;s<o;s++){let a=t[s]*n,l=s<o-1?t[s+1]*n:i.length,c=df(i,a,l,n,!1);c===c.next&&(c.steiner=!0),r.push(_0(c))}r.sort(f0);for(let s=0;s<r.length;s++)e=d0(r[s],e);return e}function f0(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),r=(t.next.y-t.y)/(t.next.x-t.x);e=n-r}return e}function d0(i,t){let e=p0(i,t);if(!e)return t;let n=gf(e,i);return kr(n,n.next),kr(e,e.next)}function p0(i,t){let e=t,n=i.x,r=i.y,s=-1/0,o;if(Cs(i,e))return e;do{if(Cs(i,e.next))return e.next;if(r<=e.y&&r>=e.next.y&&e.next.y!==e.y){let h=e.x+(r-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(h<=n&&h>s&&(s=h,o=e.x<e.next.x?e:e.next,h===n))return o}e=e.next}while(e!==t);if(!o)return null;let a=o,l=o.x,c=o.y,u=1/0;e=o;do{if(n>=e.x&&e.x>=l&&n!==e.x&&pf(r<c?n:s,r,l,c,r<c?s:n,r,e.x,e.y)){let h=Math.abs(r-e.y)/(n-e.x);Io(e,i)&&(h<u||h===u&&(e.x>o.x||e.x===o.x&&m0(o,e)))&&(o=e,u=h)}e=e.next}while(e!==a);return o}function m0(i,t){return ln(i.prev,i,t.prev)<0&&ln(t.next,i,i.next)<0}function g0(i,t,e,n){let r=i;do r.z===0&&(r.z=jc(r.x,r.y,t,e,n)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==i);r.prevZ.nextZ=null,r.prevZ=null,x0(r)}function x0(i){let t,e=1;do{let n=i,r;i=null;let s=null;for(t=0;n;){t++;let o=n,a=0;for(let c=0;c<e&&(a++,o=o.nextZ,!!o);c++);let l=e;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(r=n,n=n.nextZ,a--):(r=o,o=o.nextZ,l--),s?s.nextZ=r:i=r,r.prevZ=s,s=r;n=o}s.nextZ=null,e*=2}while(t>1);return i}function jc(i,t,e,n,r){return i=(i-e)*r|0,t=(t-n)*r|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function _0(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function pf(i,t,e,n,r,s,o,a){return(r-o)*(t-a)>=(i-o)*(s-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(s-a)>=(r-o)*(n-a)}function oo(i,t,e,n,r,s,o,a){return!(i===o&&t===a)&&pf(i,t,e,n,r,s,o,a)}function v0(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!y0(i,t)&&(Io(i,t)&&Io(t,i)&&M0(i,t)&&(ln(i.prev,i,t.prev)||ln(i,t.prev,t))||Cs(i,t)&&ln(i.prev,i,i.next)>0&&ln(t.prev,t,t.next)>0)}function ln(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Cs(i,t){return i.x===t.x&&i.y===t.y}function mf(i,t,e,n){let r=va(ln(i,t,e)),s=va(ln(i,t,n)),o=va(ln(e,n,i)),a=va(ln(e,n,t));return!!(r!==s&&o!==a||r===0&&_a(i,e,t)||s===0&&_a(i,n,t)||o===0&&_a(e,i,n)||a===0&&_a(e,t,n))}function _a(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function va(i){return i>0?1:i<0?-1:0}function y0(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&mf(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Io(i,t){return ln(i.prev,i,i.next)<0?ln(i,t,i.next)>=0&&ln(i,i.prev,t)>=0:ln(i,t,i.prev)<0||ln(i,i.next,t)<0}function M0(i,t){let e=i,n=!1,r=(i.x+t.x)/2,s=(i.y+t.y)/2;do e.y>s!=e.next.y>s&&e.next.y!==e.y&&r<(e.next.x-e.x)*(s-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function gf(i,t){let e=th(i.i,i.x,i.y),n=th(t.i,t.x,t.y),r=i.next,s=t.prev;return i.next=t,t.prev=i,e.next=r,r.prev=e,n.next=e,e.prev=n,s.next=n,n.prev=s,n}function bu(i,t,e,n){let r=th(i,t,e);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function Do(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function th(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function b0(i,t,e,n){let r=0;for(let s=t,o=e-n;s<e;s+=n)r+=(i[o]-i[s])*(i[s+1]+i[o+1]),o=s;return r}var eh=class{static triangulate(t,e,n=2){return o0(t,e,n)}},Ii=class i{static area(t){let e=t.length,n=0;for(let r=e-1,s=0;s<e;r=s++)n+=t[r].x*t[s].y-t[s].x*t[r].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],r=[],s=[];Su(t),Eu(n,t);let o=t.length;e.forEach(Su);for(let l=0;l<e.length;l++)r.push(o),o+=e[l].length,Eu(n,e[l]);let a=eh.triangulate(n,r);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}};function Su(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Eu(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var Ti=class i extends Le{constructor(t=new Tn([new xt(.5,.5),new xt(-.5,.5),new xt(-.5,-.5),new xt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,r=[],s=[];for(let a=0,l=t.length;a<l;a++){let c=t[a];o(c)}this.setAttribute("position",new ae(r,3)),this.setAttribute("uv",new ae(s,2)),this.computeVertexNormals();function o(a){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,h=e.depth!==void 0?e.depth:1,f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:d-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,p=e.bevelSegments!==void 0?e.bevelSegments:3,m=e.extrudePath,_=e.UVGenerator!==void 0?e.UVGenerator:S0,v,y=!1,w,M,E,T;m&&(v=m.getSpacedPoints(u),y=!0,f=!1,w=m.computeFrenetFrames(u,!1),M=new k,E=new k,T=new k),f||(p=0,d=0,g=0,x=0);let b=a.extractPoints(c),S=b.shape,A=b.holes;if(!Ii.isClockWise(S)){S=S.reverse();for(let nt=0,st=A.length;nt<st;nt++){let lt=A[nt];Ii.isClockWise(lt)&&(A[nt]=lt.reverse())}}function P(nt){let lt=10000000000000001e-36,ft=nt[0];for(let _t=1;_t<=nt.length;_t++){let dt=_t%nt.length,Mt=nt[dt],Qt=Mt.x-ft.x,Xt=Mt.y-ft.y,U=Qt*Qt+Xt*Xt,R=Math.max(Math.abs(Mt.x),Math.abs(Mt.y),Math.abs(ft.x),Math.abs(ft.y)),$=lt*R*R;if(U<=$){nt.splice(dt,1),_t--;continue}ft=Mt}}P(S),A.forEach(P);let O=A.length,z=S;for(let nt=0;nt<O;nt++){let st=A[nt];S=S.concat(st)}function F(nt,st,lt){return st||console.error("THREE.ExtrudeGeometry: vec does not exist"),nt.clone().addScaledVector(st,lt)}let W=S.length;function q(nt,st,lt){let ft,_t,dt,Mt=nt.x-st.x,Qt=nt.y-st.y,Xt=lt.x-nt.x,U=lt.y-nt.y,R=Mt*Mt+Qt*Qt,$=Mt*U-Qt*Xt;if(Math.abs($)>Number.EPSILON){let ot=Math.sqrt(R),gt=Math.sqrt(Xt*Xt+U*U),pt=st.x-Qt/ot,Jt=st.y+Mt/ot,Rt=lt.x-U/gt,jt=lt.y+Xt/gt,Wt=((Rt-pt)*U-(jt-Jt)*Xt)/(Mt*U-Qt*Xt);ft=pt+Mt*Wt-nt.x,_t=Jt+Qt*Wt-nt.y;let wt=ft*ft+_t*_t;if(wt<=2)return new xt(ft,_t);dt=Math.sqrt(wt/2)}else{let ot=!1;Mt>Number.EPSILON?Xt>Number.EPSILON&&(ot=!0):Mt<-Number.EPSILON?Xt<-Number.EPSILON&&(ot=!0):Math.sign(Qt)===Math.sign(U)&&(ot=!0),ot?(ft=-Qt,_t=Mt,dt=Math.sqrt(R)):(ft=Mt,_t=Qt,dt=Math.sqrt(R/2))}return new xt(ft/dt,_t/dt)}let K=[];for(let nt=0,st=z.length,lt=st-1,ft=nt+1;nt<st;nt++,lt++,ft++)lt===st&&(lt=0),ft===st&&(ft=0),K[nt]=q(z[nt],z[lt],z[ft]);let rt=[],vt,Gt=K.concat();for(let nt=0,st=O;nt<st;nt++){let lt=A[nt];vt=[];for(let ft=0,_t=lt.length,dt=_t-1,Mt=ft+1;ft<_t;ft++,dt++,Mt++)dt===_t&&(dt=0),Mt===_t&&(Mt=0),vt[ft]=q(lt[ft],lt[dt],lt[Mt]);rt.push(vt),Gt=Gt.concat(vt)}let ie;if(p===0)ie=Ii.triangulateShape(z,A);else{let nt=[],st=[];for(let lt=0;lt<p;lt++){let ft=lt/p,_t=d*Math.cos(ft*Math.PI/2),dt=g*Math.sin(ft*Math.PI/2)+x;for(let Mt=0,Qt=z.length;Mt<Qt;Mt++){let Xt=F(z[Mt],K[Mt],dt);Ct(Xt.x,Xt.y,-_t),ft===0&&nt.push(Xt)}for(let Mt=0,Qt=O;Mt<Qt;Mt++){let Xt=A[Mt];vt=rt[Mt];let U=[];for(let R=0,$=Xt.length;R<$;R++){let ot=F(Xt[R],vt[R],dt);Ct(ot.x,ot.y,-_t),ft===0&&U.push(ot)}ft===0&&st.push(U)}}ie=Ii.triangulateShape(nt,st)}let de=ie.length,_e=g+x;for(let nt=0;nt<W;nt++){let st=f?F(S[nt],Gt[nt],_e):S[nt];y?(E.copy(w.normals[0]).multiplyScalar(st.x),M.copy(w.binormals[0]).multiplyScalar(st.y),T.copy(v[0]).add(E).add(M),Ct(T.x,T.y,T.z)):Ct(st.x,st.y,0)}for(let nt=1;nt<=u;nt++)for(let st=0;st<W;st++){let lt=f?F(S[st],Gt[st],_e):S[st];y?(E.copy(w.normals[nt]).multiplyScalar(lt.x),M.copy(w.binormals[nt]).multiplyScalar(lt.y),T.copy(v[nt]).add(E).add(M),Ct(T.x,T.y,T.z)):Ct(lt.x,lt.y,h/u*nt)}for(let nt=p-1;nt>=0;nt--){let st=nt/p,lt=d*Math.cos(st*Math.PI/2),ft=g*Math.sin(st*Math.PI/2)+x;for(let _t=0,dt=z.length;_t<dt;_t++){let Mt=F(z[_t],K[_t],ft);Ct(Mt.x,Mt.y,h+lt)}for(let _t=0,dt=A.length;_t<dt;_t++){let Mt=A[_t];vt=rt[_t];for(let Qt=0,Xt=Mt.length;Qt<Xt;Qt++){let U=F(Mt[Qt],vt[Qt],ft);y?Ct(U.x,U.y+v[u-1].y,v[u-1].x+lt):Ct(U.x,U.y,h+lt)}}}it(),mt();function it(){let nt=r.length/3;if(f){let st=0,lt=W*st;for(let ft=0;ft<de;ft++){let _t=ie[ft];N(_t[2]+lt,_t[1]+lt,_t[0]+lt)}st=u+p*2,lt=W*st;for(let ft=0;ft<de;ft++){let _t=ie[ft];N(_t[0]+lt,_t[1]+lt,_t[2]+lt)}}else{for(let st=0;st<de;st++){let lt=ie[st];N(lt[2],lt[1],lt[0])}for(let st=0;st<de;st++){let lt=ie[st];N(lt[0]+W*u,lt[1]+W*u,lt[2]+W*u)}}n.addGroup(nt,r.length/3-nt,0)}function mt(){let nt=r.length/3,st=0;Lt(z,st),st+=z.length;for(let lt=0,ft=A.length;lt<ft;lt++){let _t=A[lt];Lt(_t,st),st+=_t.length}n.addGroup(nt,r.length/3-nt,1)}function Lt(nt,st){let lt=nt.length;for(;--lt>=0;){let ft=lt,_t=lt-1;_t<0&&(_t=nt.length-1);for(let dt=0,Mt=u+p*2;dt<Mt;dt++){let Qt=W*dt,Xt=W*(dt+1),U=st+ft+Qt,R=st+_t+Qt,$=st+_t+Xt,ot=st+ft+Xt;V(U,R,$,ot)}}}function Ct(nt,st,lt){l.push(nt),l.push(st),l.push(lt)}function N(nt,st,lt){ht(nt),ht(st),ht(lt);let ft=r.length/3,_t=_.generateTopUV(n,r,ft-3,ft-2,ft-1);B(_t[0]),B(_t[1]),B(_t[2])}function V(nt,st,lt,ft){ht(nt),ht(st),ht(ft),ht(st),ht(lt),ht(ft);let _t=r.length/3,dt=_.generateSideWallUV(n,r,_t-6,_t-3,_t-2,_t-1);B(dt[0]),B(dt[1]),B(dt[3]),B(dt[1]),B(dt[2]),B(dt[3])}function ht(nt){r.push(l[nt*3+0]),r.push(l[nt*3+1]),r.push(l[nt*3+2])}function B(nt){s.push(nt.x),s.push(nt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return E0(e,n,t)}static fromJSON(t,e){let n=[];for(let s=0,o=t.shapes.length;s<o;s++){let a=e[t.shapes[s]];n.push(a)}let r=t.options.extrudePath;return r!==void 0&&(t.options.extrudePath=new Qc[r.type]().fromJSON(r)),new i(n,t.options)}},S0={generateTopUV:function(i,t,e,n,r){let s=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[r*3],u=t[r*3+1];return[new xt(s,o),new xt(a,l),new xt(c,u)]},generateSideWallUV:function(i,t,e,n,r,s){let o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],u=t[n*3+1],h=t[n*3+2],f=t[r*3],d=t[r*3+1],g=t[r*3+2],x=t[s*3],p=t[s*3+1],m=t[s*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new xt(o,1-l),new xt(c,1-h),new xt(f,1-g),new xt(x,1-m)]:[new xt(a,1-l),new xt(u,1-h),new xt(d,1-g),new xt(p,1-m)]}};function E0(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,r=i.length;n<r;n++){let s=i[n];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Ps=class i extends wo{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,r=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}},si=class i extends Le{constructor(t=[new xt(0,-.5),new xt(.5,0),new xt(0,.5)],e=12,n=0,r=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:r},e=Math.floor(e),r=Re(r,0,Math.PI*2);let s=[],o=[],a=[],l=[],c=[],u=1/e,h=new k,f=new xt,d=new k,g=new k,x=new k,p=0,m=0;for(let _=0;_<=t.length-1;_++)switch(_){case 0:p=t[_+1].x-t[_].x,m=t[_+1].y-t[_].y,d.x=m*1,d.y=-p,d.z=m*0,x.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case t.length-1:l.push(x.x,x.y,x.z);break;default:p=t[_+1].x-t[_].x,m=t[_+1].y-t[_].y,d.x=m*1,d.y=-p,d.z=m*0,g.copy(d),d.x+=x.x,d.y+=x.y,d.z+=x.z,d.normalize(),l.push(d.x,d.y,d.z),x.copy(g)}for(let _=0;_<=e;_++){let v=n+_*u*r,y=Math.sin(v),w=Math.cos(v);for(let M=0;M<=t.length-1;M++){h.x=t[M].x*y,h.y=t[M].y,h.z=t[M].x*w,o.push(h.x,h.y,h.z),f.x=_/e,f.y=M/(t.length-1),a.push(f.x,f.y);let E=l[3*M+0]*y,T=l[3*M+1],b=l[3*M+0]*w;c.push(E,T,b)}}for(let _=0;_<e;_++)for(let v=0;v<t.length-1;v++){let y=v+_*t.length,w=y,M=y+t.length,E=y+t.length+1,T=y+1;s.push(w,M,T),s.push(E,T,M)}this.setIndex(s),this.setAttribute("position",new ae(o,3)),this.setAttribute("uv",new ae(a,2)),this.setAttribute("normal",new ae(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}},Hr=class i extends wo{constructor(t=1,e=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],r=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,r,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}},xn=class i extends Le{constructor(t=1,e=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:r};let s=t/2,o=e/2,a=Math.floor(n),l=Math.floor(r),c=a+1,u=l+1,h=t/a,f=e/l,d=[],g=[],x=[],p=[];for(let m=0;m<u;m++){let _=m*f-o;for(let v=0;v<c;v++){let y=v*h-s;g.push(y,-_,0),x.push(0,0,1),p.push(v/a),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let _=0;_<a;_++){let v=_+c*m,y=_+c*(m+1),w=_+1+c*(m+1),M=_+1+c*m;d.push(v,y,M),d.push(y,w,M)}this.setIndex(d),this.setAttribute("position",new ae(g,3)),this.setAttribute("normal",new ae(x,3)),this.setAttribute("uv",new ae(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},Vr=class i extends Le{constructor(t=.5,e=1,n=32,r=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:r,thetaStart:s,thetaLength:o},n=Math.max(3,n),r=Math.max(1,r);let a=[],l=[],c=[],u=[],h=t,f=(e-t)/r,d=new k,g=new xt;for(let x=0;x<=r;x++){for(let p=0;p<=n;p++){let m=s+p/n*o;d.x=h*Math.cos(m),d.y=h*Math.sin(m),l.push(d.x,d.y,d.z),c.push(0,0,1),g.x=(d.x/e+1)/2,g.y=(d.y/e+1)/2,u.push(g.x,g.y)}h+=f}for(let x=0;x<r;x++){let p=x*(n+1);for(let m=0;m<n;m++){let _=m+p,v=_,y=_+n+1,w=_+n+2,M=_+1;a.push(v,y,M),a.push(y,w,M)}}this.setIndex(a),this.setAttribute("position",new ae(l,3)),this.setAttribute("normal",new ae(c,3)),this.setAttribute("uv",new ae(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},mr=class i extends Le{constructor(t=new Tn([new xt(0,.5),new xt(-.5,-.5),new xt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let n=[],r=[],s=[],o=[],a=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let u=0;u<t.length;u++)c(t[u]),this.addGroup(a,l,u),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new ae(r,3)),this.setAttribute("normal",new ae(s,3)),this.setAttribute("uv",new ae(o,2));function c(u){let h=r.length/3,f=u.extractPoints(e),d=f.shape,g=f.holes;Ii.isClockWise(d)===!1&&(d=d.reverse());for(let p=0,m=g.length;p<m;p++){let _=g[p];Ii.isClockWise(_)===!0&&(g[p]=_.reverse())}let x=Ii.triangulateShape(d,g);for(let p=0,m=g.length;p<m;p++){let _=g[p];d=d.concat(_)}for(let p=0,m=d.length;p<m;p++){let _=d[p];r.push(_.x,_.y,0),s.push(0,0,1),o.push(_.x,_.y)}for(let p=0,m=x.length;p<m;p++){let _=x[p],v=_[0]+h,y=_[1]+h,w=_[2]+h;n.push(v,y,w),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return w0(e,t)}static fromJSON(t,e){let n=[];for(let r=0,s=t.shapes.length;r<s;r++){let o=e[t.shapes[r]];n.push(o)}return new i(n,t.curveSegments)}};function w0(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){let r=i[e];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t}var hn=class i extends Le{constructor(t=1,e=32,n=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,u=[],h=new k,f=new k,d=[],g=[],x=[],p=[];for(let m=0;m<=n;m++){let _=[],v=m/n,y=0;m===0&&o===0?y=.5/e:m===n&&l===Math.PI&&(y=-.5/e);for(let w=0;w<=e;w++){let M=w/e;h.x=-t*Math.cos(r+M*s)*Math.sin(o+v*a),h.y=t*Math.cos(o+v*a),h.z=t*Math.sin(r+M*s)*Math.sin(o+v*a),g.push(h.x,h.y,h.z),f.copy(h).normalize(),x.push(f.x,f.y,f.z),p.push(M+y,1-v),_.push(c++)}u.push(_)}for(let m=0;m<n;m++)for(let _=0;_<e;_++){let v=u[m][_+1],y=u[m][_],w=u[m+1][_],M=u[m+1][_+1];(m!==0||o>0)&&d.push(v,y,M),(m!==n-1||l<Math.PI)&&d.push(y,w,M)}this.setIndex(d),this.setAttribute("position",new ae(g,3)),this.setAttribute("normal",new ae(x,3)),this.setAttribute("uv",new ae(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var on=class i extends Le{constructor(t=1,e=.4,n=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:r,arc:s},n=Math.floor(n),r=Math.floor(r);let o=[],a=[],l=[],c=[],u=new k,h=new k,f=new k;for(let d=0;d<=n;d++)for(let g=0;g<=r;g++){let x=g/r*s,p=d/n*Math.PI*2;h.x=(t+e*Math.cos(p))*Math.cos(x),h.y=(t+e*Math.cos(p))*Math.sin(x),h.z=e*Math.sin(p),a.push(h.x,h.y,h.z),u.x=t*Math.cos(x),u.y=t*Math.sin(x),f.subVectors(h,u).normalize(),l.push(f.x,f.y,f.z),c.push(g/r),c.push(d/n)}for(let d=1;d<=n;d++)for(let g=1;g<=r;g++){let x=(r+1)*d+g-1,p=(r+1)*(d-1)+g-1,m=(r+1)*(d-1)+g,_=(r+1)*d+g;o.push(x,p,_),o.push(p,m,_)}this.setIndex(o),this.setAttribute("position",new ae(a,3)),this.setAttribute("normal",new ae(l,3)),this.setAttribute("uv",new ae(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var Lo=class extends He{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var ka=class extends ji{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ku,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Ha=class extends ji{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function ya(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function T0(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var Gr=class{constructor(t,e,n,r){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,r=e[n],s=e[n-1];n:{t:{let o;e:{i:if(!(t<r)){for(let a=n+2;;){if(r===void 0){if(t<s)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=r,r=e[++n],t<r)break t}o=e.length;break e}if(!(t>=s)){let a=e[1];t<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(r=s,s=e[--n-1],t>=s)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(r=e[n],s=e[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,r)}return this.interpolate_(n,s,t,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=t*r;for(let o=0;o!==r;++o)e[o]=n[s+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Va=class extends Gr{constructor(t,e,n,r){super(t,e,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Yc,endingEnd:Yc}}intervalChanged_(t,e,n){let r=this.parameterPositions,s=t-2,o=t+1,a=r[s],l=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case Zc:s=t,a=2*e-n;break;case Jc:s=r.length-2,a=e+r[s]-r[s+1];break;default:s=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Zc:o=t,l=2*n-e;break;case Jc:o=1,l=n+r[1]-r[0];break;default:o=t-1,l=e}let c=(n-e)*.5,u=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(t,e,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,d=this._weightNext,g=(n-e)/(r-e),x=g*g,p=x*g,m=-f*p+2*f*x-f*g,_=(1+f)*p+(-1.5-2*f)*x+(-.5+f)*g+1,v=(-1-d)*p+(1.5+d)*x+.5*g,y=d*p-d*x;for(let w=0;w!==a;++w)s[w]=m*o[u+w]+_*o[c+w]+v*o[l+w]+y*o[h+w];return s}},Ga=class extends Gr{constructor(t,e,n,r){super(t,e,n,r)}interpolate_(t,e,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,u=(n-e)/(r-e),h=1-u;for(let f=0;f!==a;++f)s[f]=o[c+f]*h+o[l+f]*u;return s}},Wa=class extends Gr{constructor(t,e,n,r){super(t,e,n,r)}interpolate_(t){return this.copySampleValue_(t-1)}},oi=class{constructor(t,e,n,r){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=ya(e,this.TimeBufferType),this.values=ya(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:ya(t.times,Array),values:ya(t.values,Array)};let r=t.getInterpolation();r!==t.DefaultInterpolation&&(n.interpolation=r)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Wa(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Ga(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Va(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case co:e=this.InterpolantFactoryMethodDiscrete;break;case wa:e=this.InterpolantFactoryMethodLinear;break;case Ma:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return co;case this.InterpolantFactoryMethodLinear:return wa;case this.InterpolantFactoryMethodSmooth:return Ma}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,r=e.length;n!==r;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,r=e.length;n!==r;++n)e[n]*=t}return this}trim(t,e){let n=this.times,r=n.length,s=0,o=r-1;for(;s!==r&&n[s]<t;)++s;for(;o!==-1&&n[o]>e;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,r=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==s;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(r!==void 0&&T0(r))for(let a=0,l=r.length;a!==l;++a){let c=r[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===Ma,s=t.length-1,o=1;for(let a=1;a<s;++a){let l=!1,c=t[a],u=t[a+1];if(c!==u&&(a!==1||c!==t[0]))if(r)l=!0;else{let h=a*n,f=h-n,d=h+n;for(let g=0;g!==n;++g){let x=e[h+g];if(x!==e[f+g]||x!==e[d+g]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let h=a*n,f=o*n;for(let d=0;d!==n;++d)e[f+d]=e[h+d]}++o}}if(s>0){t[o]=t[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,r=new n(this.name,t,e);return r.createInterpolant=this.createInterpolant,r}};oi.prototype.ValueTypeName="";oi.prototype.TimeBufferType=Float32Array;oi.prototype.ValueBufferType=Float32Array;oi.prototype.DefaultInterpolation=wa;var gr=class extends oi{constructor(t,e,n){super(t,e,n)}};gr.prototype.ValueTypeName="bool";gr.prototype.ValueBufferType=Array;gr.prototype.DefaultInterpolation=co;gr.prototype.InterpolantFactoryMethodLinear=void 0;gr.prototype.InterpolantFactoryMethodSmooth=void 0;var Xa=class extends oi{constructor(t,e,n,r){super(t,e,n,r)}};Xa.prototype.ValueTypeName="color";var qa=class extends oi{constructor(t,e,n,r){super(t,e,n,r)}};qa.prototype.ValueTypeName="number";var Ya=class extends Gr{constructor(t,e,n,r){super(t,e,n,r)}interpolate_(t,e,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(r-e),c=t*a;for(let u=c+a;c!==u;c+=4)di.slerpFlat(s,0,o,c-a,o,c,l);return s}},Uo=class extends oi{constructor(t,e,n,r){super(t,e,n,r)}InterpolantFactoryMethodLinear(t){return new Ya(this.times,this.values,this.getValueSize(),t)}};Uo.prototype.ValueTypeName="quaternion";Uo.prototype.InterpolantFactoryMethodSmooth=void 0;var xr=class extends oi{constructor(t,e,n){super(t,e,n)}};xr.prototype.ValueTypeName="string";xr.prototype.ValueBufferType=Array;xr.prototype.DefaultInterpolation=co;xr.prototype.InterpolantFactoryMethodLinear=void 0;xr.prototype.InterpolantFactoryMethodSmooth=void 0;var Za=class extends oi{constructor(t,e,n,r){super(t,e,n,r)}};Za.prototype.ValueTypeName="vector";var Ja=class{constructor(t,e,n){let r=this,s=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.abortController=new AbortController,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){let h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){let d=c[h],g=c[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},xf=new Ja,$a=class{constructor(t){this.manager=t!==void 0?t:xf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(r,s){n.load(t,r,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};$a.DEFAULT_MATERIAL_NAME="__DEFAULT";var Is=class extends xo{constructor(t=-1,e=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=n-t,o=n+t,a=r+e,l=r-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}};var Ka=class extends En{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}},No=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=performance.now();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};var Sh="\\[\\]\\.:\\/",A0=new RegExp("["+Sh+"]","g"),Eh="[^"+Sh+"]",R0="[^"+Sh.replace("\\.","")+"]",C0=/((?:WC+[\/:])*)/.source.replace("WC",Eh),P0=/(WCOD+)?/.source.replace("WCOD",R0),I0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Eh),D0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Eh),L0=new RegExp("^"+C0+P0+I0+D0+"$"),U0=["material","materials","bones","map"],nh=class{constructor(t,e,n){let r=n||je.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,r)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=n.length;r!==s;++r)n[r].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},je=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(A0,"")}static parseTrackName(t){let e=L0.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let s=n.nodeName.substring(r+1);U0.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(s){for(let o=0;o<s.length;o++){let a=s[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},r=n(t.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)t[e++]=n[r]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,r=e.propertyName,s=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===c){c=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[r];if(o===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};je.Composite=nh;je.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};je.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};je.prototype.GetterByBindingType=[je.prototype._getValue_direct,je.prototype._getValue_array,je.prototype._getValue_arrayElement,je.prototype._getValue_toArray];je.prototype.SetterByBindingTypeAndVersioning=[[je.prototype._setValue_direct,je.prototype._setValue_direct_setNeedsUpdate,je.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[je.prototype._setValue_array,je.prototype._setValue_array_setNeedsUpdate,je.prototype._setValue_array_setMatrixWorldNeedsUpdate],[je.prototype._setValue_arrayElement,je.prototype._setValue_arrayElement_setNeedsUpdate,je.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[je.prototype._setValue_fromArray,je.prototype._setValue_fromArray_setNeedsUpdate,je.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Gx=new Float32Array(1);var wu=new Fe,Fo=class{constructor(t,e,n=0,r=1/0){this.ray=new bs(t,e),this.near=n,this.far=r,this.camera=null,this.layers=new Ss,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return wu.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(wu),this}intersectObject(t,e=!0,n=[]){return ih(t,this,n,e),n.sort(Tu),n}intersectObjects(t,e=!0,n=[]){for(let r=0,s=t.length;r<s;r++)ih(t[r],this,n,e);return n.sort(Tu),n}};function Tu(i,t){return i.distance-t.distance}function ih(i,t,e,n){let r=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(r=!1),r===!0&&n===!0){let s=i.children;for(let o=0,a=s.length;o<a;o++)ih(s[o],t,e,!0)}}function wh(i,t,e,n){let r=N0(n);switch(e){case ph:return i*t;case gh:return i*t/r.components*r.byteLength;case xl:return i*t/r.components*r.byteLength;case xh:return i*t*2/r.components*r.byteLength;case _l:return i*t*2/r.components*r.byteLength;case mh:return i*t*3/r.components*r.byteLength;case xi:return i*t*4/r.components*r.byteLength;case vl:return i*t*4/r.components*r.byteLength;case zo:case ko:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ho:case Vo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ml:case Sl:return Math.max(i,16)*Math.max(t,8)/4;case yl:case bl:return Math.max(i,8)*Math.max(t,8)/2;case El:case wl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Tl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Al:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Rl:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Cl:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Pl:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Il:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Dl:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Ll:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Ul:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Nl:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Fl:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Bl:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Ol:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case zl:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case kl:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Hl:case Vl:case Gl:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Wl:case Xl:return Math.ceil(i/4)*Math.ceil(t/4)*8;case ql:case Yl:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function N0(i){switch(i){case Ni:case hh:return{byteLength:1,components:1};case Ls:case uh:case gi:return{byteLength:2,components:1};case ml:case gl:return{byteLength:2,components:4};case vr:case pl:case Fi:return{byteLength:4,components:1};case fh:case dh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");function Hf(){let i=null,t=!1,e=null,n=null;function r(s,o){e(s,o),n=i.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(r),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){i=s}}}function H0(i){let t=new WeakMap;function e(a,l){let c=a.array,u=a.usage,h=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,u),a.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,c){let u=l.array,h=l.updateRanges;if(i.bindBuffer(c,a),h.length===0)i.bufferSubData(c,0,u);else{h.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<h.length;d++){let g=h[f],x=h[d];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++f,h[f]=x)}h.length=f+1;for(let d=0,g=h.length;d<g;d++){let x=h[d];i.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var V0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,G0=`#ifdef USE_ALPHAHASH
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
#endif`,W0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,X0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,q0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Y0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Z0=`#ifdef USE_AOMAP
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
#endif`,J0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,$0=`#ifdef USE_BATCHING
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
#endif`,K0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Q0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,j0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,tp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ep=`#ifdef USE_IRIDESCENCE
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
#endif`,np=`#ifdef USE_BUMPMAP
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
#endif`,ip=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,rp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,sp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,op=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ap=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,lp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,cp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,hp=`#if defined( USE_COLOR_ALPHA )
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
#endif`,up=`#define PI 3.141592653589793
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
} // validated`,fp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,dp=`vec3 transformedNormal = objectNormal;
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
#endif`,pp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,mp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,gp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,xp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,_p="gl_FragColor = linearToOutputTexel( gl_FragColor );",vp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,yp=`#ifdef USE_ENVMAP
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
#endif`,Mp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,bp=`#ifdef USE_ENVMAP
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
#endif`,Sp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ep=`#ifdef USE_ENVMAP
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
#endif`,wp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Tp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ap=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Rp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Cp=`#ifdef USE_GRADIENTMAP
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
}`,Pp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ip=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Dp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Lp=`uniform bool receiveShadow;
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
#endif`,Up=`#ifdef USE_ENVMAP
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
#endif`,Np=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Fp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Bp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Op=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,zp=`PhysicalMaterial material;
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
#endif`,kp=`struct PhysicalMaterial {
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
}`,Hp=`
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
#endif`,Vp=`#if defined( RE_IndirectDiffuse )
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
#endif`,Gp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Wp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Xp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Yp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Zp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Jp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,$p=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Kp=`#if defined( USE_POINTS_UV )
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
#endif`,Qp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,jp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,tm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,em=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,nm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,im=`#ifdef USE_MORPHTARGETS
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
#endif`,rm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,sm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,om=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,am=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,hm=`#ifdef USE_NORMALMAP
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
#endif`,um=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,fm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,dm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,pm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,mm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,gm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,xm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,_m=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,vm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ym=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Mm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,bm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Sm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Em=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,wm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Tm=`float getShadowMask() {
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
}`,Am=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Rm=`#ifdef USE_SKINNING
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
#endif`,Cm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Pm=`#ifdef USE_SKINNING
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
#endif`,Im=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Dm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Lm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Um=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Nm=`#ifdef USE_TRANSMISSION
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
#endif`,Fm=`#ifdef USE_TRANSMISSION
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
#endif`,Bm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Om=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,zm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,km=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Hm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Vm=`uniform sampler2D t2D;
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
}`,Gm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Wm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Xm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ym=`#include <common>
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
}`,Zm=`#if DEPTH_PACKING == 3200
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
}`,Jm=`#define DISTANCE
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
}`,$m=`#define DISTANCE
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
}`,Km=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Qm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jm=`uniform float scale;
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
}`,tg=`uniform vec3 diffuse;
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
}`,eg=`#include <common>
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
}`,ng=`uniform vec3 diffuse;
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
}`,ig=`#define LAMBERT
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
}`,rg=`#define LAMBERT
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
}`,sg=`#define MATCAP
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
}`,og=`#define MATCAP
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
}`,ag=`#define NORMAL
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
}`,lg=`#define NORMAL
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
}`,cg=`#define PHONG
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
}`,hg=`#define PHONG
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
}`,ug=`#define STANDARD
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
}`,fg=`#define STANDARD
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
}`,dg=`#define TOON
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
}`,pg=`#define TOON
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
}`,mg=`uniform float size;
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
}`,gg=`uniform vec3 diffuse;
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
}`,xg=`#include <common>
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
}`,_g=`uniform vec3 color;
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
}`,vg=`uniform float rotation;
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
}`,yg=`uniform vec3 diffuse;
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
}`,Te={alphahash_fragment:V0,alphahash_pars_fragment:G0,alphamap_fragment:W0,alphamap_pars_fragment:X0,alphatest_fragment:q0,alphatest_pars_fragment:Y0,aomap_fragment:Z0,aomap_pars_fragment:J0,batching_pars_vertex:$0,batching_vertex:K0,begin_vertex:Q0,beginnormal_vertex:j0,bsdfs:tp,iridescence_fragment:ep,bumpmap_pars_fragment:np,clipping_planes_fragment:ip,clipping_planes_pars_fragment:rp,clipping_planes_pars_vertex:sp,clipping_planes_vertex:op,color_fragment:ap,color_pars_fragment:lp,color_pars_vertex:cp,color_vertex:hp,common:up,cube_uv_reflection_fragment:fp,defaultnormal_vertex:dp,displacementmap_pars_vertex:pp,displacementmap_vertex:mp,emissivemap_fragment:gp,emissivemap_pars_fragment:xp,colorspace_fragment:_p,colorspace_pars_fragment:vp,envmap_fragment:yp,envmap_common_pars_fragment:Mp,envmap_pars_fragment:bp,envmap_pars_vertex:Sp,envmap_physical_pars_fragment:Up,envmap_vertex:Ep,fog_vertex:wp,fog_pars_vertex:Tp,fog_fragment:Ap,fog_pars_fragment:Rp,gradientmap_pars_fragment:Cp,lightmap_pars_fragment:Pp,lights_lambert_fragment:Ip,lights_lambert_pars_fragment:Dp,lights_pars_begin:Lp,lights_toon_fragment:Np,lights_toon_pars_fragment:Fp,lights_phong_fragment:Bp,lights_phong_pars_fragment:Op,lights_physical_fragment:zp,lights_physical_pars_fragment:kp,lights_fragment_begin:Hp,lights_fragment_maps:Vp,lights_fragment_end:Gp,logdepthbuf_fragment:Wp,logdepthbuf_pars_fragment:Xp,logdepthbuf_pars_vertex:qp,logdepthbuf_vertex:Yp,map_fragment:Zp,map_pars_fragment:Jp,map_particle_fragment:$p,map_particle_pars_fragment:Kp,metalnessmap_fragment:Qp,metalnessmap_pars_fragment:jp,morphinstance_vertex:tm,morphcolor_vertex:em,morphnormal_vertex:nm,morphtarget_pars_vertex:im,morphtarget_vertex:rm,normal_fragment_begin:sm,normal_fragment_maps:om,normal_pars_fragment:am,normal_pars_vertex:lm,normal_vertex:cm,normalmap_pars_fragment:hm,clearcoat_normal_fragment_begin:um,clearcoat_normal_fragment_maps:fm,clearcoat_pars_fragment:dm,iridescence_pars_fragment:pm,opaque_fragment:mm,packing:gm,premultiplied_alpha_fragment:xm,project_vertex:_m,dithering_fragment:vm,dithering_pars_fragment:ym,roughnessmap_fragment:Mm,roughnessmap_pars_fragment:bm,shadowmap_pars_fragment:Sm,shadowmap_pars_vertex:Em,shadowmap_vertex:wm,shadowmask_pars_fragment:Tm,skinbase_vertex:Am,skinning_pars_vertex:Rm,skinning_vertex:Cm,skinnormal_vertex:Pm,specularmap_fragment:Im,specularmap_pars_fragment:Dm,tonemapping_fragment:Lm,tonemapping_pars_fragment:Um,transmission_fragment:Nm,transmission_pars_fragment:Fm,uv_pars_fragment:Bm,uv_pars_vertex:Om,uv_vertex:zm,worldpos_vertex:km,background_vert:Hm,background_frag:Vm,backgroundCube_vert:Gm,backgroundCube_frag:Wm,cube_vert:Xm,cube_frag:qm,depth_vert:Ym,depth_frag:Zm,distanceRGBA_vert:Jm,distanceRGBA_frag:$m,equirect_vert:Km,equirect_frag:Qm,linedashed_vert:jm,linedashed_frag:tg,meshbasic_vert:eg,meshbasic_frag:ng,meshlambert_vert:ig,meshlambert_frag:rg,meshmatcap_vert:sg,meshmatcap_frag:og,meshnormal_vert:ag,meshnormal_frag:lg,meshphong_vert:cg,meshphong_frag:hg,meshphysical_vert:ug,meshphysical_frag:fg,meshtoon_vert:dg,meshtoon_frag:pg,points_vert:mg,points_frag:gg,shadow_vert:xg,shadow_frag:_g,sprite_vert:vg,sprite_frag:yg},It={common:{diffuse:{value:new Ht(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new be},alphaMap:{value:null},alphaMapTransform:{value:new be},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new be}},envmap:{envMap:{value:null},envMapRotation:{value:new be},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new be}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new be}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new be},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new be},normalScale:{value:new xt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new be},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new be}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new be}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new be}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ht(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ht(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new be},alphaTest:{value:0},uvTransform:{value:new be}},sprite:{diffuse:{value:new Ht(16777215)},opacity:{value:1},center:{value:new xt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new be},alphaMap:{value:null},alphaMapTransform:{value:new be},alphaTest:{value:0}}},Bi={basic:{uniforms:Fn([It.common,It.specularmap,It.envmap,It.aomap,It.lightmap,It.fog]),vertexShader:Te.meshbasic_vert,fragmentShader:Te.meshbasic_frag},lambert:{uniforms:Fn([It.common,It.specularmap,It.envmap,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.fog,It.lights,{emissive:{value:new Ht(0)}}]),vertexShader:Te.meshlambert_vert,fragmentShader:Te.meshlambert_frag},phong:{uniforms:Fn([It.common,It.specularmap,It.envmap,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.fog,It.lights,{emissive:{value:new Ht(0)},specular:{value:new Ht(1118481)},shininess:{value:30}}]),vertexShader:Te.meshphong_vert,fragmentShader:Te.meshphong_frag},standard:{uniforms:Fn([It.common,It.envmap,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.roughnessmap,It.metalnessmap,It.fog,It.lights,{emissive:{value:new Ht(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Te.meshphysical_vert,fragmentShader:Te.meshphysical_frag},toon:{uniforms:Fn([It.common,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.gradientmap,It.fog,It.lights,{emissive:{value:new Ht(0)}}]),vertexShader:Te.meshtoon_vert,fragmentShader:Te.meshtoon_frag},matcap:{uniforms:Fn([It.common,It.bumpmap,It.normalmap,It.displacementmap,It.fog,{matcap:{value:null}}]),vertexShader:Te.meshmatcap_vert,fragmentShader:Te.meshmatcap_frag},points:{uniforms:Fn([It.points,It.fog]),vertexShader:Te.points_vert,fragmentShader:Te.points_frag},dashed:{uniforms:Fn([It.common,It.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Te.linedashed_vert,fragmentShader:Te.linedashed_frag},depth:{uniforms:Fn([It.common,It.displacementmap]),vertexShader:Te.depth_vert,fragmentShader:Te.depth_frag},normal:{uniforms:Fn([It.common,It.bumpmap,It.normalmap,It.displacementmap,{opacity:{value:1}}]),vertexShader:Te.meshnormal_vert,fragmentShader:Te.meshnormal_frag},sprite:{uniforms:Fn([It.sprite,It.fog]),vertexShader:Te.sprite_vert,fragmentShader:Te.sprite_frag},background:{uniforms:{uvTransform:{value:new be},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Te.background_vert,fragmentShader:Te.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new be}},vertexShader:Te.backgroundCube_vert,fragmentShader:Te.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Te.cube_vert,fragmentShader:Te.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Te.equirect_vert,fragmentShader:Te.equirect_frag},distanceRGBA:{uniforms:Fn([It.common,It.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Te.distanceRGBA_vert,fragmentShader:Te.distanceRGBA_frag},shadow:{uniforms:Fn([It.lights,It.fog,{color:{value:new Ht(0)},opacity:{value:1}}]),vertexShader:Te.shadow_vert,fragmentShader:Te.shadow_frag}};Bi.physical={uniforms:Fn([Bi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new be},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new be},clearcoatNormalScale:{value:new xt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new be},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new be},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new be},sheen:{value:0},sheenColor:{value:new Ht(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new be},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new be},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new be},transmissionSamplerSize:{value:new xt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new be},attenuationDistance:{value:0},attenuationColor:{value:new Ht(0)},specularColor:{value:new Ht(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new be},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new be},anisotropyVector:{value:new xt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new be}}]),vertexShader:Te.meshphysical_vert,fragmentShader:Te.meshphysical_frag};var Zl={r:0,b:0,g:0},Yr=new Di,Mg=new Fe;function bg(i,t,e,n,r,s,o){let a=new Ht(0),l=s===!0?0:1,c,u,h=null,f=0,d=null;function g(v){let y=v.isScene===!0?v.background:null;return y&&y.isTexture&&(y=(v.backgroundBlurriness>0?e:t).get(y)),y}function x(v){let y=!1,w=g(v);w===null?m(a,l):w&&w.isColor&&(m(w,1),y=!0);let M=i.xr.getEnvironmentBlendMode();M==="additive"?n.buffers.color.setClear(0,0,0,1,o):M==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function p(v,y){let w=g(y);w&&(w.isCubeTexture||w.mapping===Bo)?(u===void 0&&(u=new le(new Ue(1,1,1),new He({name:"BackgroundCubeMaterial",uniforms:qr(Bi.backgroundCube.uniforms),vertexShader:Bi.backgroundCube.vertexShader,fragmentShader:Bi.backgroundCube.fragmentShader,side:Pn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(M,E,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Yr.copy(y.backgroundRotation),Yr.x*=-1,Yr.y*=-1,Yr.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(Yr.y*=-1,Yr.z*=-1),u.material.uniforms.envMap.value=w,u.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Mg.makeRotationFromEuler(Yr)),u.material.toneMapped=Ne.getTransfer(w.colorSpace)!==ze,(h!==w||f!==w.version||d!==i.toneMapping)&&(u.material.needsUpdate=!0,h=w,f=w.version,d=i.toneMapping),u.layers.enableAll(),v.unshift(u,u.geometry,u.material,0,0,null)):w&&w.isTexture&&(c===void 0&&(c=new le(new xn(2,2),new He({name:"BackgroundMaterial",uniforms:qr(Bi.background.uniforms),vertexShader:Bi.background.vertexShader,fragmentShader:Bi.background.fragmentShader,side:ni,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=w,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=Ne.getTransfer(w.colorSpace)!==ze,w.matrixAutoUpdate===!0&&w.updateMatrix(),c.material.uniforms.uvTransform.value.copy(w.matrix),(h!==w||f!==w.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,h=w,f=w.version,d=i.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function m(v,y){v.getRGB(Zl,Mh(i)),n.buffers.color.setClear(Zl.r,Zl.g,Zl.b,y,o)}function _(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(v,y=1){a.set(v),l=y,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,m(a,l)},render:x,addToRenderList:p,dispose:_}}function Sg(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=f(null),s=r,o=!1;function a(S,A,I,P,O){let z=!1,F=h(P,I,A);s!==F&&(s=F,c(s.object)),z=d(S,P,I,O),z&&g(S,P,I,O),O!==null&&t.update(O,i.ELEMENT_ARRAY_BUFFER),(z||o)&&(o=!1,y(S,A,I,P),O!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(O).buffer))}function l(){return i.createVertexArray()}function c(S){return i.bindVertexArray(S)}function u(S){return i.deleteVertexArray(S)}function h(S,A,I){let P=I.wireframe===!0,O=n[S.id];O===void 0&&(O={},n[S.id]=O);let z=O[A.id];z===void 0&&(z={},O[A.id]=z);let F=z[P];return F===void 0&&(F=f(l()),z[P]=F),F}function f(S){let A=[],I=[],P=[];for(let O=0;O<e;O++)A[O]=0,I[O]=0,P[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:A,enabledAttributes:I,attributeDivisors:P,object:S,attributes:{},index:null}}function d(S,A,I,P){let O=s.attributes,z=A.attributes,F=0,W=I.getAttributes();for(let q in W)if(W[q].location>=0){let rt=O[q],vt=z[q];if(vt===void 0&&(q==="instanceMatrix"&&S.instanceMatrix&&(vt=S.instanceMatrix),q==="instanceColor"&&S.instanceColor&&(vt=S.instanceColor)),rt===void 0||rt.attribute!==vt||vt&&rt.data!==vt.data)return!0;F++}return s.attributesNum!==F||s.index!==P}function g(S,A,I,P){let O={},z=A.attributes,F=0,W=I.getAttributes();for(let q in W)if(W[q].location>=0){let rt=z[q];rt===void 0&&(q==="instanceMatrix"&&S.instanceMatrix&&(rt=S.instanceMatrix),q==="instanceColor"&&S.instanceColor&&(rt=S.instanceColor));let vt={};vt.attribute=rt,rt&&rt.data&&(vt.data=rt.data),O[q]=vt,F++}s.attributes=O,s.attributesNum=F,s.index=P}function x(){let S=s.newAttributes;for(let A=0,I=S.length;A<I;A++)S[A]=0}function p(S){m(S,0)}function m(S,A){let I=s.newAttributes,P=s.enabledAttributes,O=s.attributeDivisors;I[S]=1,P[S]===0&&(i.enableVertexAttribArray(S),P[S]=1),O[S]!==A&&(i.vertexAttribDivisor(S,A),O[S]=A)}function _(){let S=s.newAttributes,A=s.enabledAttributes;for(let I=0,P=A.length;I<P;I++)A[I]!==S[I]&&(i.disableVertexAttribArray(I),A[I]=0)}function v(S,A,I,P,O,z,F){F===!0?i.vertexAttribIPointer(S,A,I,O,z):i.vertexAttribPointer(S,A,I,P,O,z)}function y(S,A,I,P){x();let O=P.attributes,z=I.getAttributes(),F=A.defaultAttributeValues;for(let W in z){let q=z[W];if(q.location>=0){let K=O[W];if(K===void 0&&(W==="instanceMatrix"&&S.instanceMatrix&&(K=S.instanceMatrix),W==="instanceColor"&&S.instanceColor&&(K=S.instanceColor)),K!==void 0){let rt=K.normalized,vt=K.itemSize,Gt=t.get(K);if(Gt===void 0)continue;let ie=Gt.buffer,de=Gt.type,_e=Gt.bytesPerElement,it=de===i.INT||de===i.UNSIGNED_INT||K.gpuType===pl;if(K.isInterleavedBufferAttribute){let mt=K.data,Lt=mt.stride,Ct=K.offset;if(mt.isInstancedInterleavedBuffer){for(let N=0;N<q.locationSize;N++)m(q.location+N,mt.meshPerAttribute);S.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=mt.meshPerAttribute*mt.count)}else for(let N=0;N<q.locationSize;N++)p(q.location+N);i.bindBuffer(i.ARRAY_BUFFER,ie);for(let N=0;N<q.locationSize;N++)v(q.location+N,vt/q.locationSize,de,rt,Lt*_e,(Ct+vt/q.locationSize*N)*_e,it)}else{if(K.isInstancedBufferAttribute){for(let mt=0;mt<q.locationSize;mt++)m(q.location+mt,K.meshPerAttribute);S.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let mt=0;mt<q.locationSize;mt++)p(q.location+mt);i.bindBuffer(i.ARRAY_BUFFER,ie);for(let mt=0;mt<q.locationSize;mt++)v(q.location+mt,vt/q.locationSize,de,rt,vt*_e,vt/q.locationSize*mt*_e,it)}}else if(F!==void 0){let rt=F[W];if(rt!==void 0)switch(rt.length){case 2:i.vertexAttrib2fv(q.location,rt);break;case 3:i.vertexAttrib3fv(q.location,rt);break;case 4:i.vertexAttrib4fv(q.location,rt);break;default:i.vertexAttrib1fv(q.location,rt)}}}}_()}function w(){T();for(let S in n){let A=n[S];for(let I in A){let P=A[I];for(let O in P)u(P[O].object),delete P[O];delete A[I]}delete n[S]}}function M(S){if(n[S.id]===void 0)return;let A=n[S.id];for(let I in A){let P=A[I];for(let O in P)u(P[O].object),delete P[O];delete A[I]}delete n[S.id]}function E(S){for(let A in n){let I=n[A];if(I[S.id]===void 0)continue;let P=I[S.id];for(let O in P)u(P[O].object),delete P[O];delete I[S.id]}}function T(){b(),o=!0,s!==r&&(s=r,c(s.object))}function b(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:T,resetDefaultState:b,dispose:w,releaseStatesOfGeometry:M,releaseStatesOfProgram:E,initAttributes:x,enableAttribute:p,disableUnusedAttributes:_}}function Eg(i,t,e){let n;function r(c){n=c}function s(c,u){i.drawArrays(n,c,u),e.update(u,n,1)}function o(c,u,h){h!==0&&(i.drawArraysInstanced(n,c,u,h),e.update(u,n,h))}function a(c,u,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let d=0;for(let g=0;g<h;g++)d+=u[g];e.update(d,n,1)}function l(c,u,h,f){if(h===0)return;let d=t.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)o(c[g],u[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,u,0,f,0,h);let g=0;for(let x=0;x<h;x++)g+=u[x]*f[x];e.update(g,n,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function wg(i,t,e,n){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){let E=t.get("EXT_texture_filter_anisotropic");r=i.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(E){return!(E!==xi&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(E){let T=E===gi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(E!==Ni&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==Fi&&!T)}function l(E){if(E==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let h=e.logarithmicDepthBuffer===!0,f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),_=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),v=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),w=g>0,M=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:_,maxVaryings:v,maxFragmentUniforms:y,vertexTextures:w,maxSamples:M}}function Tg(i){let t=this,e=null,n=0,r=!1,s=!1,o=new Zn,a=new be,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){let d=h.length!==0||f||n!==0||r;return r=f,n=h.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){e=u(h,f,0)},this.setState=function(h,f,d){let g=h.clippingPlanes,x=h.clipIntersection,p=h.clipShadows,m=i.get(h);if(!r||g===null||g.length===0||s&&!p)s?u(null):c();else{let _=s?0:n,v=_*4,y=m.clippingState||null;l.value=y,y=u(g,f,v,d);for(let w=0;w!==v;++w)y[w]=e[w];m.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(h,f,d,g){let x=h!==null?h.length:0,p=null;if(x!==0){if(p=l.value,g!==!0||p===null){let m=d+x*4,_=f.matrixWorldInverse;a.getNormalMatrix(_),(p===null||p.length<m)&&(p=new Float32Array(m));for(let v=0,y=d;v!==x;++v,y+=4)o.copy(h[v]).applyMatrix4(_,a),o.normal.toArray(p,y),p[y+3]=o.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,p}}function Ag(i){let t=new WeakMap;function e(o,a){return a===ul?o.mapping=Wr:a===fl&&(o.mapping=Xr),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===ul||a===fl)if(t.has(o)){let l=t.get(o).texture;return e(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new Da(l.height);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",r),e(c.texture,o.mapping)}else return null}}return o}function r(o){let a=o.target;a.removeEventListener("dispose",r);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}var Bs=4,_f=[.125,.215,.35,.446,.526,.582],$r=20,Th=new Is,vf=new Ht,Ah=null,Rh=0,Ch=0,Ph=!1,Jr=(1+Math.sqrt(5))/2,Fs=1/Jr,yf=[new k(-Jr,Fs,0),new k(Jr,Fs,0),new k(-Fs,0,Jr),new k(Fs,0,Jr),new k(0,Jr,-Fs),new k(0,Jr,Fs),new k(-1,1,-1),new k(1,1,-1),new k(-1,1,1),new k(1,1,1)],Rg=new k,Kl=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,r=100,s={}){let{size:o=256,position:a=Rg}=s;Ah=this._renderer.getRenderTarget(),Rh=this._renderer.getActiveCubeFace(),Ch=this._renderer.getActiveMipmapLevel(),Ph=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,r,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Sf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=bf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ah,Rh,Ch),this._renderer.xr.enabled=Ph,t.scissorTest=!1,Jl(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Wr||t.mapping===Xr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ah=this._renderer.getRenderTarget(),Rh=this._renderer.getActiveCubeFace(),Ch=this._renderer.getActiveMipmapLevel(),Ph=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:wi,minFilter:wi,generateMipmaps:!1,type:gi,format:xi,colorSpace:Or,depthBuffer:!1},r=Mf(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Mf(t,e,n);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Cg(s)),this._blurMaterial=Pg(s,t,e)}return r}_compileMaterial(t){let e=new le(this._lodPlanes[0],t);this._renderer.compile(e,Th)}_sceneToCubeUV(t,e,n,r,s){let l=new En(90,1,e,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,d=h.toneMapping;h.getClearColor(vf),h.toneMapping=tr,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(r),h.clearDepth(),h.setRenderTarget(null));let x=new Ie({name:"PMREM.Background",side:Pn,depthWrite:!1,depthTest:!1}),p=new le(new Ue,x),m=!1,_=t.background;_?_.isColor&&(x.color.copy(_),t.background=null,m=!0):(x.color.copy(vf),m=!0);for(let v=0;v<6;v++){let y=v%3;y===0?(l.up.set(0,c[v],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[v],s.y,s.z)):y===1?(l.up.set(0,0,c[v]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[v],s.z)):(l.up.set(0,c[v],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[v]));let w=this._cubeSize;Jl(r,y*w,v>2?w:0,w,w),h.setRenderTarget(r),m&&h.render(p,l),h.render(t,l)}p.geometry.dispose(),p.material.dispose(),h.toneMapping=d,h.autoClear=f,t.background=_}_textureToCubeUV(t,e){let n=this._renderer,r=t.mapping===Wr||t.mapping===Xr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Sf()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=bf());let s=r?this._cubemapMaterial:this._equirectMaterial,o=new le(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;let l=this._cubeSize;Jl(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Th)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let r=this._lodPlanes.length;for(let s=1;s<r;s++){let o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=yf[(r-s-1)%yf.length];this._blur(t,s-1,s,o,a)}e.autoClear=n}_blur(t,e,n,r,s){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,r,"latitudinal",s),this._halfBlur(o,t,n,n,r,"longitudinal",s)}_halfBlur(t,e,n,r,s,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,h=new le(this._lodPlanes[r],c),f=c.uniforms,d=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*$r-1),x=s/g,p=isFinite(s)?1+Math.floor(u*x):$r;p>$r&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${$r}`);let m=[],_=0;for(let E=0;E<$r;++E){let T=E/x,b=Math.exp(-T*T/2);m.push(b),E===0?_+=b:E<p&&(_+=2*b)}for(let E=0;E<m.length;E++)m[E]=m[E]/_;f.envMap.value=t.texture,f.samples.value=p,f.weights.value=m,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:v}=this;f.dTheta.value=g,f.mipInt.value=v-n;let y=this._sizeLods[r],w=3*y*(r>v-Bs?r-v+Bs:0),M=4*(this._cubeSize-y);Jl(e,w,M,3*y,2*y),l.setRenderTarget(e),l.render(h,Th)}};function Cg(i){let t=[],e=[],n=[],r=i,s=i-Bs+1+_f.length;for(let o=0;o<s;o++){let a=Math.pow(2,r);e.push(a);let l=1/a;o>i-Bs?l=_f[o-i+Bs-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,g=6,x=3,p=2,m=1,_=new Float32Array(x*g*d),v=new Float32Array(p*g*d),y=new Float32Array(m*g*d);for(let M=0;M<d;M++){let E=M%3*2/3-1,T=M>2?0:-1,b=[E,T,0,E+2/3,T,0,E+2/3,T+1,0,E,T,0,E+2/3,T+1,0,E,T+1,0];_.set(b,x*g*M),v.set(f,p*g*M);let S=[M,M,M,M,M,M];y.set(S,m*g*M)}let w=new Le;w.setAttribute("position",new Pe(_,x)),w.setAttribute("uv",new Pe(v,p)),w.setAttribute("faceIndex",new Pe(y,m)),t.push(w),r>Bs&&r--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Mf(i,t,e){let n=new wn(i,t,e);return n.texture.mapping=Bo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Jl(i,t,e,n,r){i.viewport.set(t,e,n,r),i.scissor.set(t,e,n,r)}function Pg(i,t,e){let n=new Float32Array($r),r=new k(0,1,0);return new He({name:"SphericalGaussianBlur",defines:{n:$r,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:kh(),fragmentShader:`

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
		`,blending:Ai,depthTest:!1,depthWrite:!1})}function bf(){return new He({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:kh(),fragmentShader:`

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
		`,blending:Ai,depthTest:!1,depthWrite:!1})}function Sf(){return new He({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:kh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ai,depthTest:!1,depthWrite:!1})}function kh(){return`

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
	`}function Ig(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===ul||l===fl,u=l===Wr||l===Xr;if(c||u){let h=t.get(a),f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new Kl(i)),h=c?e.fromEquirectangular(a,h):e.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),h.texture;if(h!==void 0)return h.texture;{let d=a.image;return c&&d&&d.height>0||u&&d&&r(d)?(e===null&&(e=new Kl(i)),h=c?e.fromEquirectangular(a):e.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),a.addEventListener("dispose",s),h.texture):null}}}return a}function r(a){let l=0,c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){let l=a.target;l.removeEventListener("dispose",s);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Dg(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return t[n]=r,r}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let r=e(n);return r===null&&ys("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function Lg(i,t,e,n){let r={},s=new WeakMap;function o(h){let f=h.target;f.index!==null&&t.remove(f.index);for(let g in f.attributes)t.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete r[f.id];let d=s.get(f);d&&(t.remove(d),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(h,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,e.memory.geometries++),f}function l(h){let f=h.attributes;for(let d in f)t.update(f[d],i.ARRAY_BUFFER)}function c(h){let f=[],d=h.index,g=h.attributes.position,x=0;if(d!==null){let _=d.array;x=d.version;for(let v=0,y=_.length;v<y;v+=3){let w=_[v+0],M=_[v+1],E=_[v+2];f.push(w,M,M,E,E,w)}}else if(g!==void 0){let _=g.array;x=g.version;for(let v=0,y=_.length/3-1;v<y;v+=3){let w=v+0,M=v+1,E=v+2;f.push(w,M,M,E,E,w)}}else return;let p=new(yh(f)?go:mo)(f,1);p.version=x;let m=s.get(h);m&&t.remove(m),s.set(h,p)}function u(h){let f=s.get(h);if(f){let d=h.index;d!==null&&f.version<d.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function Ug(i,t,e){let n;function r(f){n=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function l(f,d){i.drawElements(n,d,s,f*o),e.update(d,n,1)}function c(f,d,g){g!==0&&(i.drawElementsInstanced(n,d,s,f*o,g),e.update(d,n,g))}function u(f,d,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,s,f,0,g);let p=0;for(let m=0;m<g;m++)p+=d[m];e.update(p,n,1)}function h(f,d,g,x){if(g===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<f.length;m++)c(f[m]/o,d[m],x[m]);else{p.multiDrawElementsInstancedWEBGL(n,d,0,s,f,0,x,0,g);let m=0;for(let _=0;_<g;_++)m+=d[_]*x[_];e.update(m,n,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function Ng(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(s/3);break;case i.LINES:e.lines+=a*(s/2);break;case i.LINE_STRIP:e.lines+=a*(s-1);break;case i.LINE_LOOP:e.lines+=a*s;break;case i.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:n}}function Fg(i,t,e){let n=new WeakMap,r=new tn;function s(o,a,l){let c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0,f=n.get(a);if(f===void 0||f.count!==h){let b=function(){E.dispose(),n.delete(a),a.removeEventListener("dispose",b)};f!==void 0&&f.texture.dispose();let d=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],_=a.morphAttributes.color||[],v=0;d===!0&&(v=1),g===!0&&(v=2),x===!0&&(v=3);let y=a.attributes.position.count*v,w=1;y>t.maxTextureSize&&(w=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let M=new Float32Array(y*w*4*h),E=new po(M,y,w,h);E.type=Fi,E.needsUpdate=!0;let T=v*4;for(let S=0;S<h;S++){let A=p[S],I=m[S],P=_[S],O=y*w*4*S;for(let z=0;z<A.count;z++){let F=z*T;d===!0&&(r.fromBufferAttribute(A,z),M[O+F+0]=r.x,M[O+F+1]=r.y,M[O+F+2]=r.z,M[O+F+3]=0),g===!0&&(r.fromBufferAttribute(I,z),M[O+F+4]=r.x,M[O+F+5]=r.y,M[O+F+6]=r.z,M[O+F+7]=0),x===!0&&(r.fromBufferAttribute(P,z),M[O+F+8]=r.x,M[O+F+9]=r.y,M[O+F+10]=r.z,M[O+F+11]=P.itemSize===4?r.w:1)}}f={count:h,texture:E,size:new xt(y,w)},n.set(a,f),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let d=0;for(let x=0;x<c.length;x++)d+=c[x];let g=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:s}}function Bg(i,t,e,n){let r=new WeakMap;function s(l){let c=n.render.frame,u=l.geometry,h=t.get(l,u);if(r.get(h)!==c&&(t.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return h}function o(){r=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:o}}var Vf=new Vn,Ef=new So(1,1),Gf=new po,Wf=new Pa,Xf=new _o,wf=[],Tf=[],Af=new Float32Array(16),Rf=new Float32Array(9),Cf=new Float32Array(4);function zs(i,t,e){let n=i[0];if(n<=0||n>0)return i;let r=t*e,s=wf[r];if(s===void 0&&(s=new Float32Array(r),wf[r]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(s,a)}return s}function _n(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function vn(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function jl(i,t){let e=Tf[t];e===void 0&&(e=new Int32Array(t),Tf[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Og(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function zg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(_n(e,t))return;i.uniform2fv(this.addr,t),vn(e,t)}}function kg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(_n(e,t))return;i.uniform3fv(this.addr,t),vn(e,t)}}function Hg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(_n(e,t))return;i.uniform4fv(this.addr,t),vn(e,t)}}function Vg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(_n(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),vn(e,t)}else{if(_n(e,n))return;Cf.set(n),i.uniformMatrix2fv(this.addr,!1,Cf),vn(e,n)}}function Gg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(_n(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),vn(e,t)}else{if(_n(e,n))return;Rf.set(n),i.uniformMatrix3fv(this.addr,!1,Rf),vn(e,n)}}function Wg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(_n(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),vn(e,t)}else{if(_n(e,n))return;Af.set(n),i.uniformMatrix4fv(this.addr,!1,Af),vn(e,n)}}function Xg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function qg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(_n(e,t))return;i.uniform2iv(this.addr,t),vn(e,t)}}function Yg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(_n(e,t))return;i.uniform3iv(this.addr,t),vn(e,t)}}function Zg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(_n(e,t))return;i.uniform4iv(this.addr,t),vn(e,t)}}function Jg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function $g(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(_n(e,t))return;i.uniform2uiv(this.addr,t),vn(e,t)}}function Kg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(_n(e,t))return;i.uniform3uiv(this.addr,t),vn(e,t)}}function Qg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(_n(e,t))return;i.uniform4uiv(this.addr,t),vn(e,t)}}function jg(i,t,e){let n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(Ef.compareFunction=_h,s=Ef):s=Vf,e.setTexture2D(t||s,r)}function t1(i,t,e){let n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture3D(t||Wf,r)}function e1(i,t,e){let n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTextureCube(t||Xf,r)}function n1(i,t,e){let n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture2DArray(t||Gf,r)}function i1(i){switch(i){case 5126:return Og;case 35664:return zg;case 35665:return kg;case 35666:return Hg;case 35674:return Vg;case 35675:return Gg;case 35676:return Wg;case 5124:case 35670:return Xg;case 35667:case 35671:return qg;case 35668:case 35672:return Yg;case 35669:case 35673:return Zg;case 5125:return Jg;case 36294:return $g;case 36295:return Kg;case 36296:return Qg;case 35678:case 36198:case 36298:case 36306:case 35682:return jg;case 35679:case 36299:case 36307:return t1;case 35680:case 36300:case 36308:case 36293:return e1;case 36289:case 36303:case 36311:case 36292:return n1}}function r1(i,t){i.uniform1fv(this.addr,t)}function s1(i,t){let e=zs(t,this.size,2);i.uniform2fv(this.addr,e)}function o1(i,t){let e=zs(t,this.size,3);i.uniform3fv(this.addr,e)}function a1(i,t){let e=zs(t,this.size,4);i.uniform4fv(this.addr,e)}function l1(i,t){let e=zs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function c1(i,t){let e=zs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function h1(i,t){let e=zs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function u1(i,t){i.uniform1iv(this.addr,t)}function f1(i,t){i.uniform2iv(this.addr,t)}function d1(i,t){i.uniform3iv(this.addr,t)}function p1(i,t){i.uniform4iv(this.addr,t)}function m1(i,t){i.uniform1uiv(this.addr,t)}function g1(i,t){i.uniform2uiv(this.addr,t)}function x1(i,t){i.uniform3uiv(this.addr,t)}function _1(i,t){i.uniform4uiv(this.addr,t)}function v1(i,t,e){let n=this.cache,r=t.length,s=jl(e,r);_n(n,s)||(i.uniform1iv(this.addr,s),vn(n,s));for(let o=0;o!==r;++o)e.setTexture2D(t[o]||Vf,s[o])}function y1(i,t,e){let n=this.cache,r=t.length,s=jl(e,r);_n(n,s)||(i.uniform1iv(this.addr,s),vn(n,s));for(let o=0;o!==r;++o)e.setTexture3D(t[o]||Wf,s[o])}function M1(i,t,e){let n=this.cache,r=t.length,s=jl(e,r);_n(n,s)||(i.uniform1iv(this.addr,s),vn(n,s));for(let o=0;o!==r;++o)e.setTextureCube(t[o]||Xf,s[o])}function b1(i,t,e){let n=this.cache,r=t.length,s=jl(e,r);_n(n,s)||(i.uniform1iv(this.addr,s),vn(n,s));for(let o=0;o!==r;++o)e.setTexture2DArray(t[o]||Gf,s[o])}function S1(i){switch(i){case 5126:return r1;case 35664:return s1;case 35665:return o1;case 35666:return a1;case 35674:return l1;case 35675:return c1;case 35676:return h1;case 5124:case 35670:return u1;case 35667:case 35671:return f1;case 35668:case 35672:return d1;case 35669:case 35673:return p1;case 5125:return m1;case 36294:return g1;case 36295:return x1;case 36296:return _1;case 35678:case 36198:case 36298:case 36306:case 35682:return v1;case 35679:case 36299:case 36307:return y1;case 35680:case 36300:case 36308:case 36293:return M1;case 36289:case 36303:case 36311:case 36292:return b1}}var Dh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=i1(e.type)}},Lh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=S1(e.type)}},Uh=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let r=this.seq;for(let s=0,o=r.length;s!==o;++s){let a=r[s];a.setValue(t,e[a.id],n)}}},Ih=/(\w+)(\])?(\[|\.)?/g;function Pf(i,t){i.seq.push(t),i.map[t.id]=t}function E1(i,t,e){let n=i.name,r=n.length;for(Ih.lastIndex=0;;){let s=Ih.exec(n),o=Ih.lastIndex,a=s[1],l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Pf(e,c===void 0?new Dh(a,i,t):new Lh(a,i,t));break}else{let h=e.map[a];h===void 0&&(h=new Uh(a),Pf(e,h)),e=h}}}var Os=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let s=t.getActiveUniform(e,r),o=t.getUniformLocation(e,s.name);E1(s,o,this)}}setValue(t,e,n,r){let s=this.map[e];s!==void 0&&s.setValue(t,n,r)}setOptional(t,e,n){let r=e[n];r!==void 0&&this.setValue(t,n,r)}static upload(t,e,n,r){for(let s=0,o=e.length;s!==o;++s){let a=e[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,r)}}static seqWithValue(t,e){let n=[];for(let r=0,s=t.length;r!==s;++r){let o=t[r];o.id in e&&n.push(o)}return n}};function If(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var w1=37297,T1=0;function A1(i,t){let e=i.split(`
`),n=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=r;o<s;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var Df=new be;function R1(i){Ne._getMatrix(Df,Ne.workingColorSpace,i);let t=`mat3( ${Df.elements.map(e=>e.toFixed(4))} )`;switch(Ne.getTransfer(i)){case ho:return[t,"LinearTransferOETF"];case ze:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Lf(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=(i.getShaderInfoLog(t)||"").trim();if(n&&s==="")return"";let o=/ERROR: 0:(\d+)/.exec(s);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+s+`

`+A1(i.getShaderSource(t),a)}else return s}function C1(i,t){let e=R1(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function P1(i,t){let e;switch(t){case sl:e="Linear";break;case ol:e="Reinhard";break;case al:e="Cineon";break;case Ds:e="ACESFilmic";break;case cl:e="AgX";break;case hl:e="Neutral";break;case ll:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var $l=new k;function I1(){Ne.getLuminanceCoefficients($l);let i=$l.x.toFixed(4),t=$l.y.toFixed(4),e=$l.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function D1(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Go).join(`
`)}function L1(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function U1(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){let s=i.getActiveAttrib(t,r),o=s.name,a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Go(i){return i!==""}function Uf(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Nf(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var N1=/^[ \t]*#include +<([\w\d./]+)>/gm;function Nh(i){return i.replace(N1,B1)}var F1=new Map;function B1(i,t){let e=Te[t];if(e===void 0){let n=F1.get(t);if(n!==void 0)e=Te[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Nh(e)}var O1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ff(i){return i.replace(O1,z1)}function z1(i,t,e,n){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Bf(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function k1(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===sh?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Cu?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Ui&&(t="SHADOWMAP_TYPE_VSM"),t}function H1(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Wr:case Xr:t="ENVMAP_TYPE_CUBE";break;case Bo:t="ENVMAP_TYPE_CUBE_UV";break}return t}function V1(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Xr:t="ENVMAP_MODE_REFRACTION";break}return t}function G1(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case lh:t="ENVMAP_BLENDING_MULTIPLY";break;case Zu:t="ENVMAP_BLENDING_MIX";break;case Ju:t="ENVMAP_BLENDING_ADD";break}return t}function W1(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function X1(i,t,e,n){let r=i.getContext(),s=e.defines,o=e.vertexShader,a=e.fragmentShader,l=k1(e),c=H1(e),u=V1(e),h=G1(e),f=W1(e),d=D1(e),g=L1(s),x=r.createProgram(),p,m,_=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Go).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Go).join(`
`),m.length>0&&(m+=`
`)):(p=[Bf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Go).join(`
`),m=[Bf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==tr?"#define TONE_MAPPING":"",e.toneMapping!==tr?Te.tonemapping_pars_fragment:"",e.toneMapping!==tr?P1("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Te.colorspace_pars_fragment,C1("linearToOutputTexel",e.outputColorSpace),I1(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Go).join(`
`)),o=Nh(o),o=Uf(o,e),o=Nf(o,e),a=Nh(a),a=Uf(a,e),a=Nf(a,e),o=Ff(o),a=Ff(a),e.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,p=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",e.glslVersion===vh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===vh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let v=_+p+o,y=_+m+a,w=If(r,r.VERTEX_SHADER,v),M=If(r,r.FRAGMENT_SHADER,y);r.attachShader(x,w),r.attachShader(x,M),e.index0AttributeName!==void 0?r.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function E(A){if(i.debug.checkShaderErrors){let I=r.getProgramInfoLog(x)||"",P=r.getShaderInfoLog(w)||"",O=r.getShaderInfoLog(M)||"",z=I.trim(),F=P.trim(),W=O.trim(),q=!0,K=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(q=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,x,w,M);else{let rt=Lf(r,w,"vertex"),vt=Lf(r,M,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+z+`
`+rt+`
`+vt)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(F===""||W==="")&&(K=!1);K&&(A.diagnostics={runnable:q,programLog:z,vertexShader:{log:F,prefix:p},fragmentShader:{log:W,prefix:m}})}r.deleteShader(w),r.deleteShader(M),T=new Os(r,x),b=U1(r,x)}let T;this.getUniforms=function(){return T===void 0&&E(this),T};let b;this.getAttributes=function(){return b===void 0&&E(this),b};let S=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(x,w1)),S},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=T1++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=w,this.fragmentShader=M,this}var q1=0,Fh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Bh(t),e.set(t,n)),n}},Bh=class{constructor(t){this.id=q1++,this.code=t,this.usedTimes=0}};function Y1(i,t,e,n,r,s,o){let a=new Ss,l=new Fh,c=new Set,u=[],h=r.logarithmicDepthBuffer,f=r.vertexTextures,d=r.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(b){return c.add(b),b===0?"uv":`uv${b}`}function p(b,S,A,I,P){let O=I.fog,z=P.geometry,F=b.isMeshStandardMaterial?I.environment:null,W=(b.isMeshStandardMaterial?e:t).get(b.envMap||F),q=W&&W.mapping===Bo?W.image.height:null,K=g[b.type];b.precision!==null&&(d=r.getMaxPrecision(b.precision),d!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",d,"instead."));let rt=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,vt=rt!==void 0?rt.length:0,Gt=0;z.morphAttributes.position!==void 0&&(Gt=1),z.morphAttributes.normal!==void 0&&(Gt=2),z.morphAttributes.color!==void 0&&(Gt=3);let ie,de,_e,it;if(K){let oe=Bi[K];ie=oe.vertexShader,de=oe.fragmentShader}else ie=b.vertexShader,de=b.fragmentShader,l.update(b),_e=l.getVertexShaderID(b),it=l.getFragmentShaderID(b);let mt=i.getRenderTarget(),Lt=i.state.buffers.depth.getReversed(),Ct=P.isInstancedMesh===!0,N=P.isBatchedMesh===!0,V=!!b.map,ht=!!b.matcap,B=!!W,nt=!!b.aoMap,st=!!b.lightMap,lt=!!b.bumpMap,ft=!!b.normalMap,_t=!!b.displacementMap,dt=!!b.emissiveMap,Mt=!!b.metalnessMap,Qt=!!b.roughnessMap,Xt=b.anisotropy>0,U=b.clearcoat>0,R=b.dispersion>0,$=b.iridescence>0,ot=b.sheen>0,gt=b.transmission>0,pt=Xt&&!!b.anisotropyMap,Jt=U&&!!b.clearcoatMap,Rt=U&&!!b.clearcoatNormalMap,jt=U&&!!b.clearcoatRoughnessMap,Wt=$&&!!b.iridescenceMap,wt=$&&!!b.iridescenceThicknessMap,Ut=ot&&!!b.sheenColorMap,Ft=ot&&!!b.sheenRoughnessMap,ne=!!b.specularMap,Pt=!!b.specularColorMap,D=!!b.specularIntensityMap,C=gt&&!!b.transmissionMap,H=gt&&!!b.thicknessMap,Y=!!b.gradientMap,et=!!b.alphaMap,tt=b.alphaTest>0,Z=!!b.alphaHash,bt=!!b.extensions,St=tr;b.toneMapped&&(mt===null||mt.isXRRenderTarget===!0)&&(St=i.toneMapping);let kt={shaderID:K,shaderType:b.type,shaderName:b.name,vertexShader:ie,fragmentShader:de,defines:b.defines,customVertexShaderID:_e,customFragmentShaderID:it,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:d,batching:N,batchingColor:N&&P._colorsTexture!==null,instancing:Ct,instancingColor:Ct&&P.instanceColor!==null,instancingMorph:Ct&&P.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:mt===null?i.outputColorSpace:mt.isXRRenderTarget===!0?mt.texture.colorSpace:Or,alphaToCoverage:!!b.alphaToCoverage,map:V,matcap:ht,envMap:B,envMapMode:B&&W.mapping,envMapCubeUVHeight:q,aoMap:nt,lightMap:st,bumpMap:lt,normalMap:ft,displacementMap:f&&_t,emissiveMap:dt,normalMapObjectSpace:ft&&b.normalMapType===tf,normalMapTangentSpace:ft&&b.normalMapType===ju,metalnessMap:Mt,roughnessMap:Qt,anisotropy:Xt,anisotropyMap:pt,clearcoat:U,clearcoatMap:Jt,clearcoatNormalMap:Rt,clearcoatRoughnessMap:jt,dispersion:R,iridescence:$,iridescenceMap:Wt,iridescenceThicknessMap:wt,sheen:ot,sheenColorMap:Ut,sheenRoughnessMap:Ft,specularMap:ne,specularColorMap:Pt,specularIntensityMap:D,transmission:gt,transmissionMap:C,thicknessMap:H,gradientMap:Y,opaque:b.transparent===!1&&b.blending===Fr&&b.alphaToCoverage===!1,alphaMap:et,alphaTest:tt,alphaHash:Z,combine:b.combine,mapUv:V&&x(b.map.channel),aoMapUv:nt&&x(b.aoMap.channel),lightMapUv:st&&x(b.lightMap.channel),bumpMapUv:lt&&x(b.bumpMap.channel),normalMapUv:ft&&x(b.normalMap.channel),displacementMapUv:_t&&x(b.displacementMap.channel),emissiveMapUv:dt&&x(b.emissiveMap.channel),metalnessMapUv:Mt&&x(b.metalnessMap.channel),roughnessMapUv:Qt&&x(b.roughnessMap.channel),anisotropyMapUv:pt&&x(b.anisotropyMap.channel),clearcoatMapUv:Jt&&x(b.clearcoatMap.channel),clearcoatNormalMapUv:Rt&&x(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:jt&&x(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Wt&&x(b.iridescenceMap.channel),iridescenceThicknessMapUv:wt&&x(b.iridescenceThicknessMap.channel),sheenColorMapUv:Ut&&x(b.sheenColorMap.channel),sheenRoughnessMapUv:Ft&&x(b.sheenRoughnessMap.channel),specularMapUv:ne&&x(b.specularMap.channel),specularColorMapUv:Pt&&x(b.specularColorMap.channel),specularIntensityMapUv:D&&x(b.specularIntensityMap.channel),transmissionMapUv:C&&x(b.transmissionMap.channel),thicknessMapUv:H&&x(b.thicknessMap.channel),alphaMapUv:et&&x(b.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(ft||Xt),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:P.isPoints===!0&&!!z.attributes.uv&&(V||et),fog:!!O,useFog:b.fog===!0,fogExp2:!!O&&O.isFogExp2,flatShading:b.flatShading===!0&&b.wireframe===!1,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:Lt,skinning:P.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:vt,morphTextureStride:Gt,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&A.length>0,shadowMapType:i.shadowMap.type,toneMapping:St,decodeVideoTexture:V&&b.map.isVideoTexture===!0&&Ne.getTransfer(b.map.colorSpace)===ze,decodeVideoTextureEmissive:dt&&b.emissiveMap.isVideoTexture===!0&&Ne.getTransfer(b.emissiveMap.colorSpace)===ze,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===un,flipSided:b.side===Pn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:bt&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(bt&&b.extensions.multiDraw===!0||N)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return kt.vertexUv1s=c.has(1),kt.vertexUv2s=c.has(2),kt.vertexUv3s=c.has(3),c.clear(),kt}function m(b){let S=[];if(b.shaderID?S.push(b.shaderID):(S.push(b.customVertexShaderID),S.push(b.customFragmentShaderID)),b.defines!==void 0)for(let A in b.defines)S.push(A),S.push(b.defines[A]);return b.isRawShaderMaterial===!1&&(_(S,b),v(S,b),S.push(i.outputColorSpace)),S.push(b.customProgramCacheKey),S.join()}function _(b,S){b.push(S.precision),b.push(S.outputColorSpace),b.push(S.envMapMode),b.push(S.envMapCubeUVHeight),b.push(S.mapUv),b.push(S.alphaMapUv),b.push(S.lightMapUv),b.push(S.aoMapUv),b.push(S.bumpMapUv),b.push(S.normalMapUv),b.push(S.displacementMapUv),b.push(S.emissiveMapUv),b.push(S.metalnessMapUv),b.push(S.roughnessMapUv),b.push(S.anisotropyMapUv),b.push(S.clearcoatMapUv),b.push(S.clearcoatNormalMapUv),b.push(S.clearcoatRoughnessMapUv),b.push(S.iridescenceMapUv),b.push(S.iridescenceThicknessMapUv),b.push(S.sheenColorMapUv),b.push(S.sheenRoughnessMapUv),b.push(S.specularMapUv),b.push(S.specularColorMapUv),b.push(S.specularIntensityMapUv),b.push(S.transmissionMapUv),b.push(S.thicknessMapUv),b.push(S.combine),b.push(S.fogExp2),b.push(S.sizeAttenuation),b.push(S.morphTargetsCount),b.push(S.morphAttributeCount),b.push(S.numDirLights),b.push(S.numPointLights),b.push(S.numSpotLights),b.push(S.numSpotLightMaps),b.push(S.numHemiLights),b.push(S.numRectAreaLights),b.push(S.numDirLightShadows),b.push(S.numPointLightShadows),b.push(S.numSpotLightShadows),b.push(S.numSpotLightShadowsWithMaps),b.push(S.numLightProbes),b.push(S.shadowMapType),b.push(S.toneMapping),b.push(S.numClippingPlanes),b.push(S.numClipIntersection),b.push(S.depthPacking)}function v(b,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),S.gradientMap&&a.enable(22),b.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reversedDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),b.push(a.mask)}function y(b){let S=g[b.type],A;if(S){let I=Bi[S];A=Bn.clone(I.uniforms)}else A=b.uniforms;return A}function w(b,S){let A;for(let I=0,P=u.length;I<P;I++){let O=u[I];if(O.cacheKey===S){A=O,++A.usedTimes;break}}return A===void 0&&(A=new X1(i,S,b,s),u.push(A)),A}function M(b){if(--b.usedTimes===0){let S=u.indexOf(b);u[S]=u[u.length-1],u.pop(),b.destroy()}}function E(b){l.remove(b)}function T(){l.dispose()}return{getParameters:p,getProgramCacheKey:m,getUniforms:y,acquireProgram:w,releaseProgram:M,releaseShaderCache:E,programs:u,dispose:T}}function Z1(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function r(o,a,l){i.get(o)[a]=l}function s(){i=new WeakMap}return{has:t,get:e,remove:n,update:r,dispose:s}}function J1(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Of(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function zf(){let i=[],t=0,e=[],n=[],r=[];function s(){t=0,e.length=0,n.length=0,r.length=0}function o(h,f,d,g,x,p){let m=i[t];return m===void 0?(m={id:h.id,object:h,geometry:f,material:d,groupOrder:g,renderOrder:h.renderOrder,z:x,group:p},i[t]=m):(m.id=h.id,m.object=h,m.geometry=f,m.material=d,m.groupOrder=g,m.renderOrder=h.renderOrder,m.z=x,m.group=p),t++,m}function a(h,f,d,g,x,p){let m=o(h,f,d,g,x,p);d.transmission>0?n.push(m):d.transparent===!0?r.push(m):e.push(m)}function l(h,f,d,g,x,p){let m=o(h,f,d,g,x,p);d.transmission>0?n.unshift(m):d.transparent===!0?r.unshift(m):e.unshift(m)}function c(h,f){e.length>1&&e.sort(h||J1),n.length>1&&n.sort(f||Of),r.length>1&&r.sort(f||Of)}function u(){for(let h=t,f=i.length;h<f;h++){let d=i[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function $1(){let i=new WeakMap;function t(n,r){let s=i.get(n),o;return s===void 0?(o=new zf,i.set(n,[o])):r>=s.length?(o=new zf,s.push(o)):o=s[r],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function K1(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new k,color:new Ht};break;case"SpotLight":e={position:new k,direction:new k,color:new Ht,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new k,color:new Ht,distance:0,decay:0};break;case"HemisphereLight":e={direction:new k,skyColor:new Ht,groundColor:new Ht};break;case"RectAreaLight":e={color:new Ht,position:new k,halfWidth:new k,halfHeight:new k};break}return i[t.id]=e,e}}}function Q1(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var j1=0;function tx(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function ex(i){let t=new K1,e=Q1(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new k);let r=new k,s=new Fe,o=new Fe;function a(c){let u=0,h=0,f=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let d=0,g=0,x=0,p=0,m=0,_=0,v=0,y=0,w=0,M=0,E=0;c.sort(tx);for(let b=0,S=c.length;b<S;b++){let A=c[b],I=A.color,P=A.intensity,O=A.distance,z=A.shadow&&A.shadow.map?A.shadow.map.texture:null;if(A.isAmbientLight)u+=I.r*P,h+=I.g*P,f+=I.b*P;else if(A.isLightProbe){for(let F=0;F<9;F++)n.probe[F].addScaledVector(A.sh.coefficients[F],P);E++}else if(A.isDirectionalLight){let F=t.get(A);if(F.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){let W=A.shadow,q=e.get(A);q.shadowIntensity=W.intensity,q.shadowBias=W.bias,q.shadowNormalBias=W.normalBias,q.shadowRadius=W.radius,q.shadowMapSize=W.mapSize,n.directionalShadow[d]=q,n.directionalShadowMap[d]=z,n.directionalShadowMatrix[d]=A.shadow.matrix,_++}n.directional[d]=F,d++}else if(A.isSpotLight){let F=t.get(A);F.position.setFromMatrixPosition(A.matrixWorld),F.color.copy(I).multiplyScalar(P),F.distance=O,F.coneCos=Math.cos(A.angle),F.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),F.decay=A.decay,n.spot[x]=F;let W=A.shadow;if(A.map&&(n.spotLightMap[w]=A.map,w++,W.updateMatrices(A),A.castShadow&&M++),n.spotLightMatrix[x]=W.matrix,A.castShadow){let q=e.get(A);q.shadowIntensity=W.intensity,q.shadowBias=W.bias,q.shadowNormalBias=W.normalBias,q.shadowRadius=W.radius,q.shadowMapSize=W.mapSize,n.spotShadow[x]=q,n.spotShadowMap[x]=z,y++}x++}else if(A.isRectAreaLight){let F=t.get(A);F.color.copy(I).multiplyScalar(P),F.halfWidth.set(A.width*.5,0,0),F.halfHeight.set(0,A.height*.5,0),n.rectArea[p]=F,p++}else if(A.isPointLight){let F=t.get(A);if(F.color.copy(A.color).multiplyScalar(A.intensity),F.distance=A.distance,F.decay=A.decay,A.castShadow){let W=A.shadow,q=e.get(A);q.shadowIntensity=W.intensity,q.shadowBias=W.bias,q.shadowNormalBias=W.normalBias,q.shadowRadius=W.radius,q.shadowMapSize=W.mapSize,q.shadowCameraNear=W.camera.near,q.shadowCameraFar=W.camera.far,n.pointShadow[g]=q,n.pointShadowMap[g]=z,n.pointShadowMatrix[g]=A.shadow.matrix,v++}n.point[g]=F,g++}else if(A.isHemisphereLight){let F=t.get(A);F.skyColor.copy(A.color).multiplyScalar(P),F.groundColor.copy(A.groundColor).multiplyScalar(P),n.hemi[m]=F,m++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=It.LTC_FLOAT_1,n.rectAreaLTC2=It.LTC_FLOAT_2):(n.rectAreaLTC1=It.LTC_HALF_1,n.rectAreaLTC2=It.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=f;let T=n.hash;(T.directionalLength!==d||T.pointLength!==g||T.spotLength!==x||T.rectAreaLength!==p||T.hemiLength!==m||T.numDirectionalShadows!==_||T.numPointShadows!==v||T.numSpotShadows!==y||T.numSpotMaps!==w||T.numLightProbes!==E)&&(n.directional.length=d,n.spot.length=x,n.rectArea.length=p,n.point.length=g,n.hemi.length=m,n.directionalShadow.length=_,n.directionalShadowMap.length=_,n.pointShadow.length=v,n.pointShadowMap.length=v,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=_,n.pointShadowMatrix.length=v,n.spotLightMatrix.length=y+w-M,n.spotLightMap.length=w,n.numSpotLightShadowsWithMaps=M,n.numLightProbes=E,T.directionalLength=d,T.pointLength=g,T.spotLength=x,T.rectAreaLength=p,T.hemiLength=m,T.numDirectionalShadows=_,T.numPointShadows=v,T.numSpotShadows=y,T.numSpotMaps=w,T.numLightProbes=E,n.version=j1++)}function l(c,u){let h=0,f=0,d=0,g=0,x=0,p=u.matrixWorldInverse;for(let m=0,_=c.length;m<_;m++){let v=c[m];if(v.isDirectionalLight){let y=n.directional[h];y.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(p),h++}else if(v.isSpotLight){let y=n.spot[d];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(p),y.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(p),d++}else if(v.isRectAreaLight){let y=n.rectArea[g];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(p),o.identity(),s.copy(v.matrixWorld),s.premultiply(p),o.extractRotation(s),y.halfWidth.set(v.width*.5,0,0),y.halfHeight.set(0,v.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),g++}else if(v.isPointLight){let y=n.point[f];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(p),f++}else if(v.isHemisphereLight){let y=n.hemi[x];y.direction.setFromMatrixPosition(v.matrixWorld),y.direction.transformDirection(p),x++}}}return{setup:a,setupView:l,state:n}}function kf(i){let t=new ex(i),e=[],n=[];function r(u){c.camera=u,e.length=0,n.length=0}function s(u){e.push(u)}function o(u){n.push(u)}function a(){t.setup(e)}function l(u){t.setupView(e,u)}let c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function nx(i){let t=new WeakMap;function e(r,s=0){let o=t.get(r),a;return o===void 0?(a=new kf(i),t.set(r,[a])):s>=o.length?(a=new kf(i),o.push(a)):a=o[s],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var ix=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,rx=`uniform sampler2D shadow_pass;
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
}`;function sx(i,t,e){let n=new bo,r=new xt,s=new xt,o=new tn,a=new ka({depthPacking:Qu}),l=new Ha,c={},u=e.maxTextureSize,h={[ni]:Pn,[Pn]:ni,[un]:un},f=new He({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new xt},radius:{value:4}},vertexShader:ix,fragmentShader:rx}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let g=new Le;g.setAttribute("position",new Pe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new le(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=sh;let m=this.type;this.render=function(M,E,T){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||M.length===0)return;let b=i.getRenderTarget(),S=i.getActiveCubeFace(),A=i.getActiveMipmapLevel(),I=i.state;I.setBlending(Ai),I.buffers.depth.getReversed()===!0?I.buffers.color.setClear(0,0,0,0):I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);let P=m!==Ui&&this.type===Ui,O=m===Ui&&this.type!==Ui;for(let z=0,F=M.length;z<F;z++){let W=M[z],q=W.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",W,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;r.copy(q.mapSize);let K=q.getFrameExtents();if(r.multiply(K),s.copy(q.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/K.x),r.x=s.x*K.x,q.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/K.y),r.y=s.y*K.y,q.mapSize.y=s.y)),q.map===null||P===!0||O===!0){let vt=this.type!==Ui?{minFilter:Jn,magFilter:Jn}:{};q.map!==null&&q.map.dispose(),q.map=new wn(r.x,r.y,vt),q.map.texture.name=W.name+".shadowMap",q.camera.updateProjectionMatrix()}i.setRenderTarget(q.map),i.clear();let rt=q.getViewportCount();for(let vt=0;vt<rt;vt++){let Gt=q.getViewport(vt);o.set(s.x*Gt.x,s.y*Gt.y,s.x*Gt.z,s.y*Gt.w),I.viewport(o),q.updateMatrices(W,vt),n=q.getFrustum(),y(E,T,q.camera,W,this.type)}q.isPointLightShadow!==!0&&this.type===Ui&&_(q,T),q.needsUpdate=!1}m=this.type,p.needsUpdate=!1,i.setRenderTarget(b,S,A)};function _(M,E){let T=t.update(x);f.defines.VSM_SAMPLES!==M.blurSamples&&(f.defines.VSM_SAMPLES=M.blurSamples,d.defines.VSM_SAMPLES=M.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new wn(r.x,r.y)),f.uniforms.shadow_pass.value=M.map.texture,f.uniforms.resolution.value=M.mapSize,f.uniforms.radius.value=M.radius,i.setRenderTarget(M.mapPass),i.clear(),i.renderBufferDirect(E,null,T,f,x,null),d.uniforms.shadow_pass.value=M.mapPass.texture,d.uniforms.resolution.value=M.mapSize,d.uniforms.radius.value=M.radius,i.setRenderTarget(M.map),i.clear(),i.renderBufferDirect(E,null,T,d,x,null)}function v(M,E,T,b){let S=null,A=T.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(A!==void 0)S=A;else if(S=T.isPointLight===!0?l:a,i.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0||E.alphaToCoverage===!0){let I=S.uuid,P=E.uuid,O=c[I];O===void 0&&(O={},c[I]=O);let z=O[P];z===void 0&&(z=S.clone(),O[P]=z,E.addEventListener("dispose",w)),S=z}if(S.visible=E.visible,S.wireframe=E.wireframe,b===Ui?S.side=E.shadowSide!==null?E.shadowSide:E.side:S.side=E.shadowSide!==null?E.shadowSide:h[E.side],S.alphaMap=E.alphaMap,S.alphaTest=E.alphaToCoverage===!0?.5:E.alphaTest,S.map=E.map,S.clipShadows=E.clipShadows,S.clippingPlanes=E.clippingPlanes,S.clipIntersection=E.clipIntersection,S.displacementMap=E.displacementMap,S.displacementScale=E.displacementScale,S.displacementBias=E.displacementBias,S.wireframeLinewidth=E.wireframeLinewidth,S.linewidth=E.linewidth,T.isPointLight===!0&&S.isMeshDistanceMaterial===!0){let I=i.properties.get(S);I.light=T}return S}function y(M,E,T,b,S){if(M.visible===!1)return;if(M.layers.test(E.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&S===Ui)&&(!M.frustumCulled||n.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,M.matrixWorld);let P=t.update(M),O=M.material;if(Array.isArray(O)){let z=P.groups;for(let F=0,W=z.length;F<W;F++){let q=z[F],K=O[q.materialIndex];if(K&&K.visible){let rt=v(M,K,b,S);M.onBeforeShadow(i,M,E,T,P,rt,q),i.renderBufferDirect(T,null,P,rt,M,q),M.onAfterShadow(i,M,E,T,P,rt,q)}}}else if(O.visible){let z=v(M,O,b,S);M.onBeforeShadow(i,M,E,T,P,z,null),i.renderBufferDirect(T,null,P,z,M,null),M.onAfterShadow(i,M,E,T,P,z,null)}}let I=M.children;for(let P=0,O=I.length;P<O;P++)y(I[P],E,T,b,S)}function w(M){M.target.removeEventListener("dispose",w);for(let T in c){let b=c[T],S=M.target.uuid;S in b&&(b[S].dispose(),delete b[S])}}}var ox={[Qa]:ja,[tl]:il,[el]:rl,[Br]:nl,[ja]:Qa,[il]:tl,[rl]:el,[nl]:Br};function ax(i,t){function e(){let C=!1,H=new tn,Y=null,et=new tn(0,0,0,0);return{setMask:function(tt){Y!==tt&&!C&&(i.colorMask(tt,tt,tt,tt),Y=tt)},setLocked:function(tt){C=tt},setClear:function(tt,Z,bt,St,kt){kt===!0&&(tt*=St,Z*=St,bt*=St),H.set(tt,Z,bt,St),et.equals(H)===!1&&(i.clearColor(tt,Z,bt,St),et.copy(H))},reset:function(){C=!1,Y=null,et.set(-1,0,0,0)}}}function n(){let C=!1,H=!1,Y=null,et=null,tt=null;return{setReversed:function(Z){if(H!==Z){let bt=t.get("EXT_clip_control");Z?bt.clipControlEXT(bt.LOWER_LEFT_EXT,bt.ZERO_TO_ONE_EXT):bt.clipControlEXT(bt.LOWER_LEFT_EXT,bt.NEGATIVE_ONE_TO_ONE_EXT),H=Z;let St=tt;tt=null,this.setClear(St)}},getReversed:function(){return H},setTest:function(Z){Z?mt(i.DEPTH_TEST):Lt(i.DEPTH_TEST)},setMask:function(Z){Y!==Z&&!C&&(i.depthMask(Z),Y=Z)},setFunc:function(Z){if(H&&(Z=ox[Z]),et!==Z){switch(Z){case Qa:i.depthFunc(i.NEVER);break;case ja:i.depthFunc(i.ALWAYS);break;case tl:i.depthFunc(i.LESS);break;case Br:i.depthFunc(i.LEQUAL);break;case el:i.depthFunc(i.EQUAL);break;case nl:i.depthFunc(i.GEQUAL);break;case il:i.depthFunc(i.GREATER);break;case rl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}et=Z}},setLocked:function(Z){C=Z},setClear:function(Z){tt!==Z&&(H&&(Z=1-Z),i.clearDepth(Z),tt=Z)},reset:function(){C=!1,Y=null,et=null,tt=null,H=!1}}}function r(){let C=!1,H=null,Y=null,et=null,tt=null,Z=null,bt=null,St=null,kt=null;return{setTest:function(oe){C||(oe?mt(i.STENCIL_TEST):Lt(i.STENCIL_TEST))},setMask:function(oe){H!==oe&&!C&&(i.stencilMask(oe),H=oe)},setFunc:function(oe,Se,Oe){(Y!==oe||et!==Se||tt!==Oe)&&(i.stencilFunc(oe,Se,Oe),Y=oe,et=Se,tt=Oe)},setOp:function(oe,Se,Oe){(Z!==oe||bt!==Se||St!==Oe)&&(i.stencilOp(oe,Se,Oe),Z=oe,bt=Se,St=Oe)},setLocked:function(oe){C=oe},setClear:function(oe){kt!==oe&&(i.clearStencil(oe),kt=oe)},reset:function(){C=!1,H=null,Y=null,et=null,tt=null,Z=null,bt=null,St=null,kt=null}}}let s=new e,o=new n,a=new r,l=new WeakMap,c=new WeakMap,u={},h={},f=new WeakMap,d=[],g=null,x=!1,p=null,m=null,_=null,v=null,y=null,w=null,M=null,E=new Ht(0,0,0),T=0,b=!1,S=null,A=null,I=null,P=null,O=null,z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),F=!1,W=0,q=i.getParameter(i.VERSION);q.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(q)[1]),F=W>=1):q.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),F=W>=2);let K=null,rt={},vt=i.getParameter(i.SCISSOR_BOX),Gt=i.getParameter(i.VIEWPORT),ie=new tn().fromArray(vt),de=new tn().fromArray(Gt);function _e(C,H,Y,et){let tt=new Uint8Array(4),Z=i.createTexture();i.bindTexture(C,Z),i.texParameteri(C,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(C,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let bt=0;bt<Y;bt++)C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY?i.texImage3D(H,0,i.RGBA,1,1,et,0,i.RGBA,i.UNSIGNED_BYTE,tt):i.texImage2D(H+bt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,tt);return Z}let it={};it[i.TEXTURE_2D]=_e(i.TEXTURE_2D,i.TEXTURE_2D,1),it[i.TEXTURE_CUBE_MAP]=_e(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),it[i.TEXTURE_2D_ARRAY]=_e(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),it[i.TEXTURE_3D]=_e(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),mt(i.DEPTH_TEST),o.setFunc(Br),lt(!1),ft(rh),mt(i.CULL_FACE),nt(Ai);function mt(C){u[C]!==!0&&(i.enable(C),u[C]=!0)}function Lt(C){u[C]!==!1&&(i.disable(C),u[C]=!1)}function Ct(C,H){return h[C]!==H?(i.bindFramebuffer(C,H),h[C]=H,C===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=H),C===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=H),!0):!1}function N(C,H){let Y=d,et=!1;if(C){Y=f.get(H),Y===void 0&&(Y=[],f.set(H,Y));let tt=C.textures;if(Y.length!==tt.length||Y[0]!==i.COLOR_ATTACHMENT0){for(let Z=0,bt=tt.length;Z<bt;Z++)Y[Z]=i.COLOR_ATTACHMENT0+Z;Y.length=tt.length,et=!0}}else Y[0]!==i.BACK&&(Y[0]=i.BACK,et=!0);et&&i.drawBuffers(Y)}function V(C){return g!==C?(i.useProgram(C),g=C,!0):!1}let ht={[dr]:i.FUNC_ADD,[Iu]:i.FUNC_SUBTRACT,[Du]:i.FUNC_REVERSE_SUBTRACT};ht[Lu]=i.MIN,ht[Uu]=i.MAX;let B={[Nu]:i.ZERO,[Fu]:i.ONE,[Bu]:i.SRC_COLOR,[ba]:i.SRC_ALPHA,[Gu]:i.SRC_ALPHA_SATURATE,[Hu]:i.DST_COLOR,[zu]:i.DST_ALPHA,[Ou]:i.ONE_MINUS_SRC_COLOR,[Sa]:i.ONE_MINUS_SRC_ALPHA,[Vu]:i.ONE_MINUS_DST_COLOR,[ku]:i.ONE_MINUS_DST_ALPHA,[Wu]:i.CONSTANT_COLOR,[Xu]:i.ONE_MINUS_CONSTANT_COLOR,[qu]:i.CONSTANT_ALPHA,[Yu]:i.ONE_MINUS_CONSTANT_ALPHA};function nt(C,H,Y,et,tt,Z,bt,St,kt,oe){if(C===Ai){x===!0&&(Lt(i.BLEND),x=!1);return}if(x===!1&&(mt(i.BLEND),x=!0),C!==Pu){if(C!==p||oe!==b){if((m!==dr||y!==dr)&&(i.blendEquation(i.FUNC_ADD),m=dr,y=dr),oe)switch(C){case Fr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case fn:i.blendFunc(i.ONE,i.ONE);break;case oh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ah:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}else switch(C){case Fr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case fn:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case oh:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ah:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}_=null,v=null,w=null,M=null,E.set(0,0,0),T=0,p=C,b=oe}return}tt=tt||H,Z=Z||Y,bt=bt||et,(H!==m||tt!==y)&&(i.blendEquationSeparate(ht[H],ht[tt]),m=H,y=tt),(Y!==_||et!==v||Z!==w||bt!==M)&&(i.blendFuncSeparate(B[Y],B[et],B[Z],B[bt]),_=Y,v=et,w=Z,M=bt),(St.equals(E)===!1||kt!==T)&&(i.blendColor(St.r,St.g,St.b,kt),E.copy(St),T=kt),p=C,b=!1}function st(C,H){C.side===un?Lt(i.CULL_FACE):mt(i.CULL_FACE);let Y=C.side===Pn;H&&(Y=!Y),lt(Y),C.blending===Fr&&C.transparent===!1?nt(Ai):nt(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.blendColor,C.blendAlpha,C.premultipliedAlpha),o.setFunc(C.depthFunc),o.setTest(C.depthTest),o.setMask(C.depthWrite),s.setMask(C.colorWrite);let et=C.stencilWrite;a.setTest(et),et&&(a.setMask(C.stencilWriteMask),a.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),a.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),dt(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?mt(i.SAMPLE_ALPHA_TO_COVERAGE):Lt(i.SAMPLE_ALPHA_TO_COVERAGE)}function lt(C){S!==C&&(C?i.frontFace(i.CW):i.frontFace(i.CCW),S=C)}function ft(C){C!==Au?(mt(i.CULL_FACE),C!==A&&(C===rh?i.cullFace(i.BACK):C===Ru?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Lt(i.CULL_FACE),A=C}function _t(C){C!==I&&(F&&i.lineWidth(C),I=C)}function dt(C,H,Y){C?(mt(i.POLYGON_OFFSET_FILL),(P!==H||O!==Y)&&(i.polygonOffset(H,Y),P=H,O=Y)):Lt(i.POLYGON_OFFSET_FILL)}function Mt(C){C?mt(i.SCISSOR_TEST):Lt(i.SCISSOR_TEST)}function Qt(C){C===void 0&&(C=i.TEXTURE0+z-1),K!==C&&(i.activeTexture(C),K=C)}function Xt(C,H,Y){Y===void 0&&(K===null?Y=i.TEXTURE0+z-1:Y=K);let et=rt[Y];et===void 0&&(et={type:void 0,texture:void 0},rt[Y]=et),(et.type!==C||et.texture!==H)&&(K!==Y&&(i.activeTexture(Y),K=Y),i.bindTexture(C,H||it[C]),et.type=C,et.texture=H)}function U(){let C=rt[K];C!==void 0&&C.type!==void 0&&(i.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function R(){try{i.compressedTexImage2D(...arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function $(){try{i.compressedTexImage3D(...arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ot(){try{i.texSubImage2D(...arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function gt(){try{i.texSubImage3D(...arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function pt(){try{i.compressedTexSubImage2D(...arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Jt(){try{i.compressedTexSubImage3D(...arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Rt(){try{i.texStorage2D(...arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function jt(){try{i.texStorage3D(...arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Wt(){try{i.texImage2D(...arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function wt(){try{i.texImage3D(...arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Ut(C){ie.equals(C)===!1&&(i.scissor(C.x,C.y,C.z,C.w),ie.copy(C))}function Ft(C){de.equals(C)===!1&&(i.viewport(C.x,C.y,C.z,C.w),de.copy(C))}function ne(C,H){let Y=c.get(H);Y===void 0&&(Y=new WeakMap,c.set(H,Y));let et=Y.get(C);et===void 0&&(et=i.getUniformBlockIndex(H,C.name),Y.set(C,et))}function Pt(C,H){let et=c.get(H).get(C);l.get(H)!==et&&(i.uniformBlockBinding(H,et,C.__bindingPointIndex),l.set(H,et))}function D(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},K=null,rt={},h={},f=new WeakMap,d=[],g=null,x=!1,p=null,m=null,_=null,v=null,y=null,w=null,M=null,E=new Ht(0,0,0),T=0,b=!1,S=null,A=null,I=null,P=null,O=null,ie.set(0,0,i.canvas.width,i.canvas.height),de.set(0,0,i.canvas.width,i.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:mt,disable:Lt,bindFramebuffer:Ct,drawBuffers:N,useProgram:V,setBlending:nt,setMaterial:st,setFlipSided:lt,setCullFace:ft,setLineWidth:_t,setPolygonOffset:dt,setScissorTest:Mt,activeTexture:Qt,bindTexture:Xt,unbindTexture:U,compressedTexImage2D:R,compressedTexImage3D:$,texImage2D:Wt,texImage3D:wt,updateUBOMapping:ne,uniformBlockBinding:Pt,texStorage2D:Rt,texStorage3D:jt,texSubImage2D:ot,texSubImage3D:gt,compressedTexSubImage2D:pt,compressedTexSubImage3D:Jt,scissor:Ut,viewport:Ft,reset:D}}function lx(i,t,e,n,r,s,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new xt,u=new WeakMap,h,f=new WeakMap,d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(U,R){return d?new OffscreenCanvas(U,R):fo("canvas")}function x(U,R,$){let ot=1,gt=Xt(U);if((gt.width>$||gt.height>$)&&(ot=$/Math.max(gt.width,gt.height)),ot<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){let pt=Math.floor(ot*gt.width),Jt=Math.floor(ot*gt.height);h===void 0&&(h=g(pt,Jt));let Rt=R?g(pt,Jt):h;return Rt.width=pt,Rt.height=Jt,Rt.getContext("2d").drawImage(U,0,0,pt,Jt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+gt.width+"x"+gt.height+") to ("+pt+"x"+Jt+")."),Rt}else return"data"in U&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+gt.width+"x"+gt.height+")."),U;return U}function p(U){return U.generateMipmaps}function m(U){i.generateMipmap(U)}function _(U){return U.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?i.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function v(U,R,$,ot,gt=!1){if(U!==null){if(i[U]!==void 0)return i[U];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let pt=R;if(R===i.RED&&($===i.FLOAT&&(pt=i.R32F),$===i.HALF_FLOAT&&(pt=i.R16F),$===i.UNSIGNED_BYTE&&(pt=i.R8)),R===i.RED_INTEGER&&($===i.UNSIGNED_BYTE&&(pt=i.R8UI),$===i.UNSIGNED_SHORT&&(pt=i.R16UI),$===i.UNSIGNED_INT&&(pt=i.R32UI),$===i.BYTE&&(pt=i.R8I),$===i.SHORT&&(pt=i.R16I),$===i.INT&&(pt=i.R32I)),R===i.RG&&($===i.FLOAT&&(pt=i.RG32F),$===i.HALF_FLOAT&&(pt=i.RG16F),$===i.UNSIGNED_BYTE&&(pt=i.RG8)),R===i.RG_INTEGER&&($===i.UNSIGNED_BYTE&&(pt=i.RG8UI),$===i.UNSIGNED_SHORT&&(pt=i.RG16UI),$===i.UNSIGNED_INT&&(pt=i.RG32UI),$===i.BYTE&&(pt=i.RG8I),$===i.SHORT&&(pt=i.RG16I),$===i.INT&&(pt=i.RG32I)),R===i.RGB_INTEGER&&($===i.UNSIGNED_BYTE&&(pt=i.RGB8UI),$===i.UNSIGNED_SHORT&&(pt=i.RGB16UI),$===i.UNSIGNED_INT&&(pt=i.RGB32UI),$===i.BYTE&&(pt=i.RGB8I),$===i.SHORT&&(pt=i.RGB16I),$===i.INT&&(pt=i.RGB32I)),R===i.RGBA_INTEGER&&($===i.UNSIGNED_BYTE&&(pt=i.RGBA8UI),$===i.UNSIGNED_SHORT&&(pt=i.RGBA16UI),$===i.UNSIGNED_INT&&(pt=i.RGBA32UI),$===i.BYTE&&(pt=i.RGBA8I),$===i.SHORT&&(pt=i.RGBA16I),$===i.INT&&(pt=i.RGBA32I)),R===i.RGB&&($===i.UNSIGNED_INT_5_9_9_9_REV&&(pt=i.RGB9_E5),$===i.UNSIGNED_INT_10F_11F_11F_REV&&(pt=i.R11F_G11F_B10F)),R===i.RGBA){let Jt=gt?ho:Ne.getTransfer(ot);$===i.FLOAT&&(pt=i.RGBA32F),$===i.HALF_FLOAT&&(pt=i.RGBA16F),$===i.UNSIGNED_BYTE&&(pt=Jt===ze?i.SRGB8_ALPHA8:i.RGBA8),$===i.UNSIGNED_SHORT_4_4_4_4&&(pt=i.RGBA4),$===i.UNSIGNED_SHORT_5_5_5_1&&(pt=i.RGB5_A1)}return(pt===i.R16F||pt===i.R32F||pt===i.RG16F||pt===i.RG32F||pt===i.RGBA16F||pt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),pt}function y(U,R){let $;return U?R===null||R===vr||R===Us?$=i.DEPTH24_STENCIL8:R===Fi?$=i.DEPTH32F_STENCIL8:R===Ls&&($=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):R===null||R===vr||R===Us?$=i.DEPTH_COMPONENT24:R===Fi?$=i.DEPTH_COMPONENT32F:R===Ls&&($=i.DEPTH_COMPONENT16),$}function w(U,R){return p(U)===!0||U.isFramebufferTexture&&U.minFilter!==Jn&&U.minFilter!==wi?Math.log2(Math.max(R.width,R.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?R.mipmaps.length:1}function M(U){let R=U.target;R.removeEventListener("dispose",M),T(R),R.isVideoTexture&&u.delete(R)}function E(U){let R=U.target;R.removeEventListener("dispose",E),S(R)}function T(U){let R=n.get(U);if(R.__webglInit===void 0)return;let $=U.source,ot=f.get($);if(ot){let gt=ot[R.__cacheKey];gt.usedTimes--,gt.usedTimes===0&&b(U),Object.keys(ot).length===0&&f.delete($)}n.remove(U)}function b(U){let R=n.get(U);i.deleteTexture(R.__webglTexture);let $=U.source,ot=f.get($);delete ot[R.__cacheKey],o.memory.textures--}function S(U){let R=n.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),n.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let ot=0;ot<6;ot++){if(Array.isArray(R.__webglFramebuffer[ot]))for(let gt=0;gt<R.__webglFramebuffer[ot].length;gt++)i.deleteFramebuffer(R.__webglFramebuffer[ot][gt]);else i.deleteFramebuffer(R.__webglFramebuffer[ot]);R.__webglDepthbuffer&&i.deleteRenderbuffer(R.__webglDepthbuffer[ot])}else{if(Array.isArray(R.__webglFramebuffer))for(let ot=0;ot<R.__webglFramebuffer.length;ot++)i.deleteFramebuffer(R.__webglFramebuffer[ot]);else i.deleteFramebuffer(R.__webglFramebuffer);if(R.__webglDepthbuffer&&i.deleteRenderbuffer(R.__webglDepthbuffer),R.__webglMultisampledFramebuffer&&i.deleteFramebuffer(R.__webglMultisampledFramebuffer),R.__webglColorRenderbuffer)for(let ot=0;ot<R.__webglColorRenderbuffer.length;ot++)R.__webglColorRenderbuffer[ot]&&i.deleteRenderbuffer(R.__webglColorRenderbuffer[ot]);R.__webglDepthRenderbuffer&&i.deleteRenderbuffer(R.__webglDepthRenderbuffer)}let $=U.textures;for(let ot=0,gt=$.length;ot<gt;ot++){let pt=n.get($[ot]);pt.__webglTexture&&(i.deleteTexture(pt.__webglTexture),o.memory.textures--),n.remove($[ot])}n.remove(U)}let A=0;function I(){A=0}function P(){let U=A;return U>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+r.maxTextures),A+=1,U}function O(U){let R=[];return R.push(U.wrapS),R.push(U.wrapT),R.push(U.wrapR||0),R.push(U.magFilter),R.push(U.minFilter),R.push(U.anisotropy),R.push(U.internalFormat),R.push(U.format),R.push(U.type),R.push(U.generateMipmaps),R.push(U.premultiplyAlpha),R.push(U.flipY),R.push(U.unpackAlignment),R.push(U.colorSpace),R.join()}function z(U,R){let $=n.get(U);if(U.isVideoTexture&&Mt(U),U.isRenderTargetTexture===!1&&U.isExternalTexture!==!0&&U.version>0&&$.__version!==U.version){let ot=U.image;if(ot===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ot.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{it($,U,R);return}}else U.isExternalTexture&&($.__webglTexture=U.sourceTexture?U.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,$.__webglTexture,i.TEXTURE0+R)}function F(U,R){let $=n.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&$.__version!==U.version){it($,U,R);return}e.bindTexture(i.TEXTURE_2D_ARRAY,$.__webglTexture,i.TEXTURE0+R)}function W(U,R){let $=n.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&$.__version!==U.version){it($,U,R);return}e.bindTexture(i.TEXTURE_3D,$.__webglTexture,i.TEXTURE0+R)}function q(U,R){let $=n.get(U);if(U.version>0&&$.__version!==U.version){mt($,U,R);return}e.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture,i.TEXTURE0+R)}let K={[Ei]:i.REPEAT,[fr]:i.CLAMP_TO_EDGE,[Ea]:i.MIRRORED_REPEAT},rt={[Jn]:i.NEAREST,[$u]:i.NEAREST_MIPMAP_NEAREST,[Oo]:i.NEAREST_MIPMAP_LINEAR,[wi]:i.LINEAR,[dl]:i.LINEAR_MIPMAP_NEAREST,[_r]:i.LINEAR_MIPMAP_LINEAR},vt={[ef]:i.NEVER,[lf]:i.ALWAYS,[nf]:i.LESS,[_h]:i.LEQUAL,[rf]:i.EQUAL,[af]:i.GEQUAL,[sf]:i.GREATER,[of]:i.NOTEQUAL};function Gt(U,R){if(R.type===Fi&&t.has("OES_texture_float_linear")===!1&&(R.magFilter===wi||R.magFilter===dl||R.magFilter===Oo||R.magFilter===_r||R.minFilter===wi||R.minFilter===dl||R.minFilter===Oo||R.minFilter===_r)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(U,i.TEXTURE_WRAP_S,K[R.wrapS]),i.texParameteri(U,i.TEXTURE_WRAP_T,K[R.wrapT]),(U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY)&&i.texParameteri(U,i.TEXTURE_WRAP_R,K[R.wrapR]),i.texParameteri(U,i.TEXTURE_MAG_FILTER,rt[R.magFilter]),i.texParameteri(U,i.TEXTURE_MIN_FILTER,rt[R.minFilter]),R.compareFunction&&(i.texParameteri(U,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(U,i.TEXTURE_COMPARE_FUNC,vt[R.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(R.magFilter===Jn||R.minFilter!==Oo&&R.minFilter!==_r||R.type===Fi&&t.has("OES_texture_float_linear")===!1)return;if(R.anisotropy>1||n.get(R).__currentAnisotropy){let $=t.get("EXT_texture_filter_anisotropic");i.texParameterf(U,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(R.anisotropy,r.getMaxAnisotropy())),n.get(R).__currentAnisotropy=R.anisotropy}}}function ie(U,R){let $=!1;U.__webglInit===void 0&&(U.__webglInit=!0,R.addEventListener("dispose",M));let ot=R.source,gt=f.get(ot);gt===void 0&&(gt={},f.set(ot,gt));let pt=O(R);if(pt!==U.__cacheKey){gt[pt]===void 0&&(gt[pt]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,$=!0),gt[pt].usedTimes++;let Jt=gt[U.__cacheKey];Jt!==void 0&&(gt[U.__cacheKey].usedTimes--,Jt.usedTimes===0&&b(R)),U.__cacheKey=pt,U.__webglTexture=gt[pt].texture}return $}function de(U,R,$){return Math.floor(Math.floor(U/$)/R)}function _e(U,R,$,ot){let pt=U.updateRanges;if(pt.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,R.width,R.height,$,ot,R.data);else{pt.sort((wt,Ut)=>wt.start-Ut.start);let Jt=0;for(let wt=1;wt<pt.length;wt++){let Ut=pt[Jt],Ft=pt[wt],ne=Ut.start+Ut.count,Pt=de(Ft.start,R.width,4),D=de(Ut.start,R.width,4);Ft.start<=ne+1&&Pt===D&&de(Ft.start+Ft.count-1,R.width,4)===Pt?Ut.count=Math.max(Ut.count,Ft.start+Ft.count-Ut.start):(++Jt,pt[Jt]=Ft)}pt.length=Jt+1;let Rt=i.getParameter(i.UNPACK_ROW_LENGTH),jt=i.getParameter(i.UNPACK_SKIP_PIXELS),Wt=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,R.width);for(let wt=0,Ut=pt.length;wt<Ut;wt++){let Ft=pt[wt],ne=Math.floor(Ft.start/4),Pt=Math.ceil(Ft.count/4),D=ne%R.width,C=Math.floor(ne/R.width),H=Pt,Y=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,D),i.pixelStorei(i.UNPACK_SKIP_ROWS,C),e.texSubImage2D(i.TEXTURE_2D,0,D,C,H,Y,$,ot,R.data)}U.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,Rt),i.pixelStorei(i.UNPACK_SKIP_PIXELS,jt),i.pixelStorei(i.UNPACK_SKIP_ROWS,Wt)}}function it(U,R,$){let ot=i.TEXTURE_2D;(R.isDataArrayTexture||R.isCompressedArrayTexture)&&(ot=i.TEXTURE_2D_ARRAY),R.isData3DTexture&&(ot=i.TEXTURE_3D);let gt=ie(U,R),pt=R.source;e.bindTexture(ot,U.__webglTexture,i.TEXTURE0+$);let Jt=n.get(pt);if(pt.version!==Jt.__version||gt===!0){e.activeTexture(i.TEXTURE0+$);let Rt=Ne.getPrimaries(Ne.workingColorSpace),jt=R.colorSpace===er?null:Ne.getPrimaries(R.colorSpace),Wt=R.colorSpace===er||Rt===jt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,R.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,R.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Wt);let wt=x(R.image,!1,r.maxTextureSize);wt=Qt(R,wt);let Ut=s.convert(R.format,R.colorSpace),Ft=s.convert(R.type),ne=v(R.internalFormat,Ut,Ft,R.colorSpace,R.isVideoTexture);Gt(ot,R);let Pt,D=R.mipmaps,C=R.isVideoTexture!==!0,H=Jt.__version===void 0||gt===!0,Y=pt.dataReady,et=w(R,wt);if(R.isDepthTexture)ne=y(R.format===Ns,R.type),H&&(C?e.texStorage2D(i.TEXTURE_2D,1,ne,wt.width,wt.height):e.texImage2D(i.TEXTURE_2D,0,ne,wt.width,wt.height,0,Ut,Ft,null));else if(R.isDataTexture)if(D.length>0){C&&H&&e.texStorage2D(i.TEXTURE_2D,et,ne,D[0].width,D[0].height);for(let tt=0,Z=D.length;tt<Z;tt++)Pt=D[tt],C?Y&&e.texSubImage2D(i.TEXTURE_2D,tt,0,0,Pt.width,Pt.height,Ut,Ft,Pt.data):e.texImage2D(i.TEXTURE_2D,tt,ne,Pt.width,Pt.height,0,Ut,Ft,Pt.data);R.generateMipmaps=!1}else C?(H&&e.texStorage2D(i.TEXTURE_2D,et,ne,wt.width,wt.height),Y&&_e(R,wt,Ut,Ft)):e.texImage2D(i.TEXTURE_2D,0,ne,wt.width,wt.height,0,Ut,Ft,wt.data);else if(R.isCompressedTexture)if(R.isCompressedArrayTexture){C&&H&&e.texStorage3D(i.TEXTURE_2D_ARRAY,et,ne,D[0].width,D[0].height,wt.depth);for(let tt=0,Z=D.length;tt<Z;tt++)if(Pt=D[tt],R.format!==xi)if(Ut!==null)if(C){if(Y)if(R.layerUpdates.size>0){let bt=wh(Pt.width,Pt.height,R.format,R.type);for(let St of R.layerUpdates){let kt=Pt.data.subarray(St*bt/Pt.data.BYTES_PER_ELEMENT,(St+1)*bt/Pt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,tt,0,0,St,Pt.width,Pt.height,1,Ut,kt)}R.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,tt,0,0,0,Pt.width,Pt.height,wt.depth,Ut,Pt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,tt,ne,Pt.width,Pt.height,wt.depth,0,Pt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else C?Y&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,tt,0,0,0,Pt.width,Pt.height,wt.depth,Ut,Ft,Pt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,tt,ne,Pt.width,Pt.height,wt.depth,0,Ut,Ft,Pt.data)}else{C&&H&&e.texStorage2D(i.TEXTURE_2D,et,ne,D[0].width,D[0].height);for(let tt=0,Z=D.length;tt<Z;tt++)Pt=D[tt],R.format!==xi?Ut!==null?C?Y&&e.compressedTexSubImage2D(i.TEXTURE_2D,tt,0,0,Pt.width,Pt.height,Ut,Pt.data):e.compressedTexImage2D(i.TEXTURE_2D,tt,ne,Pt.width,Pt.height,0,Pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):C?Y&&e.texSubImage2D(i.TEXTURE_2D,tt,0,0,Pt.width,Pt.height,Ut,Ft,Pt.data):e.texImage2D(i.TEXTURE_2D,tt,ne,Pt.width,Pt.height,0,Ut,Ft,Pt.data)}else if(R.isDataArrayTexture)if(C){if(H&&e.texStorage3D(i.TEXTURE_2D_ARRAY,et,ne,wt.width,wt.height,wt.depth),Y)if(R.layerUpdates.size>0){let tt=wh(wt.width,wt.height,R.format,R.type);for(let Z of R.layerUpdates){let bt=wt.data.subarray(Z*tt/wt.data.BYTES_PER_ELEMENT,(Z+1)*tt/wt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Z,wt.width,wt.height,1,Ut,Ft,bt)}R.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,wt.width,wt.height,wt.depth,Ut,Ft,wt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,ne,wt.width,wt.height,wt.depth,0,Ut,Ft,wt.data);else if(R.isData3DTexture)C?(H&&e.texStorage3D(i.TEXTURE_3D,et,ne,wt.width,wt.height,wt.depth),Y&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,wt.width,wt.height,wt.depth,Ut,Ft,wt.data)):e.texImage3D(i.TEXTURE_3D,0,ne,wt.width,wt.height,wt.depth,0,Ut,Ft,wt.data);else if(R.isFramebufferTexture){if(H)if(C)e.texStorage2D(i.TEXTURE_2D,et,ne,wt.width,wt.height);else{let tt=wt.width,Z=wt.height;for(let bt=0;bt<et;bt++)e.texImage2D(i.TEXTURE_2D,bt,ne,tt,Z,0,Ut,Ft,null),tt>>=1,Z>>=1}}else if(D.length>0){if(C&&H){let tt=Xt(D[0]);e.texStorage2D(i.TEXTURE_2D,et,ne,tt.width,tt.height)}for(let tt=0,Z=D.length;tt<Z;tt++)Pt=D[tt],C?Y&&e.texSubImage2D(i.TEXTURE_2D,tt,0,0,Ut,Ft,Pt):e.texImage2D(i.TEXTURE_2D,tt,ne,Ut,Ft,Pt);R.generateMipmaps=!1}else if(C){if(H){let tt=Xt(wt);e.texStorage2D(i.TEXTURE_2D,et,ne,tt.width,tt.height)}Y&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Ut,Ft,wt)}else e.texImage2D(i.TEXTURE_2D,0,ne,Ut,Ft,wt);p(R)&&m(ot),Jt.__version=pt.version,R.onUpdate&&R.onUpdate(R)}U.__version=R.version}function mt(U,R,$){if(R.image.length!==6)return;let ot=ie(U,R),gt=R.source;e.bindTexture(i.TEXTURE_CUBE_MAP,U.__webglTexture,i.TEXTURE0+$);let pt=n.get(gt);if(gt.version!==pt.__version||ot===!0){e.activeTexture(i.TEXTURE0+$);let Jt=Ne.getPrimaries(Ne.workingColorSpace),Rt=R.colorSpace===er?null:Ne.getPrimaries(R.colorSpace),jt=R.colorSpace===er||Jt===Rt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,R.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,R.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,jt);let Wt=R.isCompressedTexture||R.image[0].isCompressedTexture,wt=R.image[0]&&R.image[0].isDataTexture,Ut=[];for(let Z=0;Z<6;Z++)!Wt&&!wt?Ut[Z]=x(R.image[Z],!0,r.maxCubemapSize):Ut[Z]=wt?R.image[Z].image:R.image[Z],Ut[Z]=Qt(R,Ut[Z]);let Ft=Ut[0],ne=s.convert(R.format,R.colorSpace),Pt=s.convert(R.type),D=v(R.internalFormat,ne,Pt,R.colorSpace),C=R.isVideoTexture!==!0,H=pt.__version===void 0||ot===!0,Y=gt.dataReady,et=w(R,Ft);Gt(i.TEXTURE_CUBE_MAP,R);let tt;if(Wt){C&&H&&e.texStorage2D(i.TEXTURE_CUBE_MAP,et,D,Ft.width,Ft.height);for(let Z=0;Z<6;Z++){tt=Ut[Z].mipmaps;for(let bt=0;bt<tt.length;bt++){let St=tt[bt];R.format!==xi?ne!==null?C?Y&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,bt,0,0,St.width,St.height,ne,St.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,bt,D,St.width,St.height,0,St.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):C?Y&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,bt,0,0,St.width,St.height,ne,Pt,St.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,bt,D,St.width,St.height,0,ne,Pt,St.data)}}}else{if(tt=R.mipmaps,C&&H){tt.length>0&&et++;let Z=Xt(Ut[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,et,D,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(wt){C?Y&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Ut[Z].width,Ut[Z].height,ne,Pt,Ut[Z].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,D,Ut[Z].width,Ut[Z].height,0,ne,Pt,Ut[Z].data);for(let bt=0;bt<tt.length;bt++){let kt=tt[bt].image[Z].image;C?Y&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,bt+1,0,0,kt.width,kt.height,ne,Pt,kt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,bt+1,D,kt.width,kt.height,0,ne,Pt,kt.data)}}else{C?Y&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,ne,Pt,Ut[Z]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,D,ne,Pt,Ut[Z]);for(let bt=0;bt<tt.length;bt++){let St=tt[bt];C?Y&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,bt+1,0,0,ne,Pt,St.image[Z]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,bt+1,D,ne,Pt,St.image[Z])}}}p(R)&&m(i.TEXTURE_CUBE_MAP),pt.__version=gt.version,R.onUpdate&&R.onUpdate(R)}U.__version=R.version}function Lt(U,R,$,ot,gt,pt){let Jt=s.convert($.format,$.colorSpace),Rt=s.convert($.type),jt=v($.internalFormat,Jt,Rt,$.colorSpace),Wt=n.get(R),wt=n.get($);if(wt.__renderTarget=R,!Wt.__hasExternalTextures){let Ut=Math.max(1,R.width>>pt),Ft=Math.max(1,R.height>>pt);gt===i.TEXTURE_3D||gt===i.TEXTURE_2D_ARRAY?e.texImage3D(gt,pt,jt,Ut,Ft,R.depth,0,Jt,Rt,null):e.texImage2D(gt,pt,jt,Ut,Ft,0,Jt,Rt,null)}e.bindFramebuffer(i.FRAMEBUFFER,U),dt(R)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ot,gt,wt.__webglTexture,0,_t(R)):(gt===i.TEXTURE_2D||gt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&gt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ot,gt,wt.__webglTexture,pt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ct(U,R,$){if(i.bindRenderbuffer(i.RENDERBUFFER,U),R.depthBuffer){let ot=R.depthTexture,gt=ot&&ot.isDepthTexture?ot.type:null,pt=y(R.stencilBuffer,gt),Jt=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Rt=_t(R);dt(R)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Rt,pt,R.width,R.height):$?i.renderbufferStorageMultisample(i.RENDERBUFFER,Rt,pt,R.width,R.height):i.renderbufferStorage(i.RENDERBUFFER,pt,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Jt,i.RENDERBUFFER,U)}else{let ot=R.textures;for(let gt=0;gt<ot.length;gt++){let pt=ot[gt],Jt=s.convert(pt.format,pt.colorSpace),Rt=s.convert(pt.type),jt=v(pt.internalFormat,Jt,Rt,pt.colorSpace),Wt=_t(R);$&&dt(R)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Wt,jt,R.width,R.height):dt(R)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Wt,jt,R.width,R.height):i.renderbufferStorage(i.RENDERBUFFER,jt,R.width,R.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function N(U,R){if(R&&R.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,U),!(R.depthTexture&&R.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let ot=n.get(R.depthTexture);ot.__renderTarget=R,(!ot.__webglTexture||R.depthTexture.image.width!==R.width||R.depthTexture.image.height!==R.height)&&(R.depthTexture.image.width=R.width,R.depthTexture.image.height=R.height,R.depthTexture.needsUpdate=!0),z(R.depthTexture,0);let gt=ot.__webglTexture,pt=_t(R);if(R.depthTexture.format===vs)dt(R)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,gt,0,pt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,gt,0);else if(R.depthTexture.format===Ns)dt(R)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,gt,0,pt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,gt,0);else throw new Error("Unknown depthTexture format")}function V(U){let R=n.get(U),$=U.isWebGLCubeRenderTarget===!0;if(R.__boundDepthTexture!==U.depthTexture){let ot=U.depthTexture;if(R.__depthDisposeCallback&&R.__depthDisposeCallback(),ot){let gt=()=>{delete R.__boundDepthTexture,delete R.__depthDisposeCallback,ot.removeEventListener("dispose",gt)};ot.addEventListener("dispose",gt),R.__depthDisposeCallback=gt}R.__boundDepthTexture=ot}if(U.depthTexture&&!R.__autoAllocateDepthBuffer){if($)throw new Error("target.depthTexture not supported in Cube render targets");let ot=U.texture.mipmaps;ot&&ot.length>0?N(R.__webglFramebuffer[0],U):N(R.__webglFramebuffer,U)}else if($){R.__webglDepthbuffer=[];for(let ot=0;ot<6;ot++)if(e.bindFramebuffer(i.FRAMEBUFFER,R.__webglFramebuffer[ot]),R.__webglDepthbuffer[ot]===void 0)R.__webglDepthbuffer[ot]=i.createRenderbuffer(),Ct(R.__webglDepthbuffer[ot],U,!1);else{let gt=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,pt=R.__webglDepthbuffer[ot];i.bindRenderbuffer(i.RENDERBUFFER,pt),i.framebufferRenderbuffer(i.FRAMEBUFFER,gt,i.RENDERBUFFER,pt)}}else{let ot=U.texture.mipmaps;if(ot&&ot.length>0?e.bindFramebuffer(i.FRAMEBUFFER,R.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,R.__webglFramebuffer),R.__webglDepthbuffer===void 0)R.__webglDepthbuffer=i.createRenderbuffer(),Ct(R.__webglDepthbuffer,U,!1);else{let gt=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,pt=R.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,pt),i.framebufferRenderbuffer(i.FRAMEBUFFER,gt,i.RENDERBUFFER,pt)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function ht(U,R,$){let ot=n.get(U);R!==void 0&&Lt(ot.__webglFramebuffer,U,U.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),$!==void 0&&V(U)}function B(U){let R=U.texture,$=n.get(U),ot=n.get(R);U.addEventListener("dispose",E);let gt=U.textures,pt=U.isWebGLCubeRenderTarget===!0,Jt=gt.length>1;if(Jt||(ot.__webglTexture===void 0&&(ot.__webglTexture=i.createTexture()),ot.__version=R.version,o.memory.textures++),pt){$.__webglFramebuffer=[];for(let Rt=0;Rt<6;Rt++)if(R.mipmaps&&R.mipmaps.length>0){$.__webglFramebuffer[Rt]=[];for(let jt=0;jt<R.mipmaps.length;jt++)$.__webglFramebuffer[Rt][jt]=i.createFramebuffer()}else $.__webglFramebuffer[Rt]=i.createFramebuffer()}else{if(R.mipmaps&&R.mipmaps.length>0){$.__webglFramebuffer=[];for(let Rt=0;Rt<R.mipmaps.length;Rt++)$.__webglFramebuffer[Rt]=i.createFramebuffer()}else $.__webglFramebuffer=i.createFramebuffer();if(Jt)for(let Rt=0,jt=gt.length;Rt<jt;Rt++){let Wt=n.get(gt[Rt]);Wt.__webglTexture===void 0&&(Wt.__webglTexture=i.createTexture(),o.memory.textures++)}if(U.samples>0&&dt(U)===!1){$.__webglMultisampledFramebuffer=i.createFramebuffer(),$.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let Rt=0;Rt<gt.length;Rt++){let jt=gt[Rt];$.__webglColorRenderbuffer[Rt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,$.__webglColorRenderbuffer[Rt]);let Wt=s.convert(jt.format,jt.colorSpace),wt=s.convert(jt.type),Ut=v(jt.internalFormat,Wt,wt,jt.colorSpace,U.isXRRenderTarget===!0),Ft=_t(U);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ft,Ut,U.width,U.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Rt,i.RENDERBUFFER,$.__webglColorRenderbuffer[Rt])}i.bindRenderbuffer(i.RENDERBUFFER,null),U.depthBuffer&&($.__webglDepthRenderbuffer=i.createRenderbuffer(),Ct($.__webglDepthRenderbuffer,U,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(pt){e.bindTexture(i.TEXTURE_CUBE_MAP,ot.__webglTexture),Gt(i.TEXTURE_CUBE_MAP,R);for(let Rt=0;Rt<6;Rt++)if(R.mipmaps&&R.mipmaps.length>0)for(let jt=0;jt<R.mipmaps.length;jt++)Lt($.__webglFramebuffer[Rt][jt],U,R,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,jt);else Lt($.__webglFramebuffer[Rt],U,R,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,0);p(R)&&m(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Jt){for(let Rt=0,jt=gt.length;Rt<jt;Rt++){let Wt=gt[Rt],wt=n.get(Wt),Ut=i.TEXTURE_2D;(U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Ut=U.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Ut,wt.__webglTexture),Gt(Ut,Wt),Lt($.__webglFramebuffer,U,Wt,i.COLOR_ATTACHMENT0+Rt,Ut,0),p(Wt)&&m(Ut)}e.unbindTexture()}else{let Rt=i.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Rt=U.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Rt,ot.__webglTexture),Gt(Rt,R),R.mipmaps&&R.mipmaps.length>0)for(let jt=0;jt<R.mipmaps.length;jt++)Lt($.__webglFramebuffer[jt],U,R,i.COLOR_ATTACHMENT0,Rt,jt);else Lt($.__webglFramebuffer,U,R,i.COLOR_ATTACHMENT0,Rt,0);p(R)&&m(Rt),e.unbindTexture()}U.depthBuffer&&V(U)}function nt(U){let R=U.textures;for(let $=0,ot=R.length;$<ot;$++){let gt=R[$];if(p(gt)){let pt=_(U),Jt=n.get(gt).__webglTexture;e.bindTexture(pt,Jt),m(pt),e.unbindTexture()}}}let st=[],lt=[];function ft(U){if(U.samples>0){if(dt(U)===!1){let R=U.textures,$=U.width,ot=U.height,gt=i.COLOR_BUFFER_BIT,pt=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Jt=n.get(U),Rt=R.length>1;if(Rt)for(let Wt=0;Wt<R.length;Wt++)e.bindFramebuffer(i.FRAMEBUFFER,Jt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Wt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Jt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Wt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Jt.__webglMultisampledFramebuffer);let jt=U.texture.mipmaps;jt&&jt.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Jt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Jt.__webglFramebuffer);for(let Wt=0;Wt<R.length;Wt++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(gt|=i.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(gt|=i.STENCIL_BUFFER_BIT)),Rt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Jt.__webglColorRenderbuffer[Wt]);let wt=n.get(R[Wt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,wt,0)}i.blitFramebuffer(0,0,$,ot,0,0,$,ot,gt,i.NEAREST),l===!0&&(st.length=0,lt.length=0,st.push(i.COLOR_ATTACHMENT0+Wt),U.depthBuffer&&U.resolveDepthBuffer===!1&&(st.push(pt),lt.push(pt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,lt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,st))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Rt)for(let Wt=0;Wt<R.length;Wt++){e.bindFramebuffer(i.FRAMEBUFFER,Jt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Wt,i.RENDERBUFFER,Jt.__webglColorRenderbuffer[Wt]);let wt=n.get(R[Wt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Jt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Wt,i.TEXTURE_2D,wt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Jt.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&l){let R=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[R])}}}function _t(U){return Math.min(r.maxSamples,U.samples)}function dt(U){let R=n.get(U);return U.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&R.__useRenderToTexture!==!1}function Mt(U){let R=o.render.frame;u.get(U)!==R&&(u.set(U,R),U.update())}function Qt(U,R){let $=U.colorSpace,ot=U.format,gt=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||$!==Or&&$!==er&&(Ne.getTransfer($)===ze?(ot!==xi||gt!==Ni)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",$)),R}function Xt(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(c.width=U.naturalWidth||U.width,c.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(c.width=U.displayWidth,c.height=U.displayHeight):(c.width=U.width,c.height=U.height),c}this.allocateTextureUnit=P,this.resetTextureUnits=I,this.setTexture2D=z,this.setTexture2DArray=F,this.setTexture3D=W,this.setTextureCube=q,this.rebindTextures=ht,this.setupRenderTarget=B,this.updateRenderTargetMipmap=nt,this.updateMultisampleRenderTarget=ft,this.setupDepthRenderbuffer=V,this.setupFrameBufferTexture=Lt,this.useMultisampledRTT=dt}function cx(i,t){function e(n,r=er){let s,o=Ne.getTransfer(r);if(n===Ni)return i.UNSIGNED_BYTE;if(n===ml)return i.UNSIGNED_SHORT_4_4_4_4;if(n===gl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===fh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===dh)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===hh)return i.BYTE;if(n===uh)return i.SHORT;if(n===Ls)return i.UNSIGNED_SHORT;if(n===pl)return i.INT;if(n===vr)return i.UNSIGNED_INT;if(n===Fi)return i.FLOAT;if(n===gi)return i.HALF_FLOAT;if(n===ph)return i.ALPHA;if(n===mh)return i.RGB;if(n===xi)return i.RGBA;if(n===vs)return i.DEPTH_COMPONENT;if(n===Ns)return i.DEPTH_STENCIL;if(n===gh)return i.RED;if(n===xl)return i.RED_INTEGER;if(n===xh)return i.RG;if(n===_l)return i.RG_INTEGER;if(n===vl)return i.RGBA_INTEGER;if(n===zo||n===ko||n===Ho||n===Vo)if(o===ze)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===zo)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ko)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ho)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Vo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===zo)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ko)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ho)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Vo)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===yl||n===Ml||n===bl||n===Sl)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===yl)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ml)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===bl)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Sl)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===El||n===wl||n===Tl)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===El||n===wl)return o===ze?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Tl)return o===ze?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Al||n===Rl||n===Cl||n===Pl||n===Il||n===Dl||n===Ll||n===Ul||n===Nl||n===Fl||n===Bl||n===Ol||n===zl||n===kl)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Al)return o===ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Rl)return o===ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Cl)return o===ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Pl)return o===ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Il)return o===ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Dl)return o===ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ll)return o===ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ul)return o===ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Nl)return o===ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Fl)return o===ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Bl)return o===ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ol)return o===ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===zl)return o===ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===kl)return o===ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Hl||n===Vl||n===Gl)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===Hl)return o===ze?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Vl)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Gl)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Wl||n===Xl||n===ql||n===Yl)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===Wl)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Xl)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ql)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Yl)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Us?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var hx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ux=`
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

}`,Oh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Eo(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new He({vertexShader:hx,fragmentShader:ux,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new le(new xn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},zh=class extends Qi{constructor(t,e){super();let n=this,r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,d=null,g=null,x=typeof XRWebGLBinding<"u",p=new Oh,m={},_=e.getContextAttributes(),v=null,y=null,w=[],M=[],E=new xt,T=null,b=new En;b.viewport=new tn;let S=new En;S.viewport=new tn;let A=[b,S],I=new Ka,P=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(it){let mt=w[it];return mt===void 0&&(mt=new Es,w[it]=mt),mt.getTargetRaySpace()},this.getControllerGrip=function(it){let mt=w[it];return mt===void 0&&(mt=new Es,w[it]=mt),mt.getGripSpace()},this.getHand=function(it){let mt=w[it];return mt===void 0&&(mt=new Es,w[it]=mt),mt.getHandSpace()};function z(it){let mt=M.indexOf(it.inputSource);if(mt===-1)return;let Lt=w[mt];Lt!==void 0&&(Lt.update(it.inputSource,it.frame,c||o),Lt.dispatchEvent({type:it.type,data:it.inputSource}))}function F(){r.removeEventListener("select",z),r.removeEventListener("selectstart",z),r.removeEventListener("selectend",z),r.removeEventListener("squeeze",z),r.removeEventListener("squeezestart",z),r.removeEventListener("squeezeend",z),r.removeEventListener("end",F),r.removeEventListener("inputsourceschange",W);for(let it=0;it<w.length;it++){let mt=M[it];mt!==null&&(M[it]=null,w[it].disconnect(mt))}P=null,O=null,p.reset();for(let it in m)delete m[it];t.setRenderTarget(v),d=null,f=null,h=null,r=null,y=null,_e.stop(),n.isPresenting=!1,t.setPixelRatio(T),t.setSize(E.width,E.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(it){s=it,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(it){a=it,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(it){c=it},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h===null&&x&&(h=new XRWebGLBinding(r,e)),h},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(it){if(r=it,r!==null){if(v=t.getRenderTarget(),r.addEventListener("select",z),r.addEventListener("selectstart",z),r.addEventListener("selectend",z),r.addEventListener("squeeze",z),r.addEventListener("squeezestart",z),r.addEventListener("squeezeend",z),r.addEventListener("end",F),r.addEventListener("inputsourceschange",W),_.xrCompatible!==!0&&await e.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(E),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let Lt=null,Ct=null,N=null;_.depth&&(N=_.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Lt=_.stencil?Ns:vs,Ct=_.stencil?Us:vr);let V={colorFormat:e.RGBA8,depthFormat:N,scaleFactor:s};h=this.getBinding(),f=h.createProjectionLayer(V),r.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),y=new wn(f.textureWidth,f.textureHeight,{format:xi,type:Ni,depthTexture:new So(f.textureWidth,f.textureHeight,Ct,void 0,void 0,void 0,void 0,void 0,void 0,Lt),stencilBuffer:_.stencil,colorSpace:t.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{let Lt={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,e,Lt),r.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),y=new wn(d.framebufferWidth,d.framebufferHeight,{format:xi,type:Ni,colorSpace:t.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),_e.setContext(r),_e.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function W(it){for(let mt=0;mt<it.removed.length;mt++){let Lt=it.removed[mt],Ct=M.indexOf(Lt);Ct>=0&&(M[Ct]=null,w[Ct].disconnect(Lt))}for(let mt=0;mt<it.added.length;mt++){let Lt=it.added[mt],Ct=M.indexOf(Lt);if(Ct===-1){for(let V=0;V<w.length;V++)if(V>=M.length){M.push(Lt),Ct=V;break}else if(M[V]===null){M[V]=Lt,Ct=V;break}if(Ct===-1)break}let N=w[Ct];N&&N.connect(Lt)}}let q=new k,K=new k;function rt(it,mt,Lt){q.setFromMatrixPosition(mt.matrixWorld),K.setFromMatrixPosition(Lt.matrixWorld);let Ct=q.distanceTo(K),N=mt.projectionMatrix.elements,V=Lt.projectionMatrix.elements,ht=N[14]/(N[10]-1),B=N[14]/(N[10]+1),nt=(N[9]+1)/N[5],st=(N[9]-1)/N[5],lt=(N[8]-1)/N[0],ft=(V[8]+1)/V[0],_t=ht*lt,dt=ht*ft,Mt=Ct/(-lt+ft),Qt=Mt*-lt;if(mt.matrixWorld.decompose(it.position,it.quaternion,it.scale),it.translateX(Qt),it.translateZ(Mt),it.matrixWorld.compose(it.position,it.quaternion,it.scale),it.matrixWorldInverse.copy(it.matrixWorld).invert(),N[10]===-1)it.projectionMatrix.copy(mt.projectionMatrix),it.projectionMatrixInverse.copy(mt.projectionMatrixInverse);else{let Xt=ht+Mt,U=B+Mt,R=_t-Qt,$=dt+(Ct-Qt),ot=nt*B/U*Xt,gt=st*B/U*Xt;it.projectionMatrix.makePerspective(R,$,ot,gt,Xt,U),it.projectionMatrixInverse.copy(it.projectionMatrix).invert()}}function vt(it,mt){mt===null?it.matrixWorld.copy(it.matrix):it.matrixWorld.multiplyMatrices(mt.matrixWorld,it.matrix),it.matrixWorldInverse.copy(it.matrixWorld).invert()}this.updateCamera=function(it){if(r===null)return;let mt=it.near,Lt=it.far;p.texture!==null&&(p.depthNear>0&&(mt=p.depthNear),p.depthFar>0&&(Lt=p.depthFar)),I.near=S.near=b.near=mt,I.far=S.far=b.far=Lt,(P!==I.near||O!==I.far)&&(r.updateRenderState({depthNear:I.near,depthFar:I.far}),P=I.near,O=I.far),I.layers.mask=it.layers.mask|6,b.layers.mask=I.layers.mask&3,S.layers.mask=I.layers.mask&5;let Ct=it.parent,N=I.cameras;vt(I,Ct);for(let V=0;V<N.length;V++)vt(N[V],Ct);N.length===2?rt(I,b,S):I.projectionMatrix.copy(b.projectionMatrix),Gt(it,I,Ct)};function Gt(it,mt,Lt){Lt===null?it.matrix.copy(mt.matrixWorld):(it.matrix.copy(Lt.matrixWorld),it.matrix.invert(),it.matrix.multiply(mt.matrixWorld)),it.matrix.decompose(it.position,it.quaternion,it.scale),it.updateMatrixWorld(!0),it.projectionMatrix.copy(mt.projectionMatrix),it.projectionMatrixInverse.copy(mt.projectionMatrixInverse),it.isPerspectiveCamera&&(it.fov=Aa*2*Math.atan(1/it.projectionMatrix.elements[5]),it.zoom=1)}this.getCamera=function(){return I},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(it){l=it,f!==null&&(f.fixedFoveation=it),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=it)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(I)},this.getCameraTexture=function(it){return m[it]};let ie=null;function de(it,mt){if(u=mt.getViewerPose(c||o),g=mt,u!==null){let Lt=u.views;d!==null&&(t.setRenderTargetFramebuffer(y,d.framebuffer),t.setRenderTarget(y));let Ct=!1;Lt.length!==I.cameras.length&&(I.cameras.length=0,Ct=!0);for(let B=0;B<Lt.length;B++){let nt=Lt[B],st=null;if(d!==null)st=d.getViewport(nt);else{let ft=h.getViewSubImage(f,nt);st=ft.viewport,B===0&&(t.setRenderTargetTextures(y,ft.colorTexture,ft.depthStencilTexture),t.setRenderTarget(y))}let lt=A[B];lt===void 0&&(lt=new En,lt.layers.enable(B),lt.viewport=new tn,A[B]=lt),lt.matrix.fromArray(nt.transform.matrix),lt.matrix.decompose(lt.position,lt.quaternion,lt.scale),lt.projectionMatrix.fromArray(nt.projectionMatrix),lt.projectionMatrixInverse.copy(lt.projectionMatrix).invert(),lt.viewport.set(st.x,st.y,st.width,st.height),B===0&&(I.matrix.copy(lt.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale)),Ct===!0&&I.cameras.push(lt)}let N=r.enabledFeatures;if(N&&N.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&x){h=n.getBinding();let B=h.getDepthInformation(Lt[0]);B&&B.isValid&&B.texture&&p.init(B,r.renderState)}if(N&&N.includes("camera-access")&&x){t.state.unbindTexture(),h=n.getBinding();for(let B=0;B<Lt.length;B++){let nt=Lt[B].camera;if(nt){let st=m[nt];st||(st=new Eo,m[nt]=st);let lt=h.getCameraImage(nt);st.sourceTexture=lt}}}}for(let Lt=0;Lt<w.length;Lt++){let Ct=M[Lt],N=w[Lt];Ct!==null&&N!==void 0&&N.update(Ct,mt,c||o)}ie&&ie(it,mt),mt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:mt}),g=null}let _e=new Hf;_e.setAnimationLoop(de),this.setAnimationLoop=function(it){ie=it},this.dispose=function(){}}},Zr=new Di,fx=new Fe;function dx(i,t){function e(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,Mh(i)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function r(p,m,_,v,y){m.isMeshBasicMaterial||m.isMeshLambertMaterial?s(p,m):m.isMeshToonMaterial?(s(p,m),h(p,m)):m.isMeshPhongMaterial?(s(p,m),u(p,m)):m.isMeshStandardMaterial?(s(p,m),f(p,m),m.isMeshPhysicalMaterial&&d(p,m,y)):m.isMeshMatcapMaterial?(s(p,m),g(p,m)):m.isMeshDepthMaterial?s(p,m):m.isMeshDistanceMaterial?(s(p,m),x(p,m)):m.isMeshNormalMaterial?s(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?l(p,m,_,v):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,e(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===Pn&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,e(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===Pn&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,e(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,e(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let _=t.get(m),v=_.envMap,y=_.envMapRotation;v&&(p.envMap.value=v,Zr.copy(y),Zr.x*=-1,Zr.y*=-1,Zr.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Zr.y*=-1,Zr.z*=-1),p.envMapRotation.value.setFromMatrix4(fx.makeRotationFromEuler(Zr)),p.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,_,v){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*_,p.scale.value=v*.5,m.map&&(p.map.value=m.map,e(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function u(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function h(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function f(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function d(p,m,_){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Pn&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=_.texture,p.transmissionSamplerSize.value.set(_.width,_.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function x(p,m){let _=t.get(m).light;p.referencePosition.value.setFromMatrixPosition(_.matrixWorld),p.nearDistance.value=_.shadow.camera.near,p.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function px(i,t,e,n){let r={},s={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,v){let y=v.program;n.uniformBlockBinding(_,y)}function c(_,v){let y=r[_.id];y===void 0&&(g(_),y=u(_),r[_.id]=y,_.addEventListener("dispose",p));let w=v.program;n.updateUBOMapping(_,w);let M=t.render.frame;s[_.id]!==M&&(f(_),s[_.id]=M)}function u(_){let v=h();_.__bindingPointIndex=v;let y=i.createBuffer(),w=_.__size,M=_.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,w,M),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,v,y),y}function h(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(_){let v=r[_.id],y=_.uniforms,w=_.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let M=0,E=y.length;M<E;M++){let T=Array.isArray(y[M])?y[M]:[y[M]];for(let b=0,S=T.length;b<S;b++){let A=T[b];if(d(A,M,b,w)===!0){let I=A.__offset,P=Array.isArray(A.value)?A.value:[A.value],O=0;for(let z=0;z<P.length;z++){let F=P[z],W=x(F);typeof F=="number"||typeof F=="boolean"?(A.__data[0]=F,i.bufferSubData(i.UNIFORM_BUFFER,I+O,A.__data)):F.isMatrix3?(A.__data[0]=F.elements[0],A.__data[1]=F.elements[1],A.__data[2]=F.elements[2],A.__data[3]=0,A.__data[4]=F.elements[3],A.__data[5]=F.elements[4],A.__data[6]=F.elements[5],A.__data[7]=0,A.__data[8]=F.elements[6],A.__data[9]=F.elements[7],A.__data[10]=F.elements[8],A.__data[11]=0):(F.toArray(A.__data,O),O+=W.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,I,A.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(_,v,y,w){let M=_.value,E=v+"_"+y;if(w[E]===void 0)return typeof M=="number"||typeof M=="boolean"?w[E]=M:w[E]=M.clone(),!0;{let T=w[E];if(typeof M=="number"||typeof M=="boolean"){if(T!==M)return w[E]=M,!0}else if(T.equals(M)===!1)return T.copy(M),!0}return!1}function g(_){let v=_.uniforms,y=0,w=16;for(let E=0,T=v.length;E<T;E++){let b=Array.isArray(v[E])?v[E]:[v[E]];for(let S=0,A=b.length;S<A;S++){let I=b[S],P=Array.isArray(I.value)?I.value:[I.value];for(let O=0,z=P.length;O<z;O++){let F=P[O],W=x(F),q=y%w,K=q%W.boundary,rt=q+K;y+=K,rt!==0&&w-rt<W.storage&&(y+=w-rt),I.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=y,y+=W.storage}}}let M=y%w;return M>0&&(y+=w-M),_.__size=y,_.__cache={},this}function x(_){let v={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(v.boundary=4,v.storage=4):_.isVector2?(v.boundary=8,v.storage=8):_.isVector3||_.isColor?(v.boundary=16,v.storage=12):_.isVector4?(v.boundary=16,v.storage=16):_.isMatrix3?(v.boundary=48,v.storage=48):_.isMatrix4?(v.boundary=64,v.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),v}function p(_){let v=_.target;v.removeEventListener("dispose",p);let y=o.indexOf(v.__bindingPointIndex);o.splice(y,1),i.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function m(){for(let _ in r)i.deleteBuffer(r[_]);o=[],r={},s={}}return{bind:l,update:c,dispose:m}}var Ql=class{constructor(t={}){let{canvas:e=cf(),context:n=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;let g=new Uint32Array(4),x=new Int32Array(4),p=null,m=null,_=[],v=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=tr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let y=this,w=!1;this._outputColorSpace=mn;let M=0,E=0,T=null,b=-1,S=null,A=new tn,I=new tn,P=null,O=new Ht(0),z=0,F=e.width,W=e.height,q=1,K=null,rt=null,vt=new tn(0,0,F,W),Gt=new tn(0,0,F,W),ie=!1,de=new bo,_e=!1,it=!1,mt=new Fe,Lt=new k,Ct=new tn,N={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},V=!1;function ht(){return T===null?q:1}let B=n;function nt(L,Q){return e.getContext(L,Q)}try{let L={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"180"}`),e.addEventListener("webglcontextlost",Y,!1),e.addEventListener("webglcontextrestored",et,!1),e.addEventListener("webglcontextcreationerror",tt,!1),B===null){let Q="webgl2";if(B=nt(Q,L),B===null)throw nt(Q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(L){throw console.error("THREE.WebGLRenderer: "+L.message),L}let st,lt,ft,_t,dt,Mt,Qt,Xt,U,R,$,ot,gt,pt,Jt,Rt,jt,Wt,wt,Ut,Ft,ne,Pt,D;function C(){st=new Dg(B),st.init(),ne=new cx(B,st),lt=new wg(B,st,t,ne),ft=new ax(B,st),lt.reversedDepthBuffer&&f&&ft.buffers.depth.setReversed(!0),_t=new Ng(B),dt=new Z1,Mt=new lx(B,st,ft,dt,lt,ne,_t),Qt=new Ag(y),Xt=new Ig(y),U=new H0(B),Pt=new Sg(B,U),R=new Lg(B,U,_t,Pt),$=new Bg(B,R,U,_t),wt=new Fg(B,lt,Mt),Rt=new Tg(dt),ot=new Y1(y,Qt,Xt,st,lt,Pt,Rt),gt=new dx(y,dt),pt=new $1,Jt=new nx(st),Wt=new bg(y,Qt,Xt,ft,$,d,l),jt=new sx(y,$,lt),D=new px(B,_t,lt,ft),Ut=new Eg(B,st,_t),Ft=new Ug(B,st,_t),_t.programs=ot.programs,y.capabilities=lt,y.extensions=st,y.properties=dt,y.renderLists=pt,y.shadowMap=jt,y.state=ft,y.info=_t}C();let H=new zh(y,B);this.xr=H,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){let L=st.get("WEBGL_lose_context");L&&L.loseContext()},this.forceContextRestore=function(){let L=st.get("WEBGL_lose_context");L&&L.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(L){L!==void 0&&(q=L,this.setSize(F,W,!1))},this.getSize=function(L){return L.set(F,W)},this.setSize=function(L,Q,ct=!0){if(H.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}F=L,W=Q,e.width=Math.floor(L*q),e.height=Math.floor(Q*q),ct===!0&&(e.style.width=L+"px",e.style.height=Q+"px"),this.setViewport(0,0,L,Q)},this.getDrawingBufferSize=function(L){return L.set(F*q,W*q).floor()},this.setDrawingBufferSize=function(L,Q,ct){F=L,W=Q,q=ct,e.width=Math.floor(L*ct),e.height=Math.floor(Q*ct),this.setViewport(0,0,L,Q)},this.getCurrentViewport=function(L){return L.copy(A)},this.getViewport=function(L){return L.copy(vt)},this.setViewport=function(L,Q,ct,ut){L.isVector4?vt.set(L.x,L.y,L.z,L.w):vt.set(L,Q,ct,ut),ft.viewport(A.copy(vt).multiplyScalar(q).round())},this.getScissor=function(L){return L.copy(Gt)},this.setScissor=function(L,Q,ct,ut){L.isVector4?Gt.set(L.x,L.y,L.z,L.w):Gt.set(L,Q,ct,ut),ft.scissor(I.copy(Gt).multiplyScalar(q).round())},this.getScissorTest=function(){return ie},this.setScissorTest=function(L){ft.setScissorTest(ie=L)},this.setOpaqueSort=function(L){K=L},this.setTransparentSort=function(L){rt=L},this.getClearColor=function(L){return L.copy(Wt.getClearColor())},this.setClearColor=function(){Wt.setClearColor(...arguments)},this.getClearAlpha=function(){return Wt.getClearAlpha()},this.setClearAlpha=function(){Wt.setClearAlpha(...arguments)},this.clear=function(L=!0,Q=!0,ct=!0){let ut=0;if(L){let j=!1;if(T!==null){let At=T.texture.format;j=At===vl||At===_l||At===xl}if(j){let At=T.texture.type,Vt=At===Ni||At===vr||At===Ls||At===Us||At===ml||At===gl,qt=Wt.getClearColor(),Kt=Wt.getClearAlpha(),pe=qt.r,ve=qt.g,ue=qt.b;Vt?(g[0]=pe,g[1]=ve,g[2]=ue,g[3]=Kt,B.clearBufferuiv(B.COLOR,0,g)):(x[0]=pe,x[1]=ve,x[2]=ue,x[3]=Kt,B.clearBufferiv(B.COLOR,0,x))}else ut|=B.COLOR_BUFFER_BIT}Q&&(ut|=B.DEPTH_BUFFER_BIT),ct&&(ut|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(ut)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Y,!1),e.removeEventListener("webglcontextrestored",et,!1),e.removeEventListener("webglcontextcreationerror",tt,!1),Wt.dispose(),pt.dispose(),Jt.dispose(),dt.dispose(),Qt.dispose(),Xt.dispose(),$.dispose(),Pt.dispose(),D.dispose(),ot.dispose(),H.dispose(),H.removeEventListener("sessionstart",Oe),H.removeEventListener("sessionend",Vi),zn.stop()};function Y(L){L.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function et(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;let L=_t.autoReset,Q=jt.enabled,ct=jt.autoUpdate,ut=jt.needsUpdate,j=jt.type;C(),_t.autoReset=L,jt.enabled=Q,jt.autoUpdate=ct,jt.needsUpdate=ut,jt.type=j}function tt(L){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",L.statusMessage)}function Z(L){let Q=L.target;Q.removeEventListener("dispose",Z),bt(Q)}function bt(L){St(L),dt.remove(L)}function St(L){let Q=dt.get(L).programs;Q!==void 0&&(Q.forEach(function(ct){ot.releaseProgram(ct)}),L.isShaderMaterial&&ot.releaseShaderCache(L))}this.renderBufferDirect=function(L,Q,ct,ut,j,At){Q===null&&(Q=N);let Vt=j.isMesh&&j.matrixWorld.determinant()<0,qt=Rr(L,Q,ct,ut,j);ft.setMaterial(ut,Vt);let Kt=ct.index,pe=1;if(ut.wireframe===!0){if(Kt=R.getWireframeAttribute(ct),Kt===void 0)return;pe=2}let ve=ct.drawRange,ue=ct.attributes.position,Ee=ve.start*pe,ke=(ve.start+ve.count)*pe;At!==null&&(Ee=Math.max(Ee,At.start*pe),ke=Math.min(ke,(At.start+At.count)*pe)),Kt!==null?(Ee=Math.max(Ee,0),ke=Math.min(ke,Kt.count)):ue!=null&&(Ee=Math.max(Ee,0),ke=Math.min(ke,ue.count));let De=ke-Ee;if(De<0||De===1/0)return;Pt.setup(j,ut,qt,ct,Kt);let We,Ve=Ut;if(Kt!==null&&(We=U.get(Kt),Ve=Ft,Ve.setIndex(We)),j.isMesh)ut.wireframe===!0?(ft.setLineWidth(ut.wireframeLinewidth*ht()),Ve.setMode(B.LINES)):Ve.setMode(B.TRIANGLES);else if(j.isLine){let me=ut.linewidth;me===void 0&&(me=1),ft.setLineWidth(me*ht()),j.isLineSegments?Ve.setMode(B.LINES):j.isLineLoop?Ve.setMode(B.LINE_LOOP):Ve.setMode(B.LINE_STRIP)}else j.isPoints?Ve.setMode(B.POINTS):j.isSprite&&Ve.setMode(B.TRIANGLES);if(j.isBatchedMesh)if(j._multiDrawInstances!==null)ys("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ve.renderMultiDrawInstances(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount,j._multiDrawInstances);else if(st.get("WEBGL_multi_draw"))Ve.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{let me=j._multiDrawStarts,X=j._multiDrawCounts,J=j._multiDrawCount,at=Kt?U.get(Kt).bytesPerElement:1,Bt=dt.get(ut).currentProgram.getUniforms();for(let Et=0;Et<J;Et++)Bt.setValue(B,"_gl_DrawID",Et),Ve.render(me[Et]/at,X[Et])}else if(j.isInstancedMesh)Ve.renderInstances(Ee,De,j.count);else if(ct.isInstancedBufferGeometry){let me=ct._maxInstanceCount!==void 0?ct._maxInstanceCount:1/0,X=Math.min(ct.instanceCount,me);Ve.renderInstances(Ee,De,X)}else Ve.render(Ee,De)};function kt(L,Q,ct){L.transparent===!0&&L.side===un&&L.forceSinglePass===!1?(L.side=Pn,L.needsUpdate=!0,Tr(L,Q,ct),L.side=ni,L.needsUpdate=!0,Tr(L,Q,ct),L.side=un):Tr(L,Q,ct)}this.compile=function(L,Q,ct=null){ct===null&&(ct=L),m=Jt.get(ct),m.init(Q),v.push(m),ct.traverseVisible(function(j){j.isLight&&j.layers.test(Q.layers)&&(m.pushLight(j),j.castShadow&&m.pushShadow(j))}),L!==ct&&L.traverseVisible(function(j){j.isLight&&j.layers.test(Q.layers)&&(m.pushLight(j),j.castShadow&&m.pushShadow(j))}),m.setupLights();let ut=new Set;return L.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;let At=j.material;if(At)if(Array.isArray(At))for(let Vt=0;Vt<At.length;Vt++){let qt=At[Vt];kt(qt,ct,j),ut.add(qt)}else kt(At,ct,j),ut.add(At)}),m=v.pop(),ut},this.compileAsync=function(L,Q,ct=null){let ut=this.compile(L,Q,ct);return new Promise(j=>{function At(){if(ut.forEach(function(Vt){dt.get(Vt).currentProgram.isReady()&&ut.delete(Vt)}),ut.size===0){j(L);return}setTimeout(At,10)}st.get("KHR_parallel_shader_compile")!==null?At():setTimeout(At,10)})};let oe=null;function Se(L){oe&&oe(L)}function Oe(){zn.stop()}function Vi(){zn.start()}let zn=new Hf;zn.setAnimationLoop(Se),typeof self<"u"&&zn.setContext(self),this.setAnimationLoop=function(L){oe=L,H.setAnimationLoop(L),L===null?zn.stop():zn.start()},H.addEventListener("sessionstart",Oe),H.addEventListener("sessionend",Vi),this.render=function(L,Q){if(Q!==void 0&&Q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;if(L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),Q.parent===null&&Q.matrixWorldAutoUpdate===!0&&Q.updateMatrixWorld(),H.enabled===!0&&H.isPresenting===!0&&(H.cameraAutoUpdate===!0&&H.updateCamera(Q),Q=H.getCamera()),L.isScene===!0&&L.onBeforeRender(y,L,Q,T),m=Jt.get(L,v.length),m.init(Q),v.push(m),mt.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),de.setFromProjectionMatrix(mt,Si,Q.reversedDepth),it=this.localClippingEnabled,_e=Rt.init(this.clippingPlanes,it),p=pt.get(L,_.length),p.init(),_.push(p),H.enabled===!0&&H.isPresenting===!0){let At=y.xr.getDepthSensingMesh();At!==null&&ts(At,Q,-1/0,y.sortObjects)}ts(L,Q,0,y.sortObjects),p.finish(),y.sortObjects===!0&&p.sort(K,rt),V=H.enabled===!1||H.isPresenting===!1||H.hasDepthSensing()===!1,V&&Wt.addToRenderList(p,L),this.info.render.frame++,_e===!0&&Rt.beginShadows();let ct=m.state.shadowsArray;jt.render(ct,L,Q),_e===!0&&Rt.endShadows(),this.info.autoReset===!0&&this.info.reset();let ut=p.opaque,j=p.transmissive;if(m.setupLights(),Q.isArrayCamera){let At=Q.cameras;if(j.length>0)for(let Vt=0,qt=At.length;Vt<qt;Vt++){let Kt=At[Vt];Yn(ut,j,L,Kt)}V&&Wt.render(L);for(let Vt=0,qt=At.length;Vt<qt;Vt++){let Kt=At[Vt];vi(p,L,Kt,Kt.viewport)}}else j.length>0&&Yn(ut,j,L,Q),V&&Wt.render(L),vi(p,L,Q);T!==null&&E===0&&(Mt.updateMultisampleRenderTarget(T),Mt.updateRenderTargetMipmap(T)),L.isScene===!0&&L.onAfterRender(y,L,Q),Pt.resetDefaultState(),b=-1,S=null,v.pop(),v.length>0?(m=v[v.length-1],_e===!0&&Rt.setGlobalState(y.clippingPlanes,m.state.camera)):m=null,_.pop(),_.length>0?p=_[_.length-1]:p=null};function ts(L,Q,ct,ut){if(L.visible===!1)return;if(L.layers.test(Q.layers)){if(L.isGroup)ct=L.renderOrder;else if(L.isLOD)L.autoUpdate===!0&&L.update(Q);else if(L.isLight)m.pushLight(L),L.castShadow&&m.pushShadow(L);else if(L.isSprite){if(!L.frustumCulled||de.intersectsSprite(L)){ut&&Ct.setFromMatrixPosition(L.matrixWorld).applyMatrix4(mt);let Vt=$.update(L),qt=L.material;qt.visible&&p.push(L,Vt,qt,ct,Ct.z,null)}}else if((L.isMesh||L.isLine||L.isPoints)&&(!L.frustumCulled||de.intersectsObject(L))){let Vt=$.update(L),qt=L.material;if(ut&&(L.boundingSphere!==void 0?(L.boundingSphere===null&&L.computeBoundingSphere(),Ct.copy(L.boundingSphere.center)):(Vt.boundingSphere===null&&Vt.computeBoundingSphere(),Ct.copy(Vt.boundingSphere.center)),Ct.applyMatrix4(L.matrixWorld).applyMatrix4(mt)),Array.isArray(qt)){let Kt=Vt.groups;for(let pe=0,ve=Kt.length;pe<ve;pe++){let ue=Kt[pe],Ee=qt[ue.materialIndex];Ee&&Ee.visible&&p.push(L,Vt,Ee,ct,Ct.z,ue)}}else qt.visible&&p.push(L,Vt,qt,ct,Ct.z,null)}}let At=L.children;for(let Vt=0,qt=At.length;Vt<qt;Vt++)ts(At[Vt],Q,ct,ut)}function vi(L,Q,ct,ut){let j=L.opaque,At=L.transmissive,Vt=L.transparent;m.setupLightsView(ct),_e===!0&&Rt.setGlobalState(y.clippingPlanes,ct),ut&&ft.viewport(A.copy(ut)),j.length>0&&Gi(j,Q,ct),At.length>0&&Gi(At,Q,ct),Vt.length>0&&Gi(Vt,Q,ct),ft.buffers.depth.setTest(!0),ft.buffers.depth.setMask(!0),ft.buffers.color.setMask(!0),ft.setPolygonOffset(!1)}function Yn(L,Q,ct,ut){if((ct.isScene===!0?ct.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[ut.id]===void 0&&(m.state.transmissionRenderTarget[ut.id]=new wn(1,1,{generateMipmaps:!0,type:st.has("EXT_color_buffer_half_float")||st.has("EXT_color_buffer_float")?gi:Ni,minFilter:_r,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ne.workingColorSpace}));let At=m.state.transmissionRenderTarget[ut.id],Vt=ut.viewport||A;At.setSize(Vt.z*y.transmissionResolutionScale,Vt.w*y.transmissionResolutionScale);let qt=y.getRenderTarget(),Kt=y.getActiveCubeFace(),pe=y.getActiveMipmapLevel();y.setRenderTarget(At),y.getClearColor(O),z=y.getClearAlpha(),z<1&&y.setClearColor(16777215,.5),y.clear(),V&&Wt.render(ct);let ve=y.toneMapping;y.toneMapping=tr;let ue=ut.viewport;if(ut.viewport!==void 0&&(ut.viewport=void 0),m.setupLightsView(ut),_e===!0&&Rt.setGlobalState(y.clippingPlanes,ut),Gi(L,ct,ut),Mt.updateMultisampleRenderTarget(At),Mt.updateRenderTargetMipmap(At),st.has("WEBGL_multisampled_render_to_texture")===!1){let Ee=!1;for(let ke=0,De=Q.length;ke<De;ke++){let We=Q[ke],Ve=We.object,me=We.geometry,X=We.material,J=We.group;if(X.side===un&&Ve.layers.test(ut.layers)){let at=X.side;X.side=Pn,X.needsUpdate=!0,Js(Ve,ct,ut,me,X,J),X.side=at,X.needsUpdate=!0,Ee=!0}}Ee===!0&&(Mt.updateMultisampleRenderTarget(At),Mt.updateRenderTargetMipmap(At))}y.setRenderTarget(qt,Kt,pe),y.setClearColor(O,z),ue!==void 0&&(ut.viewport=ue),y.toneMapping=ve}function Gi(L,Q,ct){let ut=Q.isScene===!0?Q.overrideMaterial:null;for(let j=0,At=L.length;j<At;j++){let Vt=L[j],qt=Vt.object,Kt=Vt.geometry,pe=Vt.group,ve=Vt.material;ve.allowOverride===!0&&ut!==null&&(ve=ut),qt.layers.test(ct.layers)&&Js(qt,Q,ct,Kt,ve,pe)}}function Js(L,Q,ct,ut,j,At){L.onBeforeRender(y,Q,ct,ut,j,At),L.modelViewMatrix.multiplyMatrices(ct.matrixWorldInverse,L.matrixWorld),L.normalMatrix.getNormalMatrix(L.modelViewMatrix),j.onBeforeRender(y,Q,ct,ut,L,At),j.transparent===!0&&j.side===un&&j.forceSinglePass===!1?(j.side=Pn,j.needsUpdate=!0,y.renderBufferDirect(ct,Q,ut,j,L,At),j.side=ni,j.needsUpdate=!0,y.renderBufferDirect(ct,Q,ut,j,L,At),j.side=un):y.renderBufferDirect(ct,Q,ut,j,L,At),L.onAfterRender(y,Q,ct,ut,j,At)}function Tr(L,Q,ct){Q.isScene!==!0&&(Q=N);let ut=dt.get(L),j=m.state.lights,At=m.state.shadowsArray,Vt=j.state.version,qt=ot.getParameters(L,j.state,At,Q,ct),Kt=ot.getProgramCacheKey(qt),pe=ut.programs;ut.environment=L.isMeshStandardMaterial?Q.environment:null,ut.fog=Q.fog,ut.envMap=(L.isMeshStandardMaterial?Xt:Qt).get(L.envMap||ut.environment),ut.envMapRotation=ut.environment!==null&&L.envMap===null?Q.environmentRotation:L.envMapRotation,pe===void 0&&(L.addEventListener("dispose",Z),pe=new Map,ut.programs=pe);let ve=pe.get(Kt);if(ve!==void 0){if(ut.currentProgram===ve&&ut.lightsStateVersion===Vt)return rr(L,qt),ve}else qt.uniforms=ot.getUniforms(L),L.onBeforeCompile(qt,y),ve=ot.acquireProgram(qt,Kt),pe.set(Kt,ve),ut.uniforms=qt.uniforms;let ue=ut.uniforms;return(!L.isShaderMaterial&&!L.isRawShaderMaterial||L.clipping===!0)&&(ue.clippingPlanes=Rt.uniform),rr(L,qt),ut.needsLights=Ks(L),ut.lightsStateVersion=Vt,ut.needsLights&&(ue.ambientLightColor.value=j.state.ambient,ue.lightProbe.value=j.state.probe,ue.directionalLights.value=j.state.directional,ue.directionalLightShadows.value=j.state.directionalShadow,ue.spotLights.value=j.state.spot,ue.spotLightShadows.value=j.state.spotShadow,ue.rectAreaLights.value=j.state.rectArea,ue.ltc_1.value=j.state.rectAreaLTC1,ue.ltc_2.value=j.state.rectAreaLTC2,ue.pointLights.value=j.state.point,ue.pointLightShadows.value=j.state.pointShadow,ue.hemisphereLights.value=j.state.hemi,ue.directionalShadowMap.value=j.state.directionalShadowMap,ue.directionalShadowMatrix.value=j.state.directionalShadowMatrix,ue.spotShadowMap.value=j.state.spotShadowMap,ue.spotLightMatrix.value=j.state.spotLightMatrix,ue.spotLightMap.value=j.state.spotLightMap,ue.pointShadowMap.value=j.state.pointShadowMap,ue.pointShadowMatrix.value=j.state.pointShadowMatrix),ut.currentProgram=ve,ut.uniformsList=null,ve}function Ar(L){if(L.uniformsList===null){let Q=L.currentProgram.getUniforms();L.uniformsList=Os.seqWithValue(Q.seq,L.uniforms)}return L.uniformsList}function rr(L,Q){let ct=dt.get(L);ct.outputColorSpace=Q.outputColorSpace,ct.batching=Q.batching,ct.batchingColor=Q.batchingColor,ct.instancing=Q.instancing,ct.instancingColor=Q.instancingColor,ct.instancingMorph=Q.instancingMorph,ct.skinning=Q.skinning,ct.morphTargets=Q.morphTargets,ct.morphNormals=Q.morphNormals,ct.morphColors=Q.morphColors,ct.morphTargetsCount=Q.morphTargetsCount,ct.numClippingPlanes=Q.numClippingPlanes,ct.numIntersection=Q.numClipIntersection,ct.vertexAlphas=Q.vertexAlphas,ct.vertexTangents=Q.vertexTangents,ct.toneMapping=Q.toneMapping}function Rr(L,Q,ct,ut,j){Q.isScene!==!0&&(Q=N),Mt.resetTextureUnits();let At=Q.fog,Vt=ut.isMeshStandardMaterial?Q.environment:null,qt=T===null?y.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:Or,Kt=(ut.isMeshStandardMaterial?Xt:Qt).get(ut.envMap||Vt),pe=ut.vertexColors===!0&&!!ct.attributes.color&&ct.attributes.color.itemSize===4,ve=!!ct.attributes.tangent&&(!!ut.normalMap||ut.anisotropy>0),ue=!!ct.morphAttributes.position,Ee=!!ct.morphAttributes.normal,ke=!!ct.morphAttributes.color,De=tr;ut.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(De=y.toneMapping);let We=ct.morphAttributes.position||ct.morphAttributes.normal||ct.morphAttributes.color,Ve=We!==void 0?We.length:0,me=dt.get(ut),X=m.state.lights;if(_e===!0&&(it===!0||L!==S)){let Yt=L===S&&ut.id===b;Rt.setState(ut,L,Yt)}let J=!1;ut.version===me.__version?(me.needsLights&&me.lightsStateVersion!==X.state.version||me.outputColorSpace!==qt||j.isBatchedMesh&&me.batching===!1||!j.isBatchedMesh&&me.batching===!0||j.isBatchedMesh&&me.batchingColor===!0&&j.colorTexture===null||j.isBatchedMesh&&me.batchingColor===!1&&j.colorTexture!==null||j.isInstancedMesh&&me.instancing===!1||!j.isInstancedMesh&&me.instancing===!0||j.isSkinnedMesh&&me.skinning===!1||!j.isSkinnedMesh&&me.skinning===!0||j.isInstancedMesh&&me.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&me.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&me.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&me.instancingMorph===!1&&j.morphTexture!==null||me.envMap!==Kt||ut.fog===!0&&me.fog!==At||me.numClippingPlanes!==void 0&&(me.numClippingPlanes!==Rt.numPlanes||me.numIntersection!==Rt.numIntersection)||me.vertexAlphas!==pe||me.vertexTangents!==ve||me.morphTargets!==ue||me.morphNormals!==Ee||me.morphColors!==ke||me.toneMapping!==De||me.morphTargetsCount!==Ve)&&(J=!0):(J=!0,me.__version=ut.version);let at=me.currentProgram;J===!0&&(at=Tr(ut,Q,j));let Bt=!1,Et=!1,se=!1,Nt=at.getUniforms(),$t=me.uniforms;if(ft.useProgram(at.program)&&(Bt=!0,Et=!0,se=!0),ut.id!==b&&(b=ut.id,Et=!0),Bt||S!==L){ft.buffers.depth.getReversed()&&L.reversedDepth!==!0&&(L._reversedDepth=!0,L.updateProjectionMatrix()),Nt.setValue(B,"projectionMatrix",L.projectionMatrix),Nt.setValue(B,"viewMatrix",L.matrixWorldInverse);let xe=Nt.map.cameraPosition;xe!==void 0&&xe.setValue(B,Lt.setFromMatrixPosition(L.matrixWorld)),lt.logarithmicDepthBuffer&&Nt.setValue(B,"logDepthBufFC",2/(Math.log(L.far+1)/Math.LN2)),(ut.isMeshPhongMaterial||ut.isMeshToonMaterial||ut.isMeshLambertMaterial||ut.isMeshBasicMaterial||ut.isMeshStandardMaterial||ut.isShaderMaterial)&&Nt.setValue(B,"isOrthographic",L.isOrthographicCamera===!0),S!==L&&(S=L,Et=!0,se=!0)}if(j.isSkinnedMesh){Nt.setOptional(B,j,"bindMatrix"),Nt.setOptional(B,j,"bindMatrixInverse");let Yt=j.skeleton;Yt&&(Yt.boneTexture===null&&Yt.computeBoneTexture(),Nt.setValue(B,"boneTexture",Yt.boneTexture,Mt))}j.isBatchedMesh&&(Nt.setOptional(B,j,"batchingTexture"),Nt.setValue(B,"batchingTexture",j._matricesTexture,Mt),Nt.setOptional(B,j,"batchingIdTexture"),Nt.setValue(B,"batchingIdTexture",j._indirectTexture,Mt),Nt.setOptional(B,j,"batchingColorTexture"),j._colorsTexture!==null&&Nt.setValue(B,"batchingColorTexture",j._colorsTexture,Mt));let ge=ct.morphAttributes;if((ge.position!==void 0||ge.normal!==void 0||ge.color!==void 0)&&wt.update(j,ct,at),(Et||me.receiveShadow!==j.receiveShadow)&&(me.receiveShadow=j.receiveShadow,Nt.setValue(B,"receiveShadow",j.receiveShadow)),ut.isMeshGouraudMaterial&&ut.envMap!==null&&($t.envMap.value=Kt,$t.flipEnvMap.value=Kt.isCubeTexture&&Kt.isRenderTargetTexture===!1?-1:1),ut.isMeshStandardMaterial&&ut.envMap===null&&Q.environment!==null&&($t.envMapIntensity.value=Q.environmentIntensity),Et&&(Nt.setValue(B,"toneMappingExposure",y.toneMappingExposure),me.needsLights&&$s($t,se),At&&ut.fog===!0&&gt.refreshFogUniforms($t,At),gt.refreshMaterialUniforms($t,ut,q,W,m.state.transmissionRenderTarget[L.id]),Os.upload(B,Ar(me),$t,Mt)),ut.isShaderMaterial&&ut.uniformsNeedUpdate===!0&&(Os.upload(B,Ar(me),$t,Mt),ut.uniformsNeedUpdate=!1),ut.isSpriteMaterial&&Nt.setValue(B,"center",j.center),Nt.setValue(B,"modelViewMatrix",j.modelViewMatrix),Nt.setValue(B,"normalMatrix",j.normalMatrix),Nt.setValue(B,"modelMatrix",j.matrixWorld),ut.isShaderMaterial||ut.isRawShaderMaterial){let Yt=ut.uniformsGroups;for(let xe=0,Qe=Yt.length;xe<Qe;xe++){let Je=Yt[xe];D.update(Je,at),D.bind(Je,at)}}return at}function $s(L,Q){L.ambientLightColor.needsUpdate=Q,L.lightProbe.needsUpdate=Q,L.directionalLights.needsUpdate=Q,L.directionalLightShadows.needsUpdate=Q,L.pointLights.needsUpdate=Q,L.pointLightShadows.needsUpdate=Q,L.spotLights.needsUpdate=Q,L.spotLightShadows.needsUpdate=Q,L.rectAreaLights.needsUpdate=Q,L.hemisphereLights.needsUpdate=Q}function Ks(L){return L.isMeshLambertMaterial||L.isMeshToonMaterial||L.isMeshPhongMaterial||L.isMeshStandardMaterial||L.isShadowMaterial||L.isShaderMaterial&&L.lights===!0}this.getActiveCubeFace=function(){return M},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(L,Q,ct){let ut=dt.get(L);ut.__autoAllocateDepthBuffer=L.resolveDepthBuffer===!1,ut.__autoAllocateDepthBuffer===!1&&(ut.__useRenderToTexture=!1),dt.get(L.texture).__webglTexture=Q,dt.get(L.depthTexture).__webglTexture=ut.__autoAllocateDepthBuffer?void 0:ct,ut.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(L,Q){let ct=dt.get(L);ct.__webglFramebuffer=Q,ct.__useDefaultFramebuffer=Q===void 0};let Qs=B.createFramebuffer();this.setRenderTarget=function(L,Q=0,ct=0){T=L,M=Q,E=ct;let ut=!0,j=null,At=!1,Vt=!1;if(L){let Kt=dt.get(L);if(Kt.__useDefaultFramebuffer!==void 0)ft.bindFramebuffer(B.FRAMEBUFFER,null),ut=!1;else if(Kt.__webglFramebuffer===void 0)Mt.setupRenderTarget(L);else if(Kt.__hasExternalTextures)Mt.rebindTextures(L,dt.get(L.texture).__webglTexture,dt.get(L.depthTexture).__webglTexture);else if(L.depthBuffer){let ue=L.depthTexture;if(Kt.__boundDepthTexture!==ue){if(ue!==null&&dt.has(ue)&&(L.width!==ue.image.width||L.height!==ue.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Mt.setupDepthRenderbuffer(L)}}let pe=L.texture;(pe.isData3DTexture||pe.isDataArrayTexture||pe.isCompressedArrayTexture)&&(Vt=!0);let ve=dt.get(L).__webglFramebuffer;L.isWebGLCubeRenderTarget?(Array.isArray(ve[Q])?j=ve[Q][ct]:j=ve[Q],At=!0):L.samples>0&&Mt.useMultisampledRTT(L)===!1?j=dt.get(L).__webglMultisampledFramebuffer:Array.isArray(ve)?j=ve[ct]:j=ve,A.copy(L.viewport),I.copy(L.scissor),P=L.scissorTest}else A.copy(vt).multiplyScalar(q).floor(),I.copy(Gt).multiplyScalar(q).floor(),P=ie;if(ct!==0&&(j=Qs),ft.bindFramebuffer(B.FRAMEBUFFER,j)&&ut&&ft.drawBuffers(L,j),ft.viewport(A),ft.scissor(I),ft.setScissorTest(P),At){let Kt=dt.get(L.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Kt.__webglTexture,ct)}else if(Vt){let Kt=Q;for(let pe=0;pe<L.textures.length;pe++){let ve=dt.get(L.textures[pe]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+pe,ve.__webglTexture,ct,Kt)}}else if(L!==null&&ct!==0){let Kt=dt.get(L.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Kt.__webglTexture,ct)}b=-1},this.readRenderTargetPixels=function(L,Q,ct,ut,j,At,Vt,qt=0){if(!(L&&L.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Kt=dt.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&Vt!==void 0&&(Kt=Kt[Vt]),Kt){ft.bindFramebuffer(B.FRAMEBUFFER,Kt);try{let pe=L.textures[qt],ve=pe.format,ue=pe.type;if(!lt.textureFormatReadable(ve)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!lt.textureTypeReadable(ue)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Q>=0&&Q<=L.width-ut&&ct>=0&&ct<=L.height-j&&(L.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+qt),B.readPixels(Q,ct,ut,j,ne.convert(ve),ne.convert(ue),At))}finally{let pe=T!==null?dt.get(T).__webglFramebuffer:null;ft.bindFramebuffer(B.FRAMEBUFFER,pe)}}},this.readRenderTargetPixelsAsync=async function(L,Q,ct,ut,j,At,Vt,qt=0){if(!(L&&L.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Kt=dt.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&Vt!==void 0&&(Kt=Kt[Vt]),Kt)if(Q>=0&&Q<=L.width-ut&&ct>=0&&ct<=L.height-j){ft.bindFramebuffer(B.FRAMEBUFFER,Kt);let pe=L.textures[qt],ve=pe.format,ue=pe.type;if(!lt.textureFormatReadable(ve))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!lt.textureTypeReadable(ue))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Ee=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,Ee),B.bufferData(B.PIXEL_PACK_BUFFER,At.byteLength,B.STREAM_READ),L.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+qt),B.readPixels(Q,ct,ut,j,ne.convert(ve),ne.convert(ue),0);let ke=T!==null?dt.get(T).__webglFramebuffer:null;ft.bindFramebuffer(B.FRAMEBUFFER,ke);let De=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await hf(B,De,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,Ee),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,At),B.deleteBuffer(Ee),B.deleteSync(De),At}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(L,Q=null,ct=0){let ut=Math.pow(2,-ct),j=Math.floor(L.image.width*ut),At=Math.floor(L.image.height*ut),Vt=Q!==null?Q.x:0,qt=Q!==null?Q.y:0;Mt.setTexture2D(L,0),B.copyTexSubImage2D(B.TEXTURE_2D,ct,0,0,Vt,qt,j,At),ft.unbindTexture()};let Cr=B.createFramebuffer(),Pr=B.createFramebuffer();this.copyTextureToTexture=function(L,Q,ct=null,ut=null,j=0,At=null){At===null&&(j!==0?(ys("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),At=j,j=0):At=0);let Vt,qt,Kt,pe,ve,ue,Ee,ke,De,We=L.isCompressedTexture?L.mipmaps[At]:L.image;if(ct!==null)Vt=ct.max.x-ct.min.x,qt=ct.max.y-ct.min.y,Kt=ct.isBox3?ct.max.z-ct.min.z:1,pe=ct.min.x,ve=ct.min.y,ue=ct.isBox3?ct.min.z:0;else{let ge=Math.pow(2,-j);Vt=Math.floor(We.width*ge),qt=Math.floor(We.height*ge),L.isDataArrayTexture?Kt=We.depth:L.isData3DTexture?Kt=Math.floor(We.depth*ge):Kt=1,pe=0,ve=0,ue=0}ut!==null?(Ee=ut.x,ke=ut.y,De=ut.z):(Ee=0,ke=0,De=0);let Ve=ne.convert(Q.format),me=ne.convert(Q.type),X;Q.isData3DTexture?(Mt.setTexture3D(Q,0),X=B.TEXTURE_3D):Q.isDataArrayTexture||Q.isCompressedArrayTexture?(Mt.setTexture2DArray(Q,0),X=B.TEXTURE_2D_ARRAY):(Mt.setTexture2D(Q,0),X=B.TEXTURE_2D),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,Q.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Q.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,Q.unpackAlignment);let J=B.getParameter(B.UNPACK_ROW_LENGTH),at=B.getParameter(B.UNPACK_IMAGE_HEIGHT),Bt=B.getParameter(B.UNPACK_SKIP_PIXELS),Et=B.getParameter(B.UNPACK_SKIP_ROWS),se=B.getParameter(B.UNPACK_SKIP_IMAGES);B.pixelStorei(B.UNPACK_ROW_LENGTH,We.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,We.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,pe),B.pixelStorei(B.UNPACK_SKIP_ROWS,ve),B.pixelStorei(B.UNPACK_SKIP_IMAGES,ue);let Nt=L.isDataArrayTexture||L.isData3DTexture,$t=Q.isDataArrayTexture||Q.isData3DTexture;if(L.isDepthTexture){let ge=dt.get(L),Yt=dt.get(Q),xe=dt.get(ge.__renderTarget),Qe=dt.get(Yt.__renderTarget);ft.bindFramebuffer(B.READ_FRAMEBUFFER,xe.__webglFramebuffer),ft.bindFramebuffer(B.DRAW_FRAMEBUFFER,Qe.__webglFramebuffer);for(let Je=0;Je<Kt;Je++)Nt&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,dt.get(L).__webglTexture,j,ue+Je),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,dt.get(Q).__webglTexture,At,De+Je)),B.blitFramebuffer(pe,ve,Vt,qt,Ee,ke,Vt,qt,B.DEPTH_BUFFER_BIT,B.NEAREST);ft.bindFramebuffer(B.READ_FRAMEBUFFER,null),ft.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(j!==0||L.isRenderTargetTexture||dt.has(L)){let ge=dt.get(L),Yt=dt.get(Q);ft.bindFramebuffer(B.READ_FRAMEBUFFER,Cr),ft.bindFramebuffer(B.DRAW_FRAMEBUFFER,Pr);for(let xe=0;xe<Kt;xe++)Nt?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,ge.__webglTexture,j,ue+xe):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,ge.__webglTexture,j),$t?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Yt.__webglTexture,At,De+xe):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Yt.__webglTexture,At),j!==0?B.blitFramebuffer(pe,ve,Vt,qt,Ee,ke,Vt,qt,B.COLOR_BUFFER_BIT,B.NEAREST):$t?B.copyTexSubImage3D(X,At,Ee,ke,De+xe,pe,ve,Vt,qt):B.copyTexSubImage2D(X,At,Ee,ke,pe,ve,Vt,qt);ft.bindFramebuffer(B.READ_FRAMEBUFFER,null),ft.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else $t?L.isDataTexture||L.isData3DTexture?B.texSubImage3D(X,At,Ee,ke,De,Vt,qt,Kt,Ve,me,We.data):Q.isCompressedArrayTexture?B.compressedTexSubImage3D(X,At,Ee,ke,De,Vt,qt,Kt,Ve,We.data):B.texSubImage3D(X,At,Ee,ke,De,Vt,qt,Kt,Ve,me,We):L.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,At,Ee,ke,Vt,qt,Ve,me,We.data):L.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,At,Ee,ke,We.width,We.height,Ve,We.data):B.texSubImage2D(B.TEXTURE_2D,At,Ee,ke,Vt,qt,Ve,me,We);B.pixelStorei(B.UNPACK_ROW_LENGTH,J),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,at),B.pixelStorei(B.UNPACK_SKIP_PIXELS,Bt),B.pixelStorei(B.UNPACK_SKIP_ROWS,Et),B.pixelStorei(B.UNPACK_SKIP_IMAGES,se),At===0&&Q.generateMipmaps&&B.generateMipmap(X),ft.unbindTexture()},this.initRenderTarget=function(L){dt.get(L).__webglFramebuffer===void 0&&Mt.setupRenderTarget(L)},this.initTexture=function(L){L.isCubeTexture?Mt.setTextureCube(L,0):L.isData3DTexture?Mt.setTexture3D(L,0):L.isDataArrayTexture||L.isCompressedArrayTexture?Mt.setTexture2DArray(L,0):Mt.setTexture2D(L,0),ft.unbindTexture()},this.resetState=function(){M=0,E=0,T=null,ft.reset(),Pt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Si}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=Ne._getDrawingBufferColorSpace(t),e.unpackColorSpace=Ne._getUnpackColorSpace()}};var ks={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var ai=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},mx=new Is(-1,1,1,-1,0,1),Hh=class extends Le{constructor(){super(),this.setAttribute("position",new ae([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ae([0,2,0,0,2,0],2))}},gx=new Hh,yr=class{constructor(t){this._mesh=new le(gx,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,mx)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var tc=class extends ai{constructor(t,e="tDiffuse"){super(),this.textureID=e,this.uniforms=null,this.material=null,t instanceof He?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Bn.clone(t.uniforms),this.material=new He({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new yr(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Wo=class extends ai{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){let r=t.getContext(),s=t.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),s.buffers.stencil.setFunc(r.ALWAYS,o,4294967295),s.buffers.stencil.setClear(a),s.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(r.EQUAL,1,4294967295),s.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),s.buffers.stencil.setLocked(!0)}},ec=class extends ai{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var nc=class{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){let n=t.getSize(new xt);this._width=n.width,this._height=n.height,e=new wn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:gi}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new tc(ks),this.copyPass.material.blending=Ai,this.clock=new No}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());let e=this.renderer.getRenderTarget(),n=!1;for(let r=0,s=this.passes.length;r<s;r++){let o=this.passes[r];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),o.needsSwap){if(n){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Wo!==void 0&&(o instanceof Wo?n=!0:o instanceof ec&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){let e=this.renderer.getSize(new xt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;let n=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(n,r),this.renderTarget2.setSize(n,r);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,r)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var ic=class extends ai{constructor(t,e,n=null,r=null,s=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=r,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Ht}render(t,e,n){let r=t.autoClear;t.autoClear=!1;let s,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(s=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),t.autoClear=r}};var qf={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Ht(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var Hs=class i extends ai{constructor(t,e=1,n,r){super(),this.strength=e,this.radius=n,this.threshold=r,this.resolution=t!==void 0?new xt(t.x,t.y):new xt(256,256),this.clearColor=new Ht(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new wn(s,o,{type:gi}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let h=new wn(s,o,{type:gi});h.texture.name="UnrealBloomPass.h"+u,h.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(h);let f=new wn(s,o,{type:gi});f.texture.name="UnrealBloomPass.v"+u,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),s=Math.round(s/2),o=Math.round(o/2)}let a=qf;this.highPassUniforms=Bn.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=r,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new He({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new xt(1/s,1/o),s=Math.round(s/2),o=Math.round(o/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new k(1,1,1),new k(1,1,1),new k(1,1,1),new k(1,1,1),new k(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Bn.clone(ks.uniforms),this.blendMaterial=new He({uniforms:this.copyUniforms,vertexShader:ks.vertexShader,fragmentShader:ks.fragmentShader,blending:fn,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Ht,this._oldClearAlpha=1,this._basic=new Ie,this._fsQuad=new yr(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),r=Math.round(e/2);this.renderTargetBright.setSize(n,r);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(n,r),this.renderTargetsVertical[s].setSize(n,r),this.separableBlurMaterials[s].uniforms.invSize.value=new xt(1/n,1/r),n=Math.round(n/2),r=Math.round(r/2)}render(t,e,n,r,s){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();let o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),s&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this._fsQuad.render(t),a=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(n),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=o}_getSeparableBlurMaterial(t){let e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new He({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new xt(.5,.5)},direction:{value:new xt(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
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
				}`})}_getCompositeMaterial(t){return new He({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}};Hs.BlurDirectionX=new xt(1,0);Hs.BlurDirectionY=new xt(0,1);var Xo={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var rc=class extends ai{constructor(){super(),this.uniforms=Bn.clone(Xo.uniforms),this.material=new Lo({name:Xo.name,uniforms:this.uniforms,vertexShader:Xo.vertexShader,fragmentShader:Xo.fragmentShader}),this._fsQuad=new yr(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},Ne.getTransfer(this._outputColorSpace)===ze&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===sl?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===ol?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===al?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Ds?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===cl?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===hl?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===ll&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var sc=class extends le{constructor(t,e={}){super(t),this.isWater=!0;let n=this,r=e.textureWidth!==void 0?e.textureWidth:512,s=e.textureHeight!==void 0?e.textureHeight:512,o=e.clipBias!==void 0?e.clipBias:0,a=e.alpha!==void 0?e.alpha:1,l=e.time!==void 0?e.time:0,c=e.waterNormals!==void 0?e.waterNormals:null,u=e.sunDirection!==void 0?e.sunDirection:new k(.70707,.70707,0),h=new Ht(e.sunColor!==void 0?e.sunColor:16777215),f=new Ht(e.waterColor!==void 0?e.waterColor:8355711),d=e.eye!==void 0?e.eye:new k(0,0,0),g=e.distortionScale!==void 0?e.distortionScale:20,x=e.side!==void 0?e.side:ni,p=e.fog!==void 0?e.fog:!1,m=new Zn,_=new k,v=new k,y=new k,w=new Fe,M=new k(0,0,-1),E=new tn,T=new k,b=new k,S=new tn,A=new Fe,I=new En,P=new wn(r,s),O={name:"MirrorShader",uniforms:Bn.merge([It.fog,It.lights,{normalSampler:{value:null},mirrorSampler:{value:null},alpha:{value:1},time:{value:0},size:{value:1},distortionScale:{value:20},textureMatrix:{value:new Fe},sunColor:{value:new Ht(8355711)},sunDirection:{value:new k(.70707,.70707,0)},eye:{value:new k},waterColor:{value:new Ht(5592405)}}]),vertexShader:`
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
				}`},z=new He({name:O.name,uniforms:Bn.clone(O.uniforms),vertexShader:O.vertexShader,fragmentShader:O.fragmentShader,lights:!0,side:x,fog:p});z.uniforms.mirrorSampler.value=P.texture,z.uniforms.textureMatrix.value=A,z.uniforms.alpha.value=a,z.uniforms.time.value=l,z.uniforms.normalSampler.value=c,z.uniforms.sunColor.value=h,z.uniforms.waterColor.value=f,z.uniforms.sunDirection.value=u,z.uniforms.distortionScale.value=g,z.uniforms.eye.value=d,n.material=z,n.onBeforeRender=function(F,W,q){if(v.setFromMatrixPosition(n.matrixWorld),y.setFromMatrixPosition(q.matrixWorld),w.extractRotation(n.matrixWorld),_.set(0,0,1),_.applyMatrix4(w),T.subVectors(v,y),T.dot(_)>0)return;T.reflect(_).negate(),T.add(v),w.extractRotation(q.matrixWorld),M.set(0,0,-1),M.applyMatrix4(w),M.add(y),b.subVectors(v,M),b.reflect(_).negate(),b.add(v),I.position.copy(T),I.up.set(0,1,0),I.up.applyMatrix4(w),I.up.reflect(_),I.lookAt(b),I.far=q.far,I.updateMatrixWorld(),I.projectionMatrix.copy(q.projectionMatrix),A.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),A.multiply(I.projectionMatrix),A.multiply(I.matrixWorldInverse),m.setFromNormalAndCoplanarPoint(_,v),m.applyMatrix4(I.matrixWorldInverse),E.set(m.normal.x,m.normal.y,m.normal.z,m.constant);let K=I.projectionMatrix;S.x=(Math.sign(E.x)+K.elements[8])/K.elements[0],S.y=(Math.sign(E.y)+K.elements[9])/K.elements[5],S.z=-1,S.w=(1+K.elements[10])/K.elements[14],E.multiplyScalar(2/E.dot(S)),K.elements[2]=E.x,K.elements[6]=E.y,K.elements[10]=E.z+1-o,K.elements[14]=E.w,d.setFromMatrixPosition(q.matrixWorld);let rt=F.getRenderTarget(),vt=F.xr.enabled,Gt=F.shadowMap.autoUpdate;n.visible=!1,F.xr.enabled=!1,F.shadowMap.autoUpdate=!1,F.setRenderTarget(P),F.state.buffers.depth.setMask(!0),F.autoClear===!1&&F.clear(),F.render(W,I),n.visible=!0,F.xr.enabled=vt,F.shadowMap.autoUpdate=Gt,F.setRenderTarget(rt);let ie=q.viewport;ie!==void 0&&F.state.viewport(ie)}}};function Zf(i,t=!1){let e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),r=new Set(Object.keys(i[0].morphAttributes)),s={},o={},a=i[0].morphTargetsRelative,l=new Le,c=0;for(let u=0;u<i.length;++u){let h=i[u],f=0;if(e!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let d in h.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;s[d]===void 0&&(s[d]=[]),s[d].push(h.attributes[d]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let d in h.morphAttributes){if(!r.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(h.morphAttributes[d])}if(t){let d;if(e)d=h.index.count;else if(h.attributes.position!==void 0)d=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,d,u),c+=d}}if(e){let u=0,h=[];for(let f=0;f<i.length;++f){let d=i[f].index;for(let g=0;g<d.count;++g)h.push(d.getX(g)+u);u+=i[f].attributes.position.count}l.setIndex(h)}for(let u in s){let h=Yf(s[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,h)}for(let u in o){let h=o[u][0].length;if(h===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let f=0;f<h;++f){let d=[];for(let x=0;x<o[u].length;++x)d.push(o[u][x][f]);let g=Yf(d);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(g)}}return l}function Yf(i){let t,e,n,r=-1,s=0;for(let c=0;c<i.length;++c){let u=i[c];if(t===void 0&&(t=u.array.constructor),t!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=u.itemSize),e!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(r===-1&&(r=u.gpuType),r!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=u.count*e}let o=new t(s),a=new Pe(o,e,n),l=0;for(let c=0;c<i.length;++c){let u=i[c];if(u.isInterleavedBufferAttribute){let h=l/e;for(let f=0,d=u.count;f<d;f++)for(let g=0;g<e;g++){let x=u.getComponent(f,g);a.setComponent(f+h,g,x)}}else o.set(u.array,l);l+=u.count*e}return r!==void 0&&(a.gpuType=r),a}var $e=Math.PI/180,Dt=150,Ae=(i,t=Dt,e=0)=>new k(Math.cos(i*$e)*t,e,-Math.sin(i*$e)*t);function we(i){return()=>{i|=0,i=i+1831565813|0;let t=Math.imul(i^i>>>15,1|i);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}var Zt=new Ht(1,.7,.36),Tt=new Ht(1,.8,.52),Kn=new Ht(.72,.84,1),lc=new Ht(1,.2,.12),li=new Ht(.3,1,.85),Oi=new Ht(1,.4,.6),cc=new k(0,1,0),$f=[],Wh=[],ac=new Ts(new Uint8Array([255,255,255,255]),1,1);ac.needsUpdate=!0;ac.colorSpace=mn;var oc=new Ts(new Uint8Array([0,0,0,255]),1,1);oc.needsUpdate=!0;var Xh=[],Kf=new Set,Qn=i=>(Kf.add(i),i),nr=new Map;function yt({map:i=ac,emissiveMap:t=oc,glow:e=1.5,tint:n=16777215,side:r=ni,key:s=null,cut:o=!1}={}){let a=s||(i===ac&&t===oc?"plain"+n+r:null);if(a&&nr.has(a))return nr.get(a);let l=new He({uniforms:Bn.merge([It.fog,{map:{value:null},emissiveMap:{value:null},glow:{value:e},tint:{value:new Ht(n)}}]),vertexShader:`varying vec3 vC; varying vec2 vUv;
      #include <fog_pars_vertex>
      void main() { vC = color; vUv = uv; vec4 mvPosition = modelViewMatrix * vec4(position, 1.0); gl_Position = projectionMatrix * mvPosition;
      #include <fog_vertex>
      }`,fragmentShader:`uniform sampler2D map; uniform sampler2D emissiveMap; uniform float glow; uniform vec3 tint; varying vec3 vC; varying vec2 vUv;
      #include <fog_pars_fragment>
      void main() { vec4 t = texture2D(map, vUv);
      #ifdef CUT
      if (t.a < 0.32) discard;
      #endif
      gl_FragColor = vec4(t.rgb * tint * vC + texture2D(emissiveMap, vUv).rgb * glow, 1.0);
      #include <fog_fragment>
      #include <tonemapping_fragment>
      #include <colorspace_fragment>
      }`,vertexColors:!0,fog:!0,side:o?un:r,defines:o?{CUT:""}:{}});return l.uniforms.map.value=i,l.uniforms.emissiveMap.value=t,l.userData.glow=e,t!==oc&&Xh.push(l),a&&nr.set(a,l),l}var Vh=new Map;function te(i,t,e){let n=i+","+t+","+e;return Vh.has(n)||Vh.set(n,new Ie({color:new Ht(i,t,e)})),Vh.get(n)}var xx=["position","normal","uv","ao"],ye=class{constructor(){this.bins=new Map,this.lights=[],this.sparks=[]}put(t,...e){this.bins.has(t)||this.bins.set(t,[]);let n=this.bins.get(t);for(let r of e.flat(3))n.push(r);return this}light(t,e,n,r,s,o,a=0){return this.lights.push({x:t,y:e,z:n,colour:r,power:s,reach:o}),a&&this.spark(t,e,n,r,a),this}spark(t,e,n,r,s,o=0,a=0){return this.sparks.push({x:t,y:e,z:n,colour:r,size:s,flicker:o,drift:a}),this}stamp(t,e=0,n=0,r=0,s=1,o=0){let a=new Fe().compose(new k(e,o,n),new di().setFromAxisAngle(cc,r),new k(s,s,s)),l=new k;for(let[c,u]of t.bins)this.put(c,u.map(h=>h.clone().applyMatrix4(a)));for(let c of t.lights)l.set(c.x,c.y,c.z).applyMatrix4(a),this.lights.push({...c,x:l.x,y:l.y,z:l.z,reach:c.reach*s});for(let c of t.sparks)l.set(c.x,c.y,c.z).applyMatrix4(a),this.sparks.push({...c,x:l.x,y:l.y,z:l.z,size:c.size*s});return this}build(){for(let n of this.lights)$f.push({x:n.x,y:n.y,z:n.z,r:n.colour.r*n.power,g:n.colour.g*n.power,b:n.colour.b*n.power,reach2:n.reach*n.reach,far:n.reach*6});Wh.push(...this.sparks);let t=n=>{let r=n.index?n.toNonIndexed():n;r.attributes.ao||r.setAttribute("ao",new Pe(new Float32Array(r.attributes.position.count).fill(1),1));for(let s in r.attributes)xx.includes(s)||r.deleteAttribute(s);return r},e=new Rn;for(let[n,r]of this.bins)if(r.length){let s=new le(Zf(r.map(t),!1),n);Kf.has(n)&&s.layers.set(1),e.add(s)}return e}};function hc(i){let e=new Map,n=(u,h)=>u*4096+h;for(let u of $f)for(let h=Math.floor((u.x-u.far)/48);h<=Math.floor((u.x+u.far)/48);h++)for(let f=Math.floor((u.z-u.far)/48);f<=Math.floor((u.z+u.far)/48);f++){let d=n(h+2048,f+2048);e.has(d)||e.set(d,[]),e.get(d).push(u)}i.updateMatrixWorld(!0);let r=new k,s=new k,o=new be,a=new k(-.35,.62,.7).normalize(),l=[],c=typeof location<"u"&&location.hash.includes("day");i.traverse(u=>{if(!u.isMesh||!u.material.vertexColors||u.userData.lit)return;let h=u.geometry,f=h.attributes.position,d=h.attributes.normal,g=h.attributes.ao,x=new Float32Array(f.count*3);o.getNormalMatrix(u.matrixWorld);for(let p=0;p<f.count;p++){r.fromBufferAttribute(f,p).applyMatrix4(u.matrixWorld),s.fromBufferAttribute(d,p).applyMatrix3(o).normalize();let m=.55+.45*s.y,_=Math.max(0,s.dot(a))*.78,v=Math.abs(s.y)<.6?.5+.5*Math.min(1,Math.max(0,(r.y-1.5)/3)):s.y<-.6?.55:1,y=.45+.55*v,w=(.03*m+.05*_)*v,M=(.04*m+.062*_)*v,E=(.075*m+.1*_)*v;for(let b of e.get(n(Math.floor(r.x/48)+2048,Math.floor(r.z/48)+2048))||l){let S=b.x-r.x,A=b.y-r.y,I=b.z-r.z,P=S*S+A*A+I*I;if(P>b.far*b.far)continue;let O=Math.sqrt(P)||1,z=Math.max(0,((s.x*S+s.y*A+s.z*I)/O+.22)/1.22),F=z/(1+P/b.reach2)*y;w+=b.r*F,M+=b.g*F,E+=b.b*F}c&&(w=M=E=(.3+.7*Math.max(0,s.x*.42+s.y*.66+s.z*.62))*(.8+.2*v));let T=g?g.getX(p):1;x[p*3]=w*T,x[p*3+1]=M*T,x[p*3+2]=E*T}h.setAttribute("color",new Pe(x,3)),u.userData.lit=!0})}var Ot=i=>{let t=i.attributes.uv;if(t)for(let e=0;e<t.count;e++)t.setXY(e,.004,.004);return i};function Vs(i,t,e,n,r,s,o,a=0){let l=new Ue(i,t,e,Math.max(1,Math.round(i/5)),Math.max(1,Math.round(t/3)),Math.max(1,Math.round(e/6))),c=l.attributes.uv,u=l.attributes.normal,h=l.attributes.position;for(let f=0;f<c.count;f++){if(Math.abs(u.getY(f))>.5||!o){c.setXY(f,.004,.004);continue}let d=Math.abs(u.getX(f))>.5?h.getZ(f)+e/2+(o.same?0:7):h.getX(f)+i/2;c.setXY(f,d/o.u+a,(h.getY(f)+t/2+(o.y0||0))/o.v)}return l.translate(n,r+t/2,s)}var Ri=(i,t,e,n,r,s)=>Vs(i,t,e,n,r,s,null),G=(i,t,e,n,r,s)=>Ot(new Ue(i,t,e)).translate(n,r+t/2,s);function re(i,t,e,n,r,s=8,o=null,a=i){let l=new Ce(a,i,t,s,Math.max(1,Math.round(t/4))),c=l.attributes.uv,u=l.attributes.normal;for(let h=0;h<c.count;h++)!o||Math.abs(u.getY(h))>.9?c.setXY(h,.004,.004):c.setXY(h,c.getX(h)*2*Math.PI*i/o.u,(c.getY(h)*t+(o.y0||0))/o.v);return l.rotateY(Math.PI/s).translate(e,n+t/2,r)}var fe=(i,t,e,n,r=10)=>Ot(new hn(i,r,Math.max(6,r-2))).translate(t,e,n),Wn=(i,t,e,n,r,s=8)=>Ot(new Nn(i,t,s)).rotateY(Math.PI/s).translate(e,n+t/2,r);function ce(i,t,e=.08,n=5){let r=new k(...i),s=new k(...t),o=s.clone().sub(r);return Ot(new Ce(e,e,o.length(),n)).applyQuaternion(new di().setFromUnitVectors(cc,o.clone().normalize())).translate((r.x+s.x)/2,(r.y+s.y)/2,(r.z+s.z)/2)}function yn(i,t,e,n,r,{seg:s=20,swell:o=.1,finial:a=.32,wrap:l=0}={}){let c=[];for(let f=0;f<=18;f++){let d=f/18;c.push(new xt(Math.max(.001,i*Math.sqrt(1-Math.pow(d,1.75))*(.93+o*2.6*Math.sin(Math.PI*Math.min(1,d*1.5))*(1-d))),t*d))}let u=new si(c,s);if(l){let f=u.attributes.uv;for(let d=0;d<f.count;d++)f.setXY(d,f.getX(d)*l,.03+f.getY(d)*.94)}else Ot(u);let h=[u.translate(e,n,r)];if(a){let f=t*a;h.push(Ot(new Ce(.02*i,.09*i,f,6)).translate(e,n+t+f/2-.05,r),fe(.11*i,e,n+t+f*.25,r,8),fe(.07*i,e,n+t+f*.62,r,6))}return h}var Xn=(i,t,e,n=0,r=360,s=96)=>Ot(new Vr(i,t,Math.max(3,Math.round(s*r/360)),2,n*$e,r*$e)).rotateX(-Math.PI/2).translate(0,e,0);function qh(i,t,e,n=0,r=360,s=96){let o=Ot(new Ce(i,i,e,Math.max(3,Math.round(s*r/360)),1,!0,(n+90)*$e,r*$e)).translate(0,t+e/2,0),a=o.attributes.normal.array;for(let l=0;l<a.length;l++)a[l]=-a[l];return o}var Mr=(i,t=!0,e=8)=>{let n=new mi(i);return t&&(n.wrapS=n.wrapT=Ei),n.colorSpace=mn,n.anisotropy=e,n};function uc({cols:i=8,rows:t=8,lit:e=.16,seed:n=1,wall:r=[84,90,110]}){let a=we(n),l=document.createElement("canvas"),c=document.createElement("canvas");l.width=c.width=i*32,l.height=c.height=t*32;let u=l.getContext("2d"),h=c.getContext("2d");h.fillStyle="#000",h.fillRect(0,0,c.width,c.height);let f=d=>"rgb("+r.map(g=>g*d|0).join(",")+")";u.fillStyle=f(1),u.fillRect(0,0,l.width,l.height);for(let d=0;d<900;d++)u.fillStyle=f(.86+a()*.26),u.fillRect(a()*l.width,a()*l.height,3+a()*8,1+a()*3);for(let d=0;d<t;d++){u.fillStyle=f(.7),u.fillRect(0,d*32,l.width,2);for(let g=0;g<i;g++){if(g+d===0)continue;let x=g*32+8,p=d*32+8;u.fillStyle=f(.36),u.fillRect(x,p,16,17),u.fillStyle=f(1.2),u.fillRect(x-1,p+17,18,2),a()<.3&&(u.fillStyle=f(.75),u.fillRect(x-3,p+19,22,3)),a()<e&&(h.fillStyle=a()<.78?["#ffcf80","#ffb45c","#ffe0a6"][a()*3|0]:"#9fd0ff",h.globalAlpha=.35+a()*.65,h.fillRect(x+1,p+1,14,15),h.globalAlpha=1,a()<.5&&(h.fillStyle="#000",h.fillRect(x+7,p+1,1,15)))}}return{map:Mr(l,!0,4),emissiveMap:Mr(c,!0,4)}}function ci(i=128,t=0,e=1){let n=document.createElement("canvas");n.width=n.height=i;let r=n.getContext("2d"),s=r.createRadialGradient(i/2,i/2,i*t,i/2,i/2,i/2);return s.addColorStop(0,"rgba(255,255,255,1)"),s.addColorStop(.25*e,"rgba(255,255,255,.42)"),s.addColorStop(Math.min(.99,.6*e),"rgba(255,255,255,.1)"),s.addColorStop(1,"rgba(255,255,255,0)"),r.fillStyle=s,r.fillRect(0,0,i,i),Mr(n,!1,1)}function Gs(i,t,e=8,n=!0){let r=document.createElement("canvas");r.width=r.height=64;let s=r.getContext("2d");for(let o=0;o<e;o++)s.fillStyle=o%2?i:t,n?s.fillRect(o*64/e,0,64/e+1,64):s.fillRect(0,o*64/e,64,64/e+1);return Mr(r)}function Qf(i,{w:t=1024,h:e=320,ground:n="#0d1326",edge:r="#f2c66a"}={}){let s=document.createElement("canvas");s.width=t,s.height=e;let o=s.getContext("2d");o.fillStyle=n,o.fillRect(0,0,t,e),r&&(o.strokeStyle=r,o.lineWidth=6,o.strokeRect(9,9,t-18,e-18));for(let{text:a,y:l,size:c,colour:u,font:h="Geist, Arial, sans-serif",weight:f=600,fit:d=t-108}of i){let g=c;do o.font=f+" "+g+"px "+h,g-=4;while(o.measureText(a).width>d&&g>24);o.fillStyle=u,o.textBaseline="middle",o.fillText(a,54,l)}return Mr(s,!1)}function br(i,t,e=null,n=520){let r="leaf"+t;if(nr.has(r))return nr.get(r);let s=document.createElement("canvas");s.width=s.height=128;let o=s.getContext("2d"),a=we(t.length*31+i[1]),l=c=>"rgb("+i.map(u=>Math.max(0,Math.min(255,u*c))|0).join(",")+")";o.fillStyle=l(.62),o.fillRect(0,0,128,128);for(let c=0;c<1500;c++){let u=a()*128,h=a()*128,f=a();o.fillStyle=f<.16?l(.3):l(.75+a()*.95),o.beginPath(),o.ellipse(u,h,1.5+a()*3,.8+a()*1.4,a()*3.14,0,6.3),o.fill()}if(e)for(let c=0;c<n;c++)o.fillStyle=e[a()*e.length|0],o.beginPath(),o.arc(a()*128,a()*128,1+a()*2.2,0,6.3),o.fill();return yt({map:Mr(s,!0,2),key:r})}function ir(i,t,e,n,r=0,s=.8,o=2.4){let a=new Ps(1,1),l=a.attributes.position,c=a.attributes.uv;for(let u=0;u<l.count;u++){let h=l.getX(u),f=l.getY(u),d=l.getZ(u),g=1+.2*Math.sin(h*3.1+r)*Math.sin(f*2.7+r*1.7)+.15*Math.sin(d*4.3+r*2.3+h*2);l.setXYZ(u,h*g*i,(f<0?f*.62:f)*g*i*s,d*g*i),c.setXY(u,c.getX(u)*o*2,c.getY(u)*o)}return a.translate(t,e,n)}var Jf=null,an=()=>Jf||(Jf=Qn(new Ie({color:0,map:ci(64,.05,1.45),transparent:!0,opacity:.62,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}))),Ye=(i,t,e,n,r)=>new xn(i*2,t*2).rotateX(-Math.PI/2).translate(e,n+.07,r);function zi(i,t,e=null,n=0){let r="spray"+t;if(nr.has(r))return nr.get(r);let s=document.createElement("canvas");s.width=s.height=256;let o=s.getContext("2d"),a=we(t.length*17+i[0]),l=c=>"rgb("+i.map(u=>Math.max(0,Math.min(255,u*c))|0).join(",")+")";for(let c=0;c<4;c++){let u=c%2*128+64,h=(c/2|0)*128+64;for(let f=0;f<150;f++){let d=a()*6.283,g=Math.pow(a(),.6)*50;o.fillStyle=a()<.2?l(.4):l(.68+a()*.95),o.beginPath(),o.ellipse(u+Math.cos(d)*g,h+Math.sin(d)*g*.88,5+a()*6,2.2+a()*2.6,a()*3.14,0,6.3),o.fill()}if(e)for(let f=0;f<n;f++){let d=a()*6.283,g=Math.pow(a(),.6)*50;o.fillStyle=e[a()*e.length|0],o.beginPath(),o.arc(u+Math.cos(d)*g,h+Math.sin(d)*g*.88,2.4+a()*3.6,0,6.3),o.fill()}}return yt({map:Mr(s,!1,4),key:r,cut:!0})}function jf(){if(nr.has("frond"))return nr.get("frond");let i=document.createElement("canvas");i.width=256,i.height=64;let t=i.getContext("2d");t.lineCap="round";for(let e=6;e<250;e+=5){let n=28*(1-Math.pow(e/256,1.6))+3,r=.75+e*7%5*.09;t.strokeStyle="rgb("+[44*r,104*r,62*r].map(s=>s|0).join(",")+")",t.lineWidth=3.4;for(let s of[-1,1])t.beginPath(),t.moveTo(e,32),t.lineTo(e+12,32+s*n),t.stroke()}return t.strokeStyle="rgb(70,120,70)",t.lineWidth=2.5,t.beginPath(),t.moveTo(0,32),t.lineTo(254,32),t.stroke(),yt({map:Mr(i,!1,4),key:"frond",cut:!0})}function fc(i,t,e,n=0,r=1){let s=new k(...i),o=new k(...t),a=new k().subVectors(o,s).cross(cc).normalize().multiplyScalar(e/2),l=new Le,c=[s.clone().sub(a),s.clone().add(a),o.clone().add(a),o.clone().sub(a)],u=[],h=[0,1,2,0,2,3],f=[[n,0],[n,1],[r,1],[r,0]],d=[],g=[];for(let x of h)u.push(c[x].x,c[x].y,c[x].z),d.push(...f[x]),g.push(0,1,0);return l.setAttribute("position",new ae(u,3)),l.setAttribute("normal",new ae(g,3)),l.setAttribute("uv",new ae(d,2)),l}function qo(i,t,e,n,r,s,o,a,l=2.8){let c=we(a*13+5),u=[],h=[],f=[],d=new k,g=new k,x=new k,p=new k,m=new k;for(let v=0;v<o;v++){let y=c()*2-1,w=c()*6.283,M=Math.sqrt(1-y*y),E=.5+c()*.55,T=y<-.25?y*.45:y,b=l*(.72+c()*.6)/2,S=c()*4|0,A=S%2*.5,I=(S/2|0)*.5;p.set(i+Math.cos(w)*M*n*E,t+T*r*E,e+Math.sin(w)*M*s*E),d.set(Math.cos(w)*M+(c()-.5)*1.1,T+(c()-.5)*1.1,Math.sin(w)*M+(c()-.5)*1.1).normalize(),g.crossVectors(d,Math.abs(d.y)>.9?new k(1,0,0):cc).normalize(),x.crossVectors(g,d);let P=Math.cos(w)*M,O=T+.3,z=Math.sin(w)*M,F=Math.hypot(P,O,z)||1;for(let[W,q]of[[-1,-1],[1,-1],[1,1],[-1,-1],[1,1],[-1,1]])m.copy(p).addScaledVector(g,W*b).addScaledVector(x,q*b),u.push(m.x,m.y,m.z),h.push(P/F,O/F,z/F),f.push(A+(W+1)*.25,I+(q+1)*.25)}let _=new Le;return _.setAttribute("position",new ae(u,3)),_.setAttribute("normal",new ae(h,3)),_.setAttribute("uv",new ae(f,2)),_}var Gh=new Map,dc=(i=1,t=.76,e=.46)=>{let n=i+","+t+","+e;return Gh.has(n)||Gh.set(n,Qn(new Ie({color:new Ht(i,t,e),map:ci(64,.02,1.1),transparent:!0,opacity:.34,depthWrite:!1,blending:fn,polygonOffset:!0,polygonOffsetFactor:-3,polygonOffsetUnits:-3}))),Gh.get(n)};function td(i,t=16,e=.1){let n=new si(i,t*2),r=n.attributes.position,s=i.length;for(let a=0;a<r.count;a++)(a/s|0)%2&&(r.setX(a,r.getX(a)*(1-e)),r.setZ(a,r.getZ(a)*(1-e)));let o=n.toNonIndexed();return o.computeVertexNormals(),Ot(o)}var On=(i,t)=>new xt(i,t),_x=new k(0,1,0),Ws=(i,t=i)=>{let e=document.createElement("canvas");return e.width=i,e.height=t,[e,e.getContext("2d")]},Xs=(i,t=!0)=>{let e=new mi(i);return t&&(e.wrapS=e.wrapT=Ei),e.colorSpace=mn,e.anisotropy=8,e},hi=(i,t=1)=>"rgb("+i.map(e=>Math.max(0,Math.min(255,e*t))|0).join(",")+")",qn=new Map,Sr=(i,t)=>(i.setAttribute("ao",new Pe(new Float32Array(i.attributes.position.count).fill(t),1)),i),Mn=i=>Qn(yt({tint:i,key:"fine"+i}));function In(i,{stone:t=[214,192,154],course:e=.42,block:n=.96,rows:r=8,cols:s=4,joint:o=.7,vary:a=.1,bands:l=null,grime:c=.2}={}){let u="masonry-"+i;if(qn.has(u))return qn.get(u);let h=512,[f,d]=Ws(h),g=we(i.length*97+t[0]*3+r),x=h/r,p=h/s,m=Math.max(1,Math.round(x*.055));for(let v=0;v<r;v++){let y=l&&l[v]||t,w=v%2*p/2;for(let M=0;M<s;M++){let E=1-a/2+g()*a;d.fillStyle=hi(y,E);for(let T of[M*p+w,M*p+w-h])d.fillRect(T,v*x,p+1,x+1)}}for(let v=0;v<5200;v++)d.fillStyle=g()<.5?"rgba(0,0,0,.045)":"rgba(255,250,235,.05)",d.fillRect(g()*h,g()*h,1+g()*4,1+g()*2);for(let v=0;v<24;v++){let y=g()*(h-20),w=3+g()*14,M=d.createLinearGradient(y,0,y+w,0),E=(c*(.2+g()*.5)).toFixed(3);M.addColorStop(0,"rgba(40,30,20,0)"),M.addColorStop(.5,"rgba(40,30,20,"+E+")"),M.addColorStop(1,"rgba(40,30,20,0)"),d.fillStyle=M,d.fillRect(y,0,w,h)}for(let v=0;v<r;v++){let y=v%2*p/2,w=l&&l[v]||t;d.fillStyle=hi(w,o),d.fillRect(0,v*x,h,m),o<1&&(d.fillStyle="rgba(255,255,255,.1)",d.fillRect(0,v*x+m,h,1)),d.fillStyle=hi(w,(1+o)/2);for(let M=0;M<s;M++)d.fillRect((M*p+y)%h,v*x+m,Math.max(1,m-1),x-m)}let _=yt({map:Xs(f),key:u});return _.userData.tile={u:s*n,v:r*e},qn.set(u,_),_}function pc(i,t=[156,84,60]){let e="tiles-"+i;if(qn.has(e))return qn.get(e);let n=256,[r,s]=Ws(n),o=we(i.length*53+t[0]),a=8,l=12,c=n/a,u=n/l;for(let f=0;f<a;f++)for(let d=0;d<l;d++){let g=d*u,x=f*c,p=s.createLinearGradient(g,0,g+u,0),m=.86+o()*.28;p.addColorStop(0,hi(t,.55*m)),p.addColorStop(.5,hi(t,1.12*m)),p.addColorStop(1,hi(t,.55*m)),s.fillStyle=p,s.fillRect(g,x,u+1,c),s.fillStyle="rgba(0,0,0,.42)",s.fillRect(g,x,u+1,3),s.fillStyle="rgba(255,230,200,.16)",s.fillRect(g,x+3,u+1,2)}let h=yt({map:Xs(r),key:e});return h.userData.tile={u:l*.34,v:a*.46},qn.set(e,h),h}function Hi(){if(qn.has("glazing"))return qn.get("glazing");let i=96,t=144,[e,n]=Ws(i*4,t*2),[r,s]=Ws(i*4,t*2);s.fillStyle="#000",s.fillRect(0,0,r.width,r.height);for(let a=0;a<2;a++)for(let l=0;l<4;l++){let c=l*i,u=a*t,h=n.createLinearGradient(0,u,0,u+t);if(h.addColorStop(0,"#39445f"),h.addColorStop(1,"#161c2c"),n.fillStyle=h,n.fillRect(c,u,i,t),a){let g=[["#ffd68a","#a8641f"],["#ffc46a","#8a4a16"],["#ffe4b0","#b07a34"],["#f6b25a","#6a3610"]][l],x=s.createLinearGradient(0,u,0,u+t);x.addColorStop(0,g[0]),x.addColorStop(1,g[1]),s.fillStyle=x,s.fillRect(c,u,i,t),s.fillStyle="rgba(0,0,0,.4)",l%2?s.fillRect(c,u,i*.24,t):s.fillRect(c,u+t*.72,i,t*.28),n.fillStyle="#3a2c1c",n.fillRect(c,u,i,t)}else if(l===3){n.fillStyle="#4a3a2a",n.fillRect(c,u,i,t),n.fillStyle="#2c2218";for(let g=6;g<t;g+=7)n.fillRect(c+6,u+g,i-12,3)}let[f,d]=[[2,3],[3,4],[2,4],[2,2]][l];for(let[g,x]of[[n,"#6a5238"],[s,"#000"]]){g.fillStyle=x,g.fillRect(c,u,i,5),g.fillRect(c,u+t-5,i,5),g.fillRect(c,u,5,t),g.fillRect(c+i-5,u,5,t);for(let p=1;p<f;p++)g.fillRect(c+p*i/f-2,u,4,t);for(let p=1;p<d;p++)g.fillRect(c,u+p*t/d-1.5,i,3)}}let o=yt({map:Xs(e,!1),emissiveMap:Xs(r,!1),glow:1.25,key:"glazing"});return qn.set("glazing",o),o}function Er(i="door",t=[128,72,40]){let e="timber-"+i;if(qn.has(e))return qn.get(e);let[n,r]=Ws(128,256),s=we(i.length*7+t[0]);r.fillStyle=hi(t,.8),r.fillRect(0,0,128,256);for(let a=0;a<260;a++)r.fillStyle=hi(t,.66+s()*.4),r.fillRect(s()*128,s()*256,1+s()*2,6+s()*26);for(let a=0;a<2;a++)for(let l=0;l<5;l++)for(let c=0;c<2;c++){let u=a*64+5+c*28,h=6+l*50;r.fillStyle=hi(t,.5),r.fillRect(u,h,26,44),r.fillStyle=hi(t,1.12),r.fillRect(u+2,h+2,22,40),r.fillStyle=hi(t,.86),r.fillRect(u+5,h+5,16,34),r.fillStyle="#d8b060",r.beginPath(),r.arc(u+13,h+22,2.4,0,7),r.fill()}r.fillStyle=hi(t,.36),r.fillRect(62,0,4,256);let o=yt({map:Xs(n,!1),key:e});return qn.set(e,o),o}function wr(i,t=[150,92,60],e=.3,n=!1){let r="jali-"+i;if(qn.has(r))return qn.get(r);let s=128,[o,a]=Ws(s),l=s/4,c=l*e;if(a.strokeStyle=hi(t),a.lineWidth=c,a.lineCap="square",n)for(let h=-4;h<=8;h++)a.beginPath(),a.moveTo(h*l,0),a.lineTo(h*l+s,s),a.stroke(),a.beginPath(),a.moveTo(h*l,0),a.lineTo(h*l-s,s),a.stroke();else for(let h=0;h<=4;h++)a.beginPath(),a.moveTo(h*l,0),a.lineTo(h*l,s),a.stroke(),a.beginPath(),a.moveTo(0,h*l),a.lineTo(s,h*l),a.stroke();a.globalCompositeOperation="source-atop",a.fillStyle="rgba(255,255,255,.14)";for(let h=0;h<=4;h++)a.fillRect(0,h*l-c/2,s,1.5);let u=yt({map:Xs(o),key:r,cut:!0});return qn.set(r,u),u}function An(i,t,e=0,n=0){i.index&&(i=i.toNonIndexed());let r=i.attributes.position,s=new Float32Array(r.count*2),o=new k,a=new k,l=new k,c=new k,u=new k,h=new k;for(let f=0;f<r.count;f+=3){o.fromBufferAttribute(r,f),a.fromBufferAttribute(r,f+1),l.fromBufferAttribute(r,f+2),c.subVectors(a,o).cross(h.subVectors(l,o)).normalize(),Math.abs(c.y)>.96?(u.set(1,0,0),h.set(0,0,-1)):(u.crossVectors(_x,c).normalize(),h.crossVectors(c,u));for(let[d,g]of[[f,o],[f+1,a],[f+2,l]])s[d*2]=(g.dot(u)+e)/t.u,s[d*2+1]=(g.dot(h)+n)/t.v}return i.setAttribute("uv",new Pe(s,2)),i}function ed(i,t){let e=i.attributes.position,n=i.attributes.normal,r=i.attributes.uv,s=[],o=[],a=[];for(let c=0;c<e.count;c+=3)if(t(c,e,n))for(let u=c;u<c+3;u++)s.push(e.getX(u),e.getY(u),e.getZ(u)),o.push(n.getX(u),n.getY(u),n.getZ(u)),a.push(r.getX(u),r.getY(u));let l=new Le;return l.setAttribute("position",new ae(s,3)),l.setAttribute("normal",new ae(o,3)),l.setAttribute("uv",new ae(a,2)),l}function ki(i,t,e,{sharp:n=.5,lobes:r=7,cusp:s=.09,seg:o=12}={}){let a=t/2,l=[],c=[];if(i==="flat")return[[-a,0],[a,0],[a,e],[-a,e]];if(i==="circle"){for(let d=0;d<o*2;d++){let g=d/(o*2)*Math.PI*2;l.push([Math.cos(g)*a,a+Math.sin(g)*a])}return l}if(i==="round")for(let d=0;d<=o;d++){let g=d/o*Math.PI;c.push([Math.cos(g)*a,Math.sin(g)*a])}else if(i==="segment"){let d=a*.42,g=(a*a+d*d)/(2*d),x=Math.asin(a/g);for(let p=0;p<=o;p++){let m=-x+p/o*2*x;c.push([-Math.sin(m)*g,Math.cos(m)*g-(g-d)])}}else{let d=n*a,g=a+d,x=Math.acos(d/g),p=i==="cusped"?r*6:o;for(let m=0;m<=p;m++){let _=m/p,v=_<=.5,y=v?_*2*x:Math.PI-(1-_)*2*x,w=i==="cusped"?s*t*(1-Math.abs(Math.sin(Math.PI*r*_))):0;c.push([(v?-d:d)+Math.cos(y)*(g-w),Math.sin(y)*(g-w)])}}let u=Math.max(...c.map(d=>d[1])),h=u>e*.94?e*.94/u:1,f=e-u*h;l.push([-a,0],[a,0]),i==="cusped"&&l.push([a,f-.001]);for(let[d,g]of c){let x=l[l.length-1];Math.hypot(x[0]-d,x[1]-f-g*h)>1e-4&&l.push([d,f+g*h])}return i==="cusped"&&l.push([-a,f-.001]),l}function vx(i,t,e,n=[],r=null,s=0){let o=new Tn([On(-i/2,0),On(i/2,0),On(i/2,t),On(-i/2,t)]);for(let g of n)o.holes.push(new Li(ki(g.kind||"round",g.w,g.h,g).map(x=>On(g.x+x[0],Math.max(.02,g.y)+x[1]))));let a=new Ti(o,{depth:e,bevelEnabled:!1,curveSegments:1}).translate(0,0,-e),l=a.index?a.toNonIndexed():a,c=ed(l,(g,x,p)=>p.getZ(g)>-.9&&!(p.getY(g)<-.9&&x.getY(g)<.001)),u=c.attributes.position,h=c.attributes.normal,f=new Float32Array(u.count).fill(1),d=.001;for(let g=0;g<u.count;g+=3){if(Math.abs(h.getZ(g))>.5)continue;let x=!0;for(let p=g;p<g+3;p++)(Math.abs(u.getX(p))>i/2-d||u.getY(p)<d||u.getY(p)>t-d)&&(x=!1);if(x)for(let p=g;p<g+3;p++)f[p]=u.getZ(p)>-d?.92:.4}return c.setAttribute("ao",new Pe(f,1)),r?An(c,r,0,s):Ot(c)}function qe(i,t,e,n,r,s,{uv:o="atlas",on:a=0,style:l=0,shade:c=.62,...u}={}){let h=new mr(new Tn(ki(i,t,e,u).map(g=>On(g[0],g[1])))),f=h.attributes.uv,d=h.attributes.position;for(let g=0;g<f.count;g++){let x=d.getX(g)/t+.5,p=d.getY(g)/e;o==="atlas"?f.setXY(g,(l%4+.03+.94*x)/4,(a?0:.5)+(.02+.96*p)/2):o==="whole"?f.setXY(g,x,p):o==="plain"?f.setXY(g,.004,.004):f.setXY(g,d.getX(g)/o,d.getY(g)/o)}return Sr(h,a?1:c).translate(n,r,s)}function cn(i,t,e,n,r,s,{band:o=.22,proud:a=.1,outer:l=i,...c}={}){let u=ki(i,t,e,c),h;if(i==="circle")h=new Tn(ki("circle",t+o*2,0,c).map(d=>On(d[0],d[1]-o))),h.holes.push(new Li(u.map(d=>On(d[0],d[1]))));else{let d=l==="flat"?[[-t/2-o,0],[t/2+o,0],[t/2+o,e+o],[-t/2-o,e+o]]:ki(l,t+o*2,e+o,c);h=new Tn([...d.slice(1),d[0],u[0],...u.slice(2).reverse(),u[1]].map(g=>On(g[0],g[1])))}let f=new Ti(h,{depth:a,bevelEnabled:!1,curveSegments:1});return Ot(ed(f.index?f.toNonIndexed():f,(d,g,x)=>x.getZ(d)>-.9)).translate(n,r,s)}var zt=(i,t,e=0,n=0)=>[[e-i/2,n+t/2],[e+i/2,n+t/2],[e+i/2,n-t/2],[e-i/2,n-t/2]],Ge=(i,t=8,e=0,n=0,r=.5)=>Array.from({length:t},(s,o)=>{let a=(o+r)/t*Math.PI*2;return[e+Math.cos(a)*i,n-Math.sin(a)*i]});function ee(i,t,e=0,{cap:n=!1,tile:r=null}={}){let s=t.length,o=[],a=[],l=[],c=(h,f)=>[t[h][0]+a[h][0]*f,t[h][1]+a[h][1]*f];for(let h=0;h<s;h++){let f=t[h],d=t[(h+1)%s],g=d[0]-f[0],x=d[1]-f[1],p=Math.hypot(g,x)||1;o.push([-x/p,g/p])}for(let h=0;h<s;h++){let f=o[(h+s-1)%s],d=o[h],g=1+f[0]*d[0]+f[1]*d[1];a.push([(f[0]+d[0])/g,(f[1]+d[1])/g])}for(let h=0;h<i.length-1;h++){let[f,d]=i[h],[g,x]=i[h+1];for(let p=0;p<s;p++){let m=(p+1)%s,_=c(p,f),v=c(m,f),y=c(p,g),w=c(m,g);l.push(_[0],e+d,_[1],v[0],e+d,v[1],w[0],e+x,w[1],_[0],e+d,_[1],w[0],e+x,w[1],y[0],e+x,y[1])}}if(n){let[h,f]=i[i.length-1],d=t.map((g,x)=>c(x,h));for(let g=1;g<s-1;g++)l.push(d[0][0],e+f,d[0][1],d[g][0],e+f,d[g][1],d[g+1][0],e+f,d[g+1][1])}let u=new Le;return u.setAttribute("position",new ae(l,3)),u.computeVertexNormals(),u.setAttribute("uv",new Pe(new Float32Array(l.length/3*2).fill(.004),2)),r?An(u,r):u}var rn=(i,t,e=1.1,n=.35,r=.12)=>ee([[0,n],[e,0],[e,r],[0,n+r]],i,t),he=(i,t,e=.5,n=.6)=>ee([[0,0],[e*.3,0],[e*.3,n*.3],[e*.65,n*.38],[e*.65,n*.66],[e,n*.74],[e,n],[0,n]],i,t);function _i(i,t,e,n,{inset:r=0,ends:s=!0}={}){let o=t[0]-i[0],a=t[1]-i[1],l=Math.hypot(o,a),c=Math.max(1,Math.round((l-r*2)/e)),u=Math.atan2(-a,o),h=[],f=new Fe;for(let d=s?0:1;d<=(s?c:c-1);d++){let g=(r+d*(l-r*2)/c)/l;f.makeRotationY(u).setPosition(i[0]+o*g,0,i[1]+a*g),h.push(...[n(d)].flat(3).map(x=>x.applyMatrix4(f)))}return h}var Be=(i,t,e,n)=>i.flatMap((r,s)=>_i(r,i[(s+1)%i.length],t,e,n));function Ke(i=.7,t=.6,e=.18,n=0){let r=new Tn([On(0,0),On(0,-t),On(i*.3,-t*.78),On(i*.72,-t*.3),On(i,0)]);return Ot(new Ti(r,{depth:e,bevelEnabled:!1})).rotateY(-Math.PI/2).translate(e/2,n,0)}function gn(i,t,e,n,r,{sides:s=8,taper:o=.84,base:a=.5,cap:l=.5}={}){let c=a*i*2,u=l*i*2;return[G(i*2.7,c*.45,i*2.7,e,n,r),re(i*1.3,c*.55,e,n+c*.45,r,s,null,i*1.02),re(i,t-c-u,e,n+c,r,s,null,i*o),re(i*o,u*.6,e,n+t-u,r,s,null,i*1.42),G(i*3,u*.4,i*3,e,n+t-u*.4,r)]}function jn(i,t,e,{h:n=.95,step:r=.36,r:s=.07,rail:o=.13,base:a=.1}={}){let l=t[0]-i[0],c=t[1]-i[1],u=Math.hypot(l,c),h=Math.max(1,Math.round(u/r)),f=[],d=new Fe().makeRotationY(Math.atan2(-c,l)).setPosition(i[0],e,i[1]);for(let g=0;g<h;g++)f.push(Ot(new Ce(s*.6,s,n-o-a,4,1,!0)).translate((g+.5)*u/h,a+(n-o-a)/2,0));return f.push(G(u,o,o*1.5,u/2,n-o,0),G(u,a,o*1.3,u/2,0,0)),f.map(g=>g.applyMatrix4(d))}var Kr=(i,t,e)=>i.flatMap((n,r)=>jn(n,i[(r+1)%i.length],t,e));function Ze(i,t,e,n){return Ot(new si([[.5,0],[.62,.12],[.3,.3],[.2,.42],[.55,.7],[.6,.95],[.36,1.2],[.16,1.34],[.24,1.5],[.1,1.72],[.06,2.2],[.001,2.6]].map(r=>On(r[0]*i,r[1]*i)),8)).translate(t,e,n)}function nd(i,t,e,n,r,s,o=.55){return Array.from({length:t},(a,l)=>Ot(new Nn(e*.42,e,4)).rotateX(o).translate(0,e*.4,i).rotateY(l/t*Math.PI*2).translate(n,r,s))}function dn(i,{seg:t=32,section:e=null,tile:n=null}={}){let r=new si(i.map(l=>On(Math.max(.001,l[0]),l[1])),t),s=r.attributes.position,o=r.attributes.uv,a=2*Math.PI*i[0][0];for(let l=0;l<s.count;l++){let c=e?e(Math.atan2(s.getX(l),s.getZ(l))):1;s.setX(l,s.getX(l)*c),s.setZ(l,s.getZ(l)*c),n?o.setXY(l,o.getX(l)*a/n.u,s.getY(l)/n.v):o.setXY(l,.004,.004)}return r.computeVertexNormals(),r}var id=(i=4)=>t=>1/Math.pow(Math.pow(Math.abs(Math.cos(t)),i)+Math.pow(Math.abs(Math.sin(t)),i),1/i);function Ci(i,t,e,n,r,{roof:s="dome",drop:o=1,r:a=.13}={}){let l=new nn,c=e/2;l.add("trim",G(i,.24,e,n,r-.24,c),G(i*.8,o*.4,e*.72,n,r-.24-o*.4,e*.36),G(i*.56,o*.36,e*.46,n,r-.24-o*.76,e*.23),G(i*.3,o*.24,e*.24,n,r-.24-o,e*.12)),l.add("trim",G(i,.82,.1,n,r,e-.05),G(.1,.82,e,n-i/2+.05,r,c),G(.1,.82,e,n+i/2-.05,r,c),G(i+.12,.1,e+.06,n,r+.82,c+.03));for(let u of[-1,1])l.add("trim",gn(a,t-.92,n+u*(i/2-a*1.5),r+.92,e-a*1.5,{sides:6}));if(l.add("trim",G(i+.16,.24,e+.08,n,r+t,c+.04),rn(zt(i+.16,e+.08,n,c+.04),r+t+.24,.7,.3,.1)),s==="dome"&&l.add("trim",yn(Math.min(i,e*2)*.46,i*.42,n,r+t+.6,e*.42,{seg:10,finial:.5})),s==="crest"){l.add("trim",G(i*.94,.5,e*.8,n,r+t+.6,e*.42));for(let u=-2;u<=2;u++)l.add("fine",G(i*.1,.24,.12,n+u*i*.2,r+t+1.1,e*.78))}return s==="slope"&&l.add("trim",ee([[0,0],[-Math.min(i,e)*.48,.7]],zt(i,e,n,c),r+t+.6)),l}var nn=class{constructor(){this.g={}}add(t,...e){return(this.g[t]||(this.g[t]=[])).push(...e.flat(3)),this}take(t){for(let e in t.g)this.add(e,t.g[e]);return this}move(t=0,e=0,n=0,r=0){let s=new Fe().makeRotationY(r).setPosition(t,e,n);for(let o in this.g)for(let a of this.g[o])a.applyMatrix4(s);return this}into(t,e){for(let n in this.g){if(!e[n])throw new Error("nothing to make "+n+" of");t.put(e[n],this.g[n])}return t}};function en(i,t,e,n,r=[],s=0,o=null){let a=new nn().add("stone",vx(i,t,e,r,n,s).translate(0,s,0));for(let l of r){let c=l.kind||"round",u=l.depth===void 0?Math.min(e*.75,.45):l.depth,h=l.fill||"glass",f=s+Math.max(.02,l.y);h==="glass"?a.add("glass",qe(c,l.w,l.h,l.x,f,-u,{...l,on:l.on===void 0?o?o()<(l.chance===void 0?.42:l.chance):0:l.on,style:l.style===void 0?o?o()*4|0:0:l.style})):h==="door"?a.add("wood",qe(c,l.w,l.h,l.x,f,-u,{...l,uv:"whole",shade:.8})):h==="jali"?a.add("jali",qe(c,l.w,l.h,l.x,f,-u*.5,{...l,uv:l.cell||1,shade:.9})).add("dark",qe(c,l.w,l.h,l.x,f,-u,{...l,uv:"plain",shade:.5})):h!=="open"&&a.add(h,qe(c,l.w,l.h,l.x,f,-u,{...l,uv:"plain",on:h==="glow"?1:0})),l.frame&&a.add("trim",cn(c,l.w,l.h,l.x,f,0,{...l,band:l.frame,proud:l.proud===void 0?.09:l.proud,outer:l.outer||c})),l.sill&&a.add("trim",G(l.w+(l.frame||0)*2+.3,.16,.34,l.x,f-.16,.05)),l.rail&&a.add("fine",jn([l.x-l.w/2,-.14],[l.x+l.w/2,-.14],f,{h:l.rail===!0?.9:l.rail}))}return a}function sn(i,t,e,n,r,{front:s=[],back:o=[],left:a=[],right:l=[]}={},c=0,u=null){return new nn().take(en(i,e,n,r,s,c,u)).take(en(i,e,n,r,o,c,u).move(0,0,-t,Math.PI)).take(en(t,e,n,r,l,c,u).move(i/2,0,-t/2,Math.PI/2)).take(en(t,e,n,r,a,c,u).move(-i/2,0,-t/2,-Math.PI/2))}var Me=(i,t,e,n=0)=>Array.from({length:i},(r,s)=>({...e,x:n+(s-(i-1)/2)*t}));var rd=[],Dn=i=>Qn(yt(i)),Yo=(i,t,e,n)=>rd.push({x:i,z:t,hw:e,hd:n}),qs=(i,t,e=0)=>rd.every(n=>Math.abs(i-n.x)>n.hw+e||Math.abs(t-n.z)>n.hd+e),mc=i=>{let t=(i%360+360)%360;return t>204&&t<336};function yx(){let i=new ye,t=Dn({tint:3158586});i.put(t,re(.34,.7,0,0,0,8,null,.2),ce([0,.7,0],[0,5.6,0],.09,6),ce([-.95,5.3,0],[.95,5.3,0],.05,4),G(.2,.3,.2,0,5.6,0),Wn(.16,.5,0,5.9,0,6));for(let e of[-1,1])i.put(t,ce([e*.95,5.3,0],[e*.95,4.95,0],.03,4)),i.put(te(1.9,1.5,.9),fe(.3,e*.95,4.7,0,8));return i.light(0,4.9,0,Tt,.95,6.2).spark(-.95,4.7,0,Tt,4.2).spark(.95,4.7,0,Tt,4.2),i.put(dc(),Ye(5.6,5.6,0,.03,0)),i.put(an(),Ye(.7,.7,0,0,0)),i}function Mx(){let i=new ye,t=Dn({tint:8019008}),e=Dn({tint:3158586});i.put(t,G(2.2,.1,.6,0,.5,0),G(2.2,.5,.08,0,.72,-.3));for(let n of[-.95,.95])i.put(e,G(.08,.5,.6,n,0,0));return i}function bn(i,t="neem",e=!1,n=!1){let r=new ye,s=we(i*7+t.length),o=Dn({tint:6048314}),a=n?"f":"",l=y=>n?Qn(y):y,c=[zi([44,100,62],"a"+a),zi([58,116,70],"b"+a),zi([38,86,66],"c"+a),zi([66,108,52],"d"+a)].map(l),u=l(br([30,70,46],"in"+a)),h=(y,w,M,E,T,b,S,A)=>r.put(y,qo(w,M,E,T,b,T,n?Math.round(S*.6):S,s()*1e4|0,A*(n?1.2:1)));if(t==="ashoka"){let y=9+s()*4;return r.put(o,ce([0,0,0],[0,y*.9,0],.16,5)),r.put(u,ir(.95,0,y*.55,0,i,3.4)),h(c[2],0,y*.56,0,1.25,y*.42,26,1.9),h(c[3],0,y*.62,0,1,y*.36,10,1.7),r.put(an(),Ye(2.2,2.2,0,0,0)),r}let f=t==="gulmohar",d=t==="amaltas",g=t==="peepal",x=(f?4.4:g?6:4.8)+s()*2.2,p=f?5.4:g?5.2:3.8,m=f?1.7:g?3.6:2.8,_=[(s()-.5)*.9,(s()-.5)*.9],v=x+m*(f?.9:.75);r.put(o,ce([0,0,0],[_[0]*.5,x*.66,_[1]*.5],g?.42:.28,6));for(let y=0;y<(n?0:4);y++){let w=y*1.571+s(),M=p*.55;r.put(o,ce([_[0]*.5,x*.66,_[1]*.5],[_[0]+Math.cos(w)*M,v-m*.25,_[1]+Math.sin(w)*M],.1,4))}if(r.put(u,ir(p*.56,_[0],v,_[1],i,m/p*.9)),h(c[i%4],_[0],v,_[1],p,m,g?44:34,2.9),h(c[(i+2)%4],_[0],v+m*.12,_[1],p*.78,m*.8,14,2.5),f&&h(l(zi([70,104,54],"flame"+a,["#ff7a30","#ff9a3c","#e8402a","#ff5a2a","#d83a22"],120)),_[0],v+m*.5,_[1],p*.95,m*.55,24,2.7),d&&h(l(zi([84,112,56],"gold"+a,["#ffe26a","#f6c33a","#ffd84a"],110)),_[0],v-m*.25,_[1],p*.96,m*.8,24,2.6),e)for(let y=0;y<9;y++){let w=y/9,M=w*12;r.spark(Math.cos(M)*.36+_[0]*.5*w,.5+w*x*.6,Math.sin(M)*.36+_[1]*.5*w,y%3?Tt:Zt,.9,1)}return r.put(an(),Ye(p*1.15,p*1.15,_[0],0,_[1])),r}function Qr(i){let t=new ye,e=we(i),n=Dn({tint:7297604}),r=jf(),s=8+e()*4,o=(e()-.5)*1.6;t.put(n,ce([0,0,0],[o*.4,s*.5,0],.26,6),ce([o*.4,s*.5,0],[o,s,0],.2,6),re(.34,.5,o,s-.2,0,6));for(let a=0;a<13;a++){let l=a/13*6.283+e()*.4,c=3.6+e()*1.5,u=.5+e()*1.3,h=Math.cos(l),f=Math.sin(l),d=[o,s,0],g=[o+h*c*.36,s+u,f*c*.36],x=[o+h*c*.72,s+u*.5,f*c*.72],p=[o+h*c,s-1.2-e()*1.4,f*c];t.put(r,fc(d,g,1.5,0,.36),fc(g,x,1.5,.36,.72),fc(x,p,1.4,.72,1))}return t.put(an(),Ye(3.4,3.4,o,0,0)),t}function jr(i){let t=we(i),e=new ye,n=Dn({tint:[8138554,3100028,12035194,3107413,9080732,11822126,5913194][t()*7|0]}),r=Dn({tint:10119756}),s=Dn({tint:2763830}),o=t()<.4;return e.put(o?n:s,o?Wn(.36,.95,0,0,0,7):[G(.16,.85,.2,-.11,0,0),G(.16,.85,.2,.11,0,0)]),e.put(n,re(.2,.62,0,.85,0,7,null,.24),ce([-.27,1.4,0],[-.31,.86,.06],.065,4),ce([.27,1.4,0],[.31,.86,.06],.065,4)),e.put(r,fe(.14,0,1.63,0,5)),e.put(an(),Ye(.6,.6,0,0,0)),e}function Yh(i){let t=we(i),e=new ye,n=Dn({tint:7031860}),r=Dn({tint:11120054}),s=Dn({tint:3158586}),o=Dn({map:Gs(["#b33a2e","#1f6f6a","#c98a1e","#2e4f9a"][i%4],"#efe6d2",8),key:"awning"+i%4,side:un});e.put(n,G(2.6,.16,1.4,0,.9,0),G(2.6,.5,.06,0,.42,.7));for(let[c,u]of[[-1,.72],[1,.72],[-1,-.72],[1,-.72]])e.put(s,Ot(new Ce(.34,.34,.06,10)).rotateX(Math.PI/2).translate(c,.34,u));for(let[c,u]of[[-1.25,.66],[1.25,.66],[-1.25,-.66],[1.25,-.66]])e.put(s,ce([c,1,u],[c,2.7,u],.03,4));let a=new xn(3.1,1.2);a.rotateX(-Math.PI/2+.28).translate(0,2.78,.42);let l=new xn(3.1,1.2);l.rotateX(-Math.PI/2-.28).translate(0,2.78,-.42),e.put(o,a,l);for(let c=0;c<5;c++)e.put(r,re(.16+t()*.1,.16+t()*.2,-1+c*.5,1.06,(t()-.5)*.7,8));return e.put(r,re(.3,.1,.9,1.06,.2,10)),e.put(te(2.2,1.7,.9),fe(.11,0,2.3,.2,6)),e.light(0,2.3,.2,Zt,1.1,3.4,2.6),e.put(an(),Ye(2.3,1.5,0,0,0)),e.put(dc(1,.66,.34),Ye(3.6,3.6,0,.03,.9)),e}function bx(){let i=new ye,t=Dn({tint:3111498}),e=Dn({tint:14856762}),n=Dn({tint:1842466});i.put(t,G(1.3,.75,2.2,0,.3,0)),i.put(e,G(1.3,.12,2.3,0,1.75,-.05),G(1.2,.7,.08,0,1.05,-1.1)),i.put(n,G(1.22,.7,1.2,0,1.05,-.45),G(.5,.5,.5,0,.5,1.2));for(let[r,s]of[[0,1.35],[-.62,-.75],[.62,-.75]])i.put(n,Ot(new Ce(.26,.26,.14,10)).rotateZ(Math.PI/2).translate(r,.26,s));for(let r of[-.6,.6])i.put(n,ce([r,1.05,.2],[r,1.75,.5],.03,4));return i.put(te(2,1.8,1.3),fe(.09,0,.9,1.46,6)),i.put(an(),Ye(1.3,1.8,0,0,0)),i}function Sx(){let i=new ye,t=yt({map:Gs("#8a6a4c","#73573d",10),key:"planks"}),e=yt({tint:4866104}),n=yt({tint:12166524}),r=new Ue(5.4,.36,21),s=r.attributes.uv,o=r.attributes.position;for(let a=0;a<s.count;a++)s.setXY(a,o.getZ(a)/3.2,o.getX(a)/5.4);i.put(t,r.translate(0,1.22,10.5));for(let a=1.5;a<=20;a+=3.7)for(let l of[-2.5,2.5])i.put(e,re(.22,3.6,l,-1.4,a,6)),a>2&&i.put(n,ce([l,2.1,a-3.7],[l,2.1,a],.035,3));for(let a of[-2.5,2.5])i.put(e,ce([a,1.4,20.2],[a,5.2,20.2],.07,5)),i.put(te(1.9,1.45,.85),fe(.3,a,5.4,20.2,8)),i.light(a,5.4,20.2,Tt,.85,5.6,3.6);return i.put(e,G(1,.8,1,1.4,1.4,3),G(.8,.7,.8,1.6,1.4,4.2),G(.7,.6,.7,1.5,2.2,3.1)),i.put(n,Ot(new on(.45,.12,5,10)).rotateX(Math.PI/2).translate(-1.6,1.52,5)),i}function sd(i,t=[]){let e=new ye,n=we(21),r=i.map(A=>Math.sin(A*$e)<-.3?A+10:A),s=(A,I)=>Math.abs((A-I+540)%360-180),o=A=>t.every(I=>s(A,I)>4.5)&&r.every(I=>s(A,I)>3.3),a=yt({tint:9274488}),l=yt({tint:11774098}),c=yt({tint:5591114,side:un}),u=Dn({tint:3158586}),h=yt({tint:3355708}),f=yt({tint:1848100}),d=yt({tint:10326914,side:un});e.put(a,Xn(Dt+.6,Dt+16,1.7,0,360,240)),e.put(l,Xn(Dt-.6,Dt+.6,1.96,0,360,240),Xn(Dt+15.6,Dt+16.4,1.86,0,360,240)),e.put(c,qh(Dt-.6,-1.2,3.2,0,360,240)),e.put(h,Xn(Dt+16.4,Dt+27,1.6,0,360,240)),e.put(l,Xn(Dt+27,Dt+28,1.78,0,360,240)),e.put(f,Xn(Dt+28,960,1.5,0,360,96));for(let A=0;A<360;A+=2){let I=Ae(A,Dt+.2);e.put(u,G(.13,1.15,.13,I.x,1.96,I.z))}for(let A of[2.55,3.05])e.put(u,Ot(new on(Dt+.2,.045,4,360)).rotateX(Math.PI/2).translate(0,A,0));let g=Dn({tint:4864556});for(let A=0;A<660;A++){let I=A/660*360,P=Ae(I,Dt+14.9);e.put(g,Ot(new Ue(.3,.1,1.5)).rotateY(I*$e).translate(P.x,1.74,P.z))}for(let A of[14.4,15.4])e.put(u,Ot(new on(Dt+A,.05,4,360)).rotateX(Math.PI/2).translate(0,1.84,0));for(let A of[114,66,41,-27,144,180,222,318,250,292])for(let I=0;I<7;I++)e.put(d,Xn(Dt-.6-(I+1)*1.05,Dt-.6-I*1.05,1.7-(I+1)*.32,A-4.2,8.4,240),qh(Dt-.6-(I+1)*1.05,1.7-(I+2)*.32,.32,A-4.2,8.4,240));let x=yx(),p=Mx(),m=A=>Math.atan2(-Math.cos(A*$e),Math.sin(A*$e));for(let A=3;A<360;A+=7.5){let I=Ae(A,Dt+3.2);e.stamp(x,I.x,I.z,m(A)+Math.PI/2,1,1.7);let P=Ae(A+3.75,Dt+2.6);e.stamp(p,P.x,P.z,m(A+3.75),1,1.7)}for(let A=0;A<360;A+=10){let I=Ae(A,Dt+27.6),P=Ae(A,Dt+25.2);e.put(u,ce([I.x,1.7,I.z],[I.x,8.2,I.z],.1,5),ce([I.x,8.2,I.z],[P.x,8.5,P.z],.07,4)),e.put(te(1.5,1.7,1.9),fe(.26,P.x,8.4,P.z,6)),e.light(P.x,8.3,P.z,Kn,.75,8.5,4.4),e.put(dc(.6,.74,1),Ye(7.5,7.5,P.x,1.63,P.z))}let _=[bn(1,"neem"),bn(2,"gulmohar"),bn(3,"neem"),bn(4,"peepal"),bn(5,"amaltas"),bn(6,"ashoka"),bn(7,"ashoka"),bn(8,"peepal")],v=[bn(1,"neem",!1,!0),bn(2,"gulmohar",!1,!0),bn(3,"neem",!1,!0),bn(4,"peepal",!1,!0),bn(5,"amaltas",!1,!0),bn(6,"ashoka",!1,!0),bn(7,"ashoka",!1,!0),bn(8,"peepal",!1,!0)],y=[bn(1,"neem",!0),bn(2,"gulmohar",!0),bn(5,"amaltas",!0)],w=[Qr(1),Qr(2),Qr(3)];for(let A=1.5;A<360;A+=5){if(mc(A)&&n()<.6||!o(A))continue;let I=Ae(A+n()*2,Dt+12.2+n()*1.2),P=n()*3|0;e.stamp(mc(A)||n()<.55?_[[0,1,4][P]]:y[P],I.x,I.z,n()*6.28,mc(A)?.62:.8+n()*.3,1.7)}for(let A=0;A<520;A++){let I=n()*360,P=Dt+32+n()*n()*300,O=Ae(I,P);mc(I)||!qs(O.x,O.z,8)||e.stamp(v[n()*8|0],O.x,O.z,n()*6.28,.9+n()*.7,1.5)}for(let A of[118,110,70,62,45,37,-23,-31,148,140,190,176]){if(!o(A))continue;let I=Ae(A,Dt+8+n()*4);e.stamp(w[n()*3|0],I.x,I.z,n()*6.28,1,1.7)}let M=[0,1,2,3,4,5].map(Yh),E=Array.from({length:14},(A,I)=>jr(I+1)),T=bx(),b=(A,I,P,O)=>{for(let z=0;z<P;z++){let F=A+(n()-.5)*O,W=Ae(F,I+(n()-.5)*5);e.stamp(E[n()*14|0],W.x,W.z,n()*6.28,.92+n()*.2,1.7)}};for(let[A,I,P]of[[212,332,9.5],[-12,34,11],[136,196,12],[50,130,13]])for(let O=A;O<=I;O+=P){let z=Ae(O+n()*2,Dt+11.5);if(e.stamp(M[n()*6|0],z.x,z.z,m(O),1.15,1.7),b(O,Dt+8.6,4+(n()*4|0),3.4),n()<.7){let F=Ae(O+3.5,Dt+18.2);e.stamp(T,F.x,F.z,m(O)+Math.PI/2,1.2,1.6)}}for(let A=0;A<360;A+=3.1)n()<.75&&b(A,Dt+5+n()*6,1+(n()*2|0),2);for(let[A,I]of[[214,330],[-10,32],[140,192]])for(let P=A;P<I;P+=7.5)for(let O=1;O<12;O++){let z=O/12,F=Ae(P+3+z*7.5,Dt+3.2),W=Math.sin(z*Math.PI)*1.1;e.spark(F.x,7.2-W,F.z,[Zt,Zt,Oi,li,Tt][O%5],1.05,1)}let S=Sx();for(let A of i){let I=Ae(A,Dt+.6);e.stamp(S,I.x,I.z,m(A),1,0)}return e}function od(){let i=In("palace",{stone:[186,156,114],course:.5,block:1.25,joint:.72,vary:.12}),t=i.userData.tile,e=yt({tint:12164208}),n={stone:i,trim:e,fine:Mn(12164208),glass:Hi(),wood:Er("palace",[112,66,38]),dark:yt({tint:1511949}),ochre:yt({tint:12556874}),ochref:Mn(12556874),dome:yt({tint:10719610}),roof:yt({tint:7234130}),red:Mn(10246720)},r=te(1.9,1.35,.42),s=new ye,o=new nn,a=we(8),l=we(8),c=2.7,u=5.4,h=5.2,f=5.2,d=c+u,g=d+h,x=g+f,p={kind:"cusped",lobes:7,sharp:.38,cusp:.07},m=(D,C,H)=>Me(D,C/D,H),_={...p,w:1.6,h:3.4,y:.9,frame:.22,outer:"flat",hood:!0,chance:.5},v={kind:"round",w:1.25,h:2.9,y:1,frame:.18,sill:!0,hood:!0,chance:.55},y={kind:"pointed",w:1.1,h:2.5,y:1.1,frame:.16,chance:.45},w={kind:"flat",w:1.3,h:2.6,y:1,chance:.3},M={...p,w:1.55,h:4.4,y:.2,fill:"open"},E={...p,w:1.6,h:3.5,y:.95,fill:"open",rail:.85},T=(D,C,H)=>{for(let Y of C)if(Y.hood){let et=Y.frame||0;D.add("fine",rn(zt(Y.w+et*2+.4,.3,Y.x,-.15),H+Y.y+Y.h+(Y.kind==="round"||Y.outer==="flat"?et:0)+.04,.42,.2,.07))}return D},b=(D,C,H,Y,et,tt,Z=0,bt=.6)=>o.take(T(en(C-D,et,bt,t,tt,Y,a),tt,Y).move((D+C)/2,0,H,Z)),S=D=>o.add("stone",ee([[.6,1.2],[.6,c-.75],[.3,c-.45],[.3,c-.1],[0,c]],D,0,{cap:!0,tile:t})),A=(D,C,H,Y,et,tt,{L:Z=0,R:bt=0,n:St=Math.max(1,Math.round((C-D)/4.4))}={})=>{let kt=C-D,oe=(Oe,Vi,zn)=>Oe?tt.flatMap((ts,vi)=>m(Oe,Vi,{...zn[vi],y:ts+zn[vi].y})):[];b(D,C,H-Y,c,et-c,oe(St,kt,[w,w,w]),Math.PI);let Se=Oe=>Array.isArray(Oe)?Oe:oe(Oe,Y,[_,v,y]);o.take(en(Y,et-c,.6,t,Se(bt),c,a).move(C,0,H-Y/2,Math.PI/2)),o.take(en(Y,et-c,.6,t,Se(Z),c,a).move(D,0,H-Y/2,-Math.PI/2)),o.add("roof",G(kt,.25,Y,(D+C)/2,et-.25,H-Y/2)),S(zt(kt,Y,(D+C)/2,H-Y/2))},I=(D,C,H,Y,et,tt,Z,bt)=>{o.take(en(D,C,H/2,t,Y,et,a).move(tt,0,Z,bt)),o.take(en(D,C,H/2,t,Y.map(St=>({...St,x:-St.x,rail:0,frame:0})),et,a).move(tt-Math.sin(bt)*H,0,Z-Math.cos(bt)*H,bt+Math.PI))},P=(D,C,H,Y,et,tt,Z=2.6)=>{let bt=C-D,St=(D+C)/2,kt=Math.max(1,Math.round(bt/6));o.add("stone",Sr(An(new xn(bt,et).translate(St,Y+et/2,H-Z),t),.62)),o.add("trim",G(bt,.16,Z,St,Y-.14,H-Z/2),Sr(G(bt,.14,Z,St,Y+et-.14,H-Z/2),.7)),m(tt,bt,{}).forEach((oe,Se)=>o.add("glass",qe("round",1.15,3,St+oe.x,Y+.05,H-Z+.04,{on:a()<.75?1:0,style:Se%4})));for(let oe=0;oe<kt;oe++)s.light(D+(oe+.5)*bt/kt,Y+et-.9,H-Z/2,Zt,.3,3.4)},O=(D,C,H,Y,et=1)=>{o.add("trim",rn(zt(C-D,.4,(D+C)/2,H-.2),Y,et,.34,.11)),o.add("fine",_i([D,H],[C,H],1.1,()=>Ke(et*.76,.6,.16,Y+.3),{inset:.3}))},z=(D,C,H,Y,et=.24,tt=.3)=>o.add("trim",G(C-D+et*2,tt,et*2,(D+C)/2,Y-tt/2,H)),F=(D,C)=>{o.add("ochre",ee([[0,0],[0,.75],[-.3,.75],[-.3,0]],D,C)),o.add("ochref",Be(D,.85,()=>Ot(new Nn(.34,.62,4)).scale(1,1,.45).translate(0,C+1.06,-.15),{inset:.45}))},W=(D,C)=>o.add("fine",Kr(D,C,{h:.9,step:.42})),q=(D,C,H,Y,et,tt=8)=>dn([[D,0],[D*1.08,C*.2],[D*.98,C*.45],[D*.7,C*.68],[D*.3,C*.86],[D*.09,C*.96],[D*.04,C*1.3]],{seg:tt}).translate(H,Y,et),K=(D,C,H,Y,et)=>{for(let[tt,Z]of[[-1,-1],[1,-1],[-1,1],[1,1]])o.add("fine",G(D*.13,C,D*.13,H+tt*D*.4,Y,et+Z*D*.4));o.add("fine",G(D,D*.1,D,H,Y+C,et),rn(zt(D,D,H,et),Y+C+D*.1,D*.26,D*.13,D*.05),q(D*.46,D*.6,H,Y+C+D*.23,et))},rt=(D,C,H,Y,et)=>{for(let[tt,Z]of[[-1,-1],[1,-1],[-1,1],[1,1]])o.add("fine",re(D*.075,C,H+tt*D*.4,Y,et+Z*D*.4,6),G(D*.2,D*.07,D*.2,H+tt*D*.4,Y+C-D*.07,et+Z*D*.4));o.add("trim",G(D,D*.09,D,H,Y+C,et),rn(zt(D,D,H,et),Y+C+D*.09,D*.3,D*.13,D*.045),q(D*.47,D*.62,H,Y+C+D*.22,et,12)),s.put(r,fe(D*.075,H,Y+C+D*.22+D*.62*1.3,et,6))},vt=(D,C,H,Y,et,tt=16,Z=.1,bt=.07)=>{let St=[];for(let kt=0;kt<=12;kt++){let oe=kt/12;St.push(new xt(Math.max(.001,D*Math.sqrt(1-Math.pow(oe,1.75))*(.93+Z*2.6*Math.sin(Math.PI*Math.min(1,oe*1.5))*(1-oe))),C*oe))}return td(St,tt,bt).translate(H,Y,et)},Gt=(D,C,H,Y,et,tt=16,Z=D*.3)=>{let bt=Y+D*.3;return o.add("trim",dn([[D,0],[D*1.1,D*.12],[D*1.1,D*.2],[D*.98,D*.3]],{seg:tt*2}).translate(H,Y,et)),o.add("fine",nd(D*.98,Math.min(tt,24),D*.24,H,Y+D*.26,et)),o.add("dome",vt(D,C,H,bt,et,tt,.1,tt>20?.045:.06),dn([[D*.2,0],[D*.27,D*.05],[D*.1,D*.14]],{seg:10}).translate(H,bt+C*.985,et)),s.put(r,Ze(Z,H,bt+C+D*.1,et)),bt+C+D*.1+Z*2.6},ie=(D,C,H,Y,et,tt=null,Z=.5)=>{let bt=2*H*Math.tan(Math.PI/8);for(let St=0;St<8;St++){let kt=St*Math.PI/4;o.take(en(bt,et,Z,t,tt?tt(St,bt):[],Y,a).move(D+Math.sin(kt)*H,0,C+Math.cos(kt)*H,kt))}},de=(D,C,H,Y,et)=>o.add("stone",ee([[0,0],[0,et]],Ge(H,8,D,C),Y,{tile:t})),_e=(D,C,H,Y,et)=>{de(D,C,H,Y,et-Y);for(let tt of[Y+(et-Y)*.36,Y+(et-Y)*.7,et-.2])o.add("trim",he(Ge(H,8,D,C),tt,.26,.36));for(let tt=0;tt<8;tt++){let Z=(tt+.5)*Math.PI/4;o.add("fine",G(.17,1.9,.17,D+Math.cos(Z)*H*.84,et+.16,C+Math.sin(Z)*H*.84))}o.add("dark",re(H*.5,1.9,D,et+.16,C,6)),o.add("trim",rn(Ge(H*.96,8,D,C),et+2.06,.45,.2,.08),q(H*.98,H*1.2,D,et+2.3,C,10)),s.put(r,fe(.2,D,et+2.3+H*1.56,C,6))},it=(D,C,H,Y,et=9)=>{let tt=[];for(let kt=0;kt<=7;kt++){let oe=kt/7*Math.PI/2;tt.push(new xt(Math.max(.01,Math.cos(oe)*D),Math.sin(oe)*D))}let Z=new si(tt,et*2,Math.PI/2,Math.PI),bt=Z.attributes.position;for(let kt=0;kt<bt.count;kt++)(kt/8|0)%2&&(bt.setX(kt,bt.getX(kt)*.94),bt.setZ(kt,bt.getZ(kt)*.94));let St=Z.toNonIndexed();return St.computeVertexNormals(),Ot(St).translate(C,H,Y)},mt=(D,C,H,Y,et,tt=.8)=>{let Z=(Y-et.w)/2,bt=et.h+Z,St=Y/2,kt=H+bt-St,oe=p;o.add("stone",An(cn("cusped",et.w,et.h,D,H,C-tt,{...oe,band:Z,proud:tt,outer:"round"}),t)),o.add("trim",cn("round",Y,bt,D,H,C,{band:.5,proud:.34}),cn("cusped",et.w,et.h,D,H,C,{...oe,band:.32,proud:.2})),o.add("fine",cn("round",Y-1.7,bt-.85,D,H,C,{band:.26,proud:.14}),jn([D-et.w/2,C-.2],[D+et.w/2,C-.2],H,{h:.9}));for(let Se=0;Se<7;Se++){let Oe=(.14+Se*.12)*Math.PI;o.add("red",Ot(new Ce(.3,.3,.12,8)).rotateX(Math.PI/2).translate(D+Math.cos(Oe)*(St-.45),kt+Math.sin(Oe)*(St-.45),C+.06))}o.add("glass",qe("cusped",et.w,et.h,D,H,C-tt+.12,{...oe,on:1,style:2})),o.add("dome",it(St+.75,D,kt,C-tt+.02)),o.add("trim",G(Y+1.7,.3,St+1,D,kt-.3,C-tt-(St+1)/2+.1));for(let Se=1;Se<12;Se++){let Oe=Se/12*Math.PI;o.add("fine",Ot(new Nn(.12,1.1,4)).translate(D+Math.cos(Oe)*(St+.8),kt+Math.sin(Oe)*(St+.8)+.5,C-tt-.2))}return s.put(r,Ze(.36,D,kt+St+.75,C-tt-.3)),kt};{let H=[{...p,x:0,y:.1,w:4.4,h:6.2,fill:"open"}],Y=zt(8,6,-71,0);I(8,7.8,.8,H,1.2,-71,3,0),I(8,7.8,.8,H,1.2,-71,-3,Math.PI);for(let et of[-1,1])o.add("stone",An(G(.8,7.8,6,-71+et*3.6,1.2,0),t));o.add("trim",Sr(G(8,.4,6,-71,9,0),.8),he(Y,8.9,.35,.5),re(2.6,.6,-71,9.4,0,12)),F(Y,9.4),Gt(2.3,2.9,-71,10,0,12,.5);for(let et of[-1,1])_e(-71+et*4.3,3+.3,.75,1.2,9.6);o.add("roof",G(4.6,.08,14,-71,1.2,0)),s.light(-71,6,0,Zt,.4,5)}A(-67,-29.5,0,24,g,[0,u],{L:5});for(let[D,C,H]of[[-67,-61.7,2],[-54.3,-51,1],[-41,-36.7,1]])b(D,C,0,c,u,m(H,C-D,_)),b(D,C,0,d,h,m(H,C-D,{...v,rail:.8}));z(-67,-29.5,0,d);{let D=zt(37.5,24,-48.25,-12);o.add("trim",he(D,g-.5,.36,.5)),o.add("fine",_i([-67,0],[-29.5,0],1.1,()=>Ke(.42,.5,.16,g-.5),{inset:.3})),F(D,g)}for(let D of[-64.3,-52.6,-38.9])K(1.5,2,D,g,-1.4);let Lt=(D,C,H,Y,et,tt)=>{let Z=H-C/2,bt=zt(C,C,D,Z),St=m(tt?3:2,C-1.6,{kind:"pointed",w:1.15,h:2.7,y:g+1.9-c,frame:.15,rail:.8,chance:.75});o.take(sn(C,C,Y-c,.6,t,{left:St,right:St,back:St,front:[tt?{...p,x:0,y:.05,w:2.6,h:4.3,fill:"door",frame:.3,outer:"flat"}:{..._,x:0,w:2,h:3.7},{...p,x:0,y:u+1.1,w:tt?3:2.2,h:3.5,frame:.45,outer:"flat",proud:.14,rail:.85,chance:.95},...St]},c,a).move(D,0,H)),S(bt);for(let Se of[d,g])o.add("trim",he(bt,Se-.2,.22,.34));o.add("trim",he(bt,Y-.6,.4,.55),rn(bt,Y-.1,1.1,.4,.12)),o.add("fine",Be(bt,1.15,()=>Ke(.82,.6,.16,Y+.22),{inset:.4})),o.add("roof",G(C,.3,C,D,Y+.15,Z)),W(zt(C-.3,C-.3,D,Z),Y+.45);for(let Se of[-1,1])for(let Oe of[-1,1])K(tt?1.7:1.35,tt?1.9:1.6,D+Se*(C/2-.95),Y+.45,Z+Oe*(C/2-.95));let kt=et*.92,oe=et*.78;return ie(D,Z,kt,Y+.45,oe,(Se,Oe)=>[{kind:"pointed",x:0,y:.35,w:Oe*.42,h:oe*.6,chance:.6,depth:.4}]),o.add("trim",he(Ge(kt/Math.cos(Math.PI/8),8,D,Z),Y+.45+oe,.3,.4)),Gt(et,et*(tt?1.3:1.42),D,Y+.85+oe,Z,tt?20:16,et*(tt?.3:.34))};Lt(-58,7.4,1.6,19.8,3.2,!1),Lt(-46,10,2.2,20.4,4.5,!0),Lt(-33,7.4,1.6,19.8,3.2,!1),o.take(Ci(4.2,4.1,1.2,-46,d+.95,{roof:"dome"}).move(0,0,2.2));for(let D=0;D<3;D++)o.add("trim",G(4.6-D*.4,c-1.2-D*.5,.5,-46,1.2,2.8+(D+.5)*.5));A(-29.5,-4.5,0,22,x,[0,u,u+h],{L:m(4,19,{...y,y:u+h+1.1})}),b(-29.3,-23.8,0,c,u,m(2,5.5,_)),b(-29.3,-23.8,0,d,h,m(2,5.5,{...v,rail:.8})),b(-29.3,-23.8,0,g,f,m(2,5.5,y)),z(-29.3,-23.8,0,d),z(-29.3,-23.8,0,g),O(-29.3,-23.8,0,x-.45);let Ct=(D,C,H,Y)=>{let et=C-D;b(D,C,H,c,u,m(Y,et,M)),b(D,C,H,d,h,m(Y,et,{...v,w:1.15,frame:.3,outer:"flat",sill:!1})),b(D,C,H,g,f,m(Y,et,E)),P(D,C,H,c,u,Y),P(D,C,H,g,f,Y);for(let tt=0;tt<=Y;tt++){let Z=D+tt*et/Y;o.add("trim",G(.36,x-c,.24,Z,c,H+.1)),o.add("fine",gn(.15,3.2,Z,c,H+.36,{sides:6}),gn(.14,2.7,Z,g+.95,H+.34,{sides:6}),G(.5,.95,.3,Z,g,H+.3))}for(let tt=0;tt<2;tt++)o.add("trim",G(et-.6,(c-1.2)*(2-tt)/3,.5,(D+C)/2,1.2,H+.85+tt*.5));z(D,C,H,d),O(D,C,H,g-.42,.8),O(D,C,H,x-.45,1.1)};Ct(-15.2,-4.5,0,5),F(zt(25,22,-17,-11),x);for(let D of[-27.5,-11.5,-6.5])K(1.5,2,D,x,-1.4);let N=-19.5,V=-2.5,ht={kind:"round",x:0,w:1,h:2.3,frame:.16,sill:!0,chance:.5},B=(D,C,H,Y,et=Y)=>{o.take(sn(D,D,H-C,.7,t,{front:et,back:Y,left:Y,right:Y},C,a).move(N,0,V+D/2));for(let tt of[-1,1])for(let Z of[-1,1])o.add("trim",G(.7,H-C,.7,N+tt*(D/2-.12),C,V+Z*(D/2-.12)))},nt=(D,C)=>{let H=zt(D,D,N,V);o.add("trim",he(H,C-.95,.4,.55),G(D+2.3,.3,D+2.3,N,C,V)),o.add("fine",Be(H,.95,()=>Ke(1,.8,.2,C),{inset:.3}),Kr(zt(D+2,D+2,N,V),C+.3,{h:.95,step:.4}))},st=(D,C)=>{for(let H=0;H<4;H++)o.take(C().move(N+Math.sin(H*Math.PI/2)*D/2,0,V+Math.cos(H*Math.PI/2)*D/2,H*Math.PI/2))};B(8.6,1.2,28,[{...ht,y:19.6},{...ht,y:23.2}],[{...p,x:0,y:c-1.15,w:2.4,h:4.4,fill:"door",frame:.3,outer:"flat"},{...v,x:0,y:d-.2,w:1.6,h:3.2,rail:.8},{...v,x:0,y:g-.2,w:1.6,h:3.2,rail:.8},{...ht,y:19.6},{...ht,y:23.2}]),S(zt(8.6,8.6,N,V));for(let D=0;D<3;D++)o.add("trim",G(4-D*.4,c-1.2-D*.5,.5,N,1.2,V+4.9+(D+.5)*.5));for(let D of[d,g,x+.9,23.2])o.add("trim",he(zt(8.6,8.6,N,V),D-.15,.2,.3));nt(8.6,28),B(7.8,28.3,36,[{kind:"round",x:0,y:1.9,w:2.5,h:4,frame:.3,on:1,style:0}]),st(7.8,()=>new nn().add("trim",G(3.7,.22,1,0,30,.5)).add("fine",jn([-1.8,.92],[1.8,.92],30.2,{h:.9}),[-1.3,0,1.3].map(D=>Ke(.85,.7,.2,30).translate(D,0,0)))),nt(7.8,36),B(7.2,36.3,41,[{kind:"flat",x:0,y:.8,w:1.7,h:2.4,on:1,style:1}]),st(7.2,()=>Ci(2.6,2.5,.9,0,37,{roof:"slope",drop:.8})),nt(7.2,41),B(6.6,41.3,45.4,m(3,5.4,{kind:"pointed",w:.85,h:2.2,y:.9,frame:.14,chance:.6})),nt(6.6,45.4);for(let[D,C]of[[-1,-1],[1,-1],[-1,1],[1,1]]){let H=N+D*3.7,Y=V+C*3.7;de(H,Y,.75,45.7,3.2),o.add("trim",he(Ge(.75,8,H,Y),48.7,.25,.3),q(.85,1.3,H,49,Y,10)),s.put(r,fe(.17,H,50.75,Y,6))}{let D=Ge(3.05,8,N,V);for(let[H,Y]of Ge(2.72,8,N,V))o.add("trim",gn(.3,4.3,H,45.7,Y,{sides:6}));o.add("trim",ee([[0,0],[0,.9],[-.55,.9],[-.55,0]],D,50),G(5.2,.12,5.2,N,50,V),rn(D,50.9,.9,.3,.1),ee([[0,0],[0,.35]],D,51.2,{cap:!0}));let C=Gt(2.9,4.1,N,51.55,V,16,.78);o.add("fine",ce([N,C-.2,V],[N,C+4,V],.07)),s.put(te(1.6,.5,.2),G(2.6,1.5,.05,N+1.35,C+2.3,V))}let lt=-4.5,ft=29.5,_t=5,dt=6.2,Mt=c+dt,Qt=Mt+dt,Xt=Qt+dt,U=12.5,R=6.6,$=28.6,ot=R-10.5;A(lt,ft,_t,34,Xt,[0,dt,dt*2],{n:8,L:[0,dt,dt*2].map(D=>({...v,x:14.5,y:D+1.4,w:1.2})),R:[0,dt,dt*2].map(D=>({...v,x:-14.5,y:D+1.4,w:1.2}))});for(let[D,C]of[[lt,6],[19,ft]]){let H=(D+C)/2;b(D,C,_t,c,dt,[{...p,x:0,y:.7,w:3,h:4.6,frame:.4,outer:"flat",proud:.14,chance:.9},...[-3,3].map(et=>({..._,x:et,w:1.1,h:2.8,y:1.4,frame:.16}))]),b(D,C,_t,Mt,dt,[{kind:"flat",x:0,y:1.3,w:2,h:3.2,on:1,style:1},...[-3.1,3.1].map(et=>({...v,x:et,w:1,h:2.6,y:1.5}))]),o.take(Ci(3.6,4,1.25,H,Mt+1.2,{roof:"dome"}).move(0,0,_t)),b(D,C,_t,Qt,dt,m(3,6.6,{...p,w:1.3,h:3.4,y:1.2,frame:.2,rail:.85,chance:.85})),z(D,C,_t,Mt),z(D,C,_t,Qt),O(D,C,_t,Xt-.45,1.1);for(let et of[-4.6,-1.9,1.9,4.6])o.add("trim",G(.4,Xt-c-.5,.26,H+et,c,_t+.12));let Y=mt(H,_t-.1,Xt+.5,8,{w:2.6,h:3.6});o.add("stone",ee([[0,0],[0,Y-Xt-.5]],zt(8,4.2,H,_t-3),Xt+.5,{tile:t,cap:!0}))}W(zt(34,34,U,_t-17),Xt);for(let D of[lt-.3,ft+.3])_e(D,_t+.3,1.25,1.2,23.4);{let H=Xt-c,Y=zt(13,21,U,ot),et=m(3,15,{kind:"pointed",w:1.3,h:3.2,y:H+1.6,frame:.2,chance:.75});o.take(sn(13,21,$-c,.7,t,{left:et,right:et,back:et,front:[{...p,x:0,y:.05,w:3.2,h:4.5,fill:"door"},...[-4.3,4.3].map(St=>({..._,x:St,w:1.2,h:3,y:1,on:1})),...m(3,9.9,{...p,w:2.1,h:4.3,y:dt+1.1,frame:.3,on:1}),...m(3,9.9,{...p,w:1.5,h:3.2,y:dt*2+1.5,frame:.22,chance:.9}),{...p,lobes:9,x:0,y:H+.7,w:4.4,h:5,frame:.5,proud:.2,on:1,style:2},...[-4.6,4.6].map(St=>({kind:"pointed",x:St,y:H+1.9,w:1,h:2.6,frame:.15,chance:.8}))]},c,a).move(U,0,R));for(let St of[Mt,Qt,Xt])o.add("trim",he(Y,St-.2,.24,.36));o.add("trim",he(Y,$-.65,.45,.6),rn(Y,$-.05,1.2,.4,.12)),o.add("fine",Be(Y,1.2,()=>Ke(.9,.65,.18,$+.28),{inset:.4})),o.add("roof",G(13,.3,21,U,$+.1,ot)),W(zt(13-.3,21-.3,U,ot),$+.4),o.add("trim",G(11.4,.24,1.1,U,Qt+1.26,R+.55)),o.add("fine",_i([U-5.4,R],[U+5.4,R],1.2,()=>Ke(.9,.7,.18,Qt+1.26)),jn([U-5.6,R+1.02],[U+5.6,R+1.02],Qt+1.5,{h:.9}));for(let St of[-1,1]){de(U+St*6.5,R,.6,c,$-c+.4);for(let kt of[R-1.3,ot-9.2])rt(2.5,2.7,U+St*5.2,$+.4,kt)}ie(U,ot,5.5,$+.4,4.4,(St,kt)=>[{...p,x:0,y:.7,w:kt*.42,h:3,frame:.2,on:St%2?void 0:1,chance:.5,depth:.45}],.6);for(let[St,kt]of Ge(6.2,8,U,ot))o.add("fine",G(.42,4.9,.42,St,$+.4,kt),q(.42,.7,St,$+5.3,kt,6));o.add("trim",he(Ge(5.95,8,U,ot),$+4.8,.5,.6)),Gt(6.2,8,U,$+5.4,ot,32,1.2);let tt=R+5.6,Z=5.4,bt=zt(12,5.6,U,tt-2.8);I(12,Z,.7,m(3,10.2,{...p,w:2.5,h:4.3,y:.12,fill:"open"}),c,U,tt,0);for(let St of[-1,1])I(5.6,Z,.7,[{...p,x:0,y:.12,w:2.8,h:4.3,fill:"open"}],c,U+St*6,tt-2.8,St*Math.PI/2);S(bt),o.add("trim",Sr(G(12,.3,5.6,U,c+Z,tt-2.8),.8),he(bt,c+Z-.3,.4,.6)),W(bt,c+Z+.3);for(let St of[-1,1]){K(1.2,1.4,U+St*5.3,c+Z+.3,tt-.7);for(let kt of[1.7,5.2])o.add("fine",gn(.17,3.2,U+St*kt,c,tt+.24,{sides:6}))}for(let St=0;St<4;St++)o.add("trim",G(9.6-St*.4,c-(St+1)*.25-1.2,.45,U,1.2,tt+.6+(St+.5)*.45));s.light(U,6.4,tt-2.8,Zt,.45,5)}A(ft,42,0,22,x,[0,u,u+h]),Ct(ft,42,0,5),F(zt(12.5,22,35.75,-11),x),K(1.5,2,35.75,x,-1.4);let gt=2,pt=c+5.6,Jt=pt+5.6,Rt=Jt+5,jt=[47.6,58.5,69.4];A(42,75,gt,26,Rt,[0,5.6,11.2],{R:5,n:8}),b(42,75,gt,c,5.6,jt.flatMap(D=>[{...p,x:D-58.5,y:.5,w:2.6,h:4.3,frame:.35,outer:"flat",chance:.9},...[-2.9,2.9].map(C=>({kind:"flat",x:D-58.5+C,y:1.3,w:.9,h:2.5,frame:.14}))])),b(42,75,gt,pt,5.6,jt.flatMap(D=>m(3,4.5,{...p,w:1.05,h:3.1,y:1.3,on:1}).map(C=>({...C,x:C.x+D-58.5})))),b(42,75,gt,Jt,5,[]),z(42,75,gt,pt),z(42,75,gt,Jt);{let D=zt(33,26,58.5,gt-13);o.add("trim",he(D,Rt-.5,.36,.5)),W(D,Rt)}jt.forEach((D,C)=>{o.take(Ci(5.6,4.2,1.5,D,pt+1.1,{roof:"crest",drop:1.1}).move(0,0,gt));for(let H of[-.95,.95])o.add("trim",gn(.13,3.3,D+H,pt+2.02,gt+1.3,{sides:6}));mt(D,gt+.9,Jt+(C===1?1.2:.4),8.2,{w:3,h:C===1?5.6:4.4})});for(let D of[42.7,53.05,63.95,74.3])_e(D,gt+.5,1.25,1.2,21.8);_e(74.3,gt-25.5,1.25,1.2,21.8),o.add("fine",_i([42,gt],[75,gt],1.1,()=>Ke(.42,.5,.16,Rt-.5),{inset:.3}));for(let D of jt)for(let C of[-3.9,3.9])o.add("trim",G(.4,Jt-c,.26,D+C,c,gt+.12));o.into(s,n);let Wt=yt({tint:2906682}),wt=yt({tint:12035980}),Ut=yt({tint:2050604}),Ft=yt({tint:7297604}),ne=te(.35,.6,.9),Pt=yt({tint:3355965});s.put(Wt,Ri(160,.3,30,0,1.36,24)),s.put(wt,Ri(7,.34,30,12.5,1.36,24),Ri(150,.34,3.4,0,1.36,11.4));for(let D=17;D<=37;D+=5)for(let C of[-4.3,4.3])s.put(Pt,G(.16,.9,.16,12.5+C,1.7,D)),s.put(te(1.8,1.4,.8),fe(.16,12.5+C,2.7,D,6)),s.light(12.5+C,2.7,D,Tt,.5,3.2,1.4);for(let D of[-32,52]){s.put(wt,re(5.2,.7,D,1.6,24,16),re(1.1,1.3,D,2.3,24,10)),s.put(ne,Ex(new Cn(4.7,20)).rotateX(-Math.PI/2).translate(D,2.32,24)),s.light(D,3.2,24,Kn,.8,5);for(let C=0;C<14;C++)s.spark(D+(l()-.5)*1.4,3.6+l()*3.6,24+(l()-.5)*1.4,Kn,.9,1)}{let D=[Qr(4),Qr(5),Qr(6)],C=0;for(let H=-70;H<=70;H+=14)if(Math.abs(H-12.5)>8){let Y=17+(Math.abs(H)%28?0:3);s.stamp(D[C++%3],H,Y,C*1.3,1,1.6)}}for(let D=-76;D<=76;D+=4)Math.abs(D-12.5)>5&&s.put(Ut,G(3.6,1.3,1.5,D,1.6,38.2));for(let D of[-5.2,5.2])s.put(e,G(1.8,5.4,1.8,12.5+D,1.5,38.4),G(2.3,.4,2.3,12.5+D,6.9,38.4),yn(.9,1.1,12.5+D,7.3,38.4,{seg:8})),s.put(te(1.8,1.4,.8),fe(.34,12.5+D,6.3,39.5,8)),s.light(12.5+D,6.3,39.8,Tt,.8,5,2.4);for(let D=-72;D<=72;D+=8)s.light(D,2.2,17,Tt,.22,13);s.light(N,26,14,Tt,.26,12).light(N,40,11,Tt,.24,10).light(N,52,9,Tt,.2,8).light(N-13,36,V,Tt,.14,11).light(N+13,36,V,Tt,.14,11).light(N,38,V-13,Tt,.12,11),s.light(12.5,30,18,Tt,.3,13).light(12.5,42,12,Tt,.22,11).light(-4,40,-4,Tt,.14,11).light(29,40,-4,Tt,.14,11).light(12.5,40,-22,Tt,.12,11),s.light(-46,24,13,Tt,.2,9).light(-58,23,12,Tt,.16,8).light(-33,23,12,Tt,.16,8).light(58.5,22,15,Tt,.2,10).light(47.6,21,14,Tt,.14,8).light(69.4,21,14,Tt,.14,8);for(let D of[-4,-16])s.light(86,2.2,D,Tt,.16,12).light(-80,2.2,D-4,Tt,.14,12);for(let D=-64;D<=64;D+=16)s.light(D,2.2,-44,Tt,.1,13);return s}var Ex=i=>{let t=i.attributes.uv;for(let e=0;e<t.count;e++)t.setXY(e,.004,.004);return i};var wx=()=>te(1.9,1.35,.42),Tx=()=>te(1.8,1.4,.8);function ad(){let i=In("kirti",{stone:[178,168,146],course:.5,block:1.3,joint:.72,vary:.12}),t=i.userData.tile,e=yt({tint:12168854}),n=Mn(12168854),r={stone:i,trim:e,fine:n,glass:Hi(),wood:Er(),jali:wr("teak",[124,78,46],.3),red:wr("red",[170,80,58],.36,!0),dark:yt({tint:1840658}),gold:wx()},s=new ye,o=we(36),a=new nn,l=33,c=24,u=2,h=15.6,f=u+h,d=f+.9,g=zt(l,c,0,-c/2);a.add("stone",ee([[.9,0],[.9,.5],[.5,.85],[.5,1.5],[.2,1.8],[.2,u],[0,u]],g,0,{cap:!0,tile:t})),a.add("trim",G(10.4,u,1.5,0,0,1.65));for(let P=1;P<=7;P++)a.add("trim",G(8.6,u-P*.25,.5,0,0,2.4+(P-.5)*.5));for(let P of[-1,1]){a.add("stone",An(G(.9,u+.9,1.5,P*4.75,0,1.65),t),An(G(.9,1.5,3.6,P*4.75,0,4.2),t)),a.add("trim",G(1.1,.2,1.7,P*4.75,u+.9,1.65),G(1.1,.2,3.8,P*4.75,1.5,4.2));for(let[O,z]of[[2.2,u+1.1],[5.7,1.7]])a.add("fine",gn(.14,1.9,P*4.75,z,O,{sides:6})),s.put(Tx(),fe(.3,P*4.75,z+2.15,O,8)),s.light(P*4.75,z+2.2,O,Tt,.25,4,2.2)}let x={w:1.9,kind:"flat",frame:.2,sill:!0},p={w:3.3,kind:"cusped",sharp:.35,frame:.3,outer:"flat",depth:.8},m=[...Me(3,7.4,{...p,y:.9,h:5.6,fill:"glass",chance:.3}),...Me(3,7.4,{...p,y:8.5,h:5.4,fill:"glass",chance:.6})];a.take(sn(l,c,h,.9,t,{front:[{x:0,y:0,w:6.4,h:13,kind:"cusped",sharp:.32,lobes:9,cusp:.06,fill:"jali",cell:2.2,depth:.86},...[-11.6,11.6].flatMap(P=>[{...x,x:P,y:2.5,h:3.9},{...x,x:P,y:9.4,h:3.8}])],left:m,right:m,back:[...Me(5,6,{...x,y:2.2,h:3.6}),...Me(5,6,{...x,y:9.2,h:3.6})]},u,o));for(let P of[-1,1])for(let O of[-7.4,0,7.4]){let z=qe("flat",3.3,1.15,0,0,0,{uv:.9,shade:1}).rotateY(P*Math.PI/2).translate(P*(l/2-.2),u+8.5,-c/2+O);a.add("red",z)}a.add("wood",qe("flat",4.2,7.1,0,u,-.5,{uv:"whole",shade:.85})),a.add("trim",G(6.6,.55,.3,0,u+7.1,-.62),G(.26,7.1,.3,-2.23,u,-.62),G(.26,7.1,.3,2.23,u,-.62));for(let P of[-1,1])a.add("red",qe("flat",.84,7.1,P*2.78,u,-.52,{uv:.8,shade:.9}));a.add("trim",cn("cusped",6.4,13,0,u,0,{band:1.65,proud:.16,outer:"flat",sharp:.32,lobes:9,cusp:.06}),cn("flat",9.2,14.2,0,u,.16,{band:.28,proud:.12}),cn("flat",6.9,13.4,0,u,.16,{band:.16,proud:.08}));for(let P of[-1,1])a.add("fine",Ot(new Ce(.42,.42,.14,12)).rotateX(Math.PI/2).translate(P*2.9,u+13.5,.2),gn(.2,6.6,P*3.6,u,.4,{sides:8}));for(let P of[-11.6,11.6])a.take(Ci(3.4,4.2,1.3,P,u+9.3,{roof:"crest"})),a.take(Ci(3,4.2,1.1,P,u+2.4,{roof:"none",drop:1.3}));a.add("trim",he(g,u+7.5,.22,.34),he(g,f-1,.3,.4),rn(g,f-.2,1.9,.75,.16),ee([[0,0],[.35,0],[.35,.35],[0,.35]],g,f+.55)),a.add("fine",Be(g,1.42,()=>Ke(1.25,.95,.2,f+.3),{inset:.3}),Be(g,.5,()=>G(.2,.2,.16,0,f-1.22,.14),{inset:.4})),a.add("trim",G(l,.3,c,0,d-.3,-c/2)),a.add("fine",jn([-7,-.25],[7,-.25],d,{h:1.25,step:.5,r:.11}),jn([-7,-c+.25],[7,-c+.25],d,{h:1.25,step:.5,r:.11}));for(let P of[-1,1])a.add("fine",jn([P*(l/2-.25),-9.6],[P*(l/2-.25),-14.4],d,{h:1.25,step:.5,r:.11}));for(let P of[-1,1])for(let O of[-1,1]){let z=P*11.7,F=O>0?-4.8:-c+4.8,W=zt(9.4,9.4,z,F),q=d+1.9,K=q+.3+3.9;a.add("stone",ee([[0,0],[0,1.9]],W,d,{cap:!0,tile:t})),a.add("trim",he(W,q,.22,.3),ee([[0,0],[0,.55],[-.3,.55]],zt(8.6,8.6,z,F),K),G(8.6,.12,8.6,z,K+.43,F),rn(zt(8.8,8.8,z,F),K+.55,1.75,.6,.15));for(let[rt,vt]of[[1,1],[.62,1],[1,.62]])for(let Gt of[-1,1])for(let ie of[-1,1])a.add(rt===1&&vt===1?"trim":"fine",gn(.3,3.9,z+Gt*rt*3.95,q+.3,F+ie*vt*3.95,{sides:8}));a.add("fine",Be(zt(8.8,8.8,z,F),1.3,()=>Ke(1.1,.7,.16,K+.95),{inset:.5})),a.add("trim",ee([[0,0],[0,.5],[-.5,.75]],Ge(4.9,8,z,F),K+1.3,{cap:!0}),dn([[4,0],[3.9,.5],[3.5,1.1],[2.7,1.8],[1.6,2.4],[.7,2.75],[.3,2.9],[.001,3]],{seg:16}).translate(z,K+2.05,F),Ze(.62,z,K+4.95,F));for(let rt of[-1,1])for(let vt of[-1,1])a.add("fine",yn(.72,.9,z+rt*3.7,K+1.3,F+vt*3.7,{seg:8,finial:.5}));s.put(r.dark,G(8.2,.05,8.2,z,q+.3,F)),s.light(z,q+2.4,F,Zt,.4,5)}let _=-c/2,v={x:0,y:.7,w:2.8,h:3.7,kind:"round",frame:.26,fill:"glass",on:1,style:1},y=d+5.3;a.take(sn(13,13,5.3,.7,t,{front:[v],back:[v],left:[v],right:[v]},d,o).move(0,0,_+6.5));for(let[P,O]of[[0,1],[0,-1],[1,0],[-1,0]])for(let z of[-1,1])a.add("fine",gn(.24,4.6,P*6.6+(P?0:z*2.2),d,_+O*6.6+(O?0:z*2.2),{sides:6}));a.add("trim",rn(zt(13,13,0,_),y-.15,1.1,.4,.14),ee([[0,0],[.5,0],[.5,.3],[.2,.5],[.2,.9],[-.2,.9]],zt(13,13,0,_),y+.35,{cap:!0}));let w=13.6,M=P=>1.75+4.75*(1-Math.pow(P,1.8)),E=id(4),T=y+1.25,b=[];for(let P=0;P<=22;P++)b.push([M(P/22),w*P/22]);a.add("stone",dn(b,{seg:40,section:E,tile:{u:t.u,v:t.v}}).translate(0,T,_));let S=(P,O)=>Math.pow(Math.max(0,Math.pow(M(O),4)-Math.pow(P,4)),.25),A=()=>Ot(new Hr(.3)).scale(1,.72,1);for(let P=0;P<4;P++){let O=new nn;for(let[z,F]of[[5.2,.97],[3.5,.7],[1.9,.44]]){let W=Math.round(F*34);for(let q=0;q<=W;q++){let K=F*q/W,rt=z*(1-Math.pow(K/F,1.7))*M(K)/M(0);for(let vt of q===W?[1]:[-1,1])O.add("fine",A().translate(vt*rt,K*w,S(rt,K)+.12))}F<.9&&O.add("fine",Ze(.3,0,F*w-.1,S(0,F)+.2),G(1.5,.16,.5,0,F*w-.3,S(0,F)+.1))}O.take(Ci(1.9,2.5,.8,0,1.3,{roof:"dome",drop:.7,r:.1}).move(0,0,S(0,.08)-.05)),O.add("dark",qe("flat",1.2,2.2,0,1.4,S(0,.1)+.03,{uv:"plain"})),a.take(O.move(0,T,_,P*Math.PI/2))}let I=T+w;a.add("trim",dn([[1.75,0],[2.2,.12],[2.35,.4],[2.2,.7],[1.5,.82],[1.2,1],[1.5,1.2],[1.35,1.45],[.5,1.6],[.36,2]],{seg:24,section:P=>1-.07*(Math.cos(P*12)>0?1:0)}).translate(0,I,_)),s.put(r.gold,fe(.72,0,I+2.6,_,12),Ot(new on(.62,.11,6,14,Math.PI)).rotateZ(Math.PI).translate(0,I+4.15,_),Ot(new on(.5,.09,6,16)).translate(0,I+5,_),Ot(new Ce(.06,.06,1.4,5)).translate(0,I+3.7,_));for(let P=0;P<12;P++){let O=P/12*Math.PI*2;s.put(r.gold,Ot(new Nn(.07,.34,4)).translate(0,.76,0).rotateZ(O).translate(0,I+5,_))}a.into(s,r);for(let P=-13;P<=13;P+=6.5)s.light(P,.6,14,Tt,.2,13);for(let P of[-1,1])for(let O of[-4,-12,-20])s.light(P*29,.8,O,Tt,.13,12);return s.light(0,25,8,Tt,.3,12).light(0,34,5,Tt,.26,10).light(-11.3,21,5,Tt,.14,7).light(11.3,21,5,Tt,.14,7).light(0,6,4,Zt,.22,5).light(0,28,-32,Tt,.16,12).light(-24,30,-12,Tt,.16,10).light(24,30,-12,Tt,.16,10),s.put(an(),Ye(24,18,0,0,-11)),s}var Ax=(i,t)=>new xt(i,t),xc=(i,t,e,n,r,s=10)=>dn([[i*.93,0],[i*1.02,t*.14],[i*.98,t*.34],[i*.82,t*.58],[i*.56,t*.8],[i*.24,t*.95],[.001,t]],{seg:s}).translate(e,n,r),Zh=(i,t,e,n)=>Ot(new Hr(i)).scale(1,1.5,1).translate(t,e,n),Rx=(i,t,e,n,r)=>[...[[-1,-1],[1,-1],[-1,1],[1,1]].map(([s,o])=>G(i*.1,t,i*.1,e+s*i*.42,n,r+o*i*.42)),G(i*1.28,i*.12,i*1.28,e,n+t,r),xc(i*.56,i*.72,e,n+t+i*.12,r,8),Zh(i*.1,e,n+t+i*.96,r)];function ld(i,t,e,n,r,s,o,a){let l=new Tn,c=i/2-.2,u=n+.12,h=t+e;return l.moveTo(-i/2,0),l.lineTo(i/2,0),l.lineTo(i/2,t),l.lineTo(c,t),l.absellipse(c,h,c-u,e,-Math.PI/2,-Math.PI,!0),l.lineTo(n,h),l.absarc(0,h,n,0,Math.PI,!1),l.lineTo(-u,h),l.absellipse(-c,h,c-u,e,0,-Math.PI/2,!0),l.lineTo(-i/2,t),o&&l.holes.push(new Li(ki("pointed",o,a,{sharp:.4}).map(f=>Ax(f[0],f[1]+.35)))),An(new Ti(l,{depth:r,bevelEnabled:!1,curveSegments:10}).translate(0,0,-r),s)}function gc(i,t,e,n){return new nn().add("trim",G(i,.24,t,e,n-.24,t/2),G(i,.95,.1,e,n,t-.05),G(.1,.95,t,e-i/2+.05,n,t/2),G(.1,.95,t,e+i/2-.05,n,t/2),G(i+.16,.1,t+.08,e,n+.95,t/2+.04)).add("fine",_i([e-i/2+.25,0],[e+i/2-.25,0],.95,()=>Ke(t*.92,.85,.2,n-.24)),_i([e-i/2+.5,t],[e+i/2-.5,t],.9,()=>G(.5,.5,.04,0,n+.22,0),{ends:!1})).add("bufffine",_i([e-i/2+.5,t+.02],[e+i/2-.5,t+.02],.9,()=>G(.34,.34,.04,0,n+.3,0),{ends:!1}))}function cd(){let i=[156,84,60],t=Array(32).fill(null);for(let F of[4,12,13,20,27])t[F]=i;let e=In("nyay",{stone:[184,154,98],course:.15,block:.5,rows:32,cols:8,joint:.86,vary:.1,bands:t,grime:.14}),n=e.userData.tile,r=In("nyay-stone",{stone:[174,158,124],course:.45,block:1,joint:.78}),s=r.userData.tile,o=pc("nyay",[150,80,58]),a=o.userData.tile,l={stone:e,ashlar:r,roof:o,trim:yt({tint:12762540}),fine:Mn(12762540),buff:yt({tint:11707006}),bufffine:Mn(11707006),glass:Hi(),dark:yt({tint:1577743}),gate:wr("nyay-gate",[52,44,36],.34,!0),glow:te(1,.6,.24),dial:te(1.5,1.42,1.15),hands:Mn(1709586),gold:te(1.9,1.35,.42),lamp:te(1.8,1.4,.8)},c=new ye,u=we(96),h=new nn,f=.9,d=4,g=22.5,x=g-f,p=[[.35,0],[.35,.55],[.1,f],[0,f]],m={kind:"round",fill:"glass",frame:.26,sill:!0},_={kind:"flat",fill:"glass",seg:8,chance:.3,sill:!0};for(let[F,W,q,K]of[[27,24,0,-8],[13.4,20,-20.2,-10],[13.4,20,20.2,-10],[20.6,16,-37.2,-9],[20.6,16,37.2,-9]])h.add("ashlar",ee(p,zt(F,W,q,K),0,{cap:!0,tile:s}));for(let F=0;F<5;F++)h.add("buff",G(12.4-F*.4,f-F*.18,.5,0,0,d+.6+F*.5));let v={x:0,y:0,w:9.8,h:11.9,kind:"pointed",sharp:.14,seg:20,fill:"open"};h.take(en(14,x,3.2,n,[v,...Me(3,1.45,{y:14.1,w:1.12,h:2.6,kind:"flat",fill:"glass",on:1,style:0}),{x:0,y:18.5,w:2.7,h:2.7,kind:"circle",fill:"dial",depth:.3,frame:.32,proud:.14},...[-5.65,5.65].map(F=>({...m,x:F,y:17.5,w:1.5,h:2.9}))],f,u).move(0,0,d)),h.add("trim",cn("pointed",v.w,v.h,0,f+.02,d,{band:.9,proud:.14,sharp:.14,seg:20}),G(4.6,.3,.36,0,f+16.8,d+.14),G(4.6,.22,.3,0,f+13.88,d+.12));for(let F of[-2.12,-.72,.72,2.12])h.add("fine",gn(.13,2.7,F,f+14.1,d+.16,{sides:6}));h.take(gc(6.6,1.3,0,f+17.5).move(0,0,d));for(let F of[-1,1])h.add("trim",re(.48,2.5,F*2.75,f+19,d+.12,8),dn([[.001,0],[.26,.12],[.56,.5],[.5,.95]],{seg:8}).translate(F*2.75,f+18.05,d+.12),xc(.5,.6,F*2.75,f+21.5,d+.12,8));h.add("hands",G(.1,1,.04,0,f+19.85,d-.27),Ot(new Ue(.7,.1,.04)).translate(.32,f+19.85,d-.25)),h.take(en(10.8,12.6,.6,n,[...[-2.1,2.1].map(F=>({x:F,y:0,w:3,h:4.5,kind:"round",fill:"glow",frame:.42})),...Me(3,3,{y:6.7,w:1.9,h:3.2,kind:"round",fill:"glass",on:1,style:1,frame:.22})],f,u).move(0,0,d-3.2));for(let F of[-2.1,2.1])h.add("gate",qe("round",3,4.5,F,f+.02,d-3.42,{uv:1.3,shade:.9}));h.take(gc(9.7,1.5,0,f+5.6).move(0,0,d-3.2));for(let F of[-1,1])h.take(en(6.5,x,.9,n,[{x:0,y:.6,w:1.3,h:2.3,kind:"flat",fill:"glass",frame:.2,sill:!0},{x:0,y:6.2,w:1.6,h:2.9,kind:"pointed",sharp:.25,fill:"glass",frame:.3,outer:"flat",sill:!0}],f,u).move(F*10.25,0,d));h.take(en(24,x,.9,n,Me(4,4,{...m,y:17,w:1.4,h:2.7},4),f,u).move(13.5,0,-8,Math.PI/2)).take(en(24,x,.9,n,Me(4,4,{...m,y:17,w:1.4,h:2.7},-4),f,u).move(-13.5,0,-8,-Math.PI/2)),h.take(en(27,x,.9,n,[2,9.5,16.6].flatMap(F=>Me(6,4.2,{..._,y:F,w:1.4,h:2.8})),f,u).move(0,0,-20,Math.PI));let y=7.4,w=f+12.6,M=d+.45-y/2,E=[...Me(3,.95,{y:.9,w:.36,h:2,kind:"round",fill:"dark",frame:.15,seg:6}),{x:0,y:3.7,w:3.8,h:1.2,kind:"flat",fill:"glass",on:0,style:3,frame:.14},{...m,x:0,y:5.75,w:1.5,h:2.8,sill:!1}];for(let F of[-1,1]){let W=F*10.25,q=zt(y,y,W,M);h.take(sn(y,y,g-w,.5,n,{front:E,[F>0?"right":"left"]:E},w,u).move(W,0,d+.45)),h.add("buff",G(y,.22,y,W,w-.22,M),he(q,w-.1,.12,.3)),h.add("bufffine",Be(q,.82,()=>Ke(.5,.95,.3,w-.2),{inset:.3})),h.take(gc(3.6,.95,0,w+5.6).move(W,0,d+.45)).take(gc(3.6,.95,0,w+5.6).move(W+F*y/2,0,M,F*Math.PI/2))}let T=[[-13.95,4.45],[-6.55,4.45],[-6.55,4],[6.55,4],[6.55,4.45],[13.95,4.45],[13.95,-2.95],[13.5,-2.95],[13.5,-20],[-13.5,-20],[-13.5,-2.95],[-13.95,-2.95]];h.add("buff",he(T,g,.7,.9),G(27,.3,24,0,g+.6,-8),G(y,.3,y,-10.25,g+.6,M),G(y,.3,y,10.25,g+.6,M)),h.add("bufffine",Be(T,.9,()=>G(.34,.3,.26,0,g-.34,.12),{inset:.25})),h.add("fine",Kr(T,g+.9,{h:1,step:.46,r:.09}));let b=g+.9;h.add("ashlar",ld(10,3.5,1.1,2.25,1.2,s,2.5,3.2).translate(0,b,d-.2)),h.add("dark",qe("pointed",2.5,3.2,0,b+.35,d-.95,{uv:"plain",sharp:.4,shade:.5})),h.add("trim",cn("pointed",2.5,3.2,0,b+.35,d-.2,{band:.24,proud:.1,sharp:.4}),Ze(.46,0,b+6.85,d-.8));for(let[F,W]of[[-4.7,4.5],[4.7,4.5],[-2.6,6.4],[2.6,6.4]])h.add("ashlar",An(G(.8,W,.8,F,b,d-.6),s)).add("buff",G(1,.18,1,F,b+W,d-.6),Ze(.5,F,b+W+.18,d-.6));for(let F of[-1,1]){let W=F*10.25,q=Ge(2,8,W,M),K=b+6.4,rt=K+.25+3;h.add("stone",ee([[0,0],[0,6.4]],q,b,{tile:n,cap:!0})),h.add("trim",ee([[0,0],[.12,0],[.12,.26],[0,.26]],q,b+3.5),ee([[.25,0],[.25,.4],[0,.6]],q,b)),h.add("fine",Be(q,.765,()=>cn("pointed",.86,1.65,0,b+4.15,0,{band:.12,proud:.07,sharp:.4,seg:8}),{ends:!1}),Be(q,.765,()=>cn("round",.5,1.9,0,b+1,0,{band:.1,proud:.05,seg:6}),{ends:!1})),h.add("trim",ee([[0,-.95],[.3,-.55],[.9,0],[.9,.25],[0,.25]],q,K,{cap:!0}),ee([[0,0],[0,.5],[-.3,.5]],Ge(1.95,8,W,M),rt,{cap:!0}),rn(Ge(1.95,8,W,M),rt+.45,1,.36,.1)),h.add("fine",Kr(Ge(2.78,8,W,M),K+.25,{h:.95,step:.42,r:.08}),Be(q,.52,()=>Ke(.55,.6,.14,K-.02),{ends:!1}));for(let vt=0;vt<8;vt++){let Gt=(vt+.5)/8*Math.PI*2;h.add("trim",gn(.17,3,W+Math.cos(Gt)*1.62,K+.25,M+Math.sin(Gt)*1.62,{sides:6}))}h.add("buff",xc(1.95,2.3,W,rt+.95,M,14)),h.add("gold",Ze(.5,W,rt+3.15,M)),h.add("lamp",fe(.3,W,K+2.1,M,8)),c.light(W,K+2.1,M,Zt,.36,4.5,2.2);for(let vt of[-1,1])for(let Gt of[-1,1]){let ie=W+vt*3.05,de=M+Gt*3.05;h.add("ashlar",An(G(1.25,1.5,1.25,ie,b,de),s)).add("bufffine",Rx(1.3,1.5,ie,b+1.5,de))}}let S=[{x:0,y:.4,w:3.4,h:5.7,kind:"pointed",sharp:.35,fill:"glass",on:1,style:1,frame:.5,outer:"flat",sill:!0},...[-4.6,4.6].map(F=>({x:F,y:1.4,w:1.2,h:2.4,kind:"flat",fill:"glass",frame:.18,sill:!0})),...Me(3,4.3,{y:8.2,w:1.6,h:3.1,kind:"pointed",sharp:.25,fill:"glass",frame:.3,outer:"flat",sill:!0})],A=Me(3,5.2,{...m,y:8.2,w:1.5,h:3},2);for(let F of[-1,1]){let W=F*20.2,q=zt(13.4,20,W,-10),K=15.4;h.take(sn(13.4,20,K-f,.8,n,{front:S,back:[1.6,8.2].flatMap(rt=>Me(3,4,{..._,y:rt,w:1.4,h:2.8})),[F>0?"right":"left"]:F>0?A:A.map(rt=>({...rt,x:-rt.x}))},f,u).move(W,0,0)),h.add("trim",he(q,f+6.9,.14,.3)),h.add("buff",he(q,K,.5,.7),he(q,K+1.6,.12,.2),G(13.4,.2,20,W,K+.7,-10)),h.add("bufffine",Be(q,.9,()=>G(.34,.26,.24,0,K-.3,.12),{inset:.25})),h.add("stone",ee([[0,0],[0,.9],[-.35,.9],[-.35,0]],q,K+.7,{tile:n})),h.add("roof",ee([[0,0],[-6.3,4.5]],zt(12.6,19.2,W,-10),K+.9,{tile:a})),h.add("ashlar",ld(5.2,1.5,.6,1.25,.8,s,1.2,1.7).translate(W,K+1.6,-.02)),h.add("dark",qe("pointed",1.2,1.7,W,K+1.95,-.6,{uv:"plain",sharp:.4,shade:.5})),h.add("buff",Ze(.34,W,K+4.95,-.42));for(let rt of[-1,1])for(let vt of[-.4,-19.6])h.add("ashlar",An(G(.8,2.3,.8,W+rt*6.3,K+.7,vt),s)).add("buff",Ze(.42,W+rt*6.3,K+3,vt));for(let rt of[-6.9,-13.1])h.add("buff",Ze(.4,W,K+5.3,rt))}let I=[-8.25,-4.95,-1.65,1.65,4.95,8.25],P=[...I.map(F=>({...m,x:F,y:1,w:1.7,h:3.7,frame:.36,chance:.5})),...I.flatMap(F=>[F-.52,F+.52]).map(F=>({x:F,y:6.9,w:.74,h:2.6,kind:"round",fill:"glass",seg:8,chance:.5}))],O=[...Me(4,3.5,{...m,y:1,w:1.6,h:3.6,frame:.32}),...Me(4,3.5,{...m,y:6.9,w:1.3,h:2.9})],z=12.9;for(let F of[-1,1]){let W=F*37.2,q=zt(20.6,16,W,-9);h.take(sn(20.6,16,z-f,.7,n,{front:P,back:[1.4,6.9].flatMap(K=>Me(6,3.3,{..._,y:K,w:1.3,h:2.8})),[F>0?"right":"left"]:O},f,u).move(W,0,-1));for(let K of I)h.add("trim",cn("round",2.2,3.5,W+K,f+6.62,-1,{band:.3,proud:.1}),G(.18,2.5,.16,W+K,f+6.9,-.94));for(let K=0;K<=6;K++)h.add("trim",G(.42,z-f-5.7,.14,W-9.9+K*3.3,f+5.7,-.93));h.add("trim",he(q,f+5.5,.14,.28)),h.add("buff",he(q,z,.45,.6),G(20.6,.2,16,W,z+.5,-9)),h.add("bufffine",Be(q,.9,()=>G(.32,.24,.22,0,z-.28,.1),{inset:.25})),h.add("fine",Kr(q,z+.6,{h:.9,step:.46,r:.08}),_i([W-10.3,-1],[W+10.3,-1],3.3,()=>[G(.42,1.25,.42,0,z+.6,-.05),Zh(.2,0,z+2.1,-.05)],{inset:.4}),_i([W+F*10.3,F>0?-1:-17],[W+F*10.3,F>0?-17:-1],3.6,()=>[G(.42,1.25,.42,0,z+.6,-.05),Zh(.2,0,z+2.1,-.05)],{inset:.4})),h.add("roof",ee([[0,0],[-7.3,4.3]],zt(19.4,14.8,W,-9),z+.7,{tile:a}));for(let K of[-2.3,2.3])h.add("buff",Ze(.38,W+K,z+4.9,-9));for(let K of[-5.6,0,5.6]){let rt=zt(1.9,2.8,W+K,-4.6);h.add("stone",ee([[0,0],[0,2.1]],rt,z+1.5,{tile:n})),h.add("roof",ee([[.14,0],[-.95,.85]],rt,z+3.6,{tile:a})),h.add("trim",cn("round",.9,1.3,W+K,z+2,-3.2,{band:.16,proud:.06,seg:8})),h.add("glass",qe("round",.9,1.3,W+K,z+2,-3.18,{on:u()<.6,style:0,seg:8}))}for(let K of[F*28.4,F*46]){let vt=zt(3,3,K,-2.5),Gt=z+.6,ie=Gt+3.5,de={x:0,y:.8,w:.9,h:1.9,kind:"round",fill:"dark",frame:.13,seg:8};h.take(sn(3,3,3.5,.4,n,{front:[de],back:[de],left:[de],right:[de]},Gt).move(K,0,-2.5+1.5)),h.add("buff",he(vt,ie,.3,.4),G(3,.12,3,K,ie+.28,-2.5),ee([[0,0],[0,.4],[-.3,.4]],zt(2.7,2.7,K,-2.5),ie+2.8,{cap:!0}),rn(zt(2.7,2.7,K,-2.5),ie+3.1,.95,.34,.1));for(let _e of[-1,1])for(let it of[-1,1])h.add("bufffine",gn(.18,2.4,K+_e*1.1,ie+.4,-2.5+it*1.1,{sides:6}));h.add("buff",xc(1.45,1.6,K,ie+3.5,-2.5,10)),h.add("gold",Ze(.36,K,ie+5.05,-2.5))}}h.into(c,l);for(let F=-40;F<=40;F+=8)c.light(F,.6,16,Tt,.2,14);for(let F of[-1,1])c.light(F*60,.8,-4,Tt,.14,13).light(F*60,.8,-14,Tt,.12,13).light(F*30,.8,-32,Tt,.1,13).light(F*20,19,10,Tt,.14,9).light(F*10.25,28,12,Tt,.3,10).light(F*11.5,35,9,Tt,.4,9).light(F*10.25,24.6,6.5,Tt,.42,8).light(F*18,31,1,Tt,.34,9).light(F*10.25,30,-8,Tt,.2,9);return c.light(0,.8,-34,Tt,.1,13).light(0,24,13,Tt,.28,11).light(0,30,11,Tt,.36,9).light(0,4.5,3.4,Zt,.34,5.5).light(0,8.5,2.6,Zt,.2,5).light(0,30,-18,Tt,.12,12),c.put(an(),Ye(56,14,0,0,-8)),c}var Cx=()=>te(1.9,1.35,.42);function hd(){let i=In("mandvi",{stone:[188,186,178],course:.6,block:2.4,rows:8,cols:2,joint:.955,vary:.04,grime:.1}),t=i.userData.tile,e={stone:i,trim:yt({tint:12368562}),fine:Mn(12368562),brown:yt({tint:8018504}),brownfine:Mn(8018504),iron:Mn(2895414),dark:yt({tint:1446671}),pave:yt({tint:4867648}),jali:wr("mandvi",[132,88,62],.36),white:wr("mandvi-white",[196,194,186],.46),wood:Er("mandvi",[112,70,46]),glow:te(.36,.21,.08),dial:te(1.5,1.42,1.15),lamp:te(2,1.5,.8),flag:te(1.5,.3,.2),gold:Cx()},n=new ye,r=new nn,s=26,o=-13,a=10.6,l=2.2,c=zt(s,s,0,o),u=M=>M*Math.PI/2,h=[[-8.2,5.1,8.4],[0,6,8.7],[8.2,5.1,8.4]].map(([M,E,T])=>({x:M,y:0,w:E,h:T,kind:"pointed",sharp:.2,seg:14,fill:"open"})),f=()=>new nn().take(en(s,a,l/2,t,h).move(0,0,l/2)).take(en(s,a,l/2,t,h).move(0,0,-l/2,Math.PI));for(let[M,E,T]of[[0,-l/2,0],[0,-s+l/2,0],[s/2-l/2,o,1],[-s/2+l/2,o,1],[0,o+4.35,0],[0,o-4.35,0],[4.35,o,1],[-4.35,o,1]])r.take(f().move(M,0,E,u(T)));r.add("pave",G(s+3,.12,s+3,0,0,o)),r.add("trim",G(s-.2,.4,s-.2,0,a-.4,o));for(let M=0;M<4;M++){let E=new nn;for(let T of h)E.add("fine",cn("pointed",T.w,T.h,T.x,.02,0,{band:.2,proud:.07,sharp:.2,seg:14}));for(let T of[-4.35,4.35])for(let b of[2.6,5,7.2])E.add("fine",cn("cusped",.85,1.35,T,b,0,{band:.1,proud:.05,lobes:5,cusp:.11,sharp:.3}));r.take(E.move(0,0,s/2).move(0,0,o,u(M)))}r.add("trim",he(c,9.72,.78,.88),he(c,12.9,.2,.3),G(s-1,.3,s-1,0,a+.1,o)),r.add("brown",ee([[.76,-.16],[.83,-.16],[.83,.03],[.76,.03]],c,a)),r.add("stone",ee([[0,0],[0,2.3],[-.55,2.3],[-.55,.4]],c,a,{tile:t})),r.add("fine",Be(c,.72,()=>Ke(.55,.6,.24,9.76),{inset:.4}),Be(c,3.25,()=>cn("flat",2.3,1.25,0,11.2,0,{band:.12,proud:.05}),{ends:!1}));let d=13.4,g=.4,x=(M,E,T)=>M.translate(0,0,T).rotateY(E).translate(d,0,g),p=13.4;r.add("stone",re(2.3,9.7,d,0,g,18,t),re(2.75,2.5,d,a,g,18,t)),r.add("trim",dn([[2.3,0],[2.48,.14],[2.6,.2],[2.98,.8],[3.06,.86],[3.06,1.1],[2.75,1.1]],{seg:18}).translate(d,9.5,g),dn([[2.75,0],[2.92,.05],[2.92,.25],[2.5,.3],[.001,.3]],{seg:18}).translate(d,13.1,g),re(2.5,.5,d,0,g,18)),r.add("brown",dn([[3.06,0],[3.12,0],[3.12,.18],[3.06,.18]],{seg:18}).translate(d,10.44,g));for(let M=0;M<18;M++)r.add("fine",x(Ke(.5,.6,.22,10.22),M/18*Math.PI*2,2.34));for(let M of[.42,.42+Math.PI/2,.42-Math.PI/2+.5])for(let E of[3.4,6.7])for(let T of[-.09,.09])r.add("dark",x(G(.17,1.45,.08,0,E,0),M+T,2.27));r.add("brown",re(1.95,.24,d,p,g,12),dn([[1.72,0],[1.72,.3],[2.3,.42],[2.3,.54],[1.62,.72]],{seg:12}).translate(d,p+2.74,g),yn(1.62,1.7,d,p+3.44,g,{seg:12,swell:.05,finial:.55}));for(let M=0;M<8;M++){let E=(M+.5)/8*Math.PI*2,T=d+Math.cos(E)*1.58,b=g+Math.sin(E)*1.58;r.add("brownfine",gn(.1,2.5,T,p+.24,b,{sides:6}),x(G(1,.34,.08,0,p+2.4,0),M/8*Math.PI*2,1.46))}n.put(e.gold,fe(.2,d,p+6.2,g,6)),n.put(e.lamp,fe(.22,d,p+2.2,g,6)),n.light(d,p+2.2,g,Zt,.3,3.4,2);let m=(M,E)=>{let T=zt(M,M,0,o);r.add("iron",Be(T,1.1,()=>G(.06,.95,.06,0,E,0)),ee([[0,.9],[.05,.9],[.05,.95],[0,.95]],T,E),ee([[0,.45],[.04,.45],[.04,.49],[0,.49]],T,E))},_=(M,E,T,b,S,A,I)=>{let O=(M-.44)/b,z=zt(M+.2,M+.2,0,o),F=T-.44-A;for(let W=0;W<4;W++){let q=new nn().add("trim",G(M,.3,.44,0,T-.3,-.22),G(M,.14,.24,0,F,-.2)).add("glow",qe("flat",M-.3,T-E,0,E,-.55,{uv:"plain",on:1}));for(let K=0;K<=b;K++)q.add("trim",G(.44,T-E,.44,-M/2+.44/2+K*O,E,-.44/2));for(let K=0;K<b;K++){let rt=-M/2+.22+(K+.5)*O,vt=O-.44,Gt=K===(b-1)/2;q.add("jali",qe("flat",vt,A,rt,T-.3-A,-.14,{uv:1,shade:1})),I?(q.add("trim",G(vt,F-E,.1,rt,E,-.21)),Gt?q.add("wood",qe("flat",1.15,1.25,rt,E+2.75,-.13,{uv:"whole",shade:.9})).add("fine",G(1.45,.12,.16,rt,E+2.63,-.1),G(1.45,.12,.16,rt,E+4,-.1)):q.add("dark",qe("flat",vt-.5,1,rt,E+2.9,-.14,{uv:"plain"})).add("white",qe("flat",vt-.5,1,rt,E+2.9,-.11,{uv:.7,shade:1}))):q.add("dark",qe("flat",vt,.95,rt,E,-.2,{uv:"plain"})).add("white",qe("flat",vt,.95,rt,E,-.16,{uv:.85,shade:1})).add("fine",G(vt,.1,.14,rt,E+.95,-.16))}r.take(q.move(0,0,M/2).move(0,0,o,u(W)))}r.add("trim",ee([[0,0],[S,.42],[S,.58],[0,.58]],z,T),G(M+.2,.16,M+.2,0,T+.42,o)),r.add("brown",ee([[S,.38],[S+.07,.38],[S+.07,.6],[S,.6]],z,T))};_(13.3,a+.4,16.8,5,1.35,1.25,!0),m(12.7,17.38),_(8.3,17.38,20.5,3,1.05,1,!1),m(7.7,21.08);let v=21.08,y=23.5,w=4.3;r.add("stone",ee([[0,0],[0,y-v]],zt(w,w,0,o),v,{tile:t})),r.add("trim",rn(zt(w,w,0,o),y,.9,.42,.1),G(w,.14,w,0,y+.4,o),he(zt(w,w,0,o),v,.1,.2));for(let M=0;M<4;M++){let E=new nn().add("dial",Ot(new Cn(.95,24)).translate(0,v+1.25,.04)).add("brownfine",Ot(new on(1,.08,5,24)).translate(0,v+1.25,.05),G(.08,.74,.03,0,v+1.25,.07),Ot(new Ue(.52,.08,.03)).translate(.25,v+1.25,.07));r.take(E.move(0,0,w/2).move(0,0,o,u(M)))}m(3.7,y+.54);for(let[M,E]of[[-1,-1],[1,-1],[-1,1],[1,1]])r.add("fine",G(.14,1.5,.14,M*.62,y+.54,o+E*.62));r.add("trim",G(1.6,.9,1.6,0,y+.54,o),G(2.3,.16,2.3,0,y+2.04,o)),r.add("brown",ee([[0,0],[-1.15,.75]],zt(2.3,2.3,0,o),y+2.2)),r.add("iron",ce([0,y+2.9,o],[0,28.6,o],.045,4)),n.put(e.gold,fe(.16,0,y+3,o,6));for(let M of[-1,1])r.add("iron",ce([M*3.6,21.08,o+3.7],[M*3.6,24.4,o+3.7],.04,4)),r.add("flag",G(1.1,.7,.04,M*3.6+.6,23.6,o+3.7));r.into(n,e);for(let[M,E]of[[0,0],[-8.2,0],[8.2,0],[0,-8.2],[0,8.2]])n.put(e.iron,ce([M,a-.4,o+E],[M,7.9,o+E],.03,4)),n.put(e.lamp,fe(.3,M,7.7,o+E,8)),n.light(M,7.2,o+E,Zt,.85,7.5,2.6);for(let M=-13;M<=13;M+=6.5)n.light(M,.6,12,Tt,.14,13).light(M,.6,-38,Tt,.09,13);for(let M of[-1,1])for(let E of[-4,-13,-22])n.light(M*25,.6,E,Tt,.11,13);return n.light(0,17,6,Tt,.2,9).light(0,22,2,Tt,.16,7).light(-19,17,-13,Tt,.14,9).light(19,17,-13,Tt,.14,9).light(0,18,-32,Tt,.12,9).light(19,5,6,Tt,.14,8),n.put(an(),Ye(19,19,0,0,o)),n}var Px=()=>te(1.9,1.35,.42);function ud(i,t,e,n,r,s,{band:o=.8,seg:a=24,...l}={}){let c=ki(i,t,e,{...l,seg:a}),u=ki(i,t+o*2,e+o,{...l,seg:a}),h=[];for(let d=2;d<Math.min(c.length,u.length)-1;d+=2)for(let g of[c[d],u[d],u[d+1],c[d],u[d+1],c[d+1]])h.push(g[0],g[1],0);let f=new Le;return f.setAttribute("position",new ae(h,3)),f.computeVertexNormals(),f.setAttribute("uv",new Pe(new Float32Array(h.length/3*2).fill(.004),2)),f.translate(n,r,s)}function Ix(i,t,e,n,r,s,o,a,l){let c=u=>u.rotateX(-e).translate(0,r,n).rotateY(s).translate(o,0,a);if(i.add("trim",c(Ot(new on(t,t*.2,5,14)).translate(0,0,.05))),i.add(l?"glow":"dark",c(Ot(new Cn(t,14)).translate(0,0,.06))),t>.7){i.add("fine",c(Ot(new on(t*.42,t*.09,4,10)).translate(0,0,.12)));for(let u=0;u<8;u++)i.add("fine",c(Ot(new Ue(t*.1,t*.56,.08)).translate(0,t*.7,.1).rotateZ(u*Math.PI/4)))}}function fd(i,t,e,n,r,s=8,o=0){o&&i.add("trim",ee([[0,-o],[0,0]],Ge(t*.98,s,e,r),n,{cap:!0}));for(let a=0;a<s;a++){let l=(a+.5)/s*Math.PI*2,c=e+Math.cos(l)*t*.78,u=r+Math.sin(l)*t*.78;i.add("fine",re(t*.09,t*1.13,c,n,u,5,null,t*.07),G(t*.26,t*.12,t*.26,c,n+t*1.13,u))}i.add("trim",ee([[0,0],[0,t*.2]],Ge(t*.95,s,e,r),n+t*1.25,{cap:!0}),rn(Ge(t*.98,s,e,r),n+t*1.4,t*.42,t*.16,.07),yn(t*.92,t*1.05,e,n+t*1.6,r,{seg:12,swell:.06,finial:0}),Ze(t*.26,e,n+t*2.62,r))}function dd(){let i=In("msu-brick",{stone:[146,74,56],course:.17,block:.5,rows:16,cols:8,joint:1.12,vary:.18,grime:.16,bands:Object.assign([],{0:[172,160,130]})}),t=i.userData.tile,e=In("msu-dome",{stone:[178,170,152],course:.9,block:2.4,rows:4,cols:2,joint:.93,vary:.05,grime:.7}),n=e.userData.tile,r=yt({tint:12102024}),s={stone:i,trim:r,fine:Mn(12102024),glass:Hi(),dark:yt({tint:1511951}),glow:te(.82,.5,.2),shell:e,stripe:yt({tint:8010798}),roof:yt({tint:6971736})},o=new ye,a=we(133),l=new nn,c=-15,u=1,h=18,f=u+h,d={kind:"pointed",sharp:.4,frame:.2,sill:!0},g={...d,y:.9,w:2.2,h:3.9},x={...d,y:6.3,w:2,h:3.4,chance:.5},p={...d,w:1.5,h:3.1,sill:!1};for(let[T,b,S,A]of[[31,31,0,c],[24.8,20.8,-27,-12],[24.8,20.8,27,-12],[9.8,8.8,-33,-2],[9.8,8.8,33,-2]])l.add("trim",ee([[.3,0],[.3,.6],[0,u]],zt(T,b,S,A),0,{cap:!0}));for(let T=0;T<5;T++)l.add("trim",G(23-T*.4,u-T*.2,.6,0,0,.8+T*.6));let m=T=>[...Me(6,4.5,{...p,y:12.2,h:2.9}),{...g,x:T*11},{...x,x:T*11}];l.take(sn(30,30,h,1.2,t,{front:Me(3,7.4,{y:0,w:6,h:13.4,kind:"cusped",sharp:.5,lobes:11,cusp:.035,fill:"open"}),right:m(1),left:m(-1),back:[...Me(5,5.4,{...g,w:2.6,h:4.6}),...Me(5,5.4,{...x,y:7.2,w:2.4,h:4.2}),...Me(6,4.5,{...p,y:12.2,h:2.9})]},u,a));for(let T of[-7.4,0,7.4])l.add("trim",cn("cusped",6,13.4,T,u+.02,0,{band:.85,proud:.22,outer:"pointed",sharp:.5,lobes:11,cusp:.035})),l.add("stripe",ud("pointed",6,13.4,T,u+.02,.26,{band:.85,sharp:.5}));for(let T of[-11.1,-3.7,3.7,11.1])l.add("trim",G(1.5,1.7,1.5,T,u,.5),gn(.52,6.6,T,u+1.7,.5,{sides:10,cap:.7}),G(1.7,.5,1.6,T,u+8.3,.45)),l.add("fine",Ze(.3,T,f+1.5,.2));let _=new nn().take(en(21.6,14,.6,t,Me(3,7.4,{...d,y:.5,w:3.6,h:9.6,on:1,style:1}),u).move(0,0,-5.2));for(let T of[-1,1])_.add("stone",An(G(.6,14,4.4,T*10.9,u,-3.2),t));_.add("trim",G(22.4,.5,4.6,0,u+13.9,-3.1));for(let T of["stone","trim"])for(let b of _.g[T])Sr(b,.6);l.take(_),o.light(-7.4,4,-2,Zt,.22,6).light(0,4,-2,Zt,.22,6).light(7.4,4,-2,Zt,.22,6);let v=zt(30,30,0,c);l.add("trim",he(v,u+15.3,.25,.4),he(v,f-.5,.5,.7),ee([[0,0],[0,1],[-.4,1]],zt(30.6,30.6,0,c),f+.2)),l.add("roof",G(30,.3,30,0,f,c)),l.add("fine",Be(zt(30.6,30.6,0,c),1.3,()=>G(.62,.5,.36,0,f+1.2,-.2),{inset:.6}),Be(v,.9,()=>G(.3,.3,.2,0,f-.82,.12),{inset:.5}));for(let[T,b]of[[-1,1],[1,1],[-1,-1],[1,-1]]){let S=T*14.7,A=c+b*14.7,I=Ge(1.8,8,S,A);l.add("stone",ee([[0,0],[0,19.6]],I,u,{tile:t}));for(let P of[6.4,12.4])l.add("trim",he(I,u+P,.14,.28));l.add("trim",he(I,u+19.6,.36,.55),ee([[.36,0],[.36,.2]],I,u+20.15,{cap:!0})),fd(l,1.9,S,u+20.35,A)}let y=28,w=12,M=13.4,E=[[w-.5,-.6]];for(let T=0;T<=22;T++){let b=T/22*Math.PI/2;E.push([Math.max(.01,w*Math.cos(b)),M*Math.sin(b)])}l.add("stone",ee([[0,0],[0,2],[-1,2]],Ge(14.2,8,0,c,0),f+.3,{tile:t}),re(w,5.4,0,f+2.3,c,32,t)),l.add("trim",he(Ge(14.2,8,0,c,0),f+2.1,.25,.35),re(w+.3,.35,0,f+4.6,c,32),re(w+.7,.4,0,y-1,c,32,null,w+.3),re(w+.3,.3,0,y-.6,c,32)),l.add("shell",dn(E,{seg:48,tile:n}).translate(0,y,c));for(let T=0;T<16;T++){let b=(T+.5)/16*Math.PI*2;for(let[S,A,I]of[[.2,1.05,T%2===0],[.74,.5,!1]])Ix(l,A,Math.atan2(w*Math.sin(S),M*Math.cos(S)),w*Math.cos(S),y+M*Math.sin(S),b,0,c,I)}l.add("trim",dn([[2.9,0],[3.1,.3],[2.2,.7],[.8,.95],[.4,1.5],[.6,1.9],[.25,2.3],[.1,3.1]],{seg:16}).translate(0,y+M-.3,c)),o.put(Px(),fe(.42,0,y+M+3,c,8),Ot(new on(.5,.07,5,12)).translate(0,y+M+4,c),Ot(new Ce(.05,.05,1.4,5)).translate(0,y+M+3.7,c));for(let[T,b]of[[-1,1],[1,1],[-1,-1],[1,-1]]){let S=T*10.3,A=c+b*10.3,I=[[4.1,-.3]];for(let P=0;P<=10;P++){let O=P/10*Math.PI/2;I.push([Math.max(.01,4.3*Math.cos(O)),4.7*Math.sin(O)])}l.add("stone",ee([[0,0],[0,2.2]],Ge(4.7,8,S,A),f+.3,{tile:t})),l.add("trim",he(Ge(4.7,8,S,A),f+2.3,.2,.3)),l.add("shell",dn(I,{seg:20,tile:n}).translate(S,f+2.9,A)),l.add("fine",Ze(.5,S,f+7.5,A))}for(let T of[-1,1]){let b=T*27,S=zt(24,20,b,-12),A=u+11,I=[-10,-5.6,-1.2].map(rt=>T*rt),P=(rt,vt)=>[...Me(rt,vt,g),...Me(rt,vt,x)];l.take(sn(24,20,11,.7,t,{front:I.flatMap(rt=>[{...g,x:rt},{...x,x:rt}]),back:P(5,4.5),[T>0?"right":"left"]:P(4,4.5)},u,a).move(b,0,-2)),l.take(Ci(3.2,3.9,1.1,b+I[1],u+6.2,{roof:"dome",drop:1.1}).move(0,0,-2)),l.add("trim",he(S,u+5.5,.2,.32),he(S,A-.4,.4,.55),ee([[0,0],[0,.9],[-.35,.9]],zt(24.4,20.4,b,-12),A+.15)),l.add("roof",G(24,.3,20,b,A-.1,-12)),l.add("fine",Be(zt(24.4,20.4,b,-12),1.3,()=>G(.6,.42,.32,0,A+1.05,-.18),{inset:.6}),Be(S,.9,()=>G(.26,.26,.18,0,A-.66,.1),{inset:.5}));for(let rt of[17.6,22,26.4])fd(l,1.5,T*rt,A+1.05,-3.2,6,.9);let O=T*33,z=zt(9,8,O,-2),F=14.5,W=u+F,q=[...Me(2,3.4,{...g,w:1.7,h:3.6}),...Me(2,3.4,{...x,w:1.6,h:3.2}),{...p,x:0,y:10.6,w:2.4,h:3}];l.take(sn(9,8,F,.7,t,{front:[...Me(3,2.6,{y:.3,w:1.9,h:4,kind:"cusped",sharp:.4,lobes:5,cusp:.07,frame:.16,depth:.55,chance:.3}),...Me(3,2.6,{...p,y:6.2,h:3,chance:.6}),{x:0,y:10.2,w:5.2,h:3.7,kind:"pointed",sharp:.3,frame:.55,proud:.14,on:1,style:1}],right:q,left:q,back:[{...p,x:0,y:11}]},u,a).move(O,0,2)),l.add("stripe",ud("pointed",5.2,3.7,O,u+10.22,2.18,{band:.55,sharp:.3,seg:20})),l.add("trim",G(8.8,.24,1.3,O,u+5.8,2.65),he(z,u+5.2,.16,.3),he(z,u+9.7,.16,.3),he(z,W-.4,.4,.55),ee([[0,0],[0,.9],[-.35,.9]],zt(9.4,8.4,O,-2),W+.15)),l.add("roof",G(9,.3,8,O,W-.1,-2)),l.add("fine",[-3.6,-1.2,1.2,3.6].map(rt=>Ke(1.2,.8,.2,u+5.8).translate(O+rt,0,2)),jn([O-4.3,3.2],[O+4.3,3.2],u+6.04,{h:.9}),jn([O-4.3,2.1],[O-4.3,3.2],u+6.04,{h:.9}),jn([O+4.3,3.2],[O+4.3,2.1],u+6.04,{h:.9})),l.add("fine",Be(zt(9.4,8.4,O,-2),1.3,()=>G(.6,.42,.32,0,W+1.05,-.18),{inset:.6}));let K=[[3.2,-.2]];for(let rt=0;rt<=10;rt++){let vt=rt/10*Math.PI/2;K.push([Math.max(.01,3.4*Math.cos(vt)),4*Math.sin(vt)])}l.add("stone",ee([[0,0],[0,1.9]],Ge(3.8,8,O,-2),W+.2,{tile:t})),l.add("trim",he(Ge(3.8,8,O,-2),W+2,.2,.3)),l.add("shell",dn(K,{seg:32,section:rt=>1-.05*(Math.cos(rt*16)>0?1:0),tile:n}).translate(O,W+2.6,-2)),l.add("fine",Ze(.46,O,W+6.5,-2));for(let rt of[O-4.6,O+4.6]){let vt=Ge(.95,8,rt,2.1);l.add("stone",ee([[0,0],[0,F+1.4]],vt,u,{tile:t})),l.add("trim",he(vt,W+1.4,.2,.35),yn(1.05,1.5,rt,W+1.75,2.1,{seg:10,finial:.5}))}}l.into(o,s);for(let T=-36;T<=36;T+=9)o.light(T,.6,16,Zt,.2,15);for(let T of[-1,1])o.light(T*50,.8,-12,Zt,.16,14).light(T*24,.8,-36,Zt,.12,14).light(T*33,12,12,Zt,.14,9);return o.light(0,.8,-44,Zt,.12,14).light(0,26,14,Zt,.3,15).light(0,38,8,Zt,.24,13).light(-26,34,c,Zt,.22,14).light(26,34,c,Zt,.22,14).light(0,34,-42,Zt,.18,14).light(-16,24,4,Zt,.14,8).light(16,24,4,Zt,.14,8),o.put(an(),Ye(46,22,0,0,-13)),o}var Dx=i=>Array.from({length:i},(t,e)=>jr(e+31)),pd=()=>te(1.9,1.35,.42),Lx=(i,t)=>(i.g[t]=i.g.stone,delete i.g.stone,i);function md(){let i=In("museum-brick",{stone:[142,68,52],course:.17,block:.5,rows:16,cols:8,joint:1.1,vary:.18,grime:.18,bands:Object.assign([],{0:[168,150,120]})}),t=i.userData.tile,e=pc("museum",[150,80,58]),n=e.userData.tile,r=In("museum-tilework",{stone:[182,170,138],course:.3,block:.6,rows:8,cols:8,joint:.86,vary:.06,grime:.1,bands:[null,[112,134,108],null,[168,150,120],null,[112,134,108],null,[150,92,70]]}),s=yt({tint:12166792}),o={stone:i,tilework:r,trim:s,fine:Mn(12166792),glass:Hi(),wood:Er("museum",[96,60,36]),dark:yt({tint:1511951}),roof:e,timber:yt({tint:4862498}),beam:Mn(4862498)},a=new ye,l=we(61),c=we(62),u=new nn,h=.9,f=7,d=h+f+.4,g=d+4.9,x=-8,p=zt(33.2,16,0,x),m={kind:"segment",frame:.2,sill:!0,y:1.2,w:2.3,h:4.4},_={kind:"flat",frame:.14,w:1.1,h:3.1,y:.9},v={kind:"round",frame:.14,w:1.25,h:2.5,y:.6,chance:.55},y=[8.2,11.55,14.9];u.add("trim",ee([[.4,0],[.4,.5],[0,h]],zt(49,20,0,x),0,{cap:!0})),u.take(sn(33.2,16,f+.4,.6,t,{front:[-1,1].flatMap(S=>y.map(A=>({...m,x:S*A}))),back:[-1,1].flatMap(S=>y.map(A=>({...m,x:S*A})))},h,c).move(0,0,0)),u.take(sn(33.2,16,4.9,.5,t,{front:[-1,1].flatMap(S=>[9.9,13.2].map(A=>({..._,x:S*A}))),back:[-1,1].flatMap(S=>[8.2,9.9,11.55,13.2,14.9].map(A=>({..._,x:S*A})))},d,c)),u.add("trim",he(p,h+f-.1,.22,.4),ee([[0,0],[.07,0],[.07,.16],[0,.16]],p,d+2.6),Be(p,1.66,()=>G(.16,4.9,.09,0,d,.03))),u.add("roof",ee([[0,1],[1.5,0],[1.5,.12],[0,1.16]],zt(30.2,16,0,x),d+.1,{tile:n}),ee([[.9,-.25],[-8,7.3]],zt(46,16,0,x),g,{tile:n})),u.add("timber",rn(p,g-.3,.9,.2,.12)),u.add("beam",Be(p,1.66,()=>Ke(1.15,.85,.14,d+.95)),Be(p,1.66,()=>Ke(.75,.6,.12,g-.15)));for(let S of[-1,1])for(let A of y){let I=S*A,P=d+1.1,O=5.3;u.take(en(2.6,O,.45,t,[{kind:"flat",frame:.16,x:0,y:.7,w:1.6,h:3.8,sill:!0,chance:.6}],P,c).move(I,0,1.1));for(let z of[-1,1])u.add("stone",An(G(.45,O,1.1,I+z*1.075,P,.55),t)),u.add("trim",G(.18,O,.12,I+z*1.21,P,1.11));u.add("roof",ee([[.5,-.25],[-1.3,1.9]],zt(2.6,5.2,I,-1.5),P+O,{tile:n})),u.add("timber",ee([[0,0],[.45,0],[.45,.12],[0,.12]],zt(2.6,1.1,I,.55),P+O-.2)),u.add("fine",Ze(.18,I,P+O+1.8,-.2))}let w=zt(13,18.6,0,-7.7),M=h+f+.3,E=M+4.7,T=E+3.7;u.take(sn(13,18.6,f+.3,.7,t,{front:[{x:0,y:0,w:3.4,h:5.5,kind:"round",fill:"door",frame:.4,proud:.14,depth:.6},{...m,x:-5.25,w:1.7},{...m,x:5.25,w:1.7}],back:Me(3,4,{...m,w:1.9})},h,c).move(0,0,1.6)),u.take(sn(13,18.6,4.7,.5,t,{front:Me(3,5.3,{..._,w:1.5,h:3.3,y:.8,chance:.7}),back:Me(3,3.9,{..._,w:1.7,h:3.3,y:.8})},M,c).move(0,0,1.6)),u.take(sn(13,18.6,3.7,.5,t,{front:[-5.3,-1.1,1.1,5.3].map(S=>({...v,x:S})),back:Me(4,3,v)},E,c).move(0,0,1.6)),u.add("trim",he(w,M-.4,.24,.4),he(w,E-.3,.18,.3),Be(w,1.86,()=>G(.16,4.7,.09,0,M,.03)),Be(w,1.86,()=>G(.16,3.7,.09,0,E,.03))),u.add("timber",rn(w,T-.3,1,.22,.12)),u.add("beam",Be(w,1.3,()=>Ke(.85,.65,.12,T-.15))),u.add("roof",ee([[1,-.28],[-6.5,6.3]],w,T,{tile:n})),u.add("fine",Ze(.3,0,T+6.2,-4.9),Ze(.3,0,T+6.2,-10.5));for(let S=0;S<5;S++)u.add("trim",G(7-S*.3,h-S*.18,.7,0,0,1.95+S*.7));{let S=new Tn;S.moveTo(-2.45,0),S.lineTo(2.45,0),S.lineTo(2.45,2.7),S.absarc(0,2.7,2.45,0,Math.PI,!1),S.lineTo(-2.45,0);let A=new Ti(S,{depth:.6,bevelEnabled:!1,curveSegments:14}),I=T-.2;u.add("trim",Ot(A).translate(0,I,1.3),Ot(new on(1.35,.18,5,18)).translate(0,I+2.7,1.98),G(5.6,.3,.9,0,I-.05,1.6),Ze(.36,0,I+5.1,1.6)),u.add("dark",qe("circle",2.6,2.6,0,I+1.4,1.96,{uv:"plain",shade:1})),u.add("fine",Ot(new on(.5,.1,4,10)).translate(0,I+2.7,2));for(let P=0;P<8;P++)u.add("fine",Ot(new Ue(.13,.74,.1)).translate(0,.9,0).rotateZ(P*Math.PI/4).translate(0,I+2.7,1.99))}for(let S of[-1,1]){let A=S*3.3,I=1,P=zt(1.7,1.7,A,I),O=26.6;u.add("stone",ee([[0,0],[0,O-h]],P,h,{tile:t}));for(let z of[M-.4,E-.3,T-.2,20.4,23.6])u.add("trim",he(P,z,.14,.28));u.add("trim",he(P,O,.32,.5),ee([[.32,0],[.32,.15]],P,O+.5,{cap:!0}));for(let[z,F]of[[-1,-1],[1,-1],[-1,1],[1,1]])u.add("fine",G(.2,1.3,.2,A+z*.78,O+.65,I+F*.78));u.add("trim",G(2.3,.18,2.3,A,O+1.95,I),yn(.95,1,A,O+2.13,I,{seg:10,swell:.05,finial:0})),u.add("fine",Ze(.22,A,O+3.1,I)),a.put(pd(),Ot(new hn(.16,6,5)).translate(A,O+3.75,I))}for(let S of[-1,1]){let A=S*20.4,I=zt(7.6,18,A,x),P=S>0?"right":"left",O=h+f+.3,z=O+4.2,F=z+3.7;u.take(sn(7.6,18,f+.3,.7,t,{front:[{...m,x:0,w:2.7}],back:[{...m,x:0,w:2.7}],[P]:Me(4,3.9,m)},h,c).move(A,0,1)),u.take(Lx(sn(7.6,18,4.2,.5,r.userData.tile,{front:Me(2,2.8,{..._,w:1.3,h:2.8,y:.8,chance:.6}),back:Me(2,2.8,{..._,w:1.3,h:2.8,y:.8}),[P]:Me(4,3.9,{..._,w:1.3,h:2.8,y:.8})},O,c),"tilework").move(A,0,1)),u.take(sn(7.6,18,3.7,.5,t,{front:Me(2,2.3,v),back:Me(2,2.3,v),[P]:Me(8,2,v)},z,c).move(A,0,1)),u.add("trim",he(I,O-.4,.24,.4),he(I,z-.3,.18,.3));for(let[W,q]of[[-1,-1],[1,-1],[-1,1],[1,1]])u.add("trim",G(.34,F-O,.34,A+W*3.72,O,x+q*8.92));u.add("timber",rn(I,F-.3,1.1,.24,.12)),u.add("beam",Be(I,1.25,()=>Ke(.95,.7,.12,F-.15))),u.add("roof",ee([[1.1,-.3],[-3.8,5]],I,F,{tile:n}));for(let W of[x-5.2,x+5.2])u.add("fine",Ze(.3,A,F+4.9,W)),a.put(pd(),Ot(new hn(.14,6,5)).translate(A,F+5.75,W))}u.into(a,o);let b=Dx(8);for(let S=0;S<10;S++)a.stamp(b[l()*8|0],(l()-.5)*36,6+l()*7,l()*6.28,1,0);for(let S=-21.6;S<=21.6;S+=7.2)a.light(S,.6,11,Tt,.2,13);for(let S of[-1,1])a.light(S*36,.8,-4,Tt,.14,12).light(S*36,.8,-13,Tt,.12,12).light(S*12,.8,-28,Tt,.1,12).light(S*20.4,14,9,Tt,.14,8);return a.light(0,20,9,Tt,.22,10).light(0,5,5,Zt,.28,6).light(0,26,6,Tt,.16,7).light(-11.5,17,9,Tt,.16,9).light(11.5,17,9,Tt,.16,9),a.put(an(),Ye(30,13,0,0,-7)),a}var Fx=()=>te(1.8,1.4,.8);function gd(){let i=yt({tint:12035980}),t=yt({tint:3354926}),e=yt({tint:3355965}),n=new ye;n.put(i,Ri(7,.6,10,0,0,0),G(3.6,5,6.6,0,.6,0),G(4.4,.5,7.4,0,5.6,0),G(3.2,.5,6,0,6.1,0));let r=6.6,s=o=>n.put(t,o);s(Ot(new hn(1,12,10)).scale(.95,1.05,2.3).translate(0,r+3.2,0)),s(ce([0,r+3.7,1.7],[0,r+5.5,2.8],.55,8)),s(Ot(new hn(.5,8,6)).scale(.8,.85,1.5).translate(0,r+5.7,3.4));for(let[o,a,l]of[[-.55,1.5,.7],[.55,1.5,0],[-.55,-1.6,0],[.55,-1.6,0]])s(ce([o,r+2.6,a],[o,r+1.3+l,a+(l?.7:.1)],.24,6)),s(ce([o,r+1.3+l,a+(l?.7:.1)],[o,r+l*1.2,a+(l?.3:0)],.19,6));s(ce([0,r+3.6,-2.1],[0,r+1.9,-2.9],.2,6)),s(ce([0,r+4,.1],[0,r+5.9,0],.5,8)),s(fe(.42,0,r+6.5,.05,8)),s(Ot(new hn(.5,8,6)).scale(1,.5,1).translate(0,r+6.85,0)),s(ce([-.5,r+5.5,.1],[-.6,r+4.4,1.2],.15,5)),s(ce([.5,r+5.5,.1],[.6,r+4.4,1.2],.15,5));for(let o=0;o<16;o++){let a=o*Math.PI/8,l=Math.cos(a)*6.4,c=Math.sin(a)*6.4;n.put(e,G(.12,1.1,.12,l,.6,c))}n.put(e,Ot(new on(6.4,.05,4,32)).rotateX(Math.PI/2).translate(0,1.7,0));for(let[o,a]of[[-4.6,6],[4.6,6],[-4.6,-6],[4.6,-6]])n.put(e,G(.14,3.4,.14,o,.6,a)),n.put(Fx(),fe(.3,o,4.2,a,8)),n.light(o,4.2,a,Tt,.7,5,2);return n.light(0,2,8,Zt,.7,8).light(0,2,-8,Zt,.4,8),n}function Jh(i=4){let t=yt({tint:6969414}),e=br([30,70,46],"in"),n=e,r=yt({tint:10524292}),s=new ye,o=we(i);s.put(r,re(8.5,1.1,0,0,0,20),re(9.3,.3,0,1.1,0,20));for(let a=0;a<7;a++){let l=o()*6.28,c=a?1.2+o()*3:0,u=Math.cos(l)*c,h=Math.sin(l)*c;s.put(t,ce([u,1.2,h],[u*1.9+(o()-.5)*2,11+o()*3,h*1.9+(o()-.5)*2],a?.5+o()*.5:1.3,7))}for(let a=0;a<9;a++){let l=a/9*6.28+o(),c=9+o()*9;s.put(t,ce([Math.cos(l)*2,10,Math.sin(l)*2],[Math.cos(l)*c,11.5+o()*3,Math.sin(l)*c],.34,5))}for(let a=0;a<9;a++){let l=o()*6.28,c=3+o()*11;s.put(e,ir(4.6+o()*2,Math.cos(l)*c,14.5+o()*3,Math.sin(l)*c,a,.6,3.4))}s.put(zi([44,100,62],"a"),qo(0,16.6,0,20,6.4,20,130,i,4.6)),s.put(zi([58,116,70],"b"),qo(0,17.6,0,15,5.4,15,60,i+3,4.2)),s.put(an(),Ye(24,24,0,0,0));for(let a=0;a<46;a++){let l=o()*6.28,c=5+o()*13,u=Math.cos(l)*c,h=Math.sin(l)*c,f=11+o()*2;s.put(t,ce([u,f,h],[u+(o()-.5)*.6,c>9.5?0:1.3+o()*5,h+(o()-.5)*.6],.05+o()*.07,4))}for(let a=0;a<16;a++){let l=o()*6.28,c=3+o()*13,u=Math.cos(l)*c,h=Math.sin(l)*c,f=6.5+o()*3.5;s.put(t,ce([u,f,h],[u,11.5,h],.03,3)),s.put(te(2,1.3,.5),fe(.24,u,f,h,6)),s.light(u,f,h,Zt,.5,4.2,1.9)}return s.light(0,2.4,7,Zt,.5,8).light(0,2.4,-7,Zt,.4,8),s}function xd(){let i=yt({tint:2906682}),t=yt({tint:12035980}),e=yt({tint:14866626}),n=yt({tint:3158586}),r=yt({tint:4864556}),s=[te(1.6,.5,.6),te(1.7,1.3,.3),te(1,.5,1.5)],o=new ye;o.put(i,re(34,.3,0,0,0,40)),o.put(t,re(27.2,.36,0,0,0,40)),o.put(i,re(24.8,.42,0,0,0,40));for(let a=0;a<72;a++){let l=a/72*6.283;o.put(r,Ot(new Ue(2,.12,.34)).rotateY(-l).translate(Math.cos(l)*26,.42,Math.sin(l)*26))}for(let a of[25.4,26.6])o.put(n,Ot(new on(a,.06,4,96)).rotateX(Math.PI/2).translate(0,.52,0));o.put(e,re(6.4,1.1,0,.4,0,8),re(7.4,.4,0,6.2,0,8),yn(6.6,3.4,0,6.6,0,{seg:16,swell:.02})),o.put(te(1.9,1.35,.42),fe(.34,0,11.4,0,8));for(let a=0;a<8;a++){let l=(a+.5)*Math.PI/4;o.put(e,re(.24,4.7,Math.cos(l)*5.6,1.5,Math.sin(l)*5.6,8)),o.put(te(1.8,1.4,.8),fe(.22,Math.cos(l)*5.6,5.6,Math.sin(l)*5.6,6))}o.light(0,5,0,Zt,1.1,8,3).light(0,3,9,Zt,.5,8),o.put(i,Ot(new Ce(6,6,.5,28)).rotateX(.5).translate(0,1.5,15.5));for(let a=0;a<12;a++){let l=a/12*6.283;o.put(s[a%3],fe(.34,Math.sin(l)*4.8,1.75+Math.cos(l)*2.3,15.9-Math.cos(l)*4.2+4.1,6))}o.put(e,Ot(new Ue(.2,.1,3.4)).rotateX(.5).translate(0,2.4,14.4),Ot(new Ue(2.4,.1,.2)).rotateX(.5).translate(1.2,1.8,15.6)),o.light(0,5,20,Tt,.9,8,3);for(let a=0;a<16;a++){let l=a/16*6.283,c=Math.cos(l)*31,u=Math.sin(l)*31;o.put(n,ce([c,.3,u],[c,4.6,u],.07,4)),o.put(te(1.8,1.4,.8),fe(.26,c,4.8,u,6)),o.light(c,4.8,u,Tt,.7,5.5,3.2)}return o}function _d(){let i=new Rn,t=[];return[[12597547,1],[3046747,0],[14262305,0],[3104680,0]].forEach(([e,n],r)=>{let s=new Rn,o=new Ie({color:new Ht(e).multiplyScalar(.7)}),a=new Ie({color:15260864}),l=new Ie({color:1381914}),c=new le(new Ue(1.6,n?1.5:.9,3.2),o);if(c.position.y=n?1.25:.95,s.add(c),n){let u=new le(new Ce(.6,.6,1.8,10).rotateX(Math.PI/2),o);u.position.set(0,1.5,1.9),s.add(u);let h=new le(new Ce(.22,.16,.9,8),l);h.position.set(0,2.5,2.3),s.add(h);let f=new le(new hn(.2,8,6),new Ie({color:new Ht(3,2.6,1.8)}));f.position.set(0,1.6,2.9),s.add(f)}else{let u=new le(new Ue(1.8,.12,3.3),a);u.position.y=2.6,s.add(u);for(let[f,d]of[[-.75,-1.5],[.75,-1.5],[-.75,1.5],[.75,1.5]]){let g=new le(new Ue(.08,1.3,.08),a);g.position.set(f,2,d),s.add(g)}let h=new le(new Ue(1.5,.08,3),new Ie({color:new Ht(2.4,1.7,.8)}));h.position.y=2.5,s.add(h)}for(let u of[-1,1]){let h=new le(new Ce(.36,.36,1.8,10).rotateZ(Math.PI/2),l);h.position.set(0,.5,u),s.add(h)}i.add(s),t.push(s)}),{g:i,cars:t}}var Bx=i=>{let t=(i%360+360)%360;return t>204&&t<336};function vd(){let i=new ye,t=we(5),e={u:8*3.3,v:8*3.2},n=[[84,90,110],[104,94,84],[72,84,104],[112,104,96]].map((M,E)=>{let T=uc({seed:40+E,lit:.13+E*.04,wall:M});return yt({map:T.map,emissiveMap:T.emissiveMap,glow:1.3,key:"block"+E})}),r=Qn(yt({tint:4869208})),s=Qn(yt({tint:1842468})),o=Qn(yt({tint:6975356})),a=Qn(yt({tint:3158586})),l=[te(1.9,1.2,.5),te(1.8,.35,.3),te(.4,1.6,1.4),te(1.7,.5,1.1),te(1.5,1.6,1.8),te(.5,1.5,.5)],c=[Zt,lc,li,Oi,Kn,li],u=0;for(let M=0;M<620&&u<430;M++){let E=t()*360,T=t()<.36,b=T?Dt+32+t()*10:Dt+44+t()*t()*420,S=Ae(E,b);if(Bx(E)&&b<Dt+150||!qs(S.x,S.z,12))continue;let A=10+t()*22,I=9+t()*16,P=T?7+t()*9:6+t()*t()*(b>Dt+130?52:24),O=t()*4|0,z=Math.atan2(-Math.cos(E*$e),Math.sin(E*$e))+(t()-.5)*.4,F=new ye;if(F.put(n[O],Vs(A,P,I,0,0,-I/2,e,t()*3)),F.put(r,G(A+.5,.5,I+.5,0,P,-I/2)),t()<.7){let W=(t()-.5)*(A-4),q=-I/2+(t()-.5)*(I-4);F.put(o,G(2.2,1.1,2.2,W,P+.5,q)),F.put(s,re(.9,1.5,W,P+1.6,q,10))}if(t()<.6&&F.put(n[O],G(3,2.6,3.4,(t()-.5)*(A-5),P+.5,-I/2+(t()-.5)*(I-5))),t()<.3){let W=(t()-.5)*(A-2);F.put(a,ce([W,P,-I/2],[W,P+4+t()*3,-I/2],.04,3))}if(t()<.25)for(let W=0;W<3;W++)F.put(o,G(.9,.6,.5,-A/2+2+W*3,3+W*3.2,.25));if(T||t()<.2){let W=t()*6|0;F.put(te(.62,.42,.2),G(A-1.2,2.3,.08,0,.4,.05)),F.put(r,G(A,.2,1.6,0,3,.8));for(let q=0;q<1+(t()*3|0);q++)F.put(l[(W+q)%6],G(2.4+t()*3,.9,.12,(t()-.5)*(A-5),3.3+t()*1.2,.12));F.light(0,2,2.6,c[W],.7,7).light(0,2,2.6,Zt,.5,9)}i.stamp(F,S.x,S.z,z,1,1.5),u++,t()<.2&&i.light(S.x+(t()-.5)*14,4.5,S.z+(t()-.5)*14,Tt,.5,9,3.4)}let h=yt({tint:13351322}),f=yt({tint:14672614}),d=yt({tint:4160092}),g=te(1.9,1.35,.42),x=yt({tint:9080988}),p=(M,E,T)=>{let b=Ae(M,E);qs(b.x,b.z,6)&&i.stamp(T(),b.x,b.z,Math.atan2(-Math.cos(M*$e),Math.sin(M*$e)),1,1.5)},m=()=>{let M=new ye,E=[];for(let T=0;T<=12;T++){let b=T/12;E.push(new xt(Math.max(.3,3.4*(1-Math.pow(b,1.7)*.93)),11*b))}return M.put(h,G(8,5,8,0,0,0),Ot(new si(E,10)).translate(0,5,0),G(5,4,5,0,0,5.5),Wn(3.6,3,0,4,5.5,4)),M.put(g,fe(.4,0,16.4,0,8)),M.put(te(1.7,.6,.2),G(1.2,.8,.04,.7,17.6,0)),M.put(x,ce([0,16.4,0],[0,18.4,0],.04,3)),M.light(0,3,9,Zt,.7,9).light(0,9,5,Zt,.5,8,3),M},_=()=>{let M=new ye;return M.put(f,G(12,6,12,0,0,0),re(4.2,1.2,0,6,0,12),yn(4.2,4.6,0,7.2,0,{seg:16,swell:.06}),re(1,19,7.5,0,5,8),re(1.5,.5,7.5,13,5,8),re(1.5,.5,7.5,17,5,8)),M.put(d,Wn(1.2,3,7.5,19,5,8)),M.put(g,fe(.3,7.5,22.2,5,6),fe(.34,0,12.6,0,6)),M.put(te(.5,1.7,.8),G(.5,1.2,.5,7.5,14,5)),M.light(0,3,9,li,.5,9).light(7.5,15,5,li,.6,6,3.2),M},v=()=>{let M=new ye;for(let[E,T]of[[-2.6,-2.6],[2.6,-2.6],[-2.6,2.6],[2.6,2.6]])M.put(f,ce([E,0,T],[E*.8,17,T*.8],.32,6));for(let E of[6,12])M.put(f,G(5.4,.3,.3,0,E,2.4),G(5.4,.3,.3,0,E,-2.4),G(.3,.3,5.4,2.4,E,0),G(.3,.3,5.4,-2.4,E,0));return M.put(f,re(4.6,5,0,17,0,14,null,5.2),Wn(5.4,1.6,0,22,0,14)),M.light(0,2,6,Tt,.4,9),M},y=()=>{let M=new ye;for(let[E,T]of[[-1.5,-1.5],[1.5,-1.5],[-1.5,1.5],[1.5,1.5]])M.put(x,ce([E,0,T],[E*.2,44,T*.2],.09,4));for(let E=4;E<44;E+=5){let T=1.5*(1-E/55);M.put(x,ce([-T,E,-T],[T,E+5,-T],.05,3),ce([T,E,T],[-T,E+5,T],.05,3),ce([T,E,-T],[T,E+5,T],.05,3),ce([-T,E,T],[-T,E+5,-T],.05,3))}for(let E of[30,36,40])M.put(f,G(.5,2,.3,.9,E,0),G(.5,2,.3,-.9,E,0));return M.spark(0,45,0,lc,5,2).spark(0,24,0,lc,3.4,2),M},w=M=>()=>{let E=new ye,T=we(M),b=T()*6|0;for(let S of[-4.5,4.5])E.put(x,ce([S,0,0],[S,13,0],.16,5));return E.put(x,G(11.4,5.6,.3,0,8.4,-.2)),E.put(te(.5,.52,.6),G(11,5.2,.1,0,8.6,.05)),E.put(l[b],G(11,1.6,.12,0,8.6,.08),G(3,3.4,.12,-3.2,10.4,.08)),E.light(0,11,5,c[b],.8,10).light(0,9,4,Kn,.5,9),E};for(let[M,E]of[[20,96],[74,150],[112,170],[146,110],[176,84],[60,240],[128,250],[-12,130]])p(M,Dt+E,m);for(let[M,E]of[[32,128],[100,220],[166,150],[-24,100]])p(M,Dt+E,_);for(let[M,E]of[[24,200],[140,200],[84,280]])p(M,Dt+E,v);for(let[M,E]of[[40,170],[118,130],[158,230],[4,210],[78,330]])p(M,Dt+E,y);return i}function yd(){let i=new ye,t=yt({tint:9208696}),e=yt({tint:11818558}),n=yt({tint:9322544}),r=yt({tint:13220256}),s=yt({tint:3158586}),o=te(1.9,1.4,.8),a=te(1.7,.7,.15);i.put(t,Ri(58,1,22,0,3.2,0),Ri(62,.5,26,0,4.2,0));for(let _=-26;_<=26;_+=6.5)for(let v of[-9,9])i.put(t,re(.55,3.4,_,-.2,v,8));for(let _=0;_<7;_++)i.put(t,G(14-_*.2,4.8-_*.55,1.2,0,-.6,11.6+_*1.2));for(let _=-30.5;_<=30.5;_+=1.9)for(let v of[-12.6,12.6])(Math.abs(_)>7.5||v<0)&&i.put(s,G(.12,1.1,.12,_,4.7,v));for(let _=-12.6;_<=12.6;_+=1.8)for(let v of[-30.5,30.5])i.put(s,G(.12,1.1,.12,v,4.7,_));for(let _ of[-12.6,12.6])i.put(s,G(61,.07,.07,0,5.75,_));for(let _ of[-30.5,30.5])i.put(s,G(.07,.07,25.2,_,5.75,0));let l=In("granite",{stone:[112,116,124],course:.9,block:1.5,rows:4,cols:2,joint:.78,vary:.08,grime:.08}),c=l.userData.tile,u=yt({tint:8159368}),h=yt({tint:12622404});i.put(l,ee([[.55,0],[.55,.5],[.22,.72],[.22,.95],[0,.95],[0,5.3]],zt(11.8,11.8),4.7,{tile:c}),ee([[0,0],[0,5]],zt(9.2,9.2),10.9,{tile:c})),i.put(u,he(zt(11.8,11.8),10,.45,.6),G(11.2,.3,11.2,0,10.6,0),he(zt(9.2,9.2),15.9,.55,.55),G(10.3,.25,10.3,0,16.45,0));for(let[_,v]of[[0,1],[0,-1],[1,0],[-1,0]]){let y=Math.atan2(_,v),w=(M,E)=>M.rotateY(y).translate(_*E,0,v*E);i.put(u,w(G(4.4,2.7,.14,0,6.5,0),5.9),w(G(6.4,3,.1,0,11.8,0),4.6)),i.put(h,w(G(3.8,2.1,.06,0,6.8,0),5.99)),i.put(te(1.9,1.5,.9),w(G(8.8,.1,.08,0,15.72,0),4.66))}i.light(0,14.6,7,Tt,.3,4).light(0,14.6,-7,Tt,.2,4).light(7,14.6,0,Tt,.2,4).light(-7,14.6,0,Tt,.2,4);for(let[_,v]of[[-24,8],[24,8],[-24,-8],[24,-8],[-12,10.5],[12,10.5]])i.put(r,re(.5,5.2,_,4.7,v,8),re(.8,.3,_,9.8,v,8)),i.put(o,fe(.4,_,10.5,v,10)),i.light(_,10.6,v,Tt,.9,7,4.6);for(let _ of[-28,28])i.put(s,ce([_,4.7,-10],[_,13.5,-10],.07,4)),i.put(a,G(2.6,1.5,.06,_+1.35,11.9,-10));for(let _ of[-52,52])for(let v of[26,-22]){for(let y=0;y<4;y++){i.put(r,re(1.9-y*.3,.5,_,2.2+y*2.6,v,10));for(let w=0;w<6;w++){let M=w*Math.PI/3;i.spark(_+Math.cos(M)*(1.9-y*.3),2.9+y*2.6,v+Math.sin(M)*(1.9-y*.3),Zt,1.3,1)}}i.put(r,re(.55,11,_,0,v,8)),i.put(o,fe(.5,_,11.5,v,10)),i.light(_,11.6,v,Tt,.9,7,5)}i.light(0,6,15,Zt,.7,11).light(-11,5,12,Zt,.5,8).light(11,5,12,Zt,.5,8);let f=yt({tint:14272162}),d=yt({tint:15262938});i.put(f,G(2.2,.7,3.4,0,4.7,10)),i.put(d,Ot(new hn(1,10,8)).scale(.72,.6,1.25).translate(0,6,10.1),fe(.4,0,6.55,9.75,8),fe(.42,0,6.5,8.75,8),Ot(new hn(1,8,6)).scale(.26,.24,.42).translate(0,6.3,8.35),Wn(.07,.3,-.22,6.82,8.8,5),Wn(.07,.3,.22,6.82,8.8,5));for(let[_,v,y]of[[-20,9.5,.9],[20,9.5,-.9],[-21,-8,2.2],[21,-8,-2.2]]){let w=new Fe().makeRotationY(y).setPosition(_,0,v),M=(E,T)=>i.put(E,T.applyMatrix4(w));M(f,G(2,.6,3.1,0,4.7,0)),M(d,Ot(new hn(1,10,8)).scale(.66,.55,1.15).translate(0,5.85,.1)),M(d,fe(.38,0,6.35,-1.2,8)),M(d,Ot(new hn(1,8,6)).scale(.24,.22,.4).translate(0,6.15,-1.6)),M(d,fe(.36,0,6.4,-.3,8))}i.light(0,7.4,11.4,Zt,.6,3.2);for(let _ of[-13.5,13.5]){i.put(r,re(.7,.5,_,4.7,9.6,8),re(.42,7.4,_,5.2,9.6,8,null,.26)),i.put(o,fe(.36,_,12.9,9.6,8));for(let v=0;v<6;v++){let y=.95-v*.1,w=6+v*1.1;i.put(r,re(y,.12,_,w,9.6,8));for(let M=0;M<6;M++){let E=M*Math.PI/3+v*.5;i.spark(_+Math.cos(E)*y,w+.3,9.6+Math.sin(E)*y,Zt,1,1)}}i.light(_,9,9.6,Zt,.6,5)}let g=br([52,108,66],"b"),x=yt({tint:10835258}),p=Array.from({length:8},(_,v)=>jr(v+51)),m=we(14);for(let _=-27;_<=27;_+=4.5)for(let v of[-11.4,11.4])(Math.abs(_)>8||v<0)&&(i.put(x,re(.4,.6,_,4.7,v,7,null,.5)),i.put(g,ir(.62,_,5.9,v,_,1)));for(let _=0;_<16;_++){let v=(m()-.5)*54,y=(m()<.7?1:-1)*(9.8+m()*1.2);Math.abs(v)<2.6||i.stamp(p[m()*8|0],v,y,m()*6.28,1,4.7)}return i.put(an(),Ye(10.5,10.5,0,4.7,0)),i}function Md(i){let t=new ye,e=we(77),n=yt({tint:9208696});for(let o=0;o<150;o++){let a=e()*6.28,l=52+e()*80;t.spark(Math.cos(a)*l,.35,Math.sin(a)*l,Zt,1.25,3)}for(let o of i.concat([114,66,41,-27,144,180]))for(let a=0;a<12;a++){let l=Ae(o+(e()-.5)*8,Dt-8-e()*16);t.spark(l.x,.35,l.z,Zt,1.35,3)}for(let o=0;o<46;o++){let a=e()*6.28,l=36+e()*12;t.spark(Math.cos(a)*l*1.3,.35,Math.sin(a)*l,Zt,1.3,3)}let r=-78,s=-46;t.put(n,re(1.2,1.4,r,0,s,10));for(let o=0;o<10;o++){let a=o/10*6.28;for(let l=0;l<9;l++){let c=l/8,u=6-c*5.2;t.spark(r+Math.cos(a)*u,.6+Math.sin(c*Math.PI*.62)*7.5,s+Math.sin(a)*u,[Kn,li,Oi][o%3],1.6,1)}}for(let o=0;o<16;o++)t.spark(r+(e()-.5)*.6,1.5+o*.95,s+(e()-.5)*.6,Kn,1.9,1);return t.light(r,2,s,li,.9,8),t}function bd(i){let t=[],e=ci(64);return[[14240570,86,44,.05,.3],[3837913,-64,78,-.04,2.1],[14856762,30,-84,.045,4],[4829306,-98,-8,-.05,5.2],[15262418,100,-52,.04,1.2]].forEach(([n,r,s,o,a])=>{let l=new Rn,c=new Ie({color:new Ht(n).multiplyScalar(.55)}),u=new Ie({color:new Ht(n).multiplyScalar(.85)}),h=new le(new hn(1,12,6,0,Math.PI*2,Math.PI/2,Math.PI/2).scale(1.3,.8,2.2),c);h.position.y=.7,l.add(h);let f=new le(new Ue(2.3,.14,2.8),u);f.position.y=2.5,l.add(f);for(let[g,x]of[[-1,-1.2],[1,-1.2],[-1,1.2],[1,1.2]]){let p=new le(new Ce(.05,.05,1.8),c);p.position.set(g,1.6,x),l.add(p)}let d=new pi(new ii({map:e,color:16760944,blending:fn,depthWrite:!1,transparent:!0}));d.scale.set(5,5,1),d.position.set(0,2.2,0),l.add(d),l.scale.setScalar(1.5),i.add(l),t.push({g:l,cx:r,cz:s,speed:o,phase:a,rx:16+Math.abs(r)*.1,rz:11})}),t}function Sd(){let i=new Rn,t=Gs("#1f7480","#185e68",12,!1),e=new Ie({map:t,color:13158600}),n=new Ie({color:12159566}),r=new Ie({color:4007959}),s=new Ie({color:new Ht(3,2,.9)}),o=new Ie({map:Gs("#b33a2e","#efe6d2",8),color:10263708,side:un}),a=new le(new hn(1,20,10,0,Math.PI*2,Math.PI/2,Math.PI/2).scale(1.75,1.15,5.4),e);a.position.y=1,i.add(a);let l=new le(new Cn(1,24).rotateX(-Math.PI/2).scale(1.62,1,5.2),r);l.position.y=.86,i.add(l);let c=new le(new on(1,.07,6,40).rotateX(Math.PI/2).scale(1.75,1,5.4),n);c.position.y=1.02,i.add(c);for(let x of[-2.6,-.6,1.6,3.2]){let p=new le(new Ue(3.3-Math.abs(x)*.32,.14,.6),n);p.position.set(0,.98,x),i.add(p)}let u=new le(new Ce(1.7,1.7,3.6,14,1,!0,-Math.PI/2,Math.PI).rotateX(Math.PI/2).rotateZ(Math.PI/2),o);u.position.set(0,1.5,.4),u.scale.set(1,.9,1),i.add(u);for(let[x,p]of[[-1.5,-1.4],[1.5,-1.4],[-1.5,2.2],[1.5,2.2]]){let m=new le(new Ce(.05,.05,1.6),n);m.position.set(x,1.8,p),i.add(m)}for(let x of[-1,1]){let p=new le(new Ce(.05,.05,4.4),n);p.position.set(x*2.6,1,-.8),p.rotation.set(.25,0,x*1.15),i.add(p);let m=new le(new Ue(.5,.06,1),n);m.position.set(x*4.5,.2,-1.3),i.add(m)}let h=[];for(let[x,p,m]of[[5,3.4,4.2],[-4.8,4.2,5]]){let _=new le(new Ce(.06,.06,p-.9),n);_.position.set(0,.9+(p-.9)/2,x),i.add(_);let v=new le(new Ue(.56,.74,.56),s);v.position.set(0,p+.3,x),i.add(v);let y=new le(new Nn(.5,.36,4).rotateY(Math.PI/4),r);y.position.set(0,p+.86,x),i.add(y);let w=new pi(new ii({map:ci(),color:16758880,blending:fn,depthWrite:!1,transparent:!0,opacity:.6}));w.scale.set(m,m,1),w.position.copy(v.position),i.add(w),h.push(w)}let f=new le(new xn(1.5,.8),new Ie({color:14609752,side:un}));f.position.set(.8,5.6,-4.8),i.add(f);let d=new le(new Ce(.03,.03,1.4),n);d.position.set(0,5.4,-4.8),i.add(d);let g=new le(new Cn(12,24).rotateX(-Math.PI/2),new Ie({map:ci(),color:16752704,blending:fn,transparent:!0,opacity:.13,depthWrite:!1}));return g.position.set(0,.12,0),i.add(g),i.scale.setScalar(1.7),i.userData={lights:h,flag:f},i}function Ed(){let i=Math.sin,t=Math.cos,e=Math.hypot,n=(h,f,d)=>h+(f-h)*d,r=h=>h<0?0:h>1?1:h,s=(h,f,d)=>{let g=r((d-h)/(f-h));return g*g*(3-2*g)},o=(h,f)=>{let d=e(h[0],h[1],h[2]);h=[h[0]/d,h[1]/d,h[2]/d];let g=h[0]*f[0]+h[1]*f[1]+h[2]*f[2];return f=[f[0]-h[0]*g,f[1]-h[1]*g,f[2]-h[2]*g],d=e(f[0],f[1],f[2]),f=[f[0]/d,f[1]/d,f[2]/d],[h[0],h[1],h[2],f[0],f[1],f[2],h[1]*f[2]-h[2]*f[1],h[2]*f[0]-h[0]*f[2],h[0]*f[1]-h[1]*f[0]]},a=h=>{let f=e(h[0],h[1],h[2]);h=[h[0]/f,h[1]/f,h[2]/f];let d=Math.abs(h[0])>.9?[0,0,1]:[1,0,0],g=d[0]*h[0]+d[1]*h[1]+d[2]*h[2],x=[d[0]-h[0]*g,d[1]-h[1]*g,d[2]-h[2]*g],p=e(x[0],x[1],x[2]);return x=[x[0]/p,x[1]/p,x[2]/p],[x[0],x[1],x[2],h[0],h[1],h[2],x[1]*h[2]-x[2]*h[1],x[2]*h[0]-x[0]*h[2],x[0]*h[1]-x[1]*h[0]]},l=(h,f,d)=>{let g=x=>h[Math.max(0,Math.min(h.length-1,x))];return[0,1,2].map(x=>{let p=g(f-1)[x],m=g(f)[x],_=g(f+1)[x],v=g(f+2)[x];return .5*(2*m+(_-p)*d+(2*p-5*m+4*_-v)*d*d+(3*m-p-3*_+v)*d*d*d)})};class c{constructor(f,d,g,x){this.lo=f,this.hi=d,this.cell=g,this.band=x,this.n=[0,1,2].map(p=>Math.ceil((d[p]-f[p])/g)+1),this.g=new Float32Array(this.n[0]*this.n[1]*this.n[2]).fill(x)}lay(f,d,g=.3,x=!1){let{lo:p,hi:m,cell:_,n:v,g:y}=this,w=g+this.band,M=(P,O)=>Math.max(0,Math.min(v[O]-1,P));if(g=Math.max(g,.001),f[3]+w<p[0]||f[0]-w>m[0]||f[4]+w<p[1]||f[1]-w>m[1]||f[5]+w<p[2]||f[2]-w>m[2])return this;let E=M(Math.floor((f[0]-w-p[0])/_),0),T=M(Math.ceil((f[3]+w-p[0])/_),0),b=M(Math.floor((f[1]-w-p[1])/_),1),S=M(Math.ceil((f[4]+w-p[1])/_),1),A=M(Math.floor((f[2]-w-p[2])/_),2),I=M(Math.ceil((f[5]+w-p[2])/_),2);for(let P=A;P<=I;P++){let O=p[2]+P*_;for(let z=b;z<=S;z++){let F=p[1]+z*_,W=(P*v[1]+z)*v[0]+E;for(let q=E;q<=T;q++,W++){let K=d(p[0]+q*_,F,O),rt=y[W];if(x){let vt=Math.max(g-Math.abs(rt+K),0)/g;y[W]=Math.max(rt,-K)+vt*vt*g*.25}else{let vt=Math.max(g-Math.abs(rt-K),0)/g;y[W]=Math.min(rt,K)-vt*vt*g*.25}}}}return this}egg(f,d,g,x=null,p=!1,m=null){let _=x?Math.max(d[0],d[1],d[2]):0,v=Math.min(d[0],d[1],d[2]);return this.lay(x?[f[0]-_,f[1]-_,f[2]-_,f[0]+_,f[1]+_,f[2]+_]:[f[0]-d[0],f[1]-d[1],f[2]-d[2],f[0]+d[0],f[1]+d[1],f[2]+d[2]],(y,w,M)=>{let E=y-f[0],T=w-f[1],b=M-f[2];if(x){let I=E*x[0]+T*x[1]+b*x[2],P=E*x[3]+T*x[4]+b*x[5],O=E*x[6]+T*x[7]+b*x[8];E=I,T=P,b=O}let S=e(E/d[0],T/d[1],b/d[2]),A=e(E/(d[0]*d[0]),T/(d[1]*d[1]),b/(d[2]*d[2]));return(A>1e-6?S*(S-1)/A:-v)+(m?m(y,w,M):0)},g,p)}limb(f,d,g,x,p,m=null,_=null,v=!1){let y=d[0]-f[0],w=d[1]-f[1],M=d[2]-f[2],E=y*y+w*w+M*M||1e-9,T=Math.max(g,x);return this.lay([Math.min(f[0],d[0])-T,Math.min(f[1],d[1])-T,Math.min(f[2],d[2])-T,Math.max(f[0],d[0])+T,Math.max(f[1],d[1])+T,Math.max(f[2],d[2])+T],(b,S,A)=>{let I=b-f[0],P=S-f[1],O=A-f[2],z=(I*y+P*w+O*M)/E;z=z<0?0:z>1?1:z;let F=I-y*z,W=P-w*z,q=O-M*z;if(m){let K=(F*m[0]+W*m[1]+q*m[2])*(m[3]-1);F+=m[0]*K,W+=m[1]*K,q+=m[2]*K}return e(F,W,q)-(g+(x-g)*z)+(_?_(b,S,A):0)},p,v)}run(f,d,g,x=5,p=null,m=null){let _=(v,y)=>{let w=d.length?d[v]:d,M=d.length?d[Math.min(d.length-1,v+1)]:d;return w+(M-w)*y};for(let v=0;v<f.length-1;v++)for(let y=0;y<x;y++)this.limb(l(f,v,y/x),l(f,v,(y+1)/x),_(v,y/x),_(v,(y+1)/x),g,p,m);return this}ring(f,d,g,x,p=null,m=!1){let _=d+g;return this.lay([f[0]-_,f[1]-_,f[2]-_,f[0]+_,f[1]+_,f[2]+_],(v,y,w)=>{let M=v-f[0],E=y-f[1],T=w-f[2];if(p){let b=M*p[0]+E*p[1]+T*p[2],S=M*p[3]+E*p[4]+T*p[5],A=M*p[6]+E*p[7]+T*p[8];M=b,E=S,T=A}return e(e(M,T)-d,E)-g},x,m)}drum(f,d,g,x,p,m=null,_=null){let v=e(d,g);return this.lay([f[0]-v,f[1]-v,f[2]-v,f[0]+v,f[1]+v,f[2]+v],(y,w,M)=>{let E=y-f[0],T=w-f[1],b=M-f[2];if(m){let I=E*m[0]+T*m[1]+b*m[2],P=E*m[3]+T*m[4]+b*m[5],O=E*m[6]+T*m[7]+b*m[8];E=I,T=P,b=O}let S=e(E,b)-d+x,A=Math.abs(T)-g+x;return e(Math.max(S,0),Math.max(A,0))+Math.min(Math.max(S,A),0)-x+(_?_(E,T,b):0)},p)}block(f,d,g,x,p=null){let m=e(d[0],d[1],d[2]);return this.lay([f[0]-m,f[1]-m,f[2]-m,f[0]+m,f[1]+m,f[2]+m],(_,v,y)=>{let w=_-f[0],M=v-f[1],E=y-f[2];if(p){let A=w*p[0]+M*p[1]+E*p[2],I=w*p[3]+M*p[4]+E*p[5],P=w*p[6]+M*p[7]+E*p[8];w=A,M=I,E=P}let T=Math.abs(w)-d[0]+g,b=Math.abs(M)-d[1]+g,S=Math.abs(E)-d[2]+g;return e(Math.max(T,0),Math.max(b,0),Math.max(S,0))+Math.min(Math.max(T,b,S),0)-g},x)}read(f,d,g){let{lo:x,cell:p,n:m,g:_}=this,v=Math.max(0,Math.min(m[0]-1.001,(f-x[0])/p)),y=Math.max(0,Math.min(m[1]-1.001,(d-x[1])/p)),w=Math.max(0,Math.min(m[2]-1.001,(g-x[2])/p)),M=v|0,E=y|0,T=w|0,b=v-M,S=y-E,A=w-T,I=(T*m[1]+E)*m[0]+M,P=m[0],O=m[0]*m[1],z=_[I]+(_[I+1]-_[I])*b,F=_[I+P]+(_[I+P+1]-_[I+P])*b,W=_[I+O]+(_[I+O+1]-_[I+O])*b,q=_[I+O+P]+(_[I+O+P+1]-_[I+O+P])*b;return z+(F-z)*S+(W+(q-W)*S-(z+(F-z)*S))*A}front(f,d,g=3.4){let x=this.cell*.5,p=g,m=this.read(f,d,p);for(let _=0;_<400;_++){let v=this.read(f,d,p-x);if(v<0)return p-x*m/(m-v);if(m=v,p-=x,p<g-3)break}return g-1.5}skin(f,d,g=null,x=null){let{lo:p,cell:m,n:_,g:v}=this,[y,w,M]=_,E=1,T=y,b=y*w,S=new Int32Array(y*w*M).fill(-1),A=[],I=[],P=m*3.2,O=Math.max(0,Math.floor((f-p[1])/m)),z=Math.min(w-2,Math.ceil((d-p[1])/m)),F=[0,E,T,T+E,b,b+E,b+T,b+T+E],W=[0,1,0,1,0,1,0,1],q=[0,0,1,1,0,0,1,1],K=[0,0,0,0,1,1,1,1],rt=[0,2,4,6,0,1,4,5,0,1,2,3],vt=[1,3,5,7,2,3,6,7,4,5,6,7],Gt=new Float32Array(8);for(let Ct=0;Ct<M-1;Ct++)for(let N=O;N<=z;N++){let V=(Ct*w+N)*y;for(let ht=0;ht<y-1;ht++,V++){let B=v[V];if(B>P||B<-P)continue;if(g||x){let dt=p[0]+(ht+.5)*m,Mt=p[1]+(N+.5)*m,Qt=p[2]+(Ct+.5)*m,Xt=U=>dt>U[0]&&Mt>U[1]&&Qt>U[2]&&dt<U[3]&&Mt<U[4]&&Qt<U[5];if(g&&!Xt(g)||x&&Xt(x))continue}let nt=0;for(let dt=0;dt<8;dt++)Gt[dt]=v[V+F[dt]],Gt[dt]<0&&(nt|=1<<dt);if(nt===0||nt===255)continue;let st=0,lt=0,ft=0,_t=0;for(let dt=0;dt<12;dt++){let Mt=rt[dt],Qt=vt[dt];if(Gt[Mt]<0==Gt[Qt]<0)continue;let Xt=Gt[Mt]/(Gt[Mt]-Gt[Qt]);st+=W[Mt]+(W[Qt]-W[Mt])*Xt,lt+=q[Mt]+(q[Qt]-q[Mt])*Xt,ft+=K[Mt]+(K[Qt]-K[Mt])*Xt,_t++}S[V]=A.length/3,A.push(p[0]+(ht+st/_t)*m,p[1]+(N+lt/_t)*m,p[2]+(Ct+ft/_t)*m)}}let ie=(Ct,N,V,ht,B)=>{Ct<0||N<0||V<0||ht<0||(B?I.push(Ct,ht,V,Ct,V,N):I.push(Ct,N,V,Ct,V,ht))};for(let Ct=1;Ct<M-1;Ct++)for(let N=Math.max(1,O);N<=z;N++){let V=(Ct*w+N)*y+1;for(let ht=1;ht<y-1;ht++,V++){let B=v[V]<0;v[V+E]<0!==B&&ie(S[V-T-b],S[V-b],S[V],S[V-T],!B),v[V+T]<0!==B&&ie(S[V-E-b],S[V-E],S[V],S[V-b],!B),v[V+b]<0!==B&&ie(S[V-E-T],S[V-T],S[V],S[V-E],!B)}}let de=new Float32Array(A.length),_e=new Float32Array(A.length/3),it=m,mt=this.band*.3,Lt=this.band*.8;for(let Ct=0;Ct<A.length;Ct+=3){let N=A[Ct],V=A[Ct+1],ht=A[Ct+2],B=this.read(N+it,V,ht)-this.read(N-it,V,ht),nt=this.read(N,V+it,ht)-this.read(N,V-it,ht),st=this.read(N,V,ht+it)-this.read(N,V,ht-it),lt=e(B,nt,st)||1;B/=lt,nt/=lt,st/=lt,de[Ct]=B,de[Ct+1]=nt,de[Ct+2]=st,_e[Ct/3]=.25+.75*(.45*r(this.read(N+B*mt,V+nt*mt,ht+st*mt)/mt)+.55*r(this.read(N+B*Lt,V+nt*Lt,ht+st*Lt)/Lt))}return{P:new Float32Array(A),N:de,A:_e,I:new Uint32Array(I)}}}function u(h){let f=(N,V,ht)=>.075*i(11.5*N+1.6*i(4*V))*i(11.5*V+1.6*i(4*ht))*i(11.5*ht+1.6*i(4*N)),d=(N,V,ht)=>.034*i(23*N+2*i(6*V))*i(23*V+2*i(6*ht))*i(23*ht+2*i(6*N)),g=(N,V,ht,B,nt,st,lt,ft)=>{let _t=[V[0]-N[0],V[1]-N[1],V[2]-N[2]],dt=a(_t),Mt=[],Qt=Math.ceil(nt*8);for(let Xt=0;Xt<=Qt;Xt++){let U=n(ht,B,Xt/Qt),R=Xt/Qt*nt*6.2832,$=n(lt,ft,U)+st,ot=t(R)*$,gt=i(R)*$;Mt.push([N[0]+_t[0]*U+dt[0]*ot+dt[6]*gt,N[1]+_t[1]*U+dt[1]*ot+dt[7]*gt,N[2]+_t[2]*U+dt[2]*ot+dt[8]*gt])}return Mt},x=[0,1,0],p=[0,0,1];for(let N=0;N<7;N++){let V=-.6+N*.66,ht=6+.8*i(N*1.9);h.run([[V*.9+.4,.3,-1.3],[V,2.6,-1.9],[V*1.05,ht-1.2,-2.2],[V*1.1,ht,-2.05]],[.75,.62,.5,.26],.22,4)}for(let N=0;N<9;N++){let V=N/9*3.3-.4;h.run([[1.2+t(V)*2.5,.5,-1.4-i(V)*1.4],[1.2+t(V)*3.2,.22,-1.4-i(V)*1.9]],[.55,.2],.25,2)}let m=(N,V)=>{for(let ht=0;ht<N.length-1;ht++)if(V<=N[ht+1][0])return n(N[ht][1],N[ht+1][1],r((V-N[ht][0])/(N[ht+1][0]-N[ht][0])));return N[N.length-1][1]},_=[[.3,-2.9],[1.5,-3.4],[3,-4],[4.4,-4.9],[5.9,-5.5],[7.4,-5.7],[8.9,-5.6],[9.6,-5.25]],v=[[.3,-2],[1.5,-2.7],[3,-3.25],[5,-3.8],[7.5,-3.95],[9.6,-4]];for(let N=0;N<6;N++){let V=N/5,ht=9.5-.22*Math.abs(i(N*2.1))-(N===0?.1:0),B=[],nt=[];for(let st of[.35,1.5,3,4.4,5.9,7.4,8.6,ht])B.push([n(m(v,st),m(_,st),V),st,0+.045*st+.12*i(N*2.6)]),nt.push(st>9?.2:.3+.012*st);h.run(B,nt,.13,4,[0,0,1,1.5])}h.run([[-5.3,9.5,.42],[-5.72,9.95,.7],[-5.95,9.6,1.05]],[.22,.2,.06],.1,4),h.run([[-2.2,.4,.05],[-2.55,2.6,.1],[-2.85,5,.2],[-2.78,7,.32],[-2.68,7.95,.4]],[.38,.36,.34,.3,.14],.13,5,[0,0,1,1.5]),h.egg([1.1,2.7,-1.35],[2.7,3.2,1],.5),h.drum([-2.5,1.12,.95],1.05,.34,.14,.2,o([1,0,.35],[.35,0,-1]));for(let N=0;N<3;N++)h.ring([-2.5,1.12,.95],.92-N*.3,.07,.03,a([-.33,0,.94]));let y=.27,w=5.6,M=16.5,E=[[-4,7.8],[-3.16,8],[.67,9.9],[1.65,11.1],[2.6,12.8],[3.1,15.3],[3.6,17]],T=N=>{for(let V=0;V<E.length-1;V++)if(N<=E[V+1][0])return n(E[V][1],E[V+1][1],r((N-E[V][0])/(E[V+1][0]-E[V][0])));return 17},b=N=>5.95-.1*N+.17*i(N*2.7+.6)+.1*i(N*6.1),S=(N,V,ht,B=0)=>{let nt=N-y*(1-.5*s(.7,1,r((V-w)/(M-w)))),st=r((V-w)/(M-w)),lt=3.42*(1-.15*s(.68,1,st))+B,ft=2.3*(1-.13*s(.68,1,st))+B;return[e(nt/lt,(ht-.1)/ft),ft,st,nt]};h.lay([y-3.8,5,-2.7,y+3.8,16.9,2.8],(N,V,ht)=>{let[B,nt,st,lt]=S(N,V,ht),ft=Math.atan2(ht,lt),_t=T(lt)+.1*i(lt*3.3),dt=s(-.5,.5,ht)*s(_t-.08,_t+.1,V),Mt=(B-1-.085*dt)*nt*.94+.06*i(ft*9+1.5*i(V*.55))*(1-.65*st)*(1-.5*dt)+f(N,V,ht)+.05*s(.14,0,Math.abs(V-_t-.02))*s(-.5,.5,ht);return Math.max(Mt,b(lt)+(dt>.5,0)-V,V-M-.25)},.2),h.lay([y-3.4,4.8,-2.4,y+3.4,7.6,2.5],(N,V,ht)=>{let[B,nt,,st]=S(N,V,ht,-.3);return Math.max((B-1)*nt,V-b(st)-1.5)},.25,!0);for(let[N,V,ht,B]of[[.1,-.3,.2,1],[2.5,2.4,2.55,-1]])h.limb([N,1.3,.1],[V,6.7,.3],.78,1.02,.4).egg([n(N,V,.55),4.3,-.28],[.98,1.95,1.02],.5).egg([V,6.9,.45],[1.03,1,1],.4),h.egg([ht,.56,-.4],[.82,.6,.95],.3).egg([ht,.62,.85],[.94,.64,1.55],.35).egg([ht,.42,1.9],[1.02,.42,.78],.3).egg([N+B*.72,1.35,.05],[.26,.3,.3],.2).egg([N-B*.74,1.2,-.1],[.24,.28,.3],.2),[[.7,.31,2.62],[.24,.25,2.66],[-.14,.23,2.56],[-.48,.21,2.4],[-.78,.19,2.18]].forEach(([nt,st,lt])=>h.egg([ht+B*nt,.3,lt],[st,st*.85,st*1.55],.1));h.egg([.25,15.6,.1],[3.15,2.4,2.1],.5).egg([.08,18.3,.2],[2.52,2.3,1.62],.7).egg([0,21.15,.05],[2.74,2.95,1.76],.7);for(let N of[-1,1])h.egg([N*1.28,21.35,1.26],[1.34,1.02,.62],.5).egg([N*1.52,20.98,1.83],[.13,.13,.1],.08).egg([N*3,22.3,0],[1.06,1.06,1.08],.55).limb([N*.9,23.9,-.1],[N*2.65,23,-.05],.75,.6,.6);h.limb([0,23.4,-.05],[0,25.5,.15],1.2,1.04,.6).egg([.08,17.82,1.76],[.2,.26,.22],.12,null,!0).limb([0,22.6,1.72],[0,19.4,1.8],.12,.1,.25,null,null,!0);let A=(N,V,ht,B)=>h.lay([-3.3,N-1,-2.4,3.4,N+1,2.5],(nt,st,lt)=>{let ft=nt-.15,_t=e(ft/2.9,(lt-.1)/1.98);return e((_t-1)*1.98,st-N-ht*ft)-V-(B?.035*i(Math.atan2(lt,ft)*34+(st-N)*16):.02*i(Math.atan2(lt,ft)*7+N))},.1);A(16.3,.33,0),A(16.82,.3,.02),A(17.26,.26,.035),A(17.52,.17,-.07,!0),h.egg([-2.2,17.5,1.5],[.34,.3,.3],.1).run([[-2.25,17.4,1.6],[-2.45,16.5,1.85],[-2.35,15.6,2]],[.16,.14,.2],.06,4);let I=[-3.88,17.45,-.1],P=[-3.18,18.7,3.25],O=[3.88,17.45,0],z=[3.72,18.45,2.6];h.limb([-3.08,22.2,0],I,.96,.8,.45).egg(I,[.82,.84,.84],.3).limb(I,P,.78,.54,.35),h.block([-2.95,19.72,3.62],[.92,.9,.24],.22,.22).egg([-2.6,19.35,3.78],[.5,.6,.22],.2).egg([-3.3,19.5,3.78],[.4,.62,.18],.2),[[-3.64,1,.185],[-3.18,1.28,.2],[-2.72,1.38,.205],[-2.26,1.2,.2]].forEach(([N,V,ht])=>h.limb([N,20.4,3.66],[N*1.004,20.4+V*.55,3.72],ht,ht*.96,.08).limb([N*1.004,20.4+V*.55,3.72],[N*1.006,20.4+V,3.7],ht*.96,ht*.82,.05)),h.run([[-2.15,19.2,3.55],[-1.74,19.95,3.72],[-1.7,20.75,3.76]],[.27,.23,.18],.1,4);let F=(N,V,ht)=>[n(N[0],V[0],ht),n(N[1],V[1],ht),n(N[2],V[2],ht)];h.ring(F(I,P,.9),.7,.15,.05,a([P[0]-I[0],P[1]-I[1],P[2]-I[2]])),h.run([...g(I,P,.3,.72,2.25,.14,.78,.54),[-4.35,19.2,2.05],[-4.6,20.1,2.1],[-4.95,20.75,2.15]],[.13,.17,.19,.2,.2,.2,.2,.2,.2,.2,.2,.2,.2,.2,.2,.2,.2,.2,.2,.21,.23,.2],.06,3,null,d),h.egg([-5.02,20.6,2.12],[.2,.46,.38],.12,o([1,.5,0],[-.5,1,0])).egg([-5.32,20.98,2.18],[.42,.19,.26],.1,o([1,.15,.1],x));let W=N=>[3.95-.6*N/30.5,N,3.3];h.limb([3.08,22.2,0],O,.96,.8,.45).egg(O,[.82,.84,.84],.3).limb(O,z,.78,.56,.35),h.egg([3.6,18.75,3.18],[.86,.92,.72],.25);for(let N=0;N<4;N++)h.limb([4.22,19.42-N*.42,3.55],[3.2,19.38-N*.42,3.95],.21,.2,.07).limb([3.2,19.38-N*.42,3.95],[2.95,19.36-N*.42,3.4],.2,.17,.07);h.run([[2.95,19.2,3],[3.05,19.75,3.5],[3.4,20.05,3.75]],[.26,.23,.18],.1,4).ring(F(O,z,.86),.74,.15,.05,a([z[0]-O[0],z[1]-O[1],z[2]-O[2]])),h.run([...g(O,z,.25,.7,2.25,.14,.78,.56),[4.5,19,1.5],[4.75,19.95,1.6],[5.05,20.65,1.7]],[.13,.17,.19,.2,.2,.2,.2,.2,.2,.2,.2,.2,.2,.2,.2,.2,.2,.2,.2,.21,.23,.2],.06,3,null,d),h.egg([5.12,20.5,1.68],[.2,.46,.38],.12,o([1,-.5,0],[.5,1,0])).egg([5.42,20.9,1.74],[.42,.19,.26],.1,o([1,-.15,.1],x)),h.egg([0,27.55,0],[1.6,1.75,1.85],.4).egg([0,26.85,.6],[1.47,1.5,1.36],.5).egg([0,28.1,.95],[1.3,.9,.93],.5),h.egg([0,25.95,.98],[1.22,.8,.97],.5).egg([0,25.48,1.72],[.4,.32,.3],.3);for(let N of[-1,1])h.egg([N*.9,26.9,1.1],[.56,.52,.56],.45).egg([N*.72,26.4,1.64],[.44,.36,.3],.4),h.run([[N*.24,27.5,1.84],[N*.76,27.62,1.8],[N*1.26,27.42,1.46]],[.15,.17,.12],.3,4),h.run([[.17,27.48],[.46,27.6],[.8,27.64],[1.08,27.56],[1.3,27.4]].map(([V,ht])=>[N*V,ht,h.front(N*V,ht)+.01]),[.06,.085,.09,.075,.035],.03,4),h.egg([N*.69,27.2,2.16],[.56,.32,.36],.26,null,!0).egg([N*.69,27.18,1.64],[.4,.27,.22],.04),h.run([[N*.3,27.14,1.84],[N*.47,27.29,1.91],[N*.7,27.335,1.91],[N*.93,27.27,1.81],[N*1.08,27.14,1.64]],[.03,.06,.068,.06,.03],.04,4),h.run([[N*.34,27.33,1.83],[N*.7,27.47,1.86],[N*1.05,27.33,1.66]],[.04,.055,.04],.1,4),h.run([[N*.3,27.14,1.84],[N*.5,27.03,1.84],[N*.72,27,1.83],[N*.93,27.05,1.76],[N*1.08,27.14,1.64]],[.03,.035,.038,.035,.03],.04,4),h.ring([N*.68,27.17,1.852],.135,.03,.02,a([N*.05,-.05,1]),!0).egg([N*.68,27.17,1.875],[.055,.055,.035],.015,null,!0),h.egg([N*.28,26.5,2.11],[.17,.14,.2],.13).egg([N*.17,26.41,2.22],[.085,.04,.09],.04,null,!0),h.egg([N*1.64,26.95,.28],[.2,.62,.42],.1).egg([N*1.76,27,.42],[.1,.36,.2],.06,null,!0).limb([N*1.66,26.35,.35],[N*1.72,25.92,.55],.16,.13,.06).ring([N*1.8,25.44,.75],.46,.1,.04,a([.45*N,0,1]));h.limb([0,27.45,1.9],[0,26.76,2.28],.13,.16,.22).egg([0,26.62,2.32],[.22,.19,.19],.15).limb([0,26.45,2.28],[0,26.38,2.08],.065,.065,.05),h.limb([0,26.33,2.12],[0,26.2,2.15],.04,.045,.06,null,null,!0);let q=N=>26.03+.52*N*N,K=(N,V)=>[-.57,-.43,-.28,-.14,0,.14,.28,.43,.57].map(ht=>{let B=q(ht)+N(ht);return[ht,B,h.front(ht,B)+V]}),rt=N=>1-Math.pow(Math.abs(N)/.57,2);h.run(K(N=>.078*rt(N)-(N===0?.014:0),.03),[.02,.05,.072,.086,.068,.086,.072,.05,.02],.03,3),h.run(K(N=>-.1*rt(N),.03),[.02,.062,.092,.108,.112,.108,.092,.062,.02],.03,3),h.egg([0,25.72,2.14],[.28,.08,.12],.14,null,!0),[[27.94,.4],[28.1,.5],[28.26,.4]].forEach(([N,V])=>h.run([[-V,N-.05],[-V*.5,N+.02],[0,N-.01],[V*.5,N+.02],[V,N-.05]].map(([ht,B])=>[ht,B,h.front(ht,B)+.015]),.062,.025,4)),h.egg([0,28.1,h.front(0,28.1)+.03],[.1,.2,.07],.03),h.lay([-2.1,26.4,-2.4,2.1,29.9,2.4],(N,V,ht)=>{let B=N/1.82,nt=(V-27.62)/1.84,st=ht/2.2,lt=e(B,nt,st),ft=e(B/1.82,nt/1.84,st/2.2),_t=ft>1e-6?lt*(lt-1)/ft:-1;_t+=.05*i(Math.atan2(N,ht+.3)*30+2.6*i((V-27)*1.4))*s(26.6,27.4,V);let dt=Math.max(0,Math.abs(N)-1.3);return Math.max(_t,(27.89-V)*.82+(ht-1.1)*.58+.12*N*N-1.7*dt*dt)},.1),h.lay([-1.5,28.7,-1.6,1.6,31.6,1.5],(N,V,ht)=>{let B=r((V-29)/2),nt=N-.22*B,st=ht+.12+.25*B,lt=n(1.08,.5,B*B*.6+B*.4),ft=Math.atan2(st,nt),_t=Math.max(e(nt,st)-lt-.1*i(ft*2-V*5.4),V-31,28.8-V);return Math.min(_t,e(N-.2,V-31.05,ht+.35)-.3)*.85},.18);let vt=(N,V,ht)=>N.map((B,nt)=>[B[0]+V*i(nt*1.9+ht),B[1],B[2]+V*.5*t(nt*1.6+ht)]);for(let N of[-1,1])for(let V=0;V<3;V++)h.run(vt([[N*(1.78+V*.08),27.4,-.75-V*.3],[N*(2.05+V*.16),26.2,-.6-V*.3],[N*(2.08+V*.26),25.2,-.25-V*.3],[N*(2.25+V*.34),24.3,.3-V*.3],[N*(2.75+V*.36),23.75,.4-V*.3],[N*(3.25+V*.3),23.45,.2-V*.3]],.1,V*2+N),[.3,.31,.29,.25,.19,.07],.1,4);for(let N=0;N<11;N++){let V=(N-5)/5,ht=19.2+1.5*Math.abs(i(N*2.3))+1.3*Math.abs(V);h.run(vt([[V*1.35,28.3,-1.72],[V*1.9,26.6,-2.02],[V*2.4,24.8,-1.98],[V*2.65,23,-1.92-.12*(N%2)],[V*2.7,21.2,-1.88-.12*(N%2)],[V*2.6,ht,-1.74]],.13,N*1.7),[.42,.46,.44,.4,.33,.1],.12,5)}{let N=[],V=[];for(let ht=0;ht<=8;ht++){let B=(218+ht/8*178)*Math.PI/180,nt=i(ht/8*Math.PI);N.push([-1.55+t(B)*.86,29.72+i(B)*.86,.95-.25*nt]),V.push(.03+.15*nt)}h.run(N,V,.03,4,[0,0,1,1.6])}let Gt=o([1,0,-.2],[.05,1,.1]);h.egg([-3.05,26.45,1.45],[.98,1.2,.18],.1,Gt,!1,(N,V,ht)=>.035*i(V*13+.5)*s(.25,.5,Math.abs(N+3.05))),h.limb([-3.05,25.2,1.5],[-3.05,27.3,1.66],.36,.3,.1,null,(N,V,ht)=>.04*i(V*13+.5)),h.egg([-3.05,27.62,1.98],[.32,.22,.46],.14,o([1,0,0],[0,1,.3])).egg([-3.05,27.42,1.76],[.38,.32,.36],.16);for(let N of[-1,1])h.ring([-3.05+N*.55,26.75,1.58],.2,.045,.03,a([.2,0,1])).egg([-3.05+N*.2,27.68,2.22],[.07,.06,.07],.02);h.run([[-3.05,25.35,1.5],[-3.2,24.8,1.3],[-3.42,24.4,.85],[-3.15,24.2,.3],[-2.5,24.3,-.05],[-1.85,24.55,-.75],[0,24.75,-1.3],[1.9,24.5,-.7],[2.42,24.1,.35],[2.2,23.3,1.25],[1.5,22.2,1.72],[.45,21.45,1.98],[-.75,21.75,1.92],[-1.65,22.7,1.62],[-2.05,23.6,1.15],[-2.3,24.2,.5]],[.34,.36,.4,.42,.43,.43,.43,.43,.43,.43,.43,.43,.43,.43,.42,.4],.14,6,null,d),h.run([[2.25,23.5,1.2],[2.6,22.5,1.5],[2.62,21.5,1.62],[2.25,20.75,1.78],[1.72,20.6,1.86],[1.5,21.05,1.9],[1.8,21.35,1.9],[2.02,21.1,1.92]],[.4,.36,.3,.25,.2,.16,.12,.07],.08,6,null,d);let ie=(N,V,ht=4)=>{h.run(N,V*.5,.05,ht);for(let B=0;B<N.length-1;B++)for(let nt=0;nt<ht;nt++)h.egg(l(N,B,nt/ht),[V,V,V],.03);h.egg(N[N.length-1],[V,V,V],.03)};ie([[-1.2,24.55,.95],[-.85,24,1.4],[0,23.75,1.62],[.85,24,1.4],[1.2,24.55,.95]],.17),h.egg([0,23.42,1.7],[.22,.3,.14],.05),ie([[-1.5,23.7,1.45],[-1,22.95,1.82],[0,22.55,1.98],[1,22.95,1.82],[1.5,23.7,1.45]],.19),h.egg([0,22.2,2.02],[.26,.34,.15],.05),ie([[-.6,21.5,1.95],[-.62,20.4,1.92],[-.5,19.3,1.9],[-.1,18.55,1.92],[.38,18.3,1.94],[.85,18.6,1.9],[1,19.4,1.86],[.9,20.5,1.88],[.75,21.4,1.95]],.21,4),h.egg([.38,17.92,1.98],[.24,.34,.2],.06).run([[.3,21,1.84],[-.5,19.3,1.74],[-1.5,18.1,1.5],[-2.25,17.75,1.1]],.085,.04,5);let[de,,_e]=W(0),[it,,mt]=W(30.5);h.limb([de,.3,_e],[it,31,mt],.19,.17,.04).egg([de,.92,_e],[.78,.86,.78],.12).egg([de,.15,_e],[.55,.2,.55],.1);for(let[N,V]of[[1.95,.44],[2.3,.3],[2.62,.4],[2.95,.26],[29.25,.3],[29.6,.24],[29.92,.32],[30.2,.22]]){let ht=W(N);h.egg(ht,[V,.15,V],.06)}h.run([[it-1.2,30.75,mt],[it-.6,30.45,mt],[it,30.38,mt],[it+.6,30.45,mt],[it+1.2,30.75,mt]],[.2,.2,.22,.2,.2],.06,4,[0,0,1,1.5]);for(let N of[-1,1])h.run([[it+N*1.2,30.75,mt],[it+N*1.42,31.5,mt],[it+N*1.2,32.25,mt],[it+N*.92,32.8,mt],[it+N*1.05,33.3,mt]],[.2,.24,.22,.16,.03],.05,5,[0,0,1,1.6]),h.run([[it+N*.12,30.6,mt+.1],[it+N*.5,30.95,mt+.14],[it+N*.55,31.3,mt+.1]],[.1,.13,.03],.04,3);h.limb([it,30.4,mt],[it,31.2,mt],.2,.16,.05).lay([it-.6,31,mt-.4,it+.6,34.9,mt+.4],(N,V,ht)=>{let B=r((V-31.1)/3.7),nt=.07+.42*Math.pow(i(Math.PI*Math.pow(B,.42)),1)*(1-.25*B);return Math.max((Math.abs(N-it)/nt+Math.abs(ht-mt)/(nt*.42)-1)*nt*.38,31.1-V,V-34.8)},.04),h.egg([it+.3,29,mt-.1],[.34,.3,.3],.1).run([[it+.35,28.9,mt-.15],[it+1,27.9,mt-.9],[it+1.25,26.3,mt-1.9],[it+.85,24.9,mt-2.7],[it+.25,24.1,mt-3.15]],[.24,.52,.6,.46,.2],.12,6,[.75,0,.66,2],(N,V,ht)=>.03*i(V*5+N*3));let Lt=o([.66,0,-.75],[.75,0,.66]),Ct=[4.72,14.6,2.85];h.drum(Ct,.94,.62,.08,.06,Lt,(N,V,ht)=>-.1*(1-Math.abs(V)/.62)-(e(N,ht)>.8?.05:0)).ring(Ct,.5,.06,.03,Lt),h.run([[W(15.6)[0],15.6,3.3],[4.3,15.5,3.1],[Ct[0],15.5,Ct[2]]],.07,.03,3).run([[W(14.2)[0],14.2,3.3],[4.2,14.3,3.1]],.07,.03,2)}return function(f){let d=new c(f.lo,f.hi,f.cell,f.band);return u(d),d.skin(f.from,f.to,f.only||null,f.omit||null)}}function Ox(){return new He({uniforms:Bn.merge([It.fog,{clay:{value:0}}]),fog:!0,vertexShader:`attribute float ao; varying vec3 vN; varying vec3 vW; varying float vA;
      #include <fog_pars_vertex>
      void main() { vA = ao; vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; vN = normalize(mat3(modelMatrix) * normal); vec4 mvPosition = viewMatrix * w; gl_Position = projectionMatrix * mvPosition;
      #include <fog_vertex>
      }`,fragmentShader:`uniform float clay; varying vec3 vN; varying vec3 vW; varying float vA;
      #include <fog_pars_fragment>
      vec3 lamp(vec3 at, float power, vec3 n, vec3 v) { vec3 l = at - vW; float d = length(l); l /= d; float nl = max(dot(n, l), 0.0), nh = max(dot(n, normalize(l + v)), 0.0);
        return vec3(1.0, 0.86, 0.6) * power * (0.3 * nl + (0.42 * pow(nh, 9.0) + 1.5 * pow(nh, 70.0)) * step(0.0, dot(n, l))) / (1.0 + d * d / 2600.0); }
      void main() { vec3 n = normalize(vN), v = normalize(cameraPosition - vW), r = reflect(-v, n), gold = vec3(1.0, 0.59, 0.13);
        float occ = vA * vA * (3.0 - 2.0 * vA);
        if (clay > 0.5) { float l = 0.25 + 0.75 * max(0.0, dot(n, normalize(vec3(0.35, 0.5, 0.8)))); gl_FragColor = vec4(vec3(0.78, 0.76, 0.72) * l * (0.35 + 0.65 * occ), 1.0); }
        else {
        vec3 c = lamp(vec3(-13.0, 6.0, 16.0), 0.9, n, v) + lamp(vec3(13.0, 6.0, 16.0), 0.9, n, v) + lamp(vec3(0.0, 9.0, 30.0), 0.5, n, v) + lamp(vec3(-30.0, 52.0, 62.0), 0.95, n, v) + lamp(vec3(34.0, 46.0, 58.0), 0.6, n, v) + lamp(vec3(-24.0, 7.0, -3.0), 0.55, n, v) + lamp(vec3(24.0, 7.0, -3.0), 0.55, n, v) + lamp(vec3(-10.0, 6.0, -16.0), 0.5, n, v) + lamp(vec3(10.0, 6.0, -16.0), 0.5, n, v);
        c += mix(vec3(0.2, 0.13, 0.06), vec3(0.03, 0.045, 0.09), n.y * 0.5 + 0.5);                                                                 // the glow off the deck below, the sky above
        c += vec3(0.07, 0.1, 0.19) * smoothstep(-0.1, 0.8, r.y) + vec3(0.42, 0.26, 0.1) * smoothstep(0.25, -0.6, r.y) * 0.8 + vec3(1.0, 0.98, 0.9) * pow(max(dot(r, normalize(vec3(0.08, 0.18, -1.0))), 0.0), 120.0);   // what the polish mirrors: sky, the lit water, the moon
        c += vec3(0.2, 0.28, 0.5) * pow(1.0 - max(dot(n, v), 0.0), 3.0) * (0.2 + 0.3 * max(n.y, 0.0));                                              // the edge the moon picks out
        gl_FragColor = vec4(gold * c * (0.06 + 0.94 * occ * occ) * 0.56, 1.0); }
      #include <fog_fragment>
      #include <tonemapping_fragment>
      #include <colorspace_fragment>
      }`})}var Ys=[-1.82,24.98,.62,1.82,28.8,9],zx=(i=1)=>[{lo:[-6.8,-.4,-4.8],hi:[6.4,16.7,4.6],cell:.15*i,band:.6,from:-9,to:16.42},{lo:[-6.4,16.2,-3.6],hi:[6.3,25.1,4.8],cell:.105*i,band:.45,from:16.3,to:24.92},{lo:[-4.8,24.6,-3.3],hi:[5.6,35.2,4.2],cell:.08*i,band:.36,from:24.8,to:99,omit:[Ys[0]+.09,Ys[1]+.09,Ys[2]+.09,Ys[3]-.09,Ys[4]-.09,9]},{lo:[-2.4,24.5,.1],hi:[2.4,29.3,3.2],cell:.04*i,band:.3,from:-9,to:99,only:Ys}],kx={lo:[-6.6,-.4,-4.8],hi:[6.4,35.4,4.8],cell:.32,band:.7,from:-9,to:99},Hx=(i,t)=>{let e=new Le;return e.setAttribute("position",new Pe(i.P,3)),e.setAttribute("normal",new Pe(i.N,3)),e.setAttribute("ao",new Pe(i.A,1)),e.setIndex(new Pe(i.I,1)),new le(e,t)};function wd(i){return new Promise(t=>{let e=()=>setTimeout(()=>t(Ed()(i)),0);try{let n=new Worker(URL.createObjectURL(new Blob(["const cast = ("+Ed.toString()+")(); onmessage = e => { const r = cast(e.data); postMessage(r, [r.P.buffer, r.N.buffer, r.A.buffer, r.I.buffer]); };"],{type:"text/javascript"})));n.onmessage=r=>{t(r.data),n.terminate()},n.onerror=()=>{n.terminate(),e()},n.postMessage(i)}catch{e()}})}async function Td(i,t=16.7,e=1){let n=Ox(),r=(a,l)=>{let c=Hx(a,n);return c.position.y=t,c.visible=!l,i.add(c),c},s=[r(await wd(kx),!0)];return{fine:(await Promise.all(zx(e).map(wd))).map(a=>r(a,!1)),plain:s,mat:n}}var Ad=i=>Array.from({length:i},(t,e)=>jr(e+31));function Rd(){let i=new ye,t=we(91),e={u:24,v:8*2.9},n=[[150,126,100],[128,112,104],[156,140,118],[112,120,132],[146,110,96]].map((x,p)=>{let m=uc({seed:70+p,lit:.26,wall:x});return yt({map:m.map,emissiveMap:m.emissiveMap,glow:1.4,key:"pol"+p})}),r=[yt({tint:11117980}),yt({tint:11972772}),yt({tint:10196878})],s=yt({tint:12169892}),o=yt({tint:1381915}),a=yt({tint:8225420}),l=yt({tint:6047280}),c=yt({tint:10130046}),u=br([52,108,66],"b"),h=[12728906,3108784,14725690,15262418,3115626,13656110,9063080].map(x=>yt({tint:x})),f=Ad(8),d=te(2,1.5,.8);i.put(yt({tint:4867648}),Xn(Dt+28.2,Dt+150,1.53,206,128,96));let g=x=>Math.atan2(-Math.cos(x*$e),Math.sin(x*$e));for(let x=Dt+37;x<Dt+136;){let p=8+t()*4,m=Math.min(12.5,4.2+(x-Dt-37)*.1);for(let _=207;_<333;){let v=6.5+t()*6.5,y=t()<.2,w=_+v/(x*$e)/2,M=Ae(w,x+p/2);if(_+=(v+(y?2.6:.3))/(x*$e),!qs(M.x,M.z,7)||x>Dt+100&&t()<.3)continue;let E=m*(.62+t()*.38),T=t()*5|0,b=new ye,S=r[t()*3|0],A=()=>(t()-.5)*(v-2.4),I=()=>(t()-.5)*(p-2.4);if(b.put(n[T],Vs(v,E,p,0,0,0,e,t()*3)),b.put(S,G(v,.18,p,0,E,0)),b.put(s,G(v,.6,.22,0,E,p/2-.11),G(v,.6,.22,0,E,-p/2+.11),G(.22,.6,p,v/2-.11,E,0),G(.22,.6,p,-v/2+.11,E,0)),t()<.62){let P=A(),O=I();b.put(a,G(1.5,.9,1.5,P,E+.18,O)),b.put(o,re(.62,1.2,P,E+1.08,O,9))}if(t()<.42){let P=A()*.6,O=-p/2+1.5;b.put(n[T],G(2.4,2.3,2.6,P,E+.18,O)),b.put(S,G(2.7,.14,2.9,P,E+2.48,O)),t()<.6&&(b.put(d,fe(.1,P,E+2.1,O+1.42,5)),b.light(P,E+2,O+1.8,Zt,.75,3.6,1.7))}if(t()<.28){let P=I();b.put(c,ce([-v/2+.4,E+1.9,P],[v/2-.4,E+1.9,P],.02,3),ce([-v/2+.4,E+.2,P],[-v/2+.4,E+1.9,P],.04,4),ce([v/2-.4,E+.2,P],[v/2-.4,E+1.9,P],.04,4));for(let O=-v/2+1;O<v/2-1;O+=.9+t()*.5)t()<.75&&b.put(h[t()*7|0],G(.62,.95,.03,O,E+.92,P))}if(t()<.2){let P=A(),O=I();b.put(l,G(1.9,.08,.9,P,E+.62,O));for(let[z,F]of[[-1,-1],[1,-1],[-1,1],[1,1]])b.put(l,G(.07,.44,.07,P+z*.88,E+.18,O+F*.38))}if(t()<.3)for(let P=0;P<3;P++){let O=A(),z=p/2-.6;b.put(l,re(.2,.3,O,E+.18,z,6)),b.put(u,ir(.34,O,E+.72,z,P,1))}if(t()<.24){let P=A(),O=I();b.stamp(f[t()*8|0],P,O,t()*6.28,1,E+.18),t()<.5&&b.stamp(f[t()*8|0],P+.7,O+.3,t()*6.28,1,E+.18),b.light(P,E+2.2,O,Zt,.5,3.4)}if(t()<.08)for(let P=0;P<=8;P++)b.spark(-v/2+P*v/8,E+.82,p/2,[Zt,Oi,li,Tt][P%4],1.1,1);if(t()<.16){let P=A(),O=I();b.put(a,Ot(new Ce(.42,.05,.22,10)).rotateX(-.7).translate(P,E+1.05,O),ce([P,E+.18,O],[P,E+.95,O],.03,4))}t()<.46&&(b.put(d,fe(.13,0,3.4,p/2+.5,5)),b.light(0,3.4,p/2+1.1,Zt,.95,6,2.2)),i.stamp(b,M.x,M.z,g(w),1,1.52)}x+=p+2.8}return i}function Cd(){let i=new ye,t=we(123),e=yt({tint:10259052}),n=yt({tint:15327174}),r=yt({tint:3158586}),s=yt({tint:7031860}),o=yt({tint:11680306}),a=20,l=15.5;i.put(yt({tint:6971212}),Xn(a+1,a+7.5,.05,0,360,40)),i.put(yt({tint:8746592}),Xn(a+1,a+4.6,.1,0,360,40)),i.put(e,re(a+3,.16,0,0,0,40)),i.put(an(),Ye(a+11,a+11,0,0,0)),i.put(te(.9,.3,.3),Xn(3.2,3.5,.2,0,360,32)),i.put(te(.9,.75,.2),Xn(4,4.2,.2,0,360,32)),i.put(te(.85,.85,.8),Xn(2.5,2.7,.2,0,360,32)),i.put(n,re(2.2,.5,0,.16,0,8));for(let[_,v]of[[-1,-1],[1,-1],[-1,1],[1,1]])i.put(n,G(.16,2.6,.16,_*1.1,.66,v*1.1));i.put(o,G(2.9,.14,2.9,0,3.26,0)),i.put(n,yn(1.2,1.3,0,3.4,0,{seg:10})),i.put(te(2.4,1.6,.6),fe(.3,0,1.3,0,8)),i.light(0,1.6,0,Zt,1.5,6,4),i.put(r,ce([.9,0,.9],[.9,l,.9],.14,6)),i.put(te(2.2,1.8,1),fe(.4,.9,l+.3,.9,8));let c=[Zt,Tt,Oi,Zt,li,Tt];for(let _=0;_<18;_++){let v=_/18*6.283,y=Math.cos(v)*(a+1.6),w=Math.sin(v)*(a+1.6);i.put(r,ce([y,0,w],[y,6.2,w],.08,5)),i.put(te(1.9,1.5,.9),fe(.2,y,6.3,w,6)),i.light(y,6,w,Tt,.6,6.5);for(let M=1;M<19;M++){let E=M/19,T=Math.sin(E*Math.PI)*1.5;i.spark(.9+(y-.9)*E,l+(6.2-l)*E-T,.9+(w-.9)*E,c[(_+M)%6],1.2,1)}_%3===0&&i.light(y*.55,8.5,w*.55,Zt,1,9.5)}i.put(s,Ri(11,1.1,4.4,0,.16,-(a+6.2))),i.put(o,G(11.4,4.6,.2,0,1.26,-(a+8.5))),i.put(te(1.5,1,.45),G(9,.5,.1,0,5.2,-(a+8.3)));for(let _ of[-6.6,6.6])i.put(r,G(1.4,2.6,1.2,_,.16,-(a+5.6)));let u=Ad(8);for(let _=0;_<5;_++)i.stamp(u[_],-3+_*1.5,-(a+6.2),0,1,1.26);i.light(0,4.6,-(a+3.6),Oi,.9,7).light(-4,4.6,-(a+4),Kn,.6,6).light(4,4.6,-(a+4),Zt,.8,6);for(let _=0;_<52;_++){let v=t()*6.283;if(Math.abs(v-4.712)<.42)continue;let y=a+3.6+t()*3.2;i.stamp(u[t()*8|0],Math.cos(v)*y,Math.sin(v)*y,t()*6.28,1,.16)}for(let[_,v]of[[.5,2],[2.64,4]])i.stamp(Yh(v),Math.cos(_)*(a+8),Math.sin(_)*(a+8),-_+Math.PI/2,1.1,0);let h=[14696544,15771688,2930070,4221152,13650112,15756352,9067232,15257664],f=yt({tint:10119756}),d=yt({tint:15262422}),g=yt({tint:2763830}),x=_=>{let v=new ye,y=yt({tint:h[_%8]}),w=yt({tint:h[(_+3)%8]}),M=_%3;return _%4!==3?(v.put(y,Wn(.62,1,0,0,0,9)),v.put(w,re(.2,.5,0,.92,0,7,null,.22),G(.5,.08,.5,0,.3,0))):(v.put(g,G(.16,.85,.2,-.11,0,0),G(.16,.85,.2,.11,0,0)),v.put(d,Wn(.42,.75,0,.72,0,8)),v.put(y,fe(.17,0,1.7,0,6))),v.put(f,fe(.14,0,1.58,0,7),ce([-.24,1.36,0],M?[-.42,1.78,.2]:[-.5,1.1,.25],.055,4),ce([.24,1.36,0],M?[.42,1.78,.2]:[.5,1.1,.25],.055,4)),v},p=Array.from({length:12},(_,v)=>x(v)),m=[[6.6,22],[10,34],[13.4,46],[16.8,58]].map(([_,v],y)=>{let w=new ye;for(let M=0;M<v;M++){let E=M/v*6.283;w.stamp(p[(M*5+y*3)%12],Math.cos(E)*_,Math.sin(E)*_,-E,.95+M*7%5*.03,0)}return{rad:_,q:w}});return{b:i,rings:m}}function Pd(){let i=new ye,t=we(57),e=[3107396,3832396,2644540].map(s=>Qn(yt({tint:s}))),n=te(.95,.45,.62),r=te(1,.8,.86);for(let s of[90,66,41,17,114,144,174,200,235,305,-62]){let o=Ae(s+(t()-.5)*3,Dt-6-t()*7);for(let a=0;a<20;a++){let l=t()*6.283,c=Math.sqrt(t())*6.5,u=.42+t()*.55;i.put(e[a%3],Ot(new Cn(u,9,.4,5.9)).rotateX(-Math.PI/2).rotateY(t()*6.28).translate(o.x+Math.cos(l)*c,.05,o.z+Math.sin(l)*c*.7))}for(let a=0;a<4;a++){let l=t()*6.283,c=Math.sqrt(t())*5,u=o.x+Math.cos(l)*c,h=o.z+Math.sin(l)*c*.7;i.put(e[1],ce([u,0,h],[u,.42,h],.025,3)),i.put(a%2?n:r,Ot(new Nn(.24,.42,6)).rotateX(Math.PI).translate(u,.6,h),Wn(.13,.34,u,.46,h,5))}}return i}var Zs={zenith:263692,mid:660006,horizon:1780302,fog:1186872,water:264726};function Vx(i,t,e={}){let n=t.map(X=>X.deg),r=n.filter(X=>X!==void 0),s=Math.max(0,t.findIndex(X=>X.home)),o=t.map((X,J)=>(s+J)%t.length),a=new Ql({canvas:i,antialias:!1,powerPreference:"high-performance"});a.toneMapping=Ds,a.toneMappingExposure=1.12,a.outputColorSpace=mn;let l=new yo;l.fog=new vo(Zs.fog,8e-4),l.background=new Ht(Zs.mid);let c=new En(38,1,2,4200),u=matchMedia("(prefers-reduced-motion: reduce)"),h=we(11);l.add(new le(new hn(3600,32,16),new He({side:Pn,depthWrite:!1,fog:!1,uniforms:{zenith:{value:new Ht(Zs.zenith)},mid:{value:new Ht(Zs.mid)},horizon:{value:new Ht(Zs.horizon)}},vertexShader:"varying vec3 d; void main(){ d = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`uniform vec3 zenith; uniform vec3 mid; uniform vec3 horizon; varying vec3 d;
      void main(){ float y = max(d.y, 0.0); vec3 c = mix(horizon, mid, smoothstep(0.0, 0.22, y)); c = mix(c, zenith, smoothstep(0.18, 0.8, y)); c += vec3(0.16, 0.09, 0.05) * exp(-y * 18.0) * 0.3; gl_FragColor = vec4(c, 1.0);
      #include <tonemapping_fragment>
      #include <colorspace_fragment>
      }`})));let f=[],d=[],g=[];for(let X=0;X<3200;X++){let J=h()*2-1,at=h()*Math.PI*2,Bt=Math.abs(J)*.96+.035,Et=Math.sqrt(1-Bt*Bt);f.push(Math.cos(at)*Et*3300,Bt*3300,Math.sin(at)*Et*3300);let se=h();d.push(se<.03?3.6:se<.2?2.3:1.35),g.push(h()*6.28)}let x=new Le;x.setAttribute("position",new ae(f,3)),x.setAttribute("size",new ae(d,1)),x.setAttribute("phase",new ae(g,1));let p=new As(x,new He({transparent:!0,depthWrite:!1,fog:!1,blending:fn,uniforms:{time:{value:0},dpr:{value:1}},vertexShader:"attribute float size; attribute float phase; uniform float time; uniform float dpr; varying float tw; void main(){ tw = 0.72 + 0.28 * sin(time * (0.6 + phase * 0.25) + phase * 9.0); gl_PointSize = size * dpr; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:"varying float tw; void main(){ float d = length(gl_PointCoord - 0.5); float a = smoothstep(0.5, 0.05, d) * tw; gl_FragColor = vec4(vec3(0.92, 0.95, 1.0) * a * 1.5, a); }"}));l.add(p);let m=document.createElement("canvas");m.width=m.height=256;{let X=m.getContext("2d");X.fillStyle="#fff6e0",X.beginPath(),X.arc(128,128,96,0,7),X.fill(),X.fillStyle="rgba(190,180,160,.5)";for(let[J,at,Bt]of[[150,100,16],[176,150,11],[130,170,9],[190,110,7]])X.beginPath(),X.arc(J,at,Bt,0,7),X.fill();X.globalCompositeOperation="destination-out",X.beginPath(),X.arc(72,116,92,0,7),X.fill()}let _=new pi(new ii({map:new mi(m),color:new Ht(2.4,2.3,2),fog:!1,depthWrite:!1}));_.scale.set(150,150,1),_.position.set(230,520,-2900),l.add(_);let v=new pi(new ii({map:ci(256),color:7311320,fog:!1,depthWrite:!1,blending:fn,opacity:.32}));v.scale.set(1500,1500,1),v.position.copy(_.position),l.add(v);let y=document.createElement("canvas");y.width=y.height=256;{let X=y.getContext("2d"),J=X.createImageData(256,256),at=we(19),Bt=[];for(let Et=0;Et<22;Et++)Bt.push([1+(at()*5|0),1+(at()*5|0),at()*6.28,at()]);for(let Et=0;Et<256;Et++)for(let se=0;se<256;se++){let Nt=0;for(let[Yt,xe,Qe,Je]of Bt)Nt+=Math.sin((se*Yt+Et*xe)/256*6.2832+Qe)*Je/(Yt+xe);let $t=Math.max(0,Math.min(1,Nt*.9-.12)),ge=(Et*256+se)*4;J.data[ge]=150,J.data[ge+1]=170,J.data[ge+2]=215,J.data[ge+3]=$t*$t*255}X.putImageData(J,0,0)}let w=new mi(y);w.wrapS=w.wrapT=Ei,w.repeat.set(3,3);let M=new le(new xn(9e3,9e3).rotateX(Math.PI/2),new Ie({map:w,transparent:!0,opacity:.2,depthWrite:!1,fog:!1}));M.position.y=620,M.layers.set(1),l.add(M);{let X=new Tn,J=[[-290,0],[-215,14],[-165,24],[-125,44],[-85,58],[-55,80],[-30,92],[-10,104],[9,108],[30,98],[55,92],[85,64],[130,42],[170,26],[225,12],[300,0]];X.moveTo(-290,-700);for(let[Et,se]of J)X.lineTo(Et,se);X.lineTo(300,-700);let at=new le(new mr(X),new Ie({color:1055286,fog:!1})),Bt=Ae(91.5,3350);at.position.set(Bt.x,0,Bt.z),at.lookAt(0,0,0),l.add(at),at.userData.at=Bt,l.userData.hill=at}let E=document.createElement("canvas");E.width=E.height=256;{let X=E.getContext("2d"),J=X.createImageData(256,256),at=we(3),Bt=[];for(let se=0;se<30;se++)Bt.push([3+(at()*14|0),3+(at()*14|0),at()*6.28,.4+at()]);let Et=(se,Nt)=>{let $t=0;for(let[ge,Yt,xe,Qe]of Bt)$t+=Math.sin((se*ge+Nt*Yt)/256*6.2832+xe)*Qe/(ge+Yt);return $t};for(let se=0;se<256;se++)for(let Nt=0;Nt<256;Nt++){let $t=Et(Nt+1,se)-Et(Nt-1,se),ge=Et(Nt,se+1)-Et(Nt,se-1),Yt=Math.hypot($t*4,ge*4,1),xe=(se*256+Nt)*4;J.data[xe]=(-$t*4/Yt*.5+.5)*255,J.data[xe+1]=(-ge*4/Yt*.5+.5)*255,J.data[xe+2]=(1/Yt*.5+.5)*255,J.data[xe+3]=255}X.putImageData(J,0,0)}let T=new mi(E);T.wrapS=T.wrapT=Ei;let b=new sc(new Cn(Dt+1,96),{textureWidth:innerWidth<700?512:1024,textureHeight:innerWidth<700?512:1024,waterNormals:T,sunDirection:new k(.3,.34,-.9).normalize(),sunColor:2766688,waterColor:Zs.water,distortionScale:2.4,fog:!0});b.rotation.x=-Math.PI/2,b.material.uniforms.size.value=.95,b.material.fragmentShader=b.material.fragmentShader.replace("vec3( 0.1 )","vec3( 0.006, 0.01, 0.022 )"),l.add(b);let S=b.onBeforeRender,A={fine:[],plain:[]},I=0;b.onBeforeRender=function(...X){if(!(Pr>=1&&I++&1)){for(let J of A.fine)J.visible=!1;for(let J of A.plain)J.visible=!0;S.apply(this,X);for(let J of A.fine)J.visible=!0;for(let J of A.plain)J.visible=!1}};let P=new ye,O=X=>{let J=Ae(X,1);return Math.atan2(-J.x,-J.z)},z=(X,J,at,Bt,Et=O(J))=>{let se=Ae(J,at),Nt=Ae(J,at+Bt[2]);return Yo(Nt.x,Nt.z,Bt[0],Bt[1]),P.stamp(X(),se.x,se.z,Et,1,1.5),se},F=Ae(60,Dt+70),W=O(60),q=(X,J)=>new k(X,0,J).applyAxisAngle(new k(0,1,0),W).add(F);for(let X of[-58,0,58]){let J=q(X,4);Yo(J.x,J.z,40,50)}P.stamp(od(),F.x,F.z,W,1,.3),z(ad,110,Dt+44,[30,30,14]),z(dd,133,Dt+118,[48,42,15]),z(md,162,Dt+50,[27,18,6]),z(cd,20,Dt+50,[44,36,14]),z(hd,-8,Dt+44,[26,26,17]),z(()=>Jh(4),149,Dt+47,[21,21,0],0),z(()=>Jh(9),86,Dt+150,[21,21,0],0),z(xd,131,Dt+72,[36,36,0],0);{let X=Ae(132,Dt+8);Yo(X.x,X.z,7,7),P.stamp(gd(),X.x,X.z,Math.atan2(-X.x,-X.z),1,1.7)}let K=Cd(),rt=Ae(96,Dt+52),vt=Math.atan2(-rt.x,-rt.z);Yo(rt.x,rt.z,28,28),P.stamp(K.b,rt.x,rt.z,vt,1,1.5),P.stamp(yd()),P.stamp(Md(r)),P.stamp(Pd()),P.stamp(sd(r,[60,110,162,20,-8])),P.stamp(vd());let Gt=new ye;Gt.stamp(Rd());let ie=P.build(),de=Gt.build();de.traverse(X=>X.layers.set(1)),c.layers.enable(1),l.add(ie,de);let _e=K.rings.map(({rad:X,q:J})=>{let at=J.build();return at.position.set(rt.x,1.66,rt.z),at.userData.rad=X,at.traverse(Bt=>Bt.layers.set(1)),l.add(at),at});hc(ie),hc(de),_e.forEach(hc);let it=new Rn;l.add(it),Td(it,16.7,innerWidth<700?1.35:1).then(X=>{A.fine.push(...X.fine),A.plain.push(...X.plain),u.matches&&qt()});{let X=new pi(new ii({map:ci(128,0,1.3),color:16754762,transparent:!0,opacity:.14,depthWrite:!1,blending:fn,fog:!1}));X.scale.set(44,62,1),X.position.set(.3,33,0),X.layers.set(1),l.add(X);let J=new pi(new ii({map:ci(128,0,1.5),color:10470655,transparent:!0,opacity:.13,depthWrite:!1,blending:fn}));J.scale.set(20,17,1),J.position.set(-78,6.5,-46),J.layers.set(1),l.add(J)}let mt=()=>new He({transparent:!0,depthWrite:!1,fog:!1,blending:fn,uniforms:{map:{value:ci(64)},time:{value:0},scale:{value:800}},vertexShader:`attribute vec3 tint; attribute float size; attribute float phase; attribute float mode; uniform float time; uniform float scale; varying vec3 vC;
      void main(){ vec3 p = position; float k = 1.0;
        if (mode > 2.5) { p.x += sin(time * 0.11 + phase * 6.0) * 2.4; p.z += cos(time * 0.09 + phase * 4.0) * 2.4; k = 0.72 + 0.28 * sin(time * 7.0 + phase * 30.0); }
        else if (mode > 1.5) { k = step(0.5, fract(time * 0.7 + phase)); }
        else if (mode > 0.5) { k = 0.72 + 0.28 * sin(time * 9.0 + phase * 40.0) * sin(time * 5.3 + phase * 17.0); }
        vC = tint * k; vec4 mv = modelViewMatrix * vec4(p, 1.0); gl_PointSize = min(size * scale / -mv.z, 96.0); gl_Position = projectionMatrix * mv; }`,fragmentShader:"uniform sampler2D map; varying vec3 vC; void main(){ float a = texture2D(map, gl_PointCoord).a; gl_FragColor = vec4(vC * a, a); }"}),Lt=X=>{let J=X.length,at=new Le,Bt=new Float32Array(J*3),Et=new Float32Array(J*3),se=new Float32Array(J),Nt=new Float32Array(J),$t=new Float32Array(J);X.forEach((Yt,xe)=>{Bt.set([Yt.x,Yt.y,Yt.z],xe*3),Et.set([Yt.colour.r,Yt.colour.g,Yt.colour.b],xe*3),se[xe]=Yt.size,Nt[xe]=h(),$t[xe]=Yt.flicker||0}),at.setAttribute("position",new Pe(Bt,3)),at.setAttribute("tint",new Pe(Et,3)),at.setAttribute("size",new Pe(se,1)),at.setAttribute("phase",new Pe(Nt,1)),at.setAttribute("mode",new Pe($t,1));let ge=new As(at,mt());return ge.frustumCulled=!1,l.add(ge),ge},Ct=Lt(Wh);{let X=l.userData.hill,J=[];for(let at=0;at<13;at++){let Bt=at/12,Et=new k(-120+Bt*128+Math.sin(Bt*9)*16,20+Bt*86,4).applyMatrix4(X.matrixWorld.identity().compose(X.position,X.quaternion,X.scale));J.push({x:Et.x,y:Et.y,z:Et.z,colour:new Ht(1,.74,.4),size:at===12?15:6,flicker:1})}Lt(J)}let N=new Ht(1,.95,.85),V=new Ht(1,.16,.1),ht=[];for(let X=0;X<26;X++)ht.push({a:h()*360,v:(X%2?1:-1)*(5+h()*5),d:X%2?Dt+19.4:Dt+24});let B=Lt(ht.flatMap(()=>[{x:0,y:2.3,z:0,colour:N,size:3.2},{x:0,y:2.3,z:0,colour:V,size:2.4}])),nt=document.createElement("canvas");nt.width=4,nt.height=128;{let X=nt.getContext("2d"),J=X.createLinearGradient(0,128,0,0);J.addColorStop(0,"rgba(255,255,255,1)"),J.addColorStop(.3,"rgba(255,255,255,.4)"),J.addColorStop(.7,"rgba(255,255,255,.08)"),J.addColorStop(1,"rgba(255,255,255,0)"),X.fillStyle=J,X.fillRect(0,0,4,128)}let st=new mi(nt),lt=(X,J,at,Bt,Et=16761466,se=.042)=>{let Nt=new le(new Ce(Bt,1.2,at,20,1,!0),new Ie({map:st,color:Et,transparent:!0,opacity:se,depthWrite:!1,blending:fn,side:un,fog:!1}));return Nt.position.set(X,at/2+1,J),Nt.layers.set(1),l.add(Nt),Nt};for(let[X,J,at,Bt]of[[-19.5,6,74,9],[12.5,8,62,12],[-46,8,44,8],[58,8,40,8]]){let Et=q(X,J);lt(Et.x,Et.z,at,Bt)}{let X=Ae(110,Dt+46),J=Ae(133,Dt+120),at=Ae(20,Dt+52);lt(X.x,X.z,60,9),lt(J.x,J.z,58,14),lt(at.x,at.z,46,12)}let ft=ci(256,0,1.6),_t=[];for(let X=0;X<10;X++){let J=new pi(new ii({map:ft,color:3360890,transparent:!0,opacity:.07,depthWrite:!1,blending:fn})),at=Ae(10+X*17+h()*10,Dt-14-h()*22,5);J.position.copy(at),J.scale.set(190+h()*110,26+h()*10,1),J.userData.a=h()*6.28,J.layers.set(1),_t.push(J),l.add(J)}t.forEach((X,J)=>{if(X.deg===void 0)return;let at=n[J],Bt=Math.sin(at*$e)<-.3,Et=Ae(Bt?at+10:at+(X.shift||0),Dt+9,Bt?6.4:8.6),se=Qf([{text:(X.line||"").toUpperCase(),y:84,size:44,colour:"#f2c66a",font:'"Geist Mono", ui-monospace, monospace',weight:500},{text:X.name,y:206,size:132,colour:"#fff6e2"}]),Nt=Math.atan2(-Et.x,-Et.z),$t=Math.cos(Nt),ge=-Math.sin(Nt),Yt=Math.sin(Nt),xe=Math.cos(Nt),Qe=new le(new xn(15,4.7),new Ie({map:se,color:new Ht(1.35,1.35,1.35)}));Qe.position.copy(Et),Qe.rotation.y=Nt,Qe.layers.set(1),l.add(Qe);let Je=new le(new xn(15,4.7),new Ie({color:725024}));Je.position.set(Et.x-Yt*.06,Et.y,Et.z-xe*.06),Je.rotation.y=Nt+Math.PI,Je.layers.set(1),l.add(Je);for(let kn of[-6.7,6.7]){let ui=new le(new Ce(.2,.2,Et.y-1.4),new Ie({color:1711402}));ui.position.set(Et.x+$t*kn-Yt*.1,(Et.y+1.4)/2-1.4,Et.z+ge*kn-xe*.1),ui.layers.set(1),l.add(ui)}for(let kn of[-5.4,0,5.4]){let ui=new le(new Ue(1,.18,.45),new Ie({color:new Ht(2,1.6,.9)}));ui.position.set(Et.x+$t*kn+Yt*.8,Et.y+2.7,Et.z+ge*kn+xe*.8),ui.rotation.y=Nt,ui.layers.set(1),l.add(ui)}});let dt=bd(l),Mt=Sd();l.add(Mt);let Qt=_d();l.add(Qt.g);let Xt=[];for(let X=0;X<30;X++){let J=new le(new Vr(.82,1,28).rotateX(-Math.PI/2),new Ie({color:10336767,transparent:!0,opacity:0,depthWrite:!1,blending:fn}));J.position.y=.07,J.userData.age=9,Xt.push(J),l.add(J)}let U=new le(new xn(1,1),new Ie({map:ci(64,0,.6),color:14674175,transparent:!0,opacity:0,depthWrite:!1,blending:fn,fog:!1,side:un}));U.scale.set(260,5,1),l.add(U);let R=9+h()*6,$=-1,ot=70,gt=[0,1,2].map(()=>({t:-1,o:new k,c:[1,1,1]})),pt=[];for(let X=0;X<3*ot;X++){let J=h()*2-1,at=h()*6.283,Bt=Math.sqrt(1-J*J),Et=.55+h()*.45;pt.push(Math.cos(at)*Bt*Et,J*Et,Math.sin(at)*Bt*Et)}let Jt=Lt(pt.map((X,J)=>J%3?null:{x:0,y:-80,z:0,colour:new Ht(0,0,0),size:6.5}).filter(Boolean)),Rt=7;function jt(X){if(Rt-=X,Rt<=0){let Et=gt.find(se=>se.t<0);Et&&(Et.t=0,Et.o.set(F.x+(h()-.5)*260,120+h()*80,F.z-80-h()*120),Et.c=[[1,.7,.3],[1,.35,.3],[.5,.9,1],[1,.5,.9],[.7,1,.5],[1,.95,.8]][h()*6|0]),Rt=h()<.55?.5+h()*.9:10+h()*14}let J=Jt.geometry.attributes.position,at=Jt.geometry.attributes.tint,Bt=!1;gt.forEach((Et,se)=>{if(Et.t<0)return;Et.t+=X,Bt=!0;let Nt=Et.t/2.4,$t=66*(1-Math.exp(-Et.t*2.6)),ge=Nt>=1?0:Math.pow(1-Nt,1.4)*2.2;for(let Yt=0;Yt<ot;Yt++){let xe=(se*ot+Yt)*3;J.setXYZ(se*ot+Yt,Et.o.x+pt[xe]*$t,Et.o.y+pt[xe+1]*$t-7*Et.t*Et.t,Et.o.z+pt[xe+2]*$t),at.setXYZ(se*ot+Yt,Et.c[0]*ge,Et.c[1]*ge,Et.c[2]*ge)}Nt>=1&&(Et.t=-1)}),Bt&&(J.needsUpdate=!0,at.needsUpdate=!0)}let Wt=new nc(a);Wt.addPass(new ic(l,c));let wt=new Hs(new xt(256,256),.34,.55,1);Wt.addPass(wt),Wt.addPass(new rc);let Ut=X=>{if(t[X].deg===void 0)return new xt(0,40);let J=Ae(n[X],Dt-27);return new xt(J.x,J.z)},Ft=Ut(s).clone(),ne=new xt,Pt=new Set,D=Math.PI,C=null,H=s,Y=0,et=3.5,tt=-99,Z=0,bt=0,St=!0,kt=X=>{C={i:X,p:Ut(X)},e.toward&&e.toward(X)},oe=X=>t[X].deg===void 0||t[X].home?Math.PI:(J=>Math.atan2(J.x,J.y))(Ut(X)),Se=0,Oe=!1,Vi={x:0,y:0};function zn(X){let J=0,at=0,Bt=null;if((Pt.has("ArrowUp")||Pt.has("w"))&&(at+=1),(Pt.has("ArrowDown")||Pt.has("s"))&&(at-=1),(Pt.has("ArrowLeft")||Pt.has("a"))&&(J+=1),(Pt.has("ArrowRight")||Pt.has("d"))&&(J-=1),J-=Vi.x,at+=Vi.y,J||at)Oe=!0,C=null,tt=Z;else if(C){let $t=C.p.clone().sub(Ft),ge=$t.length();if(ge<3&&Math.abs(Se)<4.5)Se=0,C.i!==void 0&&H!==C.i&&(H=C.i,et=6.5,e.arrive&&e.arrive(H)),C=null;else{let Yt=$t.clone().normalize(),xe=-Ft.dot(Yt);if(xe>0&&xe<ge){let Je=Ft.clone().addScaledVector(Yt,xe);if(Je.length()<62){let kn=Je.lengthSq()>1?Je.clone().normalize():new xt(-Yt.y,Yt.x);Yt.addScaledVector(kn,1.5*(1-Je.length()/62)+.35).normalize()}}let Qe=Math.atan2(Yt.x,Yt.y)-D;Qe=Math.atan2(Math.sin(Qe),Math.cos(Qe)),J=Math.max(-1,Math.min(1,Qe*2.4)),Bt=Math.min(20,ge*.85+.8)*(Math.abs(Qe)>1?.3:1)}}else if(H>=0&&Math.abs(Se)<.8){let $t=oe(H)-D;$t=Math.atan2(Math.sin($t),Math.cos($t)),D+=$t*Math.min(1,X*1.1)}!J&&!at&&!C&&!Oe&&!u.matches&&(et-=X,et<=0&&Z-tt>9&&(Y=H>=0?(o.indexOf(H)+1)%o.length:Y,H>=0&&e.leave&&e.leave(),kt(o[Y]))),J=Math.max(-1,Math.min(1,J)),at=Math.max(-1,Math.min(1,at)),Bt===null&&(Bt=at>=0?at*20:at*8),Se+=(Bt-Se)*Math.min(1,X*(Math.abs(Bt)<Math.abs(Se)?2.4:1.2)),D+=J*X*.9*Math.min(1,.4+Math.abs(Se)/9)*(Se<-.5?-1:1),ne.set(Math.sin(D)*Se,Math.cos(D)*Se),Ft.addScaledVector(ne,X);let Et=Ft.length();Et>Dt-12&&(Ft.multiplyScalar((Dt-12)/Et),ne.dot(Ft)>0&&(Se*=Math.max(0,1-X*3.5)));let se=Math.hypot(Ft.x/44,Ft.y/26);if(se<1&&(ne.dot(Ft)<0&&(Se*=Math.max(0,1-X*3.5)),Ft.set(Ft.x/Math.max(se,.01),Ft.y/Math.max(se,.01))),H>=0)Ut(H).distanceTo(Ft)>26&&(H=-1,(!C||C.i===void 0)&&e.leave&&e.leave());else if(!C||C.i===void 0){for(let $t=0;$t<t.length;$t++)if(Ut($t).distanceTo(Ft)<15){H=$t,et=6.5,e.arrive&&e.arrive($t);break}}let Nt=Math.abs(Se);Mt.position.set(Ft.x,Math.sin(Z*1.7)*.06-.12,Ft.y),Mt.rotation.set(Math.sin(Z*1.3)*.02-Math.min(.06,Nt*.003),D,Math.sin(Z*1.1)*.03-J*Nt*.004),Mt.userData.flag.rotation.y=Math.sin(Z*6)*.3;for(let $t of Mt.userData.lights)$t.material.opacity=.52+Math.sin(Z*11+$t.position.z)*.07;if(bt-=X,Nt>2&&bt<=0){bt=.16;let $t=Xt.reduce((ge,Yt)=>ge.userData.age>Yt.userData.age?ge:Yt);$t.userData.age=0,$t.position.set(Ft.x-Math.sin(D)*7,.07,Ft.y-Math.cos(D)*7),$t.userData.s=Math.min(1,Nt/16)}for(let $t of Xt){$t.userData.age+=X;let ge=$t.userData.age,Yt=Math.min(1,ge/3.2);$t.scale.setScalar(1.6+Yt*11),$t.material.opacity=ge<3.2?(1-Yt)*.3*($t.userData.s||0):0}}let ts=new k;function vi(X){b.material.uniforms.time.value=Z*.42,p.material.uniforms.time.value=Z,Ct.material.uniforms.time.value=Z,w.offset.x=Z*.0016;for(let at of Xh)at.uniforms.glow.value=at.userData.glow*(.94+Math.sin(Z*.7+at.id)*.08);for(let at of _t)at.position.x+=Math.sin(Z*.05+at.userData.a)*X*1.2;let J=B.geometry.attributes.position;ht.forEach((at,Bt)=>{at.a+=at.v/at.d/$e*X;let Et=at.v>0?.55:-.55,se=Ae(at.a+Et,at.d),Nt=Ae(at.a-Et,at.d);J.setXYZ(Bt*2,se.x,2.3,se.z),J.setXYZ(Bt*2+1,Nt.x,2.3,Nt.z)}),J.needsUpdate=!0;for(let at of dt){let Bt=Z*at.speed+at.phase;at.g.position.set(at.cx+Math.cos(Bt)*at.rx,Math.sin(Z*1.5+at.phase)*.05,at.cz+Math.sin(Bt)*at.rz),at.g.rotation.y=Math.atan2(-Math.sin(Bt)*at.rx*Math.sign(at.speed),Math.cos(Bt)*at.rz*Math.sign(at.speed))}if(u.matches||jt(X),_e.forEach((at,Bt)=>{at.rotation.y=Z*1.15/at.userData.rad,at.scale.setScalar(1+Math.sin(Z*2.6+Bt*.6)*.016)}),Qt.cars.forEach((at,Bt)=>{let Et=2.2+Z*.05-Bt*.0245;at.position.set(Math.cos(Et)*(Dt+14.9),1.42,Math.sin(Et)*(Dt+14.9)),at.rotation.y=-Et}),R-=X,R<=0&&$<0&&($=0,R=14+h()*16,U.userData={x:(h()-.5)*2400,y:1500+h()*500,vx:(h()<.5?-1:1)*(700+h()*500)},U.rotation.z=U.userData.vx>0?-.32:.32),$>=0){$+=X;let at=U.userData;U.position.set(at.x+at.vx*$,at.y-380*$,-3e3),U.material.opacity=Math.max(0,Math.sin(Math.min(1,$/.9)*Math.PI))*.9,$>.9&&($=-1)}}let Yn=new k,Gi=84,Js=15,Tr=.16,Ar=Math.PI,rr=0,Rr=0,$s=-99,Ks=!1,Qs=1.6,Cr=0,Pr=0;function L(){let X=i.clientWidth,J=i.clientHeight,at=J>X;c.aspect=X/J,c.fov=at?50:X/J<1.5?44:38,Gi=at?104:84,Js=at?17:15;let Bt=e.band&&e.band(),Et=Bt?Bt[0]:J*.3,se=Bt?Bt[1]:J*.86;Tr=Math.atan(((se-.14*(se-Et))/J-.5)*2*Math.tan(c.fov*$e/2)),c.updateProjectionMatrix();let Nt=Math.min(devicePixelRatio||1,at?Qs+.4:Qs);a.setPixelRatio(Nt),a.setSize(X,J,!1),Wt.setPixelRatio(Nt),Wt.setSize(X,J),p.material.uniforms.dpr.value=Nt;let $t=J*Nt/(2*Math.tan(c.fov*$e/2));Ct.material.uniforms.scale.value=$t,B.material.uniforms.scale.value=$t,Jt.material.uniforms.scale.value=$t}let Q=null,ct=u.matches?0:1;function ut(X,J){if(Q){c.position.set(...Q.from),c.lookAt(...Q.to);return}let at=J?1:1-Math.exp(-X*2.4),Bt=J?1:1-Math.exp(-X*5),Et=D-Ar;if(Et=Math.atan2(Math.sin(Et),Math.cos(Et)),Ar+=Et*at,!Ks&&Z-$s>2.2){let jh=Math.exp(-X*1.4);rr*=jh,Rr*=jh}let se=Ar+rr,Nt=Math.sin(se),$t=Math.cos(se),ge=Ft.x-Nt*Gi,Yt=Ft.y-$t*Gi,xe=Math.hypot(ge,Yt)||1,Qe=Math.min(1,Math.max(0,(Yt/xe-.5)/.22)),Je=Dt+6+84*Qe*Qe*(3-2*Qe);xe>Je&&(ge*=Je/xe,Yt*=Je/xe);let kn=Math.hypot(ge/54,Yt/36);kn<1&&(ge/=Math.max(kn,.05),Yt/=Math.max(kn,.05)),Yn.x+=(ge-Yn.x)*Bt,Yn.z+=(Yt-Yn.z)*Bt;let ui=Math.min(1,Math.max(.56,Math.hypot(Ft.x-Yn.x,Ft.y-Yn.z)/Gi));Yn.y+=(Js*ui+Math.sin(Z*.31)*.4-Yn.y)*Bt,ct>0&&!J&&(ct=Math.max(0,ct-X/3.6));let es=ct*ct*(3-2*ct),sr=Yn.x-Nt*es*170,_c=Yn.y+es*58,Zo=Yn.z-$t*es*170,$h=Ft.x+Nt*30-sr,Kh=Ft.y+$t*30-Zo,Qh=Math.hypot($h,Kh)||1,vc=Math.max(-.5,Tr-Math.atan2(_c-1,Math.hypot(Ft.x-sr,Ft.y-Zo)))+Rr;c.position.set(sr,_c,Zo),c.lookAt(sr+$h/Qh*Math.cos(vc)*100,_c+Math.sin(vc)*100,Zo+Kh/Qh*Math.cos(vc)*100)}let j=performance.now(),At=0;function Vt(X){At=requestAnimationFrame(Vt);let J=Math.min(.05,(X-j)/1e3);j=X,Z+=J,zn(J),ut(J),vi(J),Wt.render(),Z>4&&(Cr=J>.034?Cr+J:Math.max(0,Cr-J*.5),Cr>2.5&&Pr<3&&(Pr++,Cr=0,Qs=[1.6,1.25,1,1][Pr],Pr===3&&(wt.enabled=!1),L()))}let qt=()=>{cancelAnimationFrame(At),j=performance.now(),St&&!document.hidden&&(u.matches?(zn(.016),ut(0,!0),vi(0),Wt.render()):At=requestAnimationFrame(Vt))},Kt=()=>{L(),u.matches&&qt()};addEventListener("resize",Kt),document.fonts&&document.fonts.ready&&document.fonts.ready.then(Kt),document.addEventListener("visibilitychange",qt),u.addEventListener("change",qt),addEventListener("keydown",X=>{let J=X.key.length===1?X.key.toLowerCase():X.key;["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","w","a","s","d"].includes(J)&&!X.metaKey&&!X.ctrlKey&&!/^(INPUT|TEXTAREA|SELECT)$/.test(document.activeElement.tagName)&&(Pt.add(J),J.startsWith("Arrow")&&X.preventDefault())}),addEventListener("keyup",X=>Pt.delete(X.key.length===1?X.key.toLowerCase():X.key)),addEventListener("blur",()=>Pt.clear());let pe=new Fo,ve=new xt,ue=new Zn(new k(0,1,0),0),Ee=new k;function ke(X){let J=i.getBoundingClientRect();ve.set((X.clientX-J.left)/J.width*2-1,-((X.clientY-J.top)/J.height)*2+1),pe.setFromCamera(ve,c);let at=pe.ray.origin,Bt=pe.ray.direction;if(Bt.y>.2)return;let Et=pe.ray.intersectPlane(ue,Ee)&&Math.hypot(Ee.x,Ee.z)<Dt-14?new xt(Ee.x,Ee.z):null,se=22;if(!Et){let ge=Bt.x,Yt=Bt.z,xe=Math.hypot(ge,Yt)||1,Qe=ge/xe,Je=Yt/xe,kn=at.x*Qe+at.z*Je,ui=at.x*at.x+at.z*at.z-(Dt-14)*(Dt-14),es=kn*kn-ui;if(es<0)return;let sr=-kn+Math.sqrt(es);if(sr<0)return;Et=new xt(at.x+Qe*sr,at.z+Je*sr),se=34}Math.hypot(Et.x/48,Et.y/30)<1&&Et.multiplyScalar(1/Math.max(.05,Math.hypot(Et.x/48,Et.y/30)));let Nt=-1,$t=se;t.forEach((ge,Yt)=>{let xe=Ut(Yt).distanceTo(Et);xe<$t&&($t=xe,Nt=Yt)}),Oe=!0,tt=Z,Nt>=0?Nt!==H&&kt(Nt):C={p:Et}}let De=null;i.addEventListener("pointerdown",X=>{De={x:X.clientX,y:X.clientY,yaw:rr,tilt:Rr,id:X.pointerId,moved:!1};try{i.setPointerCapture(X.pointerId)}catch{}}),i.addEventListener("pointermove",X=>{if(!De||X.pointerId!==De.id)return;let J=X.clientX-De.x,at=X.clientY-De.y;!De.moved&&Math.hypot(J,at)<7||(De.moved=Ks=!0,Oe=!0,$s=Z,rr=De.yaw+J/i.clientWidth*3.4,Rr=Math.max(-.2,Math.min(.3,De.tilt+at/i.clientHeight*.9)),u.matches&&qt())});let We=X=>{if(!De||X.pointerId!==De.id)return;let J=De;De=null,Ks=!1,$s=Z,!J.moved&&X.type==="pointerup"&&ke(X)};i.addEventListener("pointerup",We),i.addEventListener("pointercancel",We);let Ve=X=>{Z+=X,zn(X),ut(X),vi(X),Wt.render()},me={look(X,J,at){Q=X?{from:X,to:J}:null,L(),Q&&at&&(c.fov=at,c.updateProjectionMatrix())},step(X){St=!1,cancelAnimationFrame(At),Ve(X)},skip(X){for(let J=0;J<X;J+=1/30)Z+=1/30,zn(1/30),ut(1/30);vi(1/30),Wt.render()},drive(X,J){Vi.x=X,Vi.y=J,u.matches&&qt()},sail(X){Oe=!0,tt=Z,!(H===X&&!C)&&(u.matches?(me.jump(X),e.arrive&&e.arrive(X),vi(0),Wt.render()):kt(X))},stop(){St=!1,qt()},resume(){St=!0,qt()},where:()=>({x:Ft.x,z:Ft.y,docked:H,heading:D,toward:C&&C.i!==void 0?C.i:-1}),jump(X){let J=Ut(X);Ft.copy(J),ne.set(0,0),Se=0,D=Ar=oe(X),rr=Rr=0,C=null,H=X,et=1e9,ct=0,ut(0,!0),e.arrive&&e.arrive(X)},renderer:a,scene:l,camera:c};return L(),ut(0,!0),qt(),me}window.Scene3D={start:Vx};})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2025 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
