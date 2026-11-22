(()=>{var Tu=0,ih=1,Au=2;var rh=1,Ru=2,Ui=3,ni=0,Pn=1,un=2,Ai=0,Fr=1,fn=2,sh=3,oh=4,Cu=5,dr=100,Pu=101,Iu=102,Du=103,Lu=104,Uu=200,Nu=201,Fu=202,Bu=203,Ma=204,ba=205,Ou=206,zu=207,ku=208,Hu=209,Vu=210,Gu=211,Wu=212,Xu=213,qu=214,Ka=0,Qa=1,ja=2,Br=3,tl=4,el=5,nl=6,il=7,ah=0,Yu=1,Zu=2,tr=0,rl=1,sl=2,ol=3,Ds=4,al=5,ll=6,cl=7;var lh=300,Wr=301,Xr=302,hl=303,ul=304,Fo=306,Ei=1e3,fr=1001,Sa=1002,Jn=1003,Ju=1004;var Bo=1005;var wi=1006,fl=1007;var _r=1008;var Ni=1009,ch=1010,hh=1011,Ls=1012,dl=1013,vr=1014,Fi=1015,gi=1016,pl=1017,ml=1018,Us=1020,uh=35902,fh=35899,dh=1021,ph=1022,xi=1023,vs=1026,Ns=1027,mh=1028,gl=1029,gh=1030,xl=1031;var _l=1033,Oo=33776,zo=33777,ko=33778,Ho=33779,vl=35840,yl=35841,Ml=35842,bl=35843,Sl=36196,El=37492,wl=37496,Tl=37808,Al=37809,Rl=37810,Cl=37811,Pl=37812,Il=37813,Dl=37814,Ll=37815,Ul=37816,Nl=37817,Fl=37818,Bl=37819,Ol=37820,zl=37821,kl=36492,Hl=36494,Vl=36495,Gl=36283,Wl=36284,Xl=36285,ql=36286;var lo=2300,Ea=2301,ya=2302,qc=2400,Yc=2401,Zc=2402;var $u=3200,Ku=3201;var Qu=0,ju=1,er="",mn="srgb",Or="srgb-linear",co="linear",ze="srgb";var Nr=7680;var Jc=519,tf=512,ef=513,nf=514,xh=515,rf=516,sf=517,of=518,af=519,wa=35044;var _h="300 es",Si=2e3,ho=2001;var Qi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let r=n[t];if(r!==void 0){let s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,t);t.target=null}}},Ln=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var vc=Math.PI/180,Ta=180/Math.PI;function $i(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ln[i&255]+Ln[i>>8&255]+Ln[i>>16&255]+Ln[i>>24&255]+"-"+Ln[t&255]+Ln[t>>8&255]+"-"+Ln[t>>16&15|64]+Ln[t>>24&255]+"-"+Ln[e&63|128]+Ln[e>>8&255]+"-"+Ln[e>>16&255]+Ln[e>>24&255]+Ln[n&255]+Ln[n>>8&255]+Ln[n>>16&255]+Ln[n>>24&255]).toLowerCase()}function Re(i,t,e){return Math.max(t,Math.min(e,i))}function Pd(i,t){return(i%t+t)%t}function yc(i,t,e){return(1-e)*i+e*t}function Pi(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Xe(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var mt=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6],this.y=r[1]*e+r[4]*n+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Re(this.x,t.x,e.x),this.y=Re(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Re(this.x,t,e),this.y=Re(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Re(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Re(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),r=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*r+t.x,this.y=s*r+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},di=class{constructor(t=0,e=0,n=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=r}static slerpFlat(t,e,n,r,s,o,a){let l=n[r+0],c=n[r+1],u=n[r+2],h=n[r+3],f=s[o+0],d=s[o+1],p=s[o+2],x=s[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h;return}if(a===1){t[e+0]=f,t[e+1]=d,t[e+2]=p,t[e+3]=x;return}if(h!==x||l!==f||c!==d||u!==p){let g=1-a,m=l*f+c*d+u*p+h*x,_=m>=0?1:-1,y=1-m*m;if(y>Number.EPSILON){let w=Math.sqrt(y),M=Math.atan2(w,m*_);g=Math.sin(g*M)/w,a=Math.sin(a*M)/w}let v=a*_;if(l=l*g+f*v,c=c*g+d*v,u=u*g+p*v,h=h*g+x*v,g===1-a){let w=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=w,c*=w,u*=w,h*=w}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,r,s,o){let a=n[r],l=n[r+1],c=n[r+2],u=n[r+3],h=s[o],f=s[o+1],d=s[o+2],p=s[o+3];return t[e]=a*p+u*h+l*d-c*f,t[e+1]=l*p+u*f+c*h-a*d,t[e+2]=c*p+u*d+a*f-l*h,t[e+3]=u*p-a*h-l*f-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,r){return this._x=t,this._y=e,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,r=t._y,s=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(r/2),h=a(s/2),f=l(n/2),d=l(r/2),p=l(s/2);switch(o){case"XYZ":this._x=f*u*h+c*d*p,this._y=c*d*h-f*u*p,this._z=c*u*p+f*d*h,this._w=c*u*h-f*d*p;break;case"YXZ":this._x=f*u*h+c*d*p,this._y=c*d*h-f*u*p,this._z=c*u*p-f*d*h,this._w=c*u*h+f*d*p;break;case"ZXY":this._x=f*u*h-c*d*p,this._y=c*d*h+f*u*p,this._z=c*u*p+f*d*h,this._w=c*u*h-f*d*p;break;case"ZYX":this._x=f*u*h-c*d*p,this._y=c*d*h+f*u*p,this._z=c*u*p-f*d*h,this._w=c*u*h+f*d*p;break;case"YZX":this._x=f*u*h+c*d*p,this._y=c*d*h+f*u*p,this._z=c*u*p-f*d*h,this._w=c*u*h-f*d*p;break;case"XZY":this._x=f*u*h-c*d*p,this._y=c*d*h-f*u*p,this._z=c*u*p+f*d*h,this._w=c*u*h+f*d*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,r=Math.sin(n);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],r=e[4],s=e[8],o=e[1],a=e[5],l=e[9],c=e[2],u=e[6],h=e[10],f=n+a+h;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(s-c)*d,this._z=(o-r)*d}else if(n>a&&n>h){let d=2*Math.sqrt(1+n-a-h);this._w=(u-l)/d,this._x=.25*d,this._y=(r+o)/d,this._z=(s+c)/d}else if(a>h){let d=2*Math.sqrt(1+a-n-h);this._w=(s-c)/d,this._x=(r+o)/d,this._y=.25*d,this._z=(l+u)/d}else{let d=2*Math.sqrt(1+h-n-a);this._w=(o-r)/d,this._x=(s+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Re(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let r=Math.min(1,e/n);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,r=t._y,s=t._z,o=t._w,a=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-r*a,this._w=o*u-n*a-r*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,r=this._y,s=this._z,o=this._w,a=o*t._w+n*t._x+r*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;let l=1-a*a;if(l<=Number.EPSILON){let d=1-e;return this._w=d*o+e*this._w,this._x=d*n+e*this._x,this._y=d*r+e*this._y,this._z=d*s+e*this._z,this.normalize(),this}let c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-e)*u)/c,f=Math.sin(e*u)/c;return this._w=o*h+this._w*f,this._x=n*h+this._x*f,this._y=r*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},k=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(jh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(jh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*r,this.y=s[1]*e+s[4]*n+s[7]*r,this.z=s[2]*e+s[5]*n+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,r=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,r=this.z,s=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*r-a*n),u=2*(a*e-s*r),h=2*(s*n-o*e);return this.x=e+l*c+o*h-a*u,this.y=n+l*u+a*c-s*h,this.z=r+l*h+s*u-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*r,this.y=s[1]*e+s[5]*n+s[9]*r,this.z=s[2]*e+s[6]*n+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Re(this.x,t.x,e.x),this.y=Re(this.y,t.y,e.y),this.z=Re(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Re(this.x,t,e),this.y=Re(this.y,t,e),this.z=Re(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Re(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,r=t.y,s=t.z,o=e.x,a=e.y,l=e.z;return this.x=r*l-s*a,this.y=s*o-n*l,this.z=n*a-r*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Mc.copy(this).projectOnVector(t),this.sub(Mc)}reflect(t){return this.sub(Mc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Re(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,r=this.z-t.z;return e*e+n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let r=Math.sin(e)*t;return this.x=r*Math.sin(n),this.y=Math.cos(e)*t,this.z=r*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Mc=new k,jh=new di,be=class i{constructor(t,e,n,r,s,o,a,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,o,a,l,c)}set(t,e,n,r,s,o,a,l,c){let u=this.elements;return u[0]=t,u[1]=r,u[2]=a,u[3]=e,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,r=e.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],d=n[5],p=n[8],x=r[0],g=r[3],m=r[6],_=r[1],y=r[4],v=r[7],w=r[2],M=r[5],E=r[8];return s[0]=o*x+a*_+l*w,s[3]=o*g+a*y+l*M,s[6]=o*m+a*v+l*E,s[1]=c*x+u*_+h*w,s[4]=c*g+u*y+h*M,s[7]=c*m+u*v+h*E,s[2]=f*x+d*_+p*w,s[5]=f*g+d*y+p*M,s[8]=f*m+d*v+p*E,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8];return e*o*u-e*a*c-n*s*u+n*a*l+r*s*c-r*o*l}invert(){let t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=u*o-a*c,f=a*l-u*s,d=c*s-o*l,p=e*h+n*f+r*d;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/p;return t[0]=h*x,t[1]=(r*c-u*n)*x,t[2]=(a*n-r*o)*x,t[3]=f*x,t[4]=(u*e-r*l)*x,t[5]=(r*s-a*e)*x,t[6]=d*x,t[7]=(n*l-c*e)*x,t[8]=(o*e-n*s)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,r,s,o,a){let l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-r*c,r*l,-r*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(bc.makeScale(t,e)),this}rotate(t){return this.premultiply(bc.makeRotation(-t)),this}translate(t,e){return this.premultiply(bc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let r=0;r<9;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},bc=new be;function vh(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function uo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function lf(){let i=uo("canvas");return i.style.display="block",i}var tu={};function ys(i){i in tu||(tu[i]=!0,console.warn(i))}function cf(i,t,e){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}var eu=new be().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),nu=new be().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Id(){let i={enabled:!0,workingColorSpace:Or,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===ze&&(r.r=Ki(r.r),r.g=Ki(r.g),r.b=Ki(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ze&&(r.r=_s(r.r),r.g=_s(r.g),r.b=_s(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===er?co:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return ys("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return ys("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Or]:{primaries:t,whitePoint:n,transfer:co,toXYZ:eu,fromXYZ:nu,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:mn},outputColorSpaceConfig:{drawingBufferColorSpace:mn}},[mn]:{primaries:t,whitePoint:n,transfer:ze,toXYZ:eu,fromXYZ:nu,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:mn}}}),i}var Ne=Id();function Ki(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function _s(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var ns,Aa=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{ns===void 0&&(ns=uo("canvas")),ns.width=t.width,ns.height=t.height;let r=ns.getContext("2d");t instanceof ImageData?r.putImageData(t,0,0):r.drawImage(t,0,0,t.width,t.height),n=ns}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=uo("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let r=n.getImageData(0,0,t.width,t.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Ki(s[o]/255)*255;return n.putImageData(r,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Ki(e[n]/255)*255):e[n]=Ki(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Dd=0,Ms=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Dd++}),this.uuid=$i(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Sc(r[o].image)):s.push(Sc(r[o]))}else s=Sc(r);n.url=s}return e||(t.images[this.uuid]=n),n}};function Sc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Aa.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Ld=0,Ec=new k,Vn=class i extends Qi{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=fr,r=fr,s=wi,o=_r,a=xi,l=Ni,c=i.DEFAULT_ANISOTROPY,u=er){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ld++}),this.uuid=$i(),this.name="",this.source=new Ms(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new mt(0,0),this.repeat=new mt(1,1),this.center=new mt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new be,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Ec).x}get height(){return this.source.getSize(Ec).y}get depth(){return this.source.getSize(Ec).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let r=this[e];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==lh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ei:t.x=t.x-Math.floor(t.x);break;case fr:t.x=t.x<0?0:1;break;case Sa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ei:t.y=t.y-Math.floor(t.y);break;case fr:t.y=t.y<0?0:1;break;case Sa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Vn.DEFAULT_IMAGE=null;Vn.DEFAULT_MAPPING=lh;Vn.DEFAULT_ANISOTROPY=1;var tn=class i{constructor(t=0,e=0,n=0,r=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,r){return this.x=t,this.y=e,this.z=n,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,r=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*r+o[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,r,s,l=t.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],p=l[9],x=l[2],g=l[6],m=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-x)<.01&&Math.abs(p-g)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+x)<.1&&Math.abs(p+g)<.1&&Math.abs(c+d+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let y=(c+1)/2,v=(d+1)/2,w=(m+1)/2,M=(u+f)/4,E=(h+x)/4,T=(p+g)/4;return y>v&&y>w?y<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(y),r=M/n,s=E/n):v>w?v<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(v),n=M/r,s=T/r):w<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(w),n=E/s,r=T/s),this.set(n,r,s,e),this}let _=Math.sqrt((g-p)*(g-p)+(h-x)*(h-x)+(f-u)*(f-u));return Math.abs(_)<.001&&(_=1),this.x=(g-p)/_,this.y=(h-x)/_,this.z=(f-u)/_,this.w=Math.acos((c+d+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Re(this.x,t.x,e.x),this.y=Re(this.y,t.y,e.y),this.z=Re(this.z,t.z,e.z),this.w=Re(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Re(this.x,t,e),this.y=Re(this.y,t,e),this.z=Re(this.z,t,e),this.w=Re(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Re(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Ra=class extends Qi{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:wi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new tn(0,0,t,e),this.scissorTest=!1,this.viewport=new tn(0,0,t,e);let r={width:t,height:e,depth:n.depth},s=new Vn(r);this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){let e={minFilter:wi,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=n,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let r=Object.assign({},t.textures[e].image);this.textures[e].source=new Ms(r)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},wn=class extends Ra{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},fo=class extends Vn{constructor(t=null,e=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=Jn,this.minFilter=Jn,this.wrapR=fr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ca=class extends Vn{constructor(t=null,e=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=Jn,this.minFilter=Jn,this.wrapR=fr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var pr=class{constructor(t=new k(1/0,1/0,1/0),e=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(yi.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(yi.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=yi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,yi):yi.fromBufferAttribute(s,o),yi.applyMatrix4(t.matrixWorld),this.expandByPoint(yi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Zo.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Zo.copy(n.boundingBox)),Zo.applyMatrix4(t.matrixWorld),this.union(Zo)}let r=t.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,yi),yi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Qs),Jo.subVectors(this.max,Qs),is.subVectors(t.a,Qs),rs.subVectors(t.b,Qs),ss.subVectors(t.c,Qs),or.subVectors(rs,is),ar.subVectors(ss,rs),Ir.subVectors(is,ss);let e=[0,-or.z,or.y,0,-ar.z,ar.y,0,-Ir.z,Ir.y,or.z,0,-or.x,ar.z,0,-ar.x,Ir.z,0,-Ir.x,-or.y,or.x,0,-ar.y,ar.x,0,-Ir.y,Ir.x,0];return!wc(e,is,rs,ss,Jo)||(e=[1,0,0,0,1,0,0,0,1],!wc(e,is,rs,ss,Jo))?!1:($o.crossVectors(or,ar),e=[$o.x,$o.y,$o.z],wc(e,is,rs,ss,Jo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,yi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(yi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Wi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Wi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Wi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Wi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Wi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Wi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Wi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Wi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Wi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Wi=[new k,new k,new k,new k,new k,new k,new k,new k],yi=new k,Zo=new pr,is=new k,rs=new k,ss=new k,or=new k,ar=new k,Ir=new k,Qs=new k,Jo=new k,$o=new k,Dr=new k;function wc(i,t,e,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){Dr.fromArray(i,s);let a=r.x*Math.abs(Dr.x)+r.y*Math.abs(Dr.y)+r.z*Math.abs(Dr.z),l=t.dot(Dr),c=e.dot(Dr),u=n.dot(Dr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}var Ud=new pr,js=new k,Tc=new k,zr=class{constructor(t=new k,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Ud.setFromPoints(t).getCenter(n);let r=0;for(let s=0,o=t.length;s<o;s++)r=Math.max(r,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;js.subVectors(t,this.center);let e=js.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),r=(n-this.radius)*.5;this.center.addScaledVector(js,r/n),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Tc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(js.copy(t.center).add(Tc)),this.expandByPoint(js.copy(t.center).sub(Tc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Xi=new k,Ac=new k,Ko=new k,lr=new k,Rc=new k,Qo=new k,Cc=new k,bs=class{constructor(t=new k,e=new k(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Xi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Xi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Xi.copy(this.origin).addScaledVector(this.direction,e),Xi.distanceToSquared(t))}distanceSqToSegment(t,e,n,r){Ac.copy(t).add(e).multiplyScalar(.5),Ko.copy(e).sub(t).normalize(),lr.copy(this.origin).sub(Ac);let s=t.distanceTo(e)*.5,o=-this.direction.dot(Ko),a=lr.dot(this.direction),l=-lr.dot(Ko),c=lr.lengthSq(),u=Math.abs(1-o*o),h,f,d,p;if(u>0)if(h=o*l-a,f=o*a-l,p=s*u,h>=0)if(f>=-p)if(f<=p){let x=1/u;h*=x,f*=x,d=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f<=-p?(h=Math.max(0,-(-o*s+a)),f=h>0?-s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+c):f<=p?(h=0,f=Math.min(Math.max(-s,-l),s),d=f*(f+2*l)+c):(h=Math.max(0,-(o*s+a)),f=h>0?s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+c);else f=o>0?-s:s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Ac).addScaledVector(Ko,f),d}intersectSphere(t,e){Xi.subVectors(t.center,this.origin);let n=Xi.dot(this.direction),r=Xi.dot(Xi)-n*n,s=t.radius*t.radius;if(r>s)return null;let o=Math.sqrt(s-r),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,r,s,o,a,l,c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,r=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,r=(t.min.x-f.x)*c),u>=0?(s=(t.min.y-f.y)*u,o=(t.max.y-f.y)*u):(s=(t.max.y-f.y)*u,o=(t.min.y-f.y)*u),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(t.min.z-f.z)*h,l=(t.max.z-f.z)*h):(a=(t.max.z-f.z)*h,l=(t.min.z-f.z)*h),n>l||a>r)||((a>n||n!==n)&&(n=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,e)}intersectsBox(t){return this.intersectBox(t,Xi)!==null}intersectTriangle(t,e,n,r,s){Rc.subVectors(e,t),Qo.subVectors(n,t),Cc.crossVectors(Rc,Qo);let o=this.direction.dot(Cc),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;lr.subVectors(this.origin,t);let l=a*this.direction.dot(Qo.crossVectors(lr,Qo));if(l<0)return null;let c=a*this.direction.dot(Rc.cross(lr));if(c<0||l+c>o)return null;let u=-a*lr.dot(Cc);return u<0?null:this.at(u/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Fe=class i{constructor(t,e,n,r,s,o,a,l,c,u,h,f,d,p,x,g){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,o,a,l,c,u,h,f,d,p,x,g)}set(t,e,n,r,s,o,a,l,c,u,h,f,d,p,x,g){let m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=r,m[1]=s,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=u,m[10]=h,m[14]=f,m[3]=d,m[7]=p,m[11]=x,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,r=1/os.setFromMatrixColumn(t,0).length(),s=1/os.setFromMatrixColumn(t,1).length(),o=1/os.setFromMatrixColumn(t,2).length();return e[0]=n[0]*r,e[1]=n[1]*r,e[2]=n[2]*r,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,r=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(t.order==="XYZ"){let f=o*u,d=o*h,p=a*u,x=a*h;e[0]=l*u,e[4]=-l*h,e[8]=c,e[1]=d+p*c,e[5]=f-x*c,e[9]=-a*l,e[2]=x-f*c,e[6]=p+d*c,e[10]=o*l}else if(t.order==="YXZ"){let f=l*u,d=l*h,p=c*u,x=c*h;e[0]=f+x*a,e[4]=p*a-d,e[8]=o*c,e[1]=o*h,e[5]=o*u,e[9]=-a,e[2]=d*a-p,e[6]=x+f*a,e[10]=o*l}else if(t.order==="ZXY"){let f=l*u,d=l*h,p=c*u,x=c*h;e[0]=f-x*a,e[4]=-o*h,e[8]=p+d*a,e[1]=d+p*a,e[5]=o*u,e[9]=x-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let f=o*u,d=o*h,p=a*u,x=a*h;e[0]=l*u,e[4]=p*c-d,e[8]=f*c+x,e[1]=l*h,e[5]=x*c+f,e[9]=d*c-p,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let f=o*l,d=o*c,p=a*l,x=a*c;e[0]=l*u,e[4]=x-f*h,e[8]=p*h+d,e[1]=h,e[5]=o*u,e[9]=-a*u,e[2]=-c*u,e[6]=d*h+p,e[10]=f-x*h}else if(t.order==="XZY"){let f=o*l,d=o*c,p=a*l,x=a*c;e[0]=l*u,e[4]=-h,e[8]=c*u,e[1]=f*h+x,e[5]=o*u,e[9]=d*h-p,e[2]=p*h-d,e[6]=a*u,e[10]=x*h+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Nd,t,Fd)}lookAt(t,e,n){let r=this.elements;return ti.subVectors(t,e),ti.lengthSq()===0&&(ti.z=1),ti.normalize(),cr.crossVectors(n,ti),cr.lengthSq()===0&&(Math.abs(n.z)===1?ti.x+=1e-4:ti.z+=1e-4,ti.normalize(),cr.crossVectors(n,ti)),cr.normalize(),jo.crossVectors(ti,cr),r[0]=cr.x,r[4]=jo.x,r[8]=ti.x,r[1]=cr.y,r[5]=jo.y,r[9]=ti.y,r[2]=cr.z,r[6]=jo.z,r[10]=ti.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,r=e.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],d=n[13],p=n[2],x=n[6],g=n[10],m=n[14],_=n[3],y=n[7],v=n[11],w=n[15],M=r[0],E=r[4],T=r[8],b=r[12],S=r[1],A=r[5],I=r[9],P=r[13],B=r[2],z=r[6],N=r[10],G=r[14],q=r[3],K=r[7],it=r[11],_t=r[15];return s[0]=o*M+a*S+l*B+c*q,s[4]=o*E+a*A+l*z+c*K,s[8]=o*T+a*I+l*N+c*it,s[12]=o*b+a*P+l*G+c*_t,s[1]=u*M+h*S+f*B+d*q,s[5]=u*E+h*A+f*z+d*K,s[9]=u*T+h*I+f*N+d*it,s[13]=u*b+h*P+f*G+d*_t,s[2]=p*M+x*S+g*B+m*q,s[6]=p*E+x*A+g*z+m*K,s[10]=p*T+x*I+g*N+m*it,s[14]=p*b+x*P+g*G+m*_t,s[3]=_*M+y*S+v*B+w*q,s[7]=_*E+y*A+v*z+w*K,s[11]=_*T+y*I+v*N+w*it,s[15]=_*b+y*P+v*G+w*_t,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],r=t[8],s=t[12],o=t[1],a=t[5],l=t[9],c=t[13],u=t[2],h=t[6],f=t[10],d=t[14],p=t[3],x=t[7],g=t[11],m=t[15];return p*(+s*l*h-r*c*h-s*a*f+n*c*f+r*a*d-n*l*d)+x*(+e*l*d-e*c*f+s*o*f-r*o*d+r*c*u-s*l*u)+g*(+e*c*h-e*a*d-s*o*h+n*o*d+s*a*u-n*c*u)+m*(-r*a*u-e*l*h+e*a*f+r*o*h-n*o*f+n*l*u)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=t[9],f=t[10],d=t[11],p=t[12],x=t[13],g=t[14],m=t[15],_=h*g*c-x*f*c+x*l*d-a*g*d-h*l*m+a*f*m,y=p*f*c-u*g*c-p*l*d+o*g*d+u*l*m-o*f*m,v=u*x*c-p*h*c+p*a*d-o*x*d-u*a*m+o*h*m,w=p*h*l-u*x*l-p*a*f+o*x*f+u*a*g-o*h*g,M=e*_+n*y+r*v+s*w;if(M===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let E=1/M;return t[0]=_*E,t[1]=(x*f*s-h*g*s-x*r*d+n*g*d+h*r*m-n*f*m)*E,t[2]=(a*g*s-x*l*s+x*r*c-n*g*c-a*r*m+n*l*m)*E,t[3]=(h*l*s-a*f*s-h*r*c+n*f*c+a*r*d-n*l*d)*E,t[4]=y*E,t[5]=(u*g*s-p*f*s+p*r*d-e*g*d-u*r*m+e*f*m)*E,t[6]=(p*l*s-o*g*s-p*r*c+e*g*c+o*r*m-e*l*m)*E,t[7]=(o*f*s-u*l*s+u*r*c-e*f*c-o*r*d+e*l*d)*E,t[8]=v*E,t[9]=(p*h*s-u*x*s-p*n*d+e*x*d+u*n*m-e*h*m)*E,t[10]=(o*x*s-p*a*s+p*n*c-e*x*c-o*n*m+e*a*m)*E,t[11]=(u*a*s-o*h*s-u*n*c+e*h*c+o*n*d-e*a*d)*E,t[12]=w*E,t[13]=(u*x*r-p*h*r+p*n*f-e*x*f-u*n*g+e*h*g)*E,t[14]=(p*a*r-o*x*r-p*n*l+e*x*l+o*n*g-e*a*g)*E,t[15]=(o*h*r-u*a*r+u*n*l-e*h*l-o*n*f+e*a*f)*E,this}scale(t){let e=this.elements,n=t.x,r=t.y,s=t.z;return e[0]*=n,e[4]*=r,e[8]*=s,e[1]*=n,e[5]*=r,e[9]*=s,e[2]*=n,e[6]*=r,e[10]*=s,e[3]*=n,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,r))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),r=Math.sin(e),s=1-n,o=t.x,a=t.y,l=t.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+n,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,r,s,o){return this.set(1,n,s,0,t,1,o,0,e,r,1,0,0,0,0,1),this}compose(t,e,n){let r=this.elements,s=e._x,o=e._y,a=e._z,l=e._w,c=s+s,u=o+o,h=a+a,f=s*c,d=s*u,p=s*h,x=o*u,g=o*h,m=a*h,_=l*c,y=l*u,v=l*h,w=n.x,M=n.y,E=n.z;return r[0]=(1-(x+m))*w,r[1]=(d+v)*w,r[2]=(p-y)*w,r[3]=0,r[4]=(d-v)*M,r[5]=(1-(f+m))*M,r[6]=(g+_)*M,r[7]=0,r[8]=(p+y)*E,r[9]=(g-_)*E,r[10]=(1-(f+x))*E,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,n){let r=this.elements,s=os.set(r[0],r[1],r[2]).length(),o=os.set(r[4],r[5],r[6]).length(),a=os.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],Mi.copy(this);let c=1/s,u=1/o,h=1/a;return Mi.elements[0]*=c,Mi.elements[1]*=c,Mi.elements[2]*=c,Mi.elements[4]*=u,Mi.elements[5]*=u,Mi.elements[6]*=u,Mi.elements[8]*=h,Mi.elements[9]*=h,Mi.elements[10]*=h,e.setFromRotationMatrix(Mi),n.x=s,n.y=o,n.z=a,this}makePerspective(t,e,n,r,s,o,a=Si,l=!1){let c=this.elements,u=2*s/(e-t),h=2*s/(n-r),f=(e+t)/(e-t),d=(n+r)/(n-r),p,x;if(l)p=s/(o-s),x=o*s/(o-s);else if(a===Si)p=-(o+s)/(o-s),x=-2*o*s/(o-s);else if(a===ho)p=-o/(o-s),x=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,r,s,o,a=Si,l=!1){let c=this.elements,u=2/(e-t),h=2/(n-r),f=-(e+t)/(e-t),d=-(n+r)/(n-r),p,x;if(l)p=1/(o-s),x=o/(o-s);else if(a===Si)p=-2/(o-s),x=-(o+s)/(o-s);else if(a===ho)p=-1/(o-s),x=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=h,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let r=0;r<16;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},os=new k,Mi=new Fe,Nd=new k(0,0,0),Fd=new k(1,1,1),cr=new k,jo=new k,ti=new k,iu=new Fe,ru=new di,Di=class i{constructor(t=0,e=0,n=0,r=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,r=this._order){return this._x=t,this._y=e,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let r=t.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],h=r[2],f=r[6],d=r[10];switch(e){case"XYZ":this._y=Math.asin(Re(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Re(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Re(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Re(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Re(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Re(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return iu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(iu,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return ru.setFromEuler(this),this.setFromQuaternion(ru,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Di.DEFAULT_ORDER="XYZ";var Ss=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Bd=0,su=new k,as=new di,qi=new Fe,ta=new k,to=new k,Od=new k,zd=new di,ou=new k(1,0,0),au=new k(0,1,0),lu=new k(0,0,1),cu={type:"added"},kd={type:"removed"},ls={type:"childadded",child:null},Pc={type:"childremoved",child:null},$n=class i extends Qi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Bd++}),this.uuid=$i(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new k,e=new Di,n=new di,r=new k(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Fe},normalMatrix:{value:new be}}),this.matrix=new Fe,this.matrixWorld=new Fe,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ss,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return as.setFromAxisAngle(t,e),this.quaternion.multiply(as),this}rotateOnWorldAxis(t,e){return as.setFromAxisAngle(t,e),this.quaternion.premultiply(as),this}rotateX(t){return this.rotateOnAxis(ou,t)}rotateY(t){return this.rotateOnAxis(au,t)}rotateZ(t){return this.rotateOnAxis(lu,t)}translateOnAxis(t,e){return su.copy(t).applyQuaternion(this.quaternion),this.position.add(su.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ou,t)}translateY(t){return this.translateOnAxis(au,t)}translateZ(t){return this.translateOnAxis(lu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(qi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ta.copy(t):ta.set(t,e,n);let r=this.parent;this.updateWorldMatrix(!0,!1),to.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?qi.lookAt(to,ta,this.up):qi.lookAt(ta,to,this.up),this.quaternion.setFromRotationMatrix(qi),r&&(qi.extractRotation(r.matrixWorld),as.setFromRotationMatrix(qi),this.quaternion.premultiply(as.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(cu),ls.child=t,this.dispatchEvent(ls),ls.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(kd),Pc.child=t,this.dispatchEvent(Pc),Pc.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),qi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),qi.multiply(t.parent.matrixWorld)),t.applyMatrix4(qi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(cu),ls.child=t,this.dispatchEvent(ls),ls.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,r=this.children.length;n<r;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(to,t,Od),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(to,zd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(t),r.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let h=l[c];s(t.shapes,h)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(t.materials,this.material[l]));r.material=a}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];r.animations.push(s(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),u=o(t.images),h=o(t.shapes),f=o(t.skeletons),d=o(t.animations),p=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),p.length>0&&(n.nodes=p)}return n.object=r,n;function o(a){let l=[];for(let c in a){let u=a[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let r=t.children[n];this.add(r.clone())}return this}};$n.DEFAULT_UP=new k(0,1,0);$n.DEFAULT_MATRIX_AUTO_UPDATE=!0;$n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var bi=new k,Yi=new k,Ic=new k,Zi=new k,cs=new k,hs=new k,hu=new k,Dc=new k,Lc=new k,Uc=new k,Nc=new tn,Fc=new tn,Bc=new tn,Ji=class i{constructor(t=new k,e=new k,n=new k){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,r){r.subVectors(n,e),bi.subVectors(t,e),r.cross(bi);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,n,r,s){bi.subVectors(r,e),Yi.subVectors(n,e),Ic.subVectors(t,e);let o=bi.dot(bi),a=bi.dot(Yi),l=bi.dot(Ic),c=Yi.dot(Yi),u=Yi.dot(Ic),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;let f=1/h,d=(c*l-a*u)*f,p=(o*u-a*l)*f;return s.set(1-d-p,p,d)}static containsPoint(t,e,n,r){return this.getBarycoord(t,e,n,r,Zi)===null?!1:Zi.x>=0&&Zi.y>=0&&Zi.x+Zi.y<=1}static getInterpolation(t,e,n,r,s,o,a,l){return this.getBarycoord(t,e,n,r,Zi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Zi.x),l.addScaledVector(o,Zi.y),l.addScaledVector(a,Zi.z),l)}static getInterpolatedAttribute(t,e,n,r,s,o){return Nc.setScalar(0),Fc.setScalar(0),Bc.setScalar(0),Nc.fromBufferAttribute(t,e),Fc.fromBufferAttribute(t,n),Bc.fromBufferAttribute(t,r),o.setScalar(0),o.addScaledVector(Nc,s.x),o.addScaledVector(Fc,s.y),o.addScaledVector(Bc,s.z),o}static isFrontFacing(t,e,n,r){return bi.subVectors(n,e),Yi.subVectors(t,e),bi.cross(Yi).dot(r)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,r){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,n,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return bi.subVectors(this.c,this.b),Yi.subVectors(this.a,this.b),bi.cross(Yi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,r,s){return i.getInterpolation(t,this.a,this.b,this.c,e,n,r,s)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,r=this.b,s=this.c,o,a;cs.subVectors(r,n),hs.subVectors(s,n),Dc.subVectors(t,n);let l=cs.dot(Dc),c=hs.dot(Dc);if(l<=0&&c<=0)return e.copy(n);Lc.subVectors(t,r);let u=cs.dot(Lc),h=hs.dot(Lc);if(u>=0&&h<=u)return e.copy(r);let f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),e.copy(n).addScaledVector(cs,o);Uc.subVectors(t,s);let d=cs.dot(Uc),p=hs.dot(Uc);if(p>=0&&d<=p)return e.copy(s);let x=d*c-l*p;if(x<=0&&c>=0&&p<=0)return a=c/(c-p),e.copy(n).addScaledVector(hs,a);let g=u*p-d*h;if(g<=0&&h-u>=0&&d-p>=0)return hu.subVectors(s,r),a=(h-u)/(h-u+(d-p)),e.copy(r).addScaledVector(hu,a);let m=1/(g+x+f);return o=x*m,a=f*m,e.copy(n).addScaledVector(cs,o).addScaledVector(hs,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},hf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},hr={h:0,s:0,l:0},ea={h:0,s:0,l:0};function Oc(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Vt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=mn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ne.colorSpaceToWorking(this,e),this}setRGB(t,e,n,r=Ne.workingColorSpace){return this.r=t,this.g=e,this.b=n,Ne.colorSpaceToWorking(this,r),this}setHSL(t,e,n,r=Ne.workingColorSpace){if(t=Pd(t,1),e=Re(e,0,1),n=Re(n,0,1),e===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=Oc(o,s,t+1/3),this.g=Oc(o,s,t),this.b=Oc(o,s,t-1/3)}return Ne.colorSpaceToWorking(this,r),this}setStyle(t,e=mn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s,o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){let s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=mn){let n=hf[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ki(t.r),this.g=Ki(t.g),this.b=Ki(t.b),this}copyLinearToSRGB(t){return this.r=_s(t.r),this.g=_s(t.g),this.b=_s(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=mn){return Ne.workingToColorSpace(Un.copy(this),t),Math.round(Re(Un.r*255,0,255))*65536+Math.round(Re(Un.g*255,0,255))*256+Math.round(Re(Un.b*255,0,255))}getHexString(t=mn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Ne.workingColorSpace){Ne.workingToColorSpace(Un.copy(this),e);let n=Un.r,r=Un.g,s=Un.b,o=Math.max(n,r,s),a=Math.min(n,r,s),l,c,u=(a+o)/2;if(a===o)l=0,c=0;else{let h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-n)/h+2;break;case s:l=(n-r)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=Ne.workingColorSpace){return Ne.workingToColorSpace(Un.copy(this),e),t.r=Un.r,t.g=Un.g,t.b=Un.b,t}getStyle(t=mn){Ne.workingToColorSpace(Un.copy(this),t);let e=Un.r,n=Un.g,r=Un.b;return t!==mn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(t,e,n){return this.getHSL(hr),this.setHSL(hr.h+t,hr.s+e,hr.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(hr),t.getHSL(ea);let n=yc(hr.h,ea.h,e),r=yc(hr.s,ea.s,e),s=yc(hr.l,ea.l,e);return this.setHSL(n,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*r,this.g=s[1]*e+s[4]*n+s[7]*r,this.b=s[2]*e+s[5]*n+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Un=new Vt;Vt.NAMES=hf;var Hd=0,ji=class extends Qi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Hd++}),this.uuid=$i(),this.name="",this.type="Material",this.blending=Fr,this.side=ni,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ma,this.blendDst=ba,this.blendEquation=dr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Vt(0,0,0),this.blendAlpha=0,this.depthFunc=Br,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Jc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Nr,this.stencilZFail=Nr,this.stencilZPass=Nr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Fr&&(n.blending=this.blending),this.side!==ni&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ma&&(n.blendSrc=this.blendSrc),this.blendDst!==ba&&(n.blendDst=this.blendDst),this.blendEquation!==dr&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Br&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Jc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Nr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Nr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Nr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){let o=[];for(let a in s){let l=s[a];delete l.metadata,o.push(l)}return o}if(e){let s=r(t.textures),o=r(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let r=e.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},Ie=class extends ji{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Vt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Di,this.combine=ah,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var pn=new k,na=new mt,Vd=0,Pe=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Vd++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=wa,this.updateRanges=[],this.gpuType=Fi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[n+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)na.fromBufferAttribute(this,e),na.applyMatrix3(t),this.setXY(e,na.x,na.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)pn.fromBufferAttribute(this,e),pn.applyMatrix3(t),this.setXYZ(e,pn.x,pn.y,pn.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)pn.fromBufferAttribute(this,e),pn.applyMatrix4(t),this.setXYZ(e,pn.x,pn.y,pn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)pn.fromBufferAttribute(this,e),pn.applyNormalMatrix(t),this.setXYZ(e,pn.x,pn.y,pn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)pn.fromBufferAttribute(this,e),pn.transformDirection(t),this.setXYZ(e,pn.x,pn.y,pn.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Pi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Xe(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Pi(e,this.array)),e}setX(t,e){return this.normalized&&(e=Xe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Pi(e,this.array)),e}setY(t,e){return this.normalized&&(e=Xe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Pi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Xe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Pi(e,this.array)),e}setW(t,e){return this.normalized&&(e=Xe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Xe(e,this.array),n=Xe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,r){return t*=this.itemSize,this.normalized&&(e=Xe(e,this.array),n=Xe(n,this.array),r=Xe(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t*=this.itemSize,this.normalized&&(e=Xe(e,this.array),n=Xe(n,this.array),r=Xe(r,this.array),s=Xe(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==wa&&(t.usage=this.usage),t}};var po=class extends Pe{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var mo=class extends Pe{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var ae=class extends Pe{constructor(t,e,n){super(new Float32Array(t),e,n)}},Gd=0,fi=new Fe,zc=new $n,us=new k,ei=new pr,eo=new pr,Sn=new k,Le=class i extends Qi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Gd++}),this.uuid=$i(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(vh(t)?mo:po)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new be().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return fi.makeRotationFromQuaternion(t),this.applyMatrix4(fi),this}rotateX(t){return fi.makeRotationX(t),this.applyMatrix4(fi),this}rotateY(t){return fi.makeRotationY(t),this.applyMatrix4(fi),this}rotateZ(t){return fi.makeRotationZ(t),this.applyMatrix4(fi),this}translate(t,e,n){return fi.makeTranslation(t,e,n),this.applyMatrix4(fi),this}scale(t,e,n){return fi.makeScale(t,e,n),this.applyMatrix4(fi),this}lookAt(t){return zc.lookAt(t),zc.updateMatrix(),this.applyMatrix4(zc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(us).negate(),this.translate(us.x,us.y,us.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let r=0,s=t.length;r<s;r++){let o=t[r];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ae(n,3))}else{let n=Math.min(t.length,e.count);for(let r=0;r<n;r++){let s=t[r];e.setXYZ(r,s.x,s.y,s.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new pr);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,r=e.length;n<r;n++){let s=e[n];ei.setFromBufferAttribute(s),this.morphTargetsRelative?(Sn.addVectors(this.boundingBox.min,ei.min),this.boundingBox.expandByPoint(Sn),Sn.addVectors(this.boundingBox.max,ei.max),this.boundingBox.expandByPoint(Sn)):(this.boundingBox.expandByPoint(ei.min),this.boundingBox.expandByPoint(ei.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new zr);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(t){let n=this.boundingSphere.center;if(ei.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){let a=e[s];eo.setFromBufferAttribute(a),this.morphTargetsRelative?(Sn.addVectors(ei.min,eo.min),ei.expandByPoint(Sn),Sn.addVectors(ei.max,eo.max),ei.expandByPoint(Sn)):(ei.expandByPoint(eo.min),ei.expandByPoint(eo.max))}ei.getCenter(n);let r=0;for(let s=0,o=t.count;s<o;s++)Sn.fromBufferAttribute(t,s),r=Math.max(r,n.distanceToSquared(Sn));if(e)for(let s=0,o=e.length;s<o;s++){let a=e[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Sn.fromBufferAttribute(a,c),l&&(us.fromBufferAttribute(t,c),Sn.add(us)),r=Math.max(r,n.distanceToSquared(Sn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,r=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Pe(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let T=0;T<n.count;T++)a[T]=new k,l[T]=new k;let c=new k,u=new k,h=new k,f=new mt,d=new mt,p=new mt,x=new k,g=new k;function m(T,b,S){c.fromBufferAttribute(n,T),u.fromBufferAttribute(n,b),h.fromBufferAttribute(n,S),f.fromBufferAttribute(s,T),d.fromBufferAttribute(s,b),p.fromBufferAttribute(s,S),u.sub(c),h.sub(c),d.sub(f),p.sub(f);let A=1/(d.x*p.y-p.x*d.y);isFinite(A)&&(x.copy(u).multiplyScalar(p.y).addScaledVector(h,-d.y).multiplyScalar(A),g.copy(h).multiplyScalar(d.x).addScaledVector(u,-p.x).multiplyScalar(A),a[T].add(x),a[b].add(x),a[S].add(x),l[T].add(g),l[b].add(g),l[S].add(g))}let _=this.groups;_.length===0&&(_=[{start:0,count:t.count}]);for(let T=0,b=_.length;T<b;++T){let S=_[T],A=S.start,I=S.count;for(let P=A,B=A+I;P<B;P+=3)m(t.getX(P+0),t.getX(P+1),t.getX(P+2))}let y=new k,v=new k,w=new k,M=new k;function E(T){w.fromBufferAttribute(r,T),M.copy(w);let b=a[T];y.copy(b),y.sub(w.multiplyScalar(w.dot(b))).normalize(),v.crossVectors(M,b);let A=v.dot(l[T])<0?-1:1;o.setXYZW(T,y.x,y.y,y.z,A)}for(let T=0,b=_.length;T<b;++T){let S=_[T],A=S.start,I=S.count;for(let P=A,B=A+I;P<B;P+=3)E(t.getX(P+0)),E(t.getX(P+1)),E(t.getX(P+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Pe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let r=new k,s=new k,o=new k,a=new k,l=new k,c=new k,u=new k,h=new k;if(t)for(let f=0,d=t.count;f<d;f+=3){let p=t.getX(f+0),x=t.getX(f+1),g=t.getX(f+2);r.fromBufferAttribute(e,p),s.fromBufferAttribute(e,x),o.fromBufferAttribute(e,g),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),a.fromBufferAttribute(n,p),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,g),a.add(u),l.add(u),c.add(u),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let f=0,d=e.count;f<d;f+=3)r.fromBufferAttribute(e,f+0),s.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Sn.fromBufferAttribute(t,e),Sn.normalize(),t.setXYZ(e,Sn.x,Sn.y,Sn.z)}toNonIndexed(){function t(a,l){let c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u),d=0,p=0;for(let x=0,g=l.length;x<g;x++){a.isInterleavedBufferAttribute?d=l[x]*a.data.stride+a.offset:d=l[x]*u;for(let m=0;m<u;m++)f[p++]=c[d++]}return new Pe(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,r=this.attributes;for(let a in r){let l=r[a],c=t(l,n);e.setAttribute(a,c)}let s=this.morphAttributes;for(let a in s){let l=[],c=s[a];for(let u=0,h=c.length;u<h;u++){let f=c[u],d=t(f,n);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let r={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){let d=c[h];u.push(d.toJSON(t.data))}u.length>0&&(r[l]=u,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let r=t.attributes;for(let c in r){let u=r[c];this.setAttribute(c,u.clone(e))}let s=t.morphAttributes;for(let c in s){let u=[],h=s[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,u=o.length;c<u;c++){let h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},uu=new Fe,Lr=new bs,ia=new zr,fu=new k,ra=new k,sa=new k,oa=new k,kc=new k,aa=new k,du=new k,la=new k,le=class extends $n{constructor(t=new Le,e=new Ie){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){let n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(r,t);let a=this.morphTargetInfluences;if(s&&a){aa.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let u=a[l],h=s[l];u!==0&&(kc.fromBufferAttribute(h,t),o?aa.addScaledVector(kc,u):aa.addScaledVector(kc.sub(e),u))}e.add(aa)}return e}raycast(t,e){let n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ia.copy(n.boundingSphere),ia.applyMatrix4(s),Lr.copy(t.ray).recast(t.near),!(ia.containsPoint(Lr.origin)===!1&&(Lr.intersectSphere(ia,fu)===null||Lr.origin.distanceToSquared(fu)>(t.far-t.near)**2))&&(uu.copy(s).invert(),Lr.copy(t.ray).applyMatrix4(uu),!(n.boundingBox!==null&&Lr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Lr)))}_computeIntersections(t,e,n){let r,s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,f=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,x=f.length;p<x;p++){let g=f[p],m=o[g.materialIndex],_=Math.max(g.start,d.start),y=Math.min(a.count,Math.min(g.start+g.count,d.start+d.count));for(let v=_,w=y;v<w;v+=3){let M=a.getX(v),E=a.getX(v+1),T=a.getX(v+2);r=ca(this,m,t,n,c,u,h,M,E,T),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=g.materialIndex,e.push(r))}}else{let p=Math.max(0,d.start),x=Math.min(a.count,d.start+d.count);for(let g=p,m=x;g<m;g+=3){let _=a.getX(g),y=a.getX(g+1),v=a.getX(g+2);r=ca(this,o,t,n,c,u,h,_,y,v),r&&(r.faceIndex=Math.floor(g/3),e.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,x=f.length;p<x;p++){let g=f[p],m=o[g.materialIndex],_=Math.max(g.start,d.start),y=Math.min(l.count,Math.min(g.start+g.count,d.start+d.count));for(let v=_,w=y;v<w;v+=3){let M=v,E=v+1,T=v+2;r=ca(this,m,t,n,c,u,h,M,E,T),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=g.materialIndex,e.push(r))}}else{let p=Math.max(0,d.start),x=Math.min(l.count,d.start+d.count);for(let g=p,m=x;g<m;g+=3){let _=g,y=g+1,v=g+2;r=ca(this,o,t,n,c,u,h,_,y,v),r&&(r.faceIndex=Math.floor(g/3),e.push(r))}}}};function Wd(i,t,e,n,r,s,o,a){let l;if(t.side===Pn?l=n.intersectTriangle(o,s,r,!0,a):l=n.intersectTriangle(r,s,o,t.side===ni,a),l===null)return null;la.copy(a),la.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(la);return c<e.near||c>e.far?null:{distance:c,point:la.clone(),object:i}}function ca(i,t,e,n,r,s,o,a,l,c){i.getVertexPosition(a,ra),i.getVertexPosition(l,sa),i.getVertexPosition(c,oa);let u=Wd(i,t,e,n,ra,sa,oa,du);if(u){let h=new k;Ji.getBarycoord(du,ra,sa,oa,h),r&&(u.uv=Ji.getInterpolatedAttribute(r,a,l,c,h,new mt)),s&&(u.uv1=Ji.getInterpolatedAttribute(s,a,l,c,h,new mt)),o&&(u.normal=Ji.getInterpolatedAttribute(o,a,l,c,h,new k),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new k,materialIndex:0};Ji.getNormal(ra,sa,oa,f.normal),u.face=f,u.barycoord=h}return u}var Ue=class i extends Le{constructor(t=1,e=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};let a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);let l=[],c=[],u=[],h=[],f=0,d=0;p("z","y","x",-1,-1,n,e,t,o,s,0),p("z","y","x",1,-1,n,e,-t,o,s,1),p("x","z","y",1,1,t,n,e,r,o,2),p("x","z","y",1,-1,t,n,-e,r,o,3),p("x","y","z",1,-1,t,e,n,r,s,4),p("x","y","z",-1,-1,t,e,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new ae(c,3)),this.setAttribute("normal",new ae(u,3)),this.setAttribute("uv",new ae(h,2));function p(x,g,m,_,y,v,w,M,E,T,b){let S=v/E,A=w/T,I=v/2,P=w/2,B=M/2,z=E+1,N=T+1,G=0,q=0,K=new k;for(let it=0;it<N;it++){let _t=it*A-P;for(let Xt=0;Xt<z;Xt++){let It=Xt*S-I;K[x]=It*_,K[g]=_t*y,K[m]=B,c.push(K.x,K.y,K.z),K[x]=0,K[g]=0,K[m]=M>0?1:-1,u.push(K.x,K.y,K.z),h.push(Xt/E),h.push(1-it/T),G+=1}}for(let it=0;it<T;it++)for(let _t=0;_t<E;_t++){let Xt=f+_t+z*it,It=f+_t+z*(it+1),Ot=f+(_t+1)+z*(it+1),_e=f+(_t+1)+z*it;l.push(Xt,It,_e),l.push(It,Ot,_e),q+=6}a.addGroup(d,q,b),d+=q,f+=G}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function qr(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let r=i[e][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=r.clone():Array.isArray(r)?t[e][n]=r.slice():t[e][n]=r}}return t}function Fn(i){let t={};for(let e=0;e<i.length;e++){let n=qr(i[e]);for(let r in n)t[r]=n[r]}return t}function Xd(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function yh(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ne.workingColorSpace}var Bn={clone:qr,merge:Fn},qd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Yd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,He=class extends ji{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=qd,this.fragmentShader=Yd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=qr(t.uniforms),this.uniformsGroups=Xd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let r in this.uniforms){let o=this.uniforms[r].value;o&&o.isTexture?e.uniforms[r]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[r]={type:"m4",value:o.toArray()}:e.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},go=class extends $n{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Fe,this.projectionMatrix=new Fe,this.projectionMatrixInverse=new Fe,this.coordinateSystem=Si,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},ur=new k,pu=new mt,mu=new mt,En=class extends go{constructor(t=50,e=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Ta*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(vc*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ta*2*Math.atan(Math.tan(vc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ur.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ur.x,ur.y).multiplyScalar(-t/ur.z),ur.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ur.x,ur.y).multiplyScalar(-t/ur.z)}getViewSize(t,e){return this.getViewBounds(t,pu,mu),e.subVectors(mu,pu)}setViewOffset(t,e,n,r,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(vc*.5*this.fov)/this.zoom,n=2*e,r=this.aspect*n,s=-.5*r,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,e-=o.offsetY*n/c,r*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},fs=-90,ds=1,Pa=class extends $n{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new En(fs,ds,t,e);r.layers=this.layers,this.add(r);let s=new En(fs,ds,t,e);s.layers=this.layers,this.add(s);let o=new En(fs,ds,t,e);o.layers=this.layers,this.add(o);let a=new En(fs,ds,t,e);a.layers=this.layers,this.add(a);let l=new En(fs,ds,t,e);l.layers=this.layers,this.add(l);let c=new En(fs,ds,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,r,s,o,a,l]=e;for(let c of e)this.remove(c);if(t===Si)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===ho)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,l,c,u]=this.children,h=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,r),t.render(e,s),t.setRenderTarget(n,1,r),t.render(e,o),t.setRenderTarget(n,2,r),t.render(e,a),t.setRenderTarget(n,3,r),t.render(e,l),t.setRenderTarget(n,4,r),t.render(e,c),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,r),t.render(e,u),t.setRenderTarget(h,f,d),t.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},xo=class extends Vn{constructor(t=[],e=Wr,n,r,s,o,a,l,c,u){super(t,e,n,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Ia=class extends wn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},r=[n,n,n,n,n,n];this.texture=new xo(r),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Ue(5,5,5),s=new He({name:"CubemapFromEquirect",uniforms:qr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Pn,blending:Ai});s.uniforms.tEquirect.value=e;let o=new le(r,s),a=e.minFilter;return e.minFilter===_r&&(e.minFilter=wi),new Pa(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,r=!0){let s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,r);t.setRenderTarget(s)}},Rn=class extends $n{constructor(){super(),this.isGroup=!0,this.type="Group"}},Zd={type:"move"},Es=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Rn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Rn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Rn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let r=null,s=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let x of t.hand.values()){let g=e.getJointPose(x,n),m=this._getHandJoint(c,x);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}let u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,p=.005;c.inputState.pinching&&f>d+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=d-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=e.getPose(t.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Zd)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Rn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},_o=class i{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Vt(t),this.density=e}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var vo=class extends $n{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Di,this.environmentIntensity=1,this.environmentRotation=new Di,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},yo=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=wa,this.updateRanges=[],this.version=0,this.uuid=$i()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let r=0,s=this.stride;r<s;r++)this.array[t+r]=e.array[n+r];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=$i()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=$i()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Hn=new k,ws=class i{constructor(t,e,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Hn.fromBufferAttribute(this,e),Hn.applyMatrix4(t),this.setXYZ(e,Hn.x,Hn.y,Hn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Hn.fromBufferAttribute(this,e),Hn.applyNormalMatrix(t),this.setXYZ(e,Hn.x,Hn.y,Hn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Hn.fromBufferAttribute(this,e),Hn.transformDirection(t),this.setXYZ(e,Hn.x,Hn.y,Hn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Pi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Xe(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=Xe(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Xe(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Xe(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Xe(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Pi(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Pi(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Pi(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Pi(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Xe(e,this.array),n=Xe(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Xe(e,this.array),n=Xe(n,this.array),r=Xe(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Xe(e,this.array),n=Xe(n,this.array),r=Xe(r,this.array),s=Xe(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=r,this.data.array[t+3]=s,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[r+s])}return new Pe(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},ii=class extends ji{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Vt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},ps,no=new k,ms=new k,gs=new k,xs=new mt,io=new mt,uf=new Fe,ha=new k,ro=new k,ua=new k,gu=new mt,Hc=new mt,xu=new mt,pi=class extends $n{constructor(t=new ii){if(super(),this.isSprite=!0,this.type="Sprite",ps===void 0){ps=new Le;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new yo(e,5);ps.setIndex([0,1,2,0,2,3]),ps.setAttribute("position",new ws(n,3,0,!1)),ps.setAttribute("uv",new ws(n,2,3,!1))}this.geometry=ps,this.material=t,this.center=new mt(.5,.5),this.count=1}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ms.setFromMatrixScale(this.matrixWorld),uf.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),gs.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ms.multiplyScalar(-gs.z);let n=this.material.rotation,r,s;n!==0&&(s=Math.cos(n),r=Math.sin(n));let o=this.center;fa(ha.set(-.5,-.5,0),gs,o,ms,r,s),fa(ro.set(.5,-.5,0),gs,o,ms,r,s),fa(ua.set(.5,.5,0),gs,o,ms,r,s),gu.set(0,0),Hc.set(1,0),xu.set(1,1);let a=t.ray.intersectTriangle(ha,ro,ua,!1,no);if(a===null&&(fa(ro.set(-.5,.5,0),gs,o,ms,r,s),Hc.set(0,1),a=t.ray.intersectTriangle(ha,ua,ro,!1,no),a===null))return;let l=t.ray.origin.distanceTo(no);l<t.near||l>t.far||e.push({distance:l,point:no.clone(),uv:Ji.getInterpolation(no,ha,ro,ua,gu,Hc,xu,new mt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function fa(i,t,e,n,r,s){xs.subVectors(i,e).addScalar(.5).multiply(n),r!==void 0?(io.x=s*xs.x-r*xs.y,io.y=r*xs.x+s*xs.y):io.copy(xs),i.copy(t),i.x+=io.x,i.y+=io.y,i.applyMatrix4(uf)}var Ts=class extends Vn{constructor(t=null,e=1,n=1,r,s,o,a,l,c=Jn,u=Jn,h,f){super(null,o,a,l,c,u,r,s,h,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Vc=new k,Jd=new k,$d=new be,Zn=class{constructor(t=new k(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,r){return this.normal.set(t,e,n),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let r=Vc.subVectors(n,e).cross(Jd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(Vc),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||$d.getNormalMatrix(t),r=this.coplanarPoint(Vc).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ur=new zr,Kd=new mt(.5,.5),da=new k,Mo=class{constructor(t=new Zn,e=new Zn,n=new Zn,r=new Zn,s=new Zn,o=new Zn){this.planes=[t,e,n,r,s,o]}set(t,e,n,r,s,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Si,n=!1){let r=this.planes,s=t.elements,o=s[0],a=s[1],l=s[2],c=s[3],u=s[4],h=s[5],f=s[6],d=s[7],p=s[8],x=s[9],g=s[10],m=s[11],_=s[12],y=s[13],v=s[14],w=s[15];if(r[0].setComponents(c-o,d-u,m-p,w-_).normalize(),r[1].setComponents(c+o,d+u,m+p,w+_).normalize(),r[2].setComponents(c+a,d+h,m+x,w+y).normalize(),r[3].setComponents(c-a,d-h,m-x,w-y).normalize(),n)r[4].setComponents(l,f,g,v).normalize(),r[5].setComponents(c-l,d-f,m-g,w-v).normalize();else if(r[4].setComponents(c-l,d-f,m-g,w-v).normalize(),e===Si)r[5].setComponents(c+l,d+f,m+g,w+v).normalize();else if(e===ho)r[5].setComponents(l,f,g,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ur.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ur.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ur)}intersectsSprite(t){Ur.center.set(0,0,0);let e=Kd.distanceTo(t.center);return Ur.radius=.7071067811865476+e,Ur.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ur)}intersectsSphere(t){let e=this.planes,n=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let r=e[n];if(da.x=r.normal.x>0?t.max.x:t.min.x,da.y=r.normal.y>0?t.max.y:t.min.y,da.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(da)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Da=class extends ji{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Vt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},_u=new Fe,$c=new bs,pa=new zr,ma=new k,As=class extends $n{constructor(t=new Le,e=new Da){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,r=this.matrixWorld,s=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),pa.copy(n.boundingSphere),pa.applyMatrix4(r),pa.radius+=s,t.ray.intersectsSphere(pa)===!1)return;_u.copy(r).invert(),$c.copy(t.ray).applyMatrix4(_u);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){let f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let p=f,x=d;p<x;p++){let g=c.getX(p);ma.fromBufferAttribute(h,g),vu(ma,g,l,r,t,e,this)}}else{let f=Math.max(0,o.start),d=Math.min(h.count,o.start+o.count);for(let p=f,x=d;p<x;p++)ma.fromBufferAttribute(h,p),vu(ma,p,l,r,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function vu(i,t,e,n,r,s,o){let a=$c.distanceSqToPoint(i);if(a<e){let l=new k;$c.closestPointToPoint(i,l),l.applyMatrix4(n);let c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var mi=class extends Vn{constructor(t,e,n,r,s,o,a,l,c){super(t,e,n,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},bo=class extends Vn{constructor(t,e,n=vr,r,s,o,a=Jn,l=Jn,c,u=vs,h=1){if(u!==vs&&u!==Ns)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:t,height:e,depth:h};super(f,r,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Ms(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},So=class extends Vn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}};var Cn=class i extends Le{constructor(t=1,e=32,n=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:r},e=Math.max(3,e);let s=[],o=[],a=[],l=[],c=new k,u=new mt;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let h=0,f=3;h<=e;h++,f+=3){let d=n+h/e*r;c.x=t*Math.cos(d),c.y=t*Math.sin(d),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[f]/t+1)/2,u.y=(o[f+1]/t+1)/2,l.push(u.x,u.y)}for(let h=1;h<=e;h++)s.push(h,h+1,0);this.setIndex(s),this.setAttribute("position",new ae(o,3)),this.setAttribute("normal",new ae(a,3)),this.setAttribute("uv",new ae(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Ce=class i extends Le{constructor(t=1,e=1,n=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};let c=this;r=Math.floor(r),s=Math.floor(s);let u=[],h=[],f=[],d=[],p=0,x=[],g=n/2,m=0;_(),o===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(u),this.setAttribute("position",new ae(h,3)),this.setAttribute("normal",new ae(f,3)),this.setAttribute("uv",new ae(d,2));function _(){let v=new k,w=new k,M=0,E=(e-t)/n;for(let T=0;T<=s;T++){let b=[],S=T/s,A=S*(e-t)+t;for(let I=0;I<=r;I++){let P=I/r,B=P*l+a,z=Math.sin(B),N=Math.cos(B);w.x=A*z,w.y=-S*n+g,w.z=A*N,h.push(w.x,w.y,w.z),v.set(z,E,N).normalize(),f.push(v.x,v.y,v.z),d.push(P,1-S),b.push(p++)}x.push(b)}for(let T=0;T<r;T++)for(let b=0;b<s;b++){let S=x[b][T],A=x[b+1][T],I=x[b+1][T+1],P=x[b][T+1];(t>0||b!==0)&&(u.push(S,A,P),M+=3),(e>0||b!==s-1)&&(u.push(A,I,P),M+=3)}c.addGroup(m,M,0),m+=M}function y(v){let w=p,M=new mt,E=new k,T=0,b=v===!0?t:e,S=v===!0?1:-1;for(let I=1;I<=r;I++)h.push(0,g*S,0),f.push(0,S,0),d.push(.5,.5),p++;let A=p;for(let I=0;I<=r;I++){let B=I/r*l+a,z=Math.cos(B),N=Math.sin(B);E.x=b*N,E.y=g*S,E.z=b*z,h.push(E.x,E.y,E.z),f.push(0,S,0),M.x=z*.5+.5,M.y=N*.5*S+.5,d.push(M.x,M.y),p++}for(let I=0;I<r;I++){let P=w+I,B=A+I;v===!0?u.push(B,B+1,P):u.push(B+1,B,P),T+=3}c.addGroup(m,T,v===!0?1:2),m+=T}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Nn=class i extends Ce{constructor(t=1,e=1,n=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,t,e,n,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Eo=class i extends Le{constructor(t=[],e=[],n=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:r};let s=[],o=[];a(r),c(n),u(),this.setAttribute("position",new ae(s,3)),this.setAttribute("normal",new ae(s.slice(),3)),this.setAttribute("uv",new ae(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(_){let y=new k,v=new k,w=new k;for(let M=0;M<e.length;M+=3)d(e[M+0],y),d(e[M+1],v),d(e[M+2],w),l(y,v,w,_)}function l(_,y,v,w){let M=w+1,E=[];for(let T=0;T<=M;T++){E[T]=[];let b=_.clone().lerp(v,T/M),S=y.clone().lerp(v,T/M),A=M-T;for(let I=0;I<=A;I++)I===0&&T===M?E[T][I]=b:E[T][I]=b.clone().lerp(S,I/A)}for(let T=0;T<M;T++)for(let b=0;b<2*(M-T)-1;b++){let S=Math.floor(b/2);b%2===0?(f(E[T][S+1]),f(E[T+1][S]),f(E[T][S])):(f(E[T][S+1]),f(E[T+1][S+1]),f(E[T+1][S]))}}function c(_){let y=new k;for(let v=0;v<s.length;v+=3)y.x=s[v+0],y.y=s[v+1],y.z=s[v+2],y.normalize().multiplyScalar(_),s[v+0]=y.x,s[v+1]=y.y,s[v+2]=y.z}function u(){let _=new k;for(let y=0;y<s.length;y+=3){_.x=s[y+0],_.y=s[y+1],_.z=s[y+2];let v=g(_)/2/Math.PI+.5,w=m(_)/Math.PI+.5;o.push(v,1-w)}p(),h()}function h(){for(let _=0;_<o.length;_+=6){let y=o[_+0],v=o[_+2],w=o[_+4],M=Math.max(y,v,w),E=Math.min(y,v,w);M>.9&&E<.1&&(y<.2&&(o[_+0]+=1),v<.2&&(o[_+2]+=1),w<.2&&(o[_+4]+=1))}}function f(_){s.push(_.x,_.y,_.z)}function d(_,y){let v=_*3;y.x=t[v+0],y.y=t[v+1],y.z=t[v+2]}function p(){let _=new k,y=new k,v=new k,w=new k,M=new mt,E=new mt,T=new mt;for(let b=0,S=0;b<s.length;b+=9,S+=6){_.set(s[b+0],s[b+1],s[b+2]),y.set(s[b+3],s[b+4],s[b+5]),v.set(s[b+6],s[b+7],s[b+8]),M.set(o[S+0],o[S+1]),E.set(o[S+2],o[S+3]),T.set(o[S+4],o[S+5]),w.copy(_).add(y).add(v).divideScalar(3);let A=g(w);x(M,S+0,_,A),x(E,S+2,y,A),x(T,S+4,v,A)}}function x(_,y,v,w){w<0&&_.x===1&&(o[y]=_.x-1),v.x===0&&v.z===0&&(o[y]=w/2/Math.PI+.5)}function g(_){return Math.atan2(_.z,-_.x)}function m(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.details)}};var ri=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,r=this.getPoint(0),s=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),s+=n.distanceTo(r),e.push(s),r=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),r=0,s=n.length,o;e?o=e:o=t*n[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=n[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,n[r]===o)return r/(s-1);let u=n[r],f=n[r+1]-u,d=(o-u)/f;return(r+d)/(s-1)}getTangent(t,e){let r=t-1e-4,s=t+1e-4;r<0&&(r=0),s>1&&(s=1);let o=this.getPoint(r),a=this.getPoint(s),l=e||(o.isVector2?new mt:new k);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new k,r=[],s=[],o=[],a=new k,l=new Fe;for(let d=0;d<=t;d++){let p=d/t;r[d]=this.getTangentAt(p,new k)}s[0]=new k,o[0]=new k;let c=Number.MAX_VALUE,u=Math.abs(r[0].x),h=Math.abs(r[0].y),f=Math.abs(r[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let d=1;d<=t;d++){if(s[d]=s[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(r[d-1],r[d]),a.length()>Number.EPSILON){a.normalize();let p=Math.acos(Re(r[d-1].dot(r[d]),-1,1));s[d].applyMatrix4(l.makeRotationAxis(a,p))}o[d].crossVectors(r[d],s[d])}if(e===!0){let d=Math.acos(Re(s[0].dot(s[t]),-1,1));d/=t,r[0].dot(a.crossVectors(s[0],s[t]))>0&&(d=-d);for(let p=1;p<=t;p++)s[p].applyMatrix4(l.makeRotationAxis(r[p],d*p)),o[p].crossVectors(r[p],s[p])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Rs=class extends ri{constructor(t=0,e=0,n=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new mt){let n=e,r=Math.PI*2,s=this.aEndAngle-this.aStartAngle,o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);let a=this.aStartAngle+t*s,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*u-d*h+this.aX,c=f*h+d*u+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},La=class extends Rs{constructor(t,e,n,r,s,o){super(t,e,n,n,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Mh(){let i=0,t=0,e=0,n=0;function r(s,o,a,l){i=s,t=a,e=-3*s+3*o-2*a-l,n=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){r(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,u,h){let f=(o-s)/c-(a-s)/(c+u)+(a-o)/u,d=(a-o)/u-(l-o)/(u+h)+(l-a)/h;f*=u,d*=u,r(o,a,f,d)},calc:function(s){let o=s*s,a=o*s;return i+t*s+e*o+n*a}}}var ga=new k,Gc=new Mh,Wc=new Mh,Xc=new Mh,Ua=class extends ri{constructor(t=[],e=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=r}getPoint(t,e=new k){let n=e,r=this.points,s=r.length,o=(s-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,u;this.closed||a>0?c=r[(a-1)%s]:(ga.subVectors(r[0],r[1]).add(r[0]),c=ga);let h=r[a%s],f=r[(a+1)%s];if(this.closed||a+2<s?u=r[(a+2)%s]:(ga.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=ga),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(h),d),x=Math.pow(h.distanceToSquared(f),d),g=Math.pow(f.distanceToSquared(u),d);x<1e-4&&(x=1),p<1e-4&&(p=x),g<1e-4&&(g=x),Gc.initNonuniformCatmullRom(c.x,h.x,f.x,u.x,p,x,g),Wc.initNonuniformCatmullRom(c.y,h.y,f.y,u.y,p,x,g),Xc.initNonuniformCatmullRom(c.z,h.z,f.z,u.z,p,x,g)}else this.curveType==="catmullrom"&&(Gc.initCatmullRom(c.x,h.x,f.x,u.x,this.tension),Wc.initCatmullRom(c.y,h.y,f.y,u.y,this.tension),Xc.initCatmullRom(c.z,h.z,f.z,u.z,this.tension));return n.set(Gc.calc(l),Wc.calc(l),Xc.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let r=t.points[e];this.points.push(r.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let r=this.points[e];t.points.push(r.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let r=t.points[e];this.points.push(new k().fromArray(r))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function yu(i,t,e,n,r){let s=(n-t)*.5,o=(r-e)*.5,a=i*i,l=i*a;return(2*e-2*n+s+o)*l+(-3*e+3*n-2*s-o)*a+s*i+e}function Qd(i,t){let e=1-i;return e*e*t}function jd(i,t){return 2*(1-i)*i*t}function tp(i,t){return i*i*t}function oo(i,t,e,n){return Qd(i,t)+jd(i,e)+tp(i,n)}function ep(i,t){let e=1-i;return e*e*e*t}function np(i,t){let e=1-i;return 3*e*e*i*t}function ip(i,t){return 3*(1-i)*i*i*t}function rp(i,t){return i*i*i*t}function ao(i,t,e,n,r){return ep(i,t)+np(i,e)+ip(i,n)+rp(i,r)}var wo=class extends ri{constructor(t=new mt,e=new mt,n=new mt,r=new mt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=r}getPoint(t,e=new mt){let n=e,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(ao(t,r.x,s.x,o.x,a.x),ao(t,r.y,s.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Na=class extends ri{constructor(t=new k,e=new k,n=new k,r=new k){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=r}getPoint(t,e=new k){let n=e,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(ao(t,r.x,s.x,o.x,a.x),ao(t,r.y,s.y,o.y,a.y),ao(t,r.z,s.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},To=class extends ri{constructor(t=new mt,e=new mt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new mt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new mt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Fa=class extends ri{constructor(t=new k,e=new k){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new k){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new k){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ao=class extends ri{constructor(t=new mt,e=new mt,n=new mt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new mt){let n=e,r=this.v0,s=this.v1,o=this.v2;return n.set(oo(t,r.x,s.x,o.x),oo(t,r.y,s.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ba=class extends ri{constructor(t=new k,e=new k,n=new k){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new k){let n=e,r=this.v0,s=this.v1,o=this.v2;return n.set(oo(t,r.x,s.x,o.x),oo(t,r.y,s.y,o.y),oo(t,r.z,s.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ro=class extends ri{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new mt){let n=e,r=this.points,s=(r.length-1)*t,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],c=r[o],u=r[o>r.length-2?r.length-1:o+1],h=r[o>r.length-3?r.length-1:o+2];return n.set(yu(a,l.x,c.x,u.x,h.x),yu(a,l.y,c.y,u.y,h.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let r=t.points[e];this.points.push(r.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let r=this.points[e];t.points.push(r.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let r=t.points[e];this.points.push(new mt().fromArray(r))}return this}},Kc=Object.freeze({__proto__:null,ArcCurve:La,CatmullRomCurve3:Ua,CubicBezierCurve:wo,CubicBezierCurve3:Na,EllipseCurve:Rs,LineCurve:To,LineCurve3:Fa,QuadraticBezierCurve:Ao,QuadraticBezierCurve3:Ba,SplineCurve:Ro}),Oa=class extends ri{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Kc[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),r=this.getCurveLengths(),s=0;for(;s<r.length;){if(r[s]>=n){let o=r[s]-n,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}s++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,r=this.curves.length;n<r;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let r=0,s=this.curves;r<s.length;r++){let o=s[r],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){let u=l[c];n&&n.equals(u)||(e.push(u),n=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let r=t.curves[e];this.curves.push(r.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let r=this.curves[e];t.curves.push(r.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let r=t.curves[e];this.curves.push(new Kc[r.type]().fromJSON(r))}return this}},Li=class extends Oa{constructor(t){super(),this.type="Path",this.currentPoint=new mt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new To(this.currentPoint.clone(),new mt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,r){let s=new Ao(this.currentPoint.clone(),new mt(t,e),new mt(n,r));return this.curves.push(s),this.currentPoint.set(n,r),this}bezierCurveTo(t,e,n,r,s,o){let a=new wo(this.currentPoint.clone(),new mt(t,e),new mt(n,r),new mt(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Ro(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,r,s,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,r,s,o),this}absarc(t,e,n,r,s,o){return this.absellipse(t,e,n,n,r,s,o),this}ellipse(t,e,n,r,s,o,a,l){let c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+c,e+u,n,r,s,o,a,l),this}absellipse(t,e,n,r,s,o,a,l){let c=new Rs(t,e,n,r,s,o,a,l);if(this.curves.length>0){let h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);let u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Tn=class extends Li{constructor(t){super(t),this.uuid=$i(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,r=this.holes.length;n<r;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let r=t.holes[e];this.holes.push(r.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let r=this.holes[e];t.holes.push(r.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let r=t.holes[e];this.holes.push(new Li().fromJSON(r))}return this}};function sp(i,t,e=2){let n=t&&t.length,r=n?t[0]*e:i.length,s=ff(i,0,r,e,!0),o=[];if(!s||s.next===s.prev)return o;let a,l,c;if(n&&(s=hp(i,t,s,e)),i.length>80*e){a=1/0,l=1/0;let u=-1/0,h=-1/0;for(let f=e;f<r;f+=e){let d=i[f],p=i[f+1];d<a&&(a=d),p<l&&(l=p),d>u&&(u=d),p>h&&(h=p)}c=Math.max(u-a,h-l),c=c!==0?32767/c:0}return Co(s,o,e,a,l,c,0),o}function ff(i,t,e,n,r){let s;if(r===Mp(i,t,e,n)>0)for(let o=t;o<e;o+=n)s=Mu(o/n|0,i[o],i[o+1],s);else for(let o=e-n;o>=t;o-=n)s=Mu(o/n|0,i[o],i[o+1],s);return s&&Cs(s,s.next)&&(Io(s),s=s.next),s}function kr(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Cs(e,e.next)||ln(e.prev,e,e.next)===0)){if(Io(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Co(i,t,e,n,r,s,o){if(!i)return;!o&&s&&mp(i,n,r,s);let a=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(s?ap(i,n,r,s):op(i)){t.push(l.i,i.i,c.i),Io(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=lp(kr(i),t),Co(i,t,e,n,r,s,2)):o===2&&cp(i,t,e,n,r,s):Co(kr(i),t,e,n,r,s,1);break}}}function op(i){let t=i.prev,e=i,n=i.next;if(ln(t,e,n)>=0)return!1;let r=t.x,s=e.x,o=n.x,a=t.y,l=e.y,c=n.y,u=Math.min(r,s,o),h=Math.min(a,l,c),f=Math.max(r,s,o),d=Math.max(a,l,c),p=n.next;for(;p!==t;){if(p.x>=u&&p.x<=f&&p.y>=h&&p.y<=d&&so(r,a,s,l,o,c,p.x,p.y)&&ln(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function ap(i,t,e,n){let r=i.prev,s=i,o=i.next;if(ln(r,s,o)>=0)return!1;let a=r.x,l=s.x,c=o.x,u=r.y,h=s.y,f=o.y,d=Math.min(a,l,c),p=Math.min(u,h,f),x=Math.max(a,l,c),g=Math.max(u,h,f),m=Qc(d,p,t,e,n),_=Qc(x,g,t,e,n),y=i.prevZ,v=i.nextZ;for(;y&&y.z>=m&&v&&v.z<=_;){if(y.x>=d&&y.x<=x&&y.y>=p&&y.y<=g&&y!==r&&y!==o&&so(a,u,l,h,c,f,y.x,y.y)&&ln(y.prev,y,y.next)>=0||(y=y.prevZ,v.x>=d&&v.x<=x&&v.y>=p&&v.y<=g&&v!==r&&v!==o&&so(a,u,l,h,c,f,v.x,v.y)&&ln(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;y&&y.z>=m;){if(y.x>=d&&y.x<=x&&y.y>=p&&y.y<=g&&y!==r&&y!==o&&so(a,u,l,h,c,f,y.x,y.y)&&ln(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;v&&v.z<=_;){if(v.x>=d&&v.x<=x&&v.y>=p&&v.y<=g&&v!==r&&v!==o&&so(a,u,l,h,c,f,v.x,v.y)&&ln(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function lp(i,t){let e=i;do{let n=e.prev,r=e.next.next;!Cs(n,r)&&pf(n,e,e.next,r)&&Po(n,r)&&Po(r,n)&&(t.push(n.i,e.i,r.i),Io(e),Io(e.next),e=i=r),e=e.next}while(e!==i);return kr(e)}function cp(i,t,e,n,r,s){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&_p(o,a)){let l=mf(o,a);o=kr(o,o.next),l=kr(l,l.next),Co(o,t,e,n,r,s,0),Co(l,t,e,n,r,s,0);return}a=a.next}o=o.next}while(o!==i)}function hp(i,t,e,n){let r=[];for(let s=0,o=t.length;s<o;s++){let a=t[s]*n,l=s<o-1?t[s+1]*n:i.length,c=ff(i,a,l,n,!1);c===c.next&&(c.steiner=!0),r.push(xp(c))}r.sort(up);for(let s=0;s<r.length;s++)e=fp(r[s],e);return e}function up(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),r=(t.next.y-t.y)/(t.next.x-t.x);e=n-r}return e}function fp(i,t){let e=dp(i,t);if(!e)return t;let n=mf(e,i);return kr(n,n.next),kr(e,e.next)}function dp(i,t){let e=t,n=i.x,r=i.y,s=-1/0,o;if(Cs(i,e))return e;do{if(Cs(i,e.next))return e.next;if(r<=e.y&&r>=e.next.y&&e.next.y!==e.y){let h=e.x+(r-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(h<=n&&h>s&&(s=h,o=e.x<e.next.x?e:e.next,h===n))return o}e=e.next}while(e!==t);if(!o)return null;let a=o,l=o.x,c=o.y,u=1/0;e=o;do{if(n>=e.x&&e.x>=l&&n!==e.x&&df(r<c?n:s,r,l,c,r<c?s:n,r,e.x,e.y)){let h=Math.abs(r-e.y)/(n-e.x);Po(e,i)&&(h<u||h===u&&(e.x>o.x||e.x===o.x&&pp(o,e)))&&(o=e,u=h)}e=e.next}while(e!==a);return o}function pp(i,t){return ln(i.prev,i,t.prev)<0&&ln(t.next,i,i.next)<0}function mp(i,t,e,n){let r=i;do r.z===0&&(r.z=Qc(r.x,r.y,t,e,n)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==i);r.prevZ.nextZ=null,r.prevZ=null,gp(r)}function gp(i){let t,e=1;do{let n=i,r;i=null;let s=null;for(t=0;n;){t++;let o=n,a=0;for(let c=0;c<e&&(a++,o=o.nextZ,!!o);c++);let l=e;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(r=n,n=n.nextZ,a--):(r=o,o=o.nextZ,l--),s?s.nextZ=r:i=r,r.prevZ=s,s=r;n=o}s.nextZ=null,e*=2}while(t>1);return i}function Qc(i,t,e,n,r){return i=(i-e)*r|0,t=(t-n)*r|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function xp(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function df(i,t,e,n,r,s,o,a){return(r-o)*(t-a)>=(i-o)*(s-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(s-a)>=(r-o)*(n-a)}function so(i,t,e,n,r,s,o,a){return!(i===o&&t===a)&&df(i,t,e,n,r,s,o,a)}function _p(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!vp(i,t)&&(Po(i,t)&&Po(t,i)&&yp(i,t)&&(ln(i.prev,i,t.prev)||ln(i,t.prev,t))||Cs(i,t)&&ln(i.prev,i,i.next)>0&&ln(t.prev,t,t.next)>0)}function ln(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Cs(i,t){return i.x===t.x&&i.y===t.y}function pf(i,t,e,n){let r=_a(ln(i,t,e)),s=_a(ln(i,t,n)),o=_a(ln(e,n,i)),a=_a(ln(e,n,t));return!!(r!==s&&o!==a||r===0&&xa(i,e,t)||s===0&&xa(i,n,t)||o===0&&xa(e,i,n)||a===0&&xa(e,t,n))}function xa(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function _a(i){return i>0?1:i<0?-1:0}function vp(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&pf(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Po(i,t){return ln(i.prev,i,i.next)<0?ln(i,t,i.next)>=0&&ln(i,i.prev,t)>=0:ln(i,t,i.prev)<0||ln(i,i.next,t)<0}function yp(i,t){let e=i,n=!1,r=(i.x+t.x)/2,s=(i.y+t.y)/2;do e.y>s!=e.next.y>s&&e.next.y!==e.y&&r<(e.next.x-e.x)*(s-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function mf(i,t){let e=jc(i.i,i.x,i.y),n=jc(t.i,t.x,t.y),r=i.next,s=t.prev;return i.next=t,t.prev=i,e.next=r,r.prev=e,n.next=e,e.prev=n,s.next=n,n.prev=s,n}function Mu(i,t,e,n){let r=jc(i,t,e);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function Io(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function jc(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Mp(i,t,e,n){let r=0;for(let s=t,o=e-n;s<e;s+=n)r+=(i[o]-i[s])*(i[s+1]+i[o+1]),o=s;return r}var th=class{static triangulate(t,e,n=2){return sp(t,e,n)}},Ii=class i{static area(t){let e=t.length,n=0;for(let r=e-1,s=0;s<e;r=s++)n+=t[r].x*t[s].y-t[s].x*t[r].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],r=[],s=[];bu(t),Su(n,t);let o=t.length;e.forEach(bu);for(let l=0;l<e.length;l++)r.push(o),o+=e[l].length,Su(n,e[l]);let a=th.triangulate(n,r);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}};function bu(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Su(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var Ti=class i extends Le{constructor(t=new Tn([new mt(.5,.5),new mt(-.5,.5),new mt(-.5,-.5),new mt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,r=[],s=[];for(let a=0,l=t.length;a<l;a++){let c=t[a];o(c)}this.setAttribute("position",new ae(r,3)),this.setAttribute("uv",new ae(s,2)),this.computeVertexNormals();function o(a){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,h=e.depth!==void 0?e.depth:1,f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,p=e.bevelSize!==void 0?e.bevelSize:d-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,g=e.bevelSegments!==void 0?e.bevelSegments:3,m=e.extrudePath,_=e.UVGenerator!==void 0?e.UVGenerator:bp,y,v=!1,w,M,E,T;m&&(y=m.getSpacedPoints(u),v=!0,f=!1,w=m.computeFrenetFrames(u,!1),M=new k,E=new k,T=new k),f||(g=0,d=0,p=0,x=0);let b=a.extractPoints(c),S=b.shape,A=b.holes;if(!Ii.isClockWise(S)){S=S.reverse();for(let ft=0,dt=A.length;ft<dt;ft++){let ut=A[ft];Ii.isClockWise(ut)&&(A[ft]=ut.reverse())}}function P(ft){let ut=10000000000000001e-36,ct=ft[0];for(let yt=1;yt<=ft.length;yt++){let gt=yt%ft.length,wt=ft[gt],he=wt.x-ct.x,re=wt.y-ct.y,U=he*he+re*re,R=Math.max(Math.abs(wt.x),Math.abs(wt.y),Math.abs(ct.x),Math.abs(ct.y)),$=ut*R*R;if(U<=$){ft.splice(gt,1),yt--;continue}ct=wt}}P(S),A.forEach(P);let B=A.length,z=S;for(let ft=0;ft<B;ft++){let dt=A[ft];S=S.concat(dt)}function N(ft,dt,ut){return dt||console.error("THREE.ExtrudeGeometry: vec does not exist"),ft.clone().addScaledVector(dt,ut)}let G=S.length;function q(ft,dt,ut){let ct,yt,gt,wt=ft.x-dt.x,he=ft.y-dt.y,re=ut.x-ft.x,U=ut.y-ft.y,R=wt*wt+he*he,$=wt*U-he*re;if(Math.abs($)>Number.EPSILON){let at=Math.sqrt(R),xt=Math.sqrt(re*re+U*U),ht=dt.x-he/at,$t=dt.y+wt/at,Ct=ut.x-U/xt,jt=ut.y+re/xt,qt=((Ct-ht)*U-(jt-$t)*re)/(wt*U-he*re);ct=ht+wt*qt-ft.x,yt=$t+he*qt-ft.y;let Tt=ct*ct+yt*yt;if(Tt<=2)return new mt(ct,yt);gt=Math.sqrt(Tt/2)}else{let at=!1;wt>Number.EPSILON?re>Number.EPSILON&&(at=!0):wt<-Number.EPSILON?re<-Number.EPSILON&&(at=!0):Math.sign(he)===Math.sign(U)&&(at=!0),at?(ct=-he,yt=wt,gt=Math.sqrt(R)):(ct=wt,yt=he,gt=Math.sqrt(R/2))}return new mt(ct/gt,yt/gt)}let K=[];for(let ft=0,dt=z.length,ut=dt-1,ct=ft+1;ft<dt;ft++,ut++,ct++)ut===dt&&(ut=0),ct===dt&&(ct=0),K[ft]=q(z[ft],z[ut],z[ct]);let it=[],_t,Xt=K.concat();for(let ft=0,dt=B;ft<dt;ft++){let ut=A[ft];_t=[];for(let ct=0,yt=ut.length,gt=yt-1,wt=ct+1;ct<yt;ct++,gt++,wt++)gt===yt&&(gt=0),wt===yt&&(wt=0),_t[ct]=q(ut[ct],ut[gt],ut[wt]);it.push(_t),Xt=Xt.concat(_t)}let It;if(g===0)It=Ii.triangulateShape(z,A);else{let ft=[],dt=[];for(let ut=0;ut<g;ut++){let ct=ut/g,yt=d*Math.cos(ct*Math.PI/2),gt=p*Math.sin(ct*Math.PI/2)+x;for(let wt=0,he=z.length;wt<he;wt++){let re=N(z[wt],K[wt],gt);j(re.x,re.y,-yt),ct===0&&ft.push(re)}for(let wt=0,he=B;wt<he;wt++){let re=A[wt];_t=it[wt];let U=[];for(let R=0,$=re.length;R<$;R++){let at=N(re[R],_t[R],gt);j(at.x,at.y,-yt),ct===0&&U.push(at)}ct===0&&dt.push(U)}}It=Ii.triangulateShape(ft,dt)}let Ot=It.length,_e=p+x;for(let ft=0;ft<G;ft++){let dt=f?N(S[ft],Xt[ft],_e):S[ft];v?(E.copy(w.normals[0]).multiplyScalar(dt.x),M.copy(w.binormals[0]).multiplyScalar(dt.y),T.copy(y[0]).add(E).add(M),j(T.x,T.y,T.z)):j(dt.x,dt.y,0)}for(let ft=1;ft<=u;ft++)for(let dt=0;dt<G;dt++){let ut=f?N(S[dt],Xt[dt],_e):S[dt];v?(E.copy(w.normals[ft]).multiplyScalar(ut.x),M.copy(w.binormals[ft]).multiplyScalar(ut.y),T.copy(y[ft]).add(E).add(M),j(T.x,T.y,T.z)):j(ut.x,ut.y,h/u*ft)}for(let ft=g-1;ft>=0;ft--){let dt=ft/g,ut=d*Math.cos(dt*Math.PI/2),ct=p*Math.sin(dt*Math.PI/2)+x;for(let yt=0,gt=z.length;yt<gt;yt++){let wt=N(z[yt],K[yt],ct);j(wt.x,wt.y,h+ut)}for(let yt=0,gt=A.length;yt<gt;yt++){let wt=A[yt];_t=it[yt];for(let he=0,re=wt.length;he<re;he++){let U=N(wt[he],_t[he],ct);v?j(U.x,U.y+y[u-1].y,y[u-1].x+ut):j(U.x,U.y,h+ut)}}}pt(),F();function pt(){let ft=r.length/3;if(f){let dt=0,ut=G*dt;for(let ct=0;ct<Ot;ct++){let yt=It[ct];ot(yt[2]+ut,yt[1]+ut,yt[0]+ut)}dt=u+g*2,ut=G*dt;for(let ct=0;ct<Ot;ct++){let yt=It[ct];ot(yt[0]+ut,yt[1]+ut,yt[2]+ut)}}else{for(let dt=0;dt<Ot;dt++){let ut=It[dt];ot(ut[2],ut[1],ut[0])}for(let dt=0;dt<Ot;dt++){let ut=It[dt];ot(ut[0]+G*u,ut[1]+G*u,ut[2]+G*u)}}n.addGroup(ft,r.length/3-ft,0)}function F(){let ft=r.length/3,dt=0;W(z,dt),dt+=z.length;for(let ut=0,ct=A.length;ut<ct;ut++){let yt=A[ut];W(yt,dt),dt+=yt.length}n.addGroup(ft,r.length/3-ft,1)}function W(ft,dt){let ut=ft.length;for(;--ut>=0;){let ct=ut,yt=ut-1;yt<0&&(yt=ft.length-1);for(let gt=0,wt=u+g*2;gt<wt;gt++){let he=G*gt,re=G*(gt+1),U=dt+ct+he,R=dt+yt+he,$=dt+yt+re,at=dt+ct+re;vt(U,R,$,at)}}}function j(ft,dt,ut){l.push(ft),l.push(dt),l.push(ut)}function ot(ft,dt,ut){Gt(ft),Gt(dt),Gt(ut);let ct=r.length/3,yt=_.generateTopUV(n,r,ct-3,ct-2,ct-1);O(yt[0]),O(yt[1]),O(yt[2])}function vt(ft,dt,ut,ct){Gt(ft),Gt(dt),Gt(ct),Gt(dt),Gt(ut),Gt(ct);let yt=r.length/3,gt=_.generateSideWallUV(n,r,yt-6,yt-3,yt-2,yt-1);O(gt[0]),O(gt[1]),O(gt[3]),O(gt[1]),O(gt[2]),O(gt[3])}function Gt(ft){r.push(l[ft*3+0]),r.push(l[ft*3+1]),r.push(l[ft*3+2])}function O(ft){s.push(ft.x),s.push(ft.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Sp(e,n,t)}static fromJSON(t,e){let n=[];for(let s=0,o=t.shapes.length;s<o;s++){let a=e[t.shapes[s]];n.push(a)}let r=t.options.extrudePath;return r!==void 0&&(t.options.extrudePath=new Kc[r.type]().fromJSON(r)),new i(n,t.options)}},bp={generateTopUV:function(i,t,e,n,r){let s=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[r*3],u=t[r*3+1];return[new mt(s,o),new mt(a,l),new mt(c,u)]},generateSideWallUV:function(i,t,e,n,r,s){let o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],u=t[n*3+1],h=t[n*3+2],f=t[r*3],d=t[r*3+1],p=t[r*3+2],x=t[s*3],g=t[s*3+1],m=t[s*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new mt(o,1-l),new mt(c,1-h),new mt(f,1-p),new mt(x,1-m)]:[new mt(a,1-l),new mt(u,1-h),new mt(d,1-p),new mt(g,1-m)]}};function Sp(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,r=i.length;n<r;n++){let s=i[n];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Ps=class i extends Eo{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,r=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}},si=class i extends Le{constructor(t=[new mt(0,-.5),new mt(.5,0),new mt(0,.5)],e=12,n=0,r=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:r},e=Math.floor(e),r=Re(r,0,Math.PI*2);let s=[],o=[],a=[],l=[],c=[],u=1/e,h=new k,f=new mt,d=new k,p=new k,x=new k,g=0,m=0;for(let _=0;_<=t.length-1;_++)switch(_){case 0:g=t[_+1].x-t[_].x,m=t[_+1].y-t[_].y,d.x=m*1,d.y=-g,d.z=m*0,x.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case t.length-1:l.push(x.x,x.y,x.z);break;default:g=t[_+1].x-t[_].x,m=t[_+1].y-t[_].y,d.x=m*1,d.y=-g,d.z=m*0,p.copy(d),d.x+=x.x,d.y+=x.y,d.z+=x.z,d.normalize(),l.push(d.x,d.y,d.z),x.copy(p)}for(let _=0;_<=e;_++){let y=n+_*u*r,v=Math.sin(y),w=Math.cos(y);for(let M=0;M<=t.length-1;M++){h.x=t[M].x*v,h.y=t[M].y,h.z=t[M].x*w,o.push(h.x,h.y,h.z),f.x=_/e,f.y=M/(t.length-1),a.push(f.x,f.y);let E=l[3*M+0]*v,T=l[3*M+1],b=l[3*M+0]*w;c.push(E,T,b)}}for(let _=0;_<e;_++)for(let y=0;y<t.length-1;y++){let v=y+_*t.length,w=v,M=v+t.length,E=v+t.length+1,T=v+1;s.push(w,M,T),s.push(E,T,M)}this.setIndex(s),this.setAttribute("position",new ae(o,3)),this.setAttribute("uv",new ae(a,2)),this.setAttribute("normal",new ae(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}},Hr=class i extends Eo{constructor(t=1,e=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],r=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,r,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}},xn=class i extends Le{constructor(t=1,e=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:r};let s=t/2,o=e/2,a=Math.floor(n),l=Math.floor(r),c=a+1,u=l+1,h=t/a,f=e/l,d=[],p=[],x=[],g=[];for(let m=0;m<u;m++){let _=m*f-o;for(let y=0;y<c;y++){let v=y*h-s;p.push(v,-_,0),x.push(0,0,1),g.push(y/a),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let _=0;_<a;_++){let y=_+c*m,v=_+c*(m+1),w=_+1+c*(m+1),M=_+1+c*m;d.push(y,v,M),d.push(v,w,M)}this.setIndex(d),this.setAttribute("position",new ae(p,3)),this.setAttribute("normal",new ae(x,3)),this.setAttribute("uv",new ae(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},Vr=class i extends Le{constructor(t=.5,e=1,n=32,r=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:r,thetaStart:s,thetaLength:o},n=Math.max(3,n),r=Math.max(1,r);let a=[],l=[],c=[],u=[],h=t,f=(e-t)/r,d=new k,p=new mt;for(let x=0;x<=r;x++){for(let g=0;g<=n;g++){let m=s+g/n*o;d.x=h*Math.cos(m),d.y=h*Math.sin(m),l.push(d.x,d.y,d.z),c.push(0,0,1),p.x=(d.x/e+1)/2,p.y=(d.y/e+1)/2,u.push(p.x,p.y)}h+=f}for(let x=0;x<r;x++){let g=x*(n+1);for(let m=0;m<n;m++){let _=m+g,y=_,v=_+n+1,w=_+n+2,M=_+1;a.push(y,v,M),a.push(v,w,M)}}this.setIndex(a),this.setAttribute("position",new ae(l,3)),this.setAttribute("normal",new ae(c,3)),this.setAttribute("uv",new ae(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},mr=class i extends Le{constructor(t=new Tn([new mt(0,.5),new mt(-.5,-.5),new mt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let n=[],r=[],s=[],o=[],a=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let u=0;u<t.length;u++)c(t[u]),this.addGroup(a,l,u),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new ae(r,3)),this.setAttribute("normal",new ae(s,3)),this.setAttribute("uv",new ae(o,2));function c(u){let h=r.length/3,f=u.extractPoints(e),d=f.shape,p=f.holes;Ii.isClockWise(d)===!1&&(d=d.reverse());for(let g=0,m=p.length;g<m;g++){let _=p[g];Ii.isClockWise(_)===!0&&(p[g]=_.reverse())}let x=Ii.triangulateShape(d,p);for(let g=0,m=p.length;g<m;g++){let _=p[g];d=d.concat(_)}for(let g=0,m=d.length;g<m;g++){let _=d[g];r.push(_.x,_.y,0),s.push(0,0,1),o.push(_.x,_.y)}for(let g=0,m=x.length;g<m;g++){let _=x[g],y=_[0]+h,v=_[1]+h,w=_[2]+h;n.push(y,v,w),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return Ep(e,t)}static fromJSON(t,e){let n=[];for(let r=0,s=t.shapes.length;r<s;r++){let o=e[t.shapes[r]];n.push(o)}return new i(n,t.curveSegments)}};function Ep(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){let r=i[e];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t}var hn=class i extends Le{constructor(t=1,e=32,n=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,u=[],h=new k,f=new k,d=[],p=[],x=[],g=[];for(let m=0;m<=n;m++){let _=[],y=m/n,v=0;m===0&&o===0?v=.5/e:m===n&&l===Math.PI&&(v=-.5/e);for(let w=0;w<=e;w++){let M=w/e;h.x=-t*Math.cos(r+M*s)*Math.sin(o+y*a),h.y=t*Math.cos(o+y*a),h.z=t*Math.sin(r+M*s)*Math.sin(o+y*a),p.push(h.x,h.y,h.z),f.copy(h).normalize(),x.push(f.x,f.y,f.z),g.push(M+v,1-y),_.push(c++)}u.push(_)}for(let m=0;m<n;m++)for(let _=0;_<e;_++){let y=u[m][_+1],v=u[m][_],w=u[m+1][_],M=u[m+1][_+1];(m!==0||o>0)&&d.push(y,v,M),(m!==n-1||l<Math.PI)&&d.push(v,w,M)}this.setIndex(d),this.setAttribute("position",new ae(p,3)),this.setAttribute("normal",new ae(x,3)),this.setAttribute("uv",new ae(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var on=class i extends Le{constructor(t=1,e=.4,n=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:r,arc:s},n=Math.floor(n),r=Math.floor(r);let o=[],a=[],l=[],c=[],u=new k,h=new k,f=new k;for(let d=0;d<=n;d++)for(let p=0;p<=r;p++){let x=p/r*s,g=d/n*Math.PI*2;h.x=(t+e*Math.cos(g))*Math.cos(x),h.y=(t+e*Math.cos(g))*Math.sin(x),h.z=e*Math.sin(g),a.push(h.x,h.y,h.z),u.x=t*Math.cos(x),u.y=t*Math.sin(x),f.subVectors(h,u).normalize(),l.push(f.x,f.y,f.z),c.push(p/r),c.push(d/n)}for(let d=1;d<=n;d++)for(let p=1;p<=r;p++){let x=(r+1)*d+p-1,g=(r+1)*(d-1)+p-1,m=(r+1)*(d-1)+p,_=(r+1)*d+p;o.push(x,g,_),o.push(g,m,_)}this.setIndex(o),this.setAttribute("position",new ae(a,3)),this.setAttribute("normal",new ae(l,3)),this.setAttribute("uv",new ae(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var Do=class extends He{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var za=class extends ji{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=$u,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},ka=class extends ji{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function va(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function wp(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var Gr=class{constructor(t,e,n,r){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,r=e[n],s=e[n-1];n:{t:{let o;e:{i:if(!(t<r)){for(let a=n+2;;){if(r===void 0){if(t<s)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=r,r=e[++n],t<r)break t}o=e.length;break e}if(!(t>=s)){let a=e[1];t<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(r=s,s=e[--n-1],t>=s)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(r=e[n],s=e[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,r)}return this.interpolate_(n,s,t,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=t*r;for(let o=0;o!==r;++o)e[o]=n[s+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Ha=class extends Gr{constructor(t,e,n,r){super(t,e,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:qc,endingEnd:qc}}intervalChanged_(t,e,n){let r=this.parameterPositions,s=t-2,o=t+1,a=r[s],l=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case Yc:s=t,a=2*e-n;break;case Zc:s=r.length-2,a=e+r[s]-r[s+1];break;default:s=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Yc:o=t,l=2*n-e;break;case Zc:o=1,l=n+r[1]-r[0];break;default:o=t-1,l=e}let c=(n-e)*.5,u=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(t,e,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,d=this._weightNext,p=(n-e)/(r-e),x=p*p,g=x*p,m=-f*g+2*f*x-f*p,_=(1+f)*g+(-1.5-2*f)*x+(-.5+f)*p+1,y=(-1-d)*g+(1.5+d)*x+.5*p,v=d*g-d*x;for(let w=0;w!==a;++w)s[w]=m*o[u+w]+_*o[c+w]+y*o[l+w]+v*o[h+w];return s}},Va=class extends Gr{constructor(t,e,n,r){super(t,e,n,r)}interpolate_(t,e,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,u=(n-e)/(r-e),h=1-u;for(let f=0;f!==a;++f)s[f]=o[c+f]*h+o[l+f]*u;return s}},Ga=class extends Gr{constructor(t,e,n,r){super(t,e,n,r)}interpolate_(t){return this.copySampleValue_(t-1)}},oi=class{constructor(t,e,n,r){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=va(e,this.TimeBufferType),this.values=va(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:va(t.times,Array),values:va(t.values,Array)};let r=t.getInterpolation();r!==t.DefaultInterpolation&&(n.interpolation=r)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Ga(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Va(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Ha(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case lo:e=this.InterpolantFactoryMethodDiscrete;break;case Ea:e=this.InterpolantFactoryMethodLinear;break;case ya:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return lo;case this.InterpolantFactoryMethodLinear:return Ea;case this.InterpolantFactoryMethodSmooth:return ya}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,r=e.length;n!==r;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,r=e.length;n!==r;++n)e[n]*=t}return this}trim(t,e){let n=this.times,r=n.length,s=0,o=r-1;for(;s!==r&&n[s]<t;)++s;for(;o!==-1&&n[o]>e;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,r=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==s;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(r!==void 0&&wp(r))for(let a=0,l=r.length;a!==l;++a){let c=r[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===ya,s=t.length-1,o=1;for(let a=1;a<s;++a){let l=!1,c=t[a],u=t[a+1];if(c!==u&&(a!==1||c!==t[0]))if(r)l=!0;else{let h=a*n,f=h-n,d=h+n;for(let p=0;p!==n;++p){let x=e[h+p];if(x!==e[f+p]||x!==e[d+p]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let h=a*n,f=o*n;for(let d=0;d!==n;++d)e[f+d]=e[h+d]}++o}}if(s>0){t[o]=t[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,r=new n(this.name,t,e);return r.createInterpolant=this.createInterpolant,r}};oi.prototype.ValueTypeName="";oi.prototype.TimeBufferType=Float32Array;oi.prototype.ValueBufferType=Float32Array;oi.prototype.DefaultInterpolation=Ea;var gr=class extends oi{constructor(t,e,n){super(t,e,n)}};gr.prototype.ValueTypeName="bool";gr.prototype.ValueBufferType=Array;gr.prototype.DefaultInterpolation=lo;gr.prototype.InterpolantFactoryMethodLinear=void 0;gr.prototype.InterpolantFactoryMethodSmooth=void 0;var Wa=class extends oi{constructor(t,e,n,r){super(t,e,n,r)}};Wa.prototype.ValueTypeName="color";var Xa=class extends oi{constructor(t,e,n,r){super(t,e,n,r)}};Xa.prototype.ValueTypeName="number";var qa=class extends Gr{constructor(t,e,n,r){super(t,e,n,r)}interpolate_(t,e,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(r-e),c=t*a;for(let u=c+a;c!==u;c+=4)di.slerpFlat(s,0,o,c-a,o,c,l);return s}},Lo=class extends oi{constructor(t,e,n,r){super(t,e,n,r)}InterpolantFactoryMethodLinear(t){return new qa(this.times,this.values,this.getValueSize(),t)}};Lo.prototype.ValueTypeName="quaternion";Lo.prototype.InterpolantFactoryMethodSmooth=void 0;var xr=class extends oi{constructor(t,e,n){super(t,e,n)}};xr.prototype.ValueTypeName="string";xr.prototype.ValueBufferType=Array;xr.prototype.DefaultInterpolation=lo;xr.prototype.InterpolantFactoryMethodLinear=void 0;xr.prototype.InterpolantFactoryMethodSmooth=void 0;var Ya=class extends oi{constructor(t,e,n,r){super(t,e,n,r)}};Ya.prototype.ValueTypeName="vector";var Za=class{constructor(t,e,n){let r=this,s=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.abortController=new AbortController,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){let h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){let d=c[h],p=c[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return p}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},gf=new Za,Ja=class{constructor(t){this.manager=t!==void 0?t:gf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(r,s){n.load(t,r,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Ja.DEFAULT_MATERIAL_NAME="__DEFAULT";var Is=class extends go{constructor(t=-1,e=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=n-t,o=n+t,a=r+e,l=r-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}};var $a=class extends En{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}},Uo=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=performance.now();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};var bh="\\[\\]\\.:\\/",Tp=new RegExp("["+bh+"]","g"),Sh="[^"+bh+"]",Ap="[^"+bh.replace("\\.","")+"]",Rp=/((?:WC+[\/:])*)/.source.replace("WC",Sh),Cp=/(WCOD+)?/.source.replace("WCOD",Ap),Pp=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Sh),Ip=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Sh),Dp=new RegExp("^"+Rp+Cp+Pp+Ip+"$"),Lp=["material","materials","bones","map"],eh=class{constructor(t,e,n){let r=n||je.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,r)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=n.length;r!==s;++r)n[r].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},je=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Tp,"")}static parseTrackName(t){let e=Dp.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let s=n.nodeName.substring(r+1);Lp.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(s){for(let o=0;o<s.length;o++){let a=s[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},r=n(t.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)t[e++]=n[r]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,r=e.propertyName,s=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===c){c=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[r];if(o===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};je.Composite=eh;je.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};je.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};je.prototype.GetterByBindingType=[je.prototype._getValue_direct,je.prototype._getValue_array,je.prototype._getValue_arrayElement,je.prototype._getValue_toArray];je.prototype.SetterByBindingTypeAndVersioning=[[je.prototype._setValue_direct,je.prototype._setValue_direct_setNeedsUpdate,je.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[je.prototype._setValue_array,je.prototype._setValue_array_setNeedsUpdate,je.prototype._setValue_array_setMatrixWorldNeedsUpdate],[je.prototype._setValue_arrayElement,je.prototype._setValue_arrayElement_setNeedsUpdate,je.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[je.prototype._setValue_fromArray,je.prototype._setValue_fromArray_setNeedsUpdate,je.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Vx=new Float32Array(1);var Eu=new Fe,No=class{constructor(t,e,n=0,r=1/0){this.ray=new bs(t,e),this.near=n,this.far=r,this.camera=null,this.layers=new Ss,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Eu.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Eu),this}intersectObject(t,e=!0,n=[]){return nh(t,this,n,e),n.sort(wu),n}intersectObjects(t,e=!0,n=[]){for(let r=0,s=t.length;r<s;r++)nh(t[r],this,n,e);return n.sort(wu),n}};function wu(i,t){return i.distance-t.distance}function nh(i,t,e,n){let r=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(r=!1),r===!0&&n===!0){let s=i.children;for(let o=0,a=s.length;o<a;o++)nh(s[o],t,e,!0)}}function Eh(i,t,e,n){let r=Up(n);switch(e){case dh:return i*t;case mh:return i*t/r.components*r.byteLength;case gl:return i*t/r.components*r.byteLength;case gh:return i*t*2/r.components*r.byteLength;case xl:return i*t*2/r.components*r.byteLength;case ph:return i*t*3/r.components*r.byteLength;case xi:return i*t*4/r.components*r.byteLength;case _l:return i*t*4/r.components*r.byteLength;case Oo:case zo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ko:case Ho:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case yl:case bl:return Math.max(i,16)*Math.max(t,8)/4;case vl:case Ml:return Math.max(i,8)*Math.max(t,8)/2;case Sl:case El:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case wl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Tl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Al:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Rl:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Cl:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Pl:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Il:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Dl:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Ll:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Ul:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Nl:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Fl:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Bl:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Ol:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case zl:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case kl:case Hl:case Vl:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Gl:case Wl:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Xl:case ql:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Up(i){switch(i){case Ni:case ch:return{byteLength:1,components:1};case Ls:case hh:case gi:return{byteLength:2,components:1};case pl:case ml:return{byteLength:2,components:4};case vr:case dl:case Fi:return{byteLength:4,components:1};case uh:case fh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");function kf(){let i=null,t=!1,e=null,n=null;function r(s,o){e(s,o),n=i.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(r),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){i=s}}}function kp(i){let t=new WeakMap;function e(a,l){let c=a.array,u=a.usage,h=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,u),a.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,c){let u=l.array,h=l.updateRanges;if(i.bindBuffer(c,a),h.length===0)i.bufferSubData(c,0,u);else{h.sort((d,p)=>d.start-p.start);let f=0;for(let d=1;d<h.length;d++){let p=h[f],x=h[d];x.start<=p.start+p.count+1?p.count=Math.max(p.count,x.start+x.count-p.start):(++f,h[f]=x)}h.length=f+1;for(let d=0,p=h.length;d<p;d++){let x=h[d];i.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var Hp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Vp=`#ifdef USE_ALPHAHASH
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
#endif`,Gp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Wp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Xp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,qp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Yp=`#ifdef USE_AOMAP
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
#endif`,Zp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Jp=`#ifdef USE_BATCHING
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
#endif`,$p=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Kp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Qp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,jp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,t0=`#ifdef USE_IRIDESCENCE
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
#endif`,e0=`#ifdef USE_BUMPMAP
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
#endif`,n0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,i0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,r0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,s0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,o0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,a0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,l0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,c0=`#if defined( USE_COLOR_ALPHA )
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
#endif`,h0=`#define PI 3.141592653589793
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
} // validated`,u0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,f0=`vec3 transformedNormal = objectNormal;
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
#endif`,d0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,p0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,m0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,g0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,x0="gl_FragColor = linearToOutputTexel( gl_FragColor );",_0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,v0=`#ifdef USE_ENVMAP
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
#endif`,y0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,M0=`#ifdef USE_ENVMAP
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
#endif`,b0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,S0=`#ifdef USE_ENVMAP
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
#endif`,E0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,w0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,T0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,A0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,R0=`#ifdef USE_GRADIENTMAP
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
}`,C0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,P0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,I0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,D0=`uniform bool receiveShadow;
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
#endif`,L0=`#ifdef USE_ENVMAP
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
#endif`,U0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,N0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,F0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,B0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,O0=`PhysicalMaterial material;
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
#endif`,z0=`struct PhysicalMaterial {
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
}`,k0=`
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
#endif`,H0=`#if defined( RE_IndirectDiffuse )
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
#endif`,V0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,G0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,W0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,X0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,q0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Y0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Z0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,J0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,$0=`#if defined( USE_POINTS_UV )
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
#endif`,K0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Q0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,j0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,tm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,em=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,nm=`#ifdef USE_MORPHTARGETS
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
#endif`,im=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,sm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,om=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,am=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,cm=`#ifdef USE_NORMALMAP
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
#endif`,hm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,um=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,fm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,dm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,pm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,mm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,gm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,xm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,_m=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,vm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ym=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Mm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,bm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Sm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Em=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,wm=`float getShadowMask() {
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
}`,Tm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Am=`#ifdef USE_SKINNING
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
#endif`,Rm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Cm=`#ifdef USE_SKINNING
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
#endif`,Pm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Im=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Dm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Lm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Um=`#ifdef USE_TRANSMISSION
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
#endif`,Nm=`#ifdef USE_TRANSMISSION
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
#endif`,Fm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Bm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Om=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,zm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,km=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Hm=`uniform sampler2D t2D;
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
}`,Vm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Gm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Wm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Xm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qm=`#include <common>
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
}`,Ym=`#if DEPTH_PACKING == 3200
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
}`,Zm=`#define DISTANCE
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
}`,Jm=`#define DISTANCE
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
}`,$m=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Km=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qm=`uniform float scale;
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
}`,jm=`uniform vec3 diffuse;
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
}`,tg=`#include <common>
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
}`,eg=`uniform vec3 diffuse;
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
}`,ng=`#define LAMBERT
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
}`,ig=`#define LAMBERT
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
}`,rg=`#define MATCAP
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
}`,sg=`#define MATCAP
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
}`,og=`#define NORMAL
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
}`,ag=`#define NORMAL
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
}`,lg=`#define PHONG
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
}`,cg=`#define PHONG
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
}`,hg=`#define STANDARD
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
}`,ug=`#define STANDARD
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
}`,fg=`#define TOON
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
}`,dg=`#define TOON
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
}`,pg=`uniform float size;
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
}`,mg=`uniform vec3 diffuse;
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
}`,gg=`#include <common>
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
}`,xg=`uniform vec3 color;
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
}`,_g=`uniform float rotation;
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
}`,vg=`uniform vec3 diffuse;
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
}`,Te={alphahash_fragment:Hp,alphahash_pars_fragment:Vp,alphamap_fragment:Gp,alphamap_pars_fragment:Wp,alphatest_fragment:Xp,alphatest_pars_fragment:qp,aomap_fragment:Yp,aomap_pars_fragment:Zp,batching_pars_vertex:Jp,batching_vertex:$p,begin_vertex:Kp,beginnormal_vertex:Qp,bsdfs:jp,iridescence_fragment:t0,bumpmap_pars_fragment:e0,clipping_planes_fragment:n0,clipping_planes_pars_fragment:i0,clipping_planes_pars_vertex:r0,clipping_planes_vertex:s0,color_fragment:o0,color_pars_fragment:a0,color_pars_vertex:l0,color_vertex:c0,common:h0,cube_uv_reflection_fragment:u0,defaultnormal_vertex:f0,displacementmap_pars_vertex:d0,displacementmap_vertex:p0,emissivemap_fragment:m0,emissivemap_pars_fragment:g0,colorspace_fragment:x0,colorspace_pars_fragment:_0,envmap_fragment:v0,envmap_common_pars_fragment:y0,envmap_pars_fragment:M0,envmap_pars_vertex:b0,envmap_physical_pars_fragment:L0,envmap_vertex:S0,fog_vertex:E0,fog_pars_vertex:w0,fog_fragment:T0,fog_pars_fragment:A0,gradientmap_pars_fragment:R0,lightmap_pars_fragment:C0,lights_lambert_fragment:P0,lights_lambert_pars_fragment:I0,lights_pars_begin:D0,lights_toon_fragment:U0,lights_toon_pars_fragment:N0,lights_phong_fragment:F0,lights_phong_pars_fragment:B0,lights_physical_fragment:O0,lights_physical_pars_fragment:z0,lights_fragment_begin:k0,lights_fragment_maps:H0,lights_fragment_end:V0,logdepthbuf_fragment:G0,logdepthbuf_pars_fragment:W0,logdepthbuf_pars_vertex:X0,logdepthbuf_vertex:q0,map_fragment:Y0,map_pars_fragment:Z0,map_particle_fragment:J0,map_particle_pars_fragment:$0,metalnessmap_fragment:K0,metalnessmap_pars_fragment:Q0,morphinstance_vertex:j0,morphcolor_vertex:tm,morphnormal_vertex:em,morphtarget_pars_vertex:nm,morphtarget_vertex:im,normal_fragment_begin:rm,normal_fragment_maps:sm,normal_pars_fragment:om,normal_pars_vertex:am,normal_vertex:lm,normalmap_pars_fragment:cm,clearcoat_normal_fragment_begin:hm,clearcoat_normal_fragment_maps:um,clearcoat_pars_fragment:fm,iridescence_pars_fragment:dm,opaque_fragment:pm,packing:mm,premultiplied_alpha_fragment:gm,project_vertex:xm,dithering_fragment:_m,dithering_pars_fragment:vm,roughnessmap_fragment:ym,roughnessmap_pars_fragment:Mm,shadowmap_pars_fragment:bm,shadowmap_pars_vertex:Sm,shadowmap_vertex:Em,shadowmask_pars_fragment:wm,skinbase_vertex:Tm,skinning_pars_vertex:Am,skinning_vertex:Rm,skinnormal_vertex:Cm,specularmap_fragment:Pm,specularmap_pars_fragment:Im,tonemapping_fragment:Dm,tonemapping_pars_fragment:Lm,transmission_fragment:Um,transmission_pars_fragment:Nm,uv_pars_fragment:Fm,uv_pars_vertex:Bm,uv_vertex:Om,worldpos_vertex:zm,background_vert:km,background_frag:Hm,backgroundCube_vert:Vm,backgroundCube_frag:Gm,cube_vert:Wm,cube_frag:Xm,depth_vert:qm,depth_frag:Ym,distanceRGBA_vert:Zm,distanceRGBA_frag:Jm,equirect_vert:$m,equirect_frag:Km,linedashed_vert:Qm,linedashed_frag:jm,meshbasic_vert:tg,meshbasic_frag:eg,meshlambert_vert:ng,meshlambert_frag:ig,meshmatcap_vert:rg,meshmatcap_frag:sg,meshnormal_vert:og,meshnormal_frag:ag,meshphong_vert:lg,meshphong_frag:cg,meshphysical_vert:hg,meshphysical_frag:ug,meshtoon_vert:fg,meshtoon_frag:dg,points_vert:pg,points_frag:mg,shadow_vert:gg,shadow_frag:xg,sprite_vert:_g,sprite_frag:vg},Dt={common:{diffuse:{value:new Vt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new be},alphaMap:{value:null},alphaMapTransform:{value:new be},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new be}},envmap:{envMap:{value:null},envMapRotation:{value:new be},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new be}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new be}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new be},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new be},normalScale:{value:new mt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new be},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new be}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new be}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new be}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Vt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Vt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new be},alphaTest:{value:0},uvTransform:{value:new be}},sprite:{diffuse:{value:new Vt(16777215)},opacity:{value:1},center:{value:new mt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new be},alphaMap:{value:null},alphaMapTransform:{value:new be},alphaTest:{value:0}}},Bi={basic:{uniforms:Fn([Dt.common,Dt.specularmap,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.fog]),vertexShader:Te.meshbasic_vert,fragmentShader:Te.meshbasic_frag},lambert:{uniforms:Fn([Dt.common,Dt.specularmap,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.fog,Dt.lights,{emissive:{value:new Vt(0)}}]),vertexShader:Te.meshlambert_vert,fragmentShader:Te.meshlambert_frag},phong:{uniforms:Fn([Dt.common,Dt.specularmap,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.fog,Dt.lights,{emissive:{value:new Vt(0)},specular:{value:new Vt(1118481)},shininess:{value:30}}]),vertexShader:Te.meshphong_vert,fragmentShader:Te.meshphong_frag},standard:{uniforms:Fn([Dt.common,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.roughnessmap,Dt.metalnessmap,Dt.fog,Dt.lights,{emissive:{value:new Vt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Te.meshphysical_vert,fragmentShader:Te.meshphysical_frag},toon:{uniforms:Fn([Dt.common,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.gradientmap,Dt.fog,Dt.lights,{emissive:{value:new Vt(0)}}]),vertexShader:Te.meshtoon_vert,fragmentShader:Te.meshtoon_frag},matcap:{uniforms:Fn([Dt.common,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.fog,{matcap:{value:null}}]),vertexShader:Te.meshmatcap_vert,fragmentShader:Te.meshmatcap_frag},points:{uniforms:Fn([Dt.points,Dt.fog]),vertexShader:Te.points_vert,fragmentShader:Te.points_frag},dashed:{uniforms:Fn([Dt.common,Dt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Te.linedashed_vert,fragmentShader:Te.linedashed_frag},depth:{uniforms:Fn([Dt.common,Dt.displacementmap]),vertexShader:Te.depth_vert,fragmentShader:Te.depth_frag},normal:{uniforms:Fn([Dt.common,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,{opacity:{value:1}}]),vertexShader:Te.meshnormal_vert,fragmentShader:Te.meshnormal_frag},sprite:{uniforms:Fn([Dt.sprite,Dt.fog]),vertexShader:Te.sprite_vert,fragmentShader:Te.sprite_frag},background:{uniforms:{uvTransform:{value:new be},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Te.background_vert,fragmentShader:Te.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new be}},vertexShader:Te.backgroundCube_vert,fragmentShader:Te.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Te.cube_vert,fragmentShader:Te.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Te.equirect_vert,fragmentShader:Te.equirect_frag},distanceRGBA:{uniforms:Fn([Dt.common,Dt.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Te.distanceRGBA_vert,fragmentShader:Te.distanceRGBA_frag},shadow:{uniforms:Fn([Dt.lights,Dt.fog,{color:{value:new Vt(0)},opacity:{value:1}}]),vertexShader:Te.shadow_vert,fragmentShader:Te.shadow_frag}};Bi.physical={uniforms:Fn([Bi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new be},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new be},clearcoatNormalScale:{value:new mt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new be},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new be},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new be},sheen:{value:0},sheenColor:{value:new Vt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new be},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new be},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new be},transmissionSamplerSize:{value:new mt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new be},attenuationDistance:{value:0},attenuationColor:{value:new Vt(0)},specularColor:{value:new Vt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new be},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new be},anisotropyVector:{value:new mt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new be}}]),vertexShader:Te.meshphysical_vert,fragmentShader:Te.meshphysical_frag};var Yl={r:0,b:0,g:0},Yr=new Di,yg=new Fe;function Mg(i,t,e,n,r,s,o){let a=new Vt(0),l=s===!0?0:1,c,u,h=null,f=0,d=null;function p(y){let v=y.isScene===!0?y.background:null;return v&&v.isTexture&&(v=(y.backgroundBlurriness>0?e:t).get(v)),v}function x(y){let v=!1,w=p(y);w===null?m(a,l):w&&w.isColor&&(m(w,1),v=!0);let M=i.xr.getEnvironmentBlendMode();M==="additive"?n.buffers.color.setClear(0,0,0,1,o):M==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(y,v){let w=p(v);w&&(w.isCubeTexture||w.mapping===Fo)?(u===void 0&&(u=new le(new Ue(1,1,1),new He({name:"BackgroundCubeMaterial",uniforms:qr(Bi.backgroundCube.uniforms),vertexShader:Bi.backgroundCube.vertexShader,fragmentShader:Bi.backgroundCube.fragmentShader,side:Pn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(M,E,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Yr.copy(v.backgroundRotation),Yr.x*=-1,Yr.y*=-1,Yr.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(Yr.y*=-1,Yr.z*=-1),u.material.uniforms.envMap.value=w,u.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(yg.makeRotationFromEuler(Yr)),u.material.toneMapped=Ne.getTransfer(w.colorSpace)!==ze,(h!==w||f!==w.version||d!==i.toneMapping)&&(u.material.needsUpdate=!0,h=w,f=w.version,d=i.toneMapping),u.layers.enableAll(),y.unshift(u,u.geometry,u.material,0,0,null)):w&&w.isTexture&&(c===void 0&&(c=new le(new xn(2,2),new He({name:"BackgroundMaterial",uniforms:qr(Bi.background.uniforms),vertexShader:Bi.background.vertexShader,fragmentShader:Bi.background.fragmentShader,side:ni,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=w,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=Ne.getTransfer(w.colorSpace)!==ze,w.matrixAutoUpdate===!0&&w.updateMatrix(),c.material.uniforms.uvTransform.value.copy(w.matrix),(h!==w||f!==w.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,h=w,f=w.version,d=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function m(y,v){y.getRGB(Yl,yh(i)),n.buffers.color.setClear(Yl.r,Yl.g,Yl.b,v,o)}function _(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,v=1){a.set(y),l=v,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,m(a,l)},render:x,addToRenderList:g,dispose:_}}function bg(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=f(null),s=r,o=!1;function a(S,A,I,P,B){let z=!1,N=h(P,I,A);s!==N&&(s=N,c(s.object)),z=d(S,P,I,B),z&&p(S,P,I,B),B!==null&&t.update(B,i.ELEMENT_ARRAY_BUFFER),(z||o)&&(o=!1,v(S,A,I,P),B!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(B).buffer))}function l(){return i.createVertexArray()}function c(S){return i.bindVertexArray(S)}function u(S){return i.deleteVertexArray(S)}function h(S,A,I){let P=I.wireframe===!0,B=n[S.id];B===void 0&&(B={},n[S.id]=B);let z=B[A.id];z===void 0&&(z={},B[A.id]=z);let N=z[P];return N===void 0&&(N=f(l()),z[P]=N),N}function f(S){let A=[],I=[],P=[];for(let B=0;B<e;B++)A[B]=0,I[B]=0,P[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:A,enabledAttributes:I,attributeDivisors:P,object:S,attributes:{},index:null}}function d(S,A,I,P){let B=s.attributes,z=A.attributes,N=0,G=I.getAttributes();for(let q in G)if(G[q].location>=0){let it=B[q],_t=z[q];if(_t===void 0&&(q==="instanceMatrix"&&S.instanceMatrix&&(_t=S.instanceMatrix),q==="instanceColor"&&S.instanceColor&&(_t=S.instanceColor)),it===void 0||it.attribute!==_t||_t&&it.data!==_t.data)return!0;N++}return s.attributesNum!==N||s.index!==P}function p(S,A,I,P){let B={},z=A.attributes,N=0,G=I.getAttributes();for(let q in G)if(G[q].location>=0){let it=z[q];it===void 0&&(q==="instanceMatrix"&&S.instanceMatrix&&(it=S.instanceMatrix),q==="instanceColor"&&S.instanceColor&&(it=S.instanceColor));let _t={};_t.attribute=it,it&&it.data&&(_t.data=it.data),B[q]=_t,N++}s.attributes=B,s.attributesNum=N,s.index=P}function x(){let S=s.newAttributes;for(let A=0,I=S.length;A<I;A++)S[A]=0}function g(S){m(S,0)}function m(S,A){let I=s.newAttributes,P=s.enabledAttributes,B=s.attributeDivisors;I[S]=1,P[S]===0&&(i.enableVertexAttribArray(S),P[S]=1),B[S]!==A&&(i.vertexAttribDivisor(S,A),B[S]=A)}function _(){let S=s.newAttributes,A=s.enabledAttributes;for(let I=0,P=A.length;I<P;I++)A[I]!==S[I]&&(i.disableVertexAttribArray(I),A[I]=0)}function y(S,A,I,P,B,z,N){N===!0?i.vertexAttribIPointer(S,A,I,B,z):i.vertexAttribPointer(S,A,I,P,B,z)}function v(S,A,I,P){x();let B=P.attributes,z=I.getAttributes(),N=A.defaultAttributeValues;for(let G in z){let q=z[G];if(q.location>=0){let K=B[G];if(K===void 0&&(G==="instanceMatrix"&&S.instanceMatrix&&(K=S.instanceMatrix),G==="instanceColor"&&S.instanceColor&&(K=S.instanceColor)),K!==void 0){let it=K.normalized,_t=K.itemSize,Xt=t.get(K);if(Xt===void 0)continue;let It=Xt.buffer,Ot=Xt.type,_e=Xt.bytesPerElement,pt=Ot===i.INT||Ot===i.UNSIGNED_INT||K.gpuType===dl;if(K.isInterleavedBufferAttribute){let F=K.data,W=F.stride,j=K.offset;if(F.isInstancedInterleavedBuffer){for(let ot=0;ot<q.locationSize;ot++)m(q.location+ot,F.meshPerAttribute);S.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=F.meshPerAttribute*F.count)}else for(let ot=0;ot<q.locationSize;ot++)g(q.location+ot);i.bindBuffer(i.ARRAY_BUFFER,It);for(let ot=0;ot<q.locationSize;ot++)y(q.location+ot,_t/q.locationSize,Ot,it,W*_e,(j+_t/q.locationSize*ot)*_e,pt)}else{if(K.isInstancedBufferAttribute){for(let F=0;F<q.locationSize;F++)m(q.location+F,K.meshPerAttribute);S.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let F=0;F<q.locationSize;F++)g(q.location+F);i.bindBuffer(i.ARRAY_BUFFER,It);for(let F=0;F<q.locationSize;F++)y(q.location+F,_t/q.locationSize,Ot,it,_t*_e,_t/q.locationSize*F*_e,pt)}}else if(N!==void 0){let it=N[G];if(it!==void 0)switch(it.length){case 2:i.vertexAttrib2fv(q.location,it);break;case 3:i.vertexAttrib3fv(q.location,it);break;case 4:i.vertexAttrib4fv(q.location,it);break;default:i.vertexAttrib1fv(q.location,it)}}}}_()}function w(){T();for(let S in n){let A=n[S];for(let I in A){let P=A[I];for(let B in P)u(P[B].object),delete P[B];delete A[I]}delete n[S]}}function M(S){if(n[S.id]===void 0)return;let A=n[S.id];for(let I in A){let P=A[I];for(let B in P)u(P[B].object),delete P[B];delete A[I]}delete n[S.id]}function E(S){for(let A in n){let I=n[A];if(I[S.id]===void 0)continue;let P=I[S.id];for(let B in P)u(P[B].object),delete P[B];delete I[S.id]}}function T(){b(),o=!0,s!==r&&(s=r,c(s.object))}function b(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:T,resetDefaultState:b,dispose:w,releaseStatesOfGeometry:M,releaseStatesOfProgram:E,initAttributes:x,enableAttribute:g,disableUnusedAttributes:_}}function Sg(i,t,e){let n;function r(c){n=c}function s(c,u){i.drawArrays(n,c,u),e.update(u,n,1)}function o(c,u,h){h!==0&&(i.drawArraysInstanced(n,c,u,h),e.update(u,n,h))}function a(c,u,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let d=0;for(let p=0;p<h;p++)d+=u[p];e.update(d,n,1)}function l(c,u,h,f){if(h===0)return;let d=t.get("WEBGL_multi_draw");if(d===null)for(let p=0;p<c.length;p++)o(c[p],u[p],f[p]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,u,0,f,0,h);let p=0;for(let x=0;x<h;x++)p+=u[x]*f[x];e.update(p,n,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Eg(i,t,e,n){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){let E=t.get("EXT_texture_filter_anisotropic");r=i.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(E){return!(E!==xi&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(E){let T=E===gi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(E!==Ni&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==Fi&&!T)}function l(E){if(E==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let h=e.logarithmicDepthBuffer===!0,f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),_=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),w=p>0,M=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:p,maxTextureSize:x,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:_,maxVaryings:y,maxFragmentUniforms:v,vertexTextures:w,maxSamples:M}}function wg(i){let t=this,e=null,n=0,r=!1,s=!1,o=new Zn,a=new be,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){let d=h.length!==0||f||n!==0||r;return r=f,n=h.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){e=u(h,f,0)},this.setState=function(h,f,d){let p=h.clippingPlanes,x=h.clipIntersection,g=h.clipShadows,m=i.get(h);if(!r||p===null||p.length===0||s&&!g)s?u(null):c();else{let _=s?0:n,y=_*4,v=m.clippingState||null;l.value=v,v=u(p,f,y,d);for(let w=0;w!==y;++w)v[w]=e[w];m.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(h,f,d,p){let x=h!==null?h.length:0,g=null;if(x!==0){if(g=l.value,p!==!0||g===null){let m=d+x*4,_=f.matrixWorldInverse;a.getNormalMatrix(_),(g===null||g.length<m)&&(g=new Float32Array(m));for(let y=0,v=d;y!==x;++y,v+=4)o.copy(h[y]).applyMatrix4(_,a),o.normal.toArray(g,v),g[v+3]=o.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,g}}function Tg(i){let t=new WeakMap;function e(o,a){return a===hl?o.mapping=Wr:a===ul&&(o.mapping=Xr),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===hl||a===ul)if(t.has(o)){let l=t.get(o).texture;return e(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new Ia(l.height);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",r),e(c.texture,o.mapping)}else return null}}return o}function r(o){let a=o.target;a.removeEventListener("dispose",r);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}var Bs=4,xf=[.125,.215,.35,.446,.526,.582],$r=20,wh=new Is,_f=new Vt,Th=null,Ah=0,Rh=0,Ch=!1,Jr=(1+Math.sqrt(5))/2,Fs=1/Jr,vf=[new k(-Jr,Fs,0),new k(Jr,Fs,0),new k(-Fs,0,Jr),new k(Fs,0,Jr),new k(0,Jr,-Fs),new k(0,Jr,Fs),new k(-1,1,-1),new k(1,1,-1),new k(-1,1,1),new k(1,1,1)],Ag=new k,$l=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,r=100,s={}){let{size:o=256,position:a=Ag}=s;Th=this._renderer.getRenderTarget(),Ah=this._renderer.getActiveCubeFace(),Rh=this._renderer.getActiveMipmapLevel(),Ch=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,r,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=bf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Mf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Th,Ah,Rh),this._renderer.xr.enabled=Ch,t.scissorTest=!1,Zl(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Wr||t.mapping===Xr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Th=this._renderer.getRenderTarget(),Ah=this._renderer.getActiveCubeFace(),Rh=this._renderer.getActiveMipmapLevel(),Ch=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:wi,minFilter:wi,generateMipmaps:!1,type:gi,format:xi,colorSpace:Or,depthBuffer:!1},r=yf(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=yf(t,e,n);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Rg(s)),this._blurMaterial=Cg(s,t,e)}return r}_compileMaterial(t){let e=new le(this._lodPlanes[0],t);this._renderer.compile(e,wh)}_sceneToCubeUV(t,e,n,r,s){let l=new En(90,1,e,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,d=h.toneMapping;h.getClearColor(_f),h.toneMapping=tr,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(r),h.clearDepth(),h.setRenderTarget(null));let x=new Ie({name:"PMREM.Background",side:Pn,depthWrite:!1,depthTest:!1}),g=new le(new Ue,x),m=!1,_=t.background;_?_.isColor&&(x.color.copy(_),t.background=null,m=!0):(x.color.copy(_f),m=!0);for(let y=0;y<6;y++){let v=y%3;v===0?(l.up.set(0,c[y],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[y],s.y,s.z)):v===1?(l.up.set(0,0,c[y]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[y],s.z)):(l.up.set(0,c[y],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[y]));let w=this._cubeSize;Zl(r,v*w,y>2?w:0,w,w),h.setRenderTarget(r),m&&h.render(g,l),h.render(t,l)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=f,t.background=_}_textureToCubeUV(t,e){let n=this._renderer,r=t.mapping===Wr||t.mapping===Xr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=bf()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Mf());let s=r?this._cubemapMaterial:this._equirectMaterial,o=new le(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;let l=this._cubeSize;Zl(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,wh)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let r=this._lodPlanes.length;for(let s=1;s<r;s++){let o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=vf[(r-s-1)%vf.length];this._blur(t,s-1,s,o,a)}e.autoClear=n}_blur(t,e,n,r,s){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,r,"latitudinal",s),this._halfBlur(o,t,n,n,r,"longitudinal",s)}_halfBlur(t,e,n,r,s,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,h=new le(this._lodPlanes[r],c),f=c.uniforms,d=this._sizeLods[n]-1,p=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*$r-1),x=s/p,g=isFinite(s)?1+Math.floor(u*x):$r;g>$r&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${$r}`);let m=[],_=0;for(let E=0;E<$r;++E){let T=E/x,b=Math.exp(-T*T/2);m.push(b),E===0?_+=b:E<g&&(_+=2*b)}for(let E=0;E<m.length;E++)m[E]=m[E]/_;f.envMap.value=t.texture,f.samples.value=g,f.weights.value=m,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:y}=this;f.dTheta.value=p,f.mipInt.value=y-n;let v=this._sizeLods[r],w=3*v*(r>y-Bs?r-y+Bs:0),M=4*(this._cubeSize-v);Zl(e,w,M,3*v,2*v),l.setRenderTarget(e),l.render(h,wh)}};function Rg(i){let t=[],e=[],n=[],r=i,s=i-Bs+1+xf.length;for(let o=0;o<s;o++){let a=Math.pow(2,r);e.push(a);let l=1/a;o>i-Bs?l=xf[o-i+Bs-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,p=6,x=3,g=2,m=1,_=new Float32Array(x*p*d),y=new Float32Array(g*p*d),v=new Float32Array(m*p*d);for(let M=0;M<d;M++){let E=M%3*2/3-1,T=M>2?0:-1,b=[E,T,0,E+2/3,T,0,E+2/3,T+1,0,E,T,0,E+2/3,T+1,0,E,T+1,0];_.set(b,x*p*M),y.set(f,g*p*M);let S=[M,M,M,M,M,M];v.set(S,m*p*M)}let w=new Le;w.setAttribute("position",new Pe(_,x)),w.setAttribute("uv",new Pe(y,g)),w.setAttribute("faceIndex",new Pe(v,m)),t.push(w),r>Bs&&r--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function yf(i,t,e){let n=new wn(i,t,e);return n.texture.mapping=Fo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Zl(i,t,e,n,r){i.viewport.set(t,e,n,r),i.scissor.set(t,e,n,r)}function Cg(i,t,e){let n=new Float32Array($r),r=new k(0,1,0);return new He({name:"SphericalGaussianBlur",defines:{n:$r,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:zh(),fragmentShader:`

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
		`,blending:Ai,depthTest:!1,depthWrite:!1})}function Mf(){return new He({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:zh(),fragmentShader:`

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
		`,blending:Ai,depthTest:!1,depthWrite:!1})}function bf(){return new He({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:zh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ai,depthTest:!1,depthWrite:!1})}function zh(){return`

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
	`}function Pg(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===hl||l===ul,u=l===Wr||l===Xr;if(c||u){let h=t.get(a),f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new $l(i)),h=c?e.fromEquirectangular(a,h):e.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),h.texture;if(h!==void 0)return h.texture;{let d=a.image;return c&&d&&d.height>0||u&&d&&r(d)?(e===null&&(e=new $l(i)),h=c?e.fromEquirectangular(a):e.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),a.addEventListener("dispose",s),h.texture):null}}}return a}function r(a){let l=0,c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){let l=a.target;l.removeEventListener("dispose",s);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Ig(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return t[n]=r,r}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let r=e(n);return r===null&&ys("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function Dg(i,t,e,n){let r={},s=new WeakMap;function o(h){let f=h.target;f.index!==null&&t.remove(f.index);for(let p in f.attributes)t.remove(f.attributes[p]);f.removeEventListener("dispose",o),delete r[f.id];let d=s.get(f);d&&(t.remove(d),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(h,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,e.memory.geometries++),f}function l(h){let f=h.attributes;for(let d in f)t.update(f[d],i.ARRAY_BUFFER)}function c(h){let f=[],d=h.index,p=h.attributes.position,x=0;if(d!==null){let _=d.array;x=d.version;for(let y=0,v=_.length;y<v;y+=3){let w=_[y+0],M=_[y+1],E=_[y+2];f.push(w,M,M,E,E,w)}}else if(p!==void 0){let _=p.array;x=p.version;for(let y=0,v=_.length/3-1;y<v;y+=3){let w=y+0,M=y+1,E=y+2;f.push(w,M,M,E,E,w)}}else return;let g=new(vh(f)?mo:po)(f,1);g.version=x;let m=s.get(h);m&&t.remove(m),s.set(h,g)}function u(h){let f=s.get(h);if(f){let d=h.index;d!==null&&f.version<d.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function Lg(i,t,e){let n;function r(f){n=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function l(f,d){i.drawElements(n,d,s,f*o),e.update(d,n,1)}function c(f,d,p){p!==0&&(i.drawElementsInstanced(n,d,s,f*o,p),e.update(d,n,p))}function u(f,d,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,s,f,0,p);let g=0;for(let m=0;m<p;m++)g+=d[m];e.update(g,n,1)}function h(f,d,p,x){if(p===0)return;let g=t.get("WEBGL_multi_draw");if(g===null)for(let m=0;m<f.length;m++)c(f[m]/o,d[m],x[m]);else{g.multiDrawElementsInstancedWEBGL(n,d,0,s,f,0,x,0,p);let m=0;for(let _=0;_<p;_++)m+=d[_]*x[_];e.update(m,n,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function Ug(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(s/3);break;case i.LINES:e.lines+=a*(s/2);break;case i.LINE_STRIP:e.lines+=a*(s-1);break;case i.LINE_LOOP:e.lines+=a*s;break;case i.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:n}}function Ng(i,t,e){let n=new WeakMap,r=new tn;function s(o,a,l){let c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0,f=n.get(a);if(f===void 0||f.count!==h){let b=function(){E.dispose(),n.delete(a),a.removeEventListener("dispose",b)};f!==void 0&&f.texture.dispose();let d=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],_=a.morphAttributes.color||[],y=0;d===!0&&(y=1),p===!0&&(y=2),x===!0&&(y=3);let v=a.attributes.position.count*y,w=1;v>t.maxTextureSize&&(w=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let M=new Float32Array(v*w*4*h),E=new fo(M,v,w,h);E.type=Fi,E.needsUpdate=!0;let T=y*4;for(let S=0;S<h;S++){let A=g[S],I=m[S],P=_[S],B=v*w*4*S;for(let z=0;z<A.count;z++){let N=z*T;d===!0&&(r.fromBufferAttribute(A,z),M[B+N+0]=r.x,M[B+N+1]=r.y,M[B+N+2]=r.z,M[B+N+3]=0),p===!0&&(r.fromBufferAttribute(I,z),M[B+N+4]=r.x,M[B+N+5]=r.y,M[B+N+6]=r.z,M[B+N+7]=0),x===!0&&(r.fromBufferAttribute(P,z),M[B+N+8]=r.x,M[B+N+9]=r.y,M[B+N+10]=r.z,M[B+N+11]=P.itemSize===4?r.w:1)}}f={count:h,texture:E,size:new mt(v,w)},n.set(a,f),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let d=0;for(let x=0;x<c.length;x++)d+=c[x];let p=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(i,"morphTargetBaseInfluence",p),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:s}}function Fg(i,t,e,n){let r=new WeakMap;function s(l){let c=n.render.frame,u=l.geometry,h=t.get(l,u);if(r.get(h)!==c&&(t.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return h}function o(){r=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:o}}var Hf=new Vn,Sf=new bo(1,1),Vf=new fo,Gf=new Ca,Wf=new xo,Ef=[],wf=[],Tf=new Float32Array(16),Af=new Float32Array(9),Rf=new Float32Array(4);function zs(i,t,e){let n=i[0];if(n<=0||n>0)return i;let r=t*e,s=Ef[r];if(s===void 0&&(s=new Float32Array(r),Ef[r]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(s,a)}return s}function _n(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function vn(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Ql(i,t){let e=wf[t];e===void 0&&(e=new Int32Array(t),wf[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Bg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Og(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(_n(e,t))return;i.uniform2fv(this.addr,t),vn(e,t)}}function zg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(_n(e,t))return;i.uniform3fv(this.addr,t),vn(e,t)}}function kg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(_n(e,t))return;i.uniform4fv(this.addr,t),vn(e,t)}}function Hg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(_n(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),vn(e,t)}else{if(_n(e,n))return;Rf.set(n),i.uniformMatrix2fv(this.addr,!1,Rf),vn(e,n)}}function Vg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(_n(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),vn(e,t)}else{if(_n(e,n))return;Af.set(n),i.uniformMatrix3fv(this.addr,!1,Af),vn(e,n)}}function Gg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(_n(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),vn(e,t)}else{if(_n(e,n))return;Tf.set(n),i.uniformMatrix4fv(this.addr,!1,Tf),vn(e,n)}}function Wg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Xg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(_n(e,t))return;i.uniform2iv(this.addr,t),vn(e,t)}}function qg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(_n(e,t))return;i.uniform3iv(this.addr,t),vn(e,t)}}function Yg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(_n(e,t))return;i.uniform4iv(this.addr,t),vn(e,t)}}function Zg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Jg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(_n(e,t))return;i.uniform2uiv(this.addr,t),vn(e,t)}}function $g(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(_n(e,t))return;i.uniform3uiv(this.addr,t),vn(e,t)}}function Kg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(_n(e,t))return;i.uniform4uiv(this.addr,t),vn(e,t)}}function Qg(i,t,e){let n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(Sf.compareFunction=xh,s=Sf):s=Hf,e.setTexture2D(t||s,r)}function jg(i,t,e){let n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture3D(t||Gf,r)}function t1(i,t,e){let n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTextureCube(t||Wf,r)}function e1(i,t,e){let n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture2DArray(t||Vf,r)}function n1(i){switch(i){case 5126:return Bg;case 35664:return Og;case 35665:return zg;case 35666:return kg;case 35674:return Hg;case 35675:return Vg;case 35676:return Gg;case 5124:case 35670:return Wg;case 35667:case 35671:return Xg;case 35668:case 35672:return qg;case 35669:case 35673:return Yg;case 5125:return Zg;case 36294:return Jg;case 36295:return $g;case 36296:return Kg;case 35678:case 36198:case 36298:case 36306:case 35682:return Qg;case 35679:case 36299:case 36307:return jg;case 35680:case 36300:case 36308:case 36293:return t1;case 36289:case 36303:case 36311:case 36292:return e1}}function i1(i,t){i.uniform1fv(this.addr,t)}function r1(i,t){let e=zs(t,this.size,2);i.uniform2fv(this.addr,e)}function s1(i,t){let e=zs(t,this.size,3);i.uniform3fv(this.addr,e)}function o1(i,t){let e=zs(t,this.size,4);i.uniform4fv(this.addr,e)}function a1(i,t){let e=zs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function l1(i,t){let e=zs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function c1(i,t){let e=zs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function h1(i,t){i.uniform1iv(this.addr,t)}function u1(i,t){i.uniform2iv(this.addr,t)}function f1(i,t){i.uniform3iv(this.addr,t)}function d1(i,t){i.uniform4iv(this.addr,t)}function p1(i,t){i.uniform1uiv(this.addr,t)}function m1(i,t){i.uniform2uiv(this.addr,t)}function g1(i,t){i.uniform3uiv(this.addr,t)}function x1(i,t){i.uniform4uiv(this.addr,t)}function _1(i,t,e){let n=this.cache,r=t.length,s=Ql(e,r);_n(n,s)||(i.uniform1iv(this.addr,s),vn(n,s));for(let o=0;o!==r;++o)e.setTexture2D(t[o]||Hf,s[o])}function v1(i,t,e){let n=this.cache,r=t.length,s=Ql(e,r);_n(n,s)||(i.uniform1iv(this.addr,s),vn(n,s));for(let o=0;o!==r;++o)e.setTexture3D(t[o]||Gf,s[o])}function y1(i,t,e){let n=this.cache,r=t.length,s=Ql(e,r);_n(n,s)||(i.uniform1iv(this.addr,s),vn(n,s));for(let o=0;o!==r;++o)e.setTextureCube(t[o]||Wf,s[o])}function M1(i,t,e){let n=this.cache,r=t.length,s=Ql(e,r);_n(n,s)||(i.uniform1iv(this.addr,s),vn(n,s));for(let o=0;o!==r;++o)e.setTexture2DArray(t[o]||Vf,s[o])}function b1(i){switch(i){case 5126:return i1;case 35664:return r1;case 35665:return s1;case 35666:return o1;case 35674:return a1;case 35675:return l1;case 35676:return c1;case 5124:case 35670:return h1;case 35667:case 35671:return u1;case 35668:case 35672:return f1;case 35669:case 35673:return d1;case 5125:return p1;case 36294:return m1;case 36295:return g1;case 36296:return x1;case 35678:case 36198:case 36298:case 36306:case 35682:return _1;case 35679:case 36299:case 36307:return v1;case 35680:case 36300:case 36308:case 36293:return y1;case 36289:case 36303:case 36311:case 36292:return M1}}var Ih=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=n1(e.type)}},Dh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=b1(e.type)}},Lh=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let r=this.seq;for(let s=0,o=r.length;s!==o;++s){let a=r[s];a.setValue(t,e[a.id],n)}}},Ph=/(\w+)(\])?(\[|\.)?/g;function Cf(i,t){i.seq.push(t),i.map[t.id]=t}function S1(i,t,e){let n=i.name,r=n.length;for(Ph.lastIndex=0;;){let s=Ph.exec(n),o=Ph.lastIndex,a=s[1],l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Cf(e,c===void 0?new Ih(a,i,t):new Dh(a,i,t));break}else{let h=e.map[a];h===void 0&&(h=new Lh(a),Cf(e,h)),e=h}}}var Os=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let s=t.getActiveUniform(e,r),o=t.getUniformLocation(e,s.name);S1(s,o,this)}}setValue(t,e,n,r){let s=this.map[e];s!==void 0&&s.setValue(t,n,r)}setOptional(t,e,n){let r=e[n];r!==void 0&&this.setValue(t,n,r)}static upload(t,e,n,r){for(let s=0,o=e.length;s!==o;++s){let a=e[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,r)}}static seqWithValue(t,e){let n=[];for(let r=0,s=t.length;r!==s;++r){let o=t[r];o.id in e&&n.push(o)}return n}};function Pf(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var E1=37297,w1=0;function T1(i,t){let e=i.split(`
`),n=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=r;o<s;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var If=new be;function A1(i){Ne._getMatrix(If,Ne.workingColorSpace,i);let t=`mat3( ${If.elements.map(e=>e.toFixed(4))} )`;switch(Ne.getTransfer(i)){case co:return[t,"LinearTransferOETF"];case ze:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Df(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=(i.getShaderInfoLog(t)||"").trim();if(n&&s==="")return"";let o=/ERROR: 0:(\d+)/.exec(s);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+s+`

`+T1(i.getShaderSource(t),a)}else return s}function R1(i,t){let e=A1(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function C1(i,t){let e;switch(t){case rl:e="Linear";break;case sl:e="Reinhard";break;case ol:e="Cineon";break;case Ds:e="ACESFilmic";break;case ll:e="AgX";break;case cl:e="Neutral";break;case al:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Jl=new k;function P1(){Ne.getLuminanceCoefficients(Jl);let i=Jl.x.toFixed(4),t=Jl.y.toFixed(4),e=Jl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function I1(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Vo).join(`
`)}function D1(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function L1(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){let s=i.getActiveAttrib(t,r),o=s.name,a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Vo(i){return i!==""}function Lf(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Uf(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var U1=/^[ \t]*#include +<([\w\d./]+)>/gm;function Uh(i){return i.replace(U1,F1)}var N1=new Map;function F1(i,t){let e=Te[t];if(e===void 0){let n=N1.get(t);if(n!==void 0)e=Te[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Uh(e)}var B1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Nf(i){return i.replace(B1,O1)}function O1(i,t,e,n){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Ff(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function z1(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===rh?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Ru?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Ui&&(t="SHADOWMAP_TYPE_VSM"),t}function k1(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Wr:case Xr:t="ENVMAP_TYPE_CUBE";break;case Fo:t="ENVMAP_TYPE_CUBE_UV";break}return t}function H1(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Xr:t="ENVMAP_MODE_REFRACTION";break}return t}function V1(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case ah:t="ENVMAP_BLENDING_MULTIPLY";break;case Yu:t="ENVMAP_BLENDING_MIX";break;case Zu:t="ENVMAP_BLENDING_ADD";break}return t}function G1(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function W1(i,t,e,n){let r=i.getContext(),s=e.defines,o=e.vertexShader,a=e.fragmentShader,l=z1(e),c=k1(e),u=H1(e),h=V1(e),f=G1(e),d=I1(e),p=D1(s),x=r.createProgram(),g,m,_=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(Vo).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(Vo).join(`
`),m.length>0&&(m+=`
`)):(g=[Ff(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Vo).join(`
`),m=[Ff(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==tr?"#define TONE_MAPPING":"",e.toneMapping!==tr?Te.tonemapping_pars_fragment:"",e.toneMapping!==tr?C1("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Te.colorspace_pars_fragment,R1("linearToOutputTexel",e.outputColorSpace),P1(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Vo).join(`
`)),o=Uh(o),o=Lf(o,e),o=Uf(o,e),a=Uh(a),a=Lf(a,e),a=Uf(a,e),o=Nf(o),a=Nf(a),e.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",e.glslVersion===_h?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===_h?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let y=_+g+o,v=_+m+a,w=Pf(r,r.VERTEX_SHADER,y),M=Pf(r,r.FRAGMENT_SHADER,v);r.attachShader(x,w),r.attachShader(x,M),e.index0AttributeName!==void 0?r.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function E(A){if(i.debug.checkShaderErrors){let I=r.getProgramInfoLog(x)||"",P=r.getShaderInfoLog(w)||"",B=r.getShaderInfoLog(M)||"",z=I.trim(),N=P.trim(),G=B.trim(),q=!0,K=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(q=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,x,w,M);else{let it=Df(r,w,"vertex"),_t=Df(r,M,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+z+`
`+it+`
`+_t)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(N===""||G==="")&&(K=!1);K&&(A.diagnostics={runnable:q,programLog:z,vertexShader:{log:N,prefix:g},fragmentShader:{log:G,prefix:m}})}r.deleteShader(w),r.deleteShader(M),T=new Os(r,x),b=L1(r,x)}let T;this.getUniforms=function(){return T===void 0&&E(this),T};let b;this.getAttributes=function(){return b===void 0&&E(this),b};let S=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(x,E1)),S},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=w1++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=w,this.fragmentShader=M,this}var X1=0,Nh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Fh(t),e.set(t,n)),n}},Fh=class{constructor(t){this.id=X1++,this.code=t,this.usedTimes=0}};function q1(i,t,e,n,r,s,o){let a=new Ss,l=new Nh,c=new Set,u=[],h=r.logarithmicDepthBuffer,f=r.vertexTextures,d=r.precision,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(b){return c.add(b),b===0?"uv":`uv${b}`}function g(b,S,A,I,P){let B=I.fog,z=P.geometry,N=b.isMeshStandardMaterial?I.environment:null,G=(b.isMeshStandardMaterial?e:t).get(b.envMap||N),q=G&&G.mapping===Fo?G.image.height:null,K=p[b.type];b.precision!==null&&(d=r.getMaxPrecision(b.precision),d!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",d,"instead."));let it=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,_t=it!==void 0?it.length:0,Xt=0;z.morphAttributes.position!==void 0&&(Xt=1),z.morphAttributes.normal!==void 0&&(Xt=2),z.morphAttributes.color!==void 0&&(Xt=3);let It,Ot,_e,pt;if(K){let oe=Bi[K];It=oe.vertexShader,Ot=oe.fragmentShader}else It=b.vertexShader,Ot=b.fragmentShader,l.update(b),_e=l.getVertexShaderID(b),pt=l.getFragmentShaderID(b);let F=i.getRenderTarget(),W=i.state.buffers.depth.getReversed(),j=P.isInstancedMesh===!0,ot=P.isBatchedMesh===!0,vt=!!b.map,Gt=!!b.matcap,O=!!G,ft=!!b.aoMap,dt=!!b.lightMap,ut=!!b.bumpMap,ct=!!b.normalMap,yt=!!b.displacementMap,gt=!!b.emissiveMap,wt=!!b.metalnessMap,he=!!b.roughnessMap,re=b.anisotropy>0,U=b.clearcoat>0,R=b.dispersion>0,$=b.iridescence>0,at=b.sheen>0,xt=b.transmission>0,ht=re&&!!b.anisotropyMap,$t=U&&!!b.clearcoatMap,Ct=U&&!!b.clearcoatNormalMap,jt=U&&!!b.clearcoatRoughnessMap,qt=$&&!!b.iridescenceMap,Tt=$&&!!b.iridescenceThicknessMap,Ut=at&&!!b.sheenColorMap,Ft=at&&!!b.sheenRoughnessMap,ne=!!b.specularMap,Pt=!!b.specularColorMap,D=!!b.specularIntensityMap,C=xt&&!!b.transmissionMap,H=xt&&!!b.thicknessMap,Y=!!b.gradientMap,nt=!!b.alphaMap,et=b.alphaTest>0,Z=!!b.alphaHash,bt=!!b.extensions,St=tr;b.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(St=i.toneMapping);let Ht={shaderID:K,shaderType:b.type,shaderName:b.name,vertexShader:It,fragmentShader:Ot,defines:b.defines,customVertexShaderID:_e,customFragmentShaderID:pt,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:d,batching:ot,batchingColor:ot&&P._colorsTexture!==null,instancing:j,instancingColor:j&&P.instanceColor!==null,instancingMorph:j&&P.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:F===null?i.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:Or,alphaToCoverage:!!b.alphaToCoverage,map:vt,matcap:Gt,envMap:O,envMapMode:O&&G.mapping,envMapCubeUVHeight:q,aoMap:ft,lightMap:dt,bumpMap:ut,normalMap:ct,displacementMap:f&&yt,emissiveMap:gt,normalMapObjectSpace:ct&&b.normalMapType===ju,normalMapTangentSpace:ct&&b.normalMapType===Qu,metalnessMap:wt,roughnessMap:he,anisotropy:re,anisotropyMap:ht,clearcoat:U,clearcoatMap:$t,clearcoatNormalMap:Ct,clearcoatRoughnessMap:jt,dispersion:R,iridescence:$,iridescenceMap:qt,iridescenceThicknessMap:Tt,sheen:at,sheenColorMap:Ut,sheenRoughnessMap:Ft,specularMap:ne,specularColorMap:Pt,specularIntensityMap:D,transmission:xt,transmissionMap:C,thicknessMap:H,gradientMap:Y,opaque:b.transparent===!1&&b.blending===Fr&&b.alphaToCoverage===!1,alphaMap:nt,alphaTest:et,alphaHash:Z,combine:b.combine,mapUv:vt&&x(b.map.channel),aoMapUv:ft&&x(b.aoMap.channel),lightMapUv:dt&&x(b.lightMap.channel),bumpMapUv:ut&&x(b.bumpMap.channel),normalMapUv:ct&&x(b.normalMap.channel),displacementMapUv:yt&&x(b.displacementMap.channel),emissiveMapUv:gt&&x(b.emissiveMap.channel),metalnessMapUv:wt&&x(b.metalnessMap.channel),roughnessMapUv:he&&x(b.roughnessMap.channel),anisotropyMapUv:ht&&x(b.anisotropyMap.channel),clearcoatMapUv:$t&&x(b.clearcoatMap.channel),clearcoatNormalMapUv:Ct&&x(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:jt&&x(b.clearcoatRoughnessMap.channel),iridescenceMapUv:qt&&x(b.iridescenceMap.channel),iridescenceThicknessMapUv:Tt&&x(b.iridescenceThicknessMap.channel),sheenColorMapUv:Ut&&x(b.sheenColorMap.channel),sheenRoughnessMapUv:Ft&&x(b.sheenRoughnessMap.channel),specularMapUv:ne&&x(b.specularMap.channel),specularColorMapUv:Pt&&x(b.specularColorMap.channel),specularIntensityMapUv:D&&x(b.specularIntensityMap.channel),transmissionMapUv:C&&x(b.transmissionMap.channel),thicknessMapUv:H&&x(b.thicknessMap.channel),alphaMapUv:nt&&x(b.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(ct||re),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:P.isPoints===!0&&!!z.attributes.uv&&(vt||nt),fog:!!B,useFog:b.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:b.flatShading===!0&&b.wireframe===!1,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:W,skinning:P.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:_t,morphTextureStride:Xt,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&A.length>0,shadowMapType:i.shadowMap.type,toneMapping:St,decodeVideoTexture:vt&&b.map.isVideoTexture===!0&&Ne.getTransfer(b.map.colorSpace)===ze,decodeVideoTextureEmissive:gt&&b.emissiveMap.isVideoTexture===!0&&Ne.getTransfer(b.emissiveMap.colorSpace)===ze,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===un,flipSided:b.side===Pn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:bt&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(bt&&b.extensions.multiDraw===!0||ot)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Ht.vertexUv1s=c.has(1),Ht.vertexUv2s=c.has(2),Ht.vertexUv3s=c.has(3),c.clear(),Ht}function m(b){let S=[];if(b.shaderID?S.push(b.shaderID):(S.push(b.customVertexShaderID),S.push(b.customFragmentShaderID)),b.defines!==void 0)for(let A in b.defines)S.push(A),S.push(b.defines[A]);return b.isRawShaderMaterial===!1&&(_(S,b),y(S,b),S.push(i.outputColorSpace)),S.push(b.customProgramCacheKey),S.join()}function _(b,S){b.push(S.precision),b.push(S.outputColorSpace),b.push(S.envMapMode),b.push(S.envMapCubeUVHeight),b.push(S.mapUv),b.push(S.alphaMapUv),b.push(S.lightMapUv),b.push(S.aoMapUv),b.push(S.bumpMapUv),b.push(S.normalMapUv),b.push(S.displacementMapUv),b.push(S.emissiveMapUv),b.push(S.metalnessMapUv),b.push(S.roughnessMapUv),b.push(S.anisotropyMapUv),b.push(S.clearcoatMapUv),b.push(S.clearcoatNormalMapUv),b.push(S.clearcoatRoughnessMapUv),b.push(S.iridescenceMapUv),b.push(S.iridescenceThicknessMapUv),b.push(S.sheenColorMapUv),b.push(S.sheenRoughnessMapUv),b.push(S.specularMapUv),b.push(S.specularColorMapUv),b.push(S.specularIntensityMapUv),b.push(S.transmissionMapUv),b.push(S.thicknessMapUv),b.push(S.combine),b.push(S.fogExp2),b.push(S.sizeAttenuation),b.push(S.morphTargetsCount),b.push(S.morphAttributeCount),b.push(S.numDirLights),b.push(S.numPointLights),b.push(S.numSpotLights),b.push(S.numSpotLightMaps),b.push(S.numHemiLights),b.push(S.numRectAreaLights),b.push(S.numDirLightShadows),b.push(S.numPointLightShadows),b.push(S.numSpotLightShadows),b.push(S.numSpotLightShadowsWithMaps),b.push(S.numLightProbes),b.push(S.shadowMapType),b.push(S.toneMapping),b.push(S.numClippingPlanes),b.push(S.numClipIntersection),b.push(S.depthPacking)}function y(b,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),S.gradientMap&&a.enable(22),b.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reversedDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),b.push(a.mask)}function v(b){let S=p[b.type],A;if(S){let I=Bi[S];A=Bn.clone(I.uniforms)}else A=b.uniforms;return A}function w(b,S){let A;for(let I=0,P=u.length;I<P;I++){let B=u[I];if(B.cacheKey===S){A=B,++A.usedTimes;break}}return A===void 0&&(A=new W1(i,S,b,s),u.push(A)),A}function M(b){if(--b.usedTimes===0){let S=u.indexOf(b);u[S]=u[u.length-1],u.pop(),b.destroy()}}function E(b){l.remove(b)}function T(){l.dispose()}return{getParameters:g,getProgramCacheKey:m,getUniforms:v,acquireProgram:w,releaseProgram:M,releaseShaderCache:E,programs:u,dispose:T}}function Y1(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function r(o,a,l){i.get(o)[a]=l}function s(){i=new WeakMap}return{has:t,get:e,remove:n,update:r,dispose:s}}function Z1(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Bf(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Of(){let i=[],t=0,e=[],n=[],r=[];function s(){t=0,e.length=0,n.length=0,r.length=0}function o(h,f,d,p,x,g){let m=i[t];return m===void 0?(m={id:h.id,object:h,geometry:f,material:d,groupOrder:p,renderOrder:h.renderOrder,z:x,group:g},i[t]=m):(m.id=h.id,m.object=h,m.geometry=f,m.material=d,m.groupOrder=p,m.renderOrder=h.renderOrder,m.z=x,m.group=g),t++,m}function a(h,f,d,p,x,g){let m=o(h,f,d,p,x,g);d.transmission>0?n.push(m):d.transparent===!0?r.push(m):e.push(m)}function l(h,f,d,p,x,g){let m=o(h,f,d,p,x,g);d.transmission>0?n.unshift(m):d.transparent===!0?r.unshift(m):e.unshift(m)}function c(h,f){e.length>1&&e.sort(h||Z1),n.length>1&&n.sort(f||Bf),r.length>1&&r.sort(f||Bf)}function u(){for(let h=t,f=i.length;h<f;h++){let d=i[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function J1(){let i=new WeakMap;function t(n,r){let s=i.get(n),o;return s===void 0?(o=new Of,i.set(n,[o])):r>=s.length?(o=new Of,s.push(o)):o=s[r],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function $1(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new k,color:new Vt};break;case"SpotLight":e={position:new k,direction:new k,color:new Vt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new k,color:new Vt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new k,skyColor:new Vt,groundColor:new Vt};break;case"RectAreaLight":e={color:new Vt,position:new k,halfWidth:new k,halfHeight:new k};break}return i[t.id]=e,e}}}function K1(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var Q1=0;function j1(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function tx(i){let t=new $1,e=K1(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new k);let r=new k,s=new Fe,o=new Fe;function a(c){let u=0,h=0,f=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let d=0,p=0,x=0,g=0,m=0,_=0,y=0,v=0,w=0,M=0,E=0;c.sort(j1);for(let b=0,S=c.length;b<S;b++){let A=c[b],I=A.color,P=A.intensity,B=A.distance,z=A.shadow&&A.shadow.map?A.shadow.map.texture:null;if(A.isAmbientLight)u+=I.r*P,h+=I.g*P,f+=I.b*P;else if(A.isLightProbe){for(let N=0;N<9;N++)n.probe[N].addScaledVector(A.sh.coefficients[N],P);E++}else if(A.isDirectionalLight){let N=t.get(A);if(N.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){let G=A.shadow,q=e.get(A);q.shadowIntensity=G.intensity,q.shadowBias=G.bias,q.shadowNormalBias=G.normalBias,q.shadowRadius=G.radius,q.shadowMapSize=G.mapSize,n.directionalShadow[d]=q,n.directionalShadowMap[d]=z,n.directionalShadowMatrix[d]=A.shadow.matrix,_++}n.directional[d]=N,d++}else if(A.isSpotLight){let N=t.get(A);N.position.setFromMatrixPosition(A.matrixWorld),N.color.copy(I).multiplyScalar(P),N.distance=B,N.coneCos=Math.cos(A.angle),N.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),N.decay=A.decay,n.spot[x]=N;let G=A.shadow;if(A.map&&(n.spotLightMap[w]=A.map,w++,G.updateMatrices(A),A.castShadow&&M++),n.spotLightMatrix[x]=G.matrix,A.castShadow){let q=e.get(A);q.shadowIntensity=G.intensity,q.shadowBias=G.bias,q.shadowNormalBias=G.normalBias,q.shadowRadius=G.radius,q.shadowMapSize=G.mapSize,n.spotShadow[x]=q,n.spotShadowMap[x]=z,v++}x++}else if(A.isRectAreaLight){let N=t.get(A);N.color.copy(I).multiplyScalar(P),N.halfWidth.set(A.width*.5,0,0),N.halfHeight.set(0,A.height*.5,0),n.rectArea[g]=N,g++}else if(A.isPointLight){let N=t.get(A);if(N.color.copy(A.color).multiplyScalar(A.intensity),N.distance=A.distance,N.decay=A.decay,A.castShadow){let G=A.shadow,q=e.get(A);q.shadowIntensity=G.intensity,q.shadowBias=G.bias,q.shadowNormalBias=G.normalBias,q.shadowRadius=G.radius,q.shadowMapSize=G.mapSize,q.shadowCameraNear=G.camera.near,q.shadowCameraFar=G.camera.far,n.pointShadow[p]=q,n.pointShadowMap[p]=z,n.pointShadowMatrix[p]=A.shadow.matrix,y++}n.point[p]=N,p++}else if(A.isHemisphereLight){let N=t.get(A);N.skyColor.copy(A.color).multiplyScalar(P),N.groundColor.copy(A.groundColor).multiplyScalar(P),n.hemi[m]=N,m++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Dt.LTC_FLOAT_1,n.rectAreaLTC2=Dt.LTC_FLOAT_2):(n.rectAreaLTC1=Dt.LTC_HALF_1,n.rectAreaLTC2=Dt.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=f;let T=n.hash;(T.directionalLength!==d||T.pointLength!==p||T.spotLength!==x||T.rectAreaLength!==g||T.hemiLength!==m||T.numDirectionalShadows!==_||T.numPointShadows!==y||T.numSpotShadows!==v||T.numSpotMaps!==w||T.numLightProbes!==E)&&(n.directional.length=d,n.spot.length=x,n.rectArea.length=g,n.point.length=p,n.hemi.length=m,n.directionalShadow.length=_,n.directionalShadowMap.length=_,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=_,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=v+w-M,n.spotLightMap.length=w,n.numSpotLightShadowsWithMaps=M,n.numLightProbes=E,T.directionalLength=d,T.pointLength=p,T.spotLength=x,T.rectAreaLength=g,T.hemiLength=m,T.numDirectionalShadows=_,T.numPointShadows=y,T.numSpotShadows=v,T.numSpotMaps=w,T.numLightProbes=E,n.version=Q1++)}function l(c,u){let h=0,f=0,d=0,p=0,x=0,g=u.matrixWorldInverse;for(let m=0,_=c.length;m<_;m++){let y=c[m];if(y.isDirectionalLight){let v=n.directional[h];v.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(g),h++}else if(y.isSpotLight){let v=n.spot[d];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(g),v.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(g),d++}else if(y.isRectAreaLight){let v=n.rectArea[p];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(g),o.identity(),s.copy(y.matrixWorld),s.premultiply(g),o.extractRotation(s),v.halfWidth.set(y.width*.5,0,0),v.halfHeight.set(0,y.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),p++}else if(y.isPointLight){let v=n.point[f];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(g),f++}else if(y.isHemisphereLight){let v=n.hemi[x];v.direction.setFromMatrixPosition(y.matrixWorld),v.direction.transformDirection(g),x++}}}return{setup:a,setupView:l,state:n}}function zf(i){let t=new tx(i),e=[],n=[];function r(u){c.camera=u,e.length=0,n.length=0}function s(u){e.push(u)}function o(u){n.push(u)}function a(){t.setup(e)}function l(u){t.setupView(e,u)}let c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function ex(i){let t=new WeakMap;function e(r,s=0){let o=t.get(r),a;return o===void 0?(a=new zf(i),t.set(r,[a])):s>=o.length?(a=new zf(i),o.push(a)):a=o[s],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var nx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ix=`uniform sampler2D shadow_pass;
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
}`;function rx(i,t,e){let n=new Mo,r=new mt,s=new mt,o=new tn,a=new za({depthPacking:Ku}),l=new ka,c={},u=e.maxTextureSize,h={[ni]:Pn,[Pn]:ni,[un]:un},f=new He({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new mt},radius:{value:4}},vertexShader:nx,fragmentShader:ix}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let p=new Le;p.setAttribute("position",new Pe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new le(p,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=rh;let m=this.type;this.render=function(M,E,T){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||M.length===0)return;let b=i.getRenderTarget(),S=i.getActiveCubeFace(),A=i.getActiveMipmapLevel(),I=i.state;I.setBlending(Ai),I.buffers.depth.getReversed()===!0?I.buffers.color.setClear(0,0,0,0):I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);let P=m!==Ui&&this.type===Ui,B=m===Ui&&this.type!==Ui;for(let z=0,N=M.length;z<N;z++){let G=M[z],q=G.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",G,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;r.copy(q.mapSize);let K=q.getFrameExtents();if(r.multiply(K),s.copy(q.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/K.x),r.x=s.x*K.x,q.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/K.y),r.y=s.y*K.y,q.mapSize.y=s.y)),q.map===null||P===!0||B===!0){let _t=this.type!==Ui?{minFilter:Jn,magFilter:Jn}:{};q.map!==null&&q.map.dispose(),q.map=new wn(r.x,r.y,_t),q.map.texture.name=G.name+".shadowMap",q.camera.updateProjectionMatrix()}i.setRenderTarget(q.map),i.clear();let it=q.getViewportCount();for(let _t=0;_t<it;_t++){let Xt=q.getViewport(_t);o.set(s.x*Xt.x,s.y*Xt.y,s.x*Xt.z,s.y*Xt.w),I.viewport(o),q.updateMatrices(G,_t),n=q.getFrustum(),v(E,T,q.camera,G,this.type)}q.isPointLightShadow!==!0&&this.type===Ui&&_(q,T),q.needsUpdate=!1}m=this.type,g.needsUpdate=!1,i.setRenderTarget(b,S,A)};function _(M,E){let T=t.update(x);f.defines.VSM_SAMPLES!==M.blurSamples&&(f.defines.VSM_SAMPLES=M.blurSamples,d.defines.VSM_SAMPLES=M.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new wn(r.x,r.y)),f.uniforms.shadow_pass.value=M.map.texture,f.uniforms.resolution.value=M.mapSize,f.uniforms.radius.value=M.radius,i.setRenderTarget(M.mapPass),i.clear(),i.renderBufferDirect(E,null,T,f,x,null),d.uniforms.shadow_pass.value=M.mapPass.texture,d.uniforms.resolution.value=M.mapSize,d.uniforms.radius.value=M.radius,i.setRenderTarget(M.map),i.clear(),i.renderBufferDirect(E,null,T,d,x,null)}function y(M,E,T,b){let S=null,A=T.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(A!==void 0)S=A;else if(S=T.isPointLight===!0?l:a,i.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0||E.alphaToCoverage===!0){let I=S.uuid,P=E.uuid,B=c[I];B===void 0&&(B={},c[I]=B);let z=B[P];z===void 0&&(z=S.clone(),B[P]=z,E.addEventListener("dispose",w)),S=z}if(S.visible=E.visible,S.wireframe=E.wireframe,b===Ui?S.side=E.shadowSide!==null?E.shadowSide:E.side:S.side=E.shadowSide!==null?E.shadowSide:h[E.side],S.alphaMap=E.alphaMap,S.alphaTest=E.alphaToCoverage===!0?.5:E.alphaTest,S.map=E.map,S.clipShadows=E.clipShadows,S.clippingPlanes=E.clippingPlanes,S.clipIntersection=E.clipIntersection,S.displacementMap=E.displacementMap,S.displacementScale=E.displacementScale,S.displacementBias=E.displacementBias,S.wireframeLinewidth=E.wireframeLinewidth,S.linewidth=E.linewidth,T.isPointLight===!0&&S.isMeshDistanceMaterial===!0){let I=i.properties.get(S);I.light=T}return S}function v(M,E,T,b,S){if(M.visible===!1)return;if(M.layers.test(E.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&S===Ui)&&(!M.frustumCulled||n.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,M.matrixWorld);let P=t.update(M),B=M.material;if(Array.isArray(B)){let z=P.groups;for(let N=0,G=z.length;N<G;N++){let q=z[N],K=B[q.materialIndex];if(K&&K.visible){let it=y(M,K,b,S);M.onBeforeShadow(i,M,E,T,P,it,q),i.renderBufferDirect(T,null,P,it,M,q),M.onAfterShadow(i,M,E,T,P,it,q)}}}else if(B.visible){let z=y(M,B,b,S);M.onBeforeShadow(i,M,E,T,P,z,null),i.renderBufferDirect(T,null,P,z,M,null),M.onAfterShadow(i,M,E,T,P,z,null)}}let I=M.children;for(let P=0,B=I.length;P<B;P++)v(I[P],E,T,b,S)}function w(M){M.target.removeEventListener("dispose",w);for(let T in c){let b=c[T],S=M.target.uuid;S in b&&(b[S].dispose(),delete b[S])}}}var sx={[Ka]:Qa,[ja]:nl,[tl]:il,[Br]:el,[Qa]:Ka,[nl]:ja,[il]:tl,[el]:Br};function ox(i,t){function e(){let C=!1,H=new tn,Y=null,nt=new tn(0,0,0,0);return{setMask:function(et){Y!==et&&!C&&(i.colorMask(et,et,et,et),Y=et)},setLocked:function(et){C=et},setClear:function(et,Z,bt,St,Ht){Ht===!0&&(et*=St,Z*=St,bt*=St),H.set(et,Z,bt,St),nt.equals(H)===!1&&(i.clearColor(et,Z,bt,St),nt.copy(H))},reset:function(){C=!1,Y=null,nt.set(-1,0,0,0)}}}function n(){let C=!1,H=!1,Y=null,nt=null,et=null;return{setReversed:function(Z){if(H!==Z){let bt=t.get("EXT_clip_control");Z?bt.clipControlEXT(bt.LOWER_LEFT_EXT,bt.ZERO_TO_ONE_EXT):bt.clipControlEXT(bt.LOWER_LEFT_EXT,bt.NEGATIVE_ONE_TO_ONE_EXT),H=Z;let St=et;et=null,this.setClear(St)}},getReversed:function(){return H},setTest:function(Z){Z?F(i.DEPTH_TEST):W(i.DEPTH_TEST)},setMask:function(Z){Y!==Z&&!C&&(i.depthMask(Z),Y=Z)},setFunc:function(Z){if(H&&(Z=sx[Z]),nt!==Z){switch(Z){case Ka:i.depthFunc(i.NEVER);break;case Qa:i.depthFunc(i.ALWAYS);break;case ja:i.depthFunc(i.LESS);break;case Br:i.depthFunc(i.LEQUAL);break;case tl:i.depthFunc(i.EQUAL);break;case el:i.depthFunc(i.GEQUAL);break;case nl:i.depthFunc(i.GREATER);break;case il:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}nt=Z}},setLocked:function(Z){C=Z},setClear:function(Z){et!==Z&&(H&&(Z=1-Z),i.clearDepth(Z),et=Z)},reset:function(){C=!1,Y=null,nt=null,et=null,H=!1}}}function r(){let C=!1,H=null,Y=null,nt=null,et=null,Z=null,bt=null,St=null,Ht=null;return{setTest:function(oe){C||(oe?F(i.STENCIL_TEST):W(i.STENCIL_TEST))},setMask:function(oe){H!==oe&&!C&&(i.stencilMask(oe),H=oe)},setFunc:function(oe,Se,Oe){(Y!==oe||nt!==Se||et!==Oe)&&(i.stencilFunc(oe,Se,Oe),Y=oe,nt=Se,et=Oe)},setOp:function(oe,Se,Oe){(Z!==oe||bt!==Se||St!==Oe)&&(i.stencilOp(oe,Se,Oe),Z=oe,bt=Se,St=Oe)},setLocked:function(oe){C=oe},setClear:function(oe){Ht!==oe&&(i.clearStencil(oe),Ht=oe)},reset:function(){C=!1,H=null,Y=null,nt=null,et=null,Z=null,bt=null,St=null,Ht=null}}}let s=new e,o=new n,a=new r,l=new WeakMap,c=new WeakMap,u={},h={},f=new WeakMap,d=[],p=null,x=!1,g=null,m=null,_=null,y=null,v=null,w=null,M=null,E=new Vt(0,0,0),T=0,b=!1,S=null,A=null,I=null,P=null,B=null,z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),N=!1,G=0,q=i.getParameter(i.VERSION);q.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(q)[1]),N=G>=1):q.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),N=G>=2);let K=null,it={},_t=i.getParameter(i.SCISSOR_BOX),Xt=i.getParameter(i.VIEWPORT),It=new tn().fromArray(_t),Ot=new tn().fromArray(Xt);function _e(C,H,Y,nt){let et=new Uint8Array(4),Z=i.createTexture();i.bindTexture(C,Z),i.texParameteri(C,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(C,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let bt=0;bt<Y;bt++)C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY?i.texImage3D(H,0,i.RGBA,1,1,nt,0,i.RGBA,i.UNSIGNED_BYTE,et):i.texImage2D(H+bt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,et);return Z}let pt={};pt[i.TEXTURE_2D]=_e(i.TEXTURE_2D,i.TEXTURE_2D,1),pt[i.TEXTURE_CUBE_MAP]=_e(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),pt[i.TEXTURE_2D_ARRAY]=_e(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),pt[i.TEXTURE_3D]=_e(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),F(i.DEPTH_TEST),o.setFunc(Br),ut(!1),ct(ih),F(i.CULL_FACE),ft(Ai);function F(C){u[C]!==!0&&(i.enable(C),u[C]=!0)}function W(C){u[C]!==!1&&(i.disable(C),u[C]=!1)}function j(C,H){return h[C]!==H?(i.bindFramebuffer(C,H),h[C]=H,C===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=H),C===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=H),!0):!1}function ot(C,H){let Y=d,nt=!1;if(C){Y=f.get(H),Y===void 0&&(Y=[],f.set(H,Y));let et=C.textures;if(Y.length!==et.length||Y[0]!==i.COLOR_ATTACHMENT0){for(let Z=0,bt=et.length;Z<bt;Z++)Y[Z]=i.COLOR_ATTACHMENT0+Z;Y.length=et.length,nt=!0}}else Y[0]!==i.BACK&&(Y[0]=i.BACK,nt=!0);nt&&i.drawBuffers(Y)}function vt(C){return p!==C?(i.useProgram(C),p=C,!0):!1}let Gt={[dr]:i.FUNC_ADD,[Pu]:i.FUNC_SUBTRACT,[Iu]:i.FUNC_REVERSE_SUBTRACT};Gt[Du]=i.MIN,Gt[Lu]=i.MAX;let O={[Uu]:i.ZERO,[Nu]:i.ONE,[Fu]:i.SRC_COLOR,[Ma]:i.SRC_ALPHA,[Vu]:i.SRC_ALPHA_SATURATE,[ku]:i.DST_COLOR,[Ou]:i.DST_ALPHA,[Bu]:i.ONE_MINUS_SRC_COLOR,[ba]:i.ONE_MINUS_SRC_ALPHA,[Hu]:i.ONE_MINUS_DST_COLOR,[zu]:i.ONE_MINUS_DST_ALPHA,[Gu]:i.CONSTANT_COLOR,[Wu]:i.ONE_MINUS_CONSTANT_COLOR,[Xu]:i.CONSTANT_ALPHA,[qu]:i.ONE_MINUS_CONSTANT_ALPHA};function ft(C,H,Y,nt,et,Z,bt,St,Ht,oe){if(C===Ai){x===!0&&(W(i.BLEND),x=!1);return}if(x===!1&&(F(i.BLEND),x=!0),C!==Cu){if(C!==g||oe!==b){if((m!==dr||v!==dr)&&(i.blendEquation(i.FUNC_ADD),m=dr,v=dr),oe)switch(C){case Fr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case fn:i.blendFunc(i.ONE,i.ONE);break;case sh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case oh:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}else switch(C){case Fr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case fn:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case sh:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case oh:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}_=null,y=null,w=null,M=null,E.set(0,0,0),T=0,g=C,b=oe}return}et=et||H,Z=Z||Y,bt=bt||nt,(H!==m||et!==v)&&(i.blendEquationSeparate(Gt[H],Gt[et]),m=H,v=et),(Y!==_||nt!==y||Z!==w||bt!==M)&&(i.blendFuncSeparate(O[Y],O[nt],O[Z],O[bt]),_=Y,y=nt,w=Z,M=bt),(St.equals(E)===!1||Ht!==T)&&(i.blendColor(St.r,St.g,St.b,Ht),E.copy(St),T=Ht),g=C,b=!1}function dt(C,H){C.side===un?W(i.CULL_FACE):F(i.CULL_FACE);let Y=C.side===Pn;H&&(Y=!Y),ut(Y),C.blending===Fr&&C.transparent===!1?ft(Ai):ft(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.blendColor,C.blendAlpha,C.premultipliedAlpha),o.setFunc(C.depthFunc),o.setTest(C.depthTest),o.setMask(C.depthWrite),s.setMask(C.colorWrite);let nt=C.stencilWrite;a.setTest(nt),nt&&(a.setMask(C.stencilWriteMask),a.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),a.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),gt(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?F(i.SAMPLE_ALPHA_TO_COVERAGE):W(i.SAMPLE_ALPHA_TO_COVERAGE)}function ut(C){S!==C&&(C?i.frontFace(i.CW):i.frontFace(i.CCW),S=C)}function ct(C){C!==Tu?(F(i.CULL_FACE),C!==A&&(C===ih?i.cullFace(i.BACK):C===Au?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):W(i.CULL_FACE),A=C}function yt(C){C!==I&&(N&&i.lineWidth(C),I=C)}function gt(C,H,Y){C?(F(i.POLYGON_OFFSET_FILL),(P!==H||B!==Y)&&(i.polygonOffset(H,Y),P=H,B=Y)):W(i.POLYGON_OFFSET_FILL)}function wt(C){C?F(i.SCISSOR_TEST):W(i.SCISSOR_TEST)}function he(C){C===void 0&&(C=i.TEXTURE0+z-1),K!==C&&(i.activeTexture(C),K=C)}function re(C,H,Y){Y===void 0&&(K===null?Y=i.TEXTURE0+z-1:Y=K);let nt=it[Y];nt===void 0&&(nt={type:void 0,texture:void 0},it[Y]=nt),(nt.type!==C||nt.texture!==H)&&(K!==Y&&(i.activeTexture(Y),K=Y),i.bindTexture(C,H||pt[C]),nt.type=C,nt.texture=H)}function U(){let C=it[K];C!==void 0&&C.type!==void 0&&(i.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function R(){try{i.compressedTexImage2D(...arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function $(){try{i.compressedTexImage3D(...arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function at(){try{i.texSubImage2D(...arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function xt(){try{i.texSubImage3D(...arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ht(){try{i.compressedTexSubImage2D(...arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function $t(){try{i.compressedTexSubImage3D(...arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Ct(){try{i.texStorage2D(...arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function jt(){try{i.texStorage3D(...arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function qt(){try{i.texImage2D(...arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Tt(){try{i.texImage3D(...arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Ut(C){It.equals(C)===!1&&(i.scissor(C.x,C.y,C.z,C.w),It.copy(C))}function Ft(C){Ot.equals(C)===!1&&(i.viewport(C.x,C.y,C.z,C.w),Ot.copy(C))}function ne(C,H){let Y=c.get(H);Y===void 0&&(Y=new WeakMap,c.set(H,Y));let nt=Y.get(C);nt===void 0&&(nt=i.getUniformBlockIndex(H,C.name),Y.set(C,nt))}function Pt(C,H){let nt=c.get(H).get(C);l.get(H)!==nt&&(i.uniformBlockBinding(H,nt,C.__bindingPointIndex),l.set(H,nt))}function D(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},K=null,it={},h={},f=new WeakMap,d=[],p=null,x=!1,g=null,m=null,_=null,y=null,v=null,w=null,M=null,E=new Vt(0,0,0),T=0,b=!1,S=null,A=null,I=null,P=null,B=null,It.set(0,0,i.canvas.width,i.canvas.height),Ot.set(0,0,i.canvas.width,i.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:F,disable:W,bindFramebuffer:j,drawBuffers:ot,useProgram:vt,setBlending:ft,setMaterial:dt,setFlipSided:ut,setCullFace:ct,setLineWidth:yt,setPolygonOffset:gt,setScissorTest:wt,activeTexture:he,bindTexture:re,unbindTexture:U,compressedTexImage2D:R,compressedTexImage3D:$,texImage2D:qt,texImage3D:Tt,updateUBOMapping:ne,uniformBlockBinding:Pt,texStorage2D:Ct,texStorage3D:jt,texSubImage2D:at,texSubImage3D:xt,compressedTexSubImage2D:ht,compressedTexSubImage3D:$t,scissor:Ut,viewport:Ft,reset:D}}function ax(i,t,e,n,r,s,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new mt,u=new WeakMap,h,f=new WeakMap,d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(U,R){return d?new OffscreenCanvas(U,R):uo("canvas")}function x(U,R,$){let at=1,xt=re(U);if((xt.width>$||xt.height>$)&&(at=$/Math.max(xt.width,xt.height)),at<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){let ht=Math.floor(at*xt.width),$t=Math.floor(at*xt.height);h===void 0&&(h=p(ht,$t));let Ct=R?p(ht,$t):h;return Ct.width=ht,Ct.height=$t,Ct.getContext("2d").drawImage(U,0,0,ht,$t),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+xt.width+"x"+xt.height+") to ("+ht+"x"+$t+")."),Ct}else return"data"in U&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+xt.width+"x"+xt.height+")."),U;return U}function g(U){return U.generateMipmaps}function m(U){i.generateMipmap(U)}function _(U){return U.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?i.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(U,R,$,at,xt=!1){if(U!==null){if(i[U]!==void 0)return i[U];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let ht=R;if(R===i.RED&&($===i.FLOAT&&(ht=i.R32F),$===i.HALF_FLOAT&&(ht=i.R16F),$===i.UNSIGNED_BYTE&&(ht=i.R8)),R===i.RED_INTEGER&&($===i.UNSIGNED_BYTE&&(ht=i.R8UI),$===i.UNSIGNED_SHORT&&(ht=i.R16UI),$===i.UNSIGNED_INT&&(ht=i.R32UI),$===i.BYTE&&(ht=i.R8I),$===i.SHORT&&(ht=i.R16I),$===i.INT&&(ht=i.R32I)),R===i.RG&&($===i.FLOAT&&(ht=i.RG32F),$===i.HALF_FLOAT&&(ht=i.RG16F),$===i.UNSIGNED_BYTE&&(ht=i.RG8)),R===i.RG_INTEGER&&($===i.UNSIGNED_BYTE&&(ht=i.RG8UI),$===i.UNSIGNED_SHORT&&(ht=i.RG16UI),$===i.UNSIGNED_INT&&(ht=i.RG32UI),$===i.BYTE&&(ht=i.RG8I),$===i.SHORT&&(ht=i.RG16I),$===i.INT&&(ht=i.RG32I)),R===i.RGB_INTEGER&&($===i.UNSIGNED_BYTE&&(ht=i.RGB8UI),$===i.UNSIGNED_SHORT&&(ht=i.RGB16UI),$===i.UNSIGNED_INT&&(ht=i.RGB32UI),$===i.BYTE&&(ht=i.RGB8I),$===i.SHORT&&(ht=i.RGB16I),$===i.INT&&(ht=i.RGB32I)),R===i.RGBA_INTEGER&&($===i.UNSIGNED_BYTE&&(ht=i.RGBA8UI),$===i.UNSIGNED_SHORT&&(ht=i.RGBA16UI),$===i.UNSIGNED_INT&&(ht=i.RGBA32UI),$===i.BYTE&&(ht=i.RGBA8I),$===i.SHORT&&(ht=i.RGBA16I),$===i.INT&&(ht=i.RGBA32I)),R===i.RGB&&($===i.UNSIGNED_INT_5_9_9_9_REV&&(ht=i.RGB9_E5),$===i.UNSIGNED_INT_10F_11F_11F_REV&&(ht=i.R11F_G11F_B10F)),R===i.RGBA){let $t=xt?co:Ne.getTransfer(at);$===i.FLOAT&&(ht=i.RGBA32F),$===i.HALF_FLOAT&&(ht=i.RGBA16F),$===i.UNSIGNED_BYTE&&(ht=$t===ze?i.SRGB8_ALPHA8:i.RGBA8),$===i.UNSIGNED_SHORT_4_4_4_4&&(ht=i.RGBA4),$===i.UNSIGNED_SHORT_5_5_5_1&&(ht=i.RGB5_A1)}return(ht===i.R16F||ht===i.R32F||ht===i.RG16F||ht===i.RG32F||ht===i.RGBA16F||ht===i.RGBA32F)&&t.get("EXT_color_buffer_float"),ht}function v(U,R){let $;return U?R===null||R===vr||R===Us?$=i.DEPTH24_STENCIL8:R===Fi?$=i.DEPTH32F_STENCIL8:R===Ls&&($=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):R===null||R===vr||R===Us?$=i.DEPTH_COMPONENT24:R===Fi?$=i.DEPTH_COMPONENT32F:R===Ls&&($=i.DEPTH_COMPONENT16),$}function w(U,R){return g(U)===!0||U.isFramebufferTexture&&U.minFilter!==Jn&&U.minFilter!==wi?Math.log2(Math.max(R.width,R.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?R.mipmaps.length:1}function M(U){let R=U.target;R.removeEventListener("dispose",M),T(R),R.isVideoTexture&&u.delete(R)}function E(U){let R=U.target;R.removeEventListener("dispose",E),S(R)}function T(U){let R=n.get(U);if(R.__webglInit===void 0)return;let $=U.source,at=f.get($);if(at){let xt=at[R.__cacheKey];xt.usedTimes--,xt.usedTimes===0&&b(U),Object.keys(at).length===0&&f.delete($)}n.remove(U)}function b(U){let R=n.get(U);i.deleteTexture(R.__webglTexture);let $=U.source,at=f.get($);delete at[R.__cacheKey],o.memory.textures--}function S(U){let R=n.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),n.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let at=0;at<6;at++){if(Array.isArray(R.__webglFramebuffer[at]))for(let xt=0;xt<R.__webglFramebuffer[at].length;xt++)i.deleteFramebuffer(R.__webglFramebuffer[at][xt]);else i.deleteFramebuffer(R.__webglFramebuffer[at]);R.__webglDepthbuffer&&i.deleteRenderbuffer(R.__webglDepthbuffer[at])}else{if(Array.isArray(R.__webglFramebuffer))for(let at=0;at<R.__webglFramebuffer.length;at++)i.deleteFramebuffer(R.__webglFramebuffer[at]);else i.deleteFramebuffer(R.__webglFramebuffer);if(R.__webglDepthbuffer&&i.deleteRenderbuffer(R.__webglDepthbuffer),R.__webglMultisampledFramebuffer&&i.deleteFramebuffer(R.__webglMultisampledFramebuffer),R.__webglColorRenderbuffer)for(let at=0;at<R.__webglColorRenderbuffer.length;at++)R.__webglColorRenderbuffer[at]&&i.deleteRenderbuffer(R.__webglColorRenderbuffer[at]);R.__webglDepthRenderbuffer&&i.deleteRenderbuffer(R.__webglDepthRenderbuffer)}let $=U.textures;for(let at=0,xt=$.length;at<xt;at++){let ht=n.get($[at]);ht.__webglTexture&&(i.deleteTexture(ht.__webglTexture),o.memory.textures--),n.remove($[at])}n.remove(U)}let A=0;function I(){A=0}function P(){let U=A;return U>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+r.maxTextures),A+=1,U}function B(U){let R=[];return R.push(U.wrapS),R.push(U.wrapT),R.push(U.wrapR||0),R.push(U.magFilter),R.push(U.minFilter),R.push(U.anisotropy),R.push(U.internalFormat),R.push(U.format),R.push(U.type),R.push(U.generateMipmaps),R.push(U.premultiplyAlpha),R.push(U.flipY),R.push(U.unpackAlignment),R.push(U.colorSpace),R.join()}function z(U,R){let $=n.get(U);if(U.isVideoTexture&&wt(U),U.isRenderTargetTexture===!1&&U.isExternalTexture!==!0&&U.version>0&&$.__version!==U.version){let at=U.image;if(at===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(at.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{pt($,U,R);return}}else U.isExternalTexture&&($.__webglTexture=U.sourceTexture?U.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,$.__webglTexture,i.TEXTURE0+R)}function N(U,R){let $=n.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&$.__version!==U.version){pt($,U,R);return}e.bindTexture(i.TEXTURE_2D_ARRAY,$.__webglTexture,i.TEXTURE0+R)}function G(U,R){let $=n.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&$.__version!==U.version){pt($,U,R);return}e.bindTexture(i.TEXTURE_3D,$.__webglTexture,i.TEXTURE0+R)}function q(U,R){let $=n.get(U);if(U.version>0&&$.__version!==U.version){F($,U,R);return}e.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture,i.TEXTURE0+R)}let K={[Ei]:i.REPEAT,[fr]:i.CLAMP_TO_EDGE,[Sa]:i.MIRRORED_REPEAT},it={[Jn]:i.NEAREST,[Ju]:i.NEAREST_MIPMAP_NEAREST,[Bo]:i.NEAREST_MIPMAP_LINEAR,[wi]:i.LINEAR,[fl]:i.LINEAR_MIPMAP_NEAREST,[_r]:i.LINEAR_MIPMAP_LINEAR},_t={[tf]:i.NEVER,[af]:i.ALWAYS,[ef]:i.LESS,[xh]:i.LEQUAL,[nf]:i.EQUAL,[of]:i.GEQUAL,[rf]:i.GREATER,[sf]:i.NOTEQUAL};function Xt(U,R){if(R.type===Fi&&t.has("OES_texture_float_linear")===!1&&(R.magFilter===wi||R.magFilter===fl||R.magFilter===Bo||R.magFilter===_r||R.minFilter===wi||R.minFilter===fl||R.minFilter===Bo||R.minFilter===_r)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(U,i.TEXTURE_WRAP_S,K[R.wrapS]),i.texParameteri(U,i.TEXTURE_WRAP_T,K[R.wrapT]),(U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY)&&i.texParameteri(U,i.TEXTURE_WRAP_R,K[R.wrapR]),i.texParameteri(U,i.TEXTURE_MAG_FILTER,it[R.magFilter]),i.texParameteri(U,i.TEXTURE_MIN_FILTER,it[R.minFilter]),R.compareFunction&&(i.texParameteri(U,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(U,i.TEXTURE_COMPARE_FUNC,_t[R.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(R.magFilter===Jn||R.minFilter!==Bo&&R.minFilter!==_r||R.type===Fi&&t.has("OES_texture_float_linear")===!1)return;if(R.anisotropy>1||n.get(R).__currentAnisotropy){let $=t.get("EXT_texture_filter_anisotropic");i.texParameterf(U,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(R.anisotropy,r.getMaxAnisotropy())),n.get(R).__currentAnisotropy=R.anisotropy}}}function It(U,R){let $=!1;U.__webglInit===void 0&&(U.__webglInit=!0,R.addEventListener("dispose",M));let at=R.source,xt=f.get(at);xt===void 0&&(xt={},f.set(at,xt));let ht=B(R);if(ht!==U.__cacheKey){xt[ht]===void 0&&(xt[ht]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,$=!0),xt[ht].usedTimes++;let $t=xt[U.__cacheKey];$t!==void 0&&(xt[U.__cacheKey].usedTimes--,$t.usedTimes===0&&b(R)),U.__cacheKey=ht,U.__webglTexture=xt[ht].texture}return $}function Ot(U,R,$){return Math.floor(Math.floor(U/$)/R)}function _e(U,R,$,at){let ht=U.updateRanges;if(ht.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,R.width,R.height,$,at,R.data);else{ht.sort((Tt,Ut)=>Tt.start-Ut.start);let $t=0;for(let Tt=1;Tt<ht.length;Tt++){let Ut=ht[$t],Ft=ht[Tt],ne=Ut.start+Ut.count,Pt=Ot(Ft.start,R.width,4),D=Ot(Ut.start,R.width,4);Ft.start<=ne+1&&Pt===D&&Ot(Ft.start+Ft.count-1,R.width,4)===Pt?Ut.count=Math.max(Ut.count,Ft.start+Ft.count-Ut.start):(++$t,ht[$t]=Ft)}ht.length=$t+1;let Ct=i.getParameter(i.UNPACK_ROW_LENGTH),jt=i.getParameter(i.UNPACK_SKIP_PIXELS),qt=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,R.width);for(let Tt=0,Ut=ht.length;Tt<Ut;Tt++){let Ft=ht[Tt],ne=Math.floor(Ft.start/4),Pt=Math.ceil(Ft.count/4),D=ne%R.width,C=Math.floor(ne/R.width),H=Pt,Y=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,D),i.pixelStorei(i.UNPACK_SKIP_ROWS,C),e.texSubImage2D(i.TEXTURE_2D,0,D,C,H,Y,$,at,R.data)}U.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,Ct),i.pixelStorei(i.UNPACK_SKIP_PIXELS,jt),i.pixelStorei(i.UNPACK_SKIP_ROWS,qt)}}function pt(U,R,$){let at=i.TEXTURE_2D;(R.isDataArrayTexture||R.isCompressedArrayTexture)&&(at=i.TEXTURE_2D_ARRAY),R.isData3DTexture&&(at=i.TEXTURE_3D);let xt=It(U,R),ht=R.source;e.bindTexture(at,U.__webglTexture,i.TEXTURE0+$);let $t=n.get(ht);if(ht.version!==$t.__version||xt===!0){e.activeTexture(i.TEXTURE0+$);let Ct=Ne.getPrimaries(Ne.workingColorSpace),jt=R.colorSpace===er?null:Ne.getPrimaries(R.colorSpace),qt=R.colorSpace===er||Ct===jt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,R.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,R.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,qt);let Tt=x(R.image,!1,r.maxTextureSize);Tt=he(R,Tt);let Ut=s.convert(R.format,R.colorSpace),Ft=s.convert(R.type),ne=y(R.internalFormat,Ut,Ft,R.colorSpace,R.isVideoTexture);Xt(at,R);let Pt,D=R.mipmaps,C=R.isVideoTexture!==!0,H=$t.__version===void 0||xt===!0,Y=ht.dataReady,nt=w(R,Tt);if(R.isDepthTexture)ne=v(R.format===Ns,R.type),H&&(C?e.texStorage2D(i.TEXTURE_2D,1,ne,Tt.width,Tt.height):e.texImage2D(i.TEXTURE_2D,0,ne,Tt.width,Tt.height,0,Ut,Ft,null));else if(R.isDataTexture)if(D.length>0){C&&H&&e.texStorage2D(i.TEXTURE_2D,nt,ne,D[0].width,D[0].height);for(let et=0,Z=D.length;et<Z;et++)Pt=D[et],C?Y&&e.texSubImage2D(i.TEXTURE_2D,et,0,0,Pt.width,Pt.height,Ut,Ft,Pt.data):e.texImage2D(i.TEXTURE_2D,et,ne,Pt.width,Pt.height,0,Ut,Ft,Pt.data);R.generateMipmaps=!1}else C?(H&&e.texStorage2D(i.TEXTURE_2D,nt,ne,Tt.width,Tt.height),Y&&_e(R,Tt,Ut,Ft)):e.texImage2D(i.TEXTURE_2D,0,ne,Tt.width,Tt.height,0,Ut,Ft,Tt.data);else if(R.isCompressedTexture)if(R.isCompressedArrayTexture){C&&H&&e.texStorage3D(i.TEXTURE_2D_ARRAY,nt,ne,D[0].width,D[0].height,Tt.depth);for(let et=0,Z=D.length;et<Z;et++)if(Pt=D[et],R.format!==xi)if(Ut!==null)if(C){if(Y)if(R.layerUpdates.size>0){let bt=Eh(Pt.width,Pt.height,R.format,R.type);for(let St of R.layerUpdates){let Ht=Pt.data.subarray(St*bt/Pt.data.BYTES_PER_ELEMENT,(St+1)*bt/Pt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,et,0,0,St,Pt.width,Pt.height,1,Ut,Ht)}R.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,et,0,0,0,Pt.width,Pt.height,Tt.depth,Ut,Pt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,et,ne,Pt.width,Pt.height,Tt.depth,0,Pt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else C?Y&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,et,0,0,0,Pt.width,Pt.height,Tt.depth,Ut,Ft,Pt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,et,ne,Pt.width,Pt.height,Tt.depth,0,Ut,Ft,Pt.data)}else{C&&H&&e.texStorage2D(i.TEXTURE_2D,nt,ne,D[0].width,D[0].height);for(let et=0,Z=D.length;et<Z;et++)Pt=D[et],R.format!==xi?Ut!==null?C?Y&&e.compressedTexSubImage2D(i.TEXTURE_2D,et,0,0,Pt.width,Pt.height,Ut,Pt.data):e.compressedTexImage2D(i.TEXTURE_2D,et,ne,Pt.width,Pt.height,0,Pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):C?Y&&e.texSubImage2D(i.TEXTURE_2D,et,0,0,Pt.width,Pt.height,Ut,Ft,Pt.data):e.texImage2D(i.TEXTURE_2D,et,ne,Pt.width,Pt.height,0,Ut,Ft,Pt.data)}else if(R.isDataArrayTexture)if(C){if(H&&e.texStorage3D(i.TEXTURE_2D_ARRAY,nt,ne,Tt.width,Tt.height,Tt.depth),Y)if(R.layerUpdates.size>0){let et=Eh(Tt.width,Tt.height,R.format,R.type);for(let Z of R.layerUpdates){let bt=Tt.data.subarray(Z*et/Tt.data.BYTES_PER_ELEMENT,(Z+1)*et/Tt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Z,Tt.width,Tt.height,1,Ut,Ft,bt)}R.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Tt.width,Tt.height,Tt.depth,Ut,Ft,Tt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,ne,Tt.width,Tt.height,Tt.depth,0,Ut,Ft,Tt.data);else if(R.isData3DTexture)C?(H&&e.texStorage3D(i.TEXTURE_3D,nt,ne,Tt.width,Tt.height,Tt.depth),Y&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Tt.width,Tt.height,Tt.depth,Ut,Ft,Tt.data)):e.texImage3D(i.TEXTURE_3D,0,ne,Tt.width,Tt.height,Tt.depth,0,Ut,Ft,Tt.data);else if(R.isFramebufferTexture){if(H)if(C)e.texStorage2D(i.TEXTURE_2D,nt,ne,Tt.width,Tt.height);else{let et=Tt.width,Z=Tt.height;for(let bt=0;bt<nt;bt++)e.texImage2D(i.TEXTURE_2D,bt,ne,et,Z,0,Ut,Ft,null),et>>=1,Z>>=1}}else if(D.length>0){if(C&&H){let et=re(D[0]);e.texStorage2D(i.TEXTURE_2D,nt,ne,et.width,et.height)}for(let et=0,Z=D.length;et<Z;et++)Pt=D[et],C?Y&&e.texSubImage2D(i.TEXTURE_2D,et,0,0,Ut,Ft,Pt):e.texImage2D(i.TEXTURE_2D,et,ne,Ut,Ft,Pt);R.generateMipmaps=!1}else if(C){if(H){let et=re(Tt);e.texStorage2D(i.TEXTURE_2D,nt,ne,et.width,et.height)}Y&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Ut,Ft,Tt)}else e.texImage2D(i.TEXTURE_2D,0,ne,Ut,Ft,Tt);g(R)&&m(at),$t.__version=ht.version,R.onUpdate&&R.onUpdate(R)}U.__version=R.version}function F(U,R,$){if(R.image.length!==6)return;let at=It(U,R),xt=R.source;e.bindTexture(i.TEXTURE_CUBE_MAP,U.__webglTexture,i.TEXTURE0+$);let ht=n.get(xt);if(xt.version!==ht.__version||at===!0){e.activeTexture(i.TEXTURE0+$);let $t=Ne.getPrimaries(Ne.workingColorSpace),Ct=R.colorSpace===er?null:Ne.getPrimaries(R.colorSpace),jt=R.colorSpace===er||$t===Ct?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,R.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,R.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,jt);let qt=R.isCompressedTexture||R.image[0].isCompressedTexture,Tt=R.image[0]&&R.image[0].isDataTexture,Ut=[];for(let Z=0;Z<6;Z++)!qt&&!Tt?Ut[Z]=x(R.image[Z],!0,r.maxCubemapSize):Ut[Z]=Tt?R.image[Z].image:R.image[Z],Ut[Z]=he(R,Ut[Z]);let Ft=Ut[0],ne=s.convert(R.format,R.colorSpace),Pt=s.convert(R.type),D=y(R.internalFormat,ne,Pt,R.colorSpace),C=R.isVideoTexture!==!0,H=ht.__version===void 0||at===!0,Y=xt.dataReady,nt=w(R,Ft);Xt(i.TEXTURE_CUBE_MAP,R);let et;if(qt){C&&H&&e.texStorage2D(i.TEXTURE_CUBE_MAP,nt,D,Ft.width,Ft.height);for(let Z=0;Z<6;Z++){et=Ut[Z].mipmaps;for(let bt=0;bt<et.length;bt++){let St=et[bt];R.format!==xi?ne!==null?C?Y&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,bt,0,0,St.width,St.height,ne,St.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,bt,D,St.width,St.height,0,St.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):C?Y&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,bt,0,0,St.width,St.height,ne,Pt,St.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,bt,D,St.width,St.height,0,ne,Pt,St.data)}}}else{if(et=R.mipmaps,C&&H){et.length>0&&nt++;let Z=re(Ut[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,nt,D,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(Tt){C?Y&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Ut[Z].width,Ut[Z].height,ne,Pt,Ut[Z].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,D,Ut[Z].width,Ut[Z].height,0,ne,Pt,Ut[Z].data);for(let bt=0;bt<et.length;bt++){let Ht=et[bt].image[Z].image;C?Y&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,bt+1,0,0,Ht.width,Ht.height,ne,Pt,Ht.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,bt+1,D,Ht.width,Ht.height,0,ne,Pt,Ht.data)}}else{C?Y&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,ne,Pt,Ut[Z]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,D,ne,Pt,Ut[Z]);for(let bt=0;bt<et.length;bt++){let St=et[bt];C?Y&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,bt+1,0,0,ne,Pt,St.image[Z]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,bt+1,D,ne,Pt,St.image[Z])}}}g(R)&&m(i.TEXTURE_CUBE_MAP),ht.__version=xt.version,R.onUpdate&&R.onUpdate(R)}U.__version=R.version}function W(U,R,$,at,xt,ht){let $t=s.convert($.format,$.colorSpace),Ct=s.convert($.type),jt=y($.internalFormat,$t,Ct,$.colorSpace),qt=n.get(R),Tt=n.get($);if(Tt.__renderTarget=R,!qt.__hasExternalTextures){let Ut=Math.max(1,R.width>>ht),Ft=Math.max(1,R.height>>ht);xt===i.TEXTURE_3D||xt===i.TEXTURE_2D_ARRAY?e.texImage3D(xt,ht,jt,Ut,Ft,R.depth,0,$t,Ct,null):e.texImage2D(xt,ht,jt,Ut,Ft,0,$t,Ct,null)}e.bindFramebuffer(i.FRAMEBUFFER,U),gt(R)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,at,xt,Tt.__webglTexture,0,yt(R)):(xt===i.TEXTURE_2D||xt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&xt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,at,xt,Tt.__webglTexture,ht),e.bindFramebuffer(i.FRAMEBUFFER,null)}function j(U,R,$){if(i.bindRenderbuffer(i.RENDERBUFFER,U),R.depthBuffer){let at=R.depthTexture,xt=at&&at.isDepthTexture?at.type:null,ht=v(R.stencilBuffer,xt),$t=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ct=yt(R);gt(R)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ct,ht,R.width,R.height):$?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ct,ht,R.width,R.height):i.renderbufferStorage(i.RENDERBUFFER,ht,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,$t,i.RENDERBUFFER,U)}else{let at=R.textures;for(let xt=0;xt<at.length;xt++){let ht=at[xt],$t=s.convert(ht.format,ht.colorSpace),Ct=s.convert(ht.type),jt=y(ht.internalFormat,$t,Ct,ht.colorSpace),qt=yt(R);$&&gt(R)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,qt,jt,R.width,R.height):gt(R)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,qt,jt,R.width,R.height):i.renderbufferStorage(i.RENDERBUFFER,jt,R.width,R.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ot(U,R){if(R&&R.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,U),!(R.depthTexture&&R.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let at=n.get(R.depthTexture);at.__renderTarget=R,(!at.__webglTexture||R.depthTexture.image.width!==R.width||R.depthTexture.image.height!==R.height)&&(R.depthTexture.image.width=R.width,R.depthTexture.image.height=R.height,R.depthTexture.needsUpdate=!0),z(R.depthTexture,0);let xt=at.__webglTexture,ht=yt(R);if(R.depthTexture.format===vs)gt(R)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,xt,0,ht):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,xt,0);else if(R.depthTexture.format===Ns)gt(R)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,xt,0,ht):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,xt,0);else throw new Error("Unknown depthTexture format")}function vt(U){let R=n.get(U),$=U.isWebGLCubeRenderTarget===!0;if(R.__boundDepthTexture!==U.depthTexture){let at=U.depthTexture;if(R.__depthDisposeCallback&&R.__depthDisposeCallback(),at){let xt=()=>{delete R.__boundDepthTexture,delete R.__depthDisposeCallback,at.removeEventListener("dispose",xt)};at.addEventListener("dispose",xt),R.__depthDisposeCallback=xt}R.__boundDepthTexture=at}if(U.depthTexture&&!R.__autoAllocateDepthBuffer){if($)throw new Error("target.depthTexture not supported in Cube render targets");let at=U.texture.mipmaps;at&&at.length>0?ot(R.__webglFramebuffer[0],U):ot(R.__webglFramebuffer,U)}else if($){R.__webglDepthbuffer=[];for(let at=0;at<6;at++)if(e.bindFramebuffer(i.FRAMEBUFFER,R.__webglFramebuffer[at]),R.__webglDepthbuffer[at]===void 0)R.__webglDepthbuffer[at]=i.createRenderbuffer(),j(R.__webglDepthbuffer[at],U,!1);else{let xt=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ht=R.__webglDepthbuffer[at];i.bindRenderbuffer(i.RENDERBUFFER,ht),i.framebufferRenderbuffer(i.FRAMEBUFFER,xt,i.RENDERBUFFER,ht)}}else{let at=U.texture.mipmaps;if(at&&at.length>0?e.bindFramebuffer(i.FRAMEBUFFER,R.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,R.__webglFramebuffer),R.__webglDepthbuffer===void 0)R.__webglDepthbuffer=i.createRenderbuffer(),j(R.__webglDepthbuffer,U,!1);else{let xt=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ht=R.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ht),i.framebufferRenderbuffer(i.FRAMEBUFFER,xt,i.RENDERBUFFER,ht)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Gt(U,R,$){let at=n.get(U);R!==void 0&&W(at.__webglFramebuffer,U,U.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),$!==void 0&&vt(U)}function O(U){let R=U.texture,$=n.get(U),at=n.get(R);U.addEventListener("dispose",E);let xt=U.textures,ht=U.isWebGLCubeRenderTarget===!0,$t=xt.length>1;if($t||(at.__webglTexture===void 0&&(at.__webglTexture=i.createTexture()),at.__version=R.version,o.memory.textures++),ht){$.__webglFramebuffer=[];for(let Ct=0;Ct<6;Ct++)if(R.mipmaps&&R.mipmaps.length>0){$.__webglFramebuffer[Ct]=[];for(let jt=0;jt<R.mipmaps.length;jt++)$.__webglFramebuffer[Ct][jt]=i.createFramebuffer()}else $.__webglFramebuffer[Ct]=i.createFramebuffer()}else{if(R.mipmaps&&R.mipmaps.length>0){$.__webglFramebuffer=[];for(let Ct=0;Ct<R.mipmaps.length;Ct++)$.__webglFramebuffer[Ct]=i.createFramebuffer()}else $.__webglFramebuffer=i.createFramebuffer();if($t)for(let Ct=0,jt=xt.length;Ct<jt;Ct++){let qt=n.get(xt[Ct]);qt.__webglTexture===void 0&&(qt.__webglTexture=i.createTexture(),o.memory.textures++)}if(U.samples>0&&gt(U)===!1){$.__webglMultisampledFramebuffer=i.createFramebuffer(),$.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let Ct=0;Ct<xt.length;Ct++){let jt=xt[Ct];$.__webglColorRenderbuffer[Ct]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,$.__webglColorRenderbuffer[Ct]);let qt=s.convert(jt.format,jt.colorSpace),Tt=s.convert(jt.type),Ut=y(jt.internalFormat,qt,Tt,jt.colorSpace,U.isXRRenderTarget===!0),Ft=yt(U);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ft,Ut,U.width,U.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ct,i.RENDERBUFFER,$.__webglColorRenderbuffer[Ct])}i.bindRenderbuffer(i.RENDERBUFFER,null),U.depthBuffer&&($.__webglDepthRenderbuffer=i.createRenderbuffer(),j($.__webglDepthRenderbuffer,U,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ht){e.bindTexture(i.TEXTURE_CUBE_MAP,at.__webglTexture),Xt(i.TEXTURE_CUBE_MAP,R);for(let Ct=0;Ct<6;Ct++)if(R.mipmaps&&R.mipmaps.length>0)for(let jt=0;jt<R.mipmaps.length;jt++)W($.__webglFramebuffer[Ct][jt],U,R,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,jt);else W($.__webglFramebuffer[Ct],U,R,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,0);g(R)&&m(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if($t){for(let Ct=0,jt=xt.length;Ct<jt;Ct++){let qt=xt[Ct],Tt=n.get(qt),Ut=i.TEXTURE_2D;(U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Ut=U.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Ut,Tt.__webglTexture),Xt(Ut,qt),W($.__webglFramebuffer,U,qt,i.COLOR_ATTACHMENT0+Ct,Ut,0),g(qt)&&m(Ut)}e.unbindTexture()}else{let Ct=i.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Ct=U.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Ct,at.__webglTexture),Xt(Ct,R),R.mipmaps&&R.mipmaps.length>0)for(let jt=0;jt<R.mipmaps.length;jt++)W($.__webglFramebuffer[jt],U,R,i.COLOR_ATTACHMENT0,Ct,jt);else W($.__webglFramebuffer,U,R,i.COLOR_ATTACHMENT0,Ct,0);g(R)&&m(Ct),e.unbindTexture()}U.depthBuffer&&vt(U)}function ft(U){let R=U.textures;for(let $=0,at=R.length;$<at;$++){let xt=R[$];if(g(xt)){let ht=_(U),$t=n.get(xt).__webglTexture;e.bindTexture(ht,$t),m(ht),e.unbindTexture()}}}let dt=[],ut=[];function ct(U){if(U.samples>0){if(gt(U)===!1){let R=U.textures,$=U.width,at=U.height,xt=i.COLOR_BUFFER_BIT,ht=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,$t=n.get(U),Ct=R.length>1;if(Ct)for(let qt=0;qt<R.length;qt++)e.bindFramebuffer(i.FRAMEBUFFER,$t.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+qt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,$t.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+qt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,$t.__webglMultisampledFramebuffer);let jt=U.texture.mipmaps;jt&&jt.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,$t.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,$t.__webglFramebuffer);for(let qt=0;qt<R.length;qt++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(xt|=i.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(xt|=i.STENCIL_BUFFER_BIT)),Ct){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,$t.__webglColorRenderbuffer[qt]);let Tt=n.get(R[qt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Tt,0)}i.blitFramebuffer(0,0,$,at,0,0,$,at,xt,i.NEAREST),l===!0&&(dt.length=0,ut.length=0,dt.push(i.COLOR_ATTACHMENT0+qt),U.depthBuffer&&U.resolveDepthBuffer===!1&&(dt.push(ht),ut.push(ht),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,ut)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,dt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Ct)for(let qt=0;qt<R.length;qt++){e.bindFramebuffer(i.FRAMEBUFFER,$t.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+qt,i.RENDERBUFFER,$t.__webglColorRenderbuffer[qt]);let Tt=n.get(R[qt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,$t.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+qt,i.TEXTURE_2D,Tt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,$t.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&l){let R=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[R])}}}function yt(U){return Math.min(r.maxSamples,U.samples)}function gt(U){let R=n.get(U);return U.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&R.__useRenderToTexture!==!1}function wt(U){let R=o.render.frame;u.get(U)!==R&&(u.set(U,R),U.update())}function he(U,R){let $=U.colorSpace,at=U.format,xt=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||$!==Or&&$!==er&&(Ne.getTransfer($)===ze?(at!==xi||xt!==Ni)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",$)),R}function re(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(c.width=U.naturalWidth||U.width,c.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(c.width=U.displayWidth,c.height=U.displayHeight):(c.width=U.width,c.height=U.height),c}this.allocateTextureUnit=P,this.resetTextureUnits=I,this.setTexture2D=z,this.setTexture2DArray=N,this.setTexture3D=G,this.setTextureCube=q,this.rebindTextures=Gt,this.setupRenderTarget=O,this.updateRenderTargetMipmap=ft,this.updateMultisampleRenderTarget=ct,this.setupDepthRenderbuffer=vt,this.setupFrameBufferTexture=W,this.useMultisampledRTT=gt}function lx(i,t){function e(n,r=er){let s,o=Ne.getTransfer(r);if(n===Ni)return i.UNSIGNED_BYTE;if(n===pl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ml)return i.UNSIGNED_SHORT_5_5_5_1;if(n===uh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===fh)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===ch)return i.BYTE;if(n===hh)return i.SHORT;if(n===Ls)return i.UNSIGNED_SHORT;if(n===dl)return i.INT;if(n===vr)return i.UNSIGNED_INT;if(n===Fi)return i.FLOAT;if(n===gi)return i.HALF_FLOAT;if(n===dh)return i.ALPHA;if(n===ph)return i.RGB;if(n===xi)return i.RGBA;if(n===vs)return i.DEPTH_COMPONENT;if(n===Ns)return i.DEPTH_STENCIL;if(n===mh)return i.RED;if(n===gl)return i.RED_INTEGER;if(n===gh)return i.RG;if(n===xl)return i.RG_INTEGER;if(n===_l)return i.RGBA_INTEGER;if(n===Oo||n===zo||n===ko||n===Ho)if(o===ze)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Oo)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===zo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ko)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ho)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Oo)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===zo)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ko)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ho)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===vl||n===yl||n===Ml||n===bl)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===vl)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===yl)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ml)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===bl)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Sl||n===El||n===wl)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Sl||n===El)return o===ze?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===wl)return o===ze?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Tl||n===Al||n===Rl||n===Cl||n===Pl||n===Il||n===Dl||n===Ll||n===Ul||n===Nl||n===Fl||n===Bl||n===Ol||n===zl)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Tl)return o===ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Al)return o===ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Rl)return o===ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Cl)return o===ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Pl)return o===ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Il)return o===ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Dl)return o===ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ll)return o===ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ul)return o===ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Nl)return o===ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Fl)return o===ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Bl)return o===ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ol)return o===ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===zl)return o===ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===kl||n===Hl||n===Vl)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===kl)return o===ze?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Hl)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Vl)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Gl||n===Wl||n===Xl||n===ql)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===Gl)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Wl)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Xl)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ql)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Us?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var cx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,hx=`
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

}`,Bh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new So(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new He({vertexShader:cx,fragmentShader:hx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new le(new xn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Oh=class extends Qi{constructor(t,e){super();let n=this,r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,d=null,p=null,x=typeof XRWebGLBinding<"u",g=new Bh,m={},_=e.getContextAttributes(),y=null,v=null,w=[],M=[],E=new mt,T=null,b=new En;b.viewport=new tn;let S=new En;S.viewport=new tn;let A=[b,S],I=new $a,P=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(pt){let F=w[pt];return F===void 0&&(F=new Es,w[pt]=F),F.getTargetRaySpace()},this.getControllerGrip=function(pt){let F=w[pt];return F===void 0&&(F=new Es,w[pt]=F),F.getGripSpace()},this.getHand=function(pt){let F=w[pt];return F===void 0&&(F=new Es,w[pt]=F),F.getHandSpace()};function z(pt){let F=M.indexOf(pt.inputSource);if(F===-1)return;let W=w[F];W!==void 0&&(W.update(pt.inputSource,pt.frame,c||o),W.dispatchEvent({type:pt.type,data:pt.inputSource}))}function N(){r.removeEventListener("select",z),r.removeEventListener("selectstart",z),r.removeEventListener("selectend",z),r.removeEventListener("squeeze",z),r.removeEventListener("squeezestart",z),r.removeEventListener("squeezeend",z),r.removeEventListener("end",N),r.removeEventListener("inputsourceschange",G);for(let pt=0;pt<w.length;pt++){let F=M[pt];F!==null&&(M[pt]=null,w[pt].disconnect(F))}P=null,B=null,g.reset();for(let pt in m)delete m[pt];t.setRenderTarget(y),d=null,f=null,h=null,r=null,v=null,_e.stop(),n.isPresenting=!1,t.setPixelRatio(T),t.setSize(E.width,E.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(pt){s=pt,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(pt){a=pt,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(pt){c=pt},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h===null&&x&&(h=new XRWebGLBinding(r,e)),h},this.getFrame=function(){return p},this.getSession=function(){return r},this.setSession=async function(pt){if(r=pt,r!==null){if(y=t.getRenderTarget(),r.addEventListener("select",z),r.addEventListener("selectstart",z),r.addEventListener("selectend",z),r.addEventListener("squeeze",z),r.addEventListener("squeezestart",z),r.addEventListener("squeezeend",z),r.addEventListener("end",N),r.addEventListener("inputsourceschange",G),_.xrCompatible!==!0&&await e.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(E),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let W=null,j=null,ot=null;_.depth&&(ot=_.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,W=_.stencil?Ns:vs,j=_.stencil?Us:vr);let vt={colorFormat:e.RGBA8,depthFormat:ot,scaleFactor:s};h=this.getBinding(),f=h.createProjectionLayer(vt),r.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),v=new wn(f.textureWidth,f.textureHeight,{format:xi,type:Ni,depthTexture:new bo(f.textureWidth,f.textureHeight,j,void 0,void 0,void 0,void 0,void 0,void 0,W),stencilBuffer:_.stencil,colorSpace:t.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{let W={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,e,W),r.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),v=new wn(d.framebufferWidth,d.framebufferHeight,{format:xi,type:Ni,colorSpace:t.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),_e.setContext(r),_e.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function G(pt){for(let F=0;F<pt.removed.length;F++){let W=pt.removed[F],j=M.indexOf(W);j>=0&&(M[j]=null,w[j].disconnect(W))}for(let F=0;F<pt.added.length;F++){let W=pt.added[F],j=M.indexOf(W);if(j===-1){for(let vt=0;vt<w.length;vt++)if(vt>=M.length){M.push(W),j=vt;break}else if(M[vt]===null){M[vt]=W,j=vt;break}if(j===-1)break}let ot=w[j];ot&&ot.connect(W)}}let q=new k,K=new k;function it(pt,F,W){q.setFromMatrixPosition(F.matrixWorld),K.setFromMatrixPosition(W.matrixWorld);let j=q.distanceTo(K),ot=F.projectionMatrix.elements,vt=W.projectionMatrix.elements,Gt=ot[14]/(ot[10]-1),O=ot[14]/(ot[10]+1),ft=(ot[9]+1)/ot[5],dt=(ot[9]-1)/ot[5],ut=(ot[8]-1)/ot[0],ct=(vt[8]+1)/vt[0],yt=Gt*ut,gt=Gt*ct,wt=j/(-ut+ct),he=wt*-ut;if(F.matrixWorld.decompose(pt.position,pt.quaternion,pt.scale),pt.translateX(he),pt.translateZ(wt),pt.matrixWorld.compose(pt.position,pt.quaternion,pt.scale),pt.matrixWorldInverse.copy(pt.matrixWorld).invert(),ot[10]===-1)pt.projectionMatrix.copy(F.projectionMatrix),pt.projectionMatrixInverse.copy(F.projectionMatrixInverse);else{let re=Gt+wt,U=O+wt,R=yt-he,$=gt+(j-he),at=ft*O/U*re,xt=dt*O/U*re;pt.projectionMatrix.makePerspective(R,$,at,xt,re,U),pt.projectionMatrixInverse.copy(pt.projectionMatrix).invert()}}function _t(pt,F){F===null?pt.matrixWorld.copy(pt.matrix):pt.matrixWorld.multiplyMatrices(F.matrixWorld,pt.matrix),pt.matrixWorldInverse.copy(pt.matrixWorld).invert()}this.updateCamera=function(pt){if(r===null)return;let F=pt.near,W=pt.far;g.texture!==null&&(g.depthNear>0&&(F=g.depthNear),g.depthFar>0&&(W=g.depthFar)),I.near=S.near=b.near=F,I.far=S.far=b.far=W,(P!==I.near||B!==I.far)&&(r.updateRenderState({depthNear:I.near,depthFar:I.far}),P=I.near,B=I.far),I.layers.mask=pt.layers.mask|6,b.layers.mask=I.layers.mask&3,S.layers.mask=I.layers.mask&5;let j=pt.parent,ot=I.cameras;_t(I,j);for(let vt=0;vt<ot.length;vt++)_t(ot[vt],j);ot.length===2?it(I,b,S):I.projectionMatrix.copy(b.projectionMatrix),Xt(pt,I,j)};function Xt(pt,F,W){W===null?pt.matrix.copy(F.matrixWorld):(pt.matrix.copy(W.matrixWorld),pt.matrix.invert(),pt.matrix.multiply(F.matrixWorld)),pt.matrix.decompose(pt.position,pt.quaternion,pt.scale),pt.updateMatrixWorld(!0),pt.projectionMatrix.copy(F.projectionMatrix),pt.projectionMatrixInverse.copy(F.projectionMatrixInverse),pt.isPerspectiveCamera&&(pt.fov=Ta*2*Math.atan(1/pt.projectionMatrix.elements[5]),pt.zoom=1)}this.getCamera=function(){return I},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(pt){l=pt,f!==null&&(f.fixedFoveation=pt),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=pt)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(I)},this.getCameraTexture=function(pt){return m[pt]};let It=null;function Ot(pt,F){if(u=F.getViewerPose(c||o),p=F,u!==null){let W=u.views;d!==null&&(t.setRenderTargetFramebuffer(v,d.framebuffer),t.setRenderTarget(v));let j=!1;W.length!==I.cameras.length&&(I.cameras.length=0,j=!0);for(let O=0;O<W.length;O++){let ft=W[O],dt=null;if(d!==null)dt=d.getViewport(ft);else{let ct=h.getViewSubImage(f,ft);dt=ct.viewport,O===0&&(t.setRenderTargetTextures(v,ct.colorTexture,ct.depthStencilTexture),t.setRenderTarget(v))}let ut=A[O];ut===void 0&&(ut=new En,ut.layers.enable(O),ut.viewport=new tn,A[O]=ut),ut.matrix.fromArray(ft.transform.matrix),ut.matrix.decompose(ut.position,ut.quaternion,ut.scale),ut.projectionMatrix.fromArray(ft.projectionMatrix),ut.projectionMatrixInverse.copy(ut.projectionMatrix).invert(),ut.viewport.set(dt.x,dt.y,dt.width,dt.height),O===0&&(I.matrix.copy(ut.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale)),j===!0&&I.cameras.push(ut)}let ot=r.enabledFeatures;if(ot&&ot.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&x){h=n.getBinding();let O=h.getDepthInformation(W[0]);O&&O.isValid&&O.texture&&g.init(O,r.renderState)}if(ot&&ot.includes("camera-access")&&x){t.state.unbindTexture(),h=n.getBinding();for(let O=0;O<W.length;O++){let ft=W[O].camera;if(ft){let dt=m[ft];dt||(dt=new So,m[ft]=dt);let ut=h.getCameraImage(ft);dt.sourceTexture=ut}}}}for(let W=0;W<w.length;W++){let j=M[W],ot=w[W];j!==null&&ot!==void 0&&ot.update(j,F,c||o)}It&&It(pt,F),F.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:F}),p=null}let _e=new kf;_e.setAnimationLoop(Ot),this.setAnimationLoop=function(pt){It=pt},this.dispose=function(){}}},Zr=new Di,ux=new Fe;function fx(i,t){function e(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,yh(i)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function r(g,m,_,y,v){m.isMeshBasicMaterial||m.isMeshLambertMaterial?s(g,m):m.isMeshToonMaterial?(s(g,m),h(g,m)):m.isMeshPhongMaterial?(s(g,m),u(g,m)):m.isMeshStandardMaterial?(s(g,m),f(g,m),m.isMeshPhysicalMaterial&&d(g,m,v)):m.isMeshMatcapMaterial?(s(g,m),p(g,m)):m.isMeshDepthMaterial?s(g,m):m.isMeshDistanceMaterial?(s(g,m),x(g,m)):m.isMeshNormalMaterial?s(g,m):m.isLineBasicMaterial?(o(g,m),m.isLineDashedMaterial&&a(g,m)):m.isPointsMaterial?l(g,m,_,y):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,e(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===Pn&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,e(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===Pn&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,e(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,e(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);let _=t.get(m),y=_.envMap,v=_.envMapRotation;y&&(g.envMap.value=y,Zr.copy(v),Zr.x*=-1,Zr.y*=-1,Zr.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Zr.y*=-1,Zr.z*=-1),g.envMapRotation.value.setFromMatrix4(ux.makeRotationFromEuler(Zr)),g.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,g.aoMapTransform))}function o(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform))}function a(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,_,y){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*_,g.scale.value=y*.5,m.map&&(g.map.value=m.map,e(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function u(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function h(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function f(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function d(g,m,_){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Pn&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=_.texture,g.transmissionSamplerSize.value.set(_.width,_.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function x(g,m){let _=t.get(m).light;g.referencePosition.value.setFromMatrixPosition(_.matrixWorld),g.nearDistance.value=_.shadow.camera.near,g.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function dx(i,t,e,n){let r={},s={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,y){let v=y.program;n.uniformBlockBinding(_,v)}function c(_,y){let v=r[_.id];v===void 0&&(p(_),v=u(_),r[_.id]=v,_.addEventListener("dispose",g));let w=y.program;n.updateUBOMapping(_,w);let M=t.render.frame;s[_.id]!==M&&(f(_),s[_.id]=M)}function u(_){let y=h();_.__bindingPointIndex=y;let v=i.createBuffer(),w=_.__size,M=_.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,w,M),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,v),v}function h(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(_){let y=r[_.id],v=_.uniforms,w=_.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let M=0,E=v.length;M<E;M++){let T=Array.isArray(v[M])?v[M]:[v[M]];for(let b=0,S=T.length;b<S;b++){let A=T[b];if(d(A,M,b,w)===!0){let I=A.__offset,P=Array.isArray(A.value)?A.value:[A.value],B=0;for(let z=0;z<P.length;z++){let N=P[z],G=x(N);typeof N=="number"||typeof N=="boolean"?(A.__data[0]=N,i.bufferSubData(i.UNIFORM_BUFFER,I+B,A.__data)):N.isMatrix3?(A.__data[0]=N.elements[0],A.__data[1]=N.elements[1],A.__data[2]=N.elements[2],A.__data[3]=0,A.__data[4]=N.elements[3],A.__data[5]=N.elements[4],A.__data[6]=N.elements[5],A.__data[7]=0,A.__data[8]=N.elements[6],A.__data[9]=N.elements[7],A.__data[10]=N.elements[8],A.__data[11]=0):(N.toArray(A.__data,B),B+=G.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,I,A.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(_,y,v,w){let M=_.value,E=y+"_"+v;if(w[E]===void 0)return typeof M=="number"||typeof M=="boolean"?w[E]=M:w[E]=M.clone(),!0;{let T=w[E];if(typeof M=="number"||typeof M=="boolean"){if(T!==M)return w[E]=M,!0}else if(T.equals(M)===!1)return T.copy(M),!0}return!1}function p(_){let y=_.uniforms,v=0,w=16;for(let E=0,T=y.length;E<T;E++){let b=Array.isArray(y[E])?y[E]:[y[E]];for(let S=0,A=b.length;S<A;S++){let I=b[S],P=Array.isArray(I.value)?I.value:[I.value];for(let B=0,z=P.length;B<z;B++){let N=P[B],G=x(N),q=v%w,K=q%G.boundary,it=q+K;v+=K,it!==0&&w-it<G.storage&&(v+=w-it),I.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=v,v+=G.storage}}}let M=v%w;return M>0&&(v+=w-M),_.__size=v,_.__cache={},this}function x(_){let y={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(y.boundary=4,y.storage=4):_.isVector2?(y.boundary=8,y.storage=8):_.isVector3||_.isColor?(y.boundary=16,y.storage=12):_.isVector4?(y.boundary=16,y.storage=16):_.isMatrix3?(y.boundary=48,y.storage=48):_.isMatrix4?(y.boundary=64,y.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),y}function g(_){let y=_.target;y.removeEventListener("dispose",g);let v=o.indexOf(y.__bindingPointIndex);o.splice(v,1),i.deleteBuffer(r[y.id]),delete r[y.id],delete s[y.id]}function m(){for(let _ in r)i.deleteBuffer(r[_]);o=[],r={},s={}}return{bind:l,update:c,dispose:m}}var Kl=class{constructor(t={}){let{canvas:e=lf(),context:n=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;let p=new Uint32Array(4),x=new Int32Array(4),g=null,m=null,_=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=tr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let v=this,w=!1;this._outputColorSpace=mn;let M=0,E=0,T=null,b=-1,S=null,A=new tn,I=new tn,P=null,B=new Vt(0),z=0,N=e.width,G=e.height,q=1,K=null,it=null,_t=new tn(0,0,N,G),Xt=new tn(0,0,N,G),It=!1,Ot=new Mo,_e=!1,pt=!1,F=new Fe,W=new k,j=new tn,ot={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},vt=!1;function Gt(){return T===null?q:1}let O=n;function ft(L,Q){return e.getContext(L,Q)}try{let L={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"180"}`),e.addEventListener("webglcontextlost",Y,!1),e.addEventListener("webglcontextrestored",nt,!1),e.addEventListener("webglcontextcreationerror",et,!1),O===null){let Q="webgl2";if(O=ft(Q,L),O===null)throw ft(Q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(L){throw console.error("THREE.WebGLRenderer: "+L.message),L}let dt,ut,ct,yt,gt,wt,he,re,U,R,$,at,xt,ht,$t,Ct,jt,qt,Tt,Ut,Ft,ne,Pt,D;function C(){dt=new Ig(O),dt.init(),ne=new lx(O,dt),ut=new Eg(O,dt,t,ne),ct=new ox(O,dt),ut.reversedDepthBuffer&&f&&ct.buffers.depth.setReversed(!0),yt=new Ug(O),gt=new Y1,wt=new ax(O,dt,ct,gt,ut,ne,yt),he=new Tg(v),re=new Pg(v),U=new kp(O),Pt=new bg(O,U),R=new Dg(O,U,yt,Pt),$=new Fg(O,R,U,yt),Tt=new Ng(O,ut,wt),Ct=new wg(gt),at=new q1(v,he,re,dt,ut,Pt,Ct),xt=new fx(v,gt),ht=new J1,$t=new ex(dt),qt=new Mg(v,he,re,ct,$,d,l),jt=new rx(v,$,ut),D=new dx(O,yt,ut,ct),Ut=new Sg(O,dt,yt),Ft=new Lg(O,dt,yt),yt.programs=at.programs,v.capabilities=ut,v.extensions=dt,v.properties=gt,v.renderLists=ht,v.shadowMap=jt,v.state=ct,v.info=yt}C();let H=new Oh(v,O);this.xr=H,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){let L=dt.get("WEBGL_lose_context");L&&L.loseContext()},this.forceContextRestore=function(){let L=dt.get("WEBGL_lose_context");L&&L.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(L){L!==void 0&&(q=L,this.setSize(N,G,!1))},this.getSize=function(L){return L.set(N,G)},this.setSize=function(L,Q,st=!0){if(H.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}N=L,G=Q,e.width=Math.floor(L*q),e.height=Math.floor(Q*q),st===!0&&(e.style.width=L+"px",e.style.height=Q+"px"),this.setViewport(0,0,L,Q)},this.getDrawingBufferSize=function(L){return L.set(N*q,G*q).floor()},this.setDrawingBufferSize=function(L,Q,st){N=L,G=Q,q=st,e.width=Math.floor(L*st),e.height=Math.floor(Q*st),this.setViewport(0,0,L,Q)},this.getCurrentViewport=function(L){return L.copy(A)},this.getViewport=function(L){return L.copy(_t)},this.setViewport=function(L,Q,st,lt){L.isVector4?_t.set(L.x,L.y,L.z,L.w):_t.set(L,Q,st,lt),ct.viewport(A.copy(_t).multiplyScalar(q).round())},this.getScissor=function(L){return L.copy(Xt)},this.setScissor=function(L,Q,st,lt){L.isVector4?Xt.set(L.x,L.y,L.z,L.w):Xt.set(L,Q,st,lt),ct.scissor(I.copy(Xt).multiplyScalar(q).round())},this.getScissorTest=function(){return It},this.setScissorTest=function(L){ct.setScissorTest(It=L)},this.setOpaqueSort=function(L){K=L},this.setTransparentSort=function(L){it=L},this.getClearColor=function(L){return L.copy(qt.getClearColor())},this.setClearColor=function(){qt.setClearColor(...arguments)},this.getClearAlpha=function(){return qt.getClearAlpha()},this.setClearAlpha=function(){qt.setClearAlpha(...arguments)},this.clear=function(L=!0,Q=!0,st=!0){let lt=0;if(L){let tt=!1;if(T!==null){let Rt=T.texture.format;tt=Rt===_l||Rt===xl||Rt===gl}if(tt){let Rt=T.texture.type,Wt=Rt===Ni||Rt===vr||Rt===Ls||Rt===Us||Rt===pl||Rt===ml,Yt=qt.getClearColor(),Qt=qt.getClearAlpha(),pe=Yt.r,ve=Yt.g,fe=Yt.b;Wt?(p[0]=pe,p[1]=ve,p[2]=fe,p[3]=Qt,O.clearBufferuiv(O.COLOR,0,p)):(x[0]=pe,x[1]=ve,x[2]=fe,x[3]=Qt,O.clearBufferiv(O.COLOR,0,x))}else lt|=O.COLOR_BUFFER_BIT}Q&&(lt|=O.DEPTH_BUFFER_BIT),st&&(lt|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(lt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Y,!1),e.removeEventListener("webglcontextrestored",nt,!1),e.removeEventListener("webglcontextcreationerror",et,!1),qt.dispose(),ht.dispose(),$t.dispose(),gt.dispose(),he.dispose(),re.dispose(),$.dispose(),Pt.dispose(),D.dispose(),at.dispose(),H.dispose(),H.removeEventListener("sessionstart",Oe),H.removeEventListener("sessionend",Vi),zn.stop()};function Y(L){L.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function nt(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;let L=yt.autoReset,Q=jt.enabled,st=jt.autoUpdate,lt=jt.needsUpdate,tt=jt.type;C(),yt.autoReset=L,jt.enabled=Q,jt.autoUpdate=st,jt.needsUpdate=lt,jt.type=tt}function et(L){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",L.statusMessage)}function Z(L){let Q=L.target;Q.removeEventListener("dispose",Z),bt(Q)}function bt(L){St(L),gt.remove(L)}function St(L){let Q=gt.get(L).programs;Q!==void 0&&(Q.forEach(function(st){at.releaseProgram(st)}),L.isShaderMaterial&&at.releaseShaderCache(L))}this.renderBufferDirect=function(L,Q,st,lt,tt,Rt){Q===null&&(Q=ot);let Wt=tt.isMesh&&tt.matrixWorld.determinant()<0,Yt=Rr(L,Q,st,lt,tt);ct.setMaterial(lt,Wt);let Qt=st.index,pe=1;if(lt.wireframe===!0){if(Qt=R.getWireframeAttribute(st),Qt===void 0)return;pe=2}let ve=st.drawRange,fe=st.attributes.position,Ee=ve.start*pe,ke=(ve.start+ve.count)*pe;Rt!==null&&(Ee=Math.max(Ee,Rt.start*pe),ke=Math.min(ke,(Rt.start+Rt.count)*pe)),Qt!==null?(Ee=Math.max(Ee,0),ke=Math.min(ke,Qt.count)):fe!=null&&(Ee=Math.max(Ee,0),ke=Math.min(ke,fe.count));let De=ke-Ee;if(De<0||De===1/0)return;Pt.setup(tt,lt,Yt,st,Qt);let We,Ve=Ut;if(Qt!==null&&(We=U.get(Qt),Ve=Ft,Ve.setIndex(We)),tt.isMesh)lt.wireframe===!0?(ct.setLineWidth(lt.wireframeLinewidth*Gt()),Ve.setMode(O.LINES)):Ve.setMode(O.TRIANGLES);else if(tt.isLine){let me=lt.linewidth;me===void 0&&(me=1),ct.setLineWidth(me*Gt()),tt.isLineSegments?Ve.setMode(O.LINES):tt.isLineLoop?Ve.setMode(O.LINE_LOOP):Ve.setMode(O.LINE_STRIP)}else tt.isPoints?Ve.setMode(O.POINTS):tt.isSprite&&Ve.setMode(O.TRIANGLES);if(tt.isBatchedMesh)if(tt._multiDrawInstances!==null)ys("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ve.renderMultiDrawInstances(tt._multiDrawStarts,tt._multiDrawCounts,tt._multiDrawCount,tt._multiDrawInstances);else if(dt.get("WEBGL_multi_draw"))Ve.renderMultiDraw(tt._multiDrawStarts,tt._multiDrawCounts,tt._multiDrawCount);else{let me=tt._multiDrawStarts,X=tt._multiDrawCounts,J=tt._multiDrawCount,rt=Qt?U.get(Qt).bytesPerElement:1,Bt=gt.get(lt).currentProgram.getUniforms();for(let Et=0;Et<J;Et++)Bt.setValue(O,"_gl_DrawID",Et),Ve.render(me[Et]/rt,X[Et])}else if(tt.isInstancedMesh)Ve.renderInstances(Ee,De,tt.count);else if(st.isInstancedBufferGeometry){let me=st._maxInstanceCount!==void 0?st._maxInstanceCount:1/0,X=Math.min(st.instanceCount,me);Ve.renderInstances(Ee,De,X)}else Ve.render(Ee,De)};function Ht(L,Q,st){L.transparent===!0&&L.side===un&&L.forceSinglePass===!1?(L.side=Pn,L.needsUpdate=!0,Tr(L,Q,st),L.side=ni,L.needsUpdate=!0,Tr(L,Q,st),L.side=un):Tr(L,Q,st)}this.compile=function(L,Q,st=null){st===null&&(st=L),m=$t.get(st),m.init(Q),y.push(m),st.traverseVisible(function(tt){tt.isLight&&tt.layers.test(Q.layers)&&(m.pushLight(tt),tt.castShadow&&m.pushShadow(tt))}),L!==st&&L.traverseVisible(function(tt){tt.isLight&&tt.layers.test(Q.layers)&&(m.pushLight(tt),tt.castShadow&&m.pushShadow(tt))}),m.setupLights();let lt=new Set;return L.traverse(function(tt){if(!(tt.isMesh||tt.isPoints||tt.isLine||tt.isSprite))return;let Rt=tt.material;if(Rt)if(Array.isArray(Rt))for(let Wt=0;Wt<Rt.length;Wt++){let Yt=Rt[Wt];Ht(Yt,st,tt),lt.add(Yt)}else Ht(Rt,st,tt),lt.add(Rt)}),m=y.pop(),lt},this.compileAsync=function(L,Q,st=null){let lt=this.compile(L,Q,st);return new Promise(tt=>{function Rt(){if(lt.forEach(function(Wt){gt.get(Wt).currentProgram.isReady()&&lt.delete(Wt)}),lt.size===0){tt(L);return}setTimeout(Rt,10)}dt.get("KHR_parallel_shader_compile")!==null?Rt():setTimeout(Rt,10)})};let oe=null;function Se(L){oe&&oe(L)}function Oe(){zn.stop()}function Vi(){zn.start()}let zn=new kf;zn.setAnimationLoop(Se),typeof self<"u"&&zn.setContext(self),this.setAnimationLoop=function(L){oe=L,H.setAnimationLoop(L),L===null?zn.stop():zn.start()},H.addEventListener("sessionstart",Oe),H.addEventListener("sessionend",Vi),this.render=function(L,Q){if(Q!==void 0&&Q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;if(L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),Q.parent===null&&Q.matrixWorldAutoUpdate===!0&&Q.updateMatrixWorld(),H.enabled===!0&&H.isPresenting===!0&&(H.cameraAutoUpdate===!0&&H.updateCamera(Q),Q=H.getCamera()),L.isScene===!0&&L.onBeforeRender(v,L,Q,T),m=$t.get(L,y.length),m.init(Q),y.push(m),F.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),Ot.setFromProjectionMatrix(F,Si,Q.reversedDepth),pt=this.localClippingEnabled,_e=Ct.init(this.clippingPlanes,pt),g=ht.get(L,_.length),g.init(),_.push(g),H.enabled===!0&&H.isPresenting===!0){let Rt=v.xr.getDepthSensingMesh();Rt!==null&&ts(Rt,Q,-1/0,v.sortObjects)}ts(L,Q,0,v.sortObjects),g.finish(),v.sortObjects===!0&&g.sort(K,it),vt=H.enabled===!1||H.isPresenting===!1||H.hasDepthSensing()===!1,vt&&qt.addToRenderList(g,L),this.info.render.frame++,_e===!0&&Ct.beginShadows();let st=m.state.shadowsArray;jt.render(st,L,Q),_e===!0&&Ct.endShadows(),this.info.autoReset===!0&&this.info.reset();let lt=g.opaque,tt=g.transmissive;if(m.setupLights(),Q.isArrayCamera){let Rt=Q.cameras;if(tt.length>0)for(let Wt=0,Yt=Rt.length;Wt<Yt;Wt++){let Qt=Rt[Wt];Yn(lt,tt,L,Qt)}vt&&qt.render(L);for(let Wt=0,Yt=Rt.length;Wt<Yt;Wt++){let Qt=Rt[Wt];vi(g,L,Qt,Qt.viewport)}}else tt.length>0&&Yn(lt,tt,L,Q),vt&&qt.render(L),vi(g,L,Q);T!==null&&E===0&&(wt.updateMultisampleRenderTarget(T),wt.updateRenderTargetMipmap(T)),L.isScene===!0&&L.onAfterRender(v,L,Q),Pt.resetDefaultState(),b=-1,S=null,y.pop(),y.length>0?(m=y[y.length-1],_e===!0&&Ct.setGlobalState(v.clippingPlanes,m.state.camera)):m=null,_.pop(),_.length>0?g=_[_.length-1]:g=null};function ts(L,Q,st,lt){if(L.visible===!1)return;if(L.layers.test(Q.layers)){if(L.isGroup)st=L.renderOrder;else if(L.isLOD)L.autoUpdate===!0&&L.update(Q);else if(L.isLight)m.pushLight(L),L.castShadow&&m.pushShadow(L);else if(L.isSprite){if(!L.frustumCulled||Ot.intersectsSprite(L)){lt&&j.setFromMatrixPosition(L.matrixWorld).applyMatrix4(F);let Wt=$.update(L),Yt=L.material;Yt.visible&&g.push(L,Wt,Yt,st,j.z,null)}}else if((L.isMesh||L.isLine||L.isPoints)&&(!L.frustumCulled||Ot.intersectsObject(L))){let Wt=$.update(L),Yt=L.material;if(lt&&(L.boundingSphere!==void 0?(L.boundingSphere===null&&L.computeBoundingSphere(),j.copy(L.boundingSphere.center)):(Wt.boundingSphere===null&&Wt.computeBoundingSphere(),j.copy(Wt.boundingSphere.center)),j.applyMatrix4(L.matrixWorld).applyMatrix4(F)),Array.isArray(Yt)){let Qt=Wt.groups;for(let pe=0,ve=Qt.length;pe<ve;pe++){let fe=Qt[pe],Ee=Yt[fe.materialIndex];Ee&&Ee.visible&&g.push(L,Wt,Ee,st,j.z,fe)}}else Yt.visible&&g.push(L,Wt,Yt,st,j.z,null)}}let Rt=L.children;for(let Wt=0,Yt=Rt.length;Wt<Yt;Wt++)ts(Rt[Wt],Q,st,lt)}function vi(L,Q,st,lt){let tt=L.opaque,Rt=L.transmissive,Wt=L.transparent;m.setupLightsView(st),_e===!0&&Ct.setGlobalState(v.clippingPlanes,st),lt&&ct.viewport(A.copy(lt)),tt.length>0&&Gi(tt,Q,st),Rt.length>0&&Gi(Rt,Q,st),Wt.length>0&&Gi(Wt,Q,st),ct.buffers.depth.setTest(!0),ct.buffers.depth.setMask(!0),ct.buffers.color.setMask(!0),ct.setPolygonOffset(!1)}function Yn(L,Q,st,lt){if((st.isScene===!0?st.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[lt.id]===void 0&&(m.state.transmissionRenderTarget[lt.id]=new wn(1,1,{generateMipmaps:!0,type:dt.has("EXT_color_buffer_half_float")||dt.has("EXT_color_buffer_float")?gi:Ni,minFilter:_r,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ne.workingColorSpace}));let Rt=m.state.transmissionRenderTarget[lt.id],Wt=lt.viewport||A;Rt.setSize(Wt.z*v.transmissionResolutionScale,Wt.w*v.transmissionResolutionScale);let Yt=v.getRenderTarget(),Qt=v.getActiveCubeFace(),pe=v.getActiveMipmapLevel();v.setRenderTarget(Rt),v.getClearColor(B),z=v.getClearAlpha(),z<1&&v.setClearColor(16777215,.5),v.clear(),vt&&qt.render(st);let ve=v.toneMapping;v.toneMapping=tr;let fe=lt.viewport;if(lt.viewport!==void 0&&(lt.viewport=void 0),m.setupLightsView(lt),_e===!0&&Ct.setGlobalState(v.clippingPlanes,lt),Gi(L,st,lt),wt.updateMultisampleRenderTarget(Rt),wt.updateRenderTargetMipmap(Rt),dt.has("WEBGL_multisampled_render_to_texture")===!1){let Ee=!1;for(let ke=0,De=Q.length;ke<De;ke++){let We=Q[ke],Ve=We.object,me=We.geometry,X=We.material,J=We.group;if(X.side===un&&Ve.layers.test(lt.layers)){let rt=X.side;X.side=Pn,X.needsUpdate=!0,Zs(Ve,st,lt,me,X,J),X.side=rt,X.needsUpdate=!0,Ee=!0}}Ee===!0&&(wt.updateMultisampleRenderTarget(Rt),wt.updateRenderTargetMipmap(Rt))}v.setRenderTarget(Yt,Qt,pe),v.setClearColor(B,z),fe!==void 0&&(lt.viewport=fe),v.toneMapping=ve}function Gi(L,Q,st){let lt=Q.isScene===!0?Q.overrideMaterial:null;for(let tt=0,Rt=L.length;tt<Rt;tt++){let Wt=L[tt],Yt=Wt.object,Qt=Wt.geometry,pe=Wt.group,ve=Wt.material;ve.allowOverride===!0&&lt!==null&&(ve=lt),Yt.layers.test(st.layers)&&Zs(Yt,Q,st,Qt,ve,pe)}}function Zs(L,Q,st,lt,tt,Rt){L.onBeforeRender(v,Q,st,lt,tt,Rt),L.modelViewMatrix.multiplyMatrices(st.matrixWorldInverse,L.matrixWorld),L.normalMatrix.getNormalMatrix(L.modelViewMatrix),tt.onBeforeRender(v,Q,st,lt,L,Rt),tt.transparent===!0&&tt.side===un&&tt.forceSinglePass===!1?(tt.side=Pn,tt.needsUpdate=!0,v.renderBufferDirect(st,Q,lt,tt,L,Rt),tt.side=ni,tt.needsUpdate=!0,v.renderBufferDirect(st,Q,lt,tt,L,Rt),tt.side=un):v.renderBufferDirect(st,Q,lt,tt,L,Rt),L.onAfterRender(v,Q,st,lt,tt,Rt)}function Tr(L,Q,st){Q.isScene!==!0&&(Q=ot);let lt=gt.get(L),tt=m.state.lights,Rt=m.state.shadowsArray,Wt=tt.state.version,Yt=at.getParameters(L,tt.state,Rt,Q,st),Qt=at.getProgramCacheKey(Yt),pe=lt.programs;lt.environment=L.isMeshStandardMaterial?Q.environment:null,lt.fog=Q.fog,lt.envMap=(L.isMeshStandardMaterial?re:he).get(L.envMap||lt.environment),lt.envMapRotation=lt.environment!==null&&L.envMap===null?Q.environmentRotation:L.envMapRotation,pe===void 0&&(L.addEventListener("dispose",Z),pe=new Map,lt.programs=pe);let ve=pe.get(Qt);if(ve!==void 0){if(lt.currentProgram===ve&&lt.lightsStateVersion===Wt)return rr(L,Yt),ve}else Yt.uniforms=at.getUniforms(L),L.onBeforeCompile(Yt,v),ve=at.acquireProgram(Yt,Qt),pe.set(Qt,ve),lt.uniforms=Yt.uniforms;let fe=lt.uniforms;return(!L.isShaderMaterial&&!L.isRawShaderMaterial||L.clipping===!0)&&(fe.clippingPlanes=Ct.uniform),rr(L,Yt),lt.needsLights=$s(L),lt.lightsStateVersion=Wt,lt.needsLights&&(fe.ambientLightColor.value=tt.state.ambient,fe.lightProbe.value=tt.state.probe,fe.directionalLights.value=tt.state.directional,fe.directionalLightShadows.value=tt.state.directionalShadow,fe.spotLights.value=tt.state.spot,fe.spotLightShadows.value=tt.state.spotShadow,fe.rectAreaLights.value=tt.state.rectArea,fe.ltc_1.value=tt.state.rectAreaLTC1,fe.ltc_2.value=tt.state.rectAreaLTC2,fe.pointLights.value=tt.state.point,fe.pointLightShadows.value=tt.state.pointShadow,fe.hemisphereLights.value=tt.state.hemi,fe.directionalShadowMap.value=tt.state.directionalShadowMap,fe.directionalShadowMatrix.value=tt.state.directionalShadowMatrix,fe.spotShadowMap.value=tt.state.spotShadowMap,fe.spotLightMatrix.value=tt.state.spotLightMatrix,fe.spotLightMap.value=tt.state.spotLightMap,fe.pointShadowMap.value=tt.state.pointShadowMap,fe.pointShadowMatrix.value=tt.state.pointShadowMatrix),lt.currentProgram=ve,lt.uniformsList=null,ve}function Ar(L){if(L.uniformsList===null){let Q=L.currentProgram.getUniforms();L.uniformsList=Os.seqWithValue(Q.seq,L.uniforms)}return L.uniformsList}function rr(L,Q){let st=gt.get(L);st.outputColorSpace=Q.outputColorSpace,st.batching=Q.batching,st.batchingColor=Q.batchingColor,st.instancing=Q.instancing,st.instancingColor=Q.instancingColor,st.instancingMorph=Q.instancingMorph,st.skinning=Q.skinning,st.morphTargets=Q.morphTargets,st.morphNormals=Q.morphNormals,st.morphColors=Q.morphColors,st.morphTargetsCount=Q.morphTargetsCount,st.numClippingPlanes=Q.numClippingPlanes,st.numIntersection=Q.numClipIntersection,st.vertexAlphas=Q.vertexAlphas,st.vertexTangents=Q.vertexTangents,st.toneMapping=Q.toneMapping}function Rr(L,Q,st,lt,tt){Q.isScene!==!0&&(Q=ot),wt.resetTextureUnits();let Rt=Q.fog,Wt=lt.isMeshStandardMaterial?Q.environment:null,Yt=T===null?v.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:Or,Qt=(lt.isMeshStandardMaterial?re:he).get(lt.envMap||Wt),pe=lt.vertexColors===!0&&!!st.attributes.color&&st.attributes.color.itemSize===4,ve=!!st.attributes.tangent&&(!!lt.normalMap||lt.anisotropy>0),fe=!!st.morphAttributes.position,Ee=!!st.morphAttributes.normal,ke=!!st.morphAttributes.color,De=tr;lt.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(De=v.toneMapping);let We=st.morphAttributes.position||st.morphAttributes.normal||st.morphAttributes.color,Ve=We!==void 0?We.length:0,me=gt.get(lt),X=m.state.lights;if(_e===!0&&(pt===!0||L!==S)){let Zt=L===S&&lt.id===b;Ct.setState(lt,L,Zt)}let J=!1;lt.version===me.__version?(me.needsLights&&me.lightsStateVersion!==X.state.version||me.outputColorSpace!==Yt||tt.isBatchedMesh&&me.batching===!1||!tt.isBatchedMesh&&me.batching===!0||tt.isBatchedMesh&&me.batchingColor===!0&&tt.colorTexture===null||tt.isBatchedMesh&&me.batchingColor===!1&&tt.colorTexture!==null||tt.isInstancedMesh&&me.instancing===!1||!tt.isInstancedMesh&&me.instancing===!0||tt.isSkinnedMesh&&me.skinning===!1||!tt.isSkinnedMesh&&me.skinning===!0||tt.isInstancedMesh&&me.instancingColor===!0&&tt.instanceColor===null||tt.isInstancedMesh&&me.instancingColor===!1&&tt.instanceColor!==null||tt.isInstancedMesh&&me.instancingMorph===!0&&tt.morphTexture===null||tt.isInstancedMesh&&me.instancingMorph===!1&&tt.morphTexture!==null||me.envMap!==Qt||lt.fog===!0&&me.fog!==Rt||me.numClippingPlanes!==void 0&&(me.numClippingPlanes!==Ct.numPlanes||me.numIntersection!==Ct.numIntersection)||me.vertexAlphas!==pe||me.vertexTangents!==ve||me.morphTargets!==fe||me.morphNormals!==Ee||me.morphColors!==ke||me.toneMapping!==De||me.morphTargetsCount!==Ve)&&(J=!0):(J=!0,me.__version=lt.version);let rt=me.currentProgram;J===!0&&(rt=Tr(lt,Q,tt));let Bt=!1,Et=!1,se=!1,Nt=rt.getUniforms(),Kt=me.uniforms;if(ct.useProgram(rt.program)&&(Bt=!0,Et=!0,se=!0),lt.id!==b&&(b=lt.id,Et=!0),Bt||S!==L){ct.buffers.depth.getReversed()&&L.reversedDepth!==!0&&(L._reversedDepth=!0,L.updateProjectionMatrix()),Nt.setValue(O,"projectionMatrix",L.projectionMatrix),Nt.setValue(O,"viewMatrix",L.matrixWorldInverse);let xe=Nt.map.cameraPosition;xe!==void 0&&xe.setValue(O,W.setFromMatrixPosition(L.matrixWorld)),ut.logarithmicDepthBuffer&&Nt.setValue(O,"logDepthBufFC",2/(Math.log(L.far+1)/Math.LN2)),(lt.isMeshPhongMaterial||lt.isMeshToonMaterial||lt.isMeshLambertMaterial||lt.isMeshBasicMaterial||lt.isMeshStandardMaterial||lt.isShaderMaterial)&&Nt.setValue(O,"isOrthographic",L.isOrthographicCamera===!0),S!==L&&(S=L,Et=!0,se=!0)}if(tt.isSkinnedMesh){Nt.setOptional(O,tt,"bindMatrix"),Nt.setOptional(O,tt,"bindMatrixInverse");let Zt=tt.skeleton;Zt&&(Zt.boneTexture===null&&Zt.computeBoneTexture(),Nt.setValue(O,"boneTexture",Zt.boneTexture,wt))}tt.isBatchedMesh&&(Nt.setOptional(O,tt,"batchingTexture"),Nt.setValue(O,"batchingTexture",tt._matricesTexture,wt),Nt.setOptional(O,tt,"batchingIdTexture"),Nt.setValue(O,"batchingIdTexture",tt._indirectTexture,wt),Nt.setOptional(O,tt,"batchingColorTexture"),tt._colorsTexture!==null&&Nt.setValue(O,"batchingColorTexture",tt._colorsTexture,wt));let ge=st.morphAttributes;if((ge.position!==void 0||ge.normal!==void 0||ge.color!==void 0)&&Tt.update(tt,st,rt),(Et||me.receiveShadow!==tt.receiveShadow)&&(me.receiveShadow=tt.receiveShadow,Nt.setValue(O,"receiveShadow",tt.receiveShadow)),lt.isMeshGouraudMaterial&&lt.envMap!==null&&(Kt.envMap.value=Qt,Kt.flipEnvMap.value=Qt.isCubeTexture&&Qt.isRenderTargetTexture===!1?-1:1),lt.isMeshStandardMaterial&&lt.envMap===null&&Q.environment!==null&&(Kt.envMapIntensity.value=Q.environmentIntensity),Et&&(Nt.setValue(O,"toneMappingExposure",v.toneMappingExposure),me.needsLights&&Js(Kt,se),Rt&&lt.fog===!0&&xt.refreshFogUniforms(Kt,Rt),xt.refreshMaterialUniforms(Kt,lt,q,G,m.state.transmissionRenderTarget[L.id]),Os.upload(O,Ar(me),Kt,wt)),lt.isShaderMaterial&&lt.uniformsNeedUpdate===!0&&(Os.upload(O,Ar(me),Kt,wt),lt.uniformsNeedUpdate=!1),lt.isSpriteMaterial&&Nt.setValue(O,"center",tt.center),Nt.setValue(O,"modelViewMatrix",tt.modelViewMatrix),Nt.setValue(O,"normalMatrix",tt.normalMatrix),Nt.setValue(O,"modelMatrix",tt.matrixWorld),lt.isShaderMaterial||lt.isRawShaderMaterial){let Zt=lt.uniformsGroups;for(let xe=0,Qe=Zt.length;xe<Qe;xe++){let Je=Zt[xe];D.update(Je,rt),D.bind(Je,rt)}}return rt}function Js(L,Q){L.ambientLightColor.needsUpdate=Q,L.lightProbe.needsUpdate=Q,L.directionalLights.needsUpdate=Q,L.directionalLightShadows.needsUpdate=Q,L.pointLights.needsUpdate=Q,L.pointLightShadows.needsUpdate=Q,L.spotLights.needsUpdate=Q,L.spotLightShadows.needsUpdate=Q,L.rectAreaLights.needsUpdate=Q,L.hemisphereLights.needsUpdate=Q}function $s(L){return L.isMeshLambertMaterial||L.isMeshToonMaterial||L.isMeshPhongMaterial||L.isMeshStandardMaterial||L.isShadowMaterial||L.isShaderMaterial&&L.lights===!0}this.getActiveCubeFace=function(){return M},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(L,Q,st){let lt=gt.get(L);lt.__autoAllocateDepthBuffer=L.resolveDepthBuffer===!1,lt.__autoAllocateDepthBuffer===!1&&(lt.__useRenderToTexture=!1),gt.get(L.texture).__webglTexture=Q,gt.get(L.depthTexture).__webglTexture=lt.__autoAllocateDepthBuffer?void 0:st,lt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(L,Q){let st=gt.get(L);st.__webglFramebuffer=Q,st.__useDefaultFramebuffer=Q===void 0};let Ks=O.createFramebuffer();this.setRenderTarget=function(L,Q=0,st=0){T=L,M=Q,E=st;let lt=!0,tt=null,Rt=!1,Wt=!1;if(L){let Qt=gt.get(L);if(Qt.__useDefaultFramebuffer!==void 0)ct.bindFramebuffer(O.FRAMEBUFFER,null),lt=!1;else if(Qt.__webglFramebuffer===void 0)wt.setupRenderTarget(L);else if(Qt.__hasExternalTextures)wt.rebindTextures(L,gt.get(L.texture).__webglTexture,gt.get(L.depthTexture).__webglTexture);else if(L.depthBuffer){let fe=L.depthTexture;if(Qt.__boundDepthTexture!==fe){if(fe!==null&&gt.has(fe)&&(L.width!==fe.image.width||L.height!==fe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");wt.setupDepthRenderbuffer(L)}}let pe=L.texture;(pe.isData3DTexture||pe.isDataArrayTexture||pe.isCompressedArrayTexture)&&(Wt=!0);let ve=gt.get(L).__webglFramebuffer;L.isWebGLCubeRenderTarget?(Array.isArray(ve[Q])?tt=ve[Q][st]:tt=ve[Q],Rt=!0):L.samples>0&&wt.useMultisampledRTT(L)===!1?tt=gt.get(L).__webglMultisampledFramebuffer:Array.isArray(ve)?tt=ve[st]:tt=ve,A.copy(L.viewport),I.copy(L.scissor),P=L.scissorTest}else A.copy(_t).multiplyScalar(q).floor(),I.copy(Xt).multiplyScalar(q).floor(),P=It;if(st!==0&&(tt=Ks),ct.bindFramebuffer(O.FRAMEBUFFER,tt)&&lt&&ct.drawBuffers(L,tt),ct.viewport(A),ct.scissor(I),ct.setScissorTest(P),Rt){let Qt=gt.get(L.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Qt.__webglTexture,st)}else if(Wt){let Qt=Q;for(let pe=0;pe<L.textures.length;pe++){let ve=gt.get(L.textures[pe]);O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0+pe,ve.__webglTexture,st,Qt)}}else if(L!==null&&st!==0){let Qt=gt.get(L.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Qt.__webglTexture,st)}b=-1},this.readRenderTargetPixels=function(L,Q,st,lt,tt,Rt,Wt,Yt=0){if(!(L&&L.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Qt=gt.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&Wt!==void 0&&(Qt=Qt[Wt]),Qt){ct.bindFramebuffer(O.FRAMEBUFFER,Qt);try{let pe=L.textures[Yt],ve=pe.format,fe=pe.type;if(!ut.textureFormatReadable(ve)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ut.textureTypeReadable(fe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Q>=0&&Q<=L.width-lt&&st>=0&&st<=L.height-tt&&(L.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+Yt),O.readPixels(Q,st,lt,tt,ne.convert(ve),ne.convert(fe),Rt))}finally{let pe=T!==null?gt.get(T).__webglFramebuffer:null;ct.bindFramebuffer(O.FRAMEBUFFER,pe)}}},this.readRenderTargetPixelsAsync=async function(L,Q,st,lt,tt,Rt,Wt,Yt=0){if(!(L&&L.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Qt=gt.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&Wt!==void 0&&(Qt=Qt[Wt]),Qt)if(Q>=0&&Q<=L.width-lt&&st>=0&&st<=L.height-tt){ct.bindFramebuffer(O.FRAMEBUFFER,Qt);let pe=L.textures[Yt],ve=pe.format,fe=pe.type;if(!ut.textureFormatReadable(ve))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ut.textureTypeReadable(fe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Ee=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,Ee),O.bufferData(O.PIXEL_PACK_BUFFER,Rt.byteLength,O.STREAM_READ),L.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+Yt),O.readPixels(Q,st,lt,tt,ne.convert(ve),ne.convert(fe),0);let ke=T!==null?gt.get(T).__webglFramebuffer:null;ct.bindFramebuffer(O.FRAMEBUFFER,ke);let De=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await cf(O,De,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,Ee),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,Rt),O.deleteBuffer(Ee),O.deleteSync(De),Rt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(L,Q=null,st=0){let lt=Math.pow(2,-st),tt=Math.floor(L.image.width*lt),Rt=Math.floor(L.image.height*lt),Wt=Q!==null?Q.x:0,Yt=Q!==null?Q.y:0;wt.setTexture2D(L,0),O.copyTexSubImage2D(O.TEXTURE_2D,st,0,0,Wt,Yt,tt,Rt),ct.unbindTexture()};let Cr=O.createFramebuffer(),Pr=O.createFramebuffer();this.copyTextureToTexture=function(L,Q,st=null,lt=null,tt=0,Rt=null){Rt===null&&(tt!==0?(ys("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Rt=tt,tt=0):Rt=0);let Wt,Yt,Qt,pe,ve,fe,Ee,ke,De,We=L.isCompressedTexture?L.mipmaps[Rt]:L.image;if(st!==null)Wt=st.max.x-st.min.x,Yt=st.max.y-st.min.y,Qt=st.isBox3?st.max.z-st.min.z:1,pe=st.min.x,ve=st.min.y,fe=st.isBox3?st.min.z:0;else{let ge=Math.pow(2,-tt);Wt=Math.floor(We.width*ge),Yt=Math.floor(We.height*ge),L.isDataArrayTexture?Qt=We.depth:L.isData3DTexture?Qt=Math.floor(We.depth*ge):Qt=1,pe=0,ve=0,fe=0}lt!==null?(Ee=lt.x,ke=lt.y,De=lt.z):(Ee=0,ke=0,De=0);let Ve=ne.convert(Q.format),me=ne.convert(Q.type),X;Q.isData3DTexture?(wt.setTexture3D(Q,0),X=O.TEXTURE_3D):Q.isDataArrayTexture||Q.isCompressedArrayTexture?(wt.setTexture2DArray(Q,0),X=O.TEXTURE_2D_ARRAY):(wt.setTexture2D(Q,0),X=O.TEXTURE_2D),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,Q.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Q.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,Q.unpackAlignment);let J=O.getParameter(O.UNPACK_ROW_LENGTH),rt=O.getParameter(O.UNPACK_IMAGE_HEIGHT),Bt=O.getParameter(O.UNPACK_SKIP_PIXELS),Et=O.getParameter(O.UNPACK_SKIP_ROWS),se=O.getParameter(O.UNPACK_SKIP_IMAGES);O.pixelStorei(O.UNPACK_ROW_LENGTH,We.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,We.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,pe),O.pixelStorei(O.UNPACK_SKIP_ROWS,ve),O.pixelStorei(O.UNPACK_SKIP_IMAGES,fe);let Nt=L.isDataArrayTexture||L.isData3DTexture,Kt=Q.isDataArrayTexture||Q.isData3DTexture;if(L.isDepthTexture){let ge=gt.get(L),Zt=gt.get(Q),xe=gt.get(ge.__renderTarget),Qe=gt.get(Zt.__renderTarget);ct.bindFramebuffer(O.READ_FRAMEBUFFER,xe.__webglFramebuffer),ct.bindFramebuffer(O.DRAW_FRAMEBUFFER,Qe.__webglFramebuffer);for(let Je=0;Je<Qt;Je++)Nt&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,gt.get(L).__webglTexture,tt,fe+Je),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,gt.get(Q).__webglTexture,Rt,De+Je)),O.blitFramebuffer(pe,ve,Wt,Yt,Ee,ke,Wt,Yt,O.DEPTH_BUFFER_BIT,O.NEAREST);ct.bindFramebuffer(O.READ_FRAMEBUFFER,null),ct.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(tt!==0||L.isRenderTargetTexture||gt.has(L)){let ge=gt.get(L),Zt=gt.get(Q);ct.bindFramebuffer(O.READ_FRAMEBUFFER,Cr),ct.bindFramebuffer(O.DRAW_FRAMEBUFFER,Pr);for(let xe=0;xe<Qt;xe++)Nt?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,ge.__webglTexture,tt,fe+xe):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,ge.__webglTexture,tt),Kt?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Zt.__webglTexture,Rt,De+xe):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Zt.__webglTexture,Rt),tt!==0?O.blitFramebuffer(pe,ve,Wt,Yt,Ee,ke,Wt,Yt,O.COLOR_BUFFER_BIT,O.NEAREST):Kt?O.copyTexSubImage3D(X,Rt,Ee,ke,De+xe,pe,ve,Wt,Yt):O.copyTexSubImage2D(X,Rt,Ee,ke,pe,ve,Wt,Yt);ct.bindFramebuffer(O.READ_FRAMEBUFFER,null),ct.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else Kt?L.isDataTexture||L.isData3DTexture?O.texSubImage3D(X,Rt,Ee,ke,De,Wt,Yt,Qt,Ve,me,We.data):Q.isCompressedArrayTexture?O.compressedTexSubImage3D(X,Rt,Ee,ke,De,Wt,Yt,Qt,Ve,We.data):O.texSubImage3D(X,Rt,Ee,ke,De,Wt,Yt,Qt,Ve,me,We):L.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,Rt,Ee,ke,Wt,Yt,Ve,me,We.data):L.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,Rt,Ee,ke,We.width,We.height,Ve,We.data):O.texSubImage2D(O.TEXTURE_2D,Rt,Ee,ke,Wt,Yt,Ve,me,We);O.pixelStorei(O.UNPACK_ROW_LENGTH,J),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,rt),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Bt),O.pixelStorei(O.UNPACK_SKIP_ROWS,Et),O.pixelStorei(O.UNPACK_SKIP_IMAGES,se),Rt===0&&Q.generateMipmaps&&O.generateMipmap(X),ct.unbindTexture()},this.initRenderTarget=function(L){gt.get(L).__webglFramebuffer===void 0&&wt.setupRenderTarget(L)},this.initTexture=function(L){L.isCubeTexture?wt.setTextureCube(L,0):L.isData3DTexture?wt.setTexture3D(L,0):L.isDataArrayTexture||L.isCompressedArrayTexture?wt.setTexture2DArray(L,0):wt.setTexture2D(L,0),ct.unbindTexture()},this.resetState=function(){M=0,E=0,T=null,ct.reset(),Pt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Si}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=Ne._getDrawingBufferColorSpace(t),e.unpackColorSpace=Ne._getUnpackColorSpace()}};var ks={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var ai=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},px=new Is(-1,1,1,-1,0,1),kh=class extends Le{constructor(){super(),this.setAttribute("position",new ae([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ae([0,2,0,0,2,0],2))}},mx=new kh,yr=class{constructor(t){this._mesh=new le(mx,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,px)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var jl=class extends ai{constructor(t,e="tDiffuse"){super(),this.textureID=e,this.uniforms=null,this.material=null,t instanceof He?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Bn.clone(t.uniforms),this.material=new He({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new yr(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Go=class extends ai{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){let r=t.getContext(),s=t.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),s.buffers.stencil.setFunc(r.ALWAYS,o,4294967295),s.buffers.stencil.setClear(a),s.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(r.EQUAL,1,4294967295),s.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),s.buffers.stencil.setLocked(!0)}},tc=class extends ai{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var ec=class{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){let n=t.getSize(new mt);this._width=n.width,this._height=n.height,e=new wn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:gi}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new jl(ks),this.copyPass.material.blending=Ai,this.clock=new Uo}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());let e=this.renderer.getRenderTarget(),n=!1;for(let r=0,s=this.passes.length;r<s;r++){let o=this.passes[r];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),o.needsSwap){if(n){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Go!==void 0&&(o instanceof Go?n=!0:o instanceof tc&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){let e=this.renderer.getSize(new mt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;let n=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(n,r),this.renderTarget2.setSize(n,r);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,r)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var nc=class extends ai{constructor(t,e,n=null,r=null,s=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=r,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Vt}render(t,e,n){let r=t.autoClear;t.autoClear=!1;let s,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(s=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),t.autoClear=r}};var Xf={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Vt(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var Hs=class i extends ai{constructor(t,e=1,n,r){super(),this.strength=e,this.radius=n,this.threshold=r,this.resolution=t!==void 0?new mt(t.x,t.y):new mt(256,256),this.clearColor=new Vt(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new wn(s,o,{type:gi}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let h=new wn(s,o,{type:gi});h.texture.name="UnrealBloomPass.h"+u,h.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(h);let f=new wn(s,o,{type:gi});f.texture.name="UnrealBloomPass.v"+u,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),s=Math.round(s/2),o=Math.round(o/2)}let a=Xf;this.highPassUniforms=Bn.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=r,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new He({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new mt(1/s,1/o),s=Math.round(s/2),o=Math.round(o/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new k(1,1,1),new k(1,1,1),new k(1,1,1),new k(1,1,1),new k(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Bn.clone(ks.uniforms),this.blendMaterial=new He({uniforms:this.copyUniforms,vertexShader:ks.vertexShader,fragmentShader:ks.fragmentShader,blending:fn,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Vt,this._oldClearAlpha=1,this._basic=new Ie,this._fsQuad=new yr(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),r=Math.round(e/2);this.renderTargetBright.setSize(n,r);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(n,r),this.renderTargetsVertical[s].setSize(n,r),this.separableBlurMaterials[s].uniforms.invSize.value=new mt(1/n,1/r),n=Math.round(n/2),r=Math.round(r/2)}render(t,e,n,r,s){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();let o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),s&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this._fsQuad.render(t),a=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(n),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=o}_getSeparableBlurMaterial(t){let e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new He({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new mt(.5,.5)},direction:{value:new mt(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
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
				}`})}};Hs.BlurDirectionX=new mt(1,0);Hs.BlurDirectionY=new mt(0,1);var Wo={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var ic=class extends ai{constructor(){super(),this.uniforms=Bn.clone(Wo.uniforms),this.material=new Do({name:Wo.name,uniforms:this.uniforms,vertexShader:Wo.vertexShader,fragmentShader:Wo.fragmentShader}),this._fsQuad=new yr(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},Ne.getTransfer(this._outputColorSpace)===ze&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===rl?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===sl?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===ol?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Ds?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===ll?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===cl?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===al&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var rc=class extends le{constructor(t,e={}){super(t),this.isWater=!0;let n=this,r=e.textureWidth!==void 0?e.textureWidth:512,s=e.textureHeight!==void 0?e.textureHeight:512,o=e.clipBias!==void 0?e.clipBias:0,a=e.alpha!==void 0?e.alpha:1,l=e.time!==void 0?e.time:0,c=e.waterNormals!==void 0?e.waterNormals:null,u=e.sunDirection!==void 0?e.sunDirection:new k(.70707,.70707,0),h=new Vt(e.sunColor!==void 0?e.sunColor:16777215),f=new Vt(e.waterColor!==void 0?e.waterColor:8355711),d=e.eye!==void 0?e.eye:new k(0,0,0),p=e.distortionScale!==void 0?e.distortionScale:20,x=e.side!==void 0?e.side:ni,g=e.fog!==void 0?e.fog:!1,m=new Zn,_=new k,y=new k,v=new k,w=new Fe,M=new k(0,0,-1),E=new tn,T=new k,b=new k,S=new tn,A=new Fe,I=new En,P=new wn(r,s),B={name:"MirrorShader",uniforms:Bn.merge([Dt.fog,Dt.lights,{normalSampler:{value:null},mirrorSampler:{value:null},alpha:{value:1},time:{value:0},size:{value:1},distortionScale:{value:20},textureMatrix:{value:new Fe},sunColor:{value:new Vt(8355711)},sunDirection:{value:new k(.70707,.70707,0)},eye:{value:new k},waterColor:{value:new Vt(5592405)}}]),vertexShader:`
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
				}`},z=new He({name:B.name,uniforms:Bn.clone(B.uniforms),vertexShader:B.vertexShader,fragmentShader:B.fragmentShader,lights:!0,side:x,fog:g});z.uniforms.mirrorSampler.value=P.texture,z.uniforms.textureMatrix.value=A,z.uniforms.alpha.value=a,z.uniforms.time.value=l,z.uniforms.normalSampler.value=c,z.uniforms.sunColor.value=h,z.uniforms.waterColor.value=f,z.uniforms.sunDirection.value=u,z.uniforms.distortionScale.value=p,z.uniforms.eye.value=d,n.material=z,n.onBeforeRender=function(N,G,q){if(y.setFromMatrixPosition(n.matrixWorld),v.setFromMatrixPosition(q.matrixWorld),w.extractRotation(n.matrixWorld),_.set(0,0,1),_.applyMatrix4(w),T.subVectors(y,v),T.dot(_)>0)return;T.reflect(_).negate(),T.add(y),w.extractRotation(q.matrixWorld),M.set(0,0,-1),M.applyMatrix4(w),M.add(v),b.subVectors(y,M),b.reflect(_).negate(),b.add(y),I.position.copy(T),I.up.set(0,1,0),I.up.applyMatrix4(w),I.up.reflect(_),I.lookAt(b),I.far=q.far,I.updateMatrixWorld(),I.projectionMatrix.copy(q.projectionMatrix),A.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),A.multiply(I.projectionMatrix),A.multiply(I.matrixWorldInverse),m.setFromNormalAndCoplanarPoint(_,y),m.applyMatrix4(I.matrixWorldInverse),E.set(m.normal.x,m.normal.y,m.normal.z,m.constant);let K=I.projectionMatrix;S.x=(Math.sign(E.x)+K.elements[8])/K.elements[0],S.y=(Math.sign(E.y)+K.elements[9])/K.elements[5],S.z=-1,S.w=(1+K.elements[10])/K.elements[14],E.multiplyScalar(2/E.dot(S)),K.elements[2]=E.x,K.elements[6]=E.y,K.elements[10]=E.z+1-o,K.elements[14]=E.w,d.setFromMatrixPosition(q.matrixWorld);let it=N.getRenderTarget(),_t=N.xr.enabled,Xt=N.shadowMap.autoUpdate;n.visible=!1,N.xr.enabled=!1,N.shadowMap.autoUpdate=!1,N.setRenderTarget(P),N.state.buffers.depth.setMask(!0),N.autoClear===!1&&N.clear(),N.render(G,I),n.visible=!0,N.xr.enabled=_t,N.shadowMap.autoUpdate=Xt,N.setRenderTarget(it);let It=q.viewport;It!==void 0&&N.state.viewport(It)}}};function Yf(i,t=!1){let e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),r=new Set(Object.keys(i[0].morphAttributes)),s={},o={},a=i[0].morphTargetsRelative,l=new Le,c=0;for(let u=0;u<i.length;++u){let h=i[u],f=0;if(e!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let d in h.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;s[d]===void 0&&(s[d]=[]),s[d].push(h.attributes[d]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let d in h.morphAttributes){if(!r.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(h.morphAttributes[d])}if(t){let d;if(e)d=h.index.count;else if(h.attributes.position!==void 0)d=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,d,u),c+=d}}if(e){let u=0,h=[];for(let f=0;f<i.length;++f){let d=i[f].index;for(let p=0;p<d.count;++p)h.push(d.getX(p)+u);u+=i[f].attributes.position.count}l.setIndex(h)}for(let u in s){let h=qf(s[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,h)}for(let u in o){let h=o[u][0].length;if(h===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let f=0;f<h;++f){let d=[];for(let x=0;x<o[u].length;++x)d.push(o[u][x][f]);let p=qf(d);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(p)}}return l}function qf(i){let t,e,n,r=-1,s=0;for(let c=0;c<i.length;++c){let u=i[c];if(t===void 0&&(t=u.array.constructor),t!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=u.itemSize),e!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(r===-1&&(r=u.gpuType),r!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=u.count*e}let o=new t(s),a=new Pe(o,e,n),l=0;for(let c=0;c<i.length;++c){let u=i[c];if(u.isInterleavedBufferAttribute){let h=l/e;for(let f=0,d=u.count;f<d;f++)for(let p=0;p<e;p++){let x=u.getComponent(f,p);a.setComponent(f+h,p,x)}}else o.set(u.array,l);l+=u.count*e}return r!==void 0&&(a.gpuType=r),a}var $e=Math.PI/180,Lt=150,Ae=(i,t=Lt,e=0)=>new k(Math.cos(i*$e)*t,e,-Math.sin(i*$e)*t);function we(i){return()=>{i|=0,i=i+1831565813|0;let t=Math.imul(i^i>>>15,1|i);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}var Jt=new Vt(1,.7,.36),At=new Vt(1,.8,.52),Kn=new Vt(.72,.84,1),ac=new Vt(1,.2,.12),li=new Vt(.3,1,.85),Oi=new Vt(1,.4,.6),lc=new k(0,1,0),Jf=[],Gh=[],oc=new Ts(new Uint8Array([255,255,255,255]),1,1);oc.needsUpdate=!0;oc.colorSpace=mn;var sc=new Ts(new Uint8Array([0,0,0,255]),1,1);sc.needsUpdate=!0;var Wh=[],$f=new Set,Qn=i=>($f.add(i),i),nr=new Map;function Mt({map:i=oc,emissiveMap:t=sc,glow:e=1.5,tint:n=16777215,side:r=ni,key:s=null,cut:o=!1}={}){let a=s||(i===oc&&t===sc?"plain"+n+r:null);if(a&&nr.has(a))return nr.get(a);let l=new He({uniforms:Bn.merge([Dt.fog,{map:{value:null},emissiveMap:{value:null},glow:{value:e},tint:{value:new Vt(n)}}]),vertexShader:`varying vec3 vC; varying vec2 vUv;
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
      }`,vertexColors:!0,fog:!0,side:o?un:r,defines:o?{CUT:""}:{}});return l.uniforms.map.value=i,l.uniforms.emissiveMap.value=t,l.userData.glow=e,t!==sc&&Wh.push(l),a&&nr.set(a,l),l}var Hh=new Map;function te(i,t,e){let n=i+","+t+","+e;return Hh.has(n)||Hh.set(n,new Ie({color:new Vt(i,t,e)})),Hh.get(n)}var gx=["position","normal","uv","ao"],ye=class{constructor(){this.bins=new Map,this.lights=[],this.sparks=[]}put(t,...e){this.bins.has(t)||this.bins.set(t,[]);let n=this.bins.get(t);for(let r of e.flat(3))n.push(r);return this}light(t,e,n,r,s,o,a=0){return this.lights.push({x:t,y:e,z:n,colour:r,power:s,reach:o}),a&&this.spark(t,e,n,r,a),this}spark(t,e,n,r,s,o=0,a=0){return this.sparks.push({x:t,y:e,z:n,colour:r,size:s,flicker:o,drift:a}),this}stamp(t,e=0,n=0,r=0,s=1,o=0){let a=new Fe().compose(new k(e,o,n),new di().setFromAxisAngle(lc,r),new k(s,s,s)),l=new k;for(let[c,u]of t.bins)this.put(c,u.map(h=>h.clone().applyMatrix4(a)));for(let c of t.lights)l.set(c.x,c.y,c.z).applyMatrix4(a),this.lights.push({...c,x:l.x,y:l.y,z:l.z,reach:c.reach*s});for(let c of t.sparks)l.set(c.x,c.y,c.z).applyMatrix4(a),this.sparks.push({...c,x:l.x,y:l.y,z:l.z,size:c.size*s});return this}build(){for(let n of this.lights)Jf.push({x:n.x,y:n.y,z:n.z,r:n.colour.r*n.power,g:n.colour.g*n.power,b:n.colour.b*n.power,reach2:n.reach*n.reach,far:n.reach*6});Gh.push(...this.sparks);let t=n=>{let r=n.index?n.toNonIndexed():n;r.attributes.ao||r.setAttribute("ao",new Pe(new Float32Array(r.attributes.position.count).fill(1),1));for(let s in r.attributes)gx.includes(s)||r.deleteAttribute(s);return r},e=new Rn;for(let[n,r]of this.bins)if(r.length){let s=new le(Yf(r.map(t),!1),n);$f.has(n)&&s.layers.set(1),e.add(s)}return e}};function cc(i){let e=new Map,n=(u,h)=>u*4096+h;for(let u of Jf)for(let h=Math.floor((u.x-u.far)/48);h<=Math.floor((u.x+u.far)/48);h++)for(let f=Math.floor((u.z-u.far)/48);f<=Math.floor((u.z+u.far)/48);f++){let d=n(h+2048,f+2048);e.has(d)||e.set(d,[]),e.get(d).push(u)}i.updateMatrixWorld(!0);let r=new k,s=new k,o=new be,a=new k(-.35,.62,.7).normalize(),l=[],c=typeof location<"u"&&location.hash.includes("day");i.traverse(u=>{if(!u.isMesh||!u.material.vertexColors||u.userData.lit)return;let h=u.geometry,f=h.attributes.position,d=h.attributes.normal,p=h.attributes.ao,x=new Float32Array(f.count*3);o.getNormalMatrix(u.matrixWorld);for(let g=0;g<f.count;g++){r.fromBufferAttribute(f,g).applyMatrix4(u.matrixWorld),s.fromBufferAttribute(d,g).applyMatrix3(o).normalize();let m=.55+.45*s.y,_=Math.max(0,s.dot(a))*.78,y=Math.abs(s.y)<.6?.5+.5*Math.min(1,Math.max(0,(r.y-1.5)/3)):s.y<-.6?.55:1,v=.45+.55*y,w=(.03*m+.05*_)*y,M=(.04*m+.062*_)*y,E=(.075*m+.1*_)*y;for(let b of e.get(n(Math.floor(r.x/48)+2048,Math.floor(r.z/48)+2048))||l){let S=b.x-r.x,A=b.y-r.y,I=b.z-r.z,P=S*S+A*A+I*I;if(P>b.far*b.far)continue;let B=Math.sqrt(P)||1,z=Math.max(0,((s.x*S+s.y*A+s.z*I)/B+.22)/1.22),N=z/(1+P/b.reach2)*v;w+=b.r*N,M+=b.g*N,E+=b.b*N}c&&(w=M=E=(.3+.7*Math.max(0,s.x*.42+s.y*.66+s.z*.62))*(.8+.2*y));let T=p?p.getX(g):1;x[g*3]=w*T,x[g*3+1]=M*T,x[g*3+2]=E*T}h.setAttribute("color",new Pe(x,3)),u.userData.lit=!0})}var zt=i=>{let t=i.attributes.uv;if(t)for(let e=0;e<t.count;e++)t.setXY(e,.004,.004);return i};function Vs(i,t,e,n,r,s,o,a=0){let l=new Ue(i,t,e,Math.max(1,Math.round(i/5)),Math.max(1,Math.round(t/3)),Math.max(1,Math.round(e/6))),c=l.attributes.uv,u=l.attributes.normal,h=l.attributes.position;for(let f=0;f<c.count;f++){if(Math.abs(u.getY(f))>.5||!o){c.setXY(f,.004,.004);continue}let d=Math.abs(u.getX(f))>.5?h.getZ(f)+e/2+(o.same?0:7):h.getX(f)+i/2;c.setXY(f,d/o.u+a,(h.getY(f)+t/2+(o.y0||0))/o.v)}return l.translate(n,r+t/2,s)}var Ri=(i,t,e,n,r,s)=>Vs(i,t,e,n,r,s,null),V=(i,t,e,n,r,s)=>zt(new Ue(i,t,e)).translate(n,r+t/2,s);function ie(i,t,e,n,r,s=8,o=null,a=i){let l=new Ce(a,i,t,s,Math.max(1,Math.round(t/4))),c=l.attributes.uv,u=l.attributes.normal;for(let h=0;h<c.count;h++)!o||Math.abs(u.getY(h))>.9?c.setXY(h,.004,.004):c.setXY(h,c.getX(h)*2*Math.PI*i/o.u,(c.getY(h)*t+(o.y0||0))/o.v);return l.rotateY(Math.PI/s).translate(e,n+t/2,r)}var de=(i,t,e,n,r=10)=>zt(new hn(i,r,Math.max(6,r-2))).translate(t,e,n),Wn=(i,t,e,n,r,s=8)=>zt(new Nn(i,t,s)).rotateY(Math.PI/s).translate(e,n+t/2,r);function ce(i,t,e=.08,n=5){let r=new k(...i),s=new k(...t),o=s.clone().sub(r);return zt(new Ce(e,e,o.length(),n)).applyQuaternion(new di().setFromUnitVectors(lc,o.clone().normalize())).translate((r.x+s.x)/2,(r.y+s.y)/2,(r.z+s.z)/2)}function yn(i,t,e,n,r,{seg:s=20,swell:o=.1,finial:a=.32,wrap:l=0}={}){let c=[];for(let f=0;f<=18;f++){let d=f/18;c.push(new mt(Math.max(.001,i*Math.sqrt(1-Math.pow(d,1.75))*(.93+o*2.6*Math.sin(Math.PI*Math.min(1,d*1.5))*(1-d))),t*d))}let u=new si(c,s);if(l){let f=u.attributes.uv;for(let d=0;d<f.count;d++)f.setXY(d,f.getX(d)*l,.03+f.getY(d)*.94)}else zt(u);let h=[u.translate(e,n,r)];if(a){let f=t*a;h.push(zt(new Ce(.02*i,.09*i,f,6)).translate(e,n+t+f/2-.05,r),de(.11*i,e,n+t+f*.25,r,8),de(.07*i,e,n+t+f*.62,r,6))}return h}var Xn=(i,t,e,n=0,r=360,s=96)=>zt(new Vr(i,t,Math.max(3,Math.round(s*r/360)),2,n*$e,r*$e)).rotateX(-Math.PI/2).translate(0,e,0);function Xh(i,t,e,n=0,r=360,s=96){let o=zt(new Ce(i,i,e,Math.max(3,Math.round(s*r/360)),1,!0,(n+90)*$e,r*$e)).translate(0,t+e/2,0),a=o.attributes.normal.array;for(let l=0;l<a.length;l++)a[l]=-a[l];return o}var Mr=(i,t=!0,e=8)=>{let n=new mi(i);return t&&(n.wrapS=n.wrapT=Ei),n.colorSpace=mn,n.anisotropy=e,n};function hc({cols:i=8,rows:t=8,lit:e=.16,seed:n=1,wall:r=[84,90,110]}){let a=we(n),l=document.createElement("canvas"),c=document.createElement("canvas");l.width=c.width=i*32,l.height=c.height=t*32;let u=l.getContext("2d"),h=c.getContext("2d");h.fillStyle="#000",h.fillRect(0,0,c.width,c.height);let f=d=>"rgb("+r.map(p=>p*d|0).join(",")+")";u.fillStyle=f(1),u.fillRect(0,0,l.width,l.height);for(let d=0;d<900;d++)u.fillStyle=f(.86+a()*.26),u.fillRect(a()*l.width,a()*l.height,3+a()*8,1+a()*3);for(let d=0;d<t;d++){u.fillStyle=f(.7),u.fillRect(0,d*32,l.width,2);for(let p=0;p<i;p++){if(p+d===0)continue;let x=p*32+8,g=d*32+8;u.fillStyle=f(.36),u.fillRect(x,g,16,17),u.fillStyle=f(1.2),u.fillRect(x-1,g+17,18,2),a()<.3&&(u.fillStyle=f(.75),u.fillRect(x-3,g+19,22,3)),a()<e&&(h.fillStyle=a()<.78?["#ffcf80","#ffb45c","#ffe0a6"][a()*3|0]:"#9fd0ff",h.globalAlpha=.35+a()*.65,h.fillRect(x+1,g+1,14,15),h.globalAlpha=1,a()<.5&&(h.fillStyle="#000",h.fillRect(x+7,g+1,1,15)))}}return{map:Mr(l,!0,4),emissiveMap:Mr(c,!0,4)}}function ci(i=128,t=0,e=1){let n=document.createElement("canvas");n.width=n.height=i;let r=n.getContext("2d"),s=r.createRadialGradient(i/2,i/2,i*t,i/2,i/2,i/2);return s.addColorStop(0,"rgba(255,255,255,1)"),s.addColorStop(.25*e,"rgba(255,255,255,.42)"),s.addColorStop(Math.min(.99,.6*e),"rgba(255,255,255,.1)"),s.addColorStop(1,"rgba(255,255,255,0)"),r.fillStyle=s,r.fillRect(0,0,i,i),Mr(n,!1,1)}function Gs(i,t,e=8,n=!0){let r=document.createElement("canvas");r.width=r.height=64;let s=r.getContext("2d");for(let o=0;o<e;o++)s.fillStyle=o%2?i:t,n?s.fillRect(o*64/e,0,64/e+1,64):s.fillRect(0,o*64/e,64,64/e+1);return Mr(r)}function Kf(i,{w:t=1024,h:e=320,ground:n="#0d1326",edge:r="#f2c66a"}={}){let s=document.createElement("canvas");s.width=t,s.height=e;let o=s.getContext("2d");o.fillStyle=n,o.fillRect(0,0,t,e),r&&(o.strokeStyle=r,o.lineWidth=6,o.strokeRect(9,9,t-18,e-18));for(let{text:a,y:l,size:c,colour:u,font:h="Geist, Arial, sans-serif",weight:f=600,fit:d=t-108}of i){let p=c;do o.font=f+" "+p+"px "+h,p-=4;while(o.measureText(a).width>d&&p>24);o.fillStyle=u,o.textBaseline="middle",o.fillText(a,54,l)}return Mr(s,!1)}function br(i,t,e=null,n=520){let r="leaf"+t;if(nr.has(r))return nr.get(r);let s=document.createElement("canvas");s.width=s.height=128;let o=s.getContext("2d"),a=we(t.length*31+i[1]),l=c=>"rgb("+i.map(u=>Math.max(0,Math.min(255,u*c))|0).join(",")+")";o.fillStyle=l(.62),o.fillRect(0,0,128,128);for(let c=0;c<1500;c++){let u=a()*128,h=a()*128,f=a();o.fillStyle=f<.16?l(.3):l(.75+a()*.95),o.beginPath(),o.ellipse(u,h,1.5+a()*3,.8+a()*1.4,a()*3.14,0,6.3),o.fill()}if(e)for(let c=0;c<n;c++)o.fillStyle=e[a()*e.length|0],o.beginPath(),o.arc(a()*128,a()*128,1+a()*2.2,0,6.3),o.fill();return Mt({map:Mr(s,!0,2),key:r})}function ir(i,t,e,n,r=0,s=.8,o=2.4){let a=new Ps(1,1),l=a.attributes.position,c=a.attributes.uv;for(let u=0;u<l.count;u++){let h=l.getX(u),f=l.getY(u),d=l.getZ(u),p=1+.2*Math.sin(h*3.1+r)*Math.sin(f*2.7+r*1.7)+.15*Math.sin(d*4.3+r*2.3+h*2);l.setXYZ(u,h*p*i,(f<0?f*.62:f)*p*i*s,d*p*i),c.setXY(u,c.getX(u)*o*2,c.getY(u)*o)}return a.translate(t,e,n)}var Zf=null,an=()=>Zf||(Zf=Qn(new Ie({color:0,map:ci(64,.05,1.45),transparent:!0,opacity:.62,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}))),Ye=(i,t,e,n,r)=>new xn(i*2,t*2).rotateX(-Math.PI/2).translate(e,n+.07,r);function zi(i,t,e=null,n=0){let r="spray"+t;if(nr.has(r))return nr.get(r);let s=document.createElement("canvas");s.width=s.height=256;let o=s.getContext("2d"),a=we(t.length*17+i[0]),l=c=>"rgb("+i.map(u=>Math.max(0,Math.min(255,u*c))|0).join(",")+")";for(let c=0;c<4;c++){let u=c%2*128+64,h=(c/2|0)*128+64;for(let f=0;f<150;f++){let d=a()*6.283,p=Math.pow(a(),.6)*50;o.fillStyle=a()<.2?l(.4):l(.68+a()*.95),o.beginPath(),o.ellipse(u+Math.cos(d)*p,h+Math.sin(d)*p*.88,5+a()*6,2.2+a()*2.6,a()*3.14,0,6.3),o.fill()}if(e)for(let f=0;f<n;f++){let d=a()*6.283,p=Math.pow(a(),.6)*50;o.fillStyle=e[a()*e.length|0],o.beginPath(),o.arc(u+Math.cos(d)*p,h+Math.sin(d)*p*.88,2.4+a()*3.6,0,6.3),o.fill()}}return Mt({map:Mr(s,!1,4),key:r,cut:!0})}function Qf(){if(nr.has("frond"))return nr.get("frond");let i=document.createElement("canvas");i.width=256,i.height=64;let t=i.getContext("2d");t.lineCap="round";for(let e=6;e<250;e+=5){let n=28*(1-Math.pow(e/256,1.6))+3,r=.75+e*7%5*.09;t.strokeStyle="rgb("+[44*r,104*r,62*r].map(s=>s|0).join(",")+")",t.lineWidth=3.4;for(let s of[-1,1])t.beginPath(),t.moveTo(e,32),t.lineTo(e+12,32+s*n),t.stroke()}return t.strokeStyle="rgb(70,120,70)",t.lineWidth=2.5,t.beginPath(),t.moveTo(0,32),t.lineTo(254,32),t.stroke(),Mt({map:Mr(i,!1,4),key:"frond",cut:!0})}function uc(i,t,e,n=0,r=1){let s=new k(...i),o=new k(...t),a=new k().subVectors(o,s).cross(lc).normalize().multiplyScalar(e/2),l=new Le,c=[s.clone().sub(a),s.clone().add(a),o.clone().add(a),o.clone().sub(a)],u=[],h=[0,1,2,0,2,3],f=[[n,0],[n,1],[r,1],[r,0]],d=[],p=[];for(let x of h)u.push(c[x].x,c[x].y,c[x].z),d.push(...f[x]),p.push(0,1,0);return l.setAttribute("position",new ae(u,3)),l.setAttribute("normal",new ae(p,3)),l.setAttribute("uv",new ae(d,2)),l}function Xo(i,t,e,n,r,s,o,a,l=2.8){let c=we(a*13+5),u=[],h=[],f=[],d=new k,p=new k,x=new k,g=new k,m=new k;for(let y=0;y<o;y++){let v=c()*2-1,w=c()*6.283,M=Math.sqrt(1-v*v),E=.5+c()*.55,T=v<-.25?v*.45:v,b=l*(.72+c()*.6)/2,S=c()*4|0,A=S%2*.5,I=(S/2|0)*.5;g.set(i+Math.cos(w)*M*n*E,t+T*r*E,e+Math.sin(w)*M*s*E),d.set(Math.cos(w)*M+(c()-.5)*1.1,T+(c()-.5)*1.1,Math.sin(w)*M+(c()-.5)*1.1).normalize(),p.crossVectors(d,Math.abs(d.y)>.9?new k(1,0,0):lc).normalize(),x.crossVectors(p,d);let P=Math.cos(w)*M,B=T+.3,z=Math.sin(w)*M,N=Math.hypot(P,B,z)||1;for(let[G,q]of[[-1,-1],[1,-1],[1,1],[-1,-1],[1,1],[-1,1]])m.copy(g).addScaledVector(p,G*b).addScaledVector(x,q*b),u.push(m.x,m.y,m.z),h.push(P/N,B/N,z/N),f.push(A+(G+1)*.25,I+(q+1)*.25)}let _=new Le;return _.setAttribute("position",new ae(u,3)),_.setAttribute("normal",new ae(h,3)),_.setAttribute("uv",new ae(f,2)),_}var Vh=new Map,fc=(i=1,t=.76,e=.46)=>{let n=i+","+t+","+e;return Vh.has(n)||Vh.set(n,Qn(new Ie({color:new Vt(i,t,e),map:ci(64,.02,1.1),transparent:!0,opacity:.34,depthWrite:!1,blending:fn,polygonOffset:!0,polygonOffsetFactor:-3,polygonOffsetUnits:-3}))),Vh.get(n)};function jf(i,t=16,e=.1){let n=new si(i,t*2),r=n.attributes.position,s=i.length;for(let a=0;a<r.count;a++)(a/s|0)%2&&(r.setX(a,r.getX(a)*(1-e)),r.setZ(a,r.getZ(a)*(1-e)));let o=n.toNonIndexed();return o.computeVertexNormals(),zt(o)}var On=(i,t)=>new mt(i,t),xx=new k(0,1,0),Ws=(i,t=i)=>{let e=document.createElement("canvas");return e.width=i,e.height=t,[e,e.getContext("2d")]},Xs=(i,t=!0)=>{let e=new mi(i);return t&&(e.wrapS=e.wrapT=Ei),e.colorSpace=mn,e.anisotropy=8,e},hi=(i,t=1)=>"rgb("+i.map(e=>Math.max(0,Math.min(255,e*t))|0).join(",")+")",qn=new Map,Sr=(i,t)=>(i.setAttribute("ao",new Pe(new Float32Array(i.attributes.position.count).fill(t),1)),i),Mn=i=>Qn(Mt({tint:i,key:"fine"+i}));function In(i,{stone:t=[214,192,154],course:e=.42,block:n=.96,rows:r=8,cols:s=4,joint:o=.7,vary:a=.1,bands:l=null,grime:c=.2}={}){let u="masonry-"+i;if(qn.has(u))return qn.get(u);let h=512,[f,d]=Ws(h),p=we(i.length*97+t[0]*3+r),x=h/r,g=h/s,m=Math.max(1,Math.round(x*.055));for(let y=0;y<r;y++){let v=l&&l[y]||t,w=y%2*g/2;for(let M=0;M<s;M++){let E=1-a/2+p()*a;d.fillStyle=hi(v,E);for(let T of[M*g+w,M*g+w-h])d.fillRect(T,y*x,g+1,x+1)}}for(let y=0;y<5200;y++)d.fillStyle=p()<.5?"rgba(0,0,0,.045)":"rgba(255,250,235,.05)",d.fillRect(p()*h,p()*h,1+p()*4,1+p()*2);for(let y=0;y<24;y++){let v=p()*(h-20),w=3+p()*14,M=d.createLinearGradient(v,0,v+w,0),E=(c*(.2+p()*.5)).toFixed(3);M.addColorStop(0,"rgba(40,30,20,0)"),M.addColorStop(.5,"rgba(40,30,20,"+E+")"),M.addColorStop(1,"rgba(40,30,20,0)"),d.fillStyle=M,d.fillRect(v,0,w,h)}for(let y=0;y<r;y++){let v=y%2*g/2,w=l&&l[y]||t;d.fillStyle=hi(w,o),d.fillRect(0,y*x,h,m),o<1&&(d.fillStyle="rgba(255,255,255,.1)",d.fillRect(0,y*x+m,h,1)),d.fillStyle=hi(w,(1+o)/2);for(let M=0;M<s;M++)d.fillRect((M*g+v)%h,y*x+m,Math.max(1,m-1),x-m)}let _=Mt({map:Xs(f),key:u});return _.userData.tile={u:s*n,v:r*e},qn.set(u,_),_}function dc(i,t=[156,84,60]){let e="tiles-"+i;if(qn.has(e))return qn.get(e);let n=256,[r,s]=Ws(n),o=we(i.length*53+t[0]),a=8,l=12,c=n/a,u=n/l;for(let f=0;f<a;f++)for(let d=0;d<l;d++){let p=d*u,x=f*c,g=s.createLinearGradient(p,0,p+u,0),m=.86+o()*.28;g.addColorStop(0,hi(t,.55*m)),g.addColorStop(.5,hi(t,1.12*m)),g.addColorStop(1,hi(t,.55*m)),s.fillStyle=g,s.fillRect(p,x,u+1,c),s.fillStyle="rgba(0,0,0,.42)",s.fillRect(p,x,u+1,3),s.fillStyle="rgba(255,230,200,.16)",s.fillRect(p,x+3,u+1,2)}let h=Mt({map:Xs(r),key:e});return h.userData.tile={u:l*.34,v:a*.46},qn.set(e,h),h}function Hi(){if(qn.has("glazing"))return qn.get("glazing");let i=96,t=144,[e,n]=Ws(i*4,t*2),[r,s]=Ws(i*4,t*2);s.fillStyle="#000",s.fillRect(0,0,r.width,r.height);for(let a=0;a<2;a++)for(let l=0;l<4;l++){let c=l*i,u=a*t,h=n.createLinearGradient(0,u,0,u+t);if(h.addColorStop(0,"#39445f"),h.addColorStop(1,"#161c2c"),n.fillStyle=h,n.fillRect(c,u,i,t),a){let p=[["#ffd68a","#a8641f"],["#ffc46a","#8a4a16"],["#ffe4b0","#b07a34"],["#f6b25a","#6a3610"]][l],x=s.createLinearGradient(0,u,0,u+t);x.addColorStop(0,p[0]),x.addColorStop(1,p[1]),s.fillStyle=x,s.fillRect(c,u,i,t),s.fillStyle="rgba(0,0,0,.4)",l%2?s.fillRect(c,u,i*.24,t):s.fillRect(c,u+t*.72,i,t*.28),n.fillStyle="#3a2c1c",n.fillRect(c,u,i,t)}else if(l===3){n.fillStyle="#4a3a2a",n.fillRect(c,u,i,t),n.fillStyle="#2c2218";for(let p=6;p<t;p+=7)n.fillRect(c+6,u+p,i-12,3)}let[f,d]=[[2,3],[3,4],[2,4],[2,2]][l];for(let[p,x]of[[n,"#6a5238"],[s,"#000"]]){p.fillStyle=x,p.fillRect(c,u,i,5),p.fillRect(c,u+t-5,i,5),p.fillRect(c,u,5,t),p.fillRect(c+i-5,u,5,t);for(let g=1;g<f;g++)p.fillRect(c+g*i/f-2,u,4,t);for(let g=1;g<d;g++)p.fillRect(c,u+g*t/d-1.5,i,3)}}let o=Mt({map:Xs(e,!1),emissiveMap:Xs(r,!1),glow:1.25,key:"glazing"});return qn.set("glazing",o),o}function Er(i="door",t=[128,72,40]){let e="timber-"+i;if(qn.has(e))return qn.get(e);let[n,r]=Ws(128,256),s=we(i.length*7+t[0]);r.fillStyle=hi(t,.8),r.fillRect(0,0,128,256);for(let a=0;a<260;a++)r.fillStyle=hi(t,.66+s()*.4),r.fillRect(s()*128,s()*256,1+s()*2,6+s()*26);for(let a=0;a<2;a++)for(let l=0;l<5;l++)for(let c=0;c<2;c++){let u=a*64+5+c*28,h=6+l*50;r.fillStyle=hi(t,.5),r.fillRect(u,h,26,44),r.fillStyle=hi(t,1.12),r.fillRect(u+2,h+2,22,40),r.fillStyle=hi(t,.86),r.fillRect(u+5,h+5,16,34),r.fillStyle="#d8b060",r.beginPath(),r.arc(u+13,h+22,2.4,0,7),r.fill()}r.fillStyle=hi(t,.36),r.fillRect(62,0,4,256);let o=Mt({map:Xs(n,!1),key:e});return qn.set(e,o),o}function wr(i,t=[150,92,60],e=.3,n=!1){let r="jali-"+i;if(qn.has(r))return qn.get(r);let s=128,[o,a]=Ws(s),l=s/4,c=l*e;if(a.strokeStyle=hi(t),a.lineWidth=c,a.lineCap="square",n)for(let h=-4;h<=8;h++)a.beginPath(),a.moveTo(h*l,0),a.lineTo(h*l+s,s),a.stroke(),a.beginPath(),a.moveTo(h*l,0),a.lineTo(h*l-s,s),a.stroke();else for(let h=0;h<=4;h++)a.beginPath(),a.moveTo(h*l,0),a.lineTo(h*l,s),a.stroke(),a.beginPath(),a.moveTo(0,h*l),a.lineTo(s,h*l),a.stroke();a.globalCompositeOperation="source-atop",a.fillStyle="rgba(255,255,255,.14)";for(let h=0;h<=4;h++)a.fillRect(0,h*l-c/2,s,1.5);let u=Mt({map:Xs(o),key:r,cut:!0});return qn.set(r,u),u}function An(i,t,e=0,n=0){i.index&&(i=i.toNonIndexed());let r=i.attributes.position,s=new Float32Array(r.count*2),o=new k,a=new k,l=new k,c=new k,u=new k,h=new k;for(let f=0;f<r.count;f+=3){o.fromBufferAttribute(r,f),a.fromBufferAttribute(r,f+1),l.fromBufferAttribute(r,f+2),c.subVectors(a,o).cross(h.subVectors(l,o)).normalize(),Math.abs(c.y)>.96?(u.set(1,0,0),h.set(0,0,-1)):(u.crossVectors(xx,c).normalize(),h.crossVectors(c,u));for(let[d,p]of[[f,o],[f+1,a],[f+2,l]])s[d*2]=(p.dot(u)+e)/t.u,s[d*2+1]=(p.dot(h)+n)/t.v}return i.setAttribute("uv",new Pe(s,2)),i}function td(i,t){let e=i.attributes.position,n=i.attributes.normal,r=i.attributes.uv,s=[],o=[],a=[];for(let c=0;c<e.count;c+=3)if(t(c,e,n))for(let u=c;u<c+3;u++)s.push(e.getX(u),e.getY(u),e.getZ(u)),o.push(n.getX(u),n.getY(u),n.getZ(u)),a.push(r.getX(u),r.getY(u));let l=new Le;return l.setAttribute("position",new ae(s,3)),l.setAttribute("normal",new ae(o,3)),l.setAttribute("uv",new ae(a,2)),l}function ki(i,t,e,{sharp:n=.5,lobes:r=7,cusp:s=.09,seg:o=12}={}){let a=t/2,l=[],c=[];if(i==="flat")return[[-a,0],[a,0],[a,e],[-a,e]];if(i==="circle"){for(let d=0;d<o*2;d++){let p=d/(o*2)*Math.PI*2;l.push([Math.cos(p)*a,a+Math.sin(p)*a])}return l}if(i==="round")for(let d=0;d<=o;d++){let p=d/o*Math.PI;c.push([Math.cos(p)*a,Math.sin(p)*a])}else if(i==="segment"){let d=a*.42,p=(a*a+d*d)/(2*d),x=Math.asin(a/p);for(let g=0;g<=o;g++){let m=-x+g/o*2*x;c.push([-Math.sin(m)*p,Math.cos(m)*p-(p-d)])}}else{let d=n*a,p=a+d,x=Math.acos(d/p),g=i==="cusped"?r*6:o;for(let m=0;m<=g;m++){let _=m/g,y=_<=.5,v=y?_*2*x:Math.PI-(1-_)*2*x,w=i==="cusped"?s*t*(1-Math.abs(Math.sin(Math.PI*r*_))):0;c.push([(y?-d:d)+Math.cos(v)*(p-w),Math.sin(v)*(p-w)])}}let u=Math.max(...c.map(d=>d[1])),h=u>e*.94?e*.94/u:1,f=e-u*h;l.push([-a,0],[a,0]),i==="cusped"&&l.push([a,f-.001]);for(let[d,p]of c){let x=l[l.length-1];Math.hypot(x[0]-d,x[1]-f-p*h)>1e-4&&l.push([d,f+p*h])}return i==="cusped"&&l.push([-a,f-.001]),l}function _x(i,t,e,n=[],r=null,s=0){let o=new Tn([On(-i/2,0),On(i/2,0),On(i/2,t),On(-i/2,t)]);for(let p of n)o.holes.push(new Li(ki(p.kind||"round",p.w,p.h,p).map(x=>On(p.x+x[0],Math.max(.02,p.y)+x[1]))));let a=new Ti(o,{depth:e,bevelEnabled:!1,curveSegments:1}).translate(0,0,-e),l=a.index?a.toNonIndexed():a,c=td(l,(p,x,g)=>g.getZ(p)>-.9&&!(g.getY(p)<-.9&&x.getY(p)<.001)),u=c.attributes.position,h=c.attributes.normal,f=new Float32Array(u.count).fill(1),d=.001;for(let p=0;p<u.count;p+=3){if(Math.abs(h.getZ(p))>.5)continue;let x=!0;for(let g=p;g<p+3;g++)(Math.abs(u.getX(g))>i/2-d||u.getY(g)<d||u.getY(g)>t-d)&&(x=!1);if(x)for(let g=p;g<p+3;g++)f[g]=u.getZ(g)>-d?.92:.4}return c.setAttribute("ao",new Pe(f,1)),r?An(c,r,0,s):zt(c)}function qe(i,t,e,n,r,s,{uv:o="atlas",on:a=0,style:l=0,shade:c=.62,...u}={}){let h=new mr(new Tn(ki(i,t,e,u).map(p=>On(p[0],p[1])))),f=h.attributes.uv,d=h.attributes.position;for(let p=0;p<f.count;p++){let x=d.getX(p)/t+.5,g=d.getY(p)/e;o==="atlas"?f.setXY(p,(l%4+.03+.94*x)/4,(a?0:.5)+(.02+.96*g)/2):o==="whole"?f.setXY(p,x,g):o==="plain"?f.setXY(p,.004,.004):f.setXY(p,d.getX(p)/o,d.getY(p)/o)}return Sr(h,a?1:c).translate(n,r,s)}function cn(i,t,e,n,r,s,{band:o=.22,proud:a=.1,outer:l=i,...c}={}){let u=ki(i,t,e,c),h;if(i==="circle")h=new Tn(ki("circle",t+o*2,0,c).map(d=>On(d[0],d[1]-o))),h.holes.push(new Li(u.map(d=>On(d[0],d[1]))));else{let d=l==="flat"?[[-t/2-o,0],[t/2+o,0],[t/2+o,e+o],[-t/2-o,e+o]]:ki(l,t+o*2,e+o,c);h=new Tn([...d.slice(1),d[0],u[0],...u.slice(2).reverse(),u[1]].map(p=>On(p[0],p[1])))}let f=new Ti(h,{depth:a,bevelEnabled:!1,curveSegments:1});return zt(td(f.index?f.toNonIndexed():f,(d,p,x)=>x.getZ(d)>-.9)).translate(n,r,s)}var kt=(i,t,e=0,n=0)=>[[e-i/2,n+t/2],[e+i/2,n+t/2],[e+i/2,n-t/2],[e-i/2,n-t/2]],Ge=(i,t=8,e=0,n=0,r=.5)=>Array.from({length:t},(s,o)=>{let a=(o+r)/t*Math.PI*2;return[e+Math.cos(a)*i,n-Math.sin(a)*i]});function ee(i,t,e=0,{cap:n=!1,tile:r=null}={}){let s=t.length,o=[],a=[],l=[],c=(h,f)=>[t[h][0]+a[h][0]*f,t[h][1]+a[h][1]*f];for(let h=0;h<s;h++){let f=t[h],d=t[(h+1)%s],p=d[0]-f[0],x=d[1]-f[1],g=Math.hypot(p,x)||1;o.push([-x/g,p/g])}for(let h=0;h<s;h++){let f=o[(h+s-1)%s],d=o[h],p=1+f[0]*d[0]+f[1]*d[1];a.push([(f[0]+d[0])/p,(f[1]+d[1])/p])}for(let h=0;h<i.length-1;h++){let[f,d]=i[h],[p,x]=i[h+1];for(let g=0;g<s;g++){let m=(g+1)%s,_=c(g,f),y=c(m,f),v=c(g,p),w=c(m,p);l.push(_[0],e+d,_[1],y[0],e+d,y[1],w[0],e+x,w[1],_[0],e+d,_[1],w[0],e+x,w[1],v[0],e+x,v[1])}}if(n){let[h,f]=i[i.length-1],d=t.map((p,x)=>c(x,h));for(let p=1;p<s-1;p++)l.push(d[0][0],e+f,d[0][1],d[p][0],e+f,d[p][1],d[p+1][0],e+f,d[p+1][1])}let u=new Le;return u.setAttribute("position",new ae(l,3)),u.computeVertexNormals(),u.setAttribute("uv",new Pe(new Float32Array(l.length/3*2).fill(.004),2)),r?An(u,r):u}var rn=(i,t,e=1.1,n=.35,r=.12)=>ee([[0,n],[e,0],[e,r],[0,n+r]],i,t),ue=(i,t,e=.5,n=.6)=>ee([[0,0],[e*.3,0],[e*.3,n*.3],[e*.65,n*.38],[e*.65,n*.66],[e,n*.74],[e,n],[0,n]],i,t);function _i(i,t,e,n,{inset:r=0,ends:s=!0}={}){let o=t[0]-i[0],a=t[1]-i[1],l=Math.hypot(o,a),c=Math.max(1,Math.round((l-r*2)/e)),u=Math.atan2(-a,o),h=[],f=new Fe;for(let d=s?0:1;d<=(s?c:c-1);d++){let p=(r+d*(l-r*2)/c)/l;f.makeRotationY(u).setPosition(i[0]+o*p,0,i[1]+a*p),h.push(...[n(d)].flat(3).map(x=>x.applyMatrix4(f)))}return h}var Be=(i,t,e,n)=>i.flatMap((r,s)=>_i(r,i[(s+1)%i.length],t,e,n));function Ke(i=.7,t=.6,e=.18,n=0){let r=new Tn([On(0,0),On(0,-t),On(i*.3,-t*.78),On(i*.72,-t*.3),On(i,0)]);return zt(new Ti(r,{depth:e,bevelEnabled:!1})).rotateY(-Math.PI/2).translate(e/2,n,0)}function gn(i,t,e,n,r,{sides:s=8,taper:o=.84,base:a=.5,cap:l=.5}={}){let c=a*i*2,u=l*i*2;return[V(i*2.7,c*.45,i*2.7,e,n,r),ie(i*1.3,c*.55,e,n+c*.45,r,s,null,i*1.02),ie(i,t-c-u,e,n+c,r,s,null,i*o),ie(i*o,u*.6,e,n+t-u,r,s,null,i*1.42),V(i*3,u*.4,i*3,e,n+t-u*.4,r)]}function jn(i,t,e,{h:n=.95,step:r=.36,r:s=.07,rail:o=.13,base:a=.1}={}){let l=t[0]-i[0],c=t[1]-i[1],u=Math.hypot(l,c),h=Math.max(1,Math.round(u/r)),f=[],d=new Fe().makeRotationY(Math.atan2(-c,l)).setPosition(i[0],e,i[1]);for(let p=0;p<h;p++)f.push(zt(new Ce(s*.6,s,n-o-a,4,1,!0)).translate((p+.5)*u/h,a+(n-o-a)/2,0));return f.push(V(u,o,o*1.5,u/2,n-o,0),V(u,a,o*1.3,u/2,0,0)),f.map(p=>p.applyMatrix4(d))}var Kr=(i,t,e)=>i.flatMap((n,r)=>jn(n,i[(r+1)%i.length],t,e));function Ze(i,t,e,n){return zt(new si([[.5,0],[.62,.12],[.3,.3],[.2,.42],[.55,.7],[.6,.95],[.36,1.2],[.16,1.34],[.24,1.5],[.1,1.72],[.06,2.2],[.001,2.6]].map(r=>On(r[0]*i,r[1]*i)),8)).translate(t,e,n)}function ed(i,t,e,n,r,s,o=.55){return Array.from({length:t},(a,l)=>zt(new Nn(e*.42,e,4)).rotateX(o).translate(0,e*.4,i).rotateY(l/t*Math.PI*2).translate(n,r,s))}function dn(i,{seg:t=32,section:e=null,tile:n=null}={}){let r=new si(i.map(l=>On(Math.max(.001,l[0]),l[1])),t),s=r.attributes.position,o=r.attributes.uv,a=2*Math.PI*i[0][0];for(let l=0;l<s.count;l++){let c=e?e(Math.atan2(s.getX(l),s.getZ(l))):1;s.setX(l,s.getX(l)*c),s.setZ(l,s.getZ(l)*c),n?o.setXY(l,o.getX(l)*a/n.u,s.getY(l)/n.v):o.setXY(l,.004,.004)}return r.computeVertexNormals(),r}var nd=(i=4)=>t=>1/Math.pow(Math.pow(Math.abs(Math.cos(t)),i)+Math.pow(Math.abs(Math.sin(t)),i),1/i);function Ci(i,t,e,n,r,{roof:s="dome",drop:o=1,r:a=.13}={}){let l=new nn,c=e/2;l.add("trim",V(i,.24,e,n,r-.24,c),V(i*.8,o*.4,e*.72,n,r-.24-o*.4,e*.36),V(i*.56,o*.36,e*.46,n,r-.24-o*.76,e*.23),V(i*.3,o*.24,e*.24,n,r-.24-o,e*.12)),l.add("trim",V(i,.82,.1,n,r,e-.05),V(.1,.82,e,n-i/2+.05,r,c),V(.1,.82,e,n+i/2-.05,r,c),V(i+.12,.1,e+.06,n,r+.82,c+.03));for(let u of[-1,1])l.add("trim",gn(a,t-.92,n+u*(i/2-a*1.5),r+.92,e-a*1.5,{sides:6}));if(l.add("trim",V(i+.16,.24,e+.08,n,r+t,c+.04),rn(kt(i+.16,e+.08,n,c+.04),r+t+.24,.7,.3,.1)),s==="dome"&&l.add("trim",yn(Math.min(i,e*2)*.46,i*.42,n,r+t+.6,e*.42,{seg:10,finial:.5})),s==="crest"){l.add("trim",V(i*.94,.5,e*.8,n,r+t+.6,e*.42));for(let u=-2;u<=2;u++)l.add("fine",V(i*.1,.24,.12,n+u*i*.2,r+t+1.1,e*.78))}return s==="slope"&&l.add("trim",ee([[0,0],[-Math.min(i,e)*.48,.7]],kt(i,e,n,c),r+t+.6)),l}var nn=class{constructor(){this.g={}}add(t,...e){return(this.g[t]||(this.g[t]=[])).push(...e.flat(3)),this}take(t){for(let e in t.g)this.add(e,t.g[e]);return this}move(t=0,e=0,n=0,r=0){let s=new Fe().makeRotationY(r).setPosition(t,e,n);for(let o in this.g)for(let a of this.g[o])a.applyMatrix4(s);return this}into(t,e){for(let n in this.g){if(!e[n])throw new Error("nothing to make "+n+" of");t.put(e[n],this.g[n])}return t}};function en(i,t,e,n,r=[],s=0,o=null){let a=new nn().add("stone",_x(i,t,e,r,n,s).translate(0,s,0));for(let l of r){let c=l.kind||"round",u=l.depth===void 0?Math.min(e*.75,.45):l.depth,h=l.fill||"glass",f=s+Math.max(.02,l.y);h==="glass"?a.add("glass",qe(c,l.w,l.h,l.x,f,-u,{...l,on:l.on===void 0?o?o()<(l.chance===void 0?.42:l.chance):0:l.on,style:l.style===void 0?o?o()*4|0:0:l.style})):h==="door"?a.add("wood",qe(c,l.w,l.h,l.x,f,-u,{...l,uv:"whole",shade:.8})):h==="jali"?a.add("jali",qe(c,l.w,l.h,l.x,f,-u*.5,{...l,uv:l.cell||1,shade:.9})).add("dark",qe(c,l.w,l.h,l.x,f,-u,{...l,uv:"plain",shade:.5})):h!=="open"&&a.add(h,qe(c,l.w,l.h,l.x,f,-u,{...l,uv:"plain",on:h==="glow"?1:0})),l.frame&&a.add("trim",cn(c,l.w,l.h,l.x,f,0,{...l,band:l.frame,proud:l.proud===void 0?.09:l.proud,outer:l.outer||c})),l.sill&&a.add("trim",V(l.w+(l.frame||0)*2+.3,.16,.34,l.x,f-.16,.05)),l.rail&&a.add("fine",jn([l.x-l.w/2,-.14],[l.x+l.w/2,-.14],f,{h:l.rail===!0?.9:l.rail}))}return a}function sn(i,t,e,n,r,{front:s=[],back:o=[],left:a=[],right:l=[]}={},c=0,u=null){return new nn().take(en(i,e,n,r,s,c,u)).take(en(i,e,n,r,o,c,u).move(0,0,-t,Math.PI)).take(en(t,e,n,r,l,c,u).move(i/2,0,-t/2,Math.PI/2)).take(en(t,e,n,r,a,c,u).move(-i/2,0,-t/2,-Math.PI/2))}var Me=(i,t,e,n=0)=>Array.from({length:i},(r,s)=>({...e,x:n+(s-(i-1)/2)*t}));var id=[],Dn=i=>Qn(Mt(i)),qo=(i,t,e,n)=>id.push({x:i,z:t,hw:e,hd:n}),qs=(i,t,e=0)=>id.every(n=>Math.abs(i-n.x)>n.hw+e||Math.abs(t-n.z)>n.hd+e),pc=i=>{let t=(i%360+360)%360;return t>204&&t<336};function vx(){let i=new ye,t=Dn({tint:3158586});i.put(t,ie(.34,.7,0,0,0,8,null,.2),ce([0,.7,0],[0,5.6,0],.09,6),ce([-.95,5.3,0],[.95,5.3,0],.05,4),V(.2,.3,.2,0,5.6,0),Wn(.16,.5,0,5.9,0,6));for(let e of[-1,1])i.put(t,ce([e*.95,5.3,0],[e*.95,4.95,0],.03,4)),i.put(te(1.9,1.5,.9),de(.3,e*.95,4.7,0,8));return i.light(0,4.9,0,At,.95,6.2).spark(-.95,4.7,0,At,4.2).spark(.95,4.7,0,At,4.2),i.put(fc(),Ye(5.6,5.6,0,.03,0)),i.put(an(),Ye(.7,.7,0,0,0)),i}function yx(){let i=new ye,t=Dn({tint:8019008}),e=Dn({tint:3158586});i.put(t,V(2.2,.1,.6,0,.5,0),V(2.2,.5,.08,0,.72,-.3));for(let n of[-.95,.95])i.put(e,V(.08,.5,.6,n,0,0));return i}function bn(i,t="neem",e=!1,n=!1){let r=new ye,s=we(i*7+t.length),o=Dn({tint:6048314}),a=n?"f":"",l=v=>n?Qn(v):v,c=[zi([44,100,62],"a"+a),zi([58,116,70],"b"+a),zi([38,86,66],"c"+a),zi([66,108,52],"d"+a)].map(l),u=l(br([30,70,46],"in"+a)),h=(v,w,M,E,T,b,S,A)=>r.put(v,Xo(w,M,E,T,b,T,n?Math.round(S*.6):S,s()*1e4|0,A*(n?1.2:1)));if(t==="ashoka"){let v=9+s()*4;return r.put(o,ce([0,0,0],[0,v*.9,0],.16,5)),r.put(u,ir(.95,0,v*.55,0,i,3.4)),h(c[2],0,v*.56,0,1.25,v*.42,26,1.9),h(c[3],0,v*.62,0,1,v*.36,10,1.7),r.put(an(),Ye(2.2,2.2,0,0,0)),r}let f=t==="gulmohar",d=t==="amaltas",p=t==="peepal",x=(f?4.4:p?6:4.8)+s()*2.2,g=f?5.4:p?5.2:3.8,m=f?1.7:p?3.6:2.8,_=[(s()-.5)*.9,(s()-.5)*.9],y=x+m*(f?.9:.75);r.put(o,ce([0,0,0],[_[0]*.5,x*.66,_[1]*.5],p?.42:.28,6));for(let v=0;v<(n?0:4);v++){let w=v*1.571+s(),M=g*.55;r.put(o,ce([_[0]*.5,x*.66,_[1]*.5],[_[0]+Math.cos(w)*M,y-m*.25,_[1]+Math.sin(w)*M],.1,4))}if(r.put(u,ir(g*.56,_[0],y,_[1],i,m/g*.9)),h(c[i%4],_[0],y,_[1],g,m,p?44:34,2.9),h(c[(i+2)%4],_[0],y+m*.12,_[1],g*.78,m*.8,14,2.5),f&&h(l(zi([70,104,54],"flame"+a,["#ff7a30","#ff9a3c","#e8402a","#ff5a2a","#d83a22"],120)),_[0],y+m*.5,_[1],g*.95,m*.55,24,2.7),d&&h(l(zi([84,112,56],"gold"+a,["#ffe26a","#f6c33a","#ffd84a"],110)),_[0],y-m*.25,_[1],g*.96,m*.8,24,2.6),e)for(let v=0;v<9;v++){let w=v/9,M=w*12;r.spark(Math.cos(M)*.36+_[0]*.5*w,.5+w*x*.6,Math.sin(M)*.36+_[1]*.5*w,v%3?At:Jt,.9,1)}return r.put(an(),Ye(g*1.15,g*1.15,_[0],0,_[1])),r}function Qr(i){let t=new ye,e=we(i),n=Dn({tint:7297604}),r=Qf(),s=8+e()*4,o=(e()-.5)*1.6;t.put(n,ce([0,0,0],[o*.4,s*.5,0],.26,6),ce([o*.4,s*.5,0],[o,s,0],.2,6),ie(.34,.5,o,s-.2,0,6));for(let a=0;a<13;a++){let l=a/13*6.283+e()*.4,c=3.6+e()*1.5,u=.5+e()*1.3,h=Math.cos(l),f=Math.sin(l),d=[o,s,0],p=[o+h*c*.36,s+u,f*c*.36],x=[o+h*c*.72,s+u*.5,f*c*.72],g=[o+h*c,s-1.2-e()*1.4,f*c];t.put(r,uc(d,p,1.5,0,.36),uc(p,x,1.5,.36,.72),uc(x,g,1.4,.72,1))}return t.put(an(),Ye(3.4,3.4,o,0,0)),t}function jr(i){let t=we(i),e=new ye,n=Dn({tint:[8138554,3100028,12035194,3107413,9080732,11822126,5913194][t()*7|0]}),r=Dn({tint:10119756}),s=Dn({tint:2763830}),o=t()<.4;return e.put(o?n:s,o?Wn(.36,.95,0,0,0,7):[V(.16,.85,.2,-.11,0,0),V(.16,.85,.2,.11,0,0)]),e.put(n,ie(.2,.62,0,.85,0,7,null,.24),ce([-.27,1.4,0],[-.31,.86,.06],.065,4),ce([.27,1.4,0],[.31,.86,.06],.065,4)),e.put(r,de(.14,0,1.63,0,5)),e.put(an(),Ye(.6,.6,0,0,0)),e}function qh(i){let t=we(i),e=new ye,n=Dn({tint:7031860}),r=Dn({tint:11120054}),s=Dn({tint:3158586}),o=Dn({map:Gs(["#b33a2e","#1f6f6a","#c98a1e","#2e4f9a"][i%4],"#efe6d2",8),key:"awning"+i%4,side:un});e.put(n,V(2.6,.16,1.4,0,.9,0),V(2.6,.5,.06,0,.42,.7));for(let[c,u]of[[-1,.72],[1,.72],[-1,-.72],[1,-.72]])e.put(s,zt(new Ce(.34,.34,.06,10)).rotateX(Math.PI/2).translate(c,.34,u));for(let[c,u]of[[-1.25,.66],[1.25,.66],[-1.25,-.66],[1.25,-.66]])e.put(s,ce([c,1,u],[c,2.7,u],.03,4));let a=new xn(3.1,1.2);a.rotateX(-Math.PI/2+.28).translate(0,2.78,.42);let l=new xn(3.1,1.2);l.rotateX(-Math.PI/2-.28).translate(0,2.78,-.42),e.put(o,a,l);for(let c=0;c<5;c++)e.put(r,ie(.16+t()*.1,.16+t()*.2,-1+c*.5,1.06,(t()-.5)*.7,8));return e.put(r,ie(.3,.1,.9,1.06,.2,10)),e.put(te(2.2,1.7,.9),de(.11,0,2.3,.2,6)),e.light(0,2.3,.2,Jt,1.1,3.4,2.6),e.put(an(),Ye(2.3,1.5,0,0,0)),e.put(fc(1,.66,.34),Ye(3.6,3.6,0,.03,.9)),e}function Mx(){let i=new ye,t=Dn({tint:3111498}),e=Dn({tint:14856762}),n=Dn({tint:1842466});i.put(t,V(1.3,.75,2.2,0,.3,0)),i.put(e,V(1.3,.12,2.3,0,1.75,-.05),V(1.2,.7,.08,0,1.05,-1.1)),i.put(n,V(1.22,.7,1.2,0,1.05,-.45),V(.5,.5,.5,0,.5,1.2));for(let[r,s]of[[0,1.35],[-.62,-.75],[.62,-.75]])i.put(n,zt(new Ce(.26,.26,.14,10)).rotateZ(Math.PI/2).translate(r,.26,s));for(let r of[-.6,.6])i.put(n,ce([r,1.05,.2],[r,1.75,.5],.03,4));return i.put(te(2,1.8,1.3),de(.09,0,.9,1.46,6)),i.put(an(),Ye(1.3,1.8,0,0,0)),i}function bx(){let i=new ye,t=Mt({map:Gs("#8a6a4c","#73573d",10),key:"planks"}),e=Mt({tint:4866104}),n=Mt({tint:12166524}),r=new Ue(5.4,.36,21),s=r.attributes.uv,o=r.attributes.position;for(let a=0;a<s.count;a++)s.setXY(a,o.getZ(a)/3.2,o.getX(a)/5.4);i.put(t,r.translate(0,1.22,10.5));for(let a=1.5;a<=20;a+=3.7)for(let l of[-2.5,2.5])i.put(e,ie(.22,3.6,l,-1.4,a,6)),a>2&&i.put(n,ce([l,2.1,a-3.7],[l,2.1,a],.035,3));for(let a of[-2.5,2.5])i.put(e,ce([a,1.4,20.2],[a,5.2,20.2],.07,5)),i.put(te(1.9,1.45,.85),de(.3,a,5.4,20.2,8)),i.light(a,5.4,20.2,At,.85,5.6,3.6);return i.put(e,V(1,.8,1,1.4,1.4,3),V(.8,.7,.8,1.6,1.4,4.2),V(.7,.6,.7,1.5,2.2,3.1)),i.put(n,zt(new on(.45,.12,5,10)).rotateX(Math.PI/2).translate(-1.6,1.52,5)),i}function rd(i,t=[]){let e=new ye,n=we(21),r=i.map(A=>Math.sin(A*$e)<-.3?A+10:A),s=(A,I)=>Math.abs((A-I+540)%360-180),o=A=>t.every(I=>s(A,I)>4.5)&&r.every(I=>s(A,I)>3.3),a=Mt({tint:9274488}),l=Mt({tint:11774098}),c=Mt({tint:5591114,side:un}),u=Dn({tint:3158586}),h=Mt({tint:3355708}),f=Mt({tint:1848100}),d=Mt({tint:10326914,side:un});e.put(a,Xn(Lt+.6,Lt+16,1.7,0,360,240)),e.put(l,Xn(Lt-.6,Lt+.6,1.96,0,360,240),Xn(Lt+15.6,Lt+16.4,1.86,0,360,240)),e.put(c,Xh(Lt-.6,-1.2,3.2,0,360,240)),e.put(h,Xn(Lt+16.4,Lt+27,1.6,0,360,240)),e.put(l,Xn(Lt+27,Lt+28,1.78,0,360,240)),e.put(f,Xn(Lt+28,960,1.5,0,360,96));for(let A=0;A<360;A+=2){let I=Ae(A,Lt+.2);e.put(u,V(.13,1.15,.13,I.x,1.96,I.z))}for(let A of[2.55,3.05])e.put(u,zt(new on(Lt+.2,.045,4,360)).rotateX(Math.PI/2).translate(0,A,0));let p=Dn({tint:4864556});for(let A=0;A<660;A++){let I=A/660*360,P=Ae(I,Lt+14.9);e.put(p,zt(new Ue(.3,.1,1.5)).rotateY(I*$e).translate(P.x,1.74,P.z))}for(let A of[14.4,15.4])e.put(u,zt(new on(Lt+A,.05,4,360)).rotateX(Math.PI/2).translate(0,1.84,0));for(let A of[114,66,41,-27,144,180,222,318,250,292])for(let I=0;I<7;I++)e.put(d,Xn(Lt-.6-(I+1)*1.05,Lt-.6-I*1.05,1.7-(I+1)*.32,A-4.2,8.4,240),Xh(Lt-.6-(I+1)*1.05,1.7-(I+2)*.32,.32,A-4.2,8.4,240));let x=vx(),g=yx(),m=A=>Math.atan2(-Math.cos(A*$e),Math.sin(A*$e));for(let A=3;A<360;A+=7.5){let I=Ae(A,Lt+3.2);e.stamp(x,I.x,I.z,m(A)+Math.PI/2,1,1.7);let P=Ae(A+3.75,Lt+2.6);e.stamp(g,P.x,P.z,m(A+3.75),1,1.7)}for(let A=0;A<360;A+=10){let I=Ae(A,Lt+27.6),P=Ae(A,Lt+25.2);e.put(u,ce([I.x,1.7,I.z],[I.x,8.2,I.z],.1,5),ce([I.x,8.2,I.z],[P.x,8.5,P.z],.07,4)),e.put(te(1.5,1.7,1.9),de(.26,P.x,8.4,P.z,6)),e.light(P.x,8.3,P.z,Kn,.75,8.5,4.4),e.put(fc(.6,.74,1),Ye(7.5,7.5,P.x,1.63,P.z))}let _=[bn(1,"neem"),bn(2,"gulmohar"),bn(3,"neem"),bn(4,"peepal"),bn(5,"amaltas"),bn(6,"ashoka"),bn(7,"ashoka"),bn(8,"peepal")],y=[bn(1,"neem",!1,!0),bn(2,"gulmohar",!1,!0),bn(3,"neem",!1,!0),bn(4,"peepal",!1,!0),bn(5,"amaltas",!1,!0),bn(6,"ashoka",!1,!0),bn(7,"ashoka",!1,!0),bn(8,"peepal",!1,!0)],v=[bn(1,"neem",!0),bn(2,"gulmohar",!0),bn(5,"amaltas",!0)],w=[Qr(1),Qr(2),Qr(3)];for(let A=1.5;A<360;A+=5){if(pc(A)&&n()<.6||!o(A))continue;let I=Ae(A+n()*2,Lt+12.2+n()*1.2),P=n()*3|0;e.stamp(pc(A)||n()<.55?_[[0,1,4][P]]:v[P],I.x,I.z,n()*6.28,pc(A)?.62:.8+n()*.3,1.7)}for(let A=0;A<520;A++){let I=n()*360,P=Lt+32+n()*n()*300,B=Ae(I,P);pc(I)||!qs(B.x,B.z,8)||e.stamp(y[n()*8|0],B.x,B.z,n()*6.28,.9+n()*.7,1.5)}for(let A of[118,110,70,62,45,37,-23,-31,148,140,190,176]){if(!o(A))continue;let I=Ae(A,Lt+8+n()*4);e.stamp(w[n()*3|0],I.x,I.z,n()*6.28,1,1.7)}let M=[0,1,2,3,4,5].map(qh),E=Array.from({length:14},(A,I)=>jr(I+1)),T=Mx(),b=(A,I,P,B)=>{for(let z=0;z<P;z++){let N=A+(n()-.5)*B,G=Ae(N,I+(n()-.5)*5);e.stamp(E[n()*14|0],G.x,G.z,n()*6.28,.92+n()*.2,1.7)}};for(let[A,I,P]of[[212,332,9.5],[-12,34,11],[136,196,12],[50,130,13]])for(let B=A;B<=I;B+=P){let z=Ae(B+n()*2,Lt+11.5);if(e.stamp(M[n()*6|0],z.x,z.z,m(B),1.15,1.7),b(B,Lt+8.6,4+(n()*4|0),3.4),n()<.7){let N=Ae(B+3.5,Lt+18.2);e.stamp(T,N.x,N.z,m(B)+Math.PI/2,1.2,1.6)}}for(let A=0;A<360;A+=3.1)n()<.75&&b(A,Lt+5+n()*6,1+(n()*2|0),2);for(let[A,I]of[[214,330],[-10,32],[140,192]])for(let P=A;P<I;P+=7.5)for(let B=1;B<12;B++){let z=B/12,N=Ae(P+3+z*7.5,Lt+3.2),G=Math.sin(z*Math.PI)*1.1;e.spark(N.x,7.2-G,N.z,[Jt,Jt,Oi,li,At][B%5],1.05,1)}let S=bx();for(let A of i){let I=Ae(A,Lt+.6);e.stamp(S,I.x,I.z,m(A),1,0)}return e}function sd(){let i=In("palace",{stone:[186,156,114],course:.5,block:1.25,joint:.72,vary:.12}),t=i.userData.tile,e=Mt({tint:12164208}),n={stone:i,trim:e,fine:Mn(12164208),glass:Hi(),wood:Er("palace",[112,66,38]),dark:Mt({tint:1511949}),ochre:Mt({tint:12556874}),ochref:Mn(12556874),dome:Mt({tint:10719610}),roof:Mt({tint:7234130}),red:Mn(10246720)},r=te(1.9,1.35,.42),s=new ye,o=new nn,a=we(8),l=we(8),c=2.7,u=5.4,h=5.2,f=5.2,d=c+u,p=d+h,x=p+f,g={kind:"cusped",lobes:7,sharp:.38,cusp:.07},m=(D,C,H)=>Me(D,C/D,H),_={...g,w:1.6,h:3.4,y:.9,frame:.22,outer:"flat",hood:!0,chance:.5},y={kind:"round",w:1.25,h:2.9,y:1,frame:.18,sill:!0,hood:!0,chance:.55},v={kind:"pointed",w:1.1,h:2.5,y:1.1,frame:.16,chance:.45},w={kind:"flat",w:1.3,h:2.6,y:1,chance:.3},M={...g,w:1.55,h:4.4,y:.2,fill:"open"},E={...g,w:1.6,h:3.5,y:.95,fill:"open",rail:.85},T=(D,C,H)=>{for(let Y of C)if(Y.hood){let nt=Y.frame||0;D.add("fine",rn(kt(Y.w+nt*2+.4,.3,Y.x,-.15),H+Y.y+Y.h+(Y.kind==="round"||Y.outer==="flat"?nt:0)+.04,.42,.2,.07))}return D},b=(D,C,H,Y,nt,et,Z=0,bt=.6)=>o.take(T(en(C-D,nt,bt,t,et,Y,a),et,Y).move((D+C)/2,0,H,Z)),S=D=>o.add("stone",ee([[.6,1.2],[.6,c-.75],[.3,c-.45],[.3,c-.1],[0,c]],D,0,{cap:!0,tile:t})),A=(D,C,H,Y,nt,et,{L:Z=0,R:bt=0,n:St=Math.max(1,Math.round((C-D)/4.4))}={})=>{let Ht=C-D,oe=(Oe,Vi,zn)=>Oe?et.flatMap((ts,vi)=>m(Oe,Vi,{...zn[vi],y:ts+zn[vi].y})):[];b(D,C,H-Y,c,nt-c,oe(St,Ht,[w,w,w]),Math.PI);let Se=Oe=>Array.isArray(Oe)?Oe:oe(Oe,Y,[_,y,v]);o.take(en(Y,nt-c,.6,t,Se(bt),c,a).move(C,0,H-Y/2,Math.PI/2)),o.take(en(Y,nt-c,.6,t,Se(Z),c,a).move(D,0,H-Y/2,-Math.PI/2)),o.add("roof",V(Ht,.25,Y,(D+C)/2,nt-.25,H-Y/2)),S(kt(Ht,Y,(D+C)/2,H-Y/2))},I=(D,C,H,Y,nt,et,Z,bt)=>{o.take(en(D,C,H/2,t,Y,nt,a).move(et,0,Z,bt)),o.take(en(D,C,H/2,t,Y.map(St=>({...St,x:-St.x,rail:0,frame:0})),nt,a).move(et-Math.sin(bt)*H,0,Z-Math.cos(bt)*H,bt+Math.PI))},P=(D,C,H,Y,nt,et,Z=2.6)=>{let bt=C-D,St=(D+C)/2,Ht=Math.max(1,Math.round(bt/6));o.add("stone",Sr(An(new xn(bt,nt).translate(St,Y+nt/2,H-Z),t),.62)),o.add("trim",V(bt,.16,Z,St,Y-.14,H-Z/2),Sr(V(bt,.14,Z,St,Y+nt-.14,H-Z/2),.7)),m(et,bt,{}).forEach((oe,Se)=>o.add("glass",qe("round",1.15,3,St+oe.x,Y+.05,H-Z+.04,{on:a()<.75?1:0,style:Se%4})));for(let oe=0;oe<Ht;oe++)s.light(D+(oe+.5)*bt/Ht,Y+nt-.9,H-Z/2,Jt,.3,3.4)},B=(D,C,H,Y,nt=1)=>{o.add("trim",rn(kt(C-D,.4,(D+C)/2,H-.2),Y,nt,.34,.11)),o.add("fine",_i([D,H],[C,H],1.1,()=>Ke(nt*.76,.6,.16,Y+.3),{inset:.3}))},z=(D,C,H,Y,nt=.24,et=.3)=>o.add("trim",V(C-D+nt*2,et,nt*2,(D+C)/2,Y-et/2,H)),N=(D,C)=>{o.add("ochre",ee([[0,0],[0,.75],[-.3,.75],[-.3,0]],D,C)),o.add("ochref",Be(D,.85,()=>zt(new Nn(.34,.62,4)).scale(1,1,.45).translate(0,C+1.06,-.15),{inset:.45}))},G=(D,C)=>o.add("fine",Kr(D,C,{h:.9,step:.42})),q=(D,C,H,Y,nt,et=8)=>dn([[D,0],[D*1.08,C*.2],[D*.98,C*.45],[D*.7,C*.68],[D*.3,C*.86],[D*.09,C*.96],[D*.04,C*1.3]],{seg:et}).translate(H,Y,nt),K=(D,C,H,Y,nt)=>{for(let[et,Z]of[[-1,-1],[1,-1],[-1,1],[1,1]])o.add("fine",V(D*.13,C,D*.13,H+et*D*.4,Y,nt+Z*D*.4));o.add("fine",V(D,D*.1,D,H,Y+C,nt),rn(kt(D,D,H,nt),Y+C+D*.1,D*.26,D*.13,D*.05),q(D*.46,D*.6,H,Y+C+D*.23,nt))},it=(D,C,H,Y,nt)=>{for(let[et,Z]of[[-1,-1],[1,-1],[-1,1],[1,1]])o.add("fine",ie(D*.075,C,H+et*D*.4,Y,nt+Z*D*.4,6),V(D*.2,D*.07,D*.2,H+et*D*.4,Y+C-D*.07,nt+Z*D*.4));o.add("trim",V(D,D*.09,D,H,Y+C,nt),rn(kt(D,D,H,nt),Y+C+D*.09,D*.3,D*.13,D*.045),q(D*.47,D*.62,H,Y+C+D*.22,nt,12)),s.put(r,de(D*.075,H,Y+C+D*.22+D*.62*1.3,nt,6))},_t=(D,C,H,Y,nt,et=16,Z=.1,bt=.07)=>{let St=[];for(let Ht=0;Ht<=12;Ht++){let oe=Ht/12;St.push(new mt(Math.max(.001,D*Math.sqrt(1-Math.pow(oe,1.75))*(.93+Z*2.6*Math.sin(Math.PI*Math.min(1,oe*1.5))*(1-oe))),C*oe))}return jf(St,et,bt).translate(H,Y,nt)},Xt=(D,C,H,Y,nt,et=16,Z=D*.3)=>{let bt=Y+D*.3;return o.add("trim",dn([[D,0],[D*1.1,D*.12],[D*1.1,D*.2],[D*.98,D*.3]],{seg:et*2}).translate(H,Y,nt)),o.add("fine",ed(D*.98,Math.min(et,24),D*.24,H,Y+D*.26,nt)),o.add("dome",_t(D,C,H,bt,nt,et,.1,et>20?.045:.06),dn([[D*.2,0],[D*.27,D*.05],[D*.1,D*.14]],{seg:10}).translate(H,bt+C*.985,nt)),s.put(r,Ze(Z,H,bt+C+D*.1,nt)),bt+C+D*.1+Z*2.6},It=(D,C,H,Y,nt,et=null,Z=.5)=>{let bt=2*H*Math.tan(Math.PI/8);for(let St=0;St<8;St++){let Ht=St*Math.PI/4;o.take(en(bt,nt,Z,t,et?et(St,bt):[],Y,a).move(D+Math.sin(Ht)*H,0,C+Math.cos(Ht)*H,Ht))}},Ot=(D,C,H,Y,nt)=>o.add("stone",ee([[0,0],[0,nt]],Ge(H,8,D,C),Y,{tile:t})),_e=(D,C,H,Y,nt)=>{Ot(D,C,H,Y,nt-Y);for(let et of[Y+(nt-Y)*.36,Y+(nt-Y)*.7,nt-.2])o.add("trim",ue(Ge(H,8,D,C),et,.26,.36));for(let et=0;et<8;et++){let Z=(et+.5)*Math.PI/4;o.add("fine",V(.17,1.9,.17,D+Math.cos(Z)*H*.84,nt+.16,C+Math.sin(Z)*H*.84))}o.add("dark",ie(H*.5,1.9,D,nt+.16,C,6)),o.add("trim",rn(Ge(H*.96,8,D,C),nt+2.06,.45,.2,.08),q(H*.98,H*1.2,D,nt+2.3,C,10)),s.put(r,de(.2,D,nt+2.3+H*1.56,C,6))},pt=(D,C,H,Y,nt=9)=>{let et=[];for(let Ht=0;Ht<=7;Ht++){let oe=Ht/7*Math.PI/2;et.push(new mt(Math.max(.01,Math.cos(oe)*D),Math.sin(oe)*D))}let Z=new si(et,nt*2,Math.PI/2,Math.PI),bt=Z.attributes.position;for(let Ht=0;Ht<bt.count;Ht++)(Ht/8|0)%2&&(bt.setX(Ht,bt.getX(Ht)*.94),bt.setZ(Ht,bt.getZ(Ht)*.94));let St=Z.toNonIndexed();return St.computeVertexNormals(),zt(St).translate(C,H,Y)},F=(D,C,H,Y,nt,et=.8)=>{let Z=(Y-nt.w)/2,bt=nt.h+Z,St=Y/2,Ht=H+bt-St,oe=g;o.add("stone",An(cn("cusped",nt.w,nt.h,D,H,C-et,{...oe,band:Z,proud:et,outer:"round"}),t)),o.add("trim",cn("round",Y,bt,D,H,C,{band:.5,proud:.34}),cn("cusped",nt.w,nt.h,D,H,C,{...oe,band:.32,proud:.2})),o.add("fine",cn("round",Y-1.7,bt-.85,D,H,C,{band:.26,proud:.14}),jn([D-nt.w/2,C-.2],[D+nt.w/2,C-.2],H,{h:.9}));for(let Se=0;Se<7;Se++){let Oe=(.14+Se*.12)*Math.PI;o.add("red",zt(new Ce(.3,.3,.12,8)).rotateX(Math.PI/2).translate(D+Math.cos(Oe)*(St-.45),Ht+Math.sin(Oe)*(St-.45),C+.06))}o.add("glass",qe("cusped",nt.w,nt.h,D,H,C-et+.12,{...oe,on:1,style:2})),o.add("dome",pt(St+.75,D,Ht,C-et+.02)),o.add("trim",V(Y+1.7,.3,St+1,D,Ht-.3,C-et-(St+1)/2+.1));for(let Se=1;Se<12;Se++){let Oe=Se/12*Math.PI;o.add("fine",zt(new Nn(.12,1.1,4)).translate(D+Math.cos(Oe)*(St+.8),Ht+Math.sin(Oe)*(St+.8)+.5,C-et-.2))}return s.put(r,Ze(.36,D,Ht+St+.75,C-et-.3)),Ht};{let H=[{...g,x:0,y:.1,w:4.4,h:6.2,fill:"open"}],Y=kt(8,6,-71,0);I(8,7.8,.8,H,1.2,-71,3,0),I(8,7.8,.8,H,1.2,-71,-3,Math.PI);for(let nt of[-1,1])o.add("stone",An(V(.8,7.8,6,-71+nt*3.6,1.2,0),t));o.add("trim",Sr(V(8,.4,6,-71,9,0),.8),ue(Y,8.9,.35,.5),ie(2.6,.6,-71,9.4,0,12)),N(Y,9.4),Xt(2.3,2.9,-71,10,0,12,.5);for(let nt of[-1,1])_e(-71+nt*4.3,3+.3,.75,1.2,9.6);o.add("roof",V(4.6,.08,14,-71,1.2,0)),s.light(-71,6,0,Jt,.4,5)}A(-67,-29.5,0,24,p,[0,u],{L:5});for(let[D,C,H]of[[-67,-61.7,2],[-54.3,-51,1],[-41,-36.7,1]])b(D,C,0,c,u,m(H,C-D,_)),b(D,C,0,d,h,m(H,C-D,{...y,rail:.8}));z(-67,-29.5,0,d);{let D=kt(37.5,24,-48.25,-12);o.add("trim",ue(D,p-.5,.36,.5)),o.add("fine",_i([-67,0],[-29.5,0],1.1,()=>Ke(.42,.5,.16,p-.5),{inset:.3})),N(D,p)}for(let D of[-64.3,-52.6,-38.9])K(1.5,2,D,p,-1.4);let W=(D,C,H,Y,nt,et)=>{let Z=H-C/2,bt=kt(C,C,D,Z),St=m(et?3:2,C-1.6,{kind:"pointed",w:1.15,h:2.7,y:p+1.9-c,frame:.15,rail:.8,chance:.75});o.take(sn(C,C,Y-c,.6,t,{left:St,right:St,back:St,front:[et?{...g,x:0,y:.05,w:2.6,h:4.3,fill:"door",frame:.3,outer:"flat"}:{..._,x:0,w:2,h:3.7},{...g,x:0,y:u+1.1,w:et?3:2.2,h:3.5,frame:.45,outer:"flat",proud:.14,rail:.85,chance:.95},...St]},c,a).move(D,0,H)),S(bt);for(let Se of[d,p])o.add("trim",ue(bt,Se-.2,.22,.34));o.add("trim",ue(bt,Y-.6,.4,.55),rn(bt,Y-.1,1.1,.4,.12)),o.add("fine",Be(bt,1.15,()=>Ke(.82,.6,.16,Y+.22),{inset:.4})),o.add("roof",V(C,.3,C,D,Y+.15,Z)),G(kt(C-.3,C-.3,D,Z),Y+.45);for(let Se of[-1,1])for(let Oe of[-1,1])K(et?1.7:1.35,et?1.9:1.6,D+Se*(C/2-.95),Y+.45,Z+Oe*(C/2-.95));let Ht=nt*.92,oe=nt*.78;return It(D,Z,Ht,Y+.45,oe,(Se,Oe)=>[{kind:"pointed",x:0,y:.35,w:Oe*.42,h:oe*.6,chance:.6,depth:.4}]),o.add("trim",ue(Ge(Ht/Math.cos(Math.PI/8),8,D,Z),Y+.45+oe,.3,.4)),Xt(nt,nt*(et?1.3:1.42),D,Y+.85+oe,Z,et?20:16,nt*(et?.3:.34))};W(-58,7.4,1.6,19.8,3.2,!1),W(-46,10,2.2,20.4,4.5,!0),W(-33,7.4,1.6,19.8,3.2,!1),o.take(Ci(4.2,4.1,1.2,-46,d+.95,{roof:"dome"}).move(0,0,2.2));for(let D=0;D<3;D++)o.add("trim",V(4.6-D*.4,c-1.2-D*.5,.5,-46,1.2,2.8+(D+.5)*.5));A(-29.5,-4.5,0,22,x,[0,u,u+h],{L:m(4,19,{...v,y:u+h+1.1})}),b(-29.3,-23.8,0,c,u,m(2,5.5,_)),b(-29.3,-23.8,0,d,h,m(2,5.5,{...y,rail:.8})),b(-29.3,-23.8,0,p,f,m(2,5.5,v)),z(-29.3,-23.8,0,d),z(-29.3,-23.8,0,p),B(-29.3,-23.8,0,x-.45);let j=(D,C,H,Y)=>{let nt=C-D;b(D,C,H,c,u,m(Y,nt,M)),b(D,C,H,d,h,m(Y,nt,{...y,w:1.15,frame:.3,outer:"flat",sill:!1})),b(D,C,H,p,f,m(Y,nt,E)),P(D,C,H,c,u,Y),P(D,C,H,p,f,Y);for(let et=0;et<=Y;et++){let Z=D+et*nt/Y;o.add("trim",V(.36,x-c,.24,Z,c,H+.1)),o.add("fine",gn(.15,3.2,Z,c,H+.36,{sides:6}),gn(.14,2.7,Z,p+.95,H+.34,{sides:6}),V(.5,.95,.3,Z,p,H+.3))}for(let et=0;et<2;et++)o.add("trim",V(nt-.6,(c-1.2)*(2-et)/3,.5,(D+C)/2,1.2,H+.85+et*.5));z(D,C,H,d),B(D,C,H,p-.42,.8),B(D,C,H,x-.45,1.1)};j(-15.2,-4.5,0,5),N(kt(25,22,-17,-11),x);for(let D of[-27.5,-11.5,-6.5])K(1.5,2,D,x,-1.4);let ot=-19.5,vt=-2.5,Gt={kind:"round",x:0,w:1,h:2.3,frame:.16,sill:!0,chance:.5},O=(D,C,H,Y,nt=Y)=>{o.take(sn(D,D,H-C,.7,t,{front:nt,back:Y,left:Y,right:Y},C,a).move(ot,0,vt+D/2));for(let et of[-1,1])for(let Z of[-1,1])o.add("trim",V(.7,H-C,.7,ot+et*(D/2-.12),C,vt+Z*(D/2-.12)))},ft=(D,C)=>{let H=kt(D,D,ot,vt);o.add("trim",ue(H,C-.95,.4,.55),V(D+2.3,.3,D+2.3,ot,C,vt)),o.add("fine",Be(H,.95,()=>Ke(1,.8,.2,C),{inset:.3}),Kr(kt(D+2,D+2,ot,vt),C+.3,{h:.95,step:.4}))},dt=(D,C)=>{for(let H=0;H<4;H++)o.take(C().move(ot+Math.sin(H*Math.PI/2)*D/2,0,vt+Math.cos(H*Math.PI/2)*D/2,H*Math.PI/2))};O(8.6,1.2,28,[{...Gt,y:19.6},{...Gt,y:23.2}],[{...g,x:0,y:c-1.15,w:2.4,h:4.4,fill:"door",frame:.3,outer:"flat"},{...y,x:0,y:d-.2,w:1.6,h:3.2,rail:.8},{...y,x:0,y:p-.2,w:1.6,h:3.2,rail:.8},{...Gt,y:19.6},{...Gt,y:23.2}]),S(kt(8.6,8.6,ot,vt));for(let D=0;D<3;D++)o.add("trim",V(4-D*.4,c-1.2-D*.5,.5,ot,1.2,vt+4.9+(D+.5)*.5));for(let D of[d,p,x+.9,23.2])o.add("trim",ue(kt(8.6,8.6,ot,vt),D-.15,.2,.3));ft(8.6,28),O(7.8,28.3,36,[{kind:"round",x:0,y:1.9,w:2.5,h:4,frame:.3,on:1,style:0}]),dt(7.8,()=>new nn().add("trim",V(3.7,.22,1,0,30,.5)).add("fine",jn([-1.8,.92],[1.8,.92],30.2,{h:.9}),[-1.3,0,1.3].map(D=>Ke(.85,.7,.2,30).translate(D,0,0)))),ft(7.8,36),O(7.2,36.3,41,[{kind:"flat",x:0,y:.8,w:1.7,h:2.4,on:1,style:1}]),dt(7.2,()=>Ci(2.6,2.5,.9,0,37,{roof:"slope",drop:.8})),ft(7.2,41),O(6.6,41.3,45.4,m(3,5.4,{kind:"pointed",w:.85,h:2.2,y:.9,frame:.14,chance:.6})),ft(6.6,45.4);for(let[D,C]of[[-1,-1],[1,-1],[-1,1],[1,1]]){let H=ot+D*3.7,Y=vt+C*3.7;Ot(H,Y,.75,45.7,3.2),o.add("trim",ue(Ge(.75,8,H,Y),48.7,.25,.3),q(.85,1.3,H,49,Y,10)),s.put(r,de(.17,H,50.75,Y,6))}{let D=Ge(3.05,8,ot,vt);for(let[H,Y]of Ge(2.72,8,ot,vt))o.add("trim",gn(.3,4.3,H,45.7,Y,{sides:6}));o.add("trim",ee([[0,0],[0,.9],[-.55,.9],[-.55,0]],D,50),V(5.2,.12,5.2,ot,50,vt),rn(D,50.9,.9,.3,.1),ee([[0,0],[0,.35]],D,51.2,{cap:!0}));let C=Xt(2.9,4.1,ot,51.55,vt,16,.78);o.add("fine",ce([ot,C-.2,vt],[ot,C+4,vt],.07)),s.put(te(1.6,.5,.2),V(2.6,1.5,.05,ot+1.35,C+2.3,vt))}let ut=-4.5,ct=29.5,yt=5,gt=6.2,wt=c+gt,he=wt+gt,re=he+gt,U=12.5,R=6.6,$=28.6,at=R-10.5;A(ut,ct,yt,34,re,[0,gt,gt*2],{n:8,L:[0,gt,gt*2].map(D=>({...y,x:14.5,y:D+1.4,w:1.2})),R:[0,gt,gt*2].map(D=>({...y,x:-14.5,y:D+1.4,w:1.2}))});for(let[D,C]of[[ut,6],[19,ct]]){let H=(D+C)/2;b(D,C,yt,c,gt,[{...g,x:0,y:.7,w:3,h:4.6,frame:.4,outer:"flat",proud:.14,chance:.9},...[-3,3].map(nt=>({..._,x:nt,w:1.1,h:2.8,y:1.4,frame:.16}))]),b(D,C,yt,wt,gt,[{kind:"flat",x:0,y:1.3,w:2,h:3.2,on:1,style:1},...[-3.1,3.1].map(nt=>({...y,x:nt,w:1,h:2.6,y:1.5}))]),o.take(Ci(3.6,4,1.25,H,wt+1.2,{roof:"dome"}).move(0,0,yt)),b(D,C,yt,he,gt,m(3,6.6,{...g,w:1.3,h:3.4,y:1.2,frame:.2,rail:.85,chance:.85})),z(D,C,yt,wt),z(D,C,yt,he),B(D,C,yt,re-.45,1.1);for(let nt of[-4.6,-1.9,1.9,4.6])o.add("trim",V(.4,re-c-.5,.26,H+nt,c,yt+.12));let Y=F(H,yt-.1,re+.5,8,{w:2.6,h:3.6});o.add("stone",ee([[0,0],[0,Y-re-.5]],kt(8,4.2,H,yt-3),re+.5,{tile:t,cap:!0}))}G(kt(34,34,U,yt-17),re);for(let D of[ut-.3,ct+.3])_e(D,yt+.3,1.25,1.2,23.4);{let H=re-c,Y=kt(13,21,U,at),nt=m(3,15,{kind:"pointed",w:1.3,h:3.2,y:H+1.6,frame:.2,chance:.75});o.take(sn(13,21,$-c,.7,t,{left:nt,right:nt,back:nt,front:[{...g,x:0,y:.05,w:3.2,h:4.5,fill:"door"},...[-4.3,4.3].map(St=>({..._,x:St,w:1.2,h:3,y:1,on:1})),...m(3,9.9,{...g,w:2.1,h:4.3,y:gt+1.1,frame:.3,on:1}),...m(3,9.9,{...g,w:1.5,h:3.2,y:gt*2+1.5,frame:.22,chance:.9}),{...g,lobes:9,x:0,y:H+.7,w:4.4,h:5,frame:.5,proud:.2,on:1,style:2},...[-4.6,4.6].map(St=>({kind:"pointed",x:St,y:H+1.9,w:1,h:2.6,frame:.15,chance:.8}))]},c,a).move(U,0,R));for(let St of[wt,he,re])o.add("trim",ue(Y,St-.2,.24,.36));o.add("trim",ue(Y,$-.65,.45,.6),rn(Y,$-.05,1.2,.4,.12)),o.add("fine",Be(Y,1.2,()=>Ke(.9,.65,.18,$+.28),{inset:.4})),o.add("roof",V(13,.3,21,U,$+.1,at)),G(kt(13-.3,21-.3,U,at),$+.4),o.add("trim",V(11.4,.24,1.1,U,he+1.26,R+.55)),o.add("fine",_i([U-5.4,R],[U+5.4,R],1.2,()=>Ke(.9,.7,.18,he+1.26)),jn([U-5.6,R+1.02],[U+5.6,R+1.02],he+1.5,{h:.9}));for(let St of[-1,1]){Ot(U+St*6.5,R,.6,c,$-c+.4);for(let Ht of[R-1.3,at-9.2])it(2.5,2.7,U+St*5.2,$+.4,Ht)}It(U,at,5.5,$+.4,4.4,(St,Ht)=>[{...g,x:0,y:.7,w:Ht*.42,h:3,frame:.2,on:St%2?void 0:1,chance:.5,depth:.45}],.6);for(let[St,Ht]of Ge(6.2,8,U,at))o.add("fine",V(.42,4.9,.42,St,$+.4,Ht),q(.42,.7,St,$+5.3,Ht,6));o.add("trim",ue(Ge(5.95,8,U,at),$+4.8,.5,.6)),Xt(6.2,8,U,$+5.4,at,32,1.2);let et=R+5.6,Z=5.4,bt=kt(12,5.6,U,et-2.8);I(12,Z,.7,m(3,10.2,{...g,w:2.5,h:4.3,y:.12,fill:"open"}),c,U,et,0);for(let St of[-1,1])I(5.6,Z,.7,[{...g,x:0,y:.12,w:2.8,h:4.3,fill:"open"}],c,U+St*6,et-2.8,St*Math.PI/2);S(bt),o.add("trim",Sr(V(12,.3,5.6,U,c+Z,et-2.8),.8),ue(bt,c+Z-.3,.4,.6)),G(bt,c+Z+.3);for(let St of[-1,1]){K(1.2,1.4,U+St*5.3,c+Z+.3,et-.7);for(let Ht of[1.7,5.2])o.add("fine",gn(.17,3.2,U+St*Ht,c,et+.24,{sides:6}))}for(let St=0;St<4;St++)o.add("trim",V(9.6-St*.4,c-(St+1)*.25-1.2,.45,U,1.2,et+.6+(St+.5)*.45));s.light(U,6.4,et-2.8,Jt,.45,5)}A(ct,42,0,22,x,[0,u,u+h]),j(ct,42,0,5),N(kt(12.5,22,35.75,-11),x),K(1.5,2,35.75,x,-1.4);let xt=2,ht=c+5.6,$t=ht+5.6,Ct=$t+5,jt=[47.6,58.5,69.4];A(42,75,xt,26,Ct,[0,5.6,11.2],{R:5,n:8}),b(42,75,xt,c,5.6,jt.flatMap(D=>[{...g,x:D-58.5,y:.5,w:2.6,h:4.3,frame:.35,outer:"flat",chance:.9},...[-2.9,2.9].map(C=>({kind:"flat",x:D-58.5+C,y:1.3,w:.9,h:2.5,frame:.14}))])),b(42,75,xt,ht,5.6,jt.flatMap(D=>m(3,4.5,{...g,w:1.05,h:3.1,y:1.3,on:1}).map(C=>({...C,x:C.x+D-58.5})))),b(42,75,xt,$t,5,[]),z(42,75,xt,ht),z(42,75,xt,$t);{let D=kt(33,26,58.5,xt-13);o.add("trim",ue(D,Ct-.5,.36,.5)),G(D,Ct)}jt.forEach((D,C)=>{o.take(Ci(5.6,4.2,1.5,D,ht+1.1,{roof:"crest",drop:1.1}).move(0,0,xt));for(let H of[-.95,.95])o.add("trim",gn(.13,3.3,D+H,ht+2.02,xt+1.3,{sides:6}));F(D,xt+.9,$t+(C===1?1.2:.4),8.2,{w:3,h:C===1?5.6:4.4})});for(let D of[42.7,53.05,63.95,74.3])_e(D,xt+.5,1.25,1.2,21.8);_e(74.3,xt-25.5,1.25,1.2,21.8),o.add("fine",_i([42,xt],[75,xt],1.1,()=>Ke(.42,.5,.16,Ct-.5),{inset:.3}));for(let D of jt)for(let C of[-3.9,3.9])o.add("trim",V(.4,$t-c,.26,D+C,c,xt+.12));o.into(s,n);let qt=Mt({tint:2906682}),Tt=Mt({tint:12035980}),Ut=Mt({tint:2050604}),Ft=Mt({tint:7297604}),ne=te(.35,.6,.9),Pt=Mt({tint:3355965});s.put(qt,Ri(160,.3,30,0,1.36,24)),s.put(Tt,Ri(7,.34,30,12.5,1.36,24),Ri(150,.34,3.4,0,1.36,11.4));for(let D=17;D<=37;D+=5)for(let C of[-4.3,4.3])s.put(Pt,V(.16,.9,.16,12.5+C,1.7,D)),s.put(te(1.8,1.4,.8),de(.16,12.5+C,2.7,D,6)),s.light(12.5+C,2.7,D,At,.5,3.2,1.4);for(let D of[-32,52]){s.put(Tt,ie(5.2,.7,D,1.6,24,16),ie(1.1,1.3,D,2.3,24,10)),s.put(ne,Sx(new Cn(4.7,20)).rotateX(-Math.PI/2).translate(D,2.32,24)),s.light(D,3.2,24,Kn,.8,5);for(let C=0;C<14;C++)s.spark(D+(l()-.5)*1.4,3.6+l()*3.6,24+(l()-.5)*1.4,Kn,.9,1)}{let D=[Qr(4),Qr(5),Qr(6)],C=0;for(let H=-70;H<=70;H+=14)if(Math.abs(H-12.5)>8){let Y=17+(Math.abs(H)%28?0:3);s.stamp(D[C++%3],H,Y,C*1.3,1,1.6)}}for(let D=-76;D<=76;D+=4)Math.abs(D-12.5)>5&&s.put(Ut,V(3.6,1.3,1.5,D,1.6,38.2));for(let D of[-5.2,5.2])s.put(e,V(1.8,5.4,1.8,12.5+D,1.5,38.4),V(2.3,.4,2.3,12.5+D,6.9,38.4),yn(.9,1.1,12.5+D,7.3,38.4,{seg:8})),s.put(te(1.8,1.4,.8),de(.34,12.5+D,6.3,39.5,8)),s.light(12.5+D,6.3,39.8,At,.8,5,2.4);for(let D=-72;D<=72;D+=8)s.light(D,2.2,17,At,.22,13);s.light(ot,26,14,At,.26,12).light(ot,40,11,At,.24,10).light(ot,52,9,At,.2,8).light(ot-13,36,vt,At,.14,11).light(ot+13,36,vt,At,.14,11).light(ot,38,vt-13,At,.12,11),s.light(12.5,30,18,At,.3,13).light(12.5,42,12,At,.22,11).light(-4,40,-4,At,.14,11).light(29,40,-4,At,.14,11).light(12.5,40,-22,At,.12,11),s.light(-46,24,13,At,.2,9).light(-58,23,12,At,.16,8).light(-33,23,12,At,.16,8).light(58.5,22,15,At,.2,10).light(47.6,21,14,At,.14,8).light(69.4,21,14,At,.14,8);for(let D of[-4,-16])s.light(86,2.2,D,At,.16,12).light(-80,2.2,D-4,At,.14,12);for(let D=-64;D<=64;D+=16)s.light(D,2.2,-44,At,.1,13);return s}var Sx=i=>{let t=i.attributes.uv;for(let e=0;e<t.count;e++)t.setXY(e,.004,.004);return i};var Ex=()=>te(1.9,1.35,.42),wx=()=>te(1.8,1.4,.8);function od(){let i=In("kirti",{stone:[178,168,146],course:.5,block:1.3,joint:.72,vary:.12}),t=i.userData.tile,e=Mt({tint:12168854}),n=Mn(12168854),r={stone:i,trim:e,fine:n,glass:Hi(),wood:Er(),jali:wr("teak",[124,78,46],.3),red:wr("red",[170,80,58],.36,!0),dark:Mt({tint:1840658}),gold:Ex()},s=new ye,o=we(36),a=new nn,l=33,c=24,u=2,h=15.6,f=u+h,d=f+.9,p=kt(l,c,0,-c/2);a.add("stone",ee([[.9,0],[.9,.5],[.5,.85],[.5,1.5],[.2,1.8],[.2,u],[0,u]],p,0,{cap:!0,tile:t})),a.add("trim",V(10.4,u,1.5,0,0,1.65));for(let P=1;P<=7;P++)a.add("trim",V(8.6,u-P*.25,.5,0,0,2.4+(P-.5)*.5));for(let P of[-1,1]){a.add("stone",An(V(.9,u+.9,1.5,P*4.75,0,1.65),t),An(V(.9,1.5,3.6,P*4.75,0,4.2),t)),a.add("trim",V(1.1,.2,1.7,P*4.75,u+.9,1.65),V(1.1,.2,3.8,P*4.75,1.5,4.2));for(let[B,z]of[[2.2,u+1.1],[5.7,1.7]])a.add("fine",gn(.14,1.9,P*4.75,z,B,{sides:6})),s.put(wx(),de(.3,P*4.75,z+2.15,B,8)),s.light(P*4.75,z+2.2,B,At,.25,4,2.2)}let x={w:1.9,kind:"flat",frame:.2,sill:!0},g={w:3.3,kind:"cusped",sharp:.35,frame:.3,outer:"flat",depth:.8},m=[...Me(3,7.4,{...g,y:.9,h:5.6,fill:"glass",chance:.3}),...Me(3,7.4,{...g,y:8.5,h:5.4,fill:"glass",chance:.6})];a.take(sn(l,c,h,.9,t,{front:[{x:0,y:0,w:6.4,h:13,kind:"cusped",sharp:.32,lobes:9,cusp:.06,fill:"jali",cell:2.2,depth:.86},...[-11.6,11.6].flatMap(P=>[{...x,x:P,y:2.5,h:3.9},{...x,x:P,y:9.4,h:3.8}])],left:m,right:m,back:[...Me(5,6,{...x,y:2.2,h:3.6}),...Me(5,6,{...x,y:9.2,h:3.6})]},u,o));for(let P of[-1,1])for(let B of[-7.4,0,7.4]){let z=qe("flat",3.3,1.15,0,0,0,{uv:.9,shade:1}).rotateY(P*Math.PI/2).translate(P*(l/2-.2),u+8.5,-c/2+B);a.add("red",z)}a.add("wood",qe("flat",4.2,7.1,0,u,-.5,{uv:"whole",shade:.85})),a.add("trim",V(6.6,.55,.3,0,u+7.1,-.62),V(.26,7.1,.3,-2.23,u,-.62),V(.26,7.1,.3,2.23,u,-.62));for(let P of[-1,1])a.add("red",qe("flat",.84,7.1,P*2.78,u,-.52,{uv:.8,shade:.9}));a.add("trim",cn("cusped",6.4,13,0,u,0,{band:1.65,proud:.16,outer:"flat",sharp:.32,lobes:9,cusp:.06}),cn("flat",9.2,14.2,0,u,.16,{band:.28,proud:.12}),cn("flat",6.9,13.4,0,u,.16,{band:.16,proud:.08}));for(let P of[-1,1])a.add("fine",zt(new Ce(.42,.42,.14,12)).rotateX(Math.PI/2).translate(P*2.9,u+13.5,.2),gn(.2,6.6,P*3.6,u,.4,{sides:8}));for(let P of[-11.6,11.6])a.take(Ci(3.4,4.2,1.3,P,u+9.3,{roof:"crest"})),a.take(Ci(3,4.2,1.1,P,u+2.4,{roof:"none",drop:1.3}));a.add("trim",ue(p,u+7.5,.22,.34),ue(p,f-1,.3,.4),rn(p,f-.2,1.9,.75,.16),ee([[0,0],[.35,0],[.35,.35],[0,.35]],p,f+.55)),a.add("fine",Be(p,1.42,()=>Ke(1.25,.95,.2,f+.3),{inset:.3}),Be(p,.5,()=>V(.2,.2,.16,0,f-1.22,.14),{inset:.4})),a.add("trim",V(l,.3,c,0,d-.3,-c/2)),a.add("fine",jn([-7,-.25],[7,-.25],d,{h:1.25,step:.5,r:.11}),jn([-7,-c+.25],[7,-c+.25],d,{h:1.25,step:.5,r:.11}));for(let P of[-1,1])a.add("fine",jn([P*(l/2-.25),-9.6],[P*(l/2-.25),-14.4],d,{h:1.25,step:.5,r:.11}));for(let P of[-1,1])for(let B of[-1,1]){let z=P*11.7,N=B>0?-4.8:-c+4.8,G=kt(9.4,9.4,z,N),q=d+1.9,K=q+.3+3.9;a.add("stone",ee([[0,0],[0,1.9]],G,d,{cap:!0,tile:t})),a.add("trim",ue(G,q,.22,.3),ee([[0,0],[0,.55],[-.3,.55]],kt(8.6,8.6,z,N),K),V(8.6,.12,8.6,z,K+.43,N),rn(kt(8.8,8.8,z,N),K+.55,1.75,.6,.15));for(let[it,_t]of[[1,1],[.62,1],[1,.62]])for(let Xt of[-1,1])for(let It of[-1,1])a.add(it===1&&_t===1?"trim":"fine",gn(.3,3.9,z+Xt*it*3.95,q+.3,N+It*_t*3.95,{sides:8}));a.add("fine",Be(kt(8.8,8.8,z,N),1.3,()=>Ke(1.1,.7,.16,K+.95),{inset:.5})),a.add("trim",ee([[0,0],[0,.5],[-.5,.75]],Ge(4.9,8,z,N),K+1.3,{cap:!0}),dn([[4,0],[3.9,.5],[3.5,1.1],[2.7,1.8],[1.6,2.4],[.7,2.75],[.3,2.9],[.001,3]],{seg:16}).translate(z,K+2.05,N),Ze(.62,z,K+4.95,N));for(let it of[-1,1])for(let _t of[-1,1])a.add("fine",yn(.72,.9,z+it*3.7,K+1.3,N+_t*3.7,{seg:8,finial:.5}));s.put(r.dark,V(8.2,.05,8.2,z,q+.3,N)),s.light(z,q+2.4,N,Jt,.4,5)}let _=-c/2,y={x:0,y:.7,w:2.8,h:3.7,kind:"round",frame:.26,fill:"glass",on:1,style:1},v=d+5.3;a.take(sn(13,13,5.3,.7,t,{front:[y],back:[y],left:[y],right:[y]},d,o).move(0,0,_+6.5));for(let[P,B]of[[0,1],[0,-1],[1,0],[-1,0]])for(let z of[-1,1])a.add("fine",gn(.24,4.6,P*6.6+(P?0:z*2.2),d,_+B*6.6+(B?0:z*2.2),{sides:6}));a.add("trim",rn(kt(13,13,0,_),v-.15,1.1,.4,.14),ee([[0,0],[.5,0],[.5,.3],[.2,.5],[.2,.9],[-.2,.9]],kt(13,13,0,_),v+.35,{cap:!0}));let w=13.6,M=P=>1.75+4.75*(1-Math.pow(P,1.8)),E=nd(4),T=v+1.25,b=[];for(let P=0;P<=22;P++)b.push([M(P/22),w*P/22]);a.add("stone",dn(b,{seg:40,section:E,tile:{u:t.u,v:t.v}}).translate(0,T,_));let S=(P,B)=>Math.pow(Math.max(0,Math.pow(M(B),4)-Math.pow(P,4)),.25),A=()=>zt(new Hr(.3)).scale(1,.72,1);for(let P=0;P<4;P++){let B=new nn;for(let[z,N]of[[5.2,.97],[3.5,.7],[1.9,.44]]){let G=Math.round(N*34);for(let q=0;q<=G;q++){let K=N*q/G,it=z*(1-Math.pow(K/N,1.7))*M(K)/M(0);for(let _t of q===G?[1]:[-1,1])B.add("fine",A().translate(_t*it,K*w,S(it,K)+.12))}N<.9&&B.add("fine",Ze(.3,0,N*w-.1,S(0,N)+.2),V(1.5,.16,.5,0,N*w-.3,S(0,N)+.1))}B.take(Ci(1.9,2.5,.8,0,1.3,{roof:"dome",drop:.7,r:.1}).move(0,0,S(0,.08)-.05)),B.add("dark",qe("flat",1.2,2.2,0,1.4,S(0,.1)+.03,{uv:"plain"})),a.take(B.move(0,T,_,P*Math.PI/2))}let I=T+w;a.add("trim",dn([[1.75,0],[2.2,.12],[2.35,.4],[2.2,.7],[1.5,.82],[1.2,1],[1.5,1.2],[1.35,1.45],[.5,1.6],[.36,2]],{seg:24,section:P=>1-.07*(Math.cos(P*12)>0?1:0)}).translate(0,I,_)),s.put(r.gold,de(.72,0,I+2.6,_,12),zt(new on(.62,.11,6,14,Math.PI)).rotateZ(Math.PI).translate(0,I+4.15,_),zt(new on(.5,.09,6,16)).translate(0,I+5,_),zt(new Ce(.06,.06,1.4,5)).translate(0,I+3.7,_));for(let P=0;P<12;P++){let B=P/12*Math.PI*2;s.put(r.gold,zt(new Nn(.07,.34,4)).translate(0,.76,0).rotateZ(B).translate(0,I+5,_))}a.into(s,r);for(let P=-13;P<=13;P+=6.5)s.light(P,.6,14,At,.2,13);for(let P of[-1,1])for(let B of[-4,-12,-20])s.light(P*29,.8,B,At,.13,12);return s.light(0,25,8,At,.3,12).light(0,34,5,At,.26,10).light(-11.3,21,5,At,.14,7).light(11.3,21,5,At,.14,7).light(0,6,4,Jt,.22,5).light(0,28,-32,At,.16,12).light(-24,30,-12,At,.16,10).light(24,30,-12,At,.16,10),s.put(an(),Ye(24,18,0,0,-11)),s}var Tx=(i,t)=>new mt(i,t),gc=(i,t,e,n,r,s=10)=>dn([[i*.93,0],[i*1.02,t*.14],[i*.98,t*.34],[i*.82,t*.58],[i*.56,t*.8],[i*.24,t*.95],[.001,t]],{seg:s}).translate(e,n,r),Yh=(i,t,e,n)=>zt(new Hr(i)).scale(1,1.5,1).translate(t,e,n),Ax=(i,t,e,n,r)=>[...[[-1,-1],[1,-1],[-1,1],[1,1]].map(([s,o])=>V(i*.1,t,i*.1,e+s*i*.42,n,r+o*i*.42)),V(i*1.28,i*.12,i*1.28,e,n+t,r),gc(i*.56,i*.72,e,n+t+i*.12,r,8),Yh(i*.1,e,n+t+i*.96,r)];function ad(i,t,e,n,r,s,o,a){let l=new Tn,c=i/2-.2,u=n+.12,h=t+e;return l.moveTo(-i/2,0),l.lineTo(i/2,0),l.lineTo(i/2,t),l.lineTo(c,t),l.absellipse(c,h,c-u,e,-Math.PI/2,-Math.PI,!0),l.lineTo(n,h),l.absarc(0,h,n,0,Math.PI,!1),l.lineTo(-u,h),l.absellipse(-c,h,c-u,e,0,-Math.PI/2,!0),l.lineTo(-i/2,t),o&&l.holes.push(new Li(ki("pointed",o,a,{sharp:.4}).map(f=>Tx(f[0],f[1]+.35)))),An(new Ti(l,{depth:r,bevelEnabled:!1,curveSegments:10}).translate(0,0,-r),s)}function mc(i,t,e,n){return new nn().add("trim",V(i,.24,t,e,n-.24,t/2),V(i,.95,.1,e,n,t-.05),V(.1,.95,t,e-i/2+.05,n,t/2),V(.1,.95,t,e+i/2-.05,n,t/2),V(i+.16,.1,t+.08,e,n+.95,t/2+.04)).add("fine",_i([e-i/2+.25,0],[e+i/2-.25,0],.95,()=>Ke(t*.92,.85,.2,n-.24)),_i([e-i/2+.5,t],[e+i/2-.5,t],.9,()=>V(.5,.5,.04,0,n+.22,0),{ends:!1})).add("bufffine",_i([e-i/2+.5,t+.02],[e+i/2-.5,t+.02],.9,()=>V(.34,.34,.04,0,n+.3,0),{ends:!1}))}function ld(){let i=[156,84,60],t=Array(32).fill(null);for(let N of[4,12,13,20,27])t[N]=i;let e=In("nyay",{stone:[184,154,98],course:.15,block:.5,rows:32,cols:8,joint:.86,vary:.1,bands:t,grime:.14}),n=e.userData.tile,r=In("nyay-stone",{stone:[174,158,124],course:.45,block:1,joint:.78}),s=r.userData.tile,o=dc("nyay",[150,80,58]),a=o.userData.tile,l={stone:e,ashlar:r,roof:o,trim:Mt({tint:12762540}),fine:Mn(12762540),buff:Mt({tint:11707006}),bufffine:Mn(11707006),glass:Hi(),dark:Mt({tint:1577743}),gate:wr("nyay-gate",[52,44,36],.34,!0),glow:te(1,.6,.24),dial:te(1.5,1.42,1.15),hands:Mn(1709586),gold:te(1.9,1.35,.42),lamp:te(1.8,1.4,.8)},c=new ye,u=we(96),h=new nn,f=.9,d=4,p=22.5,x=p-f,g=[[.35,0],[.35,.55],[.1,f],[0,f]],m={kind:"round",fill:"glass",frame:.26,sill:!0},_={kind:"flat",fill:"glass",seg:8,chance:.3,sill:!0};for(let[N,G,q,K]of[[27,24,0,-8],[13.4,20,-20.2,-10],[13.4,20,20.2,-10],[20.6,16,-37.2,-9],[20.6,16,37.2,-9]])h.add("ashlar",ee(g,kt(N,G,q,K),0,{cap:!0,tile:s}));for(let N=0;N<5;N++)h.add("buff",V(12.4-N*.4,f-N*.18,.5,0,0,d+.6+N*.5));let y={x:0,y:0,w:9.8,h:11.9,kind:"pointed",sharp:.14,seg:20,fill:"open"};h.take(en(14,x,3.2,n,[y,...Me(3,1.45,{y:14.1,w:1.12,h:2.6,kind:"flat",fill:"glass",on:1,style:0}),{x:0,y:18.5,w:2.7,h:2.7,kind:"circle",fill:"dial",depth:.3,frame:.32,proud:.14},...[-5.65,5.65].map(N=>({...m,x:N,y:17.5,w:1.5,h:2.9}))],f,u).move(0,0,d)),h.add("trim",cn("pointed",y.w,y.h,0,f+.02,d,{band:.9,proud:.14,sharp:.14,seg:20}),V(4.6,.3,.36,0,f+16.8,d+.14),V(4.6,.22,.3,0,f+13.88,d+.12));for(let N of[-2.12,-.72,.72,2.12])h.add("fine",gn(.13,2.7,N,f+14.1,d+.16,{sides:6}));h.take(mc(6.6,1.3,0,f+17.5).move(0,0,d));for(let N of[-1,1])h.add("trim",ie(.48,2.5,N*2.75,f+19,d+.12,8),dn([[.001,0],[.26,.12],[.56,.5],[.5,.95]],{seg:8}).translate(N*2.75,f+18.05,d+.12),gc(.5,.6,N*2.75,f+21.5,d+.12,8));h.add("hands",V(.1,1,.04,0,f+19.85,d-.27),zt(new Ue(.7,.1,.04)).translate(.32,f+19.85,d-.25)),h.take(en(10.8,12.6,.6,n,[...[-2.1,2.1].map(N=>({x:N,y:0,w:3,h:4.5,kind:"round",fill:"glow",frame:.42})),...Me(3,3,{y:6.7,w:1.9,h:3.2,kind:"round",fill:"glass",on:1,style:1,frame:.22})],f,u).move(0,0,d-3.2));for(let N of[-2.1,2.1])h.add("gate",qe("round",3,4.5,N,f+.02,d-3.42,{uv:1.3,shade:.9}));h.take(mc(9.7,1.5,0,f+5.6).move(0,0,d-3.2));for(let N of[-1,1])h.take(en(6.5,x,.9,n,[{x:0,y:.6,w:1.3,h:2.3,kind:"flat",fill:"glass",frame:.2,sill:!0},{x:0,y:6.2,w:1.6,h:2.9,kind:"pointed",sharp:.25,fill:"glass",frame:.3,outer:"flat",sill:!0}],f,u).move(N*10.25,0,d));h.take(en(24,x,.9,n,Me(4,4,{...m,y:17,w:1.4,h:2.7},4),f,u).move(13.5,0,-8,Math.PI/2)).take(en(24,x,.9,n,Me(4,4,{...m,y:17,w:1.4,h:2.7},-4),f,u).move(-13.5,0,-8,-Math.PI/2)),h.take(en(27,x,.9,n,[2,9.5,16.6].flatMap(N=>Me(6,4.2,{..._,y:N,w:1.4,h:2.8})),f,u).move(0,0,-20,Math.PI));let v=7.4,w=f+12.6,M=d+.45-v/2,E=[...Me(3,.95,{y:.9,w:.36,h:2,kind:"round",fill:"dark",frame:.15,seg:6}),{x:0,y:3.7,w:3.8,h:1.2,kind:"flat",fill:"glass",on:0,style:3,frame:.14},{...m,x:0,y:5.75,w:1.5,h:2.8,sill:!1}];for(let N of[-1,1]){let G=N*10.25,q=kt(v,v,G,M);h.take(sn(v,v,p-w,.5,n,{front:E,[N>0?"right":"left"]:E},w,u).move(G,0,d+.45)),h.add("buff",V(v,.22,v,G,w-.22,M),ue(q,w-.1,.12,.3)),h.add("bufffine",Be(q,.82,()=>Ke(.5,.95,.3,w-.2),{inset:.3})),h.take(mc(3.6,.95,0,w+5.6).move(G,0,d+.45)).take(mc(3.6,.95,0,w+5.6).move(G+N*v/2,0,M,N*Math.PI/2))}let T=[[-13.95,4.45],[-6.55,4.45],[-6.55,4],[6.55,4],[6.55,4.45],[13.95,4.45],[13.95,-2.95],[13.5,-2.95],[13.5,-20],[-13.5,-20],[-13.5,-2.95],[-13.95,-2.95]];h.add("buff",ue(T,p,.7,.9),V(27,.3,24,0,p+.6,-8),V(v,.3,v,-10.25,p+.6,M),V(v,.3,v,10.25,p+.6,M)),h.add("bufffine",Be(T,.9,()=>V(.34,.3,.26,0,p-.34,.12),{inset:.25})),h.add("fine",Kr(T,p+.9,{h:1,step:.46,r:.09}));let b=p+.9;h.add("ashlar",ad(10,3.5,1.1,2.25,1.2,s,2.5,3.2).translate(0,b,d-.2)),h.add("dark",qe("pointed",2.5,3.2,0,b+.35,d-.95,{uv:"plain",sharp:.4,shade:.5})),h.add("trim",cn("pointed",2.5,3.2,0,b+.35,d-.2,{band:.24,proud:.1,sharp:.4}),Ze(.46,0,b+6.85,d-.8));for(let[N,G]of[[-4.7,4.5],[4.7,4.5],[-2.6,6.4],[2.6,6.4]])h.add("ashlar",An(V(.8,G,.8,N,b,d-.6),s)).add("buff",V(1,.18,1,N,b+G,d-.6),Ze(.5,N,b+G+.18,d-.6));for(let N of[-1,1]){let G=N*10.25,q=Ge(2,8,G,M),K=b+6.4,it=K+.25+3;h.add("stone",ee([[0,0],[0,6.4]],q,b,{tile:n,cap:!0})),h.add("trim",ee([[0,0],[.12,0],[.12,.26],[0,.26]],q,b+3.5),ee([[.25,0],[.25,.4],[0,.6]],q,b)),h.add("fine",Be(q,.765,()=>cn("pointed",.86,1.65,0,b+4.15,0,{band:.12,proud:.07,sharp:.4,seg:8}),{ends:!1}),Be(q,.765,()=>cn("round",.5,1.9,0,b+1,0,{band:.1,proud:.05,seg:6}),{ends:!1})),h.add("trim",ee([[0,-.95],[.3,-.55],[.9,0],[.9,.25],[0,.25]],q,K,{cap:!0}),ee([[0,0],[0,.5],[-.3,.5]],Ge(1.95,8,G,M),it,{cap:!0}),rn(Ge(1.95,8,G,M),it+.45,1,.36,.1)),h.add("fine",Kr(Ge(2.78,8,G,M),K+.25,{h:.95,step:.42,r:.08}),Be(q,.52,()=>Ke(.55,.6,.14,K-.02),{ends:!1}));for(let _t=0;_t<8;_t++){let Xt=(_t+.5)/8*Math.PI*2;h.add("trim",gn(.17,3,G+Math.cos(Xt)*1.62,K+.25,M+Math.sin(Xt)*1.62,{sides:6}))}h.add("buff",gc(1.95,2.3,G,it+.95,M,14)),h.add("gold",Ze(.5,G,it+3.15,M)),h.add("lamp",de(.3,G,K+2.1,M,8)),c.light(G,K+2.1,M,Jt,.36,4.5,2.2);for(let _t of[-1,1])for(let Xt of[-1,1]){let It=G+_t*3.05,Ot=M+Xt*3.05;h.add("ashlar",An(V(1.25,1.5,1.25,It,b,Ot),s)).add("bufffine",Ax(1.3,1.5,It,b+1.5,Ot))}}let S=[{x:0,y:.4,w:3.4,h:5.7,kind:"pointed",sharp:.35,fill:"glass",on:1,style:1,frame:.5,outer:"flat",sill:!0},...[-4.6,4.6].map(N=>({x:N,y:1.4,w:1.2,h:2.4,kind:"flat",fill:"glass",frame:.18,sill:!0})),...Me(3,4.3,{y:8.2,w:1.6,h:3.1,kind:"pointed",sharp:.25,fill:"glass",frame:.3,outer:"flat",sill:!0})],A=Me(3,5.2,{...m,y:8.2,w:1.5,h:3},2);for(let N of[-1,1]){let G=N*20.2,q=kt(13.4,20,G,-10),K=15.4;h.take(sn(13.4,20,K-f,.8,n,{front:S,back:[1.6,8.2].flatMap(it=>Me(3,4,{..._,y:it,w:1.4,h:2.8})),[N>0?"right":"left"]:N>0?A:A.map(it=>({...it,x:-it.x}))},f,u).move(G,0,0)),h.add("trim",ue(q,f+6.9,.14,.3)),h.add("buff",ue(q,K,.5,.7),ue(q,K+1.6,.12,.2),V(13.4,.2,20,G,K+.7,-10)),h.add("bufffine",Be(q,.9,()=>V(.34,.26,.24,0,K-.3,.12),{inset:.25})),h.add("stone",ee([[0,0],[0,.9],[-.35,.9],[-.35,0]],q,K+.7,{tile:n})),h.add("roof",ee([[0,0],[-6.3,4.5]],kt(12.6,19.2,G,-10),K+.9,{tile:a})),h.add("ashlar",ad(5.2,1.5,.6,1.25,.8,s,1.2,1.7).translate(G,K+1.6,-.02)),h.add("dark",qe("pointed",1.2,1.7,G,K+1.95,-.6,{uv:"plain",sharp:.4,shade:.5})),h.add("buff",Ze(.34,G,K+4.95,-.42));for(let it of[-1,1])for(let _t of[-.4,-19.6])h.add("ashlar",An(V(.8,2.3,.8,G+it*6.3,K+.7,_t),s)).add("buff",Ze(.42,G+it*6.3,K+3,_t));for(let it of[-6.9,-13.1])h.add("buff",Ze(.4,G,K+5.3,it))}let I=[-8.25,-4.95,-1.65,1.65,4.95,8.25],P=[...I.map(N=>({...m,x:N,y:1,w:1.7,h:3.7,frame:.36,chance:.5})),...I.flatMap(N=>[N-.52,N+.52]).map(N=>({x:N,y:6.9,w:.74,h:2.6,kind:"round",fill:"glass",seg:8,chance:.5}))],B=[...Me(4,3.5,{...m,y:1,w:1.6,h:3.6,frame:.32}),...Me(4,3.5,{...m,y:6.9,w:1.3,h:2.9})],z=12.9;for(let N of[-1,1]){let G=N*37.2,q=kt(20.6,16,G,-9);h.take(sn(20.6,16,z-f,.7,n,{front:P,back:[1.4,6.9].flatMap(K=>Me(6,3.3,{..._,y:K,w:1.3,h:2.8})),[N>0?"right":"left"]:B},f,u).move(G,0,-1));for(let K of I)h.add("trim",cn("round",2.2,3.5,G+K,f+6.62,-1,{band:.3,proud:.1}),V(.18,2.5,.16,G+K,f+6.9,-.94));for(let K=0;K<=6;K++)h.add("trim",V(.42,z-f-5.7,.14,G-9.9+K*3.3,f+5.7,-.93));h.add("trim",ue(q,f+5.5,.14,.28)),h.add("buff",ue(q,z,.45,.6),V(20.6,.2,16,G,z+.5,-9)),h.add("bufffine",Be(q,.9,()=>V(.32,.24,.22,0,z-.28,.1),{inset:.25})),h.add("fine",Kr(q,z+.6,{h:.9,step:.46,r:.08}),_i([G-10.3,-1],[G+10.3,-1],3.3,()=>[V(.42,1.25,.42,0,z+.6,-.05),Yh(.2,0,z+2.1,-.05)],{inset:.4}),_i([G+N*10.3,N>0?-1:-17],[G+N*10.3,N>0?-17:-1],3.6,()=>[V(.42,1.25,.42,0,z+.6,-.05),Yh(.2,0,z+2.1,-.05)],{inset:.4})),h.add("roof",ee([[0,0],[-7.3,4.3]],kt(19.4,14.8,G,-9),z+.7,{tile:a}));for(let K of[-2.3,2.3])h.add("buff",Ze(.38,G+K,z+4.9,-9));for(let K of[-5.6,0,5.6]){let it=kt(1.9,2.8,G+K,-4.6);h.add("stone",ee([[0,0],[0,2.1]],it,z+1.5,{tile:n})),h.add("roof",ee([[.14,0],[-.95,.85]],it,z+3.6,{tile:a})),h.add("trim",cn("round",.9,1.3,G+K,z+2,-3.2,{band:.16,proud:.06,seg:8})),h.add("glass",qe("round",.9,1.3,G+K,z+2,-3.18,{on:u()<.6,style:0,seg:8}))}for(let K of[N*28.4,N*46]){let _t=kt(3,3,K,-2.5),Xt=z+.6,It=Xt+3.5,Ot={x:0,y:.8,w:.9,h:1.9,kind:"round",fill:"dark",frame:.13,seg:8};h.take(sn(3,3,3.5,.4,n,{front:[Ot],back:[Ot],left:[Ot],right:[Ot]},Xt).move(K,0,-2.5+1.5)),h.add("buff",ue(_t,It,.3,.4),V(3,.12,3,K,It+.28,-2.5),ee([[0,0],[0,.4],[-.3,.4]],kt(2.7,2.7,K,-2.5),It+2.8,{cap:!0}),rn(kt(2.7,2.7,K,-2.5),It+3.1,.95,.34,.1));for(let _e of[-1,1])for(let pt of[-1,1])h.add("bufffine",gn(.18,2.4,K+_e*1.1,It+.4,-2.5+pt*1.1,{sides:6}));h.add("buff",gc(1.45,1.6,K,It+3.5,-2.5,10)),h.add("gold",Ze(.36,K,It+5.05,-2.5))}}h.into(c,l);for(let N=-40;N<=40;N+=8)c.light(N,.6,16,At,.2,14);for(let N of[-1,1])c.light(N*60,.8,-4,At,.14,13).light(N*60,.8,-14,At,.12,13).light(N*30,.8,-32,At,.1,13).light(N*20,19,10,At,.14,9).light(N*10.25,28,12,At,.3,10).light(N*11.5,35,9,At,.4,9).light(N*10.25,24.6,6.5,At,.42,8).light(N*18,31,1,At,.34,9).light(N*10.25,30,-8,At,.2,9);return c.light(0,.8,-34,At,.1,13).light(0,24,13,At,.28,11).light(0,30,11,At,.36,9).light(0,4.5,3.4,Jt,.34,5.5).light(0,8.5,2.6,Jt,.2,5).light(0,30,-18,At,.12,12),c.put(an(),Ye(56,14,0,0,-8)),c}var Rx=()=>te(1.9,1.35,.42);function cd(){let i=In("mandvi",{stone:[188,186,178],course:.6,block:2.4,rows:8,cols:2,joint:.955,vary:.04,grime:.1}),t=i.userData.tile,e={stone:i,trim:Mt({tint:12368562}),fine:Mn(12368562),brown:Mt({tint:8018504}),brownfine:Mn(8018504),iron:Mn(2895414),dark:Mt({tint:1446671}),pave:Mt({tint:4867648}),jali:wr("mandvi",[132,88,62],.36),white:wr("mandvi-white",[196,194,186],.46),wood:Er("mandvi",[112,70,46]),glow:te(.36,.21,.08),dial:te(1.5,1.42,1.15),lamp:te(2,1.5,.8),flag:te(1.5,.3,.2),gold:Rx()},n=new ye,r=new nn,s=26,o=-13,a=10.6,l=2.2,c=kt(s,s,0,o),u=M=>M*Math.PI/2,h=[[-8.2,5.1,8.4],[0,6,8.7],[8.2,5.1,8.4]].map(([M,E,T])=>({x:M,y:0,w:E,h:T,kind:"pointed",sharp:.2,seg:14,fill:"open"})),f=()=>new nn().take(en(s,a,l/2,t,h).move(0,0,l/2)).take(en(s,a,l/2,t,h).move(0,0,-l/2,Math.PI));for(let[M,E,T]of[[0,-l/2,0],[0,-s+l/2,0],[s/2-l/2,o,1],[-s/2+l/2,o,1],[0,o+4.35,0],[0,o-4.35,0],[4.35,o,1],[-4.35,o,1]])r.take(f().move(M,0,E,u(T)));r.add("pave",V(s+3,.12,s+3,0,0,o)),r.add("trim",V(s-.2,.4,s-.2,0,a-.4,o));for(let M=0;M<4;M++){let E=new nn;for(let T of h)E.add("fine",cn("pointed",T.w,T.h,T.x,.02,0,{band:.2,proud:.07,sharp:.2,seg:14}));for(let T of[-4.35,4.35])for(let b of[2.6,5,7.2])E.add("fine",cn("cusped",.85,1.35,T,b,0,{band:.1,proud:.05,lobes:5,cusp:.11,sharp:.3}));r.take(E.move(0,0,s/2).move(0,0,o,u(M)))}r.add("trim",ue(c,9.72,.78,.88),ue(c,12.9,.2,.3),V(s-1,.3,s-1,0,a+.1,o)),r.add("brown",ee([[.76,-.16],[.83,-.16],[.83,.03],[.76,.03]],c,a)),r.add("stone",ee([[0,0],[0,2.3],[-.55,2.3],[-.55,.4]],c,a,{tile:t})),r.add("fine",Be(c,.72,()=>Ke(.55,.6,.24,9.76),{inset:.4}),Be(c,3.25,()=>cn("flat",2.3,1.25,0,11.2,0,{band:.12,proud:.05}),{ends:!1}));let d=13.4,p=.4,x=(M,E,T)=>M.translate(0,0,T).rotateY(E).translate(d,0,p),g=13.4;r.add("stone",ie(2.3,9.7,d,0,p,18,t),ie(2.75,2.5,d,a,p,18,t)),r.add("trim",dn([[2.3,0],[2.48,.14],[2.6,.2],[2.98,.8],[3.06,.86],[3.06,1.1],[2.75,1.1]],{seg:18}).translate(d,9.5,p),dn([[2.75,0],[2.92,.05],[2.92,.25],[2.5,.3],[.001,.3]],{seg:18}).translate(d,13.1,p),ie(2.5,.5,d,0,p,18)),r.add("brown",dn([[3.06,0],[3.12,0],[3.12,.18],[3.06,.18]],{seg:18}).translate(d,10.44,p));for(let M=0;M<18;M++)r.add("fine",x(Ke(.5,.6,.22,10.22),M/18*Math.PI*2,2.34));for(let M of[.42,.42+Math.PI/2,.42-Math.PI/2+.5])for(let E of[3.4,6.7])for(let T of[-.09,.09])r.add("dark",x(V(.17,1.45,.08,0,E,0),M+T,2.27));r.add("brown",ie(1.95,.24,d,g,p,12),dn([[1.72,0],[1.72,.3],[2.3,.42],[2.3,.54],[1.62,.72]],{seg:12}).translate(d,g+2.74,p),yn(1.62,1.7,d,g+3.44,p,{seg:12,swell:.05,finial:.55}));for(let M=0;M<8;M++){let E=(M+.5)/8*Math.PI*2,T=d+Math.cos(E)*1.58,b=p+Math.sin(E)*1.58;r.add("brownfine",gn(.1,2.5,T,g+.24,b,{sides:6}),x(V(1,.34,.08,0,g+2.4,0),M/8*Math.PI*2,1.46))}n.put(e.gold,de(.2,d,g+6.2,p,6)),n.put(e.lamp,de(.22,d,g+2.2,p,6)),n.light(d,g+2.2,p,Jt,.3,3.4,2);let m=(M,E)=>{let T=kt(M,M,0,o);r.add("iron",Be(T,1.1,()=>V(.06,.95,.06,0,E,0)),ee([[0,.9],[.05,.9],[.05,.95],[0,.95]],T,E),ee([[0,.45],[.04,.45],[.04,.49],[0,.49]],T,E))},_=(M,E,T,b,S,A,I)=>{let B=(M-.44)/b,z=kt(M+.2,M+.2,0,o),N=T-.44-A;for(let G=0;G<4;G++){let q=new nn().add("trim",V(M,.3,.44,0,T-.3,-.22),V(M,.14,.24,0,N,-.2)).add("glow",qe("flat",M-.3,T-E,0,E,-.55,{uv:"plain",on:1}));for(let K=0;K<=b;K++)q.add("trim",V(.44,T-E,.44,-M/2+.44/2+K*B,E,-.44/2));for(let K=0;K<b;K++){let it=-M/2+.22+(K+.5)*B,_t=B-.44,Xt=K===(b-1)/2;q.add("jali",qe("flat",_t,A,it,T-.3-A,-.14,{uv:1,shade:1})),I?(q.add("trim",V(_t,N-E,.1,it,E,-.21)),Xt?q.add("wood",qe("flat",1.15,1.25,it,E+2.75,-.13,{uv:"whole",shade:.9})).add("fine",V(1.45,.12,.16,it,E+2.63,-.1),V(1.45,.12,.16,it,E+4,-.1)):q.add("dark",qe("flat",_t-.5,1,it,E+2.9,-.14,{uv:"plain"})).add("white",qe("flat",_t-.5,1,it,E+2.9,-.11,{uv:.7,shade:1}))):q.add("dark",qe("flat",_t,.95,it,E,-.2,{uv:"plain"})).add("white",qe("flat",_t,.95,it,E,-.16,{uv:.85,shade:1})).add("fine",V(_t,.1,.14,it,E+.95,-.16))}r.take(q.move(0,0,M/2).move(0,0,o,u(G)))}r.add("trim",ee([[0,0],[S,.42],[S,.58],[0,.58]],z,T),V(M+.2,.16,M+.2,0,T+.42,o)),r.add("brown",ee([[S,.38],[S+.07,.38],[S+.07,.6],[S,.6]],z,T))};_(13.3,a+.4,16.8,5,1.35,1.25,!0),m(12.7,17.38),_(8.3,17.38,20.5,3,1.05,1,!1),m(7.7,21.08);let y=21.08,v=23.5,w=4.3;r.add("stone",ee([[0,0],[0,v-y]],kt(w,w,0,o),y,{tile:t})),r.add("trim",rn(kt(w,w,0,o),v,.9,.42,.1),V(w,.14,w,0,v+.4,o),ue(kt(w,w,0,o),y,.1,.2));for(let M=0;M<4;M++){let E=new nn().add("dial",zt(new Cn(.95,24)).translate(0,y+1.25,.04)).add("brownfine",zt(new on(1,.08,5,24)).translate(0,y+1.25,.05),V(.08,.74,.03,0,y+1.25,.07),zt(new Ue(.52,.08,.03)).translate(.25,y+1.25,.07));r.take(E.move(0,0,w/2).move(0,0,o,u(M)))}m(3.7,v+.54);for(let[M,E]of[[-1,-1],[1,-1],[-1,1],[1,1]])r.add("fine",V(.14,1.5,.14,M*.62,v+.54,o+E*.62));r.add("trim",V(1.6,.9,1.6,0,v+.54,o),V(2.3,.16,2.3,0,v+2.04,o)),r.add("brown",ee([[0,0],[-1.15,.75]],kt(2.3,2.3,0,o),v+2.2)),r.add("iron",ce([0,v+2.9,o],[0,28.6,o],.045,4)),n.put(e.gold,de(.16,0,v+3,o,6));for(let M of[-1,1])r.add("iron",ce([M*3.6,21.08,o+3.7],[M*3.6,24.4,o+3.7],.04,4)),r.add("flag",V(1.1,.7,.04,M*3.6+.6,23.6,o+3.7));r.into(n,e);for(let[M,E]of[[0,0],[-8.2,0],[8.2,0],[0,-8.2],[0,8.2]])n.put(e.iron,ce([M,a-.4,o+E],[M,7.9,o+E],.03,4)),n.put(e.lamp,de(.3,M,7.7,o+E,8)),n.light(M,7.2,o+E,Jt,.85,7.5,2.6);for(let M=-13;M<=13;M+=6.5)n.light(M,.6,12,At,.14,13).light(M,.6,-38,At,.09,13);for(let M of[-1,1])for(let E of[-4,-13,-22])n.light(M*25,.6,E,At,.11,13);return n.light(0,17,6,At,.2,9).light(0,22,2,At,.16,7).light(-19,17,-13,At,.14,9).light(19,17,-13,At,.14,9).light(0,18,-32,At,.12,9).light(19,5,6,At,.14,8),n.put(an(),Ye(19,19,0,0,o)),n}var Cx=()=>te(1.9,1.35,.42);function hd(i,t,e,n,r,s,{band:o=.8,seg:a=24,...l}={}){let c=ki(i,t,e,{...l,seg:a}),u=ki(i,t+o*2,e+o,{...l,seg:a}),h=[];for(let d=2;d<Math.min(c.length,u.length)-1;d+=2)for(let p of[c[d],u[d],u[d+1],c[d],u[d+1],c[d+1]])h.push(p[0],p[1],0);let f=new Le;return f.setAttribute("position",new ae(h,3)),f.computeVertexNormals(),f.setAttribute("uv",new Pe(new Float32Array(h.length/3*2).fill(.004),2)),f.translate(n,r,s)}function Px(i,t,e,n,r,s,o,a,l){let c=u=>u.rotateX(-e).translate(0,r,n).rotateY(s).translate(o,0,a);if(i.add("trim",c(zt(new on(t,t*.2,5,14)).translate(0,0,.05))),i.add(l?"glow":"dark",c(zt(new Cn(t,14)).translate(0,0,.06))),t>.7){i.add("fine",c(zt(new on(t*.42,t*.09,4,10)).translate(0,0,.12)));for(let u=0;u<8;u++)i.add("fine",c(zt(new Ue(t*.1,t*.56,.08)).translate(0,t*.7,.1).rotateZ(u*Math.PI/4)))}}function ud(i,t,e,n,r,s=8,o=0){o&&i.add("trim",ee([[0,-o],[0,0]],Ge(t*.98,s,e,r),n,{cap:!0}));for(let a=0;a<s;a++){let l=(a+.5)/s*Math.PI*2,c=e+Math.cos(l)*t*.78,u=r+Math.sin(l)*t*.78;i.add("fine",ie(t*.09,t*1.13,c,n,u,5,null,t*.07),V(t*.26,t*.12,t*.26,c,n+t*1.13,u))}i.add("trim",ee([[0,0],[0,t*.2]],Ge(t*.95,s,e,r),n+t*1.25,{cap:!0}),rn(Ge(t*.98,s,e,r),n+t*1.4,t*.42,t*.16,.07),yn(t*.92,t*1.05,e,n+t*1.6,r,{seg:12,swell:.06,finial:0}),Ze(t*.26,e,n+t*2.62,r))}function fd(){let i=In("msu-brick",{stone:[146,74,56],course:.17,block:.5,rows:16,cols:8,joint:1.12,vary:.18,grime:.16,bands:Object.assign([],{0:[172,160,130]})}),t=i.userData.tile,e=In("msu-dome",{stone:[178,170,152],course:.9,block:2.4,rows:4,cols:2,joint:.93,vary:.05,grime:.7}),n=e.userData.tile,r=Mt({tint:12102024}),s={stone:i,trim:r,fine:Mn(12102024),glass:Hi(),dark:Mt({tint:1511951}),glow:te(.82,.5,.2),shell:e,stripe:Mt({tint:8010798}),roof:Mt({tint:6971736})},o=new ye,a=we(133),l=new nn,c=-15,u=1,h=18,f=u+h,d={kind:"pointed",sharp:.4,frame:.2,sill:!0},p={...d,y:.9,w:2.2,h:3.9},x={...d,y:6.3,w:2,h:3.4,chance:.5},g={...d,w:1.5,h:3.1,sill:!1};for(let[T,b,S,A]of[[31,31,0,c],[24.8,20.8,-27,-12],[24.8,20.8,27,-12],[9.8,8.8,-33,-2],[9.8,8.8,33,-2]])l.add("trim",ee([[.3,0],[.3,.6],[0,u]],kt(T,b,S,A),0,{cap:!0}));for(let T=0;T<5;T++)l.add("trim",V(23-T*.4,u-T*.2,.6,0,0,.8+T*.6));let m=T=>[...Me(6,4.5,{...g,y:12.2,h:2.9}),{...p,x:T*11},{...x,x:T*11}];l.take(sn(30,30,h,1.2,t,{front:Me(3,7.4,{y:0,w:6,h:13.4,kind:"cusped",sharp:.5,lobes:11,cusp:.035,fill:"open"}),right:m(1),left:m(-1),back:[...Me(5,5.4,{...p,w:2.6,h:4.6}),...Me(5,5.4,{...x,y:7.2,w:2.4,h:4.2}),...Me(6,4.5,{...g,y:12.2,h:2.9})]},u,a));for(let T of[-7.4,0,7.4])l.add("trim",cn("cusped",6,13.4,T,u+.02,0,{band:.85,proud:.22,outer:"pointed",sharp:.5,lobes:11,cusp:.035})),l.add("stripe",hd("pointed",6,13.4,T,u+.02,.26,{band:.85,sharp:.5}));for(let T of[-11.1,-3.7,3.7,11.1])l.add("trim",V(1.5,1.7,1.5,T,u,.5),gn(.52,6.6,T,u+1.7,.5,{sides:10,cap:.7}),V(1.7,.5,1.6,T,u+8.3,.45)),l.add("fine",Ze(.3,T,f+1.5,.2));let _=new nn().take(en(21.6,14,.6,t,Me(3,7.4,{...d,y:.5,w:3.6,h:9.6,on:1,style:1}),u).move(0,0,-5.2));for(let T of[-1,1])_.add("stone",An(V(.6,14,4.4,T*10.9,u,-3.2),t));_.add("trim",V(22.4,.5,4.6,0,u+13.9,-3.1));for(let T of["stone","trim"])for(let b of _.g[T])Sr(b,.6);l.take(_),o.light(-7.4,4,-2,Jt,.22,6).light(0,4,-2,Jt,.22,6).light(7.4,4,-2,Jt,.22,6);let y=kt(30,30,0,c);l.add("trim",ue(y,u+15.3,.25,.4),ue(y,f-.5,.5,.7),ee([[0,0],[0,1],[-.4,1]],kt(30.6,30.6,0,c),f+.2)),l.add("roof",V(30,.3,30,0,f,c)),l.add("fine",Be(kt(30.6,30.6,0,c),1.3,()=>V(.62,.5,.36,0,f+1.2,-.2),{inset:.6}),Be(y,.9,()=>V(.3,.3,.2,0,f-.82,.12),{inset:.5}));for(let[T,b]of[[-1,1],[1,1],[-1,-1],[1,-1]]){let S=T*14.7,A=c+b*14.7,I=Ge(1.8,8,S,A);l.add("stone",ee([[0,0],[0,19.6]],I,u,{tile:t}));for(let P of[6.4,12.4])l.add("trim",ue(I,u+P,.14,.28));l.add("trim",ue(I,u+19.6,.36,.55),ee([[.36,0],[.36,.2]],I,u+20.15,{cap:!0})),ud(l,1.9,S,u+20.35,A)}let v=28,w=12,M=13.4,E=[[w-.5,-.6]];for(let T=0;T<=22;T++){let b=T/22*Math.PI/2;E.push([Math.max(.01,w*Math.cos(b)),M*Math.sin(b)])}l.add("stone",ee([[0,0],[0,2],[-1,2]],Ge(14.2,8,0,c,0),f+.3,{tile:t}),ie(w,5.4,0,f+2.3,c,32,t)),l.add("trim",ue(Ge(14.2,8,0,c,0),f+2.1,.25,.35),ie(w+.3,.35,0,f+4.6,c,32),ie(w+.7,.4,0,v-1,c,32,null,w+.3),ie(w+.3,.3,0,v-.6,c,32)),l.add("shell",dn(E,{seg:48,tile:n}).translate(0,v,c));for(let T=0;T<16;T++){let b=(T+.5)/16*Math.PI*2;for(let[S,A,I]of[[.2,1.05,T%2===0],[.74,.5,!1]])Px(l,A,Math.atan2(w*Math.sin(S),M*Math.cos(S)),w*Math.cos(S),v+M*Math.sin(S),b,0,c,I)}l.add("trim",dn([[2.9,0],[3.1,.3],[2.2,.7],[.8,.95],[.4,1.5],[.6,1.9],[.25,2.3],[.1,3.1]],{seg:16}).translate(0,v+M-.3,c)),o.put(Cx(),de(.42,0,v+M+3,c,8),zt(new on(.5,.07,5,12)).translate(0,v+M+4,c),zt(new Ce(.05,.05,1.4,5)).translate(0,v+M+3.7,c));for(let[T,b]of[[-1,1],[1,1],[-1,-1],[1,-1]]){let S=T*10.3,A=c+b*10.3,I=[[4.1,-.3]];for(let P=0;P<=10;P++){let B=P/10*Math.PI/2;I.push([Math.max(.01,4.3*Math.cos(B)),4.7*Math.sin(B)])}l.add("stone",ee([[0,0],[0,2.2]],Ge(4.7,8,S,A),f+.3,{tile:t})),l.add("trim",ue(Ge(4.7,8,S,A),f+2.3,.2,.3)),l.add("shell",dn(I,{seg:20,tile:n}).translate(S,f+2.9,A)),l.add("fine",Ze(.5,S,f+7.5,A))}for(let T of[-1,1]){let b=T*27,S=kt(24,20,b,-12),A=u+11,I=[-10,-5.6,-1.2].map(it=>T*it),P=(it,_t)=>[...Me(it,_t,p),...Me(it,_t,x)];l.take(sn(24,20,11,.7,t,{front:I.flatMap(it=>[{...p,x:it},{...x,x:it}]),back:P(5,4.5),[T>0?"right":"left"]:P(4,4.5)},u,a).move(b,0,-2)),l.take(Ci(3.2,3.9,1.1,b+I[1],u+6.2,{roof:"dome",drop:1.1}).move(0,0,-2)),l.add("trim",ue(S,u+5.5,.2,.32),ue(S,A-.4,.4,.55),ee([[0,0],[0,.9],[-.35,.9]],kt(24.4,20.4,b,-12),A+.15)),l.add("roof",V(24,.3,20,b,A-.1,-12)),l.add("fine",Be(kt(24.4,20.4,b,-12),1.3,()=>V(.6,.42,.32,0,A+1.05,-.18),{inset:.6}),Be(S,.9,()=>V(.26,.26,.18,0,A-.66,.1),{inset:.5}));for(let it of[17.6,22,26.4])ud(l,1.5,T*it,A+1.05,-3.2,6,.9);let B=T*33,z=kt(9,8,B,-2),N=14.5,G=u+N,q=[...Me(2,3.4,{...p,w:1.7,h:3.6}),...Me(2,3.4,{...x,w:1.6,h:3.2}),{...g,x:0,y:10.6,w:2.4,h:3}];l.take(sn(9,8,N,.7,t,{front:[...Me(3,2.6,{y:.3,w:1.9,h:4,kind:"cusped",sharp:.4,lobes:5,cusp:.07,frame:.16,depth:.55,chance:.3}),...Me(3,2.6,{...g,y:6.2,h:3,chance:.6}),{x:0,y:10.2,w:5.2,h:3.7,kind:"pointed",sharp:.3,frame:.55,proud:.14,on:1,style:1}],right:q,left:q,back:[{...g,x:0,y:11}]},u,a).move(B,0,2)),l.add("stripe",hd("pointed",5.2,3.7,B,u+10.22,2.18,{band:.55,sharp:.3,seg:20})),l.add("trim",V(8.8,.24,1.3,B,u+5.8,2.65),ue(z,u+5.2,.16,.3),ue(z,u+9.7,.16,.3),ue(z,G-.4,.4,.55),ee([[0,0],[0,.9],[-.35,.9]],kt(9.4,8.4,B,-2),G+.15)),l.add("roof",V(9,.3,8,B,G-.1,-2)),l.add("fine",[-3.6,-1.2,1.2,3.6].map(it=>Ke(1.2,.8,.2,u+5.8).translate(B+it,0,2)),jn([B-4.3,3.2],[B+4.3,3.2],u+6.04,{h:.9}),jn([B-4.3,2.1],[B-4.3,3.2],u+6.04,{h:.9}),jn([B+4.3,3.2],[B+4.3,2.1],u+6.04,{h:.9})),l.add("fine",Be(kt(9.4,8.4,B,-2),1.3,()=>V(.6,.42,.32,0,G+1.05,-.18),{inset:.6}));let K=[[3.2,-.2]];for(let it=0;it<=10;it++){let _t=it/10*Math.PI/2;K.push([Math.max(.01,3.4*Math.cos(_t)),4*Math.sin(_t)])}l.add("stone",ee([[0,0],[0,1.9]],Ge(3.8,8,B,-2),G+.2,{tile:t})),l.add("trim",ue(Ge(3.8,8,B,-2),G+2,.2,.3)),l.add("shell",dn(K,{seg:32,section:it=>1-.05*(Math.cos(it*16)>0?1:0),tile:n}).translate(B,G+2.6,-2)),l.add("fine",Ze(.46,B,G+6.5,-2));for(let it of[B-4.6,B+4.6]){let _t=Ge(.95,8,it,2.1);l.add("stone",ee([[0,0],[0,N+1.4]],_t,u,{tile:t})),l.add("trim",ue(_t,G+1.4,.2,.35),yn(1.05,1.5,it,G+1.75,2.1,{seg:10,finial:.5}))}}l.into(o,s);for(let T=-36;T<=36;T+=9)o.light(T,.6,16,Jt,.2,15);for(let T of[-1,1])o.light(T*50,.8,-12,Jt,.16,14).light(T*24,.8,-36,Jt,.12,14).light(T*33,12,12,Jt,.14,9);return o.light(0,.8,-44,Jt,.12,14).light(0,26,14,Jt,.3,15).light(0,38,8,Jt,.24,13).light(-26,34,c,Jt,.22,14).light(26,34,c,Jt,.22,14).light(0,34,-42,Jt,.18,14).light(-16,24,4,Jt,.14,8).light(16,24,4,Jt,.14,8),o.put(an(),Ye(46,22,0,0,-13)),o}var Ix=i=>Array.from({length:i},(t,e)=>jr(e+31)),dd=()=>te(1.9,1.35,.42),Dx=(i,t)=>(i.g[t]=i.g.stone,delete i.g.stone,i);function pd(){let i=In("museum-brick",{stone:[142,68,52],course:.17,block:.5,rows:16,cols:8,joint:1.1,vary:.18,grime:.18,bands:Object.assign([],{0:[168,150,120]})}),t=i.userData.tile,e=dc("museum",[150,80,58]),n=e.userData.tile,r=In("museum-tilework",{stone:[182,170,138],course:.3,block:.6,rows:8,cols:8,joint:.86,vary:.06,grime:.1,bands:[null,[112,134,108],null,[168,150,120],null,[112,134,108],null,[150,92,70]]}),s=Mt({tint:12166792}),o={stone:i,tilework:r,trim:s,fine:Mn(12166792),glass:Hi(),wood:Er("museum",[96,60,36]),dark:Mt({tint:1511951}),roof:e,timber:Mt({tint:4862498}),beam:Mn(4862498)},a=new ye,l=we(61),c=we(62),u=new nn,h=.9,f=7,d=h+f+.4,p=d+4.9,x=-8,g=kt(33.2,16,0,x),m={kind:"segment",frame:.2,sill:!0,y:1.2,w:2.3,h:4.4},_={kind:"flat",frame:.14,w:1.1,h:3.1,y:.9},y={kind:"round",frame:.14,w:1.25,h:2.5,y:.6,chance:.55},v=[8.2,11.55,14.9];u.add("trim",ee([[.4,0],[.4,.5],[0,h]],kt(49,20,0,x),0,{cap:!0})),u.take(sn(33.2,16,f+.4,.6,t,{front:[-1,1].flatMap(S=>v.map(A=>({...m,x:S*A}))),back:[-1,1].flatMap(S=>v.map(A=>({...m,x:S*A})))},h,c).move(0,0,0)),u.take(sn(33.2,16,4.9,.5,t,{front:[-1,1].flatMap(S=>[9.9,13.2].map(A=>({..._,x:S*A}))),back:[-1,1].flatMap(S=>[8.2,9.9,11.55,13.2,14.9].map(A=>({..._,x:S*A})))},d,c)),u.add("trim",ue(g,h+f-.1,.22,.4),ee([[0,0],[.07,0],[.07,.16],[0,.16]],g,d+2.6),Be(g,1.66,()=>V(.16,4.9,.09,0,d,.03))),u.add("roof",ee([[0,1],[1.5,0],[1.5,.12],[0,1.16]],kt(30.2,16,0,x),d+.1,{tile:n}),ee([[.9,-.25],[-8,7.3]],kt(46,16,0,x),p,{tile:n})),u.add("timber",rn(g,p-.3,.9,.2,.12)),u.add("beam",Be(g,1.66,()=>Ke(1.15,.85,.14,d+.95)),Be(g,1.66,()=>Ke(.75,.6,.12,p-.15)));for(let S of[-1,1])for(let A of v){let I=S*A,P=d+1.1,B=5.3;u.take(en(2.6,B,.45,t,[{kind:"flat",frame:.16,x:0,y:.7,w:1.6,h:3.8,sill:!0,chance:.6}],P,c).move(I,0,1.1));for(let z of[-1,1])u.add("stone",An(V(.45,B,1.1,I+z*1.075,P,.55),t)),u.add("trim",V(.18,B,.12,I+z*1.21,P,1.11));u.add("roof",ee([[.5,-.25],[-1.3,1.9]],kt(2.6,5.2,I,-1.5),P+B,{tile:n})),u.add("timber",ee([[0,0],[.45,0],[.45,.12],[0,.12]],kt(2.6,1.1,I,.55),P+B-.2)),u.add("fine",Ze(.18,I,P+B+1.8,-.2))}let w=kt(13,18.6,0,-7.7),M=h+f+.3,E=M+4.7,T=E+3.7;u.take(sn(13,18.6,f+.3,.7,t,{front:[{x:0,y:0,w:3.4,h:5.5,kind:"round",fill:"door",frame:.4,proud:.14,depth:.6},{...m,x:-5.25,w:1.7},{...m,x:5.25,w:1.7}],back:Me(3,4,{...m,w:1.9})},h,c).move(0,0,1.6)),u.take(sn(13,18.6,4.7,.5,t,{front:Me(3,5.3,{..._,w:1.5,h:3.3,y:.8,chance:.7}),back:Me(3,3.9,{..._,w:1.7,h:3.3,y:.8})},M,c).move(0,0,1.6)),u.take(sn(13,18.6,3.7,.5,t,{front:[-5.3,-1.1,1.1,5.3].map(S=>({...y,x:S})),back:Me(4,3,y)},E,c).move(0,0,1.6)),u.add("trim",ue(w,M-.4,.24,.4),ue(w,E-.3,.18,.3),Be(w,1.86,()=>V(.16,4.7,.09,0,M,.03)),Be(w,1.86,()=>V(.16,3.7,.09,0,E,.03))),u.add("timber",rn(w,T-.3,1,.22,.12)),u.add("beam",Be(w,1.3,()=>Ke(.85,.65,.12,T-.15))),u.add("roof",ee([[1,-.28],[-6.5,6.3]],w,T,{tile:n})),u.add("fine",Ze(.3,0,T+6.2,-4.9),Ze(.3,0,T+6.2,-10.5));for(let S=0;S<5;S++)u.add("trim",V(7-S*.3,h-S*.18,.7,0,0,1.95+S*.7));{let S=new Tn;S.moveTo(-2.45,0),S.lineTo(2.45,0),S.lineTo(2.45,2.7),S.absarc(0,2.7,2.45,0,Math.PI,!1),S.lineTo(-2.45,0);let A=new Ti(S,{depth:.6,bevelEnabled:!1,curveSegments:14}),I=T-.2;u.add("trim",zt(A).translate(0,I,1.3),zt(new on(1.35,.18,5,18)).translate(0,I+2.7,1.98),V(5.6,.3,.9,0,I-.05,1.6),Ze(.36,0,I+5.1,1.6)),u.add("dark",qe("circle",2.6,2.6,0,I+1.4,1.96,{uv:"plain",shade:1})),u.add("fine",zt(new on(.5,.1,4,10)).translate(0,I+2.7,2));for(let P=0;P<8;P++)u.add("fine",zt(new Ue(.13,.74,.1)).translate(0,.9,0).rotateZ(P*Math.PI/4).translate(0,I+2.7,1.99))}for(let S of[-1,1]){let A=S*3.3,I=1,P=kt(1.7,1.7,A,I),B=26.6;u.add("stone",ee([[0,0],[0,B-h]],P,h,{tile:t}));for(let z of[M-.4,E-.3,T-.2,20.4,23.6])u.add("trim",ue(P,z,.14,.28));u.add("trim",ue(P,B,.32,.5),ee([[.32,0],[.32,.15]],P,B+.5,{cap:!0}));for(let[z,N]of[[-1,-1],[1,-1],[-1,1],[1,1]])u.add("fine",V(.2,1.3,.2,A+z*.78,B+.65,I+N*.78));u.add("trim",V(2.3,.18,2.3,A,B+1.95,I),yn(.95,1,A,B+2.13,I,{seg:10,swell:.05,finial:0})),u.add("fine",Ze(.22,A,B+3.1,I)),a.put(dd(),zt(new hn(.16,6,5)).translate(A,B+3.75,I))}for(let S of[-1,1]){let A=S*20.4,I=kt(7.6,18,A,x),P=S>0?"right":"left",B=h+f+.3,z=B+4.2,N=z+3.7;u.take(sn(7.6,18,f+.3,.7,t,{front:[{...m,x:0,w:2.7}],back:[{...m,x:0,w:2.7}],[P]:Me(4,3.9,m)},h,c).move(A,0,1)),u.take(Dx(sn(7.6,18,4.2,.5,r.userData.tile,{front:Me(2,2.8,{..._,w:1.3,h:2.8,y:.8,chance:.6}),back:Me(2,2.8,{..._,w:1.3,h:2.8,y:.8}),[P]:Me(4,3.9,{..._,w:1.3,h:2.8,y:.8})},B,c),"tilework").move(A,0,1)),u.take(sn(7.6,18,3.7,.5,t,{front:Me(2,2.3,y),back:Me(2,2.3,y),[P]:Me(8,2,y)},z,c).move(A,0,1)),u.add("trim",ue(I,B-.4,.24,.4),ue(I,z-.3,.18,.3));for(let[G,q]of[[-1,-1],[1,-1],[-1,1],[1,1]])u.add("trim",V(.34,N-B,.34,A+G*3.72,B,x+q*8.92));u.add("timber",rn(I,N-.3,1.1,.24,.12)),u.add("beam",Be(I,1.25,()=>Ke(.95,.7,.12,N-.15))),u.add("roof",ee([[1.1,-.3],[-3.8,5]],I,N,{tile:n}));for(let G of[x-5.2,x+5.2])u.add("fine",Ze(.3,A,N+4.9,G)),a.put(dd(),zt(new hn(.14,6,5)).translate(A,N+5.75,G))}u.into(a,o);let b=Ix(8);for(let S=0;S<10;S++)a.stamp(b[l()*8|0],(l()-.5)*36,6+l()*7,l()*6.28,1,0);for(let S=-21.6;S<=21.6;S+=7.2)a.light(S,.6,11,At,.2,13);for(let S of[-1,1])a.light(S*36,.8,-4,At,.14,12).light(S*36,.8,-13,At,.12,12).light(S*12,.8,-28,At,.1,12).light(S*20.4,14,9,At,.14,8);return a.light(0,20,9,At,.22,10).light(0,5,5,Jt,.28,6).light(0,26,6,At,.16,7).light(-11.5,17,9,At,.16,9).light(11.5,17,9,At,.16,9),a.put(an(),Ye(30,13,0,0,-7)),a}var Nx=()=>te(1.8,1.4,.8);function md(){let i=Mt({tint:12035980}),t=Mt({tint:3354926}),e=Mt({tint:3355965}),n=new ye;n.put(i,Ri(7,.6,10,0,0,0),V(3.6,5,6.6,0,.6,0),V(4.4,.5,7.4,0,5.6,0),V(3.2,.5,6,0,6.1,0));let r=6.6,s=o=>n.put(t,o);s(zt(new hn(1,12,10)).scale(.95,1.05,2.3).translate(0,r+3.2,0)),s(ce([0,r+3.7,1.7],[0,r+5.5,2.8],.55,8)),s(zt(new hn(.5,8,6)).scale(.8,.85,1.5).translate(0,r+5.7,3.4));for(let[o,a,l]of[[-.55,1.5,.7],[.55,1.5,0],[-.55,-1.6,0],[.55,-1.6,0]])s(ce([o,r+2.6,a],[o,r+1.3+l,a+(l?.7:.1)],.24,6)),s(ce([o,r+1.3+l,a+(l?.7:.1)],[o,r+l*1.2,a+(l?.3:0)],.19,6));s(ce([0,r+3.6,-2.1],[0,r+1.9,-2.9],.2,6)),s(ce([0,r+4,.1],[0,r+5.9,0],.5,8)),s(de(.42,0,r+6.5,.05,8)),s(zt(new hn(.5,8,6)).scale(1,.5,1).translate(0,r+6.85,0)),s(ce([-.5,r+5.5,.1],[-.6,r+4.4,1.2],.15,5)),s(ce([.5,r+5.5,.1],[.6,r+4.4,1.2],.15,5));for(let o=0;o<16;o++){let a=o*Math.PI/8,l=Math.cos(a)*6.4,c=Math.sin(a)*6.4;n.put(e,V(.12,1.1,.12,l,.6,c))}n.put(e,zt(new on(6.4,.05,4,32)).rotateX(Math.PI/2).translate(0,1.7,0));for(let[o,a]of[[-4.6,6],[4.6,6],[-4.6,-6],[4.6,-6]])n.put(e,V(.14,3.4,.14,o,.6,a)),n.put(Nx(),de(.3,o,4.2,a,8)),n.light(o,4.2,a,At,.7,5,2);return n.light(0,2,8,Jt,.7,8).light(0,2,-8,Jt,.4,8),n}function Zh(i=4){let t=Mt({tint:6969414}),e=br([30,70,46],"in"),n=e,r=Mt({tint:10524292}),s=new ye,o=we(i);s.put(r,ie(8.5,1.1,0,0,0,20),ie(9.3,.3,0,1.1,0,20));for(let a=0;a<7;a++){let l=o()*6.28,c=a?1.2+o()*3:0,u=Math.cos(l)*c,h=Math.sin(l)*c;s.put(t,ce([u,1.2,h],[u*1.9+(o()-.5)*2,11+o()*3,h*1.9+(o()-.5)*2],a?.5+o()*.5:1.3,7))}for(let a=0;a<9;a++){let l=a/9*6.28+o(),c=9+o()*9;s.put(t,ce([Math.cos(l)*2,10,Math.sin(l)*2],[Math.cos(l)*c,11.5+o()*3,Math.sin(l)*c],.34,5))}for(let a=0;a<9;a++){let l=o()*6.28,c=3+o()*11;s.put(e,ir(4.6+o()*2,Math.cos(l)*c,14.5+o()*3,Math.sin(l)*c,a,.6,3.4))}s.put(zi([44,100,62],"a"),Xo(0,16.6,0,20,6.4,20,130,i,4.6)),s.put(zi([58,116,70],"b"),Xo(0,17.6,0,15,5.4,15,60,i+3,4.2)),s.put(an(),Ye(24,24,0,0,0));for(let a=0;a<46;a++){let l=o()*6.28,c=5+o()*13,u=Math.cos(l)*c,h=Math.sin(l)*c,f=11+o()*2;s.put(t,ce([u,f,h],[u+(o()-.5)*.6,c>9.5?0:1.3+o()*5,h+(o()-.5)*.6],.05+o()*.07,4))}for(let a=0;a<16;a++){let l=o()*6.28,c=3+o()*13,u=Math.cos(l)*c,h=Math.sin(l)*c,f=6.5+o()*3.5;s.put(t,ce([u,f,h],[u,11.5,h],.03,3)),s.put(te(2,1.3,.5),de(.24,u,f,h,6)),s.light(u,f,h,Jt,.5,4.2,1.9)}return s.light(0,2.4,7,Jt,.5,8).light(0,2.4,-7,Jt,.4,8),s}function gd(){let i=Mt({tint:2906682}),t=Mt({tint:12035980}),e=Mt({tint:14866626}),n=Mt({tint:3158586}),r=Mt({tint:4864556}),s=[te(1.6,.5,.6),te(1.7,1.3,.3),te(1,.5,1.5)],o=new ye;o.put(i,ie(34,.3,0,0,0,40)),o.put(t,ie(27.2,.36,0,0,0,40)),o.put(i,ie(24.8,.42,0,0,0,40));for(let a=0;a<72;a++){let l=a/72*6.283;o.put(r,zt(new Ue(2,.12,.34)).rotateY(-l).translate(Math.cos(l)*26,.42,Math.sin(l)*26))}for(let a of[25.4,26.6])o.put(n,zt(new on(a,.06,4,96)).rotateX(Math.PI/2).translate(0,.52,0));o.put(e,ie(6.4,1.1,0,.4,0,8),ie(7.4,.4,0,6.2,0,8),yn(6.6,3.4,0,6.6,0,{seg:16,swell:.02})),o.put(te(1.9,1.35,.42),de(.34,0,11.4,0,8));for(let a=0;a<8;a++){let l=(a+.5)*Math.PI/4;o.put(e,ie(.24,4.7,Math.cos(l)*5.6,1.5,Math.sin(l)*5.6,8)),o.put(te(1.8,1.4,.8),de(.22,Math.cos(l)*5.6,5.6,Math.sin(l)*5.6,6))}o.light(0,5,0,Jt,1.1,8,3).light(0,3,9,Jt,.5,8),o.put(i,zt(new Ce(6,6,.5,28)).rotateX(.5).translate(0,1.5,15.5));for(let a=0;a<12;a++){let l=a/12*6.283;o.put(s[a%3],de(.34,Math.sin(l)*4.8,1.75+Math.cos(l)*2.3,15.9-Math.cos(l)*4.2+4.1,6))}o.put(e,zt(new Ue(.2,.1,3.4)).rotateX(.5).translate(0,2.4,14.4),zt(new Ue(2.4,.1,.2)).rotateX(.5).translate(1.2,1.8,15.6)),o.light(0,5,20,At,.9,8,3);for(let a=0;a<16;a++){let l=a/16*6.283,c=Math.cos(l)*31,u=Math.sin(l)*31;o.put(n,ce([c,.3,u],[c,4.6,u],.07,4)),o.put(te(1.8,1.4,.8),de(.26,c,4.8,u,6)),o.light(c,4.8,u,At,.7,5.5,3.2)}return o}function xd(){let i=new Rn,t=[];return[[12597547,1],[3046747,0],[14262305,0],[3104680,0]].forEach(([e,n],r)=>{let s=new Rn,o=new Ie({color:new Vt(e).multiplyScalar(.7)}),a=new Ie({color:15260864}),l=new Ie({color:1381914}),c=new le(new Ue(1.6,n?1.5:.9,3.2),o);if(c.position.y=n?1.25:.95,s.add(c),n){let u=new le(new Ce(.6,.6,1.8,10).rotateX(Math.PI/2),o);u.position.set(0,1.5,1.9),s.add(u);let h=new le(new Ce(.22,.16,.9,8),l);h.position.set(0,2.5,2.3),s.add(h);let f=new le(new hn(.2,8,6),new Ie({color:new Vt(3,2.6,1.8)}));f.position.set(0,1.6,2.9),s.add(f)}else{let u=new le(new Ue(1.8,.12,3.3),a);u.position.y=2.6,s.add(u);for(let[f,d]of[[-.75,-1.5],[.75,-1.5],[-.75,1.5],[.75,1.5]]){let p=new le(new Ue(.08,1.3,.08),a);p.position.set(f,2,d),s.add(p)}let h=new le(new Ue(1.5,.08,3),new Ie({color:new Vt(2.4,1.7,.8)}));h.position.y=2.5,s.add(h)}for(let u of[-1,1]){let h=new le(new Ce(.36,.36,1.8,10).rotateZ(Math.PI/2),l);h.position.set(0,.5,u),s.add(h)}i.add(s),t.push(s)}),{g:i,cars:t}}var Fx=i=>{let t=(i%360+360)%360;return t>204&&t<336};function _d(){let i=new ye,t=we(5),e={u:8*3.3,v:8*3.2},n=[[84,90,110],[104,94,84],[72,84,104],[112,104,96]].map((M,E)=>{let T=hc({seed:40+E,lit:.13+E*.04,wall:M});return Mt({map:T.map,emissiveMap:T.emissiveMap,glow:1.3,key:"block"+E})}),r=Qn(Mt({tint:4869208})),s=Qn(Mt({tint:1842468})),o=Qn(Mt({tint:6975356})),a=Qn(Mt({tint:3158586})),l=[te(1.9,1.2,.5),te(1.8,.35,.3),te(.4,1.6,1.4),te(1.7,.5,1.1),te(1.5,1.6,1.8),te(.5,1.5,.5)],c=[Jt,ac,li,Oi,Kn,li],u=0;for(let M=0;M<620&&u<430;M++){let E=t()*360,T=t()<.36,b=T?Lt+32+t()*10:Lt+44+t()*t()*420,S=Ae(E,b);if(Fx(E)&&b<Lt+150||!qs(S.x,S.z,12))continue;let A=10+t()*22,I=9+t()*16,P=T?7+t()*9:6+t()*t()*(b>Lt+130?52:24),B=t()*4|0,z=Math.atan2(-Math.cos(E*$e),Math.sin(E*$e))+(t()-.5)*.4,N=new ye;if(N.put(n[B],Vs(A,P,I,0,0,-I/2,e,t()*3)),N.put(r,V(A+.5,.5,I+.5,0,P,-I/2)),t()<.7){let G=(t()-.5)*(A-4),q=-I/2+(t()-.5)*(I-4);N.put(o,V(2.2,1.1,2.2,G,P+.5,q)),N.put(s,ie(.9,1.5,G,P+1.6,q,10))}if(t()<.6&&N.put(n[B],V(3,2.6,3.4,(t()-.5)*(A-5),P+.5,-I/2+(t()-.5)*(I-5))),t()<.3){let G=(t()-.5)*(A-2);N.put(a,ce([G,P,-I/2],[G,P+4+t()*3,-I/2],.04,3))}if(t()<.25)for(let G=0;G<3;G++)N.put(o,V(.9,.6,.5,-A/2+2+G*3,3+G*3.2,.25));if(T||t()<.2){let G=t()*6|0;N.put(te(.62,.42,.2),V(A-1.2,2.3,.08,0,.4,.05)),N.put(r,V(A,.2,1.6,0,3,.8));for(let q=0;q<1+(t()*3|0);q++)N.put(l[(G+q)%6],V(2.4+t()*3,.9,.12,(t()-.5)*(A-5),3.3+t()*1.2,.12));N.light(0,2,2.6,c[G],.7,7).light(0,2,2.6,Jt,.5,9)}i.stamp(N,S.x,S.z,z,1,1.5),u++,t()<.2&&i.light(S.x+(t()-.5)*14,4.5,S.z+(t()-.5)*14,At,.5,9,3.4)}let h=Mt({tint:13351322}),f=Mt({tint:14672614}),d=Mt({tint:4160092}),p=te(1.9,1.35,.42),x=Mt({tint:9080988}),g=(M,E,T)=>{let b=Ae(M,E);qs(b.x,b.z,6)&&i.stamp(T(),b.x,b.z,Math.atan2(-Math.cos(M*$e),Math.sin(M*$e)),1,1.5)},m=()=>{let M=new ye,E=[];for(let T=0;T<=12;T++){let b=T/12;E.push(new mt(Math.max(.3,3.4*(1-Math.pow(b,1.7)*.93)),11*b))}return M.put(h,V(8,5,8,0,0,0),zt(new si(E,10)).translate(0,5,0),V(5,4,5,0,0,5.5),Wn(3.6,3,0,4,5.5,4)),M.put(p,de(.4,0,16.4,0,8)),M.put(te(1.7,.6,.2),V(1.2,.8,.04,.7,17.6,0)),M.put(x,ce([0,16.4,0],[0,18.4,0],.04,3)),M.light(0,3,9,Jt,.7,9).light(0,9,5,Jt,.5,8,3),M},_=()=>{let M=new ye;return M.put(f,V(12,6,12,0,0,0),ie(4.2,1.2,0,6,0,12),yn(4.2,4.6,0,7.2,0,{seg:16,swell:.06}),ie(1,19,7.5,0,5,8),ie(1.5,.5,7.5,13,5,8),ie(1.5,.5,7.5,17,5,8)),M.put(d,Wn(1.2,3,7.5,19,5,8)),M.put(p,de(.3,7.5,22.2,5,6),de(.34,0,12.6,0,6)),M.put(te(.5,1.7,.8),V(.5,1.2,.5,7.5,14,5)),M.light(0,3,9,li,.5,9).light(7.5,15,5,li,.6,6,3.2),M},y=()=>{let M=new ye;for(let[E,T]of[[-2.6,-2.6],[2.6,-2.6],[-2.6,2.6],[2.6,2.6]])M.put(f,ce([E,0,T],[E*.8,17,T*.8],.32,6));for(let E of[6,12])M.put(f,V(5.4,.3,.3,0,E,2.4),V(5.4,.3,.3,0,E,-2.4),V(.3,.3,5.4,2.4,E,0),V(.3,.3,5.4,-2.4,E,0));return M.put(f,ie(4.6,5,0,17,0,14,null,5.2),Wn(5.4,1.6,0,22,0,14)),M.light(0,2,6,At,.4,9),M},v=()=>{let M=new ye;for(let[E,T]of[[-1.5,-1.5],[1.5,-1.5],[-1.5,1.5],[1.5,1.5]])M.put(x,ce([E,0,T],[E*.2,44,T*.2],.09,4));for(let E=4;E<44;E+=5){let T=1.5*(1-E/55);M.put(x,ce([-T,E,-T],[T,E+5,-T],.05,3),ce([T,E,T],[-T,E+5,T],.05,3),ce([T,E,-T],[T,E+5,T],.05,3),ce([-T,E,T],[-T,E+5,-T],.05,3))}for(let E of[30,36,40])M.put(f,V(.5,2,.3,.9,E,0),V(.5,2,.3,-.9,E,0));return M.spark(0,45,0,ac,5,2).spark(0,24,0,ac,3.4,2),M},w=M=>()=>{let E=new ye,T=we(M),b=T()*6|0;for(let S of[-4.5,4.5])E.put(x,ce([S,0,0],[S,13,0],.16,5));return E.put(x,V(11.4,5.6,.3,0,8.4,-.2)),E.put(te(.5,.52,.6),V(11,5.2,.1,0,8.6,.05)),E.put(l[b],V(11,1.6,.12,0,8.6,.08),V(3,3.4,.12,-3.2,10.4,.08)),E.light(0,11,5,c[b],.8,10).light(0,9,4,Kn,.5,9),E};for(let[M,E]of[[20,96],[74,150],[112,170],[146,110],[176,84],[60,240],[128,250],[-12,130]])g(M,Lt+E,m);for(let[M,E]of[[32,128],[100,220],[166,150],[-24,100]])g(M,Lt+E,_);for(let[M,E]of[[24,200],[140,200],[84,280]])g(M,Lt+E,y);for(let[M,E]of[[40,170],[118,130],[158,230],[4,210],[78,330]])g(M,Lt+E,v);return i}function vd(){let i=new ye,t=Mt({tint:9208696}),e=Mt({tint:11818558}),n=Mt({tint:9322544}),r=Mt({tint:13220256}),s=Mt({tint:3158586}),o=te(1.9,1.4,.8),a=te(1.7,.7,.15);i.put(t,Ri(58,1,22,0,3.2,0),Ri(62,.5,26,0,4.2,0));for(let _=-26;_<=26;_+=6.5)for(let y of[-9,9])i.put(t,ie(.55,3.4,_,-.2,y,8));for(let _=0;_<7;_++)i.put(t,V(14-_*.2,4.8-_*.55,1.2,0,-.6,11.6+_*1.2));for(let _=-30.5;_<=30.5;_+=1.9)for(let y of[-12.6,12.6])(Math.abs(_)>7.5||y<0)&&i.put(s,V(.12,1.1,.12,_,4.7,y));for(let _=-12.6;_<=12.6;_+=1.8)for(let y of[-30.5,30.5])i.put(s,V(.12,1.1,.12,y,4.7,_));for(let _ of[-12.6,12.6])i.put(s,V(61,.07,.07,0,5.75,_));for(let _ of[-30.5,30.5])i.put(s,V(.07,.07,25.2,_,5.75,0));let l=In("granite",{stone:[112,116,124],course:.9,block:1.5,rows:4,cols:2,joint:.78,vary:.08,grime:.08}),c=l.userData.tile,u=Mt({tint:8159368}),h=Mt({tint:12622404});i.put(l,ee([[.55,0],[.55,.5],[.22,.72],[.22,.95],[0,.95],[0,5.3]],kt(11.8,11.8),4.7,{tile:c}),ee([[0,0],[0,5]],kt(9.2,9.2),10.9,{tile:c})),i.put(u,ue(kt(11.8,11.8),10,.45,.6),V(11.2,.3,11.2,0,10.6,0),ue(kt(9.2,9.2),15.9,.55,.55),V(10.3,.25,10.3,0,16.45,0));for(let[_,y]of[[0,1],[0,-1],[1,0],[-1,0]]){let v=Math.atan2(_,y),w=(M,E)=>M.rotateY(v).translate(_*E,0,y*E);i.put(u,w(V(4.4,2.7,.14,0,6.5,0),5.9),w(V(6.4,3,.1,0,11.8,0),4.6)),i.put(h,w(V(3.8,2.1,.06,0,6.8,0),5.99)),i.put(te(1.9,1.5,.9),w(V(8.8,.1,.08,0,15.72,0),4.66))}i.light(0,14.6,7,At,.3,4).light(0,14.6,-7,At,.2,4).light(7,14.6,0,At,.2,4).light(-7,14.6,0,At,.2,4);for(let[_,y]of[[-24,8],[24,8],[-24,-8],[24,-8],[-12,10.5],[12,10.5]])i.put(r,ie(.5,5.2,_,4.7,y,8),ie(.8,.3,_,9.8,y,8)),i.put(o,de(.4,_,10.5,y,10)),i.light(_,10.6,y,At,.9,7,4.6);for(let _ of[-28,28])i.put(s,ce([_,4.7,-10],[_,13.5,-10],.07,4)),i.put(a,V(2.6,1.5,.06,_+1.35,11.9,-10));for(let _ of[-52,52])for(let y of[26,-22]){for(let v=0;v<4;v++){i.put(r,ie(1.9-v*.3,.5,_,2.2+v*2.6,y,10));for(let w=0;w<6;w++){let M=w*Math.PI/3;i.spark(_+Math.cos(M)*(1.9-v*.3),2.9+v*2.6,y+Math.sin(M)*(1.9-v*.3),Jt,1.3,1)}}i.put(r,ie(.55,11,_,0,y,8)),i.put(o,de(.5,_,11.5,y,10)),i.light(_,11.6,y,At,.9,7,5)}i.light(0,6,15,Jt,.7,11).light(-11,5,12,Jt,.5,8).light(11,5,12,Jt,.5,8);let f=Mt({tint:14272162}),d=Mt({tint:15262938});i.put(f,V(2.2,.7,3.4,0,4.7,10)),i.put(d,zt(new hn(1,10,8)).scale(.72,.6,1.25).translate(0,6,10.1),de(.4,0,6.55,9.75,8),de(.42,0,6.5,8.75,8),zt(new hn(1,8,6)).scale(.26,.24,.42).translate(0,6.3,8.35),Wn(.07,.3,-.22,6.82,8.8,5),Wn(.07,.3,.22,6.82,8.8,5));for(let[_,y,v]of[[-20,9.5,.9],[20,9.5,-.9],[-21,-8,2.2],[21,-8,-2.2]]){let w=new Fe().makeRotationY(v).setPosition(_,0,y),M=(E,T)=>i.put(E,T.applyMatrix4(w));M(f,V(2,.6,3.1,0,4.7,0)),M(d,zt(new hn(1,10,8)).scale(.66,.55,1.15).translate(0,5.85,.1)),M(d,de(.38,0,6.35,-1.2,8)),M(d,zt(new hn(1,8,6)).scale(.24,.22,.4).translate(0,6.15,-1.6)),M(d,de(.36,0,6.4,-.3,8))}i.light(0,7.4,11.4,Jt,.6,3.2);for(let _ of[-13.5,13.5]){i.put(r,ie(.7,.5,_,4.7,9.6,8),ie(.42,7.4,_,5.2,9.6,8,null,.26)),i.put(o,de(.36,_,12.9,9.6,8));for(let y=0;y<6;y++){let v=.95-y*.1,w=6+y*1.1;i.put(r,ie(v,.12,_,w,9.6,8));for(let M=0;M<6;M++){let E=M*Math.PI/3+y*.5;i.spark(_+Math.cos(E)*v,w+.3,9.6+Math.sin(E)*v,Jt,1,1)}}i.light(_,9,9.6,Jt,.6,5)}let p=br([52,108,66],"b"),x=Mt({tint:10835258}),g=Array.from({length:8},(_,y)=>jr(y+51)),m=we(14);for(let _=-27;_<=27;_+=4.5)for(let y of[-11.4,11.4])(Math.abs(_)>8||y<0)&&(i.put(x,ie(.4,.6,_,4.7,y,7,null,.5)),i.put(p,ir(.62,_,5.9,y,_,1)));for(let _=0;_<16;_++){let y=(m()-.5)*54,v=(m()<.7?1:-1)*(9.8+m()*1.2);Math.abs(y)<2.6||i.stamp(g[m()*8|0],y,v,m()*6.28,1,4.7)}return i.put(an(),Ye(10.5,10.5,0,4.7,0)),i}function yd(i){let t=new ye,e=we(77),n=Mt({tint:9208696});for(let o=0;o<150;o++){let a=e()*6.28,l=52+e()*80;t.spark(Math.cos(a)*l,.35,Math.sin(a)*l,Jt,1.25,3)}for(let o of i.concat([114,66,41,-27,144,180]))for(let a=0;a<12;a++){let l=Ae(o+(e()-.5)*8,Lt-8-e()*16);t.spark(l.x,.35,l.z,Jt,1.35,3)}for(let o=0;o<46;o++){let a=e()*6.28,l=36+e()*12;t.spark(Math.cos(a)*l*1.3,.35,Math.sin(a)*l,Jt,1.3,3)}let r=-78,s=-46;t.put(n,ie(1.2,1.4,r,0,s,10));for(let o=0;o<10;o++){let a=o/10*6.28;for(let l=0;l<9;l++){let c=l/8,u=6-c*5.2;t.spark(r+Math.cos(a)*u,.6+Math.sin(c*Math.PI*.62)*7.5,s+Math.sin(a)*u,[Kn,li,Oi][o%3],1.6,1)}}for(let o=0;o<16;o++)t.spark(r+(e()-.5)*.6,1.5+o*.95,s+(e()-.5)*.6,Kn,1.9,1);return t.light(r,2,s,li,.9,8),t}function Md(i){let t=[],e=ci(64);return[[14240570,86,44,.05,.3],[3837913,-64,78,-.04,2.1],[14856762,30,-84,.045,4],[4829306,-98,-8,-.05,5.2],[15262418,100,-52,.04,1.2]].forEach(([n,r,s,o,a])=>{let l=new Rn,c=new Ie({color:new Vt(n).multiplyScalar(.55)}),u=new Ie({color:new Vt(n).multiplyScalar(.85)}),h=new le(new hn(1,12,6,0,Math.PI*2,Math.PI/2,Math.PI/2).scale(1.3,.8,2.2),c);h.position.y=.7,l.add(h);let f=new le(new Ue(2.3,.14,2.8),u);f.position.y=2.5,l.add(f);for(let[p,x]of[[-1,-1.2],[1,-1.2],[-1,1.2],[1,1.2]]){let g=new le(new Ce(.05,.05,1.8),c);g.position.set(p,1.6,x),l.add(g)}let d=new pi(new ii({map:e,color:16760944,blending:fn,depthWrite:!1,transparent:!0}));d.scale.set(5,5,1),d.position.set(0,2.2,0),l.add(d),l.scale.setScalar(1.5),i.add(l),t.push({g:l,cx:r,cz:s,speed:o,phase:a,rx:16+Math.abs(r)*.1,rz:11})}),t}function bd(){let i=new Rn,t=Gs("#1f7480","#185e68",12,!1),e=new Ie({map:t,color:13158600}),n=new Ie({color:12159566}),r=new Ie({color:4007959}),s=new Ie({color:new Vt(3,2,.9)}),o=new Ie({map:Gs("#b33a2e","#efe6d2",8),color:10263708,side:un}),a=new le(new hn(1,20,10,0,Math.PI*2,Math.PI/2,Math.PI/2).scale(1.75,1.15,5.4),e);a.position.y=1,i.add(a);let l=new le(new Cn(1,24).rotateX(-Math.PI/2).scale(1.62,1,5.2),r);l.position.y=.86,i.add(l);let c=new le(new on(1,.07,6,40).rotateX(Math.PI/2).scale(1.75,1,5.4),n);c.position.y=1.02,i.add(c);for(let x of[-2.6,-.6,1.6,3.2]){let g=new le(new Ue(3.3-Math.abs(x)*.32,.14,.6),n);g.position.set(0,.98,x),i.add(g)}let u=new le(new Ce(1.7,1.7,3.6,14,1,!0,-Math.PI/2,Math.PI).rotateX(Math.PI/2).rotateZ(Math.PI/2),o);u.position.set(0,1.5,.4),u.scale.set(1,.9,1),i.add(u);for(let[x,g]of[[-1.5,-1.4],[1.5,-1.4],[-1.5,2.2],[1.5,2.2]]){let m=new le(new Ce(.05,.05,1.6),n);m.position.set(x,1.8,g),i.add(m)}for(let x of[-1,1]){let g=new le(new Ce(.05,.05,4.4),n);g.position.set(x*2.6,1,-.8),g.rotation.set(.25,0,x*1.15),i.add(g);let m=new le(new Ue(.5,.06,1),n);m.position.set(x*4.5,.2,-1.3),i.add(m)}let h=[];for(let[x,g,m]of[[5,3.4,4.2],[-4.8,4.2,5]]){let _=new le(new Ce(.06,.06,g-.9),n);_.position.set(0,.9+(g-.9)/2,x),i.add(_);let y=new le(new Ue(.56,.74,.56),s);y.position.set(0,g+.3,x),i.add(y);let v=new le(new Nn(.5,.36,4).rotateY(Math.PI/4),r);v.position.set(0,g+.86,x),i.add(v);let w=new pi(new ii({map:ci(),color:16758880,blending:fn,depthWrite:!1,transparent:!0,opacity:.6}));w.scale.set(m,m,1),w.position.copy(y.position),i.add(w),h.push(w)}let f=new le(new xn(1.5,.8),new Ie({color:14609752,side:un}));f.position.set(.8,5.6,-4.8),i.add(f);let d=new le(new Ce(.03,.03,1.4),n);d.position.set(0,5.4,-4.8),i.add(d);let p=new le(new Cn(12,24).rotateX(-Math.PI/2),new Ie({map:ci(),color:16752704,blending:fn,transparent:!0,opacity:.13,depthWrite:!1}));return p.position.set(0,.12,0),i.add(p),i.scale.setScalar(1.7),i.userData={lights:h,flag:f},i}function Sd(){let i=Math.sin,t=Math.cos,e=Math.hypot,n=(h,f,d)=>h+(f-h)*d,r=h=>h<0?0:h>1?1:h,s=(h,f,d)=>{let p=r((d-h)/(f-h));return p*p*(3-2*p)},o=(h,f)=>{let d=e(h[0],h[1],h[2]);h=[h[0]/d,h[1]/d,h[2]/d];let p=h[0]*f[0]+h[1]*f[1]+h[2]*f[2];return f=[f[0]-h[0]*p,f[1]-h[1]*p,f[2]-h[2]*p],d=e(f[0],f[1],f[2]),f=[f[0]/d,f[1]/d,f[2]/d],[h[0],h[1],h[2],f[0],f[1],f[2],h[1]*f[2]-h[2]*f[1],h[2]*f[0]-h[0]*f[2],h[0]*f[1]-h[1]*f[0]]},a=h=>{let f=e(h[0],h[1],h[2]);h=[h[0]/f,h[1]/f,h[2]/f];let d=Math.abs(h[0])>.9?[0,0,1]:[1,0,0],p=d[0]*h[0]+d[1]*h[1]+d[2]*h[2],x=[d[0]-h[0]*p,d[1]-h[1]*p,d[2]-h[2]*p],g=e(x[0],x[1],x[2]);return x=[x[0]/g,x[1]/g,x[2]/g],[x[0],x[1],x[2],h[0],h[1],h[2],x[1]*h[2]-x[2]*h[1],x[2]*h[0]-x[0]*h[2],x[0]*h[1]-x[1]*h[0]]},l=(h,f,d)=>{let p=x=>h[Math.max(0,Math.min(h.length-1,x))];return[0,1,2].map(x=>{let g=p(f-1)[x],m=p(f)[x],_=p(f+1)[x],y=p(f+2)[x];return .5*(2*m+(_-g)*d+(2*g-5*m+4*_-y)*d*d+(3*m-g-3*_+y)*d*d*d)})};class c{constructor(f,d,p,x){this.lo=f,this.hi=d,this.cell=p,this.band=x,this.n=[0,1,2].map(g=>Math.ceil((d[g]-f[g])/p)+1),this.g=new Float32Array(this.n[0]*this.n[1]*this.n[2]).fill(x)}lay(f,d,p=.3,x=!1){let{lo:g,hi:m,cell:_,n:y,g:v}=this,w=p+this.band,M=(P,B)=>Math.max(0,Math.min(y[B]-1,P));if(p=Math.max(p,.001),f[3]+w<g[0]||f[0]-w>m[0]||f[4]+w<g[1]||f[1]-w>m[1]||f[5]+w<g[2]||f[2]-w>m[2])return this;let E=M(Math.floor((f[0]-w-g[0])/_),0),T=M(Math.ceil((f[3]+w-g[0])/_),0),b=M(Math.floor((f[1]-w-g[1])/_),1),S=M(Math.ceil((f[4]+w-g[1])/_),1),A=M(Math.floor((f[2]-w-g[2])/_),2),I=M(Math.ceil((f[5]+w-g[2])/_),2);for(let P=A;P<=I;P++){let B=g[2]+P*_;for(let z=b;z<=S;z++){let N=g[1]+z*_,G=(P*y[1]+z)*y[0]+E;for(let q=E;q<=T;q++,G++){let K=d(g[0]+q*_,N,B),it=v[G];if(x){let _t=Math.max(p-Math.abs(it+K),0)/p;v[G]=Math.max(it,-K)+_t*_t*p*.25}else{let _t=Math.max(p-Math.abs(it-K),0)/p;v[G]=Math.min(it,K)-_t*_t*p*.25}}}}return this}egg(f,d,p,x=null,g=!1,m=null){let _=x?Math.max(d[0],d[1],d[2]):0,y=Math.min(d[0],d[1],d[2]);return this.lay(x?[f[0]-_,f[1]-_,f[2]-_,f[0]+_,f[1]+_,f[2]+_]:[f[0]-d[0],f[1]-d[1],f[2]-d[2],f[0]+d[0],f[1]+d[1],f[2]+d[2]],(v,w,M)=>{let E=v-f[0],T=w-f[1],b=M-f[2];if(x){let I=E*x[0]+T*x[1]+b*x[2],P=E*x[3]+T*x[4]+b*x[5],B=E*x[6]+T*x[7]+b*x[8];E=I,T=P,b=B}let S=e(E/d[0],T/d[1],b/d[2]),A=e(E/(d[0]*d[0]),T/(d[1]*d[1]),b/(d[2]*d[2]));return(A>1e-6?S*(S-1)/A:-y)+(m?m(v,w,M):0)},p,g)}limb(f,d,p,x,g,m=null,_=null,y=!1){let v=d[0]-f[0],w=d[1]-f[1],M=d[2]-f[2],E=v*v+w*w+M*M||1e-9,T=Math.max(p,x);return this.lay([Math.min(f[0],d[0])-T,Math.min(f[1],d[1])-T,Math.min(f[2],d[2])-T,Math.max(f[0],d[0])+T,Math.max(f[1],d[1])+T,Math.max(f[2],d[2])+T],(b,S,A)=>{let I=b-f[0],P=S-f[1],B=A-f[2],z=(I*v+P*w+B*M)/E;z=z<0?0:z>1?1:z;let N=I-v*z,G=P-w*z,q=B-M*z;if(m){let K=(N*m[0]+G*m[1]+q*m[2])*(m[3]-1);N+=m[0]*K,G+=m[1]*K,q+=m[2]*K}return e(N,G,q)-(p+(x-p)*z)+(_?_(b,S,A):0)},g,y)}run(f,d,p,x=5,g=null,m=null){let _=(y,v)=>{let w=d.length?d[y]:d,M=d.length?d[Math.min(d.length-1,y+1)]:d;return w+(M-w)*v};for(let y=0;y<f.length-1;y++)for(let v=0;v<x;v++)this.limb(l(f,y,v/x),l(f,y,(v+1)/x),_(y,v/x),_(y,(v+1)/x),p,g,m);return this}ring(f,d,p,x,g=null){let m=d+p;return this.lay([f[0]-m,f[1]-m,f[2]-m,f[0]+m,f[1]+m,f[2]+m],(_,y,v)=>{let w=_-f[0],M=y-f[1],E=v-f[2];if(g){let T=w*g[0]+M*g[1]+E*g[2],b=w*g[3]+M*g[4]+E*g[5],S=w*g[6]+M*g[7]+E*g[8];w=T,M=b,E=S}return e(e(w,E)-d,M)-p},x)}drum(f,d,p,x,g,m=null,_=null){let y=e(d,p);return this.lay([f[0]-y,f[1]-y,f[2]-y,f[0]+y,f[1]+y,f[2]+y],(v,w,M)=>{let E=v-f[0],T=w-f[1],b=M-f[2];if(m){let I=E*m[0]+T*m[1]+b*m[2],P=E*m[3]+T*m[4]+b*m[5],B=E*m[6]+T*m[7]+b*m[8];E=I,T=P,b=B}let S=e(E,b)-d+x,A=Math.abs(T)-p+x;return e(Math.max(S,0),Math.max(A,0))+Math.min(Math.max(S,A),0)-x+(_?_(E,T,b):0)},g)}block(f,d,p,x,g=null){let m=e(d[0],d[1],d[2]);return this.lay([f[0]-m,f[1]-m,f[2]-m,f[0]+m,f[1]+m,f[2]+m],(_,y,v)=>{let w=_-f[0],M=y-f[1],E=v-f[2];if(g){let A=w*g[0]+M*g[1]+E*g[2],I=w*g[3]+M*g[4]+E*g[5],P=w*g[6]+M*g[7]+E*g[8];w=A,M=I,E=P}let T=Math.abs(w)-d[0]+p,b=Math.abs(M)-d[1]+p,S=Math.abs(E)-d[2]+p;return e(Math.max(T,0),Math.max(b,0),Math.max(S,0))+Math.min(Math.max(T,b,S),0)-p},x)}read(f,d,p){let{lo:x,cell:g,n:m,g:_}=this,y=Math.max(0,Math.min(m[0]-1.001,(f-x[0])/g)),v=Math.max(0,Math.min(m[1]-1.001,(d-x[1])/g)),w=Math.max(0,Math.min(m[2]-1.001,(p-x[2])/g)),M=y|0,E=v|0,T=w|0,b=y-M,S=v-E,A=w-T,I=(T*m[1]+E)*m[0]+M,P=m[0],B=m[0]*m[1],z=_[I]+(_[I+1]-_[I])*b,N=_[I+P]+(_[I+P+1]-_[I+P])*b,G=_[I+B]+(_[I+B+1]-_[I+B])*b,q=_[I+B+P]+(_[I+B+P+1]-_[I+B+P])*b;return z+(N-z)*S+(G+(q-G)*S-(z+(N-z)*S))*A}skin(f,d){let{lo:p,cell:x,n:g,g:m}=this,[_,y,v]=g,w=1,M=_,E=_*y,T=new Int32Array(_*y*v).fill(-1),b=[],S=[],A=x*3.2,I=Math.max(0,Math.floor((f-p[1])/x)),P=Math.min(y-2,Math.ceil((d-p[1])/x)),B=[0,w,M,M+w,E,E+w,E+M,E+M+w],z=[0,1,0,1,0,1,0,1],N=[0,0,1,1,0,0,1,1],G=[0,0,0,0,1,1,1,1],q=[0,2,4,6,0,1,4,5,0,1,2,3],K=[1,3,5,7,2,3,6,7,4,5,6,7],it=new Float32Array(8);for(let F=0;F<v-1;F++)for(let W=I;W<=P;W++){let j=(F*y+W)*_;for(let ot=0;ot<_-1;ot++,j++){let vt=m[j];if(vt>A||vt<-A)continue;let Gt=0;for(let ct=0;ct<8;ct++)it[ct]=m[j+B[ct]],it[ct]<0&&(Gt|=1<<ct);if(Gt===0||Gt===255)continue;let O=0,ft=0,dt=0,ut=0;for(let ct=0;ct<12;ct++){let yt=q[ct],gt=K[ct];if(it[yt]<0==it[gt]<0)continue;let wt=it[yt]/(it[yt]-it[gt]);O+=z[yt]+(z[gt]-z[yt])*wt,ft+=N[yt]+(N[gt]-N[yt])*wt,dt+=G[yt]+(G[gt]-G[yt])*wt,ut++}T[j]=b.length/3,b.push(p[0]+(ot+O/ut)*x,p[1]+(W+ft/ut)*x,p[2]+(F+dt/ut)*x)}}let _t=(F,W,j,ot,vt)=>{F<0||W<0||j<0||ot<0||(vt?S.push(F,ot,j,F,j,W):S.push(F,W,j,F,j,ot))};for(let F=1;F<v-1;F++)for(let W=Math.max(1,I);W<=P;W++){let j=(F*y+W)*_+1;for(let ot=1;ot<_-1;ot++,j++){let vt=m[j]<0;m[j+w]<0!==vt&&_t(T[j-M-E],T[j-E],T[j],T[j-M],!vt),m[j+M]<0!==vt&&_t(T[j-w-E],T[j-w],T[j],T[j-E],!vt),m[j+E]<0!==vt&&_t(T[j-w-M],T[j-M],T[j],T[j-w],!vt)}}let Xt=new Float32Array(b.length),It=new Float32Array(b.length/3),Ot=x,_e=this.band*.3,pt=this.band*.8;for(let F=0;F<b.length;F+=3){let W=b[F],j=b[F+1],ot=b[F+2],vt=this.read(W+Ot,j,ot)-this.read(W-Ot,j,ot),Gt=this.read(W,j+Ot,ot)-this.read(W,j-Ot,ot),O=this.read(W,j,ot+Ot)-this.read(W,j,ot-Ot),ft=e(vt,Gt,O)||1;vt/=ft,Gt/=ft,O/=ft,Xt[F]=vt,Xt[F+1]=Gt,Xt[F+2]=O,It[F/3]=.25+.75*(.45*r(this.read(W+vt*_e,j+Gt*_e,ot+O*_e)/_e)+.55*r(this.read(W+vt*pt,j+Gt*pt,ot+O*pt)/pt))}return{P:new Float32Array(b),N:Xt,A:It,I:new Uint32Array(S)}}}function u(h){let f=(F,W,j)=>.075*i(11.5*F+1.6*i(4*W))*i(11.5*W+1.6*i(4*j))*i(11.5*j+1.6*i(4*F)),d=(F,W,j)=>.034*i(23*F+2*i(6*W))*i(23*W+2*i(6*j))*i(23*j+2*i(6*F)),p=(F,W,j,ot,vt,Gt,O,ft)=>{let dt=[W[0]-F[0],W[1]-F[1],W[2]-F[2]],ut=a(dt),ct=[],yt=Math.ceil(vt*8);for(let gt=0;gt<=yt;gt++){let wt=n(j,ot,gt/yt),he=gt/yt*vt*6.2832,re=n(O,ft,wt)+Gt,U=t(he)*re,R=i(he)*re;ct.push([F[0]+dt[0]*wt+ut[0]*U+ut[6]*R,F[1]+dt[1]*wt+ut[1]*U+ut[7]*R,F[2]+dt[2]*wt+ut[2]*U+ut[8]*R])}return ct},x=[0,1,0],g=[0,0,1];for(let F=0;F<7;F++){let W=-.6+F*.66,j=6+.8*i(F*1.9);h.run([[W*.9+.4,.3,-1.3],[W,2.6,-1.9],[W*1.05,j-1.2,-2.2],[W*1.1,j,-2.05]],[.75,.62,.5,.26],.22,4)}for(let F=0;F<9;F++){let W=F/9*3.3-.4;h.run([[1.2+t(W)*2.5,.5,-1.4-i(W)*1.4],[1.2+t(W)*3.2,.22,-1.4-i(W)*1.9]],[.55,.2],.25,2)}let m=(F,W)=>{for(let j=0;j<F.length-1;j++)if(W<=F[j+1][0])return n(F[j][1],F[j+1][1],r((W-F[j][0])/(F[j+1][0]-F[j][0])));return F[F.length-1][1]},_=[[.3,-2.9],[1.5,-3.4],[3,-4],[4.4,-4.9],[5.9,-5.5],[7.4,-5.7],[8.9,-5.6],[9.6,-5.25]],y=[[.3,-2],[1.5,-2.7],[3,-3.25],[5,-3.8],[7.5,-3.95],[9.6,-4]];for(let F=0;F<6;F++){let W=F/5,j=9.5-.22*Math.abs(i(F*2.1))-(F===0?.1:0),ot=[],vt=[];for(let Gt of[.35,1.5,3,4.4,5.9,7.4,8.6,j])ot.push([n(m(y,Gt),m(_,Gt),W),Gt,0+.045*Gt+.12*i(F*2.6)]),vt.push(Gt>9?.2:.3+.012*Gt);h.run(ot,vt,.13,4,[0,0,1,1.5])}h.run([[-5.3,9.5,.42],[-5.72,9.95,.7],[-5.95,9.6,1.05]],[.22,.2,.06],.1,4),h.run([[-2.2,.4,.05],[-2.55,2.6,.1],[-2.85,5,.2],[-2.78,7,.32],[-2.68,7.95,.4]],[.38,.36,.34,.3,.14],.13,5,[0,0,1,1.5]),h.egg([1.1,2.7,-1.35],[2.7,3.2,1],.5),h.drum([-2.5,1.12,.95],1.05,.34,.14,.2,o([1,0,.35],[.35,0,-1]));for(let F=0;F<3;F++)h.ring([-2.5,1.12,.95],.92-F*.3,.07,.03,a([-.33,0,.94]));let v=.27,w=5.6,M=16.5,E=[[-4,7.8],[-3.16,8],[.67,9.9],[1.65,11.1],[2.6,12.8],[3.1,15.3],[3.6,17]],T=F=>{for(let W=0;W<E.length-1;W++)if(F<=E[W+1][0])return n(E[W][1],E[W+1][1],r((F-E[W][0])/(E[W+1][0]-E[W][0])));return 17},b=F=>5.95-.1*F+.17*i(F*2.7+.6)+.1*i(F*6.1),S=(F,W,j,ot=0)=>{let vt=F-v*(1-.5*s(.7,1,r((W-w)/(M-w)))),Gt=r((W-w)/(M-w)),O=3.42*(1-.15*s(.68,1,Gt))+ot,ft=2.3*(1-.13*s(.68,1,Gt))+ot;return[e(vt/O,(j-.1)/ft),ft,Gt,vt]};h.lay([v-3.8,5,-2.7,v+3.8,16.9,2.8],(F,W,j)=>{let[ot,vt,Gt,O]=S(F,W,j),ft=Math.atan2(j,O),dt=T(O)+.1*i(O*3.3),ut=s(-.5,.5,j)*s(dt-.08,dt+.1,W),ct=(ot-1-.085*ut)*vt*.94+.06*i(ft*9+1.5*i(W*.55))*(1-.65*Gt)*(1-.5*ut)+f(F,W,j)+.05*s(.14,0,Math.abs(W-dt-.02))*s(-.5,.5,j);return Math.max(ct,b(O)+(ut>.5,0)-W,W-M-.25)},.2),h.lay([v-3.4,4.8,-2.4,v+3.4,7.6,2.5],(F,W,j)=>{let[ot,vt,,Gt]=S(F,W,j,-.3);return Math.max((ot-1)*vt,W-b(Gt)-1.5)},.25,!0);for(let[F,W,j,ot]of[[.1,-.3,.2,1],[2.5,2.4,2.55,-1]])h.limb([F,1.3,.1],[W,6.7,.3],.78,1.02,.4).egg([n(F,W,.55),4.3,-.28],[.98,1.95,1.02],.5).egg([W,6.9,.45],[1.03,1,1],.4),h.egg([j,.56,-.4],[.82,.6,.95],.3).egg([j,.62,.85],[.94,.64,1.55],.35).egg([j,.42,1.9],[1.02,.42,.78],.3).egg([F+ot*.72,1.35,.05],[.26,.3,.3],.2).egg([F-ot*.74,1.2,-.1],[.24,.28,.3],.2),[[.7,.31,2.62],[.24,.25,2.66],[-.14,.23,2.56],[-.48,.21,2.4],[-.78,.19,2.18]].forEach(([vt,Gt,O])=>h.egg([j+ot*vt,.3,O],[Gt,Gt*.85,Gt*1.55],.1));h.egg([.25,15.6,.1],[3.15,2.4,2.1],.5).egg([.08,18.3,.2],[2.52,2.3,1.62],.7).egg([0,21.15,.05],[2.74,2.95,1.76],.7);for(let F of[-1,1])h.egg([F*1.28,21.35,1.26],[1.34,1.02,.62],.5).egg([F*1.52,20.98,1.83],[.13,.13,.1],.08).egg([F*3,22.3,0],[1.06,1.06,1.08],.55).limb([F*.9,23.9,-.1],[F*2.65,23,-.05],.75,.6,.6);h.limb([0,23.4,-.05],[0,25.5,.15],1.2,1.04,.6).egg([.08,17.82,1.76],[.2,.26,.22],.12,null,!0).limb([0,22.6,1.72],[0,19.4,1.8],.12,.1,.25,null,null,!0);let A=(F,W,j,ot)=>h.lay([-3.3,F-1,-2.4,3.4,F+1,2.5],(vt,Gt,O)=>{let ft=vt-.15,dt=e(ft/2.9,(O-.1)/1.98);return e((dt-1)*1.98,Gt-F-j*ft)-W-(ot?.035*i(Math.atan2(O,ft)*34+(Gt-F)*16):.02*i(Math.atan2(O,ft)*7+F))},.1);A(16.3,.33,0),A(16.82,.3,.02),A(17.26,.26,.035),A(17.52,.17,-.07,!0),h.egg([-2.2,17.5,1.5],[.34,.3,.3],.1).run([[-2.25,17.4,1.6],[-2.45,16.5,1.85],[-2.35,15.6,2]],[.16,.14,.2],.06,4);let I=[-3.88,17.45,-.1],P=[-3.18,18.7,3.25],B=[3.88,17.45,0],z=[3.72,18.45,2.6];h.limb([-3.08,22.2,0],I,.96,.8,.45).egg(I,[.82,.84,.84],.3).limb(I,P,.78,.54,.35),h.block([-2.95,19.72,3.62],[.92,.9,.24],.22,.22).egg([-2.6,19.35,3.78],[.5,.6,.22],.2).egg([-3.3,19.5,3.78],[.4,.62,.18],.2),[[-3.64,1,.185],[-3.18,1.28,.2],[-2.72,1.38,.205],[-2.26,1.2,.2]].forEach(([F,W,j])=>h.limb([F,20.4,3.66],[F*1.004,20.4+W*.55,3.72],j,j*.96,.08).limb([F*1.004,20.4+W*.55,3.72],[F*1.006,20.4+W,3.7],j*.96,j*.82,.05)),h.run([[-2.15,19.2,3.55],[-1.74,19.95,3.72],[-1.7,20.75,3.76]],[.27,.23,.18],.1,4);let N=(F,W,j)=>[n(F[0],W[0],j),n(F[1],W[1],j),n(F[2],W[2],j)];h.ring(N(I,P,.9),.7,.15,.05,a([P[0]-I[0],P[1]-I[1],P[2]-I[2]])),h.run([...p(I,P,.3,.72,2.25,.14,.78,.54),[-4.35,19.2,2.05],[-4.6,20.1,2.1],[-4.95,20.75,2.15]],[.13,.17,.19,.2,.2,.2,.2,.2,.2,.2,.2,.2,.2,.2,.2,.2,.2,.2,.2,.21,.23,.2],.06,3,null,d),h.egg([-5.02,20.6,2.12],[.2,.46,.38],.12,o([1,.5,0],[-.5,1,0])).egg([-5.32,20.98,2.18],[.42,.19,.26],.1,o([1,.15,.1],x));let G=F=>[3.95-.6*F/30.5,F,3.3];h.limb([3.08,22.2,0],B,.96,.8,.45).egg(B,[.82,.84,.84],.3).limb(B,z,.78,.56,.35),h.egg([3.6,18.75,3.18],[.86,.92,.72],.25);for(let F=0;F<4;F++)h.limb([4.22,19.42-F*.42,3.55],[3.2,19.38-F*.42,3.95],.21,.2,.07).limb([3.2,19.38-F*.42,3.95],[2.95,19.36-F*.42,3.4],.2,.17,.07);h.run([[2.95,19.2,3],[3.05,19.75,3.5],[3.4,20.05,3.75]],[.26,.23,.18],.1,4).ring(N(B,z,.86),.74,.15,.05,a([z[0]-B[0],z[1]-B[1],z[2]-B[2]])),h.run([...p(B,z,.25,.7,2.25,.14,.78,.56),[4.5,19,1.5],[4.75,19.95,1.6],[5.05,20.65,1.7]],[.13,.17,.19,.2,.2,.2,.2,.2,.2,.2,.2,.2,.2,.2,.2,.2,.2,.2,.2,.21,.23,.2],.06,3,null,d),h.egg([5.12,20.5,1.68],[.2,.46,.38],.12,o([1,-.5,0],[.5,1,0])).egg([5.42,20.9,1.74],[.42,.19,.26],.1,o([1,-.15,.1],x)),h.egg([0,27.35,.15],[1.72,1.86,1.86],.4).egg([0,26.25,.72],[1.4,1.18,1.26],.5).egg([0,25.55,1.5],[.6,.46,.46],.3).egg([0,28.3,1.2],[1.25,.75,.75],.4);for(let F of[-1,1])h.egg([F*.86,26.45,1.42],[.6,.56,.5],.35),h.egg([F*.68,27.3,2.06],[.62,.36,.2],.3,null,!0).egg([F*.68,27.29,1.71],[.44,.2,.2],.05),h.run([[F*.24,27.27,1.9],[F*.45,27.47,1.97],[F*.72,27.53,1.97],[F*.98,27.44,1.86],[F*1.13,27.32,1.7]],[.03,.06,.068,.058,.03],.04,3),h.run([[F*.24,27.27,1.9],[F*.46,27.12,1.93],[F*.72,27.07,1.92],[F*.98,27.16,1.83],[F*1.13,27.32,1.7]],[.03,.036,.04,.036,.03],.04,3),h.egg([F*.66,27.3,1.93],[.12,.13,.035],.02,null,!0),h.run([[F*.17,27.9,2],[F*.7,28.08,1.92],[F*1.28,27.82,1.5]],[.1,.105,.05],.14,4),h.egg([F*.3,26.5,2.14],[.2,.16,.2],.18).egg([F*.2,26.4,2.36],[.08,.05,.08],.05,null,!0),h.egg([F*1.74,26.95,.15],[.2,.68,.42],.12).limb([F*1.74,26.3,.25],[F*1.8,25.9,.5],.16,.13,.06).ring([F*1.86,25.42,.72],.46,.1,.04,a([.45*F,0,1])),h.egg([F*.64,25.97,2],[.1,.1,.1],.08,null,!0);h.limb([0,27.6,1.94],[0,26.66,2.36],.15,.22,.2).egg([0,26.52,2.4],[.25,.2,.22],.12),h.egg([0,26.03,2.02],[.56,.12,.2],.06).egg([0,25.83,1.99],[.45,.14,.2],.06);for(let F of[-.2,0,.2])h.run([[-.62,28.42+F-.03,1.87],[0,28.45+F+.04,2],[.62,28.42+F-.03,1.87]],.06,.03,4);h.egg([0,28.45,2.02],[.1,.24,.07],.04),h.lay([-2.1,26.6,-2.3,2.1,29.9,2.3],(F,W,j)=>{let ot=F/1.9,vt=(W-27.75)/1.72,Gt=(j+.18)/1.98,O=e(ot,vt,Gt),ft=e(ot/1.9,vt/1.72,Gt/1.98),dt=ft>1e-6?O*(O-1)/ft:-1;return dt+=.05*i(Math.atan2(F,j+.2)*20+2.2*i((W-27)*1.3))*s(26.6,27.6,W),Math.max(dt,(28.62-W)*.82+(j-1.1)*.58-.22*Math.abs(F))},.16),h.lay([-1.5,28.7,-1.6,1.6,31.6,1.5],(F,W,j)=>{let ot=r((W-29)/2),vt=F-.22*ot,Gt=j+.12+.25*ot,O=n(1.08,.5,ot*ot*.6+ot*.4),ft=Math.atan2(Gt,vt),dt=Math.max(e(vt,Gt)-O-.1*i(ft*2-W*5.4),W-31,28.8-W);return Math.min(dt,e(F-.2,W-31.05,j+.35)-.3)*.85},.18);let q=(F,W,j)=>F.map((ot,vt)=>[ot[0]+W*i(vt*1.9+j),ot[1],ot[2]+W*.5*t(vt*1.6+j)]);for(let F of[-1,1])for(let W=0;W<3;W++)h.run(q([[F*(1.72+W*.1),27.3,-.35-W*.3],[F*(1.95+W*.2),26.2,-.1-W*.3],[F*(1.9+W*.3),25.2,.2-W*.28],[F*(2.2+W*.34),24.3,.42-W*.3],[F*(2.75+W*.36),23.75,.4-W*.3],[F*(3.25+W*.3),23.45,.2-W*.3]],.1,W*2+F),[.3,.31,.29,.25,.19,.07],.1,4);for(let F=0;F<11;F++){let W=(F-5)/5,j=19.2+1.5*Math.abs(i(F*2.3))+1.3*Math.abs(W);h.run(q([[W*1.35,28.3,-1.72],[W*1.9,26.6,-2.02],[W*2.4,24.8,-1.98],[W*2.65,23,-1.92-.12*(F%2)],[W*2.7,21.2,-1.88-.12*(F%2)],[W*2.6,j,-1.74]],.13,F*1.7),[.42,.46,.44,.4,.33,.1],.12,5)}{let F=[],W=[];for(let j=0;j<=8;j++){let ot=(218+j/8*178)*Math.PI/180,vt=i(j/8*Math.PI);F.push([-1.55+t(ot)*.86,29.72+i(ot)*.86,.95-.25*vt]),W.push(.03+.15*vt)}h.run(F,W,.03,4,[0,0,1,1.6])}let K=o([1,0,-.2],[.05,1,.1]);h.egg([-3.05,26.45,1.45],[.98,1.2,.18],.1,K,!1,(F,W,j)=>.035*i(W*13+.5)*s(.25,.5,Math.abs(F+3.05))),h.limb([-3.05,25.2,1.5],[-3.05,27.3,1.66],.36,.3,.1,null,(F,W,j)=>.04*i(W*13+.5)),h.egg([-3.05,27.62,1.98],[.32,.22,.46],.14,o([1,0,0],[0,1,.3])).egg([-3.05,27.42,1.76],[.38,.32,.36],.16);for(let F of[-1,1])h.ring([-3.05+F*.55,26.75,1.58],.2,.045,.03,a([.2,0,1])).egg([-3.05+F*.2,27.68,2.22],[.07,.06,.07],.02);h.run([[-3.05,25.35,1.5],[-3.2,24.8,1.3],[-3.42,24.4,.85],[-3.15,24.2,.3],[-2.5,24.3,-.05],[-1.85,24.55,-.75],[0,24.75,-1.3],[1.9,24.5,-.7],[2.42,24.1,.35],[2.2,23.3,1.25],[1.5,22.2,1.72],[.45,21.45,1.98],[-.75,21.75,1.92],[-1.65,22.7,1.62],[-2.05,23.6,1.15],[-2.3,24.2,.5]],[.34,.36,.4,.42,.43,.43,.43,.43,.43,.43,.43,.43,.43,.43,.42,.4],.14,6,null,d),h.run([[2.25,23.5,1.2],[2.6,22.5,1.5],[2.62,21.5,1.62],[2.25,20.75,1.78],[1.72,20.6,1.86],[1.5,21.05,1.9],[1.8,21.35,1.9],[2.02,21.1,1.92]],[.4,.36,.3,.25,.2,.16,.12,.07],.08,6,null,d);let it=(F,W,j=4)=>{h.run(F,W*.5,.05,j);for(let ot=0;ot<F.length-1;ot++)for(let vt=0;vt<j;vt++)h.egg(l(F,ot,vt/j),[W,W,W],.03);h.egg(F[F.length-1],[W,W,W],.03)};it([[-1.2,24.55,.95],[-.85,24,1.4],[0,23.75,1.62],[.85,24,1.4],[1.2,24.55,.95]],.17),h.egg([0,23.42,1.7],[.22,.3,.14],.05),it([[-1.5,23.7,1.45],[-1,22.95,1.82],[0,22.55,1.98],[1,22.95,1.82],[1.5,23.7,1.45]],.19),h.egg([0,22.2,2.02],[.26,.34,.15],.05),it([[-.6,21.5,1.95],[-.62,20.4,1.92],[-.5,19.3,1.9],[-.1,18.55,1.92],[.38,18.3,1.94],[.85,18.6,1.9],[1,19.4,1.86],[.9,20.5,1.88],[.75,21.4,1.95]],.21,4),h.egg([.38,17.92,1.98],[.24,.34,.2],.06).run([[.3,21,1.84],[-.5,19.3,1.74],[-1.5,18.1,1.5],[-2.25,17.75,1.1]],.085,.04,5);let[_t,,Xt]=G(0),[It,,Ot]=G(30.5);h.limb([_t,.3,Xt],[It,31,Ot],.19,.17,.04).egg([_t,.92,Xt],[.78,.86,.78],.12).egg([_t,.15,Xt],[.55,.2,.55],.1);for(let[F,W]of[[1.95,.44],[2.3,.3],[2.62,.4],[2.95,.26],[29.25,.3],[29.6,.24],[29.92,.32],[30.2,.22]]){let j=G(F);h.egg(j,[W,.15,W],.06)}h.run([[It-1.2,30.75,Ot],[It-.6,30.45,Ot],[It,30.38,Ot],[It+.6,30.45,Ot],[It+1.2,30.75,Ot]],[.2,.2,.22,.2,.2],.06,4,[0,0,1,1.5]);for(let F of[-1,1])h.run([[It+F*1.2,30.75,Ot],[It+F*1.42,31.5,Ot],[It+F*1.2,32.25,Ot],[It+F*.92,32.8,Ot],[It+F*1.05,33.3,Ot]],[.2,.24,.22,.16,.03],.05,5,[0,0,1,1.6]),h.run([[It+F*.12,30.6,Ot+.1],[It+F*.5,30.95,Ot+.14],[It+F*.55,31.3,Ot+.1]],[.1,.13,.03],.04,3);h.limb([It,30.4,Ot],[It,31.2,Ot],.2,.16,.05).lay([It-.6,31,Ot-.4,It+.6,34.9,Ot+.4],(F,W,j)=>{let ot=r((W-31.1)/3.7),vt=.07+.42*Math.pow(i(Math.PI*Math.pow(ot,.42)),1)*(1-.25*ot);return Math.max((Math.abs(F-It)/vt+Math.abs(j-Ot)/(vt*.42)-1)*vt*.38,31.1-W,W-34.8)},.04),h.egg([It+.3,29,Ot-.1],[.34,.3,.3],.1).run([[It+.35,28.9,Ot-.15],[It+1,27.9,Ot-.9],[It+1.25,26.3,Ot-1.9],[It+.85,24.9,Ot-2.7],[It+.25,24.1,Ot-3.15]],[.24,.52,.6,.46,.2],.12,6,[.75,0,.66,2],(F,W,j)=>.03*i(W*5+F*3));let _e=o([.66,0,-.75],[.75,0,.66]),pt=[4.72,14.6,2.85];h.drum(pt,.94,.62,.08,.06,_e,(F,W,j)=>-.1*(1-Math.abs(W)/.62)-(e(F,j)>.8?.05:0)).ring(pt,.5,.06,.03,_e),h.run([[G(15.6)[0],15.6,3.3],[4.3,15.5,3.1],[pt[0],15.5,pt[2]]],.07,.03,3).run([[G(14.2)[0],14.2,3.3],[4.2,14.3,3.1]],.07,.03,2)}return function(f){let d=new c(f.lo,f.hi,f.cell,f.band);return u(d),d.skin(f.from,f.to)}}function Bx(){return new He({uniforms:Bn.merge([Dt.fog,{clay:{value:0}}]),fog:!0,vertexShader:`attribute float ao; varying vec3 vN; varying vec3 vW; varying float vA;
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
        vec3 c = lamp(vec3(-13.0, 6.0, 16.0), 1.0, n, v) + lamp(vec3(13.0, 6.0, 16.0), 1.0, n, v) + lamp(vec3(0.0, 9.0, 30.0), 0.6, n, v) + lamp(vec3(-24.0, 7.0, -3.0), 0.55, n, v) + lamp(vec3(24.0, 7.0, -3.0), 0.55, n, v) + lamp(vec3(-10.0, 6.0, -16.0), 0.5, n, v) + lamp(vec3(10.0, 6.0, -16.0), 0.5, n, v);
        c += mix(vec3(0.2, 0.13, 0.06), vec3(0.03, 0.045, 0.09), n.y * 0.5 + 0.5);                                                                 // the glow off the deck below, the sky above
        c += vec3(0.07, 0.1, 0.19) * smoothstep(-0.1, 0.8, r.y) + vec3(0.42, 0.26, 0.1) * smoothstep(0.25, -0.6, r.y) * 0.8 + vec3(1.0, 0.98, 0.9) * pow(max(dot(r, normalize(vec3(0.08, 0.18, -1.0))), 0.0), 120.0);   // what the polish mirrors: sky, the lit water, the moon
        c += vec3(0.2, 0.28, 0.5) * pow(1.0 - max(dot(n, v), 0.0), 3.0) * (0.2 + 0.3 * max(n.y, 0.0));                                              // the edge the moon picks out
        gl_FragColor = vec4(gold * c * (0.08 + 0.92 * occ) * 0.56, 1.0); }
      #include <fog_fragment>
      #include <tonemapping_fragment>
      #include <colorspace_fragment>
      }`})}var Ox=(i=1)=>[{lo:[-6.8,-.4,-4.8],hi:[6.4,16.7,4.6],cell:.15*i,band:.6,from:-9,to:16.42},{lo:[-6.4,16.2,-3.6],hi:[6.3,25.1,4.8],cell:.105*i,band:.45,from:16.3,to:24.92},{lo:[-4.8,24.6,-3.3],hi:[5.6,35.2,4.2],cell:.08*i,band:.36,from:24.8,to:99}],zx={lo:[-6.6,-.4,-4.8],hi:[6.4,35.4,4.8],cell:.32,band:.7,from:-9,to:99},kx=(i,t)=>{let e=new Le;return e.setAttribute("position",new Pe(i.P,3)),e.setAttribute("normal",new Pe(i.N,3)),e.setAttribute("ao",new Pe(i.A,1)),e.setIndex(new Pe(i.I,1)),new le(e,t)};function Ed(i){return new Promise(t=>{let e=()=>setTimeout(()=>t(Sd()(i)),0);try{let n=new Worker(URL.createObjectURL(new Blob(["const cast = ("+Sd.toString()+")(); onmessage = e => { const r = cast(e.data); postMessage(r, [r.P.buffer, r.N.buffer, r.A.buffer, r.I.buffer]); };"],{type:"text/javascript"})));n.onmessage=r=>{t(r.data),n.terminate()},n.onerror=()=>{n.terminate(),e()},n.postMessage(i)}catch{e()}})}async function wd(i,t=16.7,e=1){let n=Bx(),r=(a,l)=>{let c=kx(a,n);return c.position.y=t,c.visible=!l,i.add(c),c},s=[r(await Ed(zx),!0)];return{fine:(await Promise.all(Ox(e).map(Ed))).map(a=>r(a,!1)),plain:s,mat:n}}var Td=i=>Array.from({length:i},(t,e)=>jr(e+31));function Ad(){let i=new ye,t=we(91),e={u:24,v:8*2.9},n=[[150,126,100],[128,112,104],[156,140,118],[112,120,132],[146,110,96]].map((x,g)=>{let m=hc({seed:70+g,lit:.26,wall:x});return Mt({map:m.map,emissiveMap:m.emissiveMap,glow:1.4,key:"pol"+g})}),r=[Mt({tint:11117980}),Mt({tint:11972772}),Mt({tint:10196878})],s=Mt({tint:12169892}),o=Mt({tint:1381915}),a=Mt({tint:8225420}),l=Mt({tint:6047280}),c=Mt({tint:10130046}),u=br([52,108,66],"b"),h=[12728906,3108784,14725690,15262418,3115626,13656110,9063080].map(x=>Mt({tint:x})),f=Td(8),d=te(2,1.5,.8);i.put(Mt({tint:4867648}),Xn(Lt+28.2,Lt+150,1.53,206,128,96));let p=x=>Math.atan2(-Math.cos(x*$e),Math.sin(x*$e));for(let x=Lt+37;x<Lt+136;){let g=8+t()*4,m=Math.min(12.5,4.2+(x-Lt-37)*.1);for(let _=207;_<333;){let y=6.5+t()*6.5,v=t()<.2,w=_+y/(x*$e)/2,M=Ae(w,x+g/2);if(_+=(y+(v?2.6:.3))/(x*$e),!qs(M.x,M.z,7)||x>Lt+100&&t()<.3)continue;let E=m*(.62+t()*.38),T=t()*5|0,b=new ye,S=r[t()*3|0],A=()=>(t()-.5)*(y-2.4),I=()=>(t()-.5)*(g-2.4);if(b.put(n[T],Vs(y,E,g,0,0,0,e,t()*3)),b.put(S,V(y,.18,g,0,E,0)),b.put(s,V(y,.6,.22,0,E,g/2-.11),V(y,.6,.22,0,E,-g/2+.11),V(.22,.6,g,y/2-.11,E,0),V(.22,.6,g,-y/2+.11,E,0)),t()<.62){let P=A(),B=I();b.put(a,V(1.5,.9,1.5,P,E+.18,B)),b.put(o,ie(.62,1.2,P,E+1.08,B,9))}if(t()<.42){let P=A()*.6,B=-g/2+1.5;b.put(n[T],V(2.4,2.3,2.6,P,E+.18,B)),b.put(S,V(2.7,.14,2.9,P,E+2.48,B)),t()<.6&&(b.put(d,de(.1,P,E+2.1,B+1.42,5)),b.light(P,E+2,B+1.8,Jt,.75,3.6,1.7))}if(t()<.28){let P=I();b.put(c,ce([-y/2+.4,E+1.9,P],[y/2-.4,E+1.9,P],.02,3),ce([-y/2+.4,E+.2,P],[-y/2+.4,E+1.9,P],.04,4),ce([y/2-.4,E+.2,P],[y/2-.4,E+1.9,P],.04,4));for(let B=-y/2+1;B<y/2-1;B+=.9+t()*.5)t()<.75&&b.put(h[t()*7|0],V(.62,.95,.03,B,E+.92,P))}if(t()<.2){let P=A(),B=I();b.put(l,V(1.9,.08,.9,P,E+.62,B));for(let[z,N]of[[-1,-1],[1,-1],[-1,1],[1,1]])b.put(l,V(.07,.44,.07,P+z*.88,E+.18,B+N*.38))}if(t()<.3)for(let P=0;P<3;P++){let B=A(),z=g/2-.6;b.put(l,ie(.2,.3,B,E+.18,z,6)),b.put(u,ir(.34,B,E+.72,z,P,1))}if(t()<.24){let P=A(),B=I();b.stamp(f[t()*8|0],P,B,t()*6.28,1,E+.18),t()<.5&&b.stamp(f[t()*8|0],P+.7,B+.3,t()*6.28,1,E+.18),b.light(P,E+2.2,B,Jt,.5,3.4)}if(t()<.08)for(let P=0;P<=8;P++)b.spark(-y/2+P*y/8,E+.82,g/2,[Jt,Oi,li,At][P%4],1.1,1);if(t()<.16){let P=A(),B=I();b.put(a,zt(new Ce(.42,.05,.22,10)).rotateX(-.7).translate(P,E+1.05,B),ce([P,E+.18,B],[P,E+.95,B],.03,4))}t()<.46&&(b.put(d,de(.13,0,3.4,g/2+.5,5)),b.light(0,3.4,g/2+1.1,Jt,.95,6,2.2)),i.stamp(b,M.x,M.z,p(w),1,1.52)}x+=g+2.8}return i}function Rd(){let i=new ye,t=we(123),e=Mt({tint:10259052}),n=Mt({tint:15327174}),r=Mt({tint:3158586}),s=Mt({tint:7031860}),o=Mt({tint:11680306}),a=20,l=15.5;i.put(Mt({tint:6971212}),Xn(a+1,a+7.5,.05,0,360,40)),i.put(Mt({tint:8746592}),Xn(a+1,a+4.6,.1,0,360,40)),i.put(e,ie(a+3,.16,0,0,0,40)),i.put(an(),Ye(a+11,a+11,0,0,0)),i.put(te(.9,.3,.3),Xn(3.2,3.5,.2,0,360,32)),i.put(te(.9,.75,.2),Xn(4,4.2,.2,0,360,32)),i.put(te(.85,.85,.8),Xn(2.5,2.7,.2,0,360,32)),i.put(n,ie(2.2,.5,0,.16,0,8));for(let[_,y]of[[-1,-1],[1,-1],[-1,1],[1,1]])i.put(n,V(.16,2.6,.16,_*1.1,.66,y*1.1));i.put(o,V(2.9,.14,2.9,0,3.26,0)),i.put(n,yn(1.2,1.3,0,3.4,0,{seg:10})),i.put(te(2.4,1.6,.6),de(.3,0,1.3,0,8)),i.light(0,1.6,0,Jt,1.5,6,4),i.put(r,ce([.9,0,.9],[.9,l,.9],.14,6)),i.put(te(2.2,1.8,1),de(.4,.9,l+.3,.9,8));let c=[Jt,At,Oi,Jt,li,At];for(let _=0;_<18;_++){let y=_/18*6.283,v=Math.cos(y)*(a+1.6),w=Math.sin(y)*(a+1.6);i.put(r,ce([v,0,w],[v,6.2,w],.08,5)),i.put(te(1.9,1.5,.9),de(.2,v,6.3,w,6)),i.light(v,6,w,At,.6,6.5);for(let M=1;M<19;M++){let E=M/19,T=Math.sin(E*Math.PI)*1.5;i.spark(.9+(v-.9)*E,l+(6.2-l)*E-T,.9+(w-.9)*E,c[(_+M)%6],1.2,1)}_%3===0&&i.light(v*.55,8.5,w*.55,Jt,1,9.5)}i.put(s,Ri(11,1.1,4.4,0,.16,-(a+6.2))),i.put(o,V(11.4,4.6,.2,0,1.26,-(a+8.5))),i.put(te(1.5,1,.45),V(9,.5,.1,0,5.2,-(a+8.3)));for(let _ of[-6.6,6.6])i.put(r,V(1.4,2.6,1.2,_,.16,-(a+5.6)));let u=Td(8);for(let _=0;_<5;_++)i.stamp(u[_],-3+_*1.5,-(a+6.2),0,1,1.26);i.light(0,4.6,-(a+3.6),Oi,.9,7).light(-4,4.6,-(a+4),Kn,.6,6).light(4,4.6,-(a+4),Jt,.8,6);for(let _=0;_<52;_++){let y=t()*6.283;if(Math.abs(y-4.712)<.42)continue;let v=a+3.6+t()*3.2;i.stamp(u[t()*8|0],Math.cos(y)*v,Math.sin(y)*v,t()*6.28,1,.16)}for(let[_,y]of[[.5,2],[2.64,4]])i.stamp(qh(y),Math.cos(_)*(a+8),Math.sin(_)*(a+8),-_+Math.PI/2,1.1,0);let h=[14696544,15771688,2930070,4221152,13650112,15756352,9067232,15257664],f=Mt({tint:10119756}),d=Mt({tint:15262422}),p=Mt({tint:2763830}),x=_=>{let y=new ye,v=Mt({tint:h[_%8]}),w=Mt({tint:h[(_+3)%8]}),M=_%3;return _%4!==3?(y.put(v,Wn(.62,1,0,0,0,9)),y.put(w,ie(.2,.5,0,.92,0,7,null,.22),V(.5,.08,.5,0,.3,0))):(y.put(p,V(.16,.85,.2,-.11,0,0),V(.16,.85,.2,.11,0,0)),y.put(d,Wn(.42,.75,0,.72,0,8)),y.put(v,de(.17,0,1.7,0,6))),y.put(f,de(.14,0,1.58,0,7),ce([-.24,1.36,0],M?[-.42,1.78,.2]:[-.5,1.1,.25],.055,4),ce([.24,1.36,0],M?[.42,1.78,.2]:[.5,1.1,.25],.055,4)),y},g=Array.from({length:12},(_,y)=>x(y)),m=[[6.6,22],[10,34],[13.4,46],[16.8,58]].map(([_,y],v)=>{let w=new ye;for(let M=0;M<y;M++){let E=M/y*6.283;w.stamp(g[(M*5+v*3)%12],Math.cos(E)*_,Math.sin(E)*_,-E,.95+M*7%5*.03,0)}return{rad:_,q:w}});return{b:i,rings:m}}function Cd(){let i=new ye,t=we(57),e=[3107396,3832396,2644540].map(s=>Qn(Mt({tint:s}))),n=te(.95,.45,.62),r=te(1,.8,.86);for(let s of[90,66,41,17,114,144,174,200,235,305,-62]){let o=Ae(s+(t()-.5)*3,Lt-6-t()*7);for(let a=0;a<20;a++){let l=t()*6.283,c=Math.sqrt(t())*6.5,u=.42+t()*.55;i.put(e[a%3],zt(new Cn(u,9,.4,5.9)).rotateX(-Math.PI/2).rotateY(t()*6.28).translate(o.x+Math.cos(l)*c,.05,o.z+Math.sin(l)*c*.7))}for(let a=0;a<4;a++){let l=t()*6.283,c=Math.sqrt(t())*5,u=o.x+Math.cos(l)*c,h=o.z+Math.sin(l)*c*.7;i.put(e[1],ce([u,0,h],[u,.42,h],.025,3)),i.put(a%2?n:r,zt(new Nn(.24,.42,6)).rotateX(Math.PI).translate(u,.6,h),Wn(.13,.34,u,.46,h,5))}}return i}var Ys={zenith:263692,mid:660006,horizon:1780302,fog:1186872,water:264726};function Hx(i,t,e={}){let n=t.map(X=>X.deg),r=n.filter(X=>X!==void 0),s=Math.max(0,t.findIndex(X=>X.home)),o=t.map((X,J)=>(s+J)%t.length),a=new Kl({canvas:i,antialias:!1,powerPreference:"high-performance"});a.toneMapping=Ds,a.toneMappingExposure=1.12,a.outputColorSpace=mn;let l=new vo;l.fog=new _o(Ys.fog,8e-4),l.background=new Vt(Ys.mid);let c=new En(38,1,2,4200),u=matchMedia("(prefers-reduced-motion: reduce)"),h=we(11);l.add(new le(new hn(3600,32,16),new He({side:Pn,depthWrite:!1,fog:!1,uniforms:{zenith:{value:new Vt(Ys.zenith)},mid:{value:new Vt(Ys.mid)},horizon:{value:new Vt(Ys.horizon)}},vertexShader:"varying vec3 d; void main(){ d = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`uniform vec3 zenith; uniform vec3 mid; uniform vec3 horizon; varying vec3 d;
      void main(){ float y = max(d.y, 0.0); vec3 c = mix(horizon, mid, smoothstep(0.0, 0.22, y)); c = mix(c, zenith, smoothstep(0.18, 0.8, y)); c += vec3(0.16, 0.09, 0.05) * exp(-y * 18.0) * 0.3; gl_FragColor = vec4(c, 1.0);
      #include <tonemapping_fragment>
      #include <colorspace_fragment>
      }`})));let f=[],d=[],p=[];for(let X=0;X<3200;X++){let J=h()*2-1,rt=h()*Math.PI*2,Bt=Math.abs(J)*.96+.035,Et=Math.sqrt(1-Bt*Bt);f.push(Math.cos(rt)*Et*3300,Bt*3300,Math.sin(rt)*Et*3300);let se=h();d.push(se<.03?3.6:se<.2?2.3:1.35),p.push(h()*6.28)}let x=new Le;x.setAttribute("position",new ae(f,3)),x.setAttribute("size",new ae(d,1)),x.setAttribute("phase",new ae(p,1));let g=new As(x,new He({transparent:!0,depthWrite:!1,fog:!1,blending:fn,uniforms:{time:{value:0},dpr:{value:1}},vertexShader:"attribute float size; attribute float phase; uniform float time; uniform float dpr; varying float tw; void main(){ tw = 0.72 + 0.28 * sin(time * (0.6 + phase * 0.25) + phase * 9.0); gl_PointSize = size * dpr; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:"varying float tw; void main(){ float d = length(gl_PointCoord - 0.5); float a = smoothstep(0.5, 0.05, d) * tw; gl_FragColor = vec4(vec3(0.92, 0.95, 1.0) * a * 1.5, a); }"}));l.add(g);let m=document.createElement("canvas");m.width=m.height=256;{let X=m.getContext("2d");X.fillStyle="#fff6e0",X.beginPath(),X.arc(128,128,96,0,7),X.fill(),X.fillStyle="rgba(190,180,160,.5)";for(let[J,rt,Bt]of[[150,100,16],[176,150,11],[130,170,9],[190,110,7]])X.beginPath(),X.arc(J,rt,Bt,0,7),X.fill();X.globalCompositeOperation="destination-out",X.beginPath(),X.arc(72,116,92,0,7),X.fill()}let _=new pi(new ii({map:new mi(m),color:new Vt(2.4,2.3,2),fog:!1,depthWrite:!1}));_.scale.set(150,150,1),_.position.set(230,520,-2900),l.add(_);let y=new pi(new ii({map:ci(256),color:7311320,fog:!1,depthWrite:!1,blending:fn,opacity:.32}));y.scale.set(1500,1500,1),y.position.copy(_.position),l.add(y);let v=document.createElement("canvas");v.width=v.height=256;{let X=v.getContext("2d"),J=X.createImageData(256,256),rt=we(19),Bt=[];for(let Et=0;Et<22;Et++)Bt.push([1+(rt()*5|0),1+(rt()*5|0),rt()*6.28,rt()]);for(let Et=0;Et<256;Et++)for(let se=0;se<256;se++){let Nt=0;for(let[Zt,xe,Qe,Je]of Bt)Nt+=Math.sin((se*Zt+Et*xe)/256*6.2832+Qe)*Je/(Zt+xe);let Kt=Math.max(0,Math.min(1,Nt*.9-.12)),ge=(Et*256+se)*4;J.data[ge]=150,J.data[ge+1]=170,J.data[ge+2]=215,J.data[ge+3]=Kt*Kt*255}X.putImageData(J,0,0)}let w=new mi(v);w.wrapS=w.wrapT=Ei,w.repeat.set(3,3);let M=new le(new xn(9e3,9e3).rotateX(Math.PI/2),new Ie({map:w,transparent:!0,opacity:.2,depthWrite:!1,fog:!1}));M.position.y=620,M.layers.set(1),l.add(M);{let X=new Tn,J=[[-290,0],[-215,14],[-165,24],[-125,44],[-85,58],[-55,80],[-30,92],[-10,104],[9,108],[30,98],[55,92],[85,64],[130,42],[170,26],[225,12],[300,0]];X.moveTo(-290,-700);for(let[Et,se]of J)X.lineTo(Et,se);X.lineTo(300,-700);let rt=new le(new mr(X),new Ie({color:1055286,fog:!1})),Bt=Ae(91.5,3350);rt.position.set(Bt.x,0,Bt.z),rt.lookAt(0,0,0),l.add(rt),rt.userData.at=Bt,l.userData.hill=rt}let E=document.createElement("canvas");E.width=E.height=256;{let X=E.getContext("2d"),J=X.createImageData(256,256),rt=we(3),Bt=[];for(let se=0;se<30;se++)Bt.push([3+(rt()*14|0),3+(rt()*14|0),rt()*6.28,.4+rt()]);let Et=(se,Nt)=>{let Kt=0;for(let[ge,Zt,xe,Qe]of Bt)Kt+=Math.sin((se*ge+Nt*Zt)/256*6.2832+xe)*Qe/(ge+Zt);return Kt};for(let se=0;se<256;se++)for(let Nt=0;Nt<256;Nt++){let Kt=Et(Nt+1,se)-Et(Nt-1,se),ge=Et(Nt,se+1)-Et(Nt,se-1),Zt=Math.hypot(Kt*4,ge*4,1),xe=(se*256+Nt)*4;J.data[xe]=(-Kt*4/Zt*.5+.5)*255,J.data[xe+1]=(-ge*4/Zt*.5+.5)*255,J.data[xe+2]=(1/Zt*.5+.5)*255,J.data[xe+3]=255}X.putImageData(J,0,0)}let T=new mi(E);T.wrapS=T.wrapT=Ei;let b=new rc(new Cn(Lt+1,96),{textureWidth:innerWidth<700?512:1024,textureHeight:innerWidth<700?512:1024,waterNormals:T,sunDirection:new k(.3,.34,-.9).normalize(),sunColor:2766688,waterColor:Ys.water,distortionScale:2.4,fog:!0});b.rotation.x=-Math.PI/2,b.material.uniforms.size.value=.95,b.material.fragmentShader=b.material.fragmentShader.replace("vec3( 0.1 )","vec3( 0.006, 0.01, 0.022 )"),l.add(b);let S=b.onBeforeRender,A={fine:[],plain:[]},I=0;b.onBeforeRender=function(...X){if(!(Pr>=1&&I++&1)){for(let J of A.fine)J.visible=!1;for(let J of A.plain)J.visible=!0;S.apply(this,X);for(let J of A.fine)J.visible=!0;for(let J of A.plain)J.visible=!1}};let P=new ye,B=X=>{let J=Ae(X,1);return Math.atan2(-J.x,-J.z)},z=(X,J,rt,Bt,Et=B(J))=>{let se=Ae(J,rt),Nt=Ae(J,rt+Bt[2]);return qo(Nt.x,Nt.z,Bt[0],Bt[1]),P.stamp(X(),se.x,se.z,Et,1,1.5),se},N=Ae(60,Lt+70),G=B(60),q=(X,J)=>new k(X,0,J).applyAxisAngle(new k(0,1,0),G).add(N);for(let X of[-58,0,58]){let J=q(X,4);qo(J.x,J.z,40,50)}P.stamp(sd(),N.x,N.z,G,1,.3),z(od,110,Lt+44,[30,30,14]),z(fd,133,Lt+118,[48,42,15]),z(pd,162,Lt+50,[27,18,6]),z(ld,20,Lt+50,[44,36,14]),z(cd,-8,Lt+44,[26,26,17]),z(()=>Zh(4),149,Lt+47,[21,21,0],0),z(()=>Zh(9),86,Lt+150,[21,21,0],0),z(gd,131,Lt+72,[36,36,0],0);{let X=Ae(132,Lt+8);qo(X.x,X.z,7,7),P.stamp(md(),X.x,X.z,Math.atan2(-X.x,-X.z),1,1.7)}let K=Rd(),it=Ae(96,Lt+52),_t=Math.atan2(-it.x,-it.z);qo(it.x,it.z,28,28),P.stamp(K.b,it.x,it.z,_t,1,1.5),P.stamp(vd()),P.stamp(yd(r)),P.stamp(Cd()),P.stamp(rd(r,[60,110,162,20,-8])),P.stamp(_d());let Xt=new ye;Xt.stamp(Ad());let It=P.build(),Ot=Xt.build();Ot.traverse(X=>X.layers.set(1)),c.layers.enable(1),l.add(It,Ot);let _e=K.rings.map(({rad:X,q:J})=>{let rt=J.build();return rt.position.set(it.x,1.66,it.z),rt.userData.rad=X,rt.traverse(Bt=>Bt.layers.set(1)),l.add(rt),rt});cc(It),cc(Ot),_e.forEach(cc);let pt=new Rn;l.add(pt),wd(pt,16.7,innerWidth<700?1.35:1).then(X=>{A.fine.push(...X.fine),A.plain.push(...X.plain),u.matches&&Yt()});{let X=new pi(new ii({map:ci(128,0,1.3),color:16754762,transparent:!0,opacity:.14,depthWrite:!1,blending:fn,fog:!1}));X.scale.set(44,62,1),X.position.set(.3,33,0),X.layers.set(1),l.add(X);let J=new pi(new ii({map:ci(128,0,1.5),color:10470655,transparent:!0,opacity:.13,depthWrite:!1,blending:fn}));J.scale.set(20,17,1),J.position.set(-78,6.5,-46),J.layers.set(1),l.add(J)}let F=()=>new He({transparent:!0,depthWrite:!1,fog:!1,blending:fn,uniforms:{map:{value:ci(64)},time:{value:0},scale:{value:800}},vertexShader:`attribute vec3 tint; attribute float size; attribute float phase; attribute float mode; uniform float time; uniform float scale; varying vec3 vC;
      void main(){ vec3 p = position; float k = 1.0;
        if (mode > 2.5) { p.x += sin(time * 0.11 + phase * 6.0) * 2.4; p.z += cos(time * 0.09 + phase * 4.0) * 2.4; k = 0.72 + 0.28 * sin(time * 7.0 + phase * 30.0); }
        else if (mode > 1.5) { k = step(0.5, fract(time * 0.7 + phase)); }
        else if (mode > 0.5) { k = 0.72 + 0.28 * sin(time * 9.0 + phase * 40.0) * sin(time * 5.3 + phase * 17.0); }
        vC = tint * k; vec4 mv = modelViewMatrix * vec4(p, 1.0); gl_PointSize = min(size * scale / -mv.z, 96.0); gl_Position = projectionMatrix * mv; }`,fragmentShader:"uniform sampler2D map; varying vec3 vC; void main(){ float a = texture2D(map, gl_PointCoord).a; gl_FragColor = vec4(vC * a, a); }"}),W=X=>{let J=X.length,rt=new Le,Bt=new Float32Array(J*3),Et=new Float32Array(J*3),se=new Float32Array(J),Nt=new Float32Array(J),Kt=new Float32Array(J);X.forEach((Zt,xe)=>{Bt.set([Zt.x,Zt.y,Zt.z],xe*3),Et.set([Zt.colour.r,Zt.colour.g,Zt.colour.b],xe*3),se[xe]=Zt.size,Nt[xe]=h(),Kt[xe]=Zt.flicker||0}),rt.setAttribute("position",new Pe(Bt,3)),rt.setAttribute("tint",new Pe(Et,3)),rt.setAttribute("size",new Pe(se,1)),rt.setAttribute("phase",new Pe(Nt,1)),rt.setAttribute("mode",new Pe(Kt,1));let ge=new As(rt,F());return ge.frustumCulled=!1,l.add(ge),ge},j=W(Gh);{let X=l.userData.hill,J=[];for(let rt=0;rt<13;rt++){let Bt=rt/12,Et=new k(-120+Bt*128+Math.sin(Bt*9)*16,20+Bt*86,4).applyMatrix4(X.matrixWorld.identity().compose(X.position,X.quaternion,X.scale));J.push({x:Et.x,y:Et.y,z:Et.z,colour:new Vt(1,.74,.4),size:rt===12?15:6,flicker:1})}W(J)}let ot=new Vt(1,.95,.85),vt=new Vt(1,.16,.1),Gt=[];for(let X=0;X<26;X++)Gt.push({a:h()*360,v:(X%2?1:-1)*(5+h()*5),d:X%2?Lt+19.4:Lt+24});let O=W(Gt.flatMap(()=>[{x:0,y:2.3,z:0,colour:ot,size:3.2},{x:0,y:2.3,z:0,colour:vt,size:2.4}])),ft=document.createElement("canvas");ft.width=4,ft.height=128;{let X=ft.getContext("2d"),J=X.createLinearGradient(0,128,0,0);J.addColorStop(0,"rgba(255,255,255,1)"),J.addColorStop(.3,"rgba(255,255,255,.4)"),J.addColorStop(.7,"rgba(255,255,255,.08)"),J.addColorStop(1,"rgba(255,255,255,0)"),X.fillStyle=J,X.fillRect(0,0,4,128)}let dt=new mi(ft),ut=(X,J,rt,Bt,Et=16761466,se=.042)=>{let Nt=new le(new Ce(Bt,1.2,rt,20,1,!0),new Ie({map:dt,color:Et,transparent:!0,opacity:se,depthWrite:!1,blending:fn,side:un,fog:!1}));return Nt.position.set(X,rt/2+1,J),Nt.layers.set(1),l.add(Nt),Nt};for(let[X,J,rt,Bt]of[[-19.5,6,74,9],[12.5,8,62,12],[-46,8,44,8],[58,8,40,8]]){let Et=q(X,J);ut(Et.x,Et.z,rt,Bt)}{let X=Ae(110,Lt+46),J=Ae(133,Lt+120),rt=Ae(20,Lt+52);ut(X.x,X.z,60,9),ut(J.x,J.z,58,14),ut(rt.x,rt.z,46,12)}let ct=ci(256,0,1.6),yt=[];for(let X=0;X<10;X++){let J=new pi(new ii({map:ct,color:3360890,transparent:!0,opacity:.07,depthWrite:!1,blending:fn})),rt=Ae(10+X*17+h()*10,Lt-14-h()*22,5);J.position.copy(rt),J.scale.set(190+h()*110,26+h()*10,1),J.userData.a=h()*6.28,J.layers.set(1),yt.push(J),l.add(J)}t.forEach((X,J)=>{if(X.deg===void 0)return;let rt=n[J],Bt=Math.sin(rt*$e)<-.3,Et=Ae(Bt?rt+10:rt+(X.shift||0),Lt+9,Bt?6.4:8.6),se=Kf([{text:(X.line||"").toUpperCase(),y:84,size:44,colour:"#f2c66a",font:'"Geist Mono", ui-monospace, monospace',weight:500},{text:X.name,y:206,size:132,colour:"#fff6e2"}]),Nt=Math.atan2(-Et.x,-Et.z),Kt=Math.cos(Nt),ge=-Math.sin(Nt),Zt=Math.sin(Nt),xe=Math.cos(Nt),Qe=new le(new xn(15,4.7),new Ie({map:se,color:new Vt(1.35,1.35,1.35)}));Qe.position.copy(Et),Qe.rotation.y=Nt,Qe.layers.set(1),l.add(Qe);let Je=new le(new xn(15,4.7),new Ie({color:725024}));Je.position.set(Et.x-Zt*.06,Et.y,Et.z-xe*.06),Je.rotation.y=Nt+Math.PI,Je.layers.set(1),l.add(Je);for(let kn of[-6.7,6.7]){let ui=new le(new Ce(.2,.2,Et.y-1.4),new Ie({color:1711402}));ui.position.set(Et.x+Kt*kn-Zt*.1,(Et.y+1.4)/2-1.4,Et.z+ge*kn-xe*.1),ui.layers.set(1),l.add(ui)}for(let kn of[-5.4,0,5.4]){let ui=new le(new Ue(1,.18,.45),new Ie({color:new Vt(2,1.6,.9)}));ui.position.set(Et.x+Kt*kn+Zt*.8,Et.y+2.7,Et.z+ge*kn+xe*.8),ui.rotation.y=Nt,ui.layers.set(1),l.add(ui)}});let gt=Md(l),wt=bd();l.add(wt);let he=xd();l.add(he.g);let re=[];for(let X=0;X<30;X++){let J=new le(new Vr(.82,1,28).rotateX(-Math.PI/2),new Ie({color:10336767,transparent:!0,opacity:0,depthWrite:!1,blending:fn}));J.position.y=.07,J.userData.age=9,re.push(J),l.add(J)}let U=new le(new xn(1,1),new Ie({map:ci(64,0,.6),color:14674175,transparent:!0,opacity:0,depthWrite:!1,blending:fn,fog:!1,side:un}));U.scale.set(260,5,1),l.add(U);let R=9+h()*6,$=-1,at=70,xt=[0,1,2].map(()=>({t:-1,o:new k,c:[1,1,1]})),ht=[];for(let X=0;X<3*at;X++){let J=h()*2-1,rt=h()*6.283,Bt=Math.sqrt(1-J*J),Et=.55+h()*.45;ht.push(Math.cos(rt)*Bt*Et,J*Et,Math.sin(rt)*Bt*Et)}let $t=W(ht.map((X,J)=>J%3?null:{x:0,y:-80,z:0,colour:new Vt(0,0,0),size:6.5}).filter(Boolean)),Ct=7;function jt(X){if(Ct-=X,Ct<=0){let Et=xt.find(se=>se.t<0);Et&&(Et.t=0,Et.o.set(N.x+(h()-.5)*260,120+h()*80,N.z-80-h()*120),Et.c=[[1,.7,.3],[1,.35,.3],[.5,.9,1],[1,.5,.9],[.7,1,.5],[1,.95,.8]][h()*6|0]),Ct=h()<.55?.5+h()*.9:10+h()*14}let J=$t.geometry.attributes.position,rt=$t.geometry.attributes.tint,Bt=!1;xt.forEach((Et,se)=>{if(Et.t<0)return;Et.t+=X,Bt=!0;let Nt=Et.t/2.4,Kt=66*(1-Math.exp(-Et.t*2.6)),ge=Nt>=1?0:Math.pow(1-Nt,1.4)*2.2;for(let Zt=0;Zt<at;Zt++){let xe=(se*at+Zt)*3;J.setXYZ(se*at+Zt,Et.o.x+ht[xe]*Kt,Et.o.y+ht[xe+1]*Kt-7*Et.t*Et.t,Et.o.z+ht[xe+2]*Kt),rt.setXYZ(se*at+Zt,Et.c[0]*ge,Et.c[1]*ge,Et.c[2]*ge)}Nt>=1&&(Et.t=-1)}),Bt&&(J.needsUpdate=!0,rt.needsUpdate=!0)}let qt=new ec(a);qt.addPass(new nc(l,c));let Tt=new Hs(new mt(256,256),.34,.55,1);qt.addPass(Tt),qt.addPass(new ic);let Ut=X=>{if(t[X].deg===void 0)return new mt(0,40);let J=Ae(n[X],Lt-27);return new mt(J.x,J.z)},Ft=Ut(s).clone(),ne=new mt,Pt=new Set,D=Math.PI,C=null,H=s,Y=0,nt=3.5,et=-99,Z=0,bt=0,St=!0,Ht=X=>{C={i:X,p:Ut(X)},e.toward&&e.toward(X)},oe=X=>t[X].deg===void 0||t[X].home?Math.PI:(J=>Math.atan2(J.x,J.y))(Ut(X)),Se=0,Oe=!1,Vi={x:0,y:0};function zn(X){let J=0,rt=0,Bt=null;if((Pt.has("ArrowUp")||Pt.has("w"))&&(rt+=1),(Pt.has("ArrowDown")||Pt.has("s"))&&(rt-=1),(Pt.has("ArrowLeft")||Pt.has("a"))&&(J+=1),(Pt.has("ArrowRight")||Pt.has("d"))&&(J-=1),J-=Vi.x,rt+=Vi.y,J||rt)Oe=!0,C=null,et=Z;else if(C){let Kt=C.p.clone().sub(Ft),ge=Kt.length();if(ge<3&&Math.abs(Se)<4.5)Se=0,C.i!==void 0&&H!==C.i&&(H=C.i,nt=6.5,e.arrive&&e.arrive(H)),C=null;else{let Zt=Kt.clone().normalize(),xe=-Ft.dot(Zt);if(xe>0&&xe<ge){let Je=Ft.clone().addScaledVector(Zt,xe);if(Je.length()<62){let kn=Je.lengthSq()>1?Je.clone().normalize():new mt(-Zt.y,Zt.x);Zt.addScaledVector(kn,1.5*(1-Je.length()/62)+.35).normalize()}}let Qe=Math.atan2(Zt.x,Zt.y)-D;Qe=Math.atan2(Math.sin(Qe),Math.cos(Qe)),J=Math.max(-1,Math.min(1,Qe*2.4)),Bt=Math.min(20,ge*.85+.8)*(Math.abs(Qe)>1?.3:1)}}else if(H>=0&&Math.abs(Se)<.8){let Kt=oe(H)-D;Kt=Math.atan2(Math.sin(Kt),Math.cos(Kt)),D+=Kt*Math.min(1,X*1.1)}!J&&!rt&&!C&&!Oe&&!u.matches&&(nt-=X,nt<=0&&Z-et>9&&(Y=H>=0?(o.indexOf(H)+1)%o.length:Y,H>=0&&e.leave&&e.leave(),Ht(o[Y]))),J=Math.max(-1,Math.min(1,J)),rt=Math.max(-1,Math.min(1,rt)),Bt===null&&(Bt=rt>=0?rt*20:rt*8),Se+=(Bt-Se)*Math.min(1,X*(Math.abs(Bt)<Math.abs(Se)?2.4:1.2)),D+=J*X*.9*Math.min(1,.4+Math.abs(Se)/9)*(Se<-.5?-1:1),ne.set(Math.sin(D)*Se,Math.cos(D)*Se),Ft.addScaledVector(ne,X);let Et=Ft.length();Et>Lt-12&&(Ft.multiplyScalar((Lt-12)/Et),ne.dot(Ft)>0&&(Se*=Math.max(0,1-X*3.5)));let se=Math.hypot(Ft.x/44,Ft.y/26);if(se<1&&(ne.dot(Ft)<0&&(Se*=Math.max(0,1-X*3.5)),Ft.set(Ft.x/Math.max(se,.01),Ft.y/Math.max(se,.01))),H>=0)Ut(H).distanceTo(Ft)>26&&(H=-1,(!C||C.i===void 0)&&e.leave&&e.leave());else if(!C||C.i===void 0){for(let Kt=0;Kt<t.length;Kt++)if(Ut(Kt).distanceTo(Ft)<15){H=Kt,nt=6.5,e.arrive&&e.arrive(Kt);break}}let Nt=Math.abs(Se);wt.position.set(Ft.x,Math.sin(Z*1.7)*.06-.12,Ft.y),wt.rotation.set(Math.sin(Z*1.3)*.02-Math.min(.06,Nt*.003),D,Math.sin(Z*1.1)*.03-J*Nt*.004),wt.userData.flag.rotation.y=Math.sin(Z*6)*.3;for(let Kt of wt.userData.lights)Kt.material.opacity=.52+Math.sin(Z*11+Kt.position.z)*.07;if(bt-=X,Nt>2&&bt<=0){bt=.16;let Kt=re.reduce((ge,Zt)=>ge.userData.age>Zt.userData.age?ge:Zt);Kt.userData.age=0,Kt.position.set(Ft.x-Math.sin(D)*7,.07,Ft.y-Math.cos(D)*7),Kt.userData.s=Math.min(1,Nt/16)}for(let Kt of re){Kt.userData.age+=X;let ge=Kt.userData.age,Zt=Math.min(1,ge/3.2);Kt.scale.setScalar(1.6+Zt*11),Kt.material.opacity=ge<3.2?(1-Zt)*.3*(Kt.userData.s||0):0}}let ts=new k;function vi(X){b.material.uniforms.time.value=Z*.42,g.material.uniforms.time.value=Z,j.material.uniforms.time.value=Z,w.offset.x=Z*.0016;for(let rt of Wh)rt.uniforms.glow.value=rt.userData.glow*(.94+Math.sin(Z*.7+rt.id)*.08);for(let rt of yt)rt.position.x+=Math.sin(Z*.05+rt.userData.a)*X*1.2;let J=O.geometry.attributes.position;Gt.forEach((rt,Bt)=>{rt.a+=rt.v/rt.d/$e*X;let Et=rt.v>0?.55:-.55,se=Ae(rt.a+Et,rt.d),Nt=Ae(rt.a-Et,rt.d);J.setXYZ(Bt*2,se.x,2.3,se.z),J.setXYZ(Bt*2+1,Nt.x,2.3,Nt.z)}),J.needsUpdate=!0;for(let rt of gt){let Bt=Z*rt.speed+rt.phase;rt.g.position.set(rt.cx+Math.cos(Bt)*rt.rx,Math.sin(Z*1.5+rt.phase)*.05,rt.cz+Math.sin(Bt)*rt.rz),rt.g.rotation.y=Math.atan2(-Math.sin(Bt)*rt.rx*Math.sign(rt.speed),Math.cos(Bt)*rt.rz*Math.sign(rt.speed))}if(u.matches||jt(X),_e.forEach((rt,Bt)=>{rt.rotation.y=Z*1.15/rt.userData.rad,rt.scale.setScalar(1+Math.sin(Z*2.6+Bt*.6)*.016)}),he.cars.forEach((rt,Bt)=>{let Et=2.2+Z*.05-Bt*.0245;rt.position.set(Math.cos(Et)*(Lt+14.9),1.42,Math.sin(Et)*(Lt+14.9)),rt.rotation.y=-Et}),R-=X,R<=0&&$<0&&($=0,R=14+h()*16,U.userData={x:(h()-.5)*2400,y:1500+h()*500,vx:(h()<.5?-1:1)*(700+h()*500)},U.rotation.z=U.userData.vx>0?-.32:.32),$>=0){$+=X;let rt=U.userData;U.position.set(rt.x+rt.vx*$,rt.y-380*$,-3e3),U.material.opacity=Math.max(0,Math.sin(Math.min(1,$/.9)*Math.PI))*.9,$>.9&&($=-1)}}let Yn=new k,Gi=84,Zs=15,Tr=.16,Ar=Math.PI,rr=0,Rr=0,Js=-99,$s=!1,Ks=1.6,Cr=0,Pr=0;function L(){let X=i.clientWidth,J=i.clientHeight,rt=J>X;c.aspect=X/J,c.fov=rt?50:X/J<1.5?44:38,Gi=rt?104:84,Zs=rt?17:15;let Bt=e.band&&e.band(),Et=Bt?Bt[0]:J*.3,se=Bt?Bt[1]:J*.86;Tr=Math.atan(((se-.14*(se-Et))/J-.5)*2*Math.tan(c.fov*$e/2)),c.updateProjectionMatrix();let Nt=Math.min(devicePixelRatio||1,rt?Ks+.4:Ks);a.setPixelRatio(Nt),a.setSize(X,J,!1),qt.setPixelRatio(Nt),qt.setSize(X,J),g.material.uniforms.dpr.value=Nt;let Kt=J*Nt/(2*Math.tan(c.fov*$e/2));j.material.uniforms.scale.value=Kt,O.material.uniforms.scale.value=Kt,$t.material.uniforms.scale.value=Kt}let Q=null,st=u.matches?0:1;function lt(X,J){if(Q){c.position.set(...Q.from),c.lookAt(...Q.to);return}let rt=J?1:1-Math.exp(-X*2.4),Bt=J?1:1-Math.exp(-X*5),Et=D-Ar;if(Et=Math.atan2(Math.sin(Et),Math.cos(Et)),Ar+=Et*rt,!$s&&Z-Js>2.2){let Qh=Math.exp(-X*1.4);rr*=Qh,Rr*=Qh}let se=Ar+rr,Nt=Math.sin(se),Kt=Math.cos(se),ge=Ft.x-Nt*Gi,Zt=Ft.y-Kt*Gi,xe=Math.hypot(ge,Zt)||1,Qe=Math.min(1,Math.max(0,(Zt/xe-.5)/.22)),Je=Lt+6+84*Qe*Qe*(3-2*Qe);xe>Je&&(ge*=Je/xe,Zt*=Je/xe);let kn=Math.hypot(ge/54,Zt/36);kn<1&&(ge/=Math.max(kn,.05),Zt/=Math.max(kn,.05)),Yn.x+=(ge-Yn.x)*Bt,Yn.z+=(Zt-Yn.z)*Bt;let ui=Math.min(1,Math.max(.56,Math.hypot(Ft.x-Yn.x,Ft.y-Yn.z)/Gi));Yn.y+=(Zs*ui+Math.sin(Z*.31)*.4-Yn.y)*Bt,st>0&&!J&&(st=Math.max(0,st-X/3.6));let es=st*st*(3-2*st),sr=Yn.x-Nt*es*170,xc=Yn.y+es*58,Yo=Yn.z-Kt*es*170,Jh=Ft.x+Nt*30-sr,$h=Ft.y+Kt*30-Yo,Kh=Math.hypot(Jh,$h)||1,_c=Math.max(-.5,Tr-Math.atan2(xc-1,Math.hypot(Ft.x-sr,Ft.y-Yo)))+Rr;c.position.set(sr,xc,Yo),c.lookAt(sr+Jh/Kh*Math.cos(_c)*100,xc+Math.sin(_c)*100,Yo+$h/Kh*Math.cos(_c)*100)}let tt=performance.now(),Rt=0;function Wt(X){Rt=requestAnimationFrame(Wt);let J=Math.min(.05,(X-tt)/1e3);tt=X,Z+=J,zn(J),lt(J),vi(J),qt.render(),Z>4&&(Cr=J>.034?Cr+J:Math.max(0,Cr-J*.5),Cr>2.5&&Pr<3&&(Pr++,Cr=0,Ks=[1.6,1.25,1,1][Pr],Pr===3&&(Tt.enabled=!1),L()))}let Yt=()=>{cancelAnimationFrame(Rt),tt=performance.now(),St&&!document.hidden&&(u.matches?(zn(.016),lt(0,!0),vi(0),qt.render()):Rt=requestAnimationFrame(Wt))},Qt=()=>{L(),u.matches&&Yt()};addEventListener("resize",Qt),document.fonts&&document.fonts.ready&&document.fonts.ready.then(Qt),document.addEventListener("visibilitychange",Yt),u.addEventListener("change",Yt),addEventListener("keydown",X=>{let J=X.key.length===1?X.key.toLowerCase():X.key;["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","w","a","s","d"].includes(J)&&!X.metaKey&&!X.ctrlKey&&!/^(INPUT|TEXTAREA|SELECT)$/.test(document.activeElement.tagName)&&(Pt.add(J),J.startsWith("Arrow")&&X.preventDefault())}),addEventListener("keyup",X=>Pt.delete(X.key.length===1?X.key.toLowerCase():X.key)),addEventListener("blur",()=>Pt.clear());let pe=new No,ve=new mt,fe=new Zn(new k(0,1,0),0),Ee=new k;function ke(X){let J=i.getBoundingClientRect();ve.set((X.clientX-J.left)/J.width*2-1,-((X.clientY-J.top)/J.height)*2+1),pe.setFromCamera(ve,c);let rt=pe.ray.origin,Bt=pe.ray.direction;if(Bt.y>.2)return;let Et=pe.ray.intersectPlane(fe,Ee)&&Math.hypot(Ee.x,Ee.z)<Lt-14?new mt(Ee.x,Ee.z):null,se=22;if(!Et){let ge=Bt.x,Zt=Bt.z,xe=Math.hypot(ge,Zt)||1,Qe=ge/xe,Je=Zt/xe,kn=rt.x*Qe+rt.z*Je,ui=rt.x*rt.x+rt.z*rt.z-(Lt-14)*(Lt-14),es=kn*kn-ui;if(es<0)return;let sr=-kn+Math.sqrt(es);if(sr<0)return;Et=new mt(rt.x+Qe*sr,rt.z+Je*sr),se=34}Math.hypot(Et.x/48,Et.y/30)<1&&Et.multiplyScalar(1/Math.max(.05,Math.hypot(Et.x/48,Et.y/30)));let Nt=-1,Kt=se;t.forEach((ge,Zt)=>{let xe=Ut(Zt).distanceTo(Et);xe<Kt&&(Kt=xe,Nt=Zt)}),Oe=!0,et=Z,Nt>=0?Nt!==H&&Ht(Nt):C={p:Et}}let De=null;i.addEventListener("pointerdown",X=>{De={x:X.clientX,y:X.clientY,yaw:rr,tilt:Rr,id:X.pointerId,moved:!1};try{i.setPointerCapture(X.pointerId)}catch{}}),i.addEventListener("pointermove",X=>{if(!De||X.pointerId!==De.id)return;let J=X.clientX-De.x,rt=X.clientY-De.y;!De.moved&&Math.hypot(J,rt)<7||(De.moved=$s=!0,Oe=!0,Js=Z,rr=De.yaw+J/i.clientWidth*3.4,Rr=Math.max(-.2,Math.min(.3,De.tilt+rt/i.clientHeight*.9)),u.matches&&Yt())});let We=X=>{if(!De||X.pointerId!==De.id)return;let J=De;De=null,$s=!1,Js=Z,!J.moved&&X.type==="pointerup"&&ke(X)};i.addEventListener("pointerup",We),i.addEventListener("pointercancel",We);let Ve=X=>{Z+=X,zn(X),lt(X),vi(X),qt.render()},me={look(X,J,rt){Q=X?{from:X,to:J}:null,L(),Q&&rt&&(c.fov=rt,c.updateProjectionMatrix())},step(X){St=!1,cancelAnimationFrame(Rt),Ve(X)},skip(X){for(let J=0;J<X;J+=1/30)Z+=1/30,zn(1/30),lt(1/30);vi(1/30),qt.render()},drive(X,J){Vi.x=X,Vi.y=J,u.matches&&Yt()},sail(X){Oe=!0,et=Z,!(H===X&&!C)&&(u.matches?(me.jump(X),e.arrive&&e.arrive(X),vi(0),qt.render()):Ht(X))},stop(){St=!1,Yt()},resume(){St=!0,Yt()},where:()=>({x:Ft.x,z:Ft.y,docked:H,heading:D,toward:C&&C.i!==void 0?C.i:-1}),jump(X){let J=Ut(X);Ft.copy(J),ne.set(0,0),Se=0,D=Ar=oe(X),rr=Rr=0,C=null,H=X,nt=1e9,st=0,lt(0,!0),e.arrive&&e.arrive(X)},renderer:a,scene:l,camera:c};return L(),lt(0,!0),Yt(),me}window.Scene3D={start:Hx};})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2025 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
