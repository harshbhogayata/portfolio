(()=>{var ku=0,yc=1,Gu=2;var Mc=1,Vu=2,ti=3,En=0,nn=1,Be=2,Kn=0,er=1,Oe=2,Sc=3,bc=4,Wu=5,Ui=100,Xu=101,ju=102,Ku=103,qu=104,Ju=200,Yu=201,Zu=202,Qu=203,Ho=204,zo=205,$u=206,th=207,eh=208,nh=209,ih=210,rh=211,sh=212,oh=213,ah=214,ga=0,xa=1,va=2,nr=3,ya=4,Ma=5,Sa=6,ba=7,Ec=0,lh=1,ch=2,Mi=0,Ea=1,_a=2,wa=3,Jr=4,Aa=5,Ta=6,Ra=7;var _c=300,ur=301,hr=302,Ca=303,Ia=304,Ys=306,xi=1e3,Di=1001,ko=1002,xn=1003,uh=1004;var Zs=1005;var jn=1006,Pa=1007;var zi=1008;var ei=1009,wc=1010,Ac=1011,Yr=1012,Fa=1013,ki=1014,ni=1015,On=1016,Da=1017,Ua=1018,Zr=1020,Tc=35902,Rc=35899,Cc=1021,Ic=1022,Hn=1023,Br=1026,Qr=1027,Pc=1028,La=1029,Fc=1030,Na=1031;var Ba=1033,Qs=33776,$s=33777,to=33778,eo=33779,Oa=35840,Ha=35841,za=35842,ka=35843,Ga=36196,Va=37492,Wa=37496,Xa=37808,ja=37809,Ka=37810,qa=37811,Ja=37812,Ya=37813,Za=37814,Qa=37815,$a=37816,tl=37817,el=37818,nl=37819,il=37820,rl=37821,sl=36492,ol=36494,al=36495,ll=36283,cl=36284,ul=36285,hl=36286;var Es=2300,Go=2301,Oo=2302,cc=2400,uc=2401,hc=2402;var hh=3200,fh=3201;var dh=0,ph=1,qn="",Ke="srgb",ir="srgb-linear",_s="linear",me="srgb";var tr=7680;var fc=519,mh=512,gh=513,xh=514,Dc=515,vh=516,yh=517,Mh=518,Sh=519,Vo=35044;var Uc="300 es",Xn=2e3,ws=2001;var vi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let r=n[t];if(r!==void 0){let s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,t);t.target=null}}},sn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Nl=Math.PI/180,Wo=180/Math.PI;function mi(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(sn[i&255]+sn[i>>8&255]+sn[i>>16&255]+sn[i>>24&255]+"-"+sn[t&255]+sn[t>>8&255]+"-"+sn[t>>16&15|64]+sn[t>>24&255]+"-"+sn[e&63|128]+sn[e>>8&255]+"-"+sn[e>>16&255]+sn[e>>24&255]+sn[n&255]+sn[n>>8&255]+sn[n>>16&255]+sn[n>>24&255]).toLowerCase()}function ie(i,t,e){return Math.max(t,Math.min(e,i))}function Vf(i,t){return(i%t+t)%t}function Bl(i,t,e){return(1-e)*i+e*t}function Yn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function we(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var st=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6],this.y=r[1]*e+r[4]*n+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ie(this.x,t.x,e.x),this.y=ie(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ie(this.x,t,e),this.y=ie(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ie(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ie(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),r=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*r+t.x,this.y=s*r+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Nn=class{constructor(t=0,e=0,n=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=r}static slerpFlat(t,e,n,r,s,o,a){let l=n[r+0],c=n[r+1],u=n[r+2],h=n[r+3],d=s[o+0],p=s[o+1],x=s[o+2],v=s[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h;return}if(a===1){t[e+0]=d,t[e+1]=p,t[e+2]=x,t[e+3]=v;return}if(h!==v||l!==d||c!==p||u!==x){let m=1-a,f=l*d+c*p+u*x+h*v,y=f>=0?1:-1,S=1-f*f;if(S>Number.EPSILON){let b=Math.sqrt(S),M=Math.atan2(b,f*y);m=Math.sin(m*M)/b,a=Math.sin(a*M)/b}let g=a*y;if(l=l*m+d*g,c=c*m+p*g,u=u*m+x*g,h=h*m+v*g,m===1-a){let b=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=b,c*=b,u*=b,h*=b}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,r,s,o){let a=n[r],l=n[r+1],c=n[r+2],u=n[r+3],h=s[o],d=s[o+1],p=s[o+2],x=s[o+3];return t[e]=a*x+u*h+l*p-c*d,t[e+1]=l*x+u*d+c*h-a*p,t[e+2]=c*x+u*p+a*d-l*h,t[e+3]=u*x-a*h-l*d-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,r){return this._x=t,this._y=e,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,r=t._y,s=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(r/2),h=a(s/2),d=l(n/2),p=l(r/2),x=l(s/2);switch(o){case"XYZ":this._x=d*u*h+c*p*x,this._y=c*p*h-d*u*x,this._z=c*u*x+d*p*h,this._w=c*u*h-d*p*x;break;case"YXZ":this._x=d*u*h+c*p*x,this._y=c*p*h-d*u*x,this._z=c*u*x-d*p*h,this._w=c*u*h+d*p*x;break;case"ZXY":this._x=d*u*h-c*p*x,this._y=c*p*h+d*u*x,this._z=c*u*x+d*p*h,this._w=c*u*h-d*p*x;break;case"ZYX":this._x=d*u*h-c*p*x,this._y=c*p*h+d*u*x,this._z=c*u*x-d*p*h,this._w=c*u*h+d*p*x;break;case"YZX":this._x=d*u*h+c*p*x,this._y=c*p*h+d*u*x,this._z=c*u*x-d*p*h,this._w=c*u*h-d*p*x;break;case"XZY":this._x=d*u*h-c*p*x,this._y=c*p*h-d*u*x,this._z=c*u*x+d*p*h,this._w=c*u*h+d*p*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,r=Math.sin(n);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],r=e[4],s=e[8],o=e[1],a=e[5],l=e[9],c=e[2],u=e[6],h=e[10],d=n+a+h;if(d>0){let p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(n>a&&n>h){let p=2*Math.sqrt(1+n-a-h);this._w=(u-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>h){let p=2*Math.sqrt(1+a-n-h);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+u)/p}else{let p=2*Math.sqrt(1+h-n-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ie(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let r=Math.min(1,e/n);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,r=t._y,s=t._z,o=t._w,a=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-r*a,this._w=o*u-n*a-r*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,r=this._y,s=this._z,o=this._w,a=o*t._w+n*t._x+r*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;let l=1-a*a;if(l<=Number.EPSILON){let p=1-e;return this._w=p*o+e*this._w,this._x=p*n+e*this._x,this._y=p*r+e*this._y,this._z=p*s+e*this._z,this.normalize(),this}let c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-e)*u)/c,d=Math.sin(e*u)/c;return this._w=o*h+this._w*d,this._x=n*h+this._x*d,this._y=r*h+this._y*d,this._z=s*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},L=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(du.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(du.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*r,this.y=s[1]*e+s[4]*n+s[7]*r,this.z=s[2]*e+s[5]*n+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,r=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,r=this.z,s=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*r-a*n),u=2*(a*e-s*r),h=2*(s*n-o*e);return this.x=e+l*c+o*h-a*u,this.y=n+l*u+a*c-s*h,this.z=r+l*h+s*u-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*r,this.y=s[1]*e+s[5]*n+s[9]*r,this.z=s[2]*e+s[6]*n+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ie(this.x,t.x,e.x),this.y=ie(this.y,t.y,e.y),this.z=ie(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ie(this.x,t,e),this.y=ie(this.y,t,e),this.z=ie(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ie(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,r=t.y,s=t.z,o=e.x,a=e.y,l=e.z;return this.x=r*l-s*a,this.y=s*o-n*l,this.z=n*a-r*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ol.copy(this).projectOnVector(t),this.sub(Ol)}reflect(t){return this.sub(Ol.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ie(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,r=this.z-t.z;return e*e+n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let r=Math.sin(e)*t;return this.x=r*Math.sin(n),this.y=Math.cos(e)*t,this.z=r*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Ol=new L,du=new Nn,Qt=class i{constructor(t,e,n,r,s,o,a,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,o,a,l,c)}set(t,e,n,r,s,o,a,l,c){let u=this.elements;return u[0]=t,u[1]=r,u[2]=a,u[3]=e,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,r=e.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],d=n[2],p=n[5],x=n[8],v=r[0],m=r[3],f=r[6],y=r[1],S=r[4],g=r[7],b=r[2],M=r[5],_=r[8];return s[0]=o*v+a*y+l*b,s[3]=o*m+a*S+l*M,s[6]=o*f+a*g+l*_,s[1]=c*v+u*y+h*b,s[4]=c*m+u*S+h*M,s[7]=c*f+u*g+h*_,s[2]=d*v+p*y+x*b,s[5]=d*m+p*S+x*M,s[8]=d*f+p*g+x*_,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8];return e*o*u-e*a*c-n*s*u+n*a*l+r*s*c-r*o*l}invert(){let t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=u*o-a*c,d=a*l-u*s,p=c*s-o*l,x=e*h+n*d+r*p;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/x;return t[0]=h*v,t[1]=(r*c-u*n)*v,t[2]=(a*n-r*o)*v,t[3]=d*v,t[4]=(u*e-r*l)*v,t[5]=(r*s-a*e)*v,t[6]=p*v,t[7]=(n*l-c*e)*v,t[8]=(o*e-n*s)*v,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,r,s,o,a){let l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-r*c,r*l,-r*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Hl.makeScale(t,e)),this}rotate(t){return this.premultiply(Hl.makeRotation(-t)),this}translate(t,e){return this.premultiply(Hl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let r=0;r<9;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Hl=new Qt;function Lc(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function As(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function bh(){let i=As("canvas");return i.style.display="block",i}var pu={};function Or(i){i in pu||(pu[i]=!0,console.warn(i))}function Eh(i,t,e){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}var mu=new Qt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),gu=new Qt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Wf(){let i={enabled:!0,workingColorSpace:ir,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===me&&(r.r=gi(r.r),r.g=gi(r.g),r.b=gi(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===me&&(r.r=Lr(r.r),r.g=Lr(r.g),r.b=Lr(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===qn?_s:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Or("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Or("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[ir]:{primaries:t,whitePoint:n,transfer:_s,toXYZ:mu,fromXYZ:gu,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ke},outputColorSpaceConfig:{drawingBufferColorSpace:Ke}},[Ke]:{primaries:t,whitePoint:n,transfer:me,toXYZ:mu,fromXYZ:gu,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ke}}}),i}var oe=Wf();function gi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Lr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var yr,Xo=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{yr===void 0&&(yr=As("canvas")),yr.width=t.width,yr.height=t.height;let r=yr.getContext("2d");t instanceof ImageData?r.putImageData(t,0,0):r.drawImage(t,0,0,t.width,t.height),n=yr}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=As("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let r=n.getImageData(0,0,t.width,t.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=gi(s[o]/255)*255;return n.putImageData(r,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(gi(e[n]/255)*255):e[n]=gi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Xf=0,Hr=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Xf++}),this.uuid=mi(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(zl(r[o].image)):s.push(zl(r[o]))}else s=zl(r);n.url=s}return e||(t.images[this.uuid]=n),n}};function zl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Xo.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var jf=0,kl=new L,tn=class i extends vi{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Di,r=Di,s=jn,o=zi,a=Hn,l=ei,c=i.DEFAULT_ANISOTROPY,u=qn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:jf++}),this.uuid=mi(),this.name="",this.source=new Hr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new st(0,0),this.repeat=new st(1,1),this.center=new st(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Qt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(kl).x}get height(){return this.source.getSize(kl).y}get depth(){return this.source.getSize(kl).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let r=this[e];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==_c)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case xi:t.x=t.x-Math.floor(t.x);break;case Di:t.x=t.x<0?0:1;break;case ko:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case xi:t.y=t.y-Math.floor(t.y);break;case Di:t.y=t.y<0?0:1;break;case ko:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};tn.DEFAULT_IMAGE=null;tn.DEFAULT_MAPPING=_c;tn.DEFAULT_ANISOTROPY=1;var Ce=class i{constructor(t=0,e=0,n=0,r=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,r){return this.x=t,this.y=e,this.z=n,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,r=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*r+o[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,r,s,l=t.elements,c=l[0],u=l[4],h=l[8],d=l[1],p=l[5],x=l[9],v=l[2],m=l[6],f=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-v)<.01&&Math.abs(x-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+v)<.1&&Math.abs(x+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let S=(c+1)/2,g=(p+1)/2,b=(f+1)/2,M=(u+d)/4,_=(h+v)/4,R=(x+m)/4;return S>g&&S>b?S<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(S),r=M/n,s=_/n):g>b?g<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(g),n=M/r,s=R/r):b<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(b),n=_/s,r=R/s),this.set(n,r,s,e),this}let y=Math.sqrt((m-x)*(m-x)+(h-v)*(h-v)+(d-u)*(d-u));return Math.abs(y)<.001&&(y=1),this.x=(m-x)/y,this.y=(h-v)/y,this.z=(d-u)/y,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ie(this.x,t.x,e.x),this.y=ie(this.y,t.y,e.y),this.z=ie(this.z,t.z,e.z),this.w=ie(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ie(this.x,t,e),this.y=ie(this.y,t,e),this.z=ie(this.z,t,e),this.w=ie(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ie(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},jo=class extends vi{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:jn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Ce(0,0,t,e),this.scissorTest=!1,this.viewport=new Ce(0,0,t,e);let r={width:t,height:e,depth:n.depth},s=new tn(r);this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){let e={minFilter:jn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=n,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let r=Object.assign({},t.textures[e].image);this.textures[e].source=new Hr(r)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Je=class extends jo{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Ts=class extends tn{constructor(t=null,e=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=xn,this.minFilter=xn,this.wrapR=Di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ko=class extends tn{constructor(t=null,e=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=xn,this.minFilter=xn,this.wrapR=Di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Li=class{constructor(t=new L(1/0,1/0,1/0),e=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Gn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Gn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Gn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Gn):Gn.fromBufferAttribute(s,o),Gn.applyMatrix4(t.matrixWorld),this.expandByPoint(Gn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ho.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ho.copy(n.boundingBox)),ho.applyMatrix4(t.matrixWorld),this.union(ho)}let r=t.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Gn),Gn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ds),fo.subVectors(this.max,ds),Mr.subVectors(t.a,ds),Sr.subVectors(t.b,ds),br.subVectors(t.c,ds),Ti.subVectors(Sr,Mr),Ri.subVectors(br,Sr),Yi.subVectors(Mr,br);let e=[0,-Ti.z,Ti.y,0,-Ri.z,Ri.y,0,-Yi.z,Yi.y,Ti.z,0,-Ti.x,Ri.z,0,-Ri.x,Yi.z,0,-Yi.x,-Ti.y,Ti.x,0,-Ri.y,Ri.x,0,-Yi.y,Yi.x,0];return!Gl(e,Mr,Sr,br,fo)||(e=[1,0,0,0,1,0,0,0,1],!Gl(e,Mr,Sr,br,fo))?!1:(po.crossVectors(Ti,Ri),e=[po.x,po.y,po.z],Gl(e,Mr,Sr,br,fo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Gn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Gn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ci[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ci[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ci[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ci[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ci[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ci[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ci[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ci[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ci),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},ci=[new L,new L,new L,new L,new L,new L,new L,new L],Gn=new L,ho=new Li,Mr=new L,Sr=new L,br=new L,Ti=new L,Ri=new L,Yi=new L,ds=new L,fo=new L,po=new L,Zi=new L;function Gl(i,t,e,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){Zi.fromArray(i,s);let a=r.x*Math.abs(Zi.x)+r.y*Math.abs(Zi.y)+r.z*Math.abs(Zi.z),l=t.dot(Zi),c=e.dot(Zi),u=n.dot(Zi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}var Kf=new Li,ps=new L,Vl=new L,rr=class{constructor(t=new L,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Kf.setFromPoints(t).getCenter(n);let r=0;for(let s=0,o=t.length;s<o;s++)r=Math.max(r,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ps.subVectors(t,this.center);let e=ps.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),r=(n-this.radius)*.5;this.center.addScaledVector(ps,r/n),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Vl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ps.copy(t.center).add(Vl)),this.expandByPoint(ps.copy(t.center).sub(Vl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},ui=new L,Wl=new L,mo=new L,Ci=new L,Xl=new L,go=new L,jl=new L,zr=class{constructor(t=new L,e=new L(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ui)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=ui.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ui.copy(this.origin).addScaledVector(this.direction,e),ui.distanceToSquared(t))}distanceSqToSegment(t,e,n,r){Wl.copy(t).add(e).multiplyScalar(.5),mo.copy(e).sub(t).normalize(),Ci.copy(this.origin).sub(Wl);let s=t.distanceTo(e)*.5,o=-this.direction.dot(mo),a=Ci.dot(this.direction),l=-Ci.dot(mo),c=Ci.lengthSq(),u=Math.abs(1-o*o),h,d,p,x;if(u>0)if(h=o*l-a,d=o*a-l,x=s*u,h>=0)if(d>=-x)if(d<=x){let v=1/u;h*=v,d*=v,p=h*(h+o*d+2*a)+d*(o*h+d+2*l)+c}else d=s,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*l)+c;else d=-s,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*l)+c;else d<=-x?(h=Math.max(0,-(-o*s+a)),d=h>0?-s:Math.min(Math.max(-s,-l),s),p=-h*h+d*(d+2*l)+c):d<=x?(h=0,d=Math.min(Math.max(-s,-l),s),p=d*(d+2*l)+c):(h=Math.max(0,-(o*s+a)),d=h>0?s:Math.min(Math.max(-s,-l),s),p=-h*h+d*(d+2*l)+c);else d=o>0?-s:s,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Wl).addScaledVector(mo,d),p}intersectSphere(t,e){ui.subVectors(t.center,this.origin);let n=ui.dot(this.direction),r=ui.dot(ui)-n*n,s=t.radius*t.radius;if(r>s)return null;let o=Math.sqrt(s-r),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,r,s,o,a,l,c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,r=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,r=(t.min.x-d.x)*c),u>=0?(s=(t.min.y-d.y)*u,o=(t.max.y-d.y)*u):(s=(t.max.y-d.y)*u,o=(t.min.y-d.y)*u),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(t.min.z-d.z)*h,l=(t.max.z-d.z)*h):(a=(t.max.z-d.z)*h,l=(t.min.z-d.z)*h),n>l||a>r)||((a>n||n!==n)&&(n=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,e)}intersectsBox(t){return this.intersectBox(t,ui)!==null}intersectTriangle(t,e,n,r,s){Xl.subVectors(e,t),go.subVectors(n,t),jl.crossVectors(Xl,go);let o=this.direction.dot(jl),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ci.subVectors(this.origin,t);let l=a*this.direction.dot(go.crossVectors(Ci,go));if(l<0)return null;let c=a*this.direction.dot(Xl.cross(Ci));if(c<0||l+c>o)return null;let u=-a*Ci.dot(jl);return u<0?null:this.at(u/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Se=class i{constructor(t,e,n,r,s,o,a,l,c,u,h,d,p,x,v,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,o,a,l,c,u,h,d,p,x,v,m)}set(t,e,n,r,s,o,a,l,c,u,h,d,p,x,v,m){let f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=r,f[1]=s,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=u,f[10]=h,f[14]=d,f[3]=p,f[7]=x,f[11]=v,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,r=1/Er.setFromMatrixColumn(t,0).length(),s=1/Er.setFromMatrixColumn(t,1).length(),o=1/Er.setFromMatrixColumn(t,2).length();return e[0]=n[0]*r,e[1]=n[1]*r,e[2]=n[2]*r,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,r=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(t.order==="XYZ"){let d=o*u,p=o*h,x=a*u,v=a*h;e[0]=l*u,e[4]=-l*h,e[8]=c,e[1]=p+x*c,e[5]=d-v*c,e[9]=-a*l,e[2]=v-d*c,e[6]=x+p*c,e[10]=o*l}else if(t.order==="YXZ"){let d=l*u,p=l*h,x=c*u,v=c*h;e[0]=d+v*a,e[4]=x*a-p,e[8]=o*c,e[1]=o*h,e[5]=o*u,e[9]=-a,e[2]=p*a-x,e[6]=v+d*a,e[10]=o*l}else if(t.order==="ZXY"){let d=l*u,p=l*h,x=c*u,v=c*h;e[0]=d-v*a,e[4]=-o*h,e[8]=x+p*a,e[1]=p+x*a,e[5]=o*u,e[9]=v-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let d=o*u,p=o*h,x=a*u,v=a*h;e[0]=l*u,e[4]=x*c-p,e[8]=d*c+v,e[1]=l*h,e[5]=v*c+d,e[9]=p*c-x,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let d=o*l,p=o*c,x=a*l,v=a*c;e[0]=l*u,e[4]=v-d*h,e[8]=x*h+p,e[1]=h,e[5]=o*u,e[9]=-a*u,e[2]=-c*u,e[6]=p*h+x,e[10]=d-v*h}else if(t.order==="XZY"){let d=o*l,p=o*c,x=a*l,v=a*c;e[0]=l*u,e[4]=-h,e[8]=c*u,e[1]=d*h+v,e[5]=o*u,e[9]=p*h-x,e[2]=x*h-p,e[6]=a*u,e[10]=v*h+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(qf,t,Jf)}lookAt(t,e,n){let r=this.elements;return Sn.subVectors(t,e),Sn.lengthSq()===0&&(Sn.z=1),Sn.normalize(),Ii.crossVectors(n,Sn),Ii.lengthSq()===0&&(Math.abs(n.z)===1?Sn.x+=1e-4:Sn.z+=1e-4,Sn.normalize(),Ii.crossVectors(n,Sn)),Ii.normalize(),xo.crossVectors(Sn,Ii),r[0]=Ii.x,r[4]=xo.x,r[8]=Sn.x,r[1]=Ii.y,r[5]=xo.y,r[9]=Sn.y,r[2]=Ii.z,r[6]=xo.z,r[10]=Sn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,r=e.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],d=n[9],p=n[13],x=n[2],v=n[6],m=n[10],f=n[14],y=n[3],S=n[7],g=n[11],b=n[15],M=r[0],_=r[4],R=r[8],E=r[12],w=r[1],C=r[5],U=r[9],B=r[13],H=r[2],j=r[6],k=r[10],tt=r[14],K=r[3],ut=r[7],bt=r[11],Lt=r[15];return s[0]=o*M+a*w+l*H+c*K,s[4]=o*_+a*C+l*j+c*ut,s[8]=o*R+a*U+l*k+c*bt,s[12]=o*E+a*B+l*tt+c*Lt,s[1]=u*M+h*w+d*H+p*K,s[5]=u*_+h*C+d*j+p*ut,s[9]=u*R+h*U+d*k+p*bt,s[13]=u*E+h*B+d*tt+p*Lt,s[2]=x*M+v*w+m*H+f*K,s[6]=x*_+v*C+m*j+f*ut,s[10]=x*R+v*U+m*k+f*bt,s[14]=x*E+v*B+m*tt+f*Lt,s[3]=y*M+S*w+g*H+b*K,s[7]=y*_+S*C+g*j+b*ut,s[11]=y*R+S*U+g*k+b*bt,s[15]=y*E+S*B+g*tt+b*Lt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],r=t[8],s=t[12],o=t[1],a=t[5],l=t[9],c=t[13],u=t[2],h=t[6],d=t[10],p=t[14],x=t[3],v=t[7],m=t[11],f=t[15];return x*(+s*l*h-r*c*h-s*a*d+n*c*d+r*a*p-n*l*p)+v*(+e*l*p-e*c*d+s*o*d-r*o*p+r*c*u-s*l*u)+m*(+e*c*h-e*a*p-s*o*h+n*o*p+s*a*u-n*c*u)+f*(-r*a*u-e*l*h+e*a*d+r*o*h-n*o*d+n*l*u)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=t[9],d=t[10],p=t[11],x=t[12],v=t[13],m=t[14],f=t[15],y=h*m*c-v*d*c+v*l*p-a*m*p-h*l*f+a*d*f,S=x*d*c-u*m*c-x*l*p+o*m*p+u*l*f-o*d*f,g=u*v*c-x*h*c+x*a*p-o*v*p-u*a*f+o*h*f,b=x*h*l-u*v*l-x*a*d+o*v*d+u*a*m-o*h*m,M=e*y+n*S+r*g+s*b;if(M===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let _=1/M;return t[0]=y*_,t[1]=(v*d*s-h*m*s-v*r*p+n*m*p+h*r*f-n*d*f)*_,t[2]=(a*m*s-v*l*s+v*r*c-n*m*c-a*r*f+n*l*f)*_,t[3]=(h*l*s-a*d*s-h*r*c+n*d*c+a*r*p-n*l*p)*_,t[4]=S*_,t[5]=(u*m*s-x*d*s+x*r*p-e*m*p-u*r*f+e*d*f)*_,t[6]=(x*l*s-o*m*s-x*r*c+e*m*c+o*r*f-e*l*f)*_,t[7]=(o*d*s-u*l*s+u*r*c-e*d*c-o*r*p+e*l*p)*_,t[8]=g*_,t[9]=(x*h*s-u*v*s-x*n*p+e*v*p+u*n*f-e*h*f)*_,t[10]=(o*v*s-x*a*s+x*n*c-e*v*c-o*n*f+e*a*f)*_,t[11]=(u*a*s-o*h*s-u*n*c+e*h*c+o*n*p-e*a*p)*_,t[12]=b*_,t[13]=(u*v*r-x*h*r+x*n*d-e*v*d-u*n*m+e*h*m)*_,t[14]=(x*a*r-o*v*r-x*n*l+e*v*l+o*n*m-e*a*m)*_,t[15]=(o*h*r-u*a*r+u*n*l-e*h*l-o*n*d+e*a*d)*_,this}scale(t){let e=this.elements,n=t.x,r=t.y,s=t.z;return e[0]*=n,e[4]*=r,e[8]*=s,e[1]*=n,e[5]*=r,e[9]*=s,e[2]*=n,e[6]*=r,e[10]*=s,e[3]*=n,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,r))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),r=Math.sin(e),s=1-n,o=t.x,a=t.y,l=t.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+n,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,r,s,o){return this.set(1,n,s,0,t,1,o,0,e,r,1,0,0,0,0,1),this}compose(t,e,n){let r=this.elements,s=e._x,o=e._y,a=e._z,l=e._w,c=s+s,u=o+o,h=a+a,d=s*c,p=s*u,x=s*h,v=o*u,m=o*h,f=a*h,y=l*c,S=l*u,g=l*h,b=n.x,M=n.y,_=n.z;return r[0]=(1-(v+f))*b,r[1]=(p+g)*b,r[2]=(x-S)*b,r[3]=0,r[4]=(p-g)*M,r[5]=(1-(d+f))*M,r[6]=(m+y)*M,r[7]=0,r[8]=(x+S)*_,r[9]=(m-y)*_,r[10]=(1-(d+v))*_,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,n){let r=this.elements,s=Er.set(r[0],r[1],r[2]).length(),o=Er.set(r[4],r[5],r[6]).length(),a=Er.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],Vn.copy(this);let c=1/s,u=1/o,h=1/a;return Vn.elements[0]*=c,Vn.elements[1]*=c,Vn.elements[2]*=c,Vn.elements[4]*=u,Vn.elements[5]*=u,Vn.elements[6]*=u,Vn.elements[8]*=h,Vn.elements[9]*=h,Vn.elements[10]*=h,e.setFromRotationMatrix(Vn),n.x=s,n.y=o,n.z=a,this}makePerspective(t,e,n,r,s,o,a=Xn,l=!1){let c=this.elements,u=2*s/(e-t),h=2*s/(n-r),d=(e+t)/(e-t),p=(n+r)/(n-r),x,v;if(l)x=s/(o-s),v=o*s/(o-s);else if(a===Xn)x=-(o+s)/(o-s),v=-2*o*s/(o-s);else if(a===ws)x=-o/(o-s),v=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=x,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,r,s,o,a=Xn,l=!1){let c=this.elements,u=2/(e-t),h=2/(n-r),d=-(e+t)/(e-t),p=-(n+r)/(n-r),x,v;if(l)x=1/(o-s),v=o/(o-s);else if(a===Xn)x=-2/(o-s),v=-(o+s)/(o-s);else if(a===ws)x=-1/(o-s),v=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=h,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=x,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let r=0;r<16;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Er=new L,Vn=new Se,qf=new L(0,0,0),Jf=new L(1,1,1),Ii=new L,xo=new L,Sn=new L,xu=new Se,vu=new Nn,Zn=class i{constructor(t=0,e=0,n=0,r=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,r=this._order){return this._x=t,this._y=e,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let r=t.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],h=r[2],d=r[6],p=r[10];switch(e){case"XYZ":this._y=Math.asin(ie(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ie(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(ie(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-ie(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ie(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-ie(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return xu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(xu,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return vu.setFromEuler(this),this.setFromQuaternion(vu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Zn.DEFAULT_ORDER="XYZ";var kr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Yf=0,yu=new L,_r=new Nn,hi=new Se,vo=new L,ms=new L,Zf=new L,Qf=new Nn,Mu=new L(1,0,0),Su=new L(0,1,0),bu=new L(0,0,1),Eu={type:"added"},$f={type:"removed"},wr={type:"childadded",child:null},Kl={type:"childremoved",child:null},vn=class i extends vi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Yf++}),this.uuid=mi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new L,e=new Zn,n=new Nn,r=new L(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Se},normalMatrix:{value:new Qt}}),this.matrix=new Se,this.matrixWorld=new Se,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new kr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return _r.setFromAxisAngle(t,e),this.quaternion.multiply(_r),this}rotateOnWorldAxis(t,e){return _r.setFromAxisAngle(t,e),this.quaternion.premultiply(_r),this}rotateX(t){return this.rotateOnAxis(Mu,t)}rotateY(t){return this.rotateOnAxis(Su,t)}rotateZ(t){return this.rotateOnAxis(bu,t)}translateOnAxis(t,e){return yu.copy(t).applyQuaternion(this.quaternion),this.position.add(yu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Mu,t)}translateY(t){return this.translateOnAxis(Su,t)}translateZ(t){return this.translateOnAxis(bu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(hi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?vo.copy(t):vo.set(t,e,n);let r=this.parent;this.updateWorldMatrix(!0,!1),ms.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?hi.lookAt(ms,vo,this.up):hi.lookAt(vo,ms,this.up),this.quaternion.setFromRotationMatrix(hi),r&&(hi.extractRotation(r.matrixWorld),_r.setFromRotationMatrix(hi),this.quaternion.premultiply(_r.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Eu),wr.child=t,this.dispatchEvent(wr),wr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent($f),Kl.child=t,this.dispatchEvent(Kl),Kl.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),hi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),hi.multiply(t.parent.matrixWorld)),t.applyMatrix4(hi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Eu),wr.child=t,this.dispatchEvent(wr),wr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,r=this.children.length;n<r;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ms,t,Zf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ms,Qf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(t),r.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let h=l[c];s(t.shapes,h)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(t.materials,this.material[l]));r.material=a}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];r.animations.push(s(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),u=o(t.images),h=o(t.shapes),d=o(t.skeletons),p=o(t.animations),x=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),x.length>0&&(n.nodes=x)}return n.object=r,n;function o(a){let l=[];for(let c in a){let u=a[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let r=t.children[n];this.add(r.clone())}return this}};vn.DEFAULT_UP=new L(0,1,0);vn.DEFAULT_MATRIX_AUTO_UPDATE=!0;vn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Wn=new L,fi=new L,ql=new L,di=new L,Ar=new L,Tr=new L,_u=new L,Jl=new L,Yl=new L,Zl=new L,Ql=new Ce,$l=new Ce,tc=new Ce,pi=class i{constructor(t=new L,e=new L,n=new L){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,r){r.subVectors(n,e),Wn.subVectors(t,e),r.cross(Wn);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,n,r,s){Wn.subVectors(r,e),fi.subVectors(n,e),ql.subVectors(t,e);let o=Wn.dot(Wn),a=Wn.dot(fi),l=Wn.dot(ql),c=fi.dot(fi),u=fi.dot(ql),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;let d=1/h,p=(c*l-a*u)*d,x=(o*u-a*l)*d;return s.set(1-p-x,x,p)}static containsPoint(t,e,n,r){return this.getBarycoord(t,e,n,r,di)===null?!1:di.x>=0&&di.y>=0&&di.x+di.y<=1}static getInterpolation(t,e,n,r,s,o,a,l){return this.getBarycoord(t,e,n,r,di)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,di.x),l.addScaledVector(o,di.y),l.addScaledVector(a,di.z),l)}static getInterpolatedAttribute(t,e,n,r,s,o){return Ql.setScalar(0),$l.setScalar(0),tc.setScalar(0),Ql.fromBufferAttribute(t,e),$l.fromBufferAttribute(t,n),tc.fromBufferAttribute(t,r),o.setScalar(0),o.addScaledVector(Ql,s.x),o.addScaledVector($l,s.y),o.addScaledVector(tc,s.z),o}static isFrontFacing(t,e,n,r){return Wn.subVectors(n,e),fi.subVectors(t,e),Wn.cross(fi).dot(r)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,r){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,n,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Wn.subVectors(this.c,this.b),fi.subVectors(this.a,this.b),Wn.cross(fi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,r,s){return i.getInterpolation(t,this.a,this.b,this.c,e,n,r,s)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,r=this.b,s=this.c,o,a;Ar.subVectors(r,n),Tr.subVectors(s,n),Jl.subVectors(t,n);let l=Ar.dot(Jl),c=Tr.dot(Jl);if(l<=0&&c<=0)return e.copy(n);Yl.subVectors(t,r);let u=Ar.dot(Yl),h=Tr.dot(Yl);if(u>=0&&h<=u)return e.copy(r);let d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),e.copy(n).addScaledVector(Ar,o);Zl.subVectors(t,s);let p=Ar.dot(Zl),x=Tr.dot(Zl);if(x>=0&&p<=x)return e.copy(s);let v=p*c-l*x;if(v<=0&&c>=0&&x<=0)return a=c/(c-x),e.copy(n).addScaledVector(Tr,a);let m=u*x-p*h;if(m<=0&&h-u>=0&&p-x>=0)return _u.subVectors(s,r),a=(h-u)/(h-u+(p-x)),e.copy(r).addScaledVector(_u,a);let f=1/(m+v+d);return o=v*f,a=d*f,e.copy(n).addScaledVector(Ar,o).addScaledVector(Tr,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},_h={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Pi={h:0,s:0,l:0},yo={h:0,s:0,l:0};function ec(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var yt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ke){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,oe.colorSpaceToWorking(this,e),this}setRGB(t,e,n,r=oe.workingColorSpace){return this.r=t,this.g=e,this.b=n,oe.colorSpaceToWorking(this,r),this}setHSL(t,e,n,r=oe.workingColorSpace){if(t=Vf(t,1),e=ie(e,0,1),n=ie(n,0,1),e===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=ec(o,s,t+1/3),this.g=ec(o,s,t),this.b=ec(o,s,t-1/3)}return oe.colorSpaceToWorking(this,r),this}setStyle(t,e=Ke){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s,o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){let s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ke){let n=_h[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=gi(t.r),this.g=gi(t.g),this.b=gi(t.b),this}copyLinearToSRGB(t){return this.r=Lr(t.r),this.g=Lr(t.g),this.b=Lr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ke){return oe.workingToColorSpace(on.copy(this),t),Math.round(ie(on.r*255,0,255))*65536+Math.round(ie(on.g*255,0,255))*256+Math.round(ie(on.b*255,0,255))}getHexString(t=Ke){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=oe.workingColorSpace){oe.workingToColorSpace(on.copy(this),e);let n=on.r,r=on.g,s=on.b,o=Math.max(n,r,s),a=Math.min(n,r,s),l,c,u=(a+o)/2;if(a===o)l=0,c=0;else{let h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-n)/h+2;break;case s:l=(n-r)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=oe.workingColorSpace){return oe.workingToColorSpace(on.copy(this),e),t.r=on.r,t.g=on.g,t.b=on.b,t}getStyle(t=Ke){oe.workingToColorSpace(on.copy(this),t);let e=on.r,n=on.g,r=on.b;return t!==Ke?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(t,e,n){return this.getHSL(Pi),this.setHSL(Pi.h+t,Pi.s+e,Pi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Pi),t.getHSL(yo);let n=Bl(Pi.h,yo.h,e),r=Bl(Pi.s,yo.s,e),s=Bl(Pi.l,yo.l,e);return this.setHSL(n,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*r,this.g=s[1]*e+s[4]*n+s[7]*r,this.b=s[2]*e+s[5]*n+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},on=new yt;yt.NAMES=_h;var td=0,yi=class extends vi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:td++}),this.uuid=mi(),this.name="",this.type="Material",this.blending=er,this.side=En,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ho,this.blendDst=zo,this.blendEquation=Ui,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new yt(0,0,0),this.blendAlpha=0,this.depthFunc=nr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=fc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=tr,this.stencilZFail=tr,this.stencilZPass=tr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==er&&(n.blending=this.blending),this.side!==En&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ho&&(n.blendSrc=this.blendSrc),this.blendDst!==zo&&(n.blendDst=this.blendDst),this.blendEquation!==Ui&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==nr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==fc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==tr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==tr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==tr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){let o=[];for(let a in s){let l=s[a];delete l.metadata,o.push(l)}return o}if(e){let s=r(t.textures),o=r(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let r=e.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},se=class extends yi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new yt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zn,this.combine=Ec,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var ze=new L,Mo=new st,ed=0,Fe=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ed++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Vo,this.updateRanges=[],this.gpuType=ni,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[n+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Mo.fromBufferAttribute(this,e),Mo.applyMatrix3(t),this.setXY(e,Mo.x,Mo.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ze.fromBufferAttribute(this,e),ze.applyMatrix3(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ze.fromBufferAttribute(this,e),ze.applyMatrix4(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ze.fromBufferAttribute(this,e),ze.applyNormalMatrix(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ze.fromBufferAttribute(this,e),ze.transformDirection(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Yn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=we(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Yn(e,this.array)),e}setX(t,e){return this.normalized&&(e=we(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Yn(e,this.array)),e}setY(t,e){return this.normalized&&(e=we(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Yn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=we(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Yn(e,this.array)),e}setW(t,e){return this.normalized&&(e=we(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=we(e,this.array),n=we(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,r){return t*=this.itemSize,this.normalized&&(e=we(e,this.array),n=we(n,this.array),r=we(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t*=this.itemSize,this.normalized&&(e=we(e,this.array),n=we(n,this.array),r=we(r,this.array),s=we(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Vo&&(t.usage=this.usage),t}};var Rs=class extends Fe{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Cs=class extends Fe{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Gt=class extends Fe{constructor(t,e,n){super(new Float32Array(t),e,n)}},nd=0,Ln=new Se,nc=new vn,Rr=new L,bn=new Li,gs=new Li,je=new L,xe=class i extends vi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:nd++}),this.uuid=mi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Lc(t)?Cs:Rs)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new Qt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ln.makeRotationFromQuaternion(t),this.applyMatrix4(Ln),this}rotateX(t){return Ln.makeRotationX(t),this.applyMatrix4(Ln),this}rotateY(t){return Ln.makeRotationY(t),this.applyMatrix4(Ln),this}rotateZ(t){return Ln.makeRotationZ(t),this.applyMatrix4(Ln),this}translate(t,e,n){return Ln.makeTranslation(t,e,n),this.applyMatrix4(Ln),this}scale(t,e,n){return Ln.makeScale(t,e,n),this.applyMatrix4(Ln),this}lookAt(t){return nc.lookAt(t),nc.updateMatrix(),this.applyMatrix4(nc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Rr).negate(),this.translate(Rr.x,Rr.y,Rr.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let r=0,s=t.length;r<s;r++){let o=t[r];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Gt(n,3))}else{let n=Math.min(t.length,e.count);for(let r=0;r<n;r++){let s=t[r];e.setXYZ(r,s.x,s.y,s.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Li);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,r=e.length;n<r;n++){let s=e[n];bn.setFromBufferAttribute(s),this.morphTargetsRelative?(je.addVectors(this.boundingBox.min,bn.min),this.boundingBox.expandByPoint(je),je.addVectors(this.boundingBox.max,bn.max),this.boundingBox.expandByPoint(je)):(this.boundingBox.expandByPoint(bn.min),this.boundingBox.expandByPoint(bn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new rr);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(t){let n=this.boundingSphere.center;if(bn.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){let a=e[s];gs.setFromBufferAttribute(a),this.morphTargetsRelative?(je.addVectors(bn.min,gs.min),bn.expandByPoint(je),je.addVectors(bn.max,gs.max),bn.expandByPoint(je)):(bn.expandByPoint(gs.min),bn.expandByPoint(gs.max))}bn.getCenter(n);let r=0;for(let s=0,o=t.count;s<o;s++)je.fromBufferAttribute(t,s),r=Math.max(r,n.distanceToSquared(je));if(e)for(let s=0,o=e.length;s<o;s++){let a=e[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)je.fromBufferAttribute(a,c),l&&(Rr.fromBufferAttribute(t,c),je.add(Rr)),r=Math.max(r,n.distanceToSquared(je))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,r=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Fe(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let R=0;R<n.count;R++)a[R]=new L,l[R]=new L;let c=new L,u=new L,h=new L,d=new st,p=new st,x=new st,v=new L,m=new L;function f(R,E,w){c.fromBufferAttribute(n,R),u.fromBufferAttribute(n,E),h.fromBufferAttribute(n,w),d.fromBufferAttribute(s,R),p.fromBufferAttribute(s,E),x.fromBufferAttribute(s,w),u.sub(c),h.sub(c),p.sub(d),x.sub(d);let C=1/(p.x*x.y-x.x*p.y);isFinite(C)&&(v.copy(u).multiplyScalar(x.y).addScaledVector(h,-p.y).multiplyScalar(C),m.copy(h).multiplyScalar(p.x).addScaledVector(u,-x.x).multiplyScalar(C),a[R].add(v),a[E].add(v),a[w].add(v),l[R].add(m),l[E].add(m),l[w].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let R=0,E=y.length;R<E;++R){let w=y[R],C=w.start,U=w.count;for(let B=C,H=C+U;B<H;B+=3)f(t.getX(B+0),t.getX(B+1),t.getX(B+2))}let S=new L,g=new L,b=new L,M=new L;function _(R){b.fromBufferAttribute(r,R),M.copy(b);let E=a[R];S.copy(E),S.sub(b.multiplyScalar(b.dot(E))).normalize(),g.crossVectors(M,E);let C=g.dot(l[R])<0?-1:1;o.setXYZW(R,S.x,S.y,S.z,C)}for(let R=0,E=y.length;R<E;++R){let w=y[R],C=w.start,U=w.count;for(let B=C,H=C+U;B<H;B+=3)_(t.getX(B+0)),_(t.getX(B+1)),_(t.getX(B+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Fe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);let r=new L,s=new L,o=new L,a=new L,l=new L,c=new L,u=new L,h=new L;if(t)for(let d=0,p=t.count;d<p;d+=3){let x=t.getX(d+0),v=t.getX(d+1),m=t.getX(d+2);r.fromBufferAttribute(e,x),s.fromBufferAttribute(e,v),o.fromBufferAttribute(e,m),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),a.fromBufferAttribute(n,x),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(x,a.x,a.y,a.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=e.count;d<p;d+=3)r.fromBufferAttribute(e,d+0),s.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)je.fromBufferAttribute(t,e),je.normalize(),t.setXYZ(e,je.x,je.y,je.z)}toNonIndexed(){function t(a,l){let c=a.array,u=a.itemSize,h=a.normalized,d=new c.constructor(l.length*u),p=0,x=0;for(let v=0,m=l.length;v<m;v++){a.isInterleavedBufferAttribute?p=l[v]*a.data.stride+a.offset:p=l[v]*u;for(let f=0;f<u;f++)d[x++]=c[p++]}return new Fe(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,r=this.attributes;for(let a in r){let l=r[a],c=t(l,n);e.setAttribute(a,c)}let s=this.morphAttributes;for(let a in s){let l=[],c=s[a];for(let u=0,h=c.length;u<h;u++){let d=c[u],p=t(d,n);l.push(p)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let r={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){let p=c[h];u.push(p.toJSON(t.data))}u.length>0&&(r[l]=u,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let r=t.attributes;for(let c in r){let u=r[c];this.setAttribute(c,u.clone(e))}let s=t.morphAttributes;for(let c in s){let u=[],h=s[c];for(let d=0,p=h.length;d<p;d++)u.push(h[d].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,u=o.length;c<u;c++){let h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},wu=new Se,Qi=new zr,So=new rr,Au=new L,bo=new L,Eo=new L,_o=new L,ic=new L,wo=new L,Tu=new L,Ao=new L,zt=class extends vn{constructor(t=new xe,e=new se){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){let n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(r,t);let a=this.morphTargetInfluences;if(s&&a){wo.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let u=a[l],h=s[l];u!==0&&(ic.fromBufferAttribute(h,t),o?wo.addScaledVector(ic,u):wo.addScaledVector(ic.sub(e),u))}e.add(wo)}return e}raycast(t,e){let n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),So.copy(n.boundingSphere),So.applyMatrix4(s),Qi.copy(t.ray).recast(t.near),!(So.containsPoint(Qi.origin)===!1&&(Qi.intersectSphere(So,Au)===null||Qi.origin.distanceToSquared(Au)>(t.far-t.near)**2))&&(wu.copy(s).invert(),Qi.copy(t.ray).applyMatrix4(wu),!(n.boundingBox!==null&&Qi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Qi)))}_computeIntersections(t,e,n){let r,s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,d=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let x=0,v=d.length;x<v;x++){let m=d[x],f=o[m.materialIndex],y=Math.max(m.start,p.start),S=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let g=y,b=S;g<b;g+=3){let M=a.getX(g),_=a.getX(g+1),R=a.getX(g+2);r=To(this,f,t,n,c,u,h,M,_,R),r&&(r.faceIndex=Math.floor(g/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{let x=Math.max(0,p.start),v=Math.min(a.count,p.start+p.count);for(let m=x,f=v;m<f;m+=3){let y=a.getX(m),S=a.getX(m+1),g=a.getX(m+2);r=To(this,o,t,n,c,u,h,y,S,g),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let x=0,v=d.length;x<v;x++){let m=d[x],f=o[m.materialIndex],y=Math.max(m.start,p.start),S=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let g=y,b=S;g<b;g+=3){let M=g,_=g+1,R=g+2;r=To(this,f,t,n,c,u,h,M,_,R),r&&(r.faceIndex=Math.floor(g/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{let x=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);for(let m=x,f=v;m<f;m+=3){let y=m,S=m+1,g=m+2;r=To(this,o,t,n,c,u,h,y,S,g),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}}};function id(i,t,e,n,r,s,o,a){let l;if(t.side===nn?l=n.intersectTriangle(o,s,r,!0,a):l=n.intersectTriangle(r,s,o,t.side===En,a),l===null)return null;Ao.copy(a),Ao.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Ao);return c<e.near||c>e.far?null:{distance:c,point:Ao.clone(),object:i}}function To(i,t,e,n,r,s,o,a,l,c){i.getVertexPosition(a,bo),i.getVertexPosition(l,Eo),i.getVertexPosition(c,_o);let u=id(i,t,e,n,bo,Eo,_o,Tu);if(u){let h=new L;pi.getBarycoord(Tu,bo,Eo,_o,h),r&&(u.uv=pi.getInterpolatedAttribute(r,a,l,c,h,new st)),s&&(u.uv1=pi.getInterpolatedAttribute(s,a,l,c,h,new st)),o&&(u.normal=pi.getInterpolatedAttribute(o,a,l,c,h,new L),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new L,materialIndex:0};pi.getNormal(bo,Eo,_o,d.normal),u.face=d,u.barycoord=h}return u}var ge=class i extends xe{constructor(t=1,e=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};let a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);let l=[],c=[],u=[],h=[],d=0,p=0;x("z","y","x",-1,-1,n,e,t,o,s,0),x("z","y","x",1,-1,n,e,-t,o,s,1),x("x","z","y",1,1,t,n,e,r,o,2),x("x","z","y",1,-1,t,n,-e,r,o,3),x("x","y","z",1,-1,t,e,n,r,s,4),x("x","y","z",-1,-1,t,e,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new Gt(c,3)),this.setAttribute("normal",new Gt(u,3)),this.setAttribute("uv",new Gt(h,2));function x(v,m,f,y,S,g,b,M,_,R,E){let w=g/_,C=b/R,U=g/2,B=b/2,H=M/2,j=_+1,k=R+1,tt=0,K=0,ut=new L;for(let bt=0;bt<k;bt++){let Lt=bt*C-B;for(let te=0;te<j;te++){let ae=te*w-U;ut[v]=ae*y,ut[m]=Lt*S,ut[f]=H,c.push(ut.x,ut.y,ut.z),ut[v]=0,ut[m]=0,ut[f]=M>0?1:-1,u.push(ut.x,ut.y,ut.z),h.push(te/_),h.push(1-bt/R),tt+=1}}for(let bt=0;bt<R;bt++)for(let Lt=0;Lt<_;Lt++){let te=d+Lt+j*bt,ae=d+Lt+j*(bt+1),Ae=d+(Lt+1)+j*(bt+1),he=d+(Lt+1)+j*bt;l.push(te,ae,he),l.push(ae,Ae,he),K+=6}a.addGroup(p,K,E),p+=K,d+=tt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function fr(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let r=i[e][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=r.clone():Array.isArray(r)?t[e][n]=r.slice():t[e][n]=r}}return t}function ln(i){let t={};for(let e=0;e<i.length;e++){let n=fr(i[e]);for(let r in n)t[r]=n[r]}return t}function rd(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Nc(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:oe.workingColorSpace}var cn={clone:fr,merge:ln},sd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,od=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ve=class extends yi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=sd,this.fragmentShader=od,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=fr(t.uniforms),this.uniformsGroups=rd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let r in this.uniforms){let o=this.uniforms[r].value;o&&o.isTexture?e.uniforms[r]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[r]={type:"m4",value:o.toArray()}:e.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},Is=class extends vn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Se,this.projectionMatrix=new Se,this.projectionMatrixInverse=new Se,this.coordinateSystem=Xn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Fi=new L,Ru=new st,Cu=new st,qe=class extends Is{constructor(t=50,e=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Wo*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Nl*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Wo*2*Math.atan(Math.tan(Nl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Fi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Fi.x,Fi.y).multiplyScalar(-t/Fi.z),Fi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Fi.x,Fi.y).multiplyScalar(-t/Fi.z)}getViewSize(t,e){return this.getViewBounds(t,Ru,Cu),e.subVectors(Cu,Ru)}setViewOffset(t,e,n,r,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Nl*.5*this.fov)/this.zoom,n=2*e,r=this.aspect*n,s=-.5*r,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,e-=o.offsetY*n/c,r*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Cr=-90,Ir=1,qo=class extends vn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new qe(Cr,Ir,t,e);r.layers=this.layers,this.add(r);let s=new qe(Cr,Ir,t,e);s.layers=this.layers,this.add(s);let o=new qe(Cr,Ir,t,e);o.layers=this.layers,this.add(o);let a=new qe(Cr,Ir,t,e);a.layers=this.layers,this.add(a);let l=new qe(Cr,Ir,t,e);l.layers=this.layers,this.add(l);let c=new qe(Cr,Ir,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,r,s,o,a,l]=e;for(let c of e)this.remove(c);if(t===Xn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===ws)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,l,c,u]=this.children,h=t.getRenderTarget(),d=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),x=t.xr.enabled;t.xr.enabled=!1;let v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,r),t.render(e,s),t.setRenderTarget(n,1,r),t.render(e,o),t.setRenderTarget(n,2,r),t.render(e,a),t.setRenderTarget(n,3,r),t.render(e,l),t.setRenderTarget(n,4,r),t.render(e,c),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,r),t.render(e,u),t.setRenderTarget(h,d,p),t.xr.enabled=x,n.texture.needsPMREMUpdate=!0}},Ps=class extends tn{constructor(t=[],e=ur,n,r,s,o,a,l,c,u){super(t,e,n,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Jo=class extends Je{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},r=[n,n,n,n,n,n];this.texture=new Ps(r),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new ge(5,5,5),s=new ve({name:"CubemapFromEquirect",uniforms:fr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:nn,blending:Kn});s.uniforms.tEquirect.value=e;let o=new zt(r,s),a=e.minFilter;return e.minFilter===zi&&(e.minFilter=jn),new qo(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,r=!0){let s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,r);t.setRenderTarget(s)}},$e=class extends vn{constructor(){super(),this.isGroup=!0,this.type="Group"}},ad={type:"move"},Gr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new $e,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new $e,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new $e,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let r=null,s=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let v of t.hand.values()){let m=e.getJointPose(v,n),f=this._getHandJoint(c,v);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}let u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),p=.02,x=.005;c.inputState.pinching&&d>p+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=p-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=e.getPose(t.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(ad)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new $e;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Fs=class i{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new yt(t),this.density=e}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var Ds=class extends vn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Zn,this.environmentIntensity=1,this.environmentRotation=new Zn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},Us=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Vo,this.updateRanges=[],this.version=0,this.uuid=mi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let r=0,s=this.stride;r<s;r++)this.array[t+r]=e.array[n+r];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=mi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=mi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},hn=new L,Vr=class i{constructor(t,e,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)hn.fromBufferAttribute(this,e),hn.applyMatrix4(t),this.setXYZ(e,hn.x,hn.y,hn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)hn.fromBufferAttribute(this,e),hn.applyNormalMatrix(t),this.setXYZ(e,hn.x,hn.y,hn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)hn.fromBufferAttribute(this,e),hn.transformDirection(t),this.setXYZ(e,hn.x,hn.y,hn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Yn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=we(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=we(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=we(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=we(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=we(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Yn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Yn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Yn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Yn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=we(e,this.array),n=we(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=we(e,this.array),n=we(n,this.array),r=we(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=we(e,this.array),n=we(n,this.array),r=we(r,this.array),s=we(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=r,this.data.array[t+3]=s,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[r+s])}return new Fe(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},_n=class extends yi{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new yt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Pr,xs=new L,Fr=new L,Dr=new L,Ur=new st,vs=new st,wh=new Se,Ro=new L,ys=new L,Co=new L,Iu=new st,rc=new st,Pu=new st,Bn=class extends vn{constructor(t=new _n){if(super(),this.isSprite=!0,this.type="Sprite",Pr===void 0){Pr=new xe;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Us(e,5);Pr.setIndex([0,1,2,0,2,3]),Pr.setAttribute("position",new Vr(n,3,0,!1)),Pr.setAttribute("uv",new Vr(n,2,3,!1))}this.geometry=Pr,this.material=t,this.center=new st(.5,.5),this.count=1}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Fr.setFromMatrixScale(this.matrixWorld),wh.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Dr.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Fr.multiplyScalar(-Dr.z);let n=this.material.rotation,r,s;n!==0&&(s=Math.cos(n),r=Math.sin(n));let o=this.center;Io(Ro.set(-.5,-.5,0),Dr,o,Fr,r,s),Io(ys.set(.5,-.5,0),Dr,o,Fr,r,s),Io(Co.set(.5,.5,0),Dr,o,Fr,r,s),Iu.set(0,0),rc.set(1,0),Pu.set(1,1);let a=t.ray.intersectTriangle(Ro,ys,Co,!1,xs);if(a===null&&(Io(ys.set(-.5,.5,0),Dr,o,Fr,r,s),rc.set(0,1),a=t.ray.intersectTriangle(Ro,Co,ys,!1,xs),a===null))return;let l=t.ray.origin.distanceTo(xs);l<t.near||l>t.far||e.push({distance:l,point:xs.clone(),uv:pi.getInterpolation(xs,Ro,ys,Co,Iu,rc,Pu,new st),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function Io(i,t,e,n,r,s){Ur.subVectors(i,e).addScalar(.5).multiply(n),r!==void 0?(vs.x=s*Ur.x-r*Ur.y,vs.y=r*Ur.x+s*Ur.y):vs.copy(Ur),i.copy(t),i.x+=vs.x,i.y+=vs.y,i.applyMatrix4(wh)}var Wr=class extends tn{constructor(t=null,e=1,n=1,r,s,o,a,l,c=xn,u=xn,h,d){super(null,o,a,l,c,u,r,s,h,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var sc=new L,ld=new L,cd=new Qt,gn=class{constructor(t=new L(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,r){return this.normal.set(t,e,n),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let r=sc.subVectors(n,e).cross(ld.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(sc),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||cd.getNormalMatrix(t),r=this.coplanarPoint(sc).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},$i=new rr,ud=new st(.5,.5),Po=new L,Ls=class{constructor(t=new gn,e=new gn,n=new gn,r=new gn,s=new gn,o=new gn){this.planes=[t,e,n,r,s,o]}set(t,e,n,r,s,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Xn,n=!1){let r=this.planes,s=t.elements,o=s[0],a=s[1],l=s[2],c=s[3],u=s[4],h=s[5],d=s[6],p=s[7],x=s[8],v=s[9],m=s[10],f=s[11],y=s[12],S=s[13],g=s[14],b=s[15];if(r[0].setComponents(c-o,p-u,f-x,b-y).normalize(),r[1].setComponents(c+o,p+u,f+x,b+y).normalize(),r[2].setComponents(c+a,p+h,f+v,b+S).normalize(),r[3].setComponents(c-a,p-h,f-v,b-S).normalize(),n)r[4].setComponents(l,d,m,g).normalize(),r[5].setComponents(c-l,p-d,f-m,b-g).normalize();else if(r[4].setComponents(c-l,p-d,f-m,b-g).normalize(),e===Xn)r[5].setComponents(c+l,p+d,f+m,b+g).normalize();else if(e===ws)r[5].setComponents(l,d,m,g).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),$i.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),$i.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere($i)}intersectsSprite(t){$i.center.set(0,0,0);let e=ud.distanceTo(t.center);return $i.radius=.7071067811865476+e,$i.applyMatrix4(t.matrixWorld),this.intersectsSphere($i)}intersectsSphere(t){let e=this.planes,n=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let r=e[n];if(Po.x=r.normal.x>0?t.max.x:t.min.x,Po.y=r.normal.y>0?t.max.y:t.min.y,Po.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(Po)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Yo=class extends yi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new yt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Fu=new Se,dc=new zr,Fo=new rr,Do=new L,Xr=class extends vn{constructor(t=new xe,e=new Yo){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,r=this.matrixWorld,s=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Fo.copy(n.boundingSphere),Fo.applyMatrix4(r),Fo.radius+=s,t.ray.intersectsSphere(Fo)===!1)return;Fu.copy(r).invert(),dc.copy(t.ray).applyMatrix4(Fu);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){let d=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let x=d,v=p;x<v;x++){let m=c.getX(x);Do.fromBufferAttribute(h,m),Du(Do,m,l,r,t,e,this)}}else{let d=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let x=d,v=p;x<v;x++)Do.fromBufferAttribute(h,x),Du(Do,x,l,r,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function Du(i,t,e,n,r,s,o){let a=dc.distanceSqToPoint(i);if(a<e){let l=new L;dc.closestPointToPoint(i,l),l.applyMatrix4(n);let c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var Qn=class extends tn{constructor(t,e,n,r,s,o,a,l,c){super(t,e,n,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Ns=class extends tn{constructor(t,e,n=ki,r,s,o,a=xn,l=xn,c,u=Br,h=1){if(u!==Br&&u!==Qr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:t,height:e,depth:h};super(d,r,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Hr(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Bs=class extends tn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}};var fn=class i extends xe{constructor(t=1,e=32,n=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:r},e=Math.max(3,e);let s=[],o=[],a=[],l=[],c=new L,u=new st;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let h=0,d=3;h<=e;h++,d+=3){let p=n+h/e*r;c.x=t*Math.cos(p),c.y=t*Math.sin(p),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[d]/t+1)/2,u.y=(o[d+1]/t+1)/2,l.push(u.x,u.y)}for(let h=1;h<=e;h++)s.push(h,h+1,0);this.setIndex(s),this.setAttribute("position",new Gt(o,3)),this.setAttribute("normal",new Gt(a,3)),this.setAttribute("uv",new Gt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},ye=class i extends xe{constructor(t=1,e=1,n=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};let c=this;r=Math.floor(r),s=Math.floor(s);let u=[],h=[],d=[],p=[],x=0,v=[],m=n/2,f=0;y(),o===!1&&(t>0&&S(!0),e>0&&S(!1)),this.setIndex(u),this.setAttribute("position",new Gt(h,3)),this.setAttribute("normal",new Gt(d,3)),this.setAttribute("uv",new Gt(p,2));function y(){let g=new L,b=new L,M=0,_=(e-t)/n;for(let R=0;R<=s;R++){let E=[],w=R/s,C=w*(e-t)+t;for(let U=0;U<=r;U++){let B=U/r,H=B*l+a,j=Math.sin(H),k=Math.cos(H);b.x=C*j,b.y=-w*n+m,b.z=C*k,h.push(b.x,b.y,b.z),g.set(j,_,k).normalize(),d.push(g.x,g.y,g.z),p.push(B,1-w),E.push(x++)}v.push(E)}for(let R=0;R<r;R++)for(let E=0;E<s;E++){let w=v[E][R],C=v[E+1][R],U=v[E+1][R+1],B=v[E][R+1];(t>0||E!==0)&&(u.push(w,C,B),M+=3),(e>0||E!==s-1)&&(u.push(C,U,B),M+=3)}c.addGroup(f,M,0),f+=M}function S(g){let b=x,M=new st,_=new L,R=0,E=g===!0?t:e,w=g===!0?1:-1;for(let U=1;U<=r;U++)h.push(0,m*w,0),d.push(0,w,0),p.push(.5,.5),x++;let C=x;for(let U=0;U<=r;U++){let H=U/r*l+a,j=Math.cos(H),k=Math.sin(H);_.x=E*k,_.y=m*w,_.z=E*j,h.push(_.x,_.y,_.z),d.push(0,w,0),M.x=j*.5+.5,M.y=k*.5*w+.5,p.push(M.x,M.y),x++}for(let U=0;U<r;U++){let B=b+U,H=C+U;g===!0?u.push(H,H+1,B):u.push(H+1,H,B),R+=3}c.addGroup(f,R,g===!0?1:2),f+=R}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},$n=class i extends ye{constructor(t=1,e=1,n=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,t,e,n,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Zo=class i extends xe{constructor(t=[],e=[],n=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:r};let s=[],o=[];a(r),c(n),u(),this.setAttribute("position",new Gt(s,3)),this.setAttribute("normal",new Gt(s.slice(),3)),this.setAttribute("uv",new Gt(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(y){let S=new L,g=new L,b=new L;for(let M=0;M<e.length;M+=3)p(e[M+0],S),p(e[M+1],g),p(e[M+2],b),l(S,g,b,y)}function l(y,S,g,b){let M=b+1,_=[];for(let R=0;R<=M;R++){_[R]=[];let E=y.clone().lerp(g,R/M),w=S.clone().lerp(g,R/M),C=M-R;for(let U=0;U<=C;U++)U===0&&R===M?_[R][U]=E:_[R][U]=E.clone().lerp(w,U/C)}for(let R=0;R<M;R++)for(let E=0;E<2*(M-R)-1;E++){let w=Math.floor(E/2);E%2===0?(d(_[R][w+1]),d(_[R+1][w]),d(_[R][w])):(d(_[R][w+1]),d(_[R+1][w+1]),d(_[R+1][w]))}}function c(y){let S=new L;for(let g=0;g<s.length;g+=3)S.x=s[g+0],S.y=s[g+1],S.z=s[g+2],S.normalize().multiplyScalar(y),s[g+0]=S.x,s[g+1]=S.y,s[g+2]=S.z}function u(){let y=new L;for(let S=0;S<s.length;S+=3){y.x=s[S+0],y.y=s[S+1],y.z=s[S+2];let g=m(y)/2/Math.PI+.5,b=f(y)/Math.PI+.5;o.push(g,1-b)}x(),h()}function h(){for(let y=0;y<o.length;y+=6){let S=o[y+0],g=o[y+2],b=o[y+4],M=Math.max(S,g,b),_=Math.min(S,g,b);M>.9&&_<.1&&(S<.2&&(o[y+0]+=1),g<.2&&(o[y+2]+=1),b<.2&&(o[y+4]+=1))}}function d(y){s.push(y.x,y.y,y.z)}function p(y,S){let g=y*3;S.x=t[g+0],S.y=t[g+1],S.z=t[g+2]}function x(){let y=new L,S=new L,g=new L,b=new L,M=new st,_=new st,R=new st;for(let E=0,w=0;E<s.length;E+=9,w+=6){y.set(s[E+0],s[E+1],s[E+2]),S.set(s[E+3],s[E+4],s[E+5]),g.set(s[E+6],s[E+7],s[E+8]),M.set(o[w+0],o[w+1]),_.set(o[w+2],o[w+3]),R.set(o[w+4],o[w+5]),b.copy(y).add(S).add(g).divideScalar(3);let C=m(b);v(M,w+0,y,C),v(_,w+2,S,C),v(R,w+4,g,C)}}function v(y,S,g,b){b<0&&y.x===1&&(o[S]=y.x-1),g.x===0&&g.z===0&&(o[S]=b/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function f(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.details)}};var wn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,r=this.getPoint(0),s=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),s+=n.distanceTo(r),e.push(s),r=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),r=0,s=n.length,o;e?o=e:o=t*n[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=n[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,n[r]===o)return r/(s-1);let u=n[r],d=n[r+1]-u,p=(o-u)/d;return(r+p)/(s-1)}getTangent(t,e){let r=t-1e-4,s=t+1e-4;r<0&&(r=0),s>1&&(s=1);let o=this.getPoint(r),a=this.getPoint(s),l=e||(o.isVector2?new st:new L);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new L,r=[],s=[],o=[],a=new L,l=new Se;for(let p=0;p<=t;p++){let x=p/t;r[p]=this.getTangentAt(x,new L)}s[0]=new L,o[0]=new L;let c=Number.MAX_VALUE,u=Math.abs(r[0].x),h=Math.abs(r[0].y),d=Math.abs(r[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let p=1;p<=t;p++){if(s[p]=s[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(r[p-1],r[p]),a.length()>Number.EPSILON){a.normalize();let x=Math.acos(ie(r[p-1].dot(r[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(a,x))}o[p].crossVectors(r[p],s[p])}if(e===!0){let p=Math.acos(ie(s[0].dot(s[t]),-1,1));p/=t,r[0].dot(a.crossVectors(s[0],s[t]))>0&&(p=-p);for(let x=1;x<=t;x++)s[x].applyMatrix4(l.makeRotationAxis(r[x],p*x)),o[x].crossVectors(r[x],s[x])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},jr=class extends wn{constructor(t=0,e=0,n=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new st){let n=e,r=Math.PI*2,s=this.aEndAngle-this.aStartAngle,o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);let a=this.aStartAngle+t*s,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=l-this.aX,p=c-this.aY;l=d*u-p*h+this.aX,c=d*h+p*u+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Qo=class extends jr{constructor(t,e,n,r,s,o){super(t,e,n,n,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Bc(){let i=0,t=0,e=0,n=0;function r(s,o,a,l){i=s,t=a,e=-3*s+3*o-2*a-l,n=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){r(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,u,h){let d=(o-s)/c-(a-s)/(c+u)+(a-o)/u,p=(a-o)/u-(l-o)/(u+h)+(l-a)/h;d*=u,p*=u,r(o,a,d,p)},calc:function(s){let o=s*s,a=o*s;return i+t*s+e*o+n*a}}}var Uo=new L,oc=new Bc,ac=new Bc,lc=new Bc,$o=class extends wn{constructor(t=[],e=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=r}getPoint(t,e=new L){let n=e,r=this.points,s=r.length,o=(s-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,u;this.closed||a>0?c=r[(a-1)%s]:(Uo.subVectors(r[0],r[1]).add(r[0]),c=Uo);let h=r[a%s],d=r[(a+1)%s];if(this.closed||a+2<s?u=r[(a+2)%s]:(Uo.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=Uo),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,x=Math.pow(c.distanceToSquared(h),p),v=Math.pow(h.distanceToSquared(d),p),m=Math.pow(d.distanceToSquared(u),p);v<1e-4&&(v=1),x<1e-4&&(x=v),m<1e-4&&(m=v),oc.initNonuniformCatmullRom(c.x,h.x,d.x,u.x,x,v,m),ac.initNonuniformCatmullRom(c.y,h.y,d.y,u.y,x,v,m),lc.initNonuniformCatmullRom(c.z,h.z,d.z,u.z,x,v,m)}else this.curveType==="catmullrom"&&(oc.initCatmullRom(c.x,h.x,d.x,u.x,this.tension),ac.initCatmullRom(c.y,h.y,d.y,u.y,this.tension),lc.initCatmullRom(c.z,h.z,d.z,u.z,this.tension));return n.set(oc.calc(l),ac.calc(l),lc.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let r=t.points[e];this.points.push(r.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let r=this.points[e];t.points.push(r.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let r=t.points[e];this.points.push(new L().fromArray(r))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Uu(i,t,e,n,r){let s=(n-t)*.5,o=(r-e)*.5,a=i*i,l=i*a;return(2*e-2*n+s+o)*l+(-3*e+3*n-2*s-o)*a+s*i+e}function hd(i,t){let e=1-i;return e*e*t}function fd(i,t){return 2*(1-i)*i*t}function dd(i,t){return i*i*t}function Ss(i,t,e,n){return hd(i,t)+fd(i,e)+dd(i,n)}function pd(i,t){let e=1-i;return e*e*e*t}function md(i,t){let e=1-i;return 3*e*e*i*t}function gd(i,t){return 3*(1-i)*i*i*t}function xd(i,t){return i*i*i*t}function bs(i,t,e,n,r){return pd(i,t)+md(i,e)+gd(i,n)+xd(i,r)}var Os=class extends wn{constructor(t=new st,e=new st,n=new st,r=new st){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=r}getPoint(t,e=new st){let n=e,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(bs(t,r.x,s.x,o.x,a.x),bs(t,r.y,s.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},ta=class extends wn{constructor(t=new L,e=new L,n=new L,r=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=r}getPoint(t,e=new L){let n=e,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(bs(t,r.x,s.x,o.x,a.x),bs(t,r.y,s.y,o.y,a.y),bs(t,r.z,s.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Hs=class extends wn{constructor(t=new st,e=new st){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new st){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new st){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ea=class extends wn{constructor(t=new L,e=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new L){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new L){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},zs=class extends wn{constructor(t=new st,e=new st,n=new st){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new st){let n=e,r=this.v0,s=this.v1,o=this.v2;return n.set(Ss(t,r.x,s.x,o.x),Ss(t,r.y,s.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},na=class extends wn{constructor(t=new L,e=new L,n=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new L){let n=e,r=this.v0,s=this.v1,o=this.v2;return n.set(Ss(t,r.x,s.x,o.x),Ss(t,r.y,s.y,o.y),Ss(t,r.z,s.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ks=class extends wn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new st){let n=e,r=this.points,s=(r.length-1)*t,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],c=r[o],u=r[o>r.length-2?r.length-1:o+1],h=r[o>r.length-3?r.length-1:o+2];return n.set(Uu(a,l.x,c.x,u.x,h.x),Uu(a,l.y,c.y,u.y,h.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let r=t.points[e];this.points.push(r.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let r=this.points[e];t.points.push(r.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let r=t.points[e];this.points.push(new st().fromArray(r))}return this}},Lu=Object.freeze({__proto__:null,ArcCurve:Qo,CatmullRomCurve3:$o,CubicBezierCurve:Os,CubicBezierCurve3:ta,EllipseCurve:jr,LineCurve:Hs,LineCurve3:ea,QuadraticBezierCurve:zs,QuadraticBezierCurve3:na,SplineCurve:ks}),ia=class extends wn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Lu[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),r=this.getCurveLengths(),s=0;for(;s<r.length;){if(r[s]>=n){let o=r[s]-n,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}s++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,r=this.curves.length;n<r;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let r=0,s=this.curves;r<s.length;r++){let o=s[r],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){let u=l[c];n&&n.equals(u)||(e.push(u),n=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let r=t.curves[e];this.curves.push(r.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let r=this.curves[e];t.curves.push(r.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let r=t.curves[e];this.curves.push(new Lu[r.type]().fromJSON(r))}return this}},Gs=class extends ia{constructor(t){super(),this.type="Path",this.currentPoint=new st,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Hs(this.currentPoint.clone(),new st(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,r){let s=new zs(this.currentPoint.clone(),new st(t,e),new st(n,r));return this.curves.push(s),this.currentPoint.set(n,r),this}bezierCurveTo(t,e,n,r,s,o){let a=new Os(this.currentPoint.clone(),new st(t,e),new st(n,r),new st(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new ks(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,r,s,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,r,s,o),this}absarc(t,e,n,r,s,o){return this.absellipse(t,e,n,n,r,s,o),this}ellipse(t,e,n,r,s,o,a,l){let c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+c,e+u,n,r,s,o,a,l),this}absellipse(t,e,n,r,s,o,a,l){let c=new jr(t,e,n,r,s,o,a,l);if(this.curves.length>0){let h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);let u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Ni=class extends Gs{constructor(t){super(t),this.uuid=mi(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,r=this.holes.length;n<r;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let r=t.holes[e];this.holes.push(r.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let r=this.holes[e];t.holes.push(r.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let r=t.holes[e];this.holes.push(new Gs().fromJSON(r))}return this}};function vd(i,t,e=2){let n=t&&t.length,r=n?t[0]*e:i.length,s=Ah(i,0,r,e,!0),o=[];if(!s||s.next===s.prev)return o;let a,l,c;if(n&&(s=Ed(i,t,s,e)),i.length>80*e){a=1/0,l=1/0;let u=-1/0,h=-1/0;for(let d=e;d<r;d+=e){let p=i[d],x=i[d+1];p<a&&(a=p),x<l&&(l=x),p>u&&(u=p),x>h&&(h=x)}c=Math.max(u-a,h-l),c=c!==0?32767/c:0}return Vs(s,o,e,a,l,c,0),o}function Ah(i,t,e,n,r){let s;if(r===Ud(i,t,e,n)>0)for(let o=t;o<e;o+=n)s=Nu(o/n|0,i[o],i[o+1],s);else for(let o=e-n;o>=t;o-=n)s=Nu(o/n|0,i[o],i[o+1],s);return s&&Kr(s,s.next)&&(Xs(s),s=s.next),s}function sr(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Kr(e,e.next)||Ne(e.prev,e,e.next)===0)){if(Xs(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Vs(i,t,e,n,r,s,o){if(!i)return;!o&&s&&Rd(i,n,r,s);let a=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(s?Md(i,n,r,s):yd(i)){t.push(l.i,i.i,c.i),Xs(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=Sd(sr(i),t),Vs(i,t,e,n,r,s,2)):o===2&&bd(i,t,e,n,r,s):Vs(sr(i),t,e,n,r,s,1);break}}}function yd(i){let t=i.prev,e=i,n=i.next;if(Ne(t,e,n)>=0)return!1;let r=t.x,s=e.x,o=n.x,a=t.y,l=e.y,c=n.y,u=Math.min(r,s,o),h=Math.min(a,l,c),d=Math.max(r,s,o),p=Math.max(a,l,c),x=n.next;for(;x!==t;){if(x.x>=u&&x.x<=d&&x.y>=h&&x.y<=p&&Ms(r,a,s,l,o,c,x.x,x.y)&&Ne(x.prev,x,x.next)>=0)return!1;x=x.next}return!0}function Md(i,t,e,n){let r=i.prev,s=i,o=i.next;if(Ne(r,s,o)>=0)return!1;let a=r.x,l=s.x,c=o.x,u=r.y,h=s.y,d=o.y,p=Math.min(a,l,c),x=Math.min(u,h,d),v=Math.max(a,l,c),m=Math.max(u,h,d),f=pc(p,x,t,e,n),y=pc(v,m,t,e,n),S=i.prevZ,g=i.nextZ;for(;S&&S.z>=f&&g&&g.z<=y;){if(S.x>=p&&S.x<=v&&S.y>=x&&S.y<=m&&S!==r&&S!==o&&Ms(a,u,l,h,c,d,S.x,S.y)&&Ne(S.prev,S,S.next)>=0||(S=S.prevZ,g.x>=p&&g.x<=v&&g.y>=x&&g.y<=m&&g!==r&&g!==o&&Ms(a,u,l,h,c,d,g.x,g.y)&&Ne(g.prev,g,g.next)>=0))return!1;g=g.nextZ}for(;S&&S.z>=f;){if(S.x>=p&&S.x<=v&&S.y>=x&&S.y<=m&&S!==r&&S!==o&&Ms(a,u,l,h,c,d,S.x,S.y)&&Ne(S.prev,S,S.next)>=0)return!1;S=S.prevZ}for(;g&&g.z<=y;){if(g.x>=p&&g.x<=v&&g.y>=x&&g.y<=m&&g!==r&&g!==o&&Ms(a,u,l,h,c,d,g.x,g.y)&&Ne(g.prev,g,g.next)>=0)return!1;g=g.nextZ}return!0}function Sd(i,t){let e=i;do{let n=e.prev,r=e.next.next;!Kr(n,r)&&Rh(n,e,e.next,r)&&Ws(n,r)&&Ws(r,n)&&(t.push(n.i,e.i,r.i),Xs(e),Xs(e.next),e=i=r),e=e.next}while(e!==i);return sr(e)}function bd(i,t,e,n,r,s){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Pd(o,a)){let l=Ch(o,a);o=sr(o,o.next),l=sr(l,l.next),Vs(o,t,e,n,r,s,0),Vs(l,t,e,n,r,s,0);return}a=a.next}o=o.next}while(o!==i)}function Ed(i,t,e,n){let r=[];for(let s=0,o=t.length;s<o;s++){let a=t[s]*n,l=s<o-1?t[s+1]*n:i.length,c=Ah(i,a,l,n,!1);c===c.next&&(c.steiner=!0),r.push(Id(c))}r.sort(_d);for(let s=0;s<r.length;s++)e=wd(r[s],e);return e}function _d(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),r=(t.next.y-t.y)/(t.next.x-t.x);e=n-r}return e}function wd(i,t){let e=Ad(i,t);if(!e)return t;let n=Ch(e,i);return sr(n,n.next),sr(e,e.next)}function Ad(i,t){let e=t,n=i.x,r=i.y,s=-1/0,o;if(Kr(i,e))return e;do{if(Kr(i,e.next))return e.next;if(r<=e.y&&r>=e.next.y&&e.next.y!==e.y){let h=e.x+(r-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(h<=n&&h>s&&(s=h,o=e.x<e.next.x?e:e.next,h===n))return o}e=e.next}while(e!==t);if(!o)return null;let a=o,l=o.x,c=o.y,u=1/0;e=o;do{if(n>=e.x&&e.x>=l&&n!==e.x&&Th(r<c?n:s,r,l,c,r<c?s:n,r,e.x,e.y)){let h=Math.abs(r-e.y)/(n-e.x);Ws(e,i)&&(h<u||h===u&&(e.x>o.x||e.x===o.x&&Td(o,e)))&&(o=e,u=h)}e=e.next}while(e!==a);return o}function Td(i,t){return Ne(i.prev,i,t.prev)<0&&Ne(t.next,i,i.next)<0}function Rd(i,t,e,n){let r=i;do r.z===0&&(r.z=pc(r.x,r.y,t,e,n)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==i);r.prevZ.nextZ=null,r.prevZ=null,Cd(r)}function Cd(i){let t,e=1;do{let n=i,r;i=null;let s=null;for(t=0;n;){t++;let o=n,a=0;for(let c=0;c<e&&(a++,o=o.nextZ,!!o);c++);let l=e;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(r=n,n=n.nextZ,a--):(r=o,o=o.nextZ,l--),s?s.nextZ=r:i=r,r.prevZ=s,s=r;n=o}s.nextZ=null,e*=2}while(t>1);return i}function pc(i,t,e,n,r){return i=(i-e)*r|0,t=(t-n)*r|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Id(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Th(i,t,e,n,r,s,o,a){return(r-o)*(t-a)>=(i-o)*(s-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(s-a)>=(r-o)*(n-a)}function Ms(i,t,e,n,r,s,o,a){return!(i===o&&t===a)&&Th(i,t,e,n,r,s,o,a)}function Pd(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Fd(i,t)&&(Ws(i,t)&&Ws(t,i)&&Dd(i,t)&&(Ne(i.prev,i,t.prev)||Ne(i,t.prev,t))||Kr(i,t)&&Ne(i.prev,i,i.next)>0&&Ne(t.prev,t,t.next)>0)}function Ne(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Kr(i,t){return i.x===t.x&&i.y===t.y}function Rh(i,t,e,n){let r=No(Ne(i,t,e)),s=No(Ne(i,t,n)),o=No(Ne(e,n,i)),a=No(Ne(e,n,t));return!!(r!==s&&o!==a||r===0&&Lo(i,e,t)||s===0&&Lo(i,n,t)||o===0&&Lo(e,i,n)||a===0&&Lo(e,t,n))}function Lo(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function No(i){return i>0?1:i<0?-1:0}function Fd(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Rh(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Ws(i,t){return Ne(i.prev,i,i.next)<0?Ne(i,t,i.next)>=0&&Ne(i,i.prev,t)>=0:Ne(i,t,i.prev)<0||Ne(i,i.next,t)<0}function Dd(i,t){let e=i,n=!1,r=(i.x+t.x)/2,s=(i.y+t.y)/2;do e.y>s!=e.next.y>s&&e.next.y!==e.y&&r<(e.next.x-e.x)*(s-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Ch(i,t){let e=mc(i.i,i.x,i.y),n=mc(t.i,t.x,t.y),r=i.next,s=t.prev;return i.next=t,t.prev=i,e.next=r,r.prev=e,n.next=e,e.prev=n,s.next=n,n.prev=s,n}function Nu(i,t,e,n){let r=mc(i,t,e);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function Xs(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function mc(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Ud(i,t,e,n){let r=0;for(let s=t,o=e-n;s<e;s+=n)r+=(i[o]-i[s])*(i[s+1]+i[o+1]),o=s;return r}var gc=class{static triangulate(t,e,n=2){return vd(t,e,n)}},Nr=class i{static area(t){let e=t.length,n=0;for(let r=e-1,s=0;s<e;r=s++)n+=t[r].x*t[s].y-t[s].x*t[r].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],r=[],s=[];Bu(t),Ou(n,t);let o=t.length;e.forEach(Bu);for(let l=0;l<e.length;l++)r.push(o),o+=e[l].length,Ou(n,e[l]);let a=gc.triangulate(n,r);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}};function Bu(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Ou(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var or=class i extends Zo{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,r=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}},Bi=class i extends xe{constructor(t=[new st(0,-.5),new st(.5,0),new st(0,.5)],e=12,n=0,r=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:r},e=Math.floor(e),r=ie(r,0,Math.PI*2);let s=[],o=[],a=[],l=[],c=[],u=1/e,h=new L,d=new st,p=new L,x=new L,v=new L,m=0,f=0;for(let y=0;y<=t.length-1;y++)switch(y){case 0:m=t[y+1].x-t[y].x,f=t[y+1].y-t[y].y,p.x=f*1,p.y=-m,p.z=f*0,v.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case t.length-1:l.push(v.x,v.y,v.z);break;default:m=t[y+1].x-t[y].x,f=t[y+1].y-t[y].y,p.x=f*1,p.y=-m,p.z=f*0,x.copy(p),p.x+=v.x,p.y+=v.y,p.z+=v.z,p.normalize(),l.push(p.x,p.y,p.z),v.copy(x)}for(let y=0;y<=e;y++){let S=n+y*u*r,g=Math.sin(S),b=Math.cos(S);for(let M=0;M<=t.length-1;M++){h.x=t[M].x*g,h.y=t[M].y,h.z=t[M].x*b,o.push(h.x,h.y,h.z),d.x=y/e,d.y=M/(t.length-1),a.push(d.x,d.y);let _=l[3*M+0]*g,R=l[3*M+1],E=l[3*M+0]*b;c.push(_,R,E)}}for(let y=0;y<e;y++)for(let S=0;S<t.length-1;S++){let g=S+y*t.length,b=g,M=g+t.length,_=g+t.length+1,R=g+1;s.push(b,M,R),s.push(_,R,M)}this.setIndex(s),this.setAttribute("position",new Gt(o,3)),this.setAttribute("uv",new Gt(a,2)),this.setAttribute("normal",new Gt(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}};var an=class i extends xe{constructor(t=1,e=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:r};let s=t/2,o=e/2,a=Math.floor(n),l=Math.floor(r),c=a+1,u=l+1,h=t/a,d=e/l,p=[],x=[],v=[],m=[];for(let f=0;f<u;f++){let y=f*d-o;for(let S=0;S<c;S++){let g=S*h-s;x.push(g,-y,0),v.push(0,0,1),m.push(S/a),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let y=0;y<a;y++){let S=y+c*f,g=y+c*(f+1),b=y+1+c*(f+1),M=y+1+c*f;p.push(S,g,M),p.push(g,b,M)}this.setIndex(p),this.setAttribute("position",new Gt(x,3)),this.setAttribute("normal",new Gt(v,3)),this.setAttribute("uv",new Gt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},ar=class i extends xe{constructor(t=.5,e=1,n=32,r=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:r,thetaStart:s,thetaLength:o},n=Math.max(3,n),r=Math.max(1,r);let a=[],l=[],c=[],u=[],h=t,d=(e-t)/r,p=new L,x=new st;for(let v=0;v<=r;v++){for(let m=0;m<=n;m++){let f=s+m/n*o;p.x=h*Math.cos(f),p.y=h*Math.sin(f),l.push(p.x,p.y,p.z),c.push(0,0,1),x.x=(p.x/e+1)/2,x.y=(p.y/e+1)/2,u.push(x.x,x.y)}h+=d}for(let v=0;v<r;v++){let m=v*(n+1);for(let f=0;f<n;f++){let y=f+m,S=y,g=y+n+1,b=y+n+2,M=y+1;a.push(S,g,M),a.push(g,b,M)}}this.setIndex(a),this.setAttribute("position",new Gt(l,3)),this.setAttribute("normal",new Gt(c,3)),this.setAttribute("uv",new Gt(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},lr=class i extends xe{constructor(t=new Ni([new st(0,.5),new st(-.5,-.5),new st(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let n=[],r=[],s=[],o=[],a=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let u=0;u<t.length;u++)c(t[u]),this.addGroup(a,l,u),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new Gt(r,3)),this.setAttribute("normal",new Gt(s,3)),this.setAttribute("uv",new Gt(o,2));function c(u){let h=r.length/3,d=u.extractPoints(e),p=d.shape,x=d.holes;Nr.isClockWise(p)===!1&&(p=p.reverse());for(let m=0,f=x.length;m<f;m++){let y=x[m];Nr.isClockWise(y)===!0&&(x[m]=y.reverse())}let v=Nr.triangulateShape(p,x);for(let m=0,f=x.length;m<f;m++){let y=x[m];p=p.concat(y)}for(let m=0,f=p.length;m<f;m++){let y=p[m];r.push(y.x,y.y,0),s.push(0,0,1),o.push(y.x,y.y)}for(let m=0,f=v.length;m<f;m++){let y=v[m],S=y[0]+h,g=y[1]+h,b=y[2]+h;n.push(S,g,b),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return Ld(e,t)}static fromJSON(t,e){let n=[];for(let r=0,s=t.shapes.length;r<s;r++){let o=e[t.shapes[r]];n.push(o)}return new i(n,t.curveSegments)}};function Ld(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){let r=i[e];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t}var en=class i extends xe{constructor(t=1,e=32,n=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,u=[],h=new L,d=new L,p=[],x=[],v=[],m=[];for(let f=0;f<=n;f++){let y=[],S=f/n,g=0;f===0&&o===0?g=.5/e:f===n&&l===Math.PI&&(g=-.5/e);for(let b=0;b<=e;b++){let M=b/e;h.x=-t*Math.cos(r+M*s)*Math.sin(o+S*a),h.y=t*Math.cos(o+S*a),h.z=t*Math.sin(r+M*s)*Math.sin(o+S*a),x.push(h.x,h.y,h.z),d.copy(h).normalize(),v.push(d.x,d.y,d.z),m.push(M+g,1-S),y.push(c++)}u.push(y)}for(let f=0;f<n;f++)for(let y=0;y<e;y++){let S=u[f][y+1],g=u[f][y],b=u[f+1][y],M=u[f+1][y+1];(f!==0||o>0)&&p.push(S,g,M),(f!==n-1||l<Math.PI)&&p.push(g,b,M)}this.setIndex(p),this.setAttribute("position",new Gt(x,3)),this.setAttribute("normal",new Gt(v,3)),this.setAttribute("uv",new Gt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var An=class i extends xe{constructor(t=1,e=.4,n=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:r,arc:s},n=Math.floor(n),r=Math.floor(r);let o=[],a=[],l=[],c=[],u=new L,h=new L,d=new L;for(let p=0;p<=n;p++)for(let x=0;x<=r;x++){let v=x/r*s,m=p/n*Math.PI*2;h.x=(t+e*Math.cos(m))*Math.cos(v),h.y=(t+e*Math.cos(m))*Math.sin(v),h.z=e*Math.sin(m),a.push(h.x,h.y,h.z),u.x=t*Math.cos(v),u.y=t*Math.sin(v),d.subVectors(h,u).normalize(),l.push(d.x,d.y,d.z),c.push(x/r),c.push(p/n)}for(let p=1;p<=n;p++)for(let x=1;x<=r;x++){let v=(r+1)*p+x-1,m=(r+1)*(p-1)+x-1,f=(r+1)*(p-1)+x,y=(r+1)*p+x;o.push(v,m,y),o.push(m,f,y)}this.setIndex(o),this.setAttribute("position",new Gt(a,3)),this.setAttribute("normal",new Gt(l,3)),this.setAttribute("uv",new Gt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var js=class extends ve{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var ra=class extends yi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=hh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},sa=class extends yi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Bo(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Nd(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var cr=class{constructor(t,e,n,r){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,r=e[n],s=e[n-1];n:{t:{let o;e:{i:if(!(t<r)){for(let a=n+2;;){if(r===void 0){if(t<s)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=r,r=e[++n],t<r)break t}o=e.length;break e}if(!(t>=s)){let a=e[1];t<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(r=s,s=e[--n-1],t>=s)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(r=e[n],s=e[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,r)}return this.interpolate_(n,s,t,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=t*r;for(let o=0;o!==r;++o)e[o]=n[s+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},oa=class extends cr{constructor(t,e,n,r){super(t,e,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:cc,endingEnd:cc}}intervalChanged_(t,e,n){let r=this.parameterPositions,s=t-2,o=t+1,a=r[s],l=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case uc:s=t,a=2*e-n;break;case hc:s=r.length-2,a=e+r[s]-r[s+1];break;default:s=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case uc:o=t,l=2*n-e;break;case hc:o=1,l=n+r[1]-r[0];break;default:o=t-1,l=e}let c=(n-e)*.5,u=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(t,e,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,p=this._weightNext,x=(n-e)/(r-e),v=x*x,m=v*x,f=-d*m+2*d*v-d*x,y=(1+d)*m+(-1.5-2*d)*v+(-.5+d)*x+1,S=(-1-p)*m+(1.5+p)*v+.5*x,g=p*m-p*v;for(let b=0;b!==a;++b)s[b]=f*o[u+b]+y*o[c+b]+S*o[l+b]+g*o[h+b];return s}},aa=class extends cr{constructor(t,e,n,r){super(t,e,n,r)}interpolate_(t,e,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,u=(n-e)/(r-e),h=1-u;for(let d=0;d!==a;++d)s[d]=o[c+d]*h+o[l+d]*u;return s}},la=class extends cr{constructor(t,e,n,r){super(t,e,n,r)}interpolate_(t){return this.copySampleValue_(t-1)}},Tn=class{constructor(t,e,n,r){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Bo(e,this.TimeBufferType),this.values=Bo(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Bo(t.times,Array),values:Bo(t.values,Array)};let r=t.getInterpolation();r!==t.DefaultInterpolation&&(n.interpolation=r)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new la(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new aa(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new oa(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Es:e=this.InterpolantFactoryMethodDiscrete;break;case Go:e=this.InterpolantFactoryMethodLinear;break;case Oo:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Es;case this.InterpolantFactoryMethodLinear:return Go;case this.InterpolantFactoryMethodSmooth:return Oo}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,r=e.length;n!==r;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,r=e.length;n!==r;++n)e[n]*=t}return this}trim(t,e){let n=this.times,r=n.length,s=0,o=r-1;for(;s!==r&&n[s]<t;)++s;for(;o!==-1&&n[o]>e;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,r=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==s;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(r!==void 0&&Nd(r))for(let a=0,l=r.length;a!==l;++a){let c=r[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===Oo,s=t.length-1,o=1;for(let a=1;a<s;++a){let l=!1,c=t[a],u=t[a+1];if(c!==u&&(a!==1||c!==t[0]))if(r)l=!0;else{let h=a*n,d=h-n,p=h+n;for(let x=0;x!==n;++x){let v=e[h+x];if(v!==e[d+x]||v!==e[p+x]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let h=a*n,d=o*n;for(let p=0;p!==n;++p)e[d+p]=e[h+p]}++o}}if(s>0){t[o]=t[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,r=new n(this.name,t,e);return r.createInterpolant=this.createInterpolant,r}};Tn.prototype.ValueTypeName="";Tn.prototype.TimeBufferType=Float32Array;Tn.prototype.ValueBufferType=Float32Array;Tn.prototype.DefaultInterpolation=Go;var Oi=class extends Tn{constructor(t,e,n){super(t,e,n)}};Oi.prototype.ValueTypeName="bool";Oi.prototype.ValueBufferType=Array;Oi.prototype.DefaultInterpolation=Es;Oi.prototype.InterpolantFactoryMethodLinear=void 0;Oi.prototype.InterpolantFactoryMethodSmooth=void 0;var ca=class extends Tn{constructor(t,e,n,r){super(t,e,n,r)}};ca.prototype.ValueTypeName="color";var ua=class extends Tn{constructor(t,e,n,r){super(t,e,n,r)}};ua.prototype.ValueTypeName="number";var ha=class extends cr{constructor(t,e,n,r){super(t,e,n,r)}interpolate_(t,e,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(r-e),c=t*a;for(let u=c+a;c!==u;c+=4)Nn.slerpFlat(s,0,o,c-a,o,c,l);return s}},Ks=class extends Tn{constructor(t,e,n,r){super(t,e,n,r)}InterpolantFactoryMethodLinear(t){return new ha(this.times,this.values,this.getValueSize(),t)}};Ks.prototype.ValueTypeName="quaternion";Ks.prototype.InterpolantFactoryMethodSmooth=void 0;var Hi=class extends Tn{constructor(t,e,n){super(t,e,n)}};Hi.prototype.ValueTypeName="string";Hi.prototype.ValueBufferType=Array;Hi.prototype.DefaultInterpolation=Es;Hi.prototype.InterpolantFactoryMethodLinear=void 0;Hi.prototype.InterpolantFactoryMethodSmooth=void 0;var fa=class extends Tn{constructor(t,e,n,r){super(t,e,n,r)}};fa.prototype.ValueTypeName="vector";var da=class{constructor(t,e,n){let r=this,s=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.abortController=new AbortController,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){let h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){let p=c[h],x=c[h+1];if(p.global&&(p.lastIndex=0),p.test(u))return x}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},Ih=new da,pa=class{constructor(t){this.manager=t!==void 0?t:Ih,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(r,s){n.load(t,r,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};pa.DEFAULT_MATERIAL_NAME="__DEFAULT";var qr=class extends Is{constructor(t=-1,e=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=n-t,o=n+t,a=r+e,l=r-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}};var ma=class extends qe{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}},qs=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=performance.now();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};var Oc="\\[\\]\\.:\\/",Bd=new RegExp("["+Oc+"]","g"),Hc="[^"+Oc+"]",Od="[^"+Oc.replace("\\.","")+"]",Hd=/((?:WC+[\/:])*)/.source.replace("WC",Hc),zd=/(WCOD+)?/.source.replace("WCOD",Od),kd=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Hc),Gd=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Hc),Vd=new RegExp("^"+Hd+zd+kd+Gd+"$"),Wd=["material","materials","bones","map"],xc=class{constructor(t,e,n){let r=n||Re.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,r)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=n.length;r!==s;++r)n[r].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Re=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Bd,"")}static parseTrackName(t){let e=Vd.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let s=n.nodeName.substring(r+1);Wd.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(s){for(let o=0;o<s.length;o++){let a=s[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},r=n(t.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)t[e++]=n[r]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,r=e.propertyName,s=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===c){c=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[r];if(o===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Re.Composite=xc;Re.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Re.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Re.prototype.GetterByBindingType=[Re.prototype._getValue_direct,Re.prototype._getValue_array,Re.prototype._getValue_arrayElement,Re.prototype._getValue_toArray];Re.prototype.SetterByBindingTypeAndVersioning=[[Re.prototype._setValue_direct,Re.prototype._setValue_direct_setNeedsUpdate,Re.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Re.prototype._setValue_array,Re.prototype._setValue_array_setNeedsUpdate,Re.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Re.prototype._setValue_arrayElement,Re.prototype._setValue_arrayElement_setNeedsUpdate,Re.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Re.prototype._setValue_fromArray,Re.prototype._setValue_fromArray_setNeedsUpdate,Re.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Ux=new Float32Array(1);var Hu=new Se,Js=class{constructor(t,e,n=0,r=1/0){this.ray=new zr(t,e),this.near=n,this.far=r,this.camera=null,this.layers=new kr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Hu.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Hu),this}intersectObject(t,e=!0,n=[]){return vc(t,this,n,e),n.sort(zu),n}intersectObjects(t,e=!0,n=[]){for(let r=0,s=t.length;r<s;r++)vc(t[r],this,n,e);return n.sort(zu),n}};function zu(i,t){return i.distance-t.distance}function vc(i,t,e,n){let r=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(r=!1),r===!0&&n===!0){let s=i.children;for(let o=0,a=s.length;o<a;o++)vc(s[o],t,e,!0)}}function zc(i,t,e,n){let r=Xd(n);switch(e){case Cc:return i*t;case Pc:return i*t/r.components*r.byteLength;case La:return i*t/r.components*r.byteLength;case Fc:return i*t*2/r.components*r.byteLength;case Na:return i*t*2/r.components*r.byteLength;case Ic:return i*t*3/r.components*r.byteLength;case Hn:return i*t*4/r.components*r.byteLength;case Ba:return i*t*4/r.components*r.byteLength;case Qs:case $s:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case to:case eo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ha:case ka:return Math.max(i,16)*Math.max(t,8)/4;case Oa:case za:return Math.max(i,8)*Math.max(t,8)/2;case Ga:case Va:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Wa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Xa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ja:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Ka:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case qa:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Ja:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Ya:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Za:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Qa:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case $a:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case tl:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case el:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case nl:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case il:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case rl:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case sl:case ol:case al:return Math.ceil(i/4)*Math.ceil(t/4)*16;case ll:case cl:return Math.ceil(i/4)*Math.ceil(t/4)*8;case ul:case hl:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Xd(i){switch(i){case ei:case wc:return{byteLength:1,components:1};case Yr:case Ac:case On:return{byteLength:2,components:1};case Da:case Ua:return{byteLength:2,components:4};case ki:case Fa:case ni:return{byteLength:4,components:1};case Tc:case Rc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");function tf(){let i=null,t=!1,e=null,n=null;function r(s,o){e(s,o),n=i.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(r),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){i=s}}}function Zd(i){let t=new WeakMap;function e(a,l){let c=a.array,u=a.usage,h=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,c){let u=l.array,h=l.updateRanges;if(i.bindBuffer(c,a),h.length===0)i.bufferSubData(c,0,u);else{h.sort((p,x)=>p.start-x.start);let d=0;for(let p=1;p<h.length;p++){let x=h[d],v=h[p];v.start<=x.start+x.count+1?x.count=Math.max(x.count,v.start+v.count-x.start):(++d,h[d]=v)}h.length=d+1;for(let p=0,x=h.length;p<x;p++){let v=h[p];i.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var Qd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,$d=`#ifdef USE_ALPHAHASH
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
#endif`,tp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ep=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,np=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ip=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,rp=`#ifdef USE_AOMAP
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
#endif`,sp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,op=`#ifdef USE_BATCHING
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
#endif`,ap=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,lp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,cp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,up=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,hp=`#ifdef USE_IRIDESCENCE
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
#endif`,fp=`#ifdef USE_BUMPMAP
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
#endif`,dp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,pp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,mp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,gp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,xp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,vp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,yp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Mp=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Sp=`#define PI 3.141592653589793
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
} // validated`,bp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Ep=`vec3 transformedNormal = objectNormal;
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
#endif`,_p=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,wp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ap=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Tp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Rp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Cp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ip=`#ifdef USE_ENVMAP
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
#endif`,Pp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Fp=`#ifdef USE_ENVMAP
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
#endif`,Dp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Up=`#ifdef USE_ENVMAP
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
#endif`,Lp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Np=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Bp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Op=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Hp=`#ifdef USE_GRADIENTMAP
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
}`,zp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,kp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Gp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Vp=`uniform bool receiveShadow;
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
#endif`,Wp=`#ifdef USE_ENVMAP
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
#endif`,Xp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,jp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Kp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,qp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Jp=`PhysicalMaterial material;
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
#endif`,Yp=`struct PhysicalMaterial {
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
}`,Zp=`
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
#endif`,Qp=`#if defined( RE_IndirectDiffuse )
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
#endif`,$p=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,tm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,em=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,nm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,im=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,rm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,sm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,om=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,am=`#if defined( USE_POINTS_UV )
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
#endif`,lm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,cm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,um=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,hm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,fm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,dm=`#ifdef USE_MORPHTARGETS
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
#endif`,pm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,mm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,gm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,xm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ym=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Mm=`#ifdef USE_NORMALMAP
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
#endif`,Sm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,bm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Em=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,_m=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,wm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Am=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Tm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Rm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Cm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Im=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Pm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Fm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Dm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Um=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Lm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Nm=`float getShadowMask() {
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
}`,Bm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Om=`#ifdef USE_SKINNING
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
#endif`,Hm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,zm=`#ifdef USE_SKINNING
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
#endif`,km=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Gm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Vm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Wm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Xm=`#ifdef USE_TRANSMISSION
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
#endif`,jm=`#ifdef USE_TRANSMISSION
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
#endif`,Km=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,qm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Jm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ym=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Zm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Qm=`uniform sampler2D t2D;
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
}`,$m=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,t0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,e0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,n0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,i0=`#include <common>
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
}`,r0=`#if DEPTH_PACKING == 3200
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
}`,s0=`#define DISTANCE
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
}`,o0=`#define DISTANCE
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
}`,a0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,l0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,c0=`uniform float scale;
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
}`,u0=`uniform vec3 diffuse;
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
}`,h0=`#include <common>
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
}`,f0=`uniform vec3 diffuse;
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
}`,d0=`#define LAMBERT
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
}`,p0=`#define LAMBERT
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
}`,m0=`#define MATCAP
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
}`,g0=`#define MATCAP
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
}`,x0=`#define NORMAL
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
}`,v0=`#define NORMAL
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
}`,y0=`#define PHONG
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
}`,M0=`#define PHONG
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
}`,S0=`#define STANDARD
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
}`,b0=`#define STANDARD
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
}`,E0=`#define TOON
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
}`,_0=`#define TOON
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
}`,w0=`uniform float size;
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
}`,A0=`uniform vec3 diffuse;
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
}`,T0=`#include <common>
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
}`,R0=`uniform vec3 color;
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
}`,C0=`uniform float rotation;
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
}`,I0=`uniform vec3 diffuse;
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
}`,ne={alphahash_fragment:Qd,alphahash_pars_fragment:$d,alphamap_fragment:tp,alphamap_pars_fragment:ep,alphatest_fragment:np,alphatest_pars_fragment:ip,aomap_fragment:rp,aomap_pars_fragment:sp,batching_pars_vertex:op,batching_vertex:ap,begin_vertex:lp,beginnormal_vertex:cp,bsdfs:up,iridescence_fragment:hp,bumpmap_pars_fragment:fp,clipping_planes_fragment:dp,clipping_planes_pars_fragment:pp,clipping_planes_pars_vertex:mp,clipping_planes_vertex:gp,color_fragment:xp,color_pars_fragment:vp,color_pars_vertex:yp,color_vertex:Mp,common:Sp,cube_uv_reflection_fragment:bp,defaultnormal_vertex:Ep,displacementmap_pars_vertex:_p,displacementmap_vertex:wp,emissivemap_fragment:Ap,emissivemap_pars_fragment:Tp,colorspace_fragment:Rp,colorspace_pars_fragment:Cp,envmap_fragment:Ip,envmap_common_pars_fragment:Pp,envmap_pars_fragment:Fp,envmap_pars_vertex:Dp,envmap_physical_pars_fragment:Wp,envmap_vertex:Up,fog_vertex:Lp,fog_pars_vertex:Np,fog_fragment:Bp,fog_pars_fragment:Op,gradientmap_pars_fragment:Hp,lightmap_pars_fragment:zp,lights_lambert_fragment:kp,lights_lambert_pars_fragment:Gp,lights_pars_begin:Vp,lights_toon_fragment:Xp,lights_toon_pars_fragment:jp,lights_phong_fragment:Kp,lights_phong_pars_fragment:qp,lights_physical_fragment:Jp,lights_physical_pars_fragment:Yp,lights_fragment_begin:Zp,lights_fragment_maps:Qp,lights_fragment_end:$p,logdepthbuf_fragment:tm,logdepthbuf_pars_fragment:em,logdepthbuf_pars_vertex:nm,logdepthbuf_vertex:im,map_fragment:rm,map_pars_fragment:sm,map_particle_fragment:om,map_particle_pars_fragment:am,metalnessmap_fragment:lm,metalnessmap_pars_fragment:cm,morphinstance_vertex:um,morphcolor_vertex:hm,morphnormal_vertex:fm,morphtarget_pars_vertex:dm,morphtarget_vertex:pm,normal_fragment_begin:mm,normal_fragment_maps:gm,normal_pars_fragment:xm,normal_pars_vertex:vm,normal_vertex:ym,normalmap_pars_fragment:Mm,clearcoat_normal_fragment_begin:Sm,clearcoat_normal_fragment_maps:bm,clearcoat_pars_fragment:Em,iridescence_pars_fragment:_m,opaque_fragment:wm,packing:Am,premultiplied_alpha_fragment:Tm,project_vertex:Rm,dithering_fragment:Cm,dithering_pars_fragment:Im,roughnessmap_fragment:Pm,roughnessmap_pars_fragment:Fm,shadowmap_pars_fragment:Dm,shadowmap_pars_vertex:Um,shadowmap_vertex:Lm,shadowmask_pars_fragment:Nm,skinbase_vertex:Bm,skinning_pars_vertex:Om,skinning_vertex:Hm,skinnormal_vertex:zm,specularmap_fragment:km,specularmap_pars_fragment:Gm,tonemapping_fragment:Vm,tonemapping_pars_fragment:Wm,transmission_fragment:Xm,transmission_pars_fragment:jm,uv_pars_fragment:Km,uv_pars_vertex:qm,uv_vertex:Jm,worldpos_vertex:Ym,background_vert:Zm,background_frag:Qm,backgroundCube_vert:$m,backgroundCube_frag:t0,cube_vert:e0,cube_frag:n0,depth_vert:i0,depth_frag:r0,distanceRGBA_vert:s0,distanceRGBA_frag:o0,equirect_vert:a0,equirect_frag:l0,linedashed_vert:c0,linedashed_frag:u0,meshbasic_vert:h0,meshbasic_frag:f0,meshlambert_vert:d0,meshlambert_frag:p0,meshmatcap_vert:m0,meshmatcap_frag:g0,meshnormal_vert:x0,meshnormal_frag:v0,meshphong_vert:y0,meshphong_frag:M0,meshphysical_vert:S0,meshphysical_frag:b0,meshtoon_vert:E0,meshtoon_frag:_0,points_vert:w0,points_frag:A0,shadow_vert:T0,shadow_frag:R0,sprite_vert:C0,sprite_frag:I0},pt={common:{diffuse:{value:new yt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Qt},alphaMap:{value:null},alphaMapTransform:{value:new Qt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Qt}},envmap:{envMap:{value:null},envMapRotation:{value:new Qt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Qt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Qt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Qt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Qt},normalScale:{value:new st(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Qt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Qt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Qt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Qt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new yt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new yt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Qt},alphaTest:{value:0},uvTransform:{value:new Qt}},sprite:{diffuse:{value:new yt(16777215)},opacity:{value:1},center:{value:new st(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Qt},alphaMap:{value:null},alphaMapTransform:{value:new Qt},alphaTest:{value:0}}},ii={basic:{uniforms:ln([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.fog]),vertexShader:ne.meshbasic_vert,fragmentShader:ne.meshbasic_frag},lambert:{uniforms:ln([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,pt.lights,{emissive:{value:new yt(0)}}]),vertexShader:ne.meshlambert_vert,fragmentShader:ne.meshlambert_frag},phong:{uniforms:ln([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,pt.lights,{emissive:{value:new yt(0)},specular:{value:new yt(1118481)},shininess:{value:30}}]),vertexShader:ne.meshphong_vert,fragmentShader:ne.meshphong_frag},standard:{uniforms:ln([pt.common,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.roughnessmap,pt.metalnessmap,pt.fog,pt.lights,{emissive:{value:new yt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ne.meshphysical_vert,fragmentShader:ne.meshphysical_frag},toon:{uniforms:ln([pt.common,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.gradientmap,pt.fog,pt.lights,{emissive:{value:new yt(0)}}]),vertexShader:ne.meshtoon_vert,fragmentShader:ne.meshtoon_frag},matcap:{uniforms:ln([pt.common,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,{matcap:{value:null}}]),vertexShader:ne.meshmatcap_vert,fragmentShader:ne.meshmatcap_frag},points:{uniforms:ln([pt.points,pt.fog]),vertexShader:ne.points_vert,fragmentShader:ne.points_frag},dashed:{uniforms:ln([pt.common,pt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ne.linedashed_vert,fragmentShader:ne.linedashed_frag},depth:{uniforms:ln([pt.common,pt.displacementmap]),vertexShader:ne.depth_vert,fragmentShader:ne.depth_frag},normal:{uniforms:ln([pt.common,pt.bumpmap,pt.normalmap,pt.displacementmap,{opacity:{value:1}}]),vertexShader:ne.meshnormal_vert,fragmentShader:ne.meshnormal_frag},sprite:{uniforms:ln([pt.sprite,pt.fog]),vertexShader:ne.sprite_vert,fragmentShader:ne.sprite_frag},background:{uniforms:{uvTransform:{value:new Qt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ne.background_vert,fragmentShader:ne.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Qt}},vertexShader:ne.backgroundCube_vert,fragmentShader:ne.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ne.cube_vert,fragmentShader:ne.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ne.equirect_vert,fragmentShader:ne.equirect_frag},distanceRGBA:{uniforms:ln([pt.common,pt.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ne.distanceRGBA_vert,fragmentShader:ne.distanceRGBA_frag},shadow:{uniforms:ln([pt.lights,pt.fog,{color:{value:new yt(0)},opacity:{value:1}}]),vertexShader:ne.shadow_vert,fragmentShader:ne.shadow_frag}};ii.physical={uniforms:ln([ii.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Qt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Qt},clearcoatNormalScale:{value:new st(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Qt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Qt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Qt},sheen:{value:0},sheenColor:{value:new yt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Qt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Qt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Qt},transmissionSamplerSize:{value:new st},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Qt},attenuationDistance:{value:0},attenuationColor:{value:new yt(0)},specularColor:{value:new yt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Qt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Qt},anisotropyVector:{value:new st},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Qt}}]),vertexShader:ne.meshphysical_vert,fragmentShader:ne.meshphysical_frag};var fl={r:0,b:0,g:0},dr=new Zn,P0=new Se;function F0(i,t,e,n,r,s,o){let a=new yt(0),l=s===!0?0:1,c,u,h=null,d=0,p=null;function x(S){let g=S.isScene===!0?S.background:null;return g&&g.isTexture&&(g=(S.backgroundBlurriness>0?e:t).get(g)),g}function v(S){let g=!1,b=x(S);b===null?f(a,l):b&&b.isColor&&(f(b,1),g=!0);let M=i.xr.getEnvironmentBlendMode();M==="additive"?n.buffers.color.setClear(0,0,0,1,o):M==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||g)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(S,g){let b=x(g);b&&(b.isCubeTexture||b.mapping===Ys)?(u===void 0&&(u=new zt(new ge(1,1,1),new ve({name:"BackgroundCubeMaterial",uniforms:fr(ii.backgroundCube.uniforms),vertexShader:ii.backgroundCube.vertexShader,fragmentShader:ii.backgroundCube.fragmentShader,side:nn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(M,_,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),dr.copy(g.backgroundRotation),dr.x*=-1,dr.y*=-1,dr.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(dr.y*=-1,dr.z*=-1),u.material.uniforms.envMap.value=b,u.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=g.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(P0.makeRotationFromEuler(dr)),u.material.toneMapped=oe.getTransfer(b.colorSpace)!==me,(h!==b||d!==b.version||p!==i.toneMapping)&&(u.material.needsUpdate=!0,h=b,d=b.version,p=i.toneMapping),u.layers.enableAll(),S.unshift(u,u.geometry,u.material,0,0,null)):b&&b.isTexture&&(c===void 0&&(c=new zt(new an(2,2),new ve({name:"BackgroundMaterial",uniforms:fr(ii.background.uniforms),vertexShader:ii.background.vertexShader,fragmentShader:ii.background.fragmentShader,side:En,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=b,c.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,c.material.toneMapped=oe.getTransfer(b.colorSpace)!==me,b.matrixAutoUpdate===!0&&b.updateMatrix(),c.material.uniforms.uvTransform.value.copy(b.matrix),(h!==b||d!==b.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,h=b,d=b.version,p=i.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function f(S,g){S.getRGB(fl,Nc(i)),n.buffers.color.setClear(fl.r,fl.g,fl.b,g,o)}function y(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(S,g=1){a.set(S),l=g,f(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(S){l=S,f(a,l)},render:v,addToRenderList:m,dispose:y}}function D0(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=d(null),s=r,o=!1;function a(w,C,U,B,H){let j=!1,k=h(B,U,C);s!==k&&(s=k,c(s.object)),j=p(w,B,U,H),j&&x(w,B,U,H),H!==null&&t.update(H,i.ELEMENT_ARRAY_BUFFER),(j||o)&&(o=!1,g(w,C,U,B),H!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(H).buffer))}function l(){return i.createVertexArray()}function c(w){return i.bindVertexArray(w)}function u(w){return i.deleteVertexArray(w)}function h(w,C,U){let B=U.wireframe===!0,H=n[w.id];H===void 0&&(H={},n[w.id]=H);let j=H[C.id];j===void 0&&(j={},H[C.id]=j);let k=j[B];return k===void 0&&(k=d(l()),j[B]=k),k}function d(w){let C=[],U=[],B=[];for(let H=0;H<e;H++)C[H]=0,U[H]=0,B[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:U,attributeDivisors:B,object:w,attributes:{},index:null}}function p(w,C,U,B){let H=s.attributes,j=C.attributes,k=0,tt=U.getAttributes();for(let K in tt)if(tt[K].location>=0){let bt=H[K],Lt=j[K];if(Lt===void 0&&(K==="instanceMatrix"&&w.instanceMatrix&&(Lt=w.instanceMatrix),K==="instanceColor"&&w.instanceColor&&(Lt=w.instanceColor)),bt===void 0||bt.attribute!==Lt||Lt&&bt.data!==Lt.data)return!0;k++}return s.attributesNum!==k||s.index!==B}function x(w,C,U,B){let H={},j=C.attributes,k=0,tt=U.getAttributes();for(let K in tt)if(tt[K].location>=0){let bt=j[K];bt===void 0&&(K==="instanceMatrix"&&w.instanceMatrix&&(bt=w.instanceMatrix),K==="instanceColor"&&w.instanceColor&&(bt=w.instanceColor));let Lt={};Lt.attribute=bt,bt&&bt.data&&(Lt.data=bt.data),H[K]=Lt,k++}s.attributes=H,s.attributesNum=k,s.index=B}function v(){let w=s.newAttributes;for(let C=0,U=w.length;C<U;C++)w[C]=0}function m(w){f(w,0)}function f(w,C){let U=s.newAttributes,B=s.enabledAttributes,H=s.attributeDivisors;U[w]=1,B[w]===0&&(i.enableVertexAttribArray(w),B[w]=1),H[w]!==C&&(i.vertexAttribDivisor(w,C),H[w]=C)}function y(){let w=s.newAttributes,C=s.enabledAttributes;for(let U=0,B=C.length;U<B;U++)C[U]!==w[U]&&(i.disableVertexAttribArray(U),C[U]=0)}function S(w,C,U,B,H,j,k){k===!0?i.vertexAttribIPointer(w,C,U,H,j):i.vertexAttribPointer(w,C,U,B,H,j)}function g(w,C,U,B){v();let H=B.attributes,j=U.getAttributes(),k=C.defaultAttributeValues;for(let tt in j){let K=j[tt];if(K.location>=0){let ut=H[tt];if(ut===void 0&&(tt==="instanceMatrix"&&w.instanceMatrix&&(ut=w.instanceMatrix),tt==="instanceColor"&&w.instanceColor&&(ut=w.instanceColor)),ut!==void 0){let bt=ut.normalized,Lt=ut.itemSize,te=t.get(ut);if(te===void 0)continue;let ae=te.buffer,Ae=te.type,he=te.bytesPerElement,Z=Ae===i.INT||Ae===i.UNSIGNED_INT||ut.gpuType===Fa;if(ut.isInterleavedBufferAttribute){let ot=ut.data,Tt=ot.stride,Vt=ut.offset;if(ot.isInstancedInterleavedBuffer){for(let Ht=0;Ht<K.locationSize;Ht++)f(K.location+Ht,ot.meshPerAttribute);w.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let Ht=0;Ht<K.locationSize;Ht++)m(K.location+Ht);i.bindBuffer(i.ARRAY_BUFFER,ae);for(let Ht=0;Ht<K.locationSize;Ht++)S(K.location+Ht,Lt/K.locationSize,Ae,bt,Tt*he,(Vt+Lt/K.locationSize*Ht)*he,Z)}else{if(ut.isInstancedBufferAttribute){for(let ot=0;ot<K.locationSize;ot++)f(K.location+ot,ut.meshPerAttribute);w.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ut.meshPerAttribute*ut.count)}else for(let ot=0;ot<K.locationSize;ot++)m(K.location+ot);i.bindBuffer(i.ARRAY_BUFFER,ae);for(let ot=0;ot<K.locationSize;ot++)S(K.location+ot,Lt/K.locationSize,Ae,bt,Lt*he,Lt/K.locationSize*ot*he,Z)}}else if(k!==void 0){let bt=k[tt];if(bt!==void 0)switch(bt.length){case 2:i.vertexAttrib2fv(K.location,bt);break;case 3:i.vertexAttrib3fv(K.location,bt);break;case 4:i.vertexAttrib4fv(K.location,bt);break;default:i.vertexAttrib1fv(K.location,bt)}}}}y()}function b(){R();for(let w in n){let C=n[w];for(let U in C){let B=C[U];for(let H in B)u(B[H].object),delete B[H];delete C[U]}delete n[w]}}function M(w){if(n[w.id]===void 0)return;let C=n[w.id];for(let U in C){let B=C[U];for(let H in B)u(B[H].object),delete B[H];delete C[U]}delete n[w.id]}function _(w){for(let C in n){let U=n[C];if(U[w.id]===void 0)continue;let B=U[w.id];for(let H in B)u(B[H].object),delete B[H];delete U[w.id]}}function R(){E(),o=!0,s!==r&&(s=r,c(s.object))}function E(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:R,resetDefaultState:E,dispose:b,releaseStatesOfGeometry:M,releaseStatesOfProgram:_,initAttributes:v,enableAttribute:m,disableUnusedAttributes:y}}function U0(i,t,e){let n;function r(c){n=c}function s(c,u){i.drawArrays(n,c,u),e.update(u,n,1)}function o(c,u,h){h!==0&&(i.drawArraysInstanced(n,c,u,h),e.update(u,n,h))}function a(c,u,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let p=0;for(let x=0;x<h;x++)p+=u[x];e.update(p,n,1)}function l(c,u,h,d){if(h===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let x=0;x<c.length;x++)o(c[x],u[x],d[x]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,u,0,d,0,h);let x=0;for(let v=0;v<h;v++)x+=u[v]*d[v];e.update(x,n,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function L0(i,t,e,n){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){let _=t.get("EXT_texture_filter_anisotropic");r=i.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(_){return!(_!==Hn&&n.convert(_)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(_){let R=_===On&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(_!==ei&&n.convert(_)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&_!==ni&&!R)}function l(_){if(_==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";_="mediump"}return _==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let h=e.logarithmicDepthBuffer===!0,d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),S=i.getParameter(i.MAX_VARYING_VECTORS),g=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),b=x>0,M=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:x,maxTextureSize:v,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:y,maxVaryings:S,maxFragmentUniforms:g,vertexTextures:b,maxSamples:M}}function N0(i){let t=this,e=null,n=0,r=!1,s=!1,o=new gn,a=new Qt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){let p=h.length!==0||d||n!==0||r;return r=d,n=h.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){e=u(h,d,0)},this.setState=function(h,d,p){let x=h.clippingPlanes,v=h.clipIntersection,m=h.clipShadows,f=i.get(h);if(!r||x===null||x.length===0||s&&!m)s?u(null):c();else{let y=s?0:n,S=y*4,g=f.clippingState||null;l.value=g,g=u(x,d,S,p);for(let b=0;b!==S;++b)g[b]=e[b];f.clippingState=g,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(h,d,p,x){let v=h!==null?h.length:0,m=null;if(v!==0){if(m=l.value,x!==!0||m===null){let f=p+v*4,y=d.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<f)&&(m=new Float32Array(f));for(let S=0,g=p;S!==v;++S,g+=4)o.copy(h[S]).applyMatrix4(y,a),o.normal.toArray(m,g),m[g+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,m}}function B0(i){let t=new WeakMap;function e(o,a){return a===Ca?o.mapping=ur:a===Ia&&(o.mapping=hr),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Ca||a===Ia)if(t.has(o)){let l=t.get(o).texture;return e(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new Jo(l.height);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",r),e(c.texture,o.mapping)}else return null}}return o}function r(o){let a=o.target;a.removeEventListener("dispose",r);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}var ts=4,Ph=[.125,.215,.35,.446,.526,.582],gr=20,kc=new qr,Fh=new yt,Gc=null,Vc=0,Wc=0,Xc=!1,mr=(1+Math.sqrt(5))/2,$r=1/mr,Dh=[new L(-mr,$r,0),new L(mr,$r,0),new L(-$r,0,mr),new L($r,0,mr),new L(0,mr,-$r),new L(0,mr,$r),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)],O0=new L,ml=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,r=100,s={}){let{size:o=256,position:a=O0}=s;Gc=this._renderer.getRenderTarget(),Vc=this._renderer.getActiveCubeFace(),Wc=this._renderer.getActiveMipmapLevel(),Xc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,r,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Nh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Lh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Gc,Vc,Wc),this._renderer.xr.enabled=Xc,t.scissorTest=!1,dl(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ur||t.mapping===hr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Gc=this._renderer.getRenderTarget(),Vc=this._renderer.getActiveCubeFace(),Wc=this._renderer.getActiveMipmapLevel(),Xc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:jn,minFilter:jn,generateMipmaps:!1,type:On,format:Hn,colorSpace:ir,depthBuffer:!1},r=Uh(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Uh(t,e,n);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=H0(s)),this._blurMaterial=z0(s,t,e)}return r}_compileMaterial(t){let e=new zt(this._lodPlanes[0],t);this._renderer.compile(e,kc)}_sceneToCubeUV(t,e,n,r,s){let l=new qe(90,1,e,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,p=h.toneMapping;h.getClearColor(Fh),h.toneMapping=Mi,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(r),h.clearDepth(),h.setRenderTarget(null));let v=new se({name:"PMREM.Background",side:nn,depthWrite:!1,depthTest:!1}),m=new zt(new ge,v),f=!1,y=t.background;y?y.isColor&&(v.color.copy(y),t.background=null,f=!0):(v.color.copy(Fh),f=!0);for(let S=0;S<6;S++){let g=S%3;g===0?(l.up.set(0,c[S],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[S],s.y,s.z)):g===1?(l.up.set(0,0,c[S]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[S],s.z)):(l.up.set(0,c[S],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[S]));let b=this._cubeSize;dl(r,g*b,S>2?b:0,b,b),h.setRenderTarget(r),f&&h.render(m,l),h.render(t,l)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=p,h.autoClear=d,t.background=y}_textureToCubeUV(t,e){let n=this._renderer,r=t.mapping===ur||t.mapping===hr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Nh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Lh());let s=r?this._cubemapMaterial:this._equirectMaterial,o=new zt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;let l=this._cubeSize;dl(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,kc)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let r=this._lodPlanes.length;for(let s=1;s<r;s++){let o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Dh[(r-s-1)%Dh.length];this._blur(t,s-1,s,o,a)}e.autoClear=n}_blur(t,e,n,r,s){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,r,"latitudinal",s),this._halfBlur(o,t,n,n,r,"longitudinal",s)}_halfBlur(t,e,n,r,s,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,h=new zt(this._lodPlanes[r],c),d=c.uniforms,p=this._sizeLods[n]-1,x=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*gr-1),v=s/x,m=isFinite(s)?1+Math.floor(u*v):gr;m>gr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${gr}`);let f=[],y=0;for(let _=0;_<gr;++_){let R=_/v,E=Math.exp(-R*R/2);f.push(E),_===0?y+=E:_<m&&(y+=2*E)}for(let _=0;_<f.length;_++)f[_]=f[_]/y;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:S}=this;d.dTheta.value=x,d.mipInt.value=S-n;let g=this._sizeLods[r],b=3*g*(r>S-ts?r-S+ts:0),M=4*(this._cubeSize-g);dl(e,b,M,3*g,2*g),l.setRenderTarget(e),l.render(h,kc)}};function H0(i){let t=[],e=[],n=[],r=i,s=i-ts+1+Ph.length;for(let o=0;o<s;o++){let a=Math.pow(2,r);e.push(a);let l=1/a;o>i-ts?l=Ph[o-i+ts-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,x=6,v=3,m=2,f=1,y=new Float32Array(v*x*p),S=new Float32Array(m*x*p),g=new Float32Array(f*x*p);for(let M=0;M<p;M++){let _=M%3*2/3-1,R=M>2?0:-1,E=[_,R,0,_+2/3,R,0,_+2/3,R+1,0,_,R,0,_+2/3,R+1,0,_,R+1,0];y.set(E,v*x*M),S.set(d,m*x*M);let w=[M,M,M,M,M,M];g.set(w,f*x*M)}let b=new xe;b.setAttribute("position",new Fe(y,v)),b.setAttribute("uv",new Fe(S,m)),b.setAttribute("faceIndex",new Fe(g,f)),t.push(b),r>ts&&r--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Uh(i,t,e){let n=new Je(i,t,e);return n.texture.mapping=Ys,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function dl(i,t,e,n,r){i.viewport.set(t,e,n,r),i.scissor.set(t,e,n,r)}function z0(i,t,e){let n=new Float32Array(gr),r=new L(0,1,0);return new ve({name:"SphericalGaussianBlur",defines:{n:gr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:eu(),fragmentShader:`

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
		`,blending:Kn,depthTest:!1,depthWrite:!1})}function Lh(){return new ve({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:eu(),fragmentShader:`

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
		`,blending:Kn,depthTest:!1,depthWrite:!1})}function Nh(){return new ve({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:eu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Kn,depthTest:!1,depthWrite:!1})}function eu(){return`

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
	`}function k0(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===Ca||l===Ia,u=l===ur||l===hr;if(c||u){let h=t.get(a),d=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new ml(i)),h=c?e.fromEquirectangular(a,h):e.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),h.texture;if(h!==void 0)return h.texture;{let p=a.image;return c&&p&&p.height>0||u&&p&&r(p)?(e===null&&(e=new ml(i)),h=c?e.fromEquirectangular(a):e.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),a.addEventListener("dispose",s),h.texture):null}}}return a}function r(a){let l=0,c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){let l=a.target;l.removeEventListener("dispose",s);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function G0(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return t[n]=r,r}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let r=e(n);return r===null&&Or("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function V0(i,t,e,n){let r={},s=new WeakMap;function o(h){let d=h.target;d.index!==null&&t.remove(d.index);for(let x in d.attributes)t.remove(d.attributes[x]);d.removeEventListener("dispose",o),delete r[d.id];let p=s.get(d);p&&(t.remove(p),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(h,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,e.memory.geometries++),d}function l(h){let d=h.attributes;for(let p in d)t.update(d[p],i.ARRAY_BUFFER)}function c(h){let d=[],p=h.index,x=h.attributes.position,v=0;if(p!==null){let y=p.array;v=p.version;for(let S=0,g=y.length;S<g;S+=3){let b=y[S+0],M=y[S+1],_=y[S+2];d.push(b,M,M,_,_,b)}}else if(x!==void 0){let y=x.array;v=x.version;for(let S=0,g=y.length/3-1;S<g;S+=3){let b=S+0,M=S+1,_=S+2;d.push(b,M,M,_,_,b)}}else return;let m=new(Lc(d)?Cs:Rs)(d,1);m.version=v;let f=s.get(h);f&&t.remove(f),s.set(h,m)}function u(h){let d=s.get(h);if(d){let p=h.index;p!==null&&d.version<p.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function W0(i,t,e){let n;function r(d){n=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,p){i.drawElements(n,p,s,d*o),e.update(p,n,1)}function c(d,p,x){x!==0&&(i.drawElementsInstanced(n,p,s,d*o,x),e.update(p,n,x))}function u(d,p,x){if(x===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,s,d,0,x);let m=0;for(let f=0;f<x;f++)m+=p[f];e.update(m,n,1)}function h(d,p,x,v){if(x===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<d.length;f++)c(d[f]/o,p[f],v[f]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,s,d,0,v,0,x);let f=0;for(let y=0;y<x;y++)f+=p[y]*v[y];e.update(f,n,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function X0(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(s/3);break;case i.LINES:e.lines+=a*(s/2);break;case i.LINE_STRIP:e.lines+=a*(s-1);break;case i.LINE_LOOP:e.lines+=a*s;break;case i.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:n}}function j0(i,t,e){let n=new WeakMap,r=new Ce;function s(o,a,l){let c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0,d=n.get(a);if(d===void 0||d.count!==h){let E=function(){_.dispose(),n.delete(a),a.removeEventListener("dispose",E)};d!==void 0&&d.texture.dispose();let p=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],f=a.morphAttributes.normal||[],y=a.morphAttributes.color||[],S=0;p===!0&&(S=1),x===!0&&(S=2),v===!0&&(S=3);let g=a.attributes.position.count*S,b=1;g>t.maxTextureSize&&(b=Math.ceil(g/t.maxTextureSize),g=t.maxTextureSize);let M=new Float32Array(g*b*4*h),_=new Ts(M,g,b,h);_.type=ni,_.needsUpdate=!0;let R=S*4;for(let w=0;w<h;w++){let C=m[w],U=f[w],B=y[w],H=g*b*4*w;for(let j=0;j<C.count;j++){let k=j*R;p===!0&&(r.fromBufferAttribute(C,j),M[H+k+0]=r.x,M[H+k+1]=r.y,M[H+k+2]=r.z,M[H+k+3]=0),x===!0&&(r.fromBufferAttribute(U,j),M[H+k+4]=r.x,M[H+k+5]=r.y,M[H+k+6]=r.z,M[H+k+7]=0),v===!0&&(r.fromBufferAttribute(B,j),M[H+k+8]=r.x,M[H+k+9]=r.y,M[H+k+10]=r.z,M[H+k+11]=B.itemSize===4?r.w:1)}}d={count:h,texture:_,size:new st(g,b)},n.set(a,d),a.addEventListener("dispose",E)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let p=0;for(let v=0;v<c.length;v++)p+=c[v];let x=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(i,"morphTargetBaseInfluence",x),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:s}}function K0(i,t,e,n){let r=new WeakMap;function s(l){let c=n.render.frame,u=l.geometry,h=t.get(l,u);if(r.get(h)!==c&&(t.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return h}function o(){r=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:o}}var ef=new tn,Bh=new Ns(1,1),nf=new Ts,rf=new Ko,sf=new Ps,Oh=[],Hh=[],zh=new Float32Array(16),kh=new Float32Array(9),Gh=new Float32Array(4);function ns(i,t,e){let n=i[0];if(n<=0||n>0)return i;let r=t*e,s=Oh[r];if(s===void 0&&(s=new Float32Array(r),Oh[r]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(s,a)}return s}function ke(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ge(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function xl(i,t){let e=Hh[t];e===void 0&&(e=new Int32Array(t),Hh[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function q0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function J0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ke(e,t))return;i.uniform2fv(this.addr,t),Ge(e,t)}}function Y0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ke(e,t))return;i.uniform3fv(this.addr,t),Ge(e,t)}}function Z0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ke(e,t))return;i.uniform4fv(this.addr,t),Ge(e,t)}}function Q0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(ke(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ge(e,t)}else{if(ke(e,n))return;Gh.set(n),i.uniformMatrix2fv(this.addr,!1,Gh),Ge(e,n)}}function $0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(ke(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ge(e,t)}else{if(ke(e,n))return;kh.set(n),i.uniformMatrix3fv(this.addr,!1,kh),Ge(e,n)}}function tg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(ke(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ge(e,t)}else{if(ke(e,n))return;zh.set(n),i.uniformMatrix4fv(this.addr,!1,zh),Ge(e,n)}}function eg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function ng(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ke(e,t))return;i.uniform2iv(this.addr,t),Ge(e,t)}}function ig(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ke(e,t))return;i.uniform3iv(this.addr,t),Ge(e,t)}}function rg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ke(e,t))return;i.uniform4iv(this.addr,t),Ge(e,t)}}function sg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function og(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ke(e,t))return;i.uniform2uiv(this.addr,t),Ge(e,t)}}function ag(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ke(e,t))return;i.uniform3uiv(this.addr,t),Ge(e,t)}}function lg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ke(e,t))return;i.uniform4uiv(this.addr,t),Ge(e,t)}}function cg(i,t,e){let n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(Bh.compareFunction=Dc,s=Bh):s=ef,e.setTexture2D(t||s,r)}function ug(i,t,e){let n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture3D(t||rf,r)}function hg(i,t,e){let n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTextureCube(t||sf,r)}function fg(i,t,e){let n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture2DArray(t||nf,r)}function dg(i){switch(i){case 5126:return q0;case 35664:return J0;case 35665:return Y0;case 35666:return Z0;case 35674:return Q0;case 35675:return $0;case 35676:return tg;case 5124:case 35670:return eg;case 35667:case 35671:return ng;case 35668:case 35672:return ig;case 35669:case 35673:return rg;case 5125:return sg;case 36294:return og;case 36295:return ag;case 36296:return lg;case 35678:case 36198:case 36298:case 36306:case 35682:return cg;case 35679:case 36299:case 36307:return ug;case 35680:case 36300:case 36308:case 36293:return hg;case 36289:case 36303:case 36311:case 36292:return fg}}function pg(i,t){i.uniform1fv(this.addr,t)}function mg(i,t){let e=ns(t,this.size,2);i.uniform2fv(this.addr,e)}function gg(i,t){let e=ns(t,this.size,3);i.uniform3fv(this.addr,e)}function xg(i,t){let e=ns(t,this.size,4);i.uniform4fv(this.addr,e)}function vg(i,t){let e=ns(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function yg(i,t){let e=ns(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Mg(i,t){let e=ns(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Sg(i,t){i.uniform1iv(this.addr,t)}function bg(i,t){i.uniform2iv(this.addr,t)}function Eg(i,t){i.uniform3iv(this.addr,t)}function _g(i,t){i.uniform4iv(this.addr,t)}function wg(i,t){i.uniform1uiv(this.addr,t)}function Ag(i,t){i.uniform2uiv(this.addr,t)}function Tg(i,t){i.uniform3uiv(this.addr,t)}function Rg(i,t){i.uniform4uiv(this.addr,t)}function Cg(i,t,e){let n=this.cache,r=t.length,s=xl(e,r);ke(n,s)||(i.uniform1iv(this.addr,s),Ge(n,s));for(let o=0;o!==r;++o)e.setTexture2D(t[o]||ef,s[o])}function Ig(i,t,e){let n=this.cache,r=t.length,s=xl(e,r);ke(n,s)||(i.uniform1iv(this.addr,s),Ge(n,s));for(let o=0;o!==r;++o)e.setTexture3D(t[o]||rf,s[o])}function Pg(i,t,e){let n=this.cache,r=t.length,s=xl(e,r);ke(n,s)||(i.uniform1iv(this.addr,s),Ge(n,s));for(let o=0;o!==r;++o)e.setTextureCube(t[o]||sf,s[o])}function Fg(i,t,e){let n=this.cache,r=t.length,s=xl(e,r);ke(n,s)||(i.uniform1iv(this.addr,s),Ge(n,s));for(let o=0;o!==r;++o)e.setTexture2DArray(t[o]||nf,s[o])}function Dg(i){switch(i){case 5126:return pg;case 35664:return mg;case 35665:return gg;case 35666:return xg;case 35674:return vg;case 35675:return yg;case 35676:return Mg;case 5124:case 35670:return Sg;case 35667:case 35671:return bg;case 35668:case 35672:return Eg;case 35669:case 35673:return _g;case 5125:return wg;case 36294:return Ag;case 36295:return Tg;case 36296:return Rg;case 35678:case 36198:case 36298:case 36306:case 35682:return Cg;case 35679:case 36299:case 36307:return Ig;case 35680:case 36300:case 36308:case 36293:return Pg;case 36289:case 36303:case 36311:case 36292:return Fg}}var Kc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=dg(e.type)}},qc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Dg(e.type)}},Jc=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let r=this.seq;for(let s=0,o=r.length;s!==o;++s){let a=r[s];a.setValue(t,e[a.id],n)}}},jc=/(\w+)(\])?(\[|\.)?/g;function Vh(i,t){i.seq.push(t),i.map[t.id]=t}function Ug(i,t,e){let n=i.name,r=n.length;for(jc.lastIndex=0;;){let s=jc.exec(n),o=jc.lastIndex,a=s[1],l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Vh(e,c===void 0?new Kc(a,i,t):new qc(a,i,t));break}else{let h=e.map[a];h===void 0&&(h=new Jc(a),Vh(e,h)),e=h}}}var es=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let s=t.getActiveUniform(e,r),o=t.getUniformLocation(e,s.name);Ug(s,o,this)}}setValue(t,e,n,r){let s=this.map[e];s!==void 0&&s.setValue(t,n,r)}setOptional(t,e,n){let r=e[n];r!==void 0&&this.setValue(t,n,r)}static upload(t,e,n,r){for(let s=0,o=e.length;s!==o;++s){let a=e[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,r)}}static seqWithValue(t,e){let n=[];for(let r=0,s=t.length;r!==s;++r){let o=t[r];o.id in e&&n.push(o)}return n}};function Wh(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var Lg=37297,Ng=0;function Bg(i,t){let e=i.split(`
`),n=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=r;o<s;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var Xh=new Qt;function Og(i){oe._getMatrix(Xh,oe.workingColorSpace,i);let t=`mat3( ${Xh.elements.map(e=>e.toFixed(4))} )`;switch(oe.getTransfer(i)){case _s:return[t,"LinearTransferOETF"];case me:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function jh(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=(i.getShaderInfoLog(t)||"").trim();if(n&&s==="")return"";let o=/ERROR: 0:(\d+)/.exec(s);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+s+`

`+Bg(i.getShaderSource(t),a)}else return s}function Hg(i,t){let e=Og(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function zg(i,t){let e;switch(t){case Ea:e="Linear";break;case _a:e="Reinhard";break;case wa:e="Cineon";break;case Jr:e="ACESFilmic";break;case Ta:e="AgX";break;case Ra:e="Neutral";break;case Aa:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var pl=new L;function kg(){oe.getLuminanceCoefficients(pl);let i=pl.x.toFixed(4),t=pl.y.toFixed(4),e=pl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Gg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(no).join(`
`)}function Vg(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Wg(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){let s=i.getActiveAttrib(t,r),o=s.name,a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function no(i){return i!==""}function Kh(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function qh(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Xg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Yc(i){return i.replace(Xg,Kg)}var jg=new Map;function Kg(i,t){let e=ne[t];if(e===void 0){let n=jg.get(t);if(n!==void 0)e=ne[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Yc(e)}var qg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Jh(i){return i.replace(qg,Jg)}function Jg(i,t,e,n){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Yh(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function Yg(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Mc?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Vu?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===ti&&(t="SHADOWMAP_TYPE_VSM"),t}function Zg(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ur:case hr:t="ENVMAP_TYPE_CUBE";break;case Ys:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Qg(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case hr:t="ENVMAP_MODE_REFRACTION";break}return t}function $g(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Ec:t="ENVMAP_BLENDING_MULTIPLY";break;case lh:t="ENVMAP_BLENDING_MIX";break;case ch:t="ENVMAP_BLENDING_ADD";break}return t}function tx(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function ex(i,t,e,n){let r=i.getContext(),s=e.defines,o=e.vertexShader,a=e.fragmentShader,l=Yg(e),c=Zg(e),u=Qg(e),h=$g(e),d=tx(e),p=Gg(e),x=Vg(s),v=r.createProgram(),m,f,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(no).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(no).join(`
`),f.length>0&&(f+=`
`)):(m=[Yh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(no).join(`
`),f=[Yh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Mi?"#define TONE_MAPPING":"",e.toneMapping!==Mi?ne.tonemapping_pars_fragment:"",e.toneMapping!==Mi?zg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ne.colorspace_pars_fragment,Hg("linearToOutputTexel",e.outputColorSpace),kg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(no).join(`
`)),o=Yc(o),o=Kh(o,e),o=qh(o,e),a=Yc(a),a=Kh(a,e),a=qh(a,e),o=Jh(o),a=Jh(a),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",e.glslVersion===Uc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Uc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let S=y+m+o,g=y+f+a,b=Wh(r,r.VERTEX_SHADER,S),M=Wh(r,r.FRAGMENT_SHADER,g);r.attachShader(v,b),r.attachShader(v,M),e.index0AttributeName!==void 0?r.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function _(C){if(i.debug.checkShaderErrors){let U=r.getProgramInfoLog(v)||"",B=r.getShaderInfoLog(b)||"",H=r.getShaderInfoLog(M)||"",j=U.trim(),k=B.trim(),tt=H.trim(),K=!0,ut=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(K=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,v,b,M);else{let bt=jh(r,b,"vertex"),Lt=jh(r,M,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+j+`
`+bt+`
`+Lt)}else j!==""?console.warn("THREE.WebGLProgram: Program Info Log:",j):(k===""||tt==="")&&(ut=!1);ut&&(C.diagnostics={runnable:K,programLog:j,vertexShader:{log:k,prefix:m},fragmentShader:{log:tt,prefix:f}})}r.deleteShader(b),r.deleteShader(M),R=new es(r,v),E=Wg(r,v)}let R;this.getUniforms=function(){return R===void 0&&_(this),R};let E;this.getAttributes=function(){return E===void 0&&_(this),E};let w=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=r.getProgramParameter(v,Lg)),w},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Ng++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=b,this.fragmentShader=M,this}var nx=0,Zc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Qc(t),e.set(t,n)),n}},Qc=class{constructor(t){this.id=nx++,this.code=t,this.usedTimes=0}};function ix(i,t,e,n,r,s,o){let a=new kr,l=new Zc,c=new Set,u=[],h=r.logarithmicDepthBuffer,d=r.vertexTextures,p=r.precision,x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(E){return c.add(E),E===0?"uv":`uv${E}`}function m(E,w,C,U,B){let H=U.fog,j=B.geometry,k=E.isMeshStandardMaterial?U.environment:null,tt=(E.isMeshStandardMaterial?e:t).get(E.envMap||k),K=tt&&tt.mapping===Ys?tt.image.height:null,ut=x[E.type];E.precision!==null&&(p=r.getMaxPrecision(E.precision),p!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",p,"instead."));let bt=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,Lt=bt!==void 0?bt.length:0,te=0;j.morphAttributes.position!==void 0&&(te=1),j.morphAttributes.normal!==void 0&&(te=2),j.morphAttributes.color!==void 0&&(te=3);let ae,Ae,he,Z;if(ut){let ce=ii[ut];ae=ce.vertexShader,Ae=ce.fragmentShader}else ae=E.vertexShader,Ae=E.fragmentShader,l.update(E),he=l.getVertexShaderID(E),Z=l.getFragmentShaderID(E);let ot=i.getRenderTarget(),Tt=i.state.buffers.depth.getReversed(),Vt=B.isInstancedMesh===!0,Ht=B.isBatchedMesh===!0,ee=!!E.map,Xe=!!E.matcap,N=!!tt,Te=!!E.aoMap,qt=!!E.lightMap,Wt=!!E.bumpMap,Rt=!!E.normalMap,le=!!E.displacementMap,Ct=!!E.emissiveMap,Xt=!!E.metalnessMap,Ie=!!E.roughnessMap,Pe=E.anisotropy>0,D=E.clearcoat>0,A=E.dispersion>0,W=E.iridescence>0,J=E.sheen>0,et=E.transmission>0,q=Pe&&!!E.anisotropyMap,Nt=D&&!!E.clearcoatMap,it=D&&!!E.clearcoatNormalMap,St=D&&!!E.clearcoatRoughnessMap,Et=W&&!!E.iridescenceMap,lt=W&&!!E.iridescenceThicknessMap,mt=J&&!!E.sheenColorMap,It=J&&!!E.sheenRoughnessMap,Pt=!!E.specularMap,xt=!!E.specularColorMap,Jt=!!E.specularIntensityMap,O=et&&!!E.transmissionMap,ct=et&&!!E.thicknessMap,dt=!!E.gradientMap,_t=!!E.alphaMap,at=E.alphaTest>0,Q=!!E.alphaHash,Ft=!!E.extensions,jt=Mi;E.toneMapped&&(ot===null||ot.isXRRenderTarget===!0)&&(jt=i.toneMapping);let re={shaderID:ut,shaderType:E.type,shaderName:E.name,vertexShader:ae,fragmentShader:Ae,defines:E.defines,customVertexShaderID:he,customFragmentShaderID:Z,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:p,batching:Ht,batchingColor:Ht&&B._colorsTexture!==null,instancing:Vt,instancingColor:Vt&&B.instanceColor!==null,instancingMorph:Vt&&B.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ot===null?i.outputColorSpace:ot.isXRRenderTarget===!0?ot.texture.colorSpace:ir,alphaToCoverage:!!E.alphaToCoverage,map:ee,matcap:Xe,envMap:N,envMapMode:N&&tt.mapping,envMapCubeUVHeight:K,aoMap:Te,lightMap:qt,bumpMap:Wt,normalMap:Rt,displacementMap:d&&le,emissiveMap:Ct,normalMapObjectSpace:Rt&&E.normalMapType===ph,normalMapTangentSpace:Rt&&E.normalMapType===dh,metalnessMap:Xt,roughnessMap:Ie,anisotropy:Pe,anisotropyMap:q,clearcoat:D,clearcoatMap:Nt,clearcoatNormalMap:it,clearcoatRoughnessMap:St,dispersion:A,iridescence:W,iridescenceMap:Et,iridescenceThicknessMap:lt,sheen:J,sheenColorMap:mt,sheenRoughnessMap:It,specularMap:Pt,specularColorMap:xt,specularIntensityMap:Jt,transmission:et,transmissionMap:O,thicknessMap:ct,gradientMap:dt,opaque:E.transparent===!1&&E.blending===er&&E.alphaToCoverage===!1,alphaMap:_t,alphaTest:at,alphaHash:Q,combine:E.combine,mapUv:ee&&v(E.map.channel),aoMapUv:Te&&v(E.aoMap.channel),lightMapUv:qt&&v(E.lightMap.channel),bumpMapUv:Wt&&v(E.bumpMap.channel),normalMapUv:Rt&&v(E.normalMap.channel),displacementMapUv:le&&v(E.displacementMap.channel),emissiveMapUv:Ct&&v(E.emissiveMap.channel),metalnessMapUv:Xt&&v(E.metalnessMap.channel),roughnessMapUv:Ie&&v(E.roughnessMap.channel),anisotropyMapUv:q&&v(E.anisotropyMap.channel),clearcoatMapUv:Nt&&v(E.clearcoatMap.channel),clearcoatNormalMapUv:it&&v(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:St&&v(E.clearcoatRoughnessMap.channel),iridescenceMapUv:Et&&v(E.iridescenceMap.channel),iridescenceThicknessMapUv:lt&&v(E.iridescenceThicknessMap.channel),sheenColorMapUv:mt&&v(E.sheenColorMap.channel),sheenRoughnessMapUv:It&&v(E.sheenRoughnessMap.channel),specularMapUv:Pt&&v(E.specularMap.channel),specularColorMapUv:xt&&v(E.specularColorMap.channel),specularIntensityMapUv:Jt&&v(E.specularIntensityMap.channel),transmissionMapUv:O&&v(E.transmissionMap.channel),thicknessMapUv:ct&&v(E.thicknessMap.channel),alphaMapUv:_t&&v(E.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(Rt||Pe),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!j.attributes.uv&&(ee||_t),fog:!!H,useFog:E.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:E.flatShading===!0&&E.wireframe===!1,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:Tt,skinning:B.isSkinnedMesh===!0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:Lt,morphTextureStride:te,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:jt,decodeVideoTexture:ee&&E.map.isVideoTexture===!0&&oe.getTransfer(E.map.colorSpace)===me,decodeVideoTextureEmissive:Ct&&E.emissiveMap.isVideoTexture===!0&&oe.getTransfer(E.emissiveMap.colorSpace)===me,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Be,flipSided:E.side===nn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Ft&&E.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ft&&E.extensions.multiDraw===!0||Ht)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return re.vertexUv1s=c.has(1),re.vertexUv2s=c.has(2),re.vertexUv3s=c.has(3),c.clear(),re}function f(E){let w=[];if(E.shaderID?w.push(E.shaderID):(w.push(E.customVertexShaderID),w.push(E.customFragmentShaderID)),E.defines!==void 0)for(let C in E.defines)w.push(C),w.push(E.defines[C]);return E.isRawShaderMaterial===!1&&(y(w,E),S(w,E),w.push(i.outputColorSpace)),w.push(E.customProgramCacheKey),w.join()}function y(E,w){E.push(w.precision),E.push(w.outputColorSpace),E.push(w.envMapMode),E.push(w.envMapCubeUVHeight),E.push(w.mapUv),E.push(w.alphaMapUv),E.push(w.lightMapUv),E.push(w.aoMapUv),E.push(w.bumpMapUv),E.push(w.normalMapUv),E.push(w.displacementMapUv),E.push(w.emissiveMapUv),E.push(w.metalnessMapUv),E.push(w.roughnessMapUv),E.push(w.anisotropyMapUv),E.push(w.clearcoatMapUv),E.push(w.clearcoatNormalMapUv),E.push(w.clearcoatRoughnessMapUv),E.push(w.iridescenceMapUv),E.push(w.iridescenceThicknessMapUv),E.push(w.sheenColorMapUv),E.push(w.sheenRoughnessMapUv),E.push(w.specularMapUv),E.push(w.specularColorMapUv),E.push(w.specularIntensityMapUv),E.push(w.transmissionMapUv),E.push(w.thicknessMapUv),E.push(w.combine),E.push(w.fogExp2),E.push(w.sizeAttenuation),E.push(w.morphTargetsCount),E.push(w.morphAttributeCount),E.push(w.numDirLights),E.push(w.numPointLights),E.push(w.numSpotLights),E.push(w.numSpotLightMaps),E.push(w.numHemiLights),E.push(w.numRectAreaLights),E.push(w.numDirLightShadows),E.push(w.numPointLightShadows),E.push(w.numSpotLightShadows),E.push(w.numSpotLightShadowsWithMaps),E.push(w.numLightProbes),E.push(w.shadowMapType),E.push(w.toneMapping),E.push(w.numClippingPlanes),E.push(w.numClipIntersection),E.push(w.depthPacking)}function S(E,w){a.disableAll(),w.supportsVertexTextures&&a.enable(0),w.instancing&&a.enable(1),w.instancingColor&&a.enable(2),w.instancingMorph&&a.enable(3),w.matcap&&a.enable(4),w.envMap&&a.enable(5),w.normalMapObjectSpace&&a.enable(6),w.normalMapTangentSpace&&a.enable(7),w.clearcoat&&a.enable(8),w.iridescence&&a.enable(9),w.alphaTest&&a.enable(10),w.vertexColors&&a.enable(11),w.vertexAlphas&&a.enable(12),w.vertexUv1s&&a.enable(13),w.vertexUv2s&&a.enable(14),w.vertexUv3s&&a.enable(15),w.vertexTangents&&a.enable(16),w.anisotropy&&a.enable(17),w.alphaHash&&a.enable(18),w.batching&&a.enable(19),w.dispersion&&a.enable(20),w.batchingColor&&a.enable(21),w.gradientMap&&a.enable(22),E.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reversedDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.decodeVideoTextureEmissive&&a.enable(20),w.alphaToCoverage&&a.enable(21),E.push(a.mask)}function g(E){let w=x[E.type],C;if(w){let U=ii[w];C=cn.clone(U.uniforms)}else C=E.uniforms;return C}function b(E,w){let C;for(let U=0,B=u.length;U<B;U++){let H=u[U];if(H.cacheKey===w){C=H,++C.usedTimes;break}}return C===void 0&&(C=new ex(i,w,E,s),u.push(C)),C}function M(E){if(--E.usedTimes===0){let w=u.indexOf(E);u[w]=u[u.length-1],u.pop(),E.destroy()}}function _(E){l.remove(E)}function R(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:g,acquireProgram:b,releaseProgram:M,releaseShaderCache:_,programs:u,dispose:R}}function rx(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function r(o,a,l){i.get(o)[a]=l}function s(){i=new WeakMap}return{has:t,get:e,remove:n,update:r,dispose:s}}function sx(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Zh(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Qh(){let i=[],t=0,e=[],n=[],r=[];function s(){t=0,e.length=0,n.length=0,r.length=0}function o(h,d,p,x,v,m){let f=i[t];return f===void 0?(f={id:h.id,object:h,geometry:d,material:p,groupOrder:x,renderOrder:h.renderOrder,z:v,group:m},i[t]=f):(f.id=h.id,f.object=h,f.geometry=d,f.material=p,f.groupOrder=x,f.renderOrder=h.renderOrder,f.z=v,f.group=m),t++,f}function a(h,d,p,x,v,m){let f=o(h,d,p,x,v,m);p.transmission>0?n.push(f):p.transparent===!0?r.push(f):e.push(f)}function l(h,d,p,x,v,m){let f=o(h,d,p,x,v,m);p.transmission>0?n.unshift(f):p.transparent===!0?r.unshift(f):e.unshift(f)}function c(h,d){e.length>1&&e.sort(h||sx),n.length>1&&n.sort(d||Zh),r.length>1&&r.sort(d||Zh)}function u(){for(let h=t,d=i.length;h<d;h++){let p=i[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function ox(){let i=new WeakMap;function t(n,r){let s=i.get(n),o;return s===void 0?(o=new Qh,i.set(n,[o])):r>=s.length?(o=new Qh,s.push(o)):o=s[r],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function ax(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new L,color:new yt};break;case"SpotLight":e={position:new L,direction:new L,color:new yt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new L,color:new yt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new L,skyColor:new yt,groundColor:new yt};break;case"RectAreaLight":e={color:new yt,position:new L,halfWidth:new L,halfHeight:new L};break}return i[t.id]=e,e}}}function lx(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var cx=0;function ux(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function hx(i){let t=new ax,e=lx(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new L);let r=new L,s=new Se,o=new Se;function a(c){let u=0,h=0,d=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let p=0,x=0,v=0,m=0,f=0,y=0,S=0,g=0,b=0,M=0,_=0;c.sort(ux);for(let E=0,w=c.length;E<w;E++){let C=c[E],U=C.color,B=C.intensity,H=C.distance,j=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)u+=U.r*B,h+=U.g*B,d+=U.b*B;else if(C.isLightProbe){for(let k=0;k<9;k++)n.probe[k].addScaledVector(C.sh.coefficients[k],B);_++}else if(C.isDirectionalLight){let k=t.get(C);if(k.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let tt=C.shadow,K=e.get(C);K.shadowIntensity=tt.intensity,K.shadowBias=tt.bias,K.shadowNormalBias=tt.normalBias,K.shadowRadius=tt.radius,K.shadowMapSize=tt.mapSize,n.directionalShadow[p]=K,n.directionalShadowMap[p]=j,n.directionalShadowMatrix[p]=C.shadow.matrix,y++}n.directional[p]=k,p++}else if(C.isSpotLight){let k=t.get(C);k.position.setFromMatrixPosition(C.matrixWorld),k.color.copy(U).multiplyScalar(B),k.distance=H,k.coneCos=Math.cos(C.angle),k.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),k.decay=C.decay,n.spot[v]=k;let tt=C.shadow;if(C.map&&(n.spotLightMap[b]=C.map,b++,tt.updateMatrices(C),C.castShadow&&M++),n.spotLightMatrix[v]=tt.matrix,C.castShadow){let K=e.get(C);K.shadowIntensity=tt.intensity,K.shadowBias=tt.bias,K.shadowNormalBias=tt.normalBias,K.shadowRadius=tt.radius,K.shadowMapSize=tt.mapSize,n.spotShadow[v]=K,n.spotShadowMap[v]=j,g++}v++}else if(C.isRectAreaLight){let k=t.get(C);k.color.copy(U).multiplyScalar(B),k.halfWidth.set(C.width*.5,0,0),k.halfHeight.set(0,C.height*.5,0),n.rectArea[m]=k,m++}else if(C.isPointLight){let k=t.get(C);if(k.color.copy(C.color).multiplyScalar(C.intensity),k.distance=C.distance,k.decay=C.decay,C.castShadow){let tt=C.shadow,K=e.get(C);K.shadowIntensity=tt.intensity,K.shadowBias=tt.bias,K.shadowNormalBias=tt.normalBias,K.shadowRadius=tt.radius,K.shadowMapSize=tt.mapSize,K.shadowCameraNear=tt.camera.near,K.shadowCameraFar=tt.camera.far,n.pointShadow[x]=K,n.pointShadowMap[x]=j,n.pointShadowMatrix[x]=C.shadow.matrix,S++}n.point[x]=k,x++}else if(C.isHemisphereLight){let k=t.get(C);k.skyColor.copy(C.color).multiplyScalar(B),k.groundColor.copy(C.groundColor).multiplyScalar(B),n.hemi[f]=k,f++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=pt.LTC_FLOAT_1,n.rectAreaLTC2=pt.LTC_FLOAT_2):(n.rectAreaLTC1=pt.LTC_HALF_1,n.rectAreaLTC2=pt.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;let R=n.hash;(R.directionalLength!==p||R.pointLength!==x||R.spotLength!==v||R.rectAreaLength!==m||R.hemiLength!==f||R.numDirectionalShadows!==y||R.numPointShadows!==S||R.numSpotShadows!==g||R.numSpotMaps!==b||R.numLightProbes!==_)&&(n.directional.length=p,n.spot.length=v,n.rectArea.length=m,n.point.length=x,n.hemi.length=f,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=g,n.spotShadowMap.length=g,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=g+b-M,n.spotLightMap.length=b,n.numSpotLightShadowsWithMaps=M,n.numLightProbes=_,R.directionalLength=p,R.pointLength=x,R.spotLength=v,R.rectAreaLength=m,R.hemiLength=f,R.numDirectionalShadows=y,R.numPointShadows=S,R.numSpotShadows=g,R.numSpotMaps=b,R.numLightProbes=_,n.version=cx++)}function l(c,u){let h=0,d=0,p=0,x=0,v=0,m=u.matrixWorldInverse;for(let f=0,y=c.length;f<y;f++){let S=c[f];if(S.isDirectionalLight){let g=n.directional[h];g.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),g.direction.sub(r),g.direction.transformDirection(m),h++}else if(S.isSpotLight){let g=n.spot[p];g.position.setFromMatrixPosition(S.matrixWorld),g.position.applyMatrix4(m),g.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),g.direction.sub(r),g.direction.transformDirection(m),p++}else if(S.isRectAreaLight){let g=n.rectArea[x];g.position.setFromMatrixPosition(S.matrixWorld),g.position.applyMatrix4(m),o.identity(),s.copy(S.matrixWorld),s.premultiply(m),o.extractRotation(s),g.halfWidth.set(S.width*.5,0,0),g.halfHeight.set(0,S.height*.5,0),g.halfWidth.applyMatrix4(o),g.halfHeight.applyMatrix4(o),x++}else if(S.isPointLight){let g=n.point[d];g.position.setFromMatrixPosition(S.matrixWorld),g.position.applyMatrix4(m),d++}else if(S.isHemisphereLight){let g=n.hemi[v];g.direction.setFromMatrixPosition(S.matrixWorld),g.direction.transformDirection(m),v++}}}return{setup:a,setupView:l,state:n}}function $h(i){let t=new hx(i),e=[],n=[];function r(u){c.camera=u,e.length=0,n.length=0}function s(u){e.push(u)}function o(u){n.push(u)}function a(){t.setup(e)}function l(u){t.setupView(e,u)}let c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function fx(i){let t=new WeakMap;function e(r,s=0){let o=t.get(r),a;return o===void 0?(a=new $h(i),t.set(r,[a])):s>=o.length?(a=new $h(i),o.push(a)):a=o[s],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var dx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,px=`uniform sampler2D shadow_pass;
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
}`;function mx(i,t,e){let n=new Ls,r=new st,s=new st,o=new Ce,a=new ra({depthPacking:fh}),l=new sa,c={},u=e.maxTextureSize,h={[En]:nn,[nn]:En,[Be]:Be},d=new ve({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new st},radius:{value:4}},vertexShader:dx,fragmentShader:px}),p=d.clone();p.defines.HORIZONTAL_PASS=1;let x=new xe;x.setAttribute("position",new Fe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new zt(x,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Mc;let f=this.type;this.render=function(M,_,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||M.length===0)return;let E=i.getRenderTarget(),w=i.getActiveCubeFace(),C=i.getActiveMipmapLevel(),U=i.state;U.setBlending(Kn),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);let B=f!==ti&&this.type===ti,H=f===ti&&this.type!==ti;for(let j=0,k=M.length;j<k;j++){let tt=M[j],K=tt.shadow;if(K===void 0){console.warn("THREE.WebGLShadowMap:",tt,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;r.copy(K.mapSize);let ut=K.getFrameExtents();if(r.multiply(ut),s.copy(K.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/ut.x),r.x=s.x*ut.x,K.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/ut.y),r.y=s.y*ut.y,K.mapSize.y=s.y)),K.map===null||B===!0||H===!0){let Lt=this.type!==ti?{minFilter:xn,magFilter:xn}:{};K.map!==null&&K.map.dispose(),K.map=new Je(r.x,r.y,Lt),K.map.texture.name=tt.name+".shadowMap",K.camera.updateProjectionMatrix()}i.setRenderTarget(K.map),i.clear();let bt=K.getViewportCount();for(let Lt=0;Lt<bt;Lt++){let te=K.getViewport(Lt);o.set(s.x*te.x,s.y*te.y,s.x*te.z,s.y*te.w),U.viewport(o),K.updateMatrices(tt,Lt),n=K.getFrustum(),g(_,R,K.camera,tt,this.type)}K.isPointLightShadow!==!0&&this.type===ti&&y(K,R),K.needsUpdate=!1}f=this.type,m.needsUpdate=!1,i.setRenderTarget(E,w,C)};function y(M,_){let R=t.update(v);d.defines.VSM_SAMPLES!==M.blurSamples&&(d.defines.VSM_SAMPLES=M.blurSamples,p.defines.VSM_SAMPLES=M.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new Je(r.x,r.y)),d.uniforms.shadow_pass.value=M.map.texture,d.uniforms.resolution.value=M.mapSize,d.uniforms.radius.value=M.radius,i.setRenderTarget(M.mapPass),i.clear(),i.renderBufferDirect(_,null,R,d,v,null),p.uniforms.shadow_pass.value=M.mapPass.texture,p.uniforms.resolution.value=M.mapSize,p.uniforms.radius.value=M.radius,i.setRenderTarget(M.map),i.clear(),i.renderBufferDirect(_,null,R,p,v,null)}function S(M,_,R,E){let w=null,C=R.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(C!==void 0)w=C;else if(w=R.isPointLight===!0?l:a,i.localClippingEnabled&&_.clipShadows===!0&&Array.isArray(_.clippingPlanes)&&_.clippingPlanes.length!==0||_.displacementMap&&_.displacementScale!==0||_.alphaMap&&_.alphaTest>0||_.map&&_.alphaTest>0||_.alphaToCoverage===!0){let U=w.uuid,B=_.uuid,H=c[U];H===void 0&&(H={},c[U]=H);let j=H[B];j===void 0&&(j=w.clone(),H[B]=j,_.addEventListener("dispose",b)),w=j}if(w.visible=_.visible,w.wireframe=_.wireframe,E===ti?w.side=_.shadowSide!==null?_.shadowSide:_.side:w.side=_.shadowSide!==null?_.shadowSide:h[_.side],w.alphaMap=_.alphaMap,w.alphaTest=_.alphaToCoverage===!0?.5:_.alphaTest,w.map=_.map,w.clipShadows=_.clipShadows,w.clippingPlanes=_.clippingPlanes,w.clipIntersection=_.clipIntersection,w.displacementMap=_.displacementMap,w.displacementScale=_.displacementScale,w.displacementBias=_.displacementBias,w.wireframeLinewidth=_.wireframeLinewidth,w.linewidth=_.linewidth,R.isPointLight===!0&&w.isMeshDistanceMaterial===!0){let U=i.properties.get(w);U.light=R}return w}function g(M,_,R,E,w){if(M.visible===!1)return;if(M.layers.test(_.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&w===ti)&&(!M.frustumCulled||n.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,M.matrixWorld);let B=t.update(M),H=M.material;if(Array.isArray(H)){let j=B.groups;for(let k=0,tt=j.length;k<tt;k++){let K=j[k],ut=H[K.materialIndex];if(ut&&ut.visible){let bt=S(M,ut,E,w);M.onBeforeShadow(i,M,_,R,B,bt,K),i.renderBufferDirect(R,null,B,bt,M,K),M.onAfterShadow(i,M,_,R,B,bt,K)}}}else if(H.visible){let j=S(M,H,E,w);M.onBeforeShadow(i,M,_,R,B,j,null),i.renderBufferDirect(R,null,B,j,M,null),M.onAfterShadow(i,M,_,R,B,j,null)}}let U=M.children;for(let B=0,H=U.length;B<H;B++)g(U[B],_,R,E,w)}function b(M){M.target.removeEventListener("dispose",b);for(let R in c){let E=c[R],w=M.target.uuid;w in E&&(E[w].dispose(),delete E[w])}}}var gx={[ga]:xa,[va]:Sa,[ya]:ba,[nr]:Ma,[xa]:ga,[Sa]:va,[ba]:ya,[Ma]:nr};function xx(i,t){function e(){let O=!1,ct=new Ce,dt=null,_t=new Ce(0,0,0,0);return{setMask:function(at){dt!==at&&!O&&(i.colorMask(at,at,at,at),dt=at)},setLocked:function(at){O=at},setClear:function(at,Q,Ft,jt,re){re===!0&&(at*=jt,Q*=jt,Ft*=jt),ct.set(at,Q,Ft,jt),_t.equals(ct)===!1&&(i.clearColor(at,Q,Ft,jt),_t.copy(ct))},reset:function(){O=!1,dt=null,_t.set(-1,0,0,0)}}}function n(){let O=!1,ct=!1,dt=null,_t=null,at=null;return{setReversed:function(Q){if(ct!==Q){let Ft=t.get("EXT_clip_control");Q?Ft.clipControlEXT(Ft.LOWER_LEFT_EXT,Ft.ZERO_TO_ONE_EXT):Ft.clipControlEXT(Ft.LOWER_LEFT_EXT,Ft.NEGATIVE_ONE_TO_ONE_EXT),ct=Q;let jt=at;at=null,this.setClear(jt)}},getReversed:function(){return ct},setTest:function(Q){Q?ot(i.DEPTH_TEST):Tt(i.DEPTH_TEST)},setMask:function(Q){dt!==Q&&!O&&(i.depthMask(Q),dt=Q)},setFunc:function(Q){if(ct&&(Q=gx[Q]),_t!==Q){switch(Q){case ga:i.depthFunc(i.NEVER);break;case xa:i.depthFunc(i.ALWAYS);break;case va:i.depthFunc(i.LESS);break;case nr:i.depthFunc(i.LEQUAL);break;case ya:i.depthFunc(i.EQUAL);break;case Ma:i.depthFunc(i.GEQUAL);break;case Sa:i.depthFunc(i.GREATER);break;case ba:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}_t=Q}},setLocked:function(Q){O=Q},setClear:function(Q){at!==Q&&(ct&&(Q=1-Q),i.clearDepth(Q),at=Q)},reset:function(){O=!1,dt=null,_t=null,at=null,ct=!1}}}function r(){let O=!1,ct=null,dt=null,_t=null,at=null,Q=null,Ft=null,jt=null,re=null;return{setTest:function(ce){O||(ce?ot(i.STENCIL_TEST):Tt(i.STENCIL_TEST))},setMask:function(ce){ct!==ce&&!O&&(i.stencilMask(ce),ct=ce)},setFunc:function(ce,Fn,pn){(dt!==ce||_t!==Fn||at!==pn)&&(i.stencilFunc(ce,Fn,pn),dt=ce,_t=Fn,at=pn)},setOp:function(ce,Fn,pn){(Q!==ce||Ft!==Fn||jt!==pn)&&(i.stencilOp(ce,Fn,pn),Q=ce,Ft=Fn,jt=pn)},setLocked:function(ce){O=ce},setClear:function(ce){re!==ce&&(i.clearStencil(ce),re=ce)},reset:function(){O=!1,ct=null,dt=null,_t=null,at=null,Q=null,Ft=null,jt=null,re=null}}}let s=new e,o=new n,a=new r,l=new WeakMap,c=new WeakMap,u={},h={},d=new WeakMap,p=[],x=null,v=!1,m=null,f=null,y=null,S=null,g=null,b=null,M=null,_=new yt(0,0,0),R=0,E=!1,w=null,C=null,U=null,B=null,H=null,j=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),k=!1,tt=0,K=i.getParameter(i.VERSION);K.indexOf("WebGL")!==-1?(tt=parseFloat(/^WebGL (\d)/.exec(K)[1]),k=tt>=1):K.indexOf("OpenGL ES")!==-1&&(tt=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),k=tt>=2);let ut=null,bt={},Lt=i.getParameter(i.SCISSOR_BOX),te=i.getParameter(i.VIEWPORT),ae=new Ce().fromArray(Lt),Ae=new Ce().fromArray(te);function he(O,ct,dt,_t){let at=new Uint8Array(4),Q=i.createTexture();i.bindTexture(O,Q),i.texParameteri(O,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(O,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ft=0;Ft<dt;Ft++)O===i.TEXTURE_3D||O===i.TEXTURE_2D_ARRAY?i.texImage3D(ct,0,i.RGBA,1,1,_t,0,i.RGBA,i.UNSIGNED_BYTE,at):i.texImage2D(ct+Ft,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,at);return Q}let Z={};Z[i.TEXTURE_2D]=he(i.TEXTURE_2D,i.TEXTURE_2D,1),Z[i.TEXTURE_CUBE_MAP]=he(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[i.TEXTURE_2D_ARRAY]=he(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Z[i.TEXTURE_3D]=he(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ot(i.DEPTH_TEST),o.setFunc(nr),Wt(!1),Rt(yc),ot(i.CULL_FACE),Te(Kn);function ot(O){u[O]!==!0&&(i.enable(O),u[O]=!0)}function Tt(O){u[O]!==!1&&(i.disable(O),u[O]=!1)}function Vt(O,ct){return h[O]!==ct?(i.bindFramebuffer(O,ct),h[O]=ct,O===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=ct),O===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=ct),!0):!1}function Ht(O,ct){let dt=p,_t=!1;if(O){dt=d.get(ct),dt===void 0&&(dt=[],d.set(ct,dt));let at=O.textures;if(dt.length!==at.length||dt[0]!==i.COLOR_ATTACHMENT0){for(let Q=0,Ft=at.length;Q<Ft;Q++)dt[Q]=i.COLOR_ATTACHMENT0+Q;dt.length=at.length,_t=!0}}else dt[0]!==i.BACK&&(dt[0]=i.BACK,_t=!0);_t&&i.drawBuffers(dt)}function ee(O){return x!==O?(i.useProgram(O),x=O,!0):!1}let Xe={[Ui]:i.FUNC_ADD,[Xu]:i.FUNC_SUBTRACT,[ju]:i.FUNC_REVERSE_SUBTRACT};Xe[Ku]=i.MIN,Xe[qu]=i.MAX;let N={[Ju]:i.ZERO,[Yu]:i.ONE,[Zu]:i.SRC_COLOR,[Ho]:i.SRC_ALPHA,[ih]:i.SRC_ALPHA_SATURATE,[eh]:i.DST_COLOR,[$u]:i.DST_ALPHA,[Qu]:i.ONE_MINUS_SRC_COLOR,[zo]:i.ONE_MINUS_SRC_ALPHA,[nh]:i.ONE_MINUS_DST_COLOR,[th]:i.ONE_MINUS_DST_ALPHA,[rh]:i.CONSTANT_COLOR,[sh]:i.ONE_MINUS_CONSTANT_COLOR,[oh]:i.CONSTANT_ALPHA,[ah]:i.ONE_MINUS_CONSTANT_ALPHA};function Te(O,ct,dt,_t,at,Q,Ft,jt,re,ce){if(O===Kn){v===!0&&(Tt(i.BLEND),v=!1);return}if(v===!1&&(ot(i.BLEND),v=!0),O!==Wu){if(O!==m||ce!==E){if((f!==Ui||g!==Ui)&&(i.blendEquation(i.FUNC_ADD),f=Ui,g=Ui),ce)switch(O){case er:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Oe:i.blendFunc(i.ONE,i.ONE);break;case Sc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case bc:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case er:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Oe:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Sc:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case bc:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}y=null,S=null,b=null,M=null,_.set(0,0,0),R=0,m=O,E=ce}return}at=at||ct,Q=Q||dt,Ft=Ft||_t,(ct!==f||at!==g)&&(i.blendEquationSeparate(Xe[ct],Xe[at]),f=ct,g=at),(dt!==y||_t!==S||Q!==b||Ft!==M)&&(i.blendFuncSeparate(N[dt],N[_t],N[Q],N[Ft]),y=dt,S=_t,b=Q,M=Ft),(jt.equals(_)===!1||re!==R)&&(i.blendColor(jt.r,jt.g,jt.b,re),_.copy(jt),R=re),m=O,E=!1}function qt(O,ct){O.side===Be?Tt(i.CULL_FACE):ot(i.CULL_FACE);let dt=O.side===nn;ct&&(dt=!dt),Wt(dt),O.blending===er&&O.transparent===!1?Te(Kn):Te(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),o.setFunc(O.depthFunc),o.setTest(O.depthTest),o.setMask(O.depthWrite),s.setMask(O.colorWrite);let _t=O.stencilWrite;a.setTest(_t),_t&&(a.setMask(O.stencilWriteMask),a.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),a.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),Ct(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?ot(i.SAMPLE_ALPHA_TO_COVERAGE):Tt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Wt(O){w!==O&&(O?i.frontFace(i.CW):i.frontFace(i.CCW),w=O)}function Rt(O){O!==ku?(ot(i.CULL_FACE),O!==C&&(O===yc?i.cullFace(i.BACK):O===Gu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Tt(i.CULL_FACE),C=O}function le(O){O!==U&&(k&&i.lineWidth(O),U=O)}function Ct(O,ct,dt){O?(ot(i.POLYGON_OFFSET_FILL),(B!==ct||H!==dt)&&(i.polygonOffset(ct,dt),B=ct,H=dt)):Tt(i.POLYGON_OFFSET_FILL)}function Xt(O){O?ot(i.SCISSOR_TEST):Tt(i.SCISSOR_TEST)}function Ie(O){O===void 0&&(O=i.TEXTURE0+j-1),ut!==O&&(i.activeTexture(O),ut=O)}function Pe(O,ct,dt){dt===void 0&&(ut===null?dt=i.TEXTURE0+j-1:dt=ut);let _t=bt[dt];_t===void 0&&(_t={type:void 0,texture:void 0},bt[dt]=_t),(_t.type!==O||_t.texture!==ct)&&(ut!==dt&&(i.activeTexture(dt),ut=dt),i.bindTexture(O,ct||Z[O]),_t.type=O,_t.texture=ct)}function D(){let O=bt[ut];O!==void 0&&O.type!==void 0&&(i.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function A(){try{i.compressedTexImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function W(){try{i.compressedTexImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function J(){try{i.texSubImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function et(){try{i.texSubImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function q(){try{i.compressedTexSubImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Nt(){try{i.compressedTexSubImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function it(){try{i.texStorage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function St(){try{i.texStorage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Et(){try{i.texImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function lt(){try{i.texImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function mt(O){ae.equals(O)===!1&&(i.scissor(O.x,O.y,O.z,O.w),ae.copy(O))}function It(O){Ae.equals(O)===!1&&(i.viewport(O.x,O.y,O.z,O.w),Ae.copy(O))}function Pt(O,ct){let dt=c.get(ct);dt===void 0&&(dt=new WeakMap,c.set(ct,dt));let _t=dt.get(O);_t===void 0&&(_t=i.getUniformBlockIndex(ct,O.name),dt.set(O,_t))}function xt(O,ct){let _t=c.get(ct).get(O);l.get(ct)!==_t&&(i.uniformBlockBinding(ct,_t,O.__bindingPointIndex),l.set(ct,_t))}function Jt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},ut=null,bt={},h={},d=new WeakMap,p=[],x=null,v=!1,m=null,f=null,y=null,S=null,g=null,b=null,M=null,_=new yt(0,0,0),R=0,E=!1,w=null,C=null,U=null,B=null,H=null,ae.set(0,0,i.canvas.width,i.canvas.height),Ae.set(0,0,i.canvas.width,i.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:ot,disable:Tt,bindFramebuffer:Vt,drawBuffers:Ht,useProgram:ee,setBlending:Te,setMaterial:qt,setFlipSided:Wt,setCullFace:Rt,setLineWidth:le,setPolygonOffset:Ct,setScissorTest:Xt,activeTexture:Ie,bindTexture:Pe,unbindTexture:D,compressedTexImage2D:A,compressedTexImage3D:W,texImage2D:Et,texImage3D:lt,updateUBOMapping:Pt,uniformBlockBinding:xt,texStorage2D:it,texStorage3D:St,texSubImage2D:J,texSubImage3D:et,compressedTexSubImage2D:q,compressedTexSubImage3D:Nt,scissor:mt,viewport:It,reset:Jt}}function vx(i,t,e,n,r,s,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new st,u=new WeakMap,h,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(D,A){return p?new OffscreenCanvas(D,A):As("canvas")}function v(D,A,W){let J=1,et=Pe(D);if((et.width>W||et.height>W)&&(J=W/Math.max(et.width,et.height)),J<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){let q=Math.floor(J*et.width),Nt=Math.floor(J*et.height);h===void 0&&(h=x(q,Nt));let it=A?x(q,Nt):h;return it.width=q,it.height=Nt,it.getContext("2d").drawImage(D,0,0,q,Nt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+et.width+"x"+et.height+") to ("+q+"x"+Nt+")."),it}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+et.width+"x"+et.height+")."),D;return D}function m(D){return D.generateMipmaps}function f(D){i.generateMipmap(D)}function y(D){return D.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?i.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function S(D,A,W,J,et=!1){if(D!==null){if(i[D]!==void 0)return i[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let q=A;if(A===i.RED&&(W===i.FLOAT&&(q=i.R32F),W===i.HALF_FLOAT&&(q=i.R16F),W===i.UNSIGNED_BYTE&&(q=i.R8)),A===i.RED_INTEGER&&(W===i.UNSIGNED_BYTE&&(q=i.R8UI),W===i.UNSIGNED_SHORT&&(q=i.R16UI),W===i.UNSIGNED_INT&&(q=i.R32UI),W===i.BYTE&&(q=i.R8I),W===i.SHORT&&(q=i.R16I),W===i.INT&&(q=i.R32I)),A===i.RG&&(W===i.FLOAT&&(q=i.RG32F),W===i.HALF_FLOAT&&(q=i.RG16F),W===i.UNSIGNED_BYTE&&(q=i.RG8)),A===i.RG_INTEGER&&(W===i.UNSIGNED_BYTE&&(q=i.RG8UI),W===i.UNSIGNED_SHORT&&(q=i.RG16UI),W===i.UNSIGNED_INT&&(q=i.RG32UI),W===i.BYTE&&(q=i.RG8I),W===i.SHORT&&(q=i.RG16I),W===i.INT&&(q=i.RG32I)),A===i.RGB_INTEGER&&(W===i.UNSIGNED_BYTE&&(q=i.RGB8UI),W===i.UNSIGNED_SHORT&&(q=i.RGB16UI),W===i.UNSIGNED_INT&&(q=i.RGB32UI),W===i.BYTE&&(q=i.RGB8I),W===i.SHORT&&(q=i.RGB16I),W===i.INT&&(q=i.RGB32I)),A===i.RGBA_INTEGER&&(W===i.UNSIGNED_BYTE&&(q=i.RGBA8UI),W===i.UNSIGNED_SHORT&&(q=i.RGBA16UI),W===i.UNSIGNED_INT&&(q=i.RGBA32UI),W===i.BYTE&&(q=i.RGBA8I),W===i.SHORT&&(q=i.RGBA16I),W===i.INT&&(q=i.RGBA32I)),A===i.RGB&&(W===i.UNSIGNED_INT_5_9_9_9_REV&&(q=i.RGB9_E5),W===i.UNSIGNED_INT_10F_11F_11F_REV&&(q=i.R11F_G11F_B10F)),A===i.RGBA){let Nt=et?_s:oe.getTransfer(J);W===i.FLOAT&&(q=i.RGBA32F),W===i.HALF_FLOAT&&(q=i.RGBA16F),W===i.UNSIGNED_BYTE&&(q=Nt===me?i.SRGB8_ALPHA8:i.RGBA8),W===i.UNSIGNED_SHORT_4_4_4_4&&(q=i.RGBA4),W===i.UNSIGNED_SHORT_5_5_5_1&&(q=i.RGB5_A1)}return(q===i.R16F||q===i.R32F||q===i.RG16F||q===i.RG32F||q===i.RGBA16F||q===i.RGBA32F)&&t.get("EXT_color_buffer_float"),q}function g(D,A){let W;return D?A===null||A===ki||A===Zr?W=i.DEPTH24_STENCIL8:A===ni?W=i.DEPTH32F_STENCIL8:A===Yr&&(W=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===ki||A===Zr?W=i.DEPTH_COMPONENT24:A===ni?W=i.DEPTH_COMPONENT32F:A===Yr&&(W=i.DEPTH_COMPONENT16),W}function b(D,A){return m(D)===!0||D.isFramebufferTexture&&D.minFilter!==xn&&D.minFilter!==jn?Math.log2(Math.max(A.width,A.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?A.mipmaps.length:1}function M(D){let A=D.target;A.removeEventListener("dispose",M),R(A),A.isVideoTexture&&u.delete(A)}function _(D){let A=D.target;A.removeEventListener("dispose",_),w(A)}function R(D){let A=n.get(D);if(A.__webglInit===void 0)return;let W=D.source,J=d.get(W);if(J){let et=J[A.__cacheKey];et.usedTimes--,et.usedTimes===0&&E(D),Object.keys(J).length===0&&d.delete(W)}n.remove(D)}function E(D){let A=n.get(D);i.deleteTexture(A.__webglTexture);let W=D.source,J=d.get(W);delete J[A.__cacheKey],o.memory.textures--}function w(D){let A=n.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),n.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(A.__webglFramebuffer[J]))for(let et=0;et<A.__webglFramebuffer[J].length;et++)i.deleteFramebuffer(A.__webglFramebuffer[J][et]);else i.deleteFramebuffer(A.__webglFramebuffer[J]);A.__webglDepthbuffer&&i.deleteRenderbuffer(A.__webglDepthbuffer[J])}else{if(Array.isArray(A.__webglFramebuffer))for(let J=0;J<A.__webglFramebuffer.length;J++)i.deleteFramebuffer(A.__webglFramebuffer[J]);else i.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&i.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&i.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let J=0;J<A.__webglColorRenderbuffer.length;J++)A.__webglColorRenderbuffer[J]&&i.deleteRenderbuffer(A.__webglColorRenderbuffer[J]);A.__webglDepthRenderbuffer&&i.deleteRenderbuffer(A.__webglDepthRenderbuffer)}let W=D.textures;for(let J=0,et=W.length;J<et;J++){let q=n.get(W[J]);q.__webglTexture&&(i.deleteTexture(q.__webglTexture),o.memory.textures--),n.remove(W[J])}n.remove(D)}let C=0;function U(){C=0}function B(){let D=C;return D>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+r.maxTextures),C+=1,D}function H(D){let A=[];return A.push(D.wrapS),A.push(D.wrapT),A.push(D.wrapR||0),A.push(D.magFilter),A.push(D.minFilter),A.push(D.anisotropy),A.push(D.internalFormat),A.push(D.format),A.push(D.type),A.push(D.generateMipmaps),A.push(D.premultiplyAlpha),A.push(D.flipY),A.push(D.unpackAlignment),A.push(D.colorSpace),A.join()}function j(D,A){let W=n.get(D);if(D.isVideoTexture&&Xt(D),D.isRenderTargetTexture===!1&&D.isExternalTexture!==!0&&D.version>0&&W.__version!==D.version){let J=D.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Z(W,D,A);return}}else D.isExternalTexture&&(W.__webglTexture=D.sourceTexture?D.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,W.__webglTexture,i.TEXTURE0+A)}function k(D,A){let W=n.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&W.__version!==D.version){Z(W,D,A);return}e.bindTexture(i.TEXTURE_2D_ARRAY,W.__webglTexture,i.TEXTURE0+A)}function tt(D,A){let W=n.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&W.__version!==D.version){Z(W,D,A);return}e.bindTexture(i.TEXTURE_3D,W.__webglTexture,i.TEXTURE0+A)}function K(D,A){let W=n.get(D);if(D.version>0&&W.__version!==D.version){ot(W,D,A);return}e.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture,i.TEXTURE0+A)}let ut={[xi]:i.REPEAT,[Di]:i.CLAMP_TO_EDGE,[ko]:i.MIRRORED_REPEAT},bt={[xn]:i.NEAREST,[uh]:i.NEAREST_MIPMAP_NEAREST,[Zs]:i.NEAREST_MIPMAP_LINEAR,[jn]:i.LINEAR,[Pa]:i.LINEAR_MIPMAP_NEAREST,[zi]:i.LINEAR_MIPMAP_LINEAR},Lt={[mh]:i.NEVER,[Sh]:i.ALWAYS,[gh]:i.LESS,[Dc]:i.LEQUAL,[xh]:i.EQUAL,[Mh]:i.GEQUAL,[vh]:i.GREATER,[yh]:i.NOTEQUAL};function te(D,A){if(A.type===ni&&t.has("OES_texture_float_linear")===!1&&(A.magFilter===jn||A.magFilter===Pa||A.magFilter===Zs||A.magFilter===zi||A.minFilter===jn||A.minFilter===Pa||A.minFilter===Zs||A.minFilter===zi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(D,i.TEXTURE_WRAP_S,ut[A.wrapS]),i.texParameteri(D,i.TEXTURE_WRAP_T,ut[A.wrapT]),(D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY)&&i.texParameteri(D,i.TEXTURE_WRAP_R,ut[A.wrapR]),i.texParameteri(D,i.TEXTURE_MAG_FILTER,bt[A.magFilter]),i.texParameteri(D,i.TEXTURE_MIN_FILTER,bt[A.minFilter]),A.compareFunction&&(i.texParameteri(D,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(D,i.TEXTURE_COMPARE_FUNC,Lt[A.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===xn||A.minFilter!==Zs&&A.minFilter!==zi||A.type===ni&&t.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||n.get(A).__currentAnisotropy){let W=t.get("EXT_texture_filter_anisotropic");i.texParameterf(D,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,r.getMaxAnisotropy())),n.get(A).__currentAnisotropy=A.anisotropy}}}function ae(D,A){let W=!1;D.__webglInit===void 0&&(D.__webglInit=!0,A.addEventListener("dispose",M));let J=A.source,et=d.get(J);et===void 0&&(et={},d.set(J,et));let q=H(A);if(q!==D.__cacheKey){et[q]===void 0&&(et[q]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,W=!0),et[q].usedTimes++;let Nt=et[D.__cacheKey];Nt!==void 0&&(et[D.__cacheKey].usedTimes--,Nt.usedTimes===0&&E(A)),D.__cacheKey=q,D.__webglTexture=et[q].texture}return W}function Ae(D,A,W){return Math.floor(Math.floor(D/W)/A)}function he(D,A,W,J){let q=D.updateRanges;if(q.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,A.width,A.height,W,J,A.data);else{q.sort((lt,mt)=>lt.start-mt.start);let Nt=0;for(let lt=1;lt<q.length;lt++){let mt=q[Nt],It=q[lt],Pt=mt.start+mt.count,xt=Ae(It.start,A.width,4),Jt=Ae(mt.start,A.width,4);It.start<=Pt+1&&xt===Jt&&Ae(It.start+It.count-1,A.width,4)===xt?mt.count=Math.max(mt.count,It.start+It.count-mt.start):(++Nt,q[Nt]=It)}q.length=Nt+1;let it=i.getParameter(i.UNPACK_ROW_LENGTH),St=i.getParameter(i.UNPACK_SKIP_PIXELS),Et=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,A.width);for(let lt=0,mt=q.length;lt<mt;lt++){let It=q[lt],Pt=Math.floor(It.start/4),xt=Math.ceil(It.count/4),Jt=Pt%A.width,O=Math.floor(Pt/A.width),ct=xt,dt=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Jt),i.pixelStorei(i.UNPACK_SKIP_ROWS,O),e.texSubImage2D(i.TEXTURE_2D,0,Jt,O,ct,dt,W,J,A.data)}D.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,it),i.pixelStorei(i.UNPACK_SKIP_PIXELS,St),i.pixelStorei(i.UNPACK_SKIP_ROWS,Et)}}function Z(D,A,W){let J=i.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(J=i.TEXTURE_2D_ARRAY),A.isData3DTexture&&(J=i.TEXTURE_3D);let et=ae(D,A),q=A.source;e.bindTexture(J,D.__webglTexture,i.TEXTURE0+W);let Nt=n.get(q);if(q.version!==Nt.__version||et===!0){e.activeTexture(i.TEXTURE0+W);let it=oe.getPrimaries(oe.workingColorSpace),St=A.colorSpace===qn?null:oe.getPrimaries(A.colorSpace),Et=A.colorSpace===qn||it===St?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Et);let lt=v(A.image,!1,r.maxTextureSize);lt=Ie(A,lt);let mt=s.convert(A.format,A.colorSpace),It=s.convert(A.type),Pt=S(A.internalFormat,mt,It,A.colorSpace,A.isVideoTexture);te(J,A);let xt,Jt=A.mipmaps,O=A.isVideoTexture!==!0,ct=Nt.__version===void 0||et===!0,dt=q.dataReady,_t=b(A,lt);if(A.isDepthTexture)Pt=g(A.format===Qr,A.type),ct&&(O?e.texStorage2D(i.TEXTURE_2D,1,Pt,lt.width,lt.height):e.texImage2D(i.TEXTURE_2D,0,Pt,lt.width,lt.height,0,mt,It,null));else if(A.isDataTexture)if(Jt.length>0){O&&ct&&e.texStorage2D(i.TEXTURE_2D,_t,Pt,Jt[0].width,Jt[0].height);for(let at=0,Q=Jt.length;at<Q;at++)xt=Jt[at],O?dt&&e.texSubImage2D(i.TEXTURE_2D,at,0,0,xt.width,xt.height,mt,It,xt.data):e.texImage2D(i.TEXTURE_2D,at,Pt,xt.width,xt.height,0,mt,It,xt.data);A.generateMipmaps=!1}else O?(ct&&e.texStorage2D(i.TEXTURE_2D,_t,Pt,lt.width,lt.height),dt&&he(A,lt,mt,It)):e.texImage2D(i.TEXTURE_2D,0,Pt,lt.width,lt.height,0,mt,It,lt.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){O&&ct&&e.texStorage3D(i.TEXTURE_2D_ARRAY,_t,Pt,Jt[0].width,Jt[0].height,lt.depth);for(let at=0,Q=Jt.length;at<Q;at++)if(xt=Jt[at],A.format!==Hn)if(mt!==null)if(O){if(dt)if(A.layerUpdates.size>0){let Ft=zc(xt.width,xt.height,A.format,A.type);for(let jt of A.layerUpdates){let re=xt.data.subarray(jt*Ft/xt.data.BYTES_PER_ELEMENT,(jt+1)*Ft/xt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,at,0,0,jt,xt.width,xt.height,1,mt,re)}A.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,at,0,0,0,xt.width,xt.height,lt.depth,mt,xt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,at,Pt,xt.width,xt.height,lt.depth,0,xt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else O?dt&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,at,0,0,0,xt.width,xt.height,lt.depth,mt,It,xt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,at,Pt,xt.width,xt.height,lt.depth,0,mt,It,xt.data)}else{O&&ct&&e.texStorage2D(i.TEXTURE_2D,_t,Pt,Jt[0].width,Jt[0].height);for(let at=0,Q=Jt.length;at<Q;at++)xt=Jt[at],A.format!==Hn?mt!==null?O?dt&&e.compressedTexSubImage2D(i.TEXTURE_2D,at,0,0,xt.width,xt.height,mt,xt.data):e.compressedTexImage2D(i.TEXTURE_2D,at,Pt,xt.width,xt.height,0,xt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):O?dt&&e.texSubImage2D(i.TEXTURE_2D,at,0,0,xt.width,xt.height,mt,It,xt.data):e.texImage2D(i.TEXTURE_2D,at,Pt,xt.width,xt.height,0,mt,It,xt.data)}else if(A.isDataArrayTexture)if(O){if(ct&&e.texStorage3D(i.TEXTURE_2D_ARRAY,_t,Pt,lt.width,lt.height,lt.depth),dt)if(A.layerUpdates.size>0){let at=zc(lt.width,lt.height,A.format,A.type);for(let Q of A.layerUpdates){let Ft=lt.data.subarray(Q*at/lt.data.BYTES_PER_ELEMENT,(Q+1)*at/lt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Q,lt.width,lt.height,1,mt,It,Ft)}A.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,lt.width,lt.height,lt.depth,mt,It,lt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Pt,lt.width,lt.height,lt.depth,0,mt,It,lt.data);else if(A.isData3DTexture)O?(ct&&e.texStorage3D(i.TEXTURE_3D,_t,Pt,lt.width,lt.height,lt.depth),dt&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,lt.width,lt.height,lt.depth,mt,It,lt.data)):e.texImage3D(i.TEXTURE_3D,0,Pt,lt.width,lt.height,lt.depth,0,mt,It,lt.data);else if(A.isFramebufferTexture){if(ct)if(O)e.texStorage2D(i.TEXTURE_2D,_t,Pt,lt.width,lt.height);else{let at=lt.width,Q=lt.height;for(let Ft=0;Ft<_t;Ft++)e.texImage2D(i.TEXTURE_2D,Ft,Pt,at,Q,0,mt,It,null),at>>=1,Q>>=1}}else if(Jt.length>0){if(O&&ct){let at=Pe(Jt[0]);e.texStorage2D(i.TEXTURE_2D,_t,Pt,at.width,at.height)}for(let at=0,Q=Jt.length;at<Q;at++)xt=Jt[at],O?dt&&e.texSubImage2D(i.TEXTURE_2D,at,0,0,mt,It,xt):e.texImage2D(i.TEXTURE_2D,at,Pt,mt,It,xt);A.generateMipmaps=!1}else if(O){if(ct){let at=Pe(lt);e.texStorage2D(i.TEXTURE_2D,_t,Pt,at.width,at.height)}dt&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,mt,It,lt)}else e.texImage2D(i.TEXTURE_2D,0,Pt,mt,It,lt);m(A)&&f(J),Nt.__version=q.version,A.onUpdate&&A.onUpdate(A)}D.__version=A.version}function ot(D,A,W){if(A.image.length!==6)return;let J=ae(D,A),et=A.source;e.bindTexture(i.TEXTURE_CUBE_MAP,D.__webglTexture,i.TEXTURE0+W);let q=n.get(et);if(et.version!==q.__version||J===!0){e.activeTexture(i.TEXTURE0+W);let Nt=oe.getPrimaries(oe.workingColorSpace),it=A.colorSpace===qn?null:oe.getPrimaries(A.colorSpace),St=A.colorSpace===qn||Nt===it?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,St);let Et=A.isCompressedTexture||A.image[0].isCompressedTexture,lt=A.image[0]&&A.image[0].isDataTexture,mt=[];for(let Q=0;Q<6;Q++)!Et&&!lt?mt[Q]=v(A.image[Q],!0,r.maxCubemapSize):mt[Q]=lt?A.image[Q].image:A.image[Q],mt[Q]=Ie(A,mt[Q]);let It=mt[0],Pt=s.convert(A.format,A.colorSpace),xt=s.convert(A.type),Jt=S(A.internalFormat,Pt,xt,A.colorSpace),O=A.isVideoTexture!==!0,ct=q.__version===void 0||J===!0,dt=et.dataReady,_t=b(A,It);te(i.TEXTURE_CUBE_MAP,A);let at;if(Et){O&&ct&&e.texStorage2D(i.TEXTURE_CUBE_MAP,_t,Jt,It.width,It.height);for(let Q=0;Q<6;Q++){at=mt[Q].mipmaps;for(let Ft=0;Ft<at.length;Ft++){let jt=at[Ft];A.format!==Hn?Pt!==null?O?dt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Ft,0,0,jt.width,jt.height,Pt,jt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Ft,Jt,jt.width,jt.height,0,jt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):O?dt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Ft,0,0,jt.width,jt.height,Pt,xt,jt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Ft,Jt,jt.width,jt.height,0,Pt,xt,jt.data)}}}else{if(at=A.mipmaps,O&&ct){at.length>0&&_t++;let Q=Pe(mt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,_t,Jt,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(lt){O?dt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,mt[Q].width,mt[Q].height,Pt,xt,mt[Q].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Jt,mt[Q].width,mt[Q].height,0,Pt,xt,mt[Q].data);for(let Ft=0;Ft<at.length;Ft++){let re=at[Ft].image[Q].image;O?dt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Ft+1,0,0,re.width,re.height,Pt,xt,re.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Ft+1,Jt,re.width,re.height,0,Pt,xt,re.data)}}else{O?dt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Pt,xt,mt[Q]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Jt,Pt,xt,mt[Q]);for(let Ft=0;Ft<at.length;Ft++){let jt=at[Ft];O?dt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Ft+1,0,0,Pt,xt,jt.image[Q]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Ft+1,Jt,Pt,xt,jt.image[Q])}}}m(A)&&f(i.TEXTURE_CUBE_MAP),q.__version=et.version,A.onUpdate&&A.onUpdate(A)}D.__version=A.version}function Tt(D,A,W,J,et,q){let Nt=s.convert(W.format,W.colorSpace),it=s.convert(W.type),St=S(W.internalFormat,Nt,it,W.colorSpace),Et=n.get(A),lt=n.get(W);if(lt.__renderTarget=A,!Et.__hasExternalTextures){let mt=Math.max(1,A.width>>q),It=Math.max(1,A.height>>q);et===i.TEXTURE_3D||et===i.TEXTURE_2D_ARRAY?e.texImage3D(et,q,St,mt,It,A.depth,0,Nt,it,null):e.texImage2D(et,q,St,mt,It,0,Nt,it,null)}e.bindFramebuffer(i.FRAMEBUFFER,D),Ct(A)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,J,et,lt.__webglTexture,0,le(A)):(et===i.TEXTURE_2D||et>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&et<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,J,et,lt.__webglTexture,q),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Vt(D,A,W){if(i.bindRenderbuffer(i.RENDERBUFFER,D),A.depthBuffer){let J=A.depthTexture,et=J&&J.isDepthTexture?J.type:null,q=g(A.stencilBuffer,et),Nt=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,it=le(A);Ct(A)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,it,q,A.width,A.height):W?i.renderbufferStorageMultisample(i.RENDERBUFFER,it,q,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,q,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Nt,i.RENDERBUFFER,D)}else{let J=A.textures;for(let et=0;et<J.length;et++){let q=J[et],Nt=s.convert(q.format,q.colorSpace),it=s.convert(q.type),St=S(q.internalFormat,Nt,it,q.colorSpace),Et=le(A);W&&Ct(A)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Et,St,A.width,A.height):Ct(A)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Et,St,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,St,A.width,A.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ht(D,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,D),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let J=n.get(A.depthTexture);J.__renderTarget=A,(!J.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),j(A.depthTexture,0);let et=J.__webglTexture,q=le(A);if(A.depthTexture.format===Br)Ct(A)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,et,0,q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,et,0);else if(A.depthTexture.format===Qr)Ct(A)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,et,0,q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,et,0);else throw new Error("Unknown depthTexture format")}function ee(D){let A=n.get(D),W=D.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==D.depthTexture){let J=D.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),J){let et=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,J.removeEventListener("dispose",et)};J.addEventListener("dispose",et),A.__depthDisposeCallback=et}A.__boundDepthTexture=J}if(D.depthTexture&&!A.__autoAllocateDepthBuffer){if(W)throw new Error("target.depthTexture not supported in Cube render targets");let J=D.texture.mipmaps;J&&J.length>0?Ht(A.__webglFramebuffer[0],D):Ht(A.__webglFramebuffer,D)}else if(W){A.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(e.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer[J]),A.__webglDepthbuffer[J]===void 0)A.__webglDepthbuffer[J]=i.createRenderbuffer(),Vt(A.__webglDepthbuffer[J],D,!1);else{let et=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,q=A.__webglDepthbuffer[J];i.bindRenderbuffer(i.RENDERBUFFER,q),i.framebufferRenderbuffer(i.FRAMEBUFFER,et,i.RENDERBUFFER,q)}}else{let J=D.texture.mipmaps;if(J&&J.length>0?e.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=i.createRenderbuffer(),Vt(A.__webglDepthbuffer,D,!1);else{let et=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,q=A.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,q),i.framebufferRenderbuffer(i.FRAMEBUFFER,et,i.RENDERBUFFER,q)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Xe(D,A,W){let J=n.get(D);A!==void 0&&Tt(J.__webglFramebuffer,D,D.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),W!==void 0&&ee(D)}function N(D){let A=D.texture,W=n.get(D),J=n.get(A);D.addEventListener("dispose",_);let et=D.textures,q=D.isWebGLCubeRenderTarget===!0,Nt=et.length>1;if(Nt||(J.__webglTexture===void 0&&(J.__webglTexture=i.createTexture()),J.__version=A.version,o.memory.textures++),q){W.__webglFramebuffer=[];for(let it=0;it<6;it++)if(A.mipmaps&&A.mipmaps.length>0){W.__webglFramebuffer[it]=[];for(let St=0;St<A.mipmaps.length;St++)W.__webglFramebuffer[it][St]=i.createFramebuffer()}else W.__webglFramebuffer[it]=i.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){W.__webglFramebuffer=[];for(let it=0;it<A.mipmaps.length;it++)W.__webglFramebuffer[it]=i.createFramebuffer()}else W.__webglFramebuffer=i.createFramebuffer();if(Nt)for(let it=0,St=et.length;it<St;it++){let Et=n.get(et[it]);Et.__webglTexture===void 0&&(Et.__webglTexture=i.createTexture(),o.memory.textures++)}if(D.samples>0&&Ct(D)===!1){W.__webglMultisampledFramebuffer=i.createFramebuffer(),W.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let it=0;it<et.length;it++){let St=et[it];W.__webglColorRenderbuffer[it]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,W.__webglColorRenderbuffer[it]);let Et=s.convert(St.format,St.colorSpace),lt=s.convert(St.type),mt=S(St.internalFormat,Et,lt,St.colorSpace,D.isXRRenderTarget===!0),It=le(D);i.renderbufferStorageMultisample(i.RENDERBUFFER,It,mt,D.width,D.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+it,i.RENDERBUFFER,W.__webglColorRenderbuffer[it])}i.bindRenderbuffer(i.RENDERBUFFER,null),D.depthBuffer&&(W.__webglDepthRenderbuffer=i.createRenderbuffer(),Vt(W.__webglDepthRenderbuffer,D,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(q){e.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture),te(i.TEXTURE_CUBE_MAP,A);for(let it=0;it<6;it++)if(A.mipmaps&&A.mipmaps.length>0)for(let St=0;St<A.mipmaps.length;St++)Tt(W.__webglFramebuffer[it][St],D,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+it,St);else Tt(W.__webglFramebuffer[it],D,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0);m(A)&&f(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Nt){for(let it=0,St=et.length;it<St;it++){let Et=et[it],lt=n.get(Et),mt=i.TEXTURE_2D;(D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(mt=D.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(mt,lt.__webglTexture),te(mt,Et),Tt(W.__webglFramebuffer,D,Et,i.COLOR_ATTACHMENT0+it,mt,0),m(Et)&&f(mt)}e.unbindTexture()}else{let it=i.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(it=D.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(it,J.__webglTexture),te(it,A),A.mipmaps&&A.mipmaps.length>0)for(let St=0;St<A.mipmaps.length;St++)Tt(W.__webglFramebuffer[St],D,A,i.COLOR_ATTACHMENT0,it,St);else Tt(W.__webglFramebuffer,D,A,i.COLOR_ATTACHMENT0,it,0);m(A)&&f(it),e.unbindTexture()}D.depthBuffer&&ee(D)}function Te(D){let A=D.textures;for(let W=0,J=A.length;W<J;W++){let et=A[W];if(m(et)){let q=y(D),Nt=n.get(et).__webglTexture;e.bindTexture(q,Nt),f(q),e.unbindTexture()}}}let qt=[],Wt=[];function Rt(D){if(D.samples>0){if(Ct(D)===!1){let A=D.textures,W=D.width,J=D.height,et=i.COLOR_BUFFER_BIT,q=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Nt=n.get(D),it=A.length>1;if(it)for(let Et=0;Et<A.length;Et++)e.bindFramebuffer(i.FRAMEBUFFER,Nt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Et,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Nt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Et,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Nt.__webglMultisampledFramebuffer);let St=D.texture.mipmaps;St&&St.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Nt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Nt.__webglFramebuffer);for(let Et=0;Et<A.length;Et++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(et|=i.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(et|=i.STENCIL_BUFFER_BIT)),it){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Nt.__webglColorRenderbuffer[Et]);let lt=n.get(A[Et]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,lt,0)}i.blitFramebuffer(0,0,W,J,0,0,W,J,et,i.NEAREST),l===!0&&(qt.length=0,Wt.length=0,qt.push(i.COLOR_ATTACHMENT0+Et),D.depthBuffer&&D.resolveDepthBuffer===!1&&(qt.push(q),Wt.push(q),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Wt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,qt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),it)for(let Et=0;Et<A.length;Et++){e.bindFramebuffer(i.FRAMEBUFFER,Nt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Et,i.RENDERBUFFER,Nt.__webglColorRenderbuffer[Et]);let lt=n.get(A[Et]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Nt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Et,i.TEXTURE_2D,lt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Nt.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&l){let A=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[A])}}}function le(D){return Math.min(r.maxSamples,D.samples)}function Ct(D){let A=n.get(D);return D.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function Xt(D){let A=o.render.frame;u.get(D)!==A&&(u.set(D,A),D.update())}function Ie(D,A){let W=D.colorSpace,J=D.format,et=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||W!==ir&&W!==qn&&(oe.getTransfer(W)===me?(J!==Hn||et!==ei)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",W)),A}function Pe(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(c.width=D.naturalWidth||D.width,c.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(c.width=D.displayWidth,c.height=D.displayHeight):(c.width=D.width,c.height=D.height),c}this.allocateTextureUnit=B,this.resetTextureUnits=U,this.setTexture2D=j,this.setTexture2DArray=k,this.setTexture3D=tt,this.setTextureCube=K,this.rebindTextures=Xe,this.setupRenderTarget=N,this.updateRenderTargetMipmap=Te,this.updateMultisampleRenderTarget=Rt,this.setupDepthRenderbuffer=ee,this.setupFrameBufferTexture=Tt,this.useMultisampledRTT=Ct}function yx(i,t){function e(n,r=qn){let s,o=oe.getTransfer(r);if(n===ei)return i.UNSIGNED_BYTE;if(n===Da)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ua)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Tc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Rc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===wc)return i.BYTE;if(n===Ac)return i.SHORT;if(n===Yr)return i.UNSIGNED_SHORT;if(n===Fa)return i.INT;if(n===ki)return i.UNSIGNED_INT;if(n===ni)return i.FLOAT;if(n===On)return i.HALF_FLOAT;if(n===Cc)return i.ALPHA;if(n===Ic)return i.RGB;if(n===Hn)return i.RGBA;if(n===Br)return i.DEPTH_COMPONENT;if(n===Qr)return i.DEPTH_STENCIL;if(n===Pc)return i.RED;if(n===La)return i.RED_INTEGER;if(n===Fc)return i.RG;if(n===Na)return i.RG_INTEGER;if(n===Ba)return i.RGBA_INTEGER;if(n===Qs||n===$s||n===to||n===eo)if(o===me)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Qs)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===$s)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===to)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===eo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Qs)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===$s)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===to)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===eo)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Oa||n===Ha||n===za||n===ka)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Oa)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ha)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===za)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ka)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ga||n===Va||n===Wa)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Ga||n===Va)return o===me?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Wa)return o===me?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Xa||n===ja||n===Ka||n===qa||n===Ja||n===Ya||n===Za||n===Qa||n===$a||n===tl||n===el||n===nl||n===il||n===rl)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Xa)return o===me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ja)return o===me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ka)return o===me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===qa)return o===me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ja)return o===me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ya)return o===me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Za)return o===me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Qa)return o===me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===$a)return o===me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===tl)return o===me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===el)return o===me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===nl)return o===me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===il)return o===me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===rl)return o===me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===sl||n===ol||n===al)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===sl)return o===me?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ol)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===al)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ll||n===cl||n===ul||n===hl)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===ll)return s.COMPRESSED_RED_RGTC1_EXT;if(n===cl)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ul)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===hl)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Zr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var Mx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Sx=`
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

}`,$c=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Bs(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new ve({vertexShader:Mx,fragmentShader:Sx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new zt(new an(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},tu=class extends vi{constructor(t,e){super();let n=this,r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,d=null,p=null,x=null,v=typeof XRWebGLBinding<"u",m=new $c,f={},y=e.getContextAttributes(),S=null,g=null,b=[],M=[],_=new st,R=null,E=new qe;E.viewport=new Ce;let w=new qe;w.viewport=new Ce;let C=[E,w],U=new ma,B=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let ot=b[Z];return ot===void 0&&(ot=new Gr,b[Z]=ot),ot.getTargetRaySpace()},this.getControllerGrip=function(Z){let ot=b[Z];return ot===void 0&&(ot=new Gr,b[Z]=ot),ot.getGripSpace()},this.getHand=function(Z){let ot=b[Z];return ot===void 0&&(ot=new Gr,b[Z]=ot),ot.getHandSpace()};function j(Z){let ot=M.indexOf(Z.inputSource);if(ot===-1)return;let Tt=b[ot];Tt!==void 0&&(Tt.update(Z.inputSource,Z.frame,c||o),Tt.dispatchEvent({type:Z.type,data:Z.inputSource}))}function k(){r.removeEventListener("select",j),r.removeEventListener("selectstart",j),r.removeEventListener("selectend",j),r.removeEventListener("squeeze",j),r.removeEventListener("squeezestart",j),r.removeEventListener("squeezeend",j),r.removeEventListener("end",k),r.removeEventListener("inputsourceschange",tt);for(let Z=0;Z<b.length;Z++){let ot=M[Z];ot!==null&&(M[Z]=null,b[Z].disconnect(ot))}B=null,H=null,m.reset();for(let Z in f)delete f[Z];t.setRenderTarget(S),p=null,d=null,h=null,r=null,g=null,he.stop(),n.isPresenting=!1,t.setPixelRatio(R),t.setSize(_.width,_.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){s=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){a=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return h===null&&v&&(h=new XRWebGLBinding(r,e)),h},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function(Z){if(r=Z,r!==null){if(S=t.getRenderTarget(),r.addEventListener("select",j),r.addEventListener("selectstart",j),r.addEventListener("selectend",j),r.addEventListener("squeeze",j),r.addEventListener("squeezestart",j),r.addEventListener("squeezeend",j),r.addEventListener("end",k),r.addEventListener("inputsourceschange",tt),y.xrCompatible!==!0&&await e.makeXRCompatible(),R=t.getPixelRatio(),t.getSize(_),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let Tt=null,Vt=null,Ht=null;y.depth&&(Ht=y.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Tt=y.stencil?Qr:Br,Vt=y.stencil?Zr:ki);let ee={colorFormat:e.RGBA8,depthFormat:Ht,scaleFactor:s};h=this.getBinding(),d=h.createProjectionLayer(ee),r.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),g=new Je(d.textureWidth,d.textureHeight,{format:Hn,type:ei,depthTexture:new Ns(d.textureWidth,d.textureHeight,Vt,void 0,void 0,void 0,void 0,void 0,void 0,Tt),stencilBuffer:y.stencil,colorSpace:t.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let Tt={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,e,Tt),r.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),g=new Je(p.framebufferWidth,p.framebufferHeight,{format:Hn,type:ei,colorSpace:t.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}g.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),he.setContext(r),he.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function tt(Z){for(let ot=0;ot<Z.removed.length;ot++){let Tt=Z.removed[ot],Vt=M.indexOf(Tt);Vt>=0&&(M[Vt]=null,b[Vt].disconnect(Tt))}for(let ot=0;ot<Z.added.length;ot++){let Tt=Z.added[ot],Vt=M.indexOf(Tt);if(Vt===-1){for(let ee=0;ee<b.length;ee++)if(ee>=M.length){M.push(Tt),Vt=ee;break}else if(M[ee]===null){M[ee]=Tt,Vt=ee;break}if(Vt===-1)break}let Ht=b[Vt];Ht&&Ht.connect(Tt)}}let K=new L,ut=new L;function bt(Z,ot,Tt){K.setFromMatrixPosition(ot.matrixWorld),ut.setFromMatrixPosition(Tt.matrixWorld);let Vt=K.distanceTo(ut),Ht=ot.projectionMatrix.elements,ee=Tt.projectionMatrix.elements,Xe=Ht[14]/(Ht[10]-1),N=Ht[14]/(Ht[10]+1),Te=(Ht[9]+1)/Ht[5],qt=(Ht[9]-1)/Ht[5],Wt=(Ht[8]-1)/Ht[0],Rt=(ee[8]+1)/ee[0],le=Xe*Wt,Ct=Xe*Rt,Xt=Vt/(-Wt+Rt),Ie=Xt*-Wt;if(ot.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(Ie),Z.translateZ(Xt),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),Ht[10]===-1)Z.projectionMatrix.copy(ot.projectionMatrix),Z.projectionMatrixInverse.copy(ot.projectionMatrixInverse);else{let Pe=Xe+Xt,D=N+Xt,A=le-Ie,W=Ct+(Vt-Ie),J=Te*N/D*Pe,et=qt*N/D*Pe;Z.projectionMatrix.makePerspective(A,W,J,et,Pe,D),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function Lt(Z,ot){ot===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(ot.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(r===null)return;let ot=Z.near,Tt=Z.far;m.texture!==null&&(m.depthNear>0&&(ot=m.depthNear),m.depthFar>0&&(Tt=m.depthFar)),U.near=w.near=E.near=ot,U.far=w.far=E.far=Tt,(B!==U.near||H!==U.far)&&(r.updateRenderState({depthNear:U.near,depthFar:U.far}),B=U.near,H=U.far),U.layers.mask=Z.layers.mask|6,E.layers.mask=U.layers.mask&3,w.layers.mask=U.layers.mask&5;let Vt=Z.parent,Ht=U.cameras;Lt(U,Vt);for(let ee=0;ee<Ht.length;ee++)Lt(Ht[ee],Vt);Ht.length===2?bt(U,E,w):U.projectionMatrix.copy(E.projectionMatrix),te(Z,U,Vt)};function te(Z,ot,Tt){Tt===null?Z.matrix.copy(ot.matrixWorld):(Z.matrix.copy(Tt.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(ot.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(ot.projectionMatrix),Z.projectionMatrixInverse.copy(ot.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Wo*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return U},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(Z){l=Z,d!==null&&(d.fixedFoveation=Z),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Z)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(U)},this.getCameraTexture=function(Z){return f[Z]};let ae=null;function Ae(Z,ot){if(u=ot.getViewerPose(c||o),x=ot,u!==null){let Tt=u.views;p!==null&&(t.setRenderTargetFramebuffer(g,p.framebuffer),t.setRenderTarget(g));let Vt=!1;Tt.length!==U.cameras.length&&(U.cameras.length=0,Vt=!0);for(let N=0;N<Tt.length;N++){let Te=Tt[N],qt=null;if(p!==null)qt=p.getViewport(Te);else{let Rt=h.getViewSubImage(d,Te);qt=Rt.viewport,N===0&&(t.setRenderTargetTextures(g,Rt.colorTexture,Rt.depthStencilTexture),t.setRenderTarget(g))}let Wt=C[N];Wt===void 0&&(Wt=new qe,Wt.layers.enable(N),Wt.viewport=new Ce,C[N]=Wt),Wt.matrix.fromArray(Te.transform.matrix),Wt.matrix.decompose(Wt.position,Wt.quaternion,Wt.scale),Wt.projectionMatrix.fromArray(Te.projectionMatrix),Wt.projectionMatrixInverse.copy(Wt.projectionMatrix).invert(),Wt.viewport.set(qt.x,qt.y,qt.width,qt.height),N===0&&(U.matrix.copy(Wt.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale)),Vt===!0&&U.cameras.push(Wt)}let Ht=r.enabledFeatures;if(Ht&&Ht.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&v){h=n.getBinding();let N=h.getDepthInformation(Tt[0]);N&&N.isValid&&N.texture&&m.init(N,r.renderState)}if(Ht&&Ht.includes("camera-access")&&v){t.state.unbindTexture(),h=n.getBinding();for(let N=0;N<Tt.length;N++){let Te=Tt[N].camera;if(Te){let qt=f[Te];qt||(qt=new Bs,f[Te]=qt);let Wt=h.getCameraImage(Te);qt.sourceTexture=Wt}}}}for(let Tt=0;Tt<b.length;Tt++){let Vt=M[Tt],Ht=b[Tt];Vt!==null&&Ht!==void 0&&Ht.update(Vt,ot,c||o)}ae&&ae(Z,ot),ot.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ot}),x=null}let he=new tf;he.setAnimationLoop(Ae),this.setAnimationLoop=function(Z){ae=Z},this.dispose=function(){}}},pr=new Zn,bx=new Se;function Ex(i,t){function e(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,Nc(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function r(m,f,y,S,g){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(m,f):f.isMeshToonMaterial?(s(m,f),h(m,f)):f.isMeshPhongMaterial?(s(m,f),u(m,f)):f.isMeshStandardMaterial?(s(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,g)):f.isMeshMatcapMaterial?(s(m,f),x(m,f)):f.isMeshDepthMaterial?s(m,f):f.isMeshDistanceMaterial?(s(m,f),v(m,f)):f.isMeshNormalMaterial?s(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?l(m,f,y,S):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,e(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===nn&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,e(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===nn&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,e(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,e(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);let y=t.get(f),S=y.envMap,g=y.envMapRotation;S&&(m.envMap.value=S,pr.copy(g),pr.x*=-1,pr.y*=-1,pr.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(pr.y*=-1,pr.z*=-1),m.envMapRotation.value.setFromMatrix4(bx.makeRotationFromEuler(pr)),m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,y,S){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*y,m.scale.value=S*.5,f.map&&(m.map.value=f.map,e(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function h(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,y){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===nn&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,m.specularIntensityMapTransform))}function x(m,f){f.matcap&&(m.matcap.value=f.matcap)}function v(m,f){let y=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function _x(i,t,e,n){let r={},s={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,S){let g=S.program;n.uniformBlockBinding(y,g)}function c(y,S){let g=r[y.id];g===void 0&&(x(y),g=u(y),r[y.id]=g,y.addEventListener("dispose",m));let b=S.program;n.updateUBOMapping(y,b);let M=t.render.frame;s[y.id]!==M&&(d(y),s[y.id]=M)}function u(y){let S=h();y.__bindingPointIndex=S;let g=i.createBuffer(),b=y.__size,M=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,g),i.bufferData(i.UNIFORM_BUFFER,b,M),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,g),g}function h(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){let S=r[y.id],g=y.uniforms,b=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let M=0,_=g.length;M<_;M++){let R=Array.isArray(g[M])?g[M]:[g[M]];for(let E=0,w=R.length;E<w;E++){let C=R[E];if(p(C,M,E,b)===!0){let U=C.__offset,B=Array.isArray(C.value)?C.value:[C.value],H=0;for(let j=0;j<B.length;j++){let k=B[j],tt=v(k);typeof k=="number"||typeof k=="boolean"?(C.__data[0]=k,i.bufferSubData(i.UNIFORM_BUFFER,U+H,C.__data)):k.isMatrix3?(C.__data[0]=k.elements[0],C.__data[1]=k.elements[1],C.__data[2]=k.elements[2],C.__data[3]=0,C.__data[4]=k.elements[3],C.__data[5]=k.elements[4],C.__data[6]=k.elements[5],C.__data[7]=0,C.__data[8]=k.elements[6],C.__data[9]=k.elements[7],C.__data[10]=k.elements[8],C.__data[11]=0):(k.toArray(C.__data,H),H+=tt.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,U,C.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(y,S,g,b){let M=y.value,_=S+"_"+g;if(b[_]===void 0)return typeof M=="number"||typeof M=="boolean"?b[_]=M:b[_]=M.clone(),!0;{let R=b[_];if(typeof M=="number"||typeof M=="boolean"){if(R!==M)return b[_]=M,!0}else if(R.equals(M)===!1)return R.copy(M),!0}return!1}function x(y){let S=y.uniforms,g=0,b=16;for(let _=0,R=S.length;_<R;_++){let E=Array.isArray(S[_])?S[_]:[S[_]];for(let w=0,C=E.length;w<C;w++){let U=E[w],B=Array.isArray(U.value)?U.value:[U.value];for(let H=0,j=B.length;H<j;H++){let k=B[H],tt=v(k),K=g%b,ut=K%tt.boundary,bt=K+ut;g+=ut,bt!==0&&b-bt<tt.storage&&(g+=b-bt),U.__data=new Float32Array(tt.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=g,g+=tt.storage}}}let M=g%b;return M>0&&(g+=b-M),y.__size=g,y.__cache={},this}function v(y){let S={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(S.boundary=4,S.storage=4):y.isVector2?(S.boundary=8,S.storage=8):y.isVector3||y.isColor?(S.boundary=16,S.storage=12):y.isVector4?(S.boundary=16,S.storage=16):y.isMatrix3?(S.boundary=48,S.storage=48):y.isMatrix4?(S.boundary=64,S.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),S}function m(y){let S=y.target;S.removeEventListener("dispose",m);let g=o.indexOf(S.__bindingPointIndex);o.splice(g,1),i.deleteBuffer(r[S.id]),delete r[S.id],delete s[S.id]}function f(){for(let y in r)i.deleteBuffer(r[y]);o=[],r={},s={}}return{bind:l,update:c,dispose:f}}var gl=class{constructor(t={}){let{canvas:e=bh(),context:n=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;let x=new Uint32Array(4),v=new Int32Array(4),m=null,f=null,y=[],S=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Mi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let g=this,b=!1;this._outputColorSpace=Ke;let M=0,_=0,R=null,E=-1,w=null,C=new Ce,U=new Ce,B=null,H=new yt(0),j=0,k=e.width,tt=e.height,K=1,ut=null,bt=null,Lt=new Ce(0,0,k,tt),te=new Ce(0,0,k,tt),ae=!1,Ae=new Ls,he=!1,Z=!1,ot=new Se,Tt=new L,Vt=new Ce,Ht={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ee=!1;function Xe(){return R===null?K:1}let N=n;function Te(T,z){return e.getContext(T,z)}try{let T={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"180"}`),e.addEventListener("webglcontextlost",dt,!1),e.addEventListener("webglcontextrestored",_t,!1),e.addEventListener("webglcontextcreationerror",at,!1),N===null){let z="webgl2";if(N=Te(z,T),N===null)throw Te(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let qt,Wt,Rt,le,Ct,Xt,Ie,Pe,D,A,W,J,et,q,Nt,it,St,Et,lt,mt,It,Pt,xt,Jt;function O(){qt=new G0(N),qt.init(),Pt=new yx(N,qt),Wt=new L0(N,qt,t,Pt),Rt=new xx(N,qt),Wt.reversedDepthBuffer&&d&&Rt.buffers.depth.setReversed(!0),le=new X0(N),Ct=new rx,Xt=new vx(N,qt,Rt,Ct,Wt,Pt,le),Ie=new B0(g),Pe=new k0(g),D=new Zd(N),xt=new D0(N,D),A=new V0(N,D,le,xt),W=new K0(N,A,D,le),lt=new j0(N,Wt,Xt),it=new N0(Ct),J=new ix(g,Ie,Pe,qt,Wt,xt,it),et=new Ex(g,Ct),q=new ox,Nt=new fx(qt),Et=new F0(g,Ie,Pe,Rt,W,p,l),St=new mx(g,W,Wt),Jt=new _x(N,le,Wt,Rt),mt=new U0(N,qt,le),It=new W0(N,qt,le),le.programs=J.programs,g.capabilities=Wt,g.extensions=qt,g.properties=Ct,g.renderLists=q,g.shadowMap=St,g.state=Rt,g.info=le}O();let ct=new tu(g,N);this.xr=ct,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){let T=qt.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=qt.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(T){T!==void 0&&(K=T,this.setSize(k,tt,!1))},this.getSize=function(T){return T.set(k,tt)},this.setSize=function(T,z,I=!0){if(ct.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}k=T,tt=z,e.width=Math.floor(T*K),e.height=Math.floor(z*K),I===!0&&(e.style.width=T+"px",e.style.height=z+"px"),this.setViewport(0,0,T,z)},this.getDrawingBufferSize=function(T){return T.set(k*K,tt*K).floor()},this.setDrawingBufferSize=function(T,z,I){k=T,tt=z,K=I,e.width=Math.floor(T*I),e.height=Math.floor(z*I),this.setViewport(0,0,T,z)},this.getCurrentViewport=function(T){return T.copy(C)},this.getViewport=function(T){return T.copy(Lt)},this.setViewport=function(T,z,I,F){T.isVector4?Lt.set(T.x,T.y,T.z,T.w):Lt.set(T,z,I,F),Rt.viewport(C.copy(Lt).multiplyScalar(K).round())},this.getScissor=function(T){return T.copy(te)},this.setScissor=function(T,z,I,F){T.isVector4?te.set(T.x,T.y,T.z,T.w):te.set(T,z,I,F),Rt.scissor(U.copy(te).multiplyScalar(K).round())},this.getScissorTest=function(){return ae},this.setScissorTest=function(T){Rt.setScissorTest(ae=T)},this.setOpaqueSort=function(T){ut=T},this.setTransparentSort=function(T){bt=T},this.getClearColor=function(T){return T.copy(Et.getClearColor())},this.setClearColor=function(){Et.setClearColor(...arguments)},this.getClearAlpha=function(){return Et.getClearAlpha()},this.setClearAlpha=function(){Et.setClearAlpha(...arguments)},this.clear=function(T=!0,z=!0,I=!0){let F=0;if(T){let P=!1;if(R!==null){let V=R.texture.format;P=V===Ba||V===Na||V===La}if(P){let V=R.texture.type,X=V===ei||V===ki||V===Yr||V===Zr||V===Da||V===Ua,Y=Et.getClearColor(),nt=Et.getClearAlpha(),gt=Y.r,ft=Y.g,rt=Y.b;X?(x[0]=gt,x[1]=ft,x[2]=rt,x[3]=nt,N.clearBufferuiv(N.COLOR,0,x)):(v[0]=gt,v[1]=ft,v[2]=rt,v[3]=nt,N.clearBufferiv(N.COLOR,0,v))}else F|=N.COLOR_BUFFER_BIT}z&&(F|=N.DEPTH_BUFFER_BIT),I&&(F|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(F)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",dt,!1),e.removeEventListener("webglcontextrestored",_t,!1),e.removeEventListener("webglcontextcreationerror",at,!1),Et.dispose(),q.dispose(),Nt.dispose(),Ct.dispose(),Ie.dispose(),Pe.dispose(),W.dispose(),xt.dispose(),Jt.dispose(),J.dispose(),ct.dispose(),ct.removeEventListener("sessionstart",pn),ct.removeEventListener("sessionend",us),kn.stop()};function dt(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function _t(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;let T=le.autoReset,z=St.enabled,I=St.autoUpdate,F=St.needsUpdate,P=St.type;O(),le.autoReset=T,St.enabled=z,St.autoUpdate=I,St.needsUpdate=F,St.type=P}function at(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Q(T){let z=T.target;z.removeEventListener("dispose",Q),Ft(z)}function Ft(T){jt(T),Ct.remove(T)}function jt(T){let z=Ct.get(T).programs;z!==void 0&&(z.forEach(function(I){J.releaseProgram(I)}),T.isShaderMaterial&&J.releaseShaderCache(T))}this.renderBufferDirect=function(T,z,I,F,P,V){z===null&&(z=Ht);let X=P.isMesh&&P.matrixWorld.determinant()<0,Y=Ai(T,z,I,F,P);Rt.setMaterial(F,X);let nt=I.index,gt=1;if(F.wireframe===!0){if(nt=A.getWireframeAttribute(I),nt===void 0)return;gt=2}let ft=I.drawRange,rt=I.attributes.position,Mt=ft.start*gt,Yt=(ft.start+ft.count)*gt;V!==null&&(Mt=Math.max(Mt,V.start*gt),Yt=Math.min(Yt,(V.start+V.count)*gt)),nt!==null?(Mt=Math.max(Mt,0),Yt=Math.min(Yt,nt.count)):rt!=null&&(Mt=Math.max(Mt,0),Yt=Math.min(Yt,rt.count));let Ee=Yt-Mt;if(Ee<0||Ee===1/0)return;xt.setup(P,F,Y,I,nt);let _e,fe=mt;if(nt!==null&&(_e=D.get(nt),fe=It,fe.setIndex(_e)),P.isMesh)F.wireframe===!0?(Rt.setLineWidth(F.wireframeLinewidth*Xe()),fe.setMode(N.LINES)):fe.setMode(N.TRIANGLES);else if(P.isLine){let kt=F.linewidth;kt===void 0&&(kt=1),Rt.setLineWidth(kt*Xe()),P.isLineSegments?fe.setMode(N.LINES):P.isLineLoop?fe.setMode(N.LINE_LOOP):fe.setMode(N.LINE_STRIP)}else P.isPoints?fe.setMode(N.POINTS):P.isSprite&&fe.setMode(N.TRIANGLES);if(P.isBatchedMesh)if(P._multiDrawInstances!==null)Or("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),fe.renderMultiDrawInstances(P._multiDrawStarts,P._multiDrawCounts,P._multiDrawCount,P._multiDrawInstances);else if(qt.get("WEBGL_multi_draw"))fe.renderMultiDraw(P._multiDrawStarts,P._multiDrawCounts,P._multiDrawCount);else{let kt=P._multiDrawStarts,Ue=P._multiDrawCounts,de=P._multiDrawCount,yn=nt?D.get(nt).bytesPerElement:1,vr=Ct.get(F).currentProgram.getUniforms();for(let Mn=0;Mn<de;Mn++)vr.setValue(N,"_gl_DrawID",Mn),fe.render(kt[Mn]/yn,Ue[Mn])}else if(P.isInstancedMesh)fe.renderInstances(Mt,Ee,P.count);else if(I.isInstancedBufferGeometry){let kt=I._maxInstanceCount!==void 0?I._maxInstanceCount:1/0,Ue=Math.min(I.instanceCount,kt);fe.renderInstances(Mt,Ee,Ue)}else fe.render(Mt,Ee)};function re(T,z,I){T.transparent===!0&&T.side===Be&&T.forceSinglePass===!1?(T.side=nn,T.needsUpdate=!0,wi(T,z,I),T.side=En,T.needsUpdate=!0,wi(T,z,I),T.side=Be):wi(T,z,I)}this.compile=function(T,z,I=null){I===null&&(I=T),f=Nt.get(I),f.init(z),S.push(f),I.traverseVisible(function(P){P.isLight&&P.layers.test(z.layers)&&(f.pushLight(P),P.castShadow&&f.pushShadow(P))}),T!==I&&T.traverseVisible(function(P){P.isLight&&P.layers.test(z.layers)&&(f.pushLight(P),P.castShadow&&f.pushShadow(P))}),f.setupLights();let F=new Set;return T.traverse(function(P){if(!(P.isMesh||P.isPoints||P.isLine||P.isSprite))return;let V=P.material;if(V)if(Array.isArray(V))for(let X=0;X<V.length;X++){let Y=V[X];re(Y,I,P),F.add(Y)}else re(V,I,P),F.add(V)}),f=S.pop(),F},this.compileAsync=function(T,z,I=null){let F=this.compile(T,z,I);return new Promise(P=>{function V(){if(F.forEach(function(X){Ct.get(X).currentProgram.isReady()&&F.delete(X)}),F.size===0){P(T);return}setTimeout(V,10)}qt.get("KHR_parallel_shader_compile")!==null?V():setTimeout(V,10)})};let ce=null;function Fn(T){ce&&ce(T)}function pn(){kn.stop()}function us(){kn.start()}let kn=new tf;kn.setAnimationLoop(Fn),typeof self<"u"&&kn.setContext(self),this.setAnimationLoop=function(T){ce=T,ct.setAnimationLoop(T),T===null?kn.stop():kn.start()},ct.addEventListener("sessionstart",pn),ct.addEventListener("sessionend",us),this.render=function(T,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),ct.enabled===!0&&ct.isPresenting===!0&&(ct.cameraAutoUpdate===!0&&ct.updateCamera(z),z=ct.getCamera()),T.isScene===!0&&T.onBeforeRender(g,T,z,R),f=Nt.get(T,S.length),f.init(z),S.push(f),ot.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),Ae.setFromProjectionMatrix(ot,Xn,z.reversedDepth),Z=this.localClippingEnabled,he=it.init(this.clippingPlanes,Z),m=q.get(T,y.length),m.init(),y.push(m),ct.enabled===!0&&ct.isPresenting===!0){let V=g.xr.getDepthSensingMesh();V!==null&&ai(V,z,-1/0,g.sortObjects)}ai(T,z,0,g.sortObjects),m.finish(),g.sortObjects===!0&&m.sort(ut,bt),ee=ct.enabled===!1||ct.isPresenting===!1||ct.hasDepthSensing()===!1,ee&&Et.addToRenderList(m,T),this.info.render.frame++,he===!0&&it.beginShadows();let I=f.state.shadowsArray;St.render(I,T,z),he===!0&&it.endShadows(),this.info.autoReset===!0&&this.info.reset();let F=m.opaque,P=m.transmissive;if(f.setupLights(),z.isArrayCamera){let V=z.cameras;if(P.length>0)for(let X=0,Y=V.length;X<Y;X++){let nt=V[X];ji(F,P,T,nt)}ee&&Et.render(T);for(let X=0,Y=V.length;X<Y;X++){let nt=V[X];_i(m,T,nt,nt.viewport)}}else P.length>0&&ji(F,P,T,z),ee&&Et.render(T),_i(m,T,z);R!==null&&_===0&&(Xt.updateMultisampleRenderTarget(R),Xt.updateRenderTargetMipmap(R)),T.isScene===!0&&T.onAfterRender(g,T,z),xt.resetDefaultState(),E=-1,w=null,S.pop(),S.length>0?(f=S[S.length-1],he===!0&&it.setGlobalState(g.clippingPlanes,f.state.camera)):f=null,y.pop(),y.length>0?m=y[y.length-1]:m=null};function ai(T,z,I,F){if(T.visible===!1)return;if(T.layers.test(z.layers)){if(T.isGroup)I=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(z);else if(T.isLight)f.pushLight(T),T.castShadow&&f.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Ae.intersectsSprite(T)){F&&Vt.setFromMatrixPosition(T.matrixWorld).applyMatrix4(ot);let X=W.update(T),Y=T.material;Y.visible&&m.push(T,X,Y,I,Vt.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||Ae.intersectsObject(T))){let X=W.update(T),Y=T.material;if(F&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Vt.copy(T.boundingSphere.center)):(X.boundingSphere===null&&X.computeBoundingSphere(),Vt.copy(X.boundingSphere.center)),Vt.applyMatrix4(T.matrixWorld).applyMatrix4(ot)),Array.isArray(Y)){let nt=X.groups;for(let gt=0,ft=nt.length;gt<ft;gt++){let rt=nt[gt],Mt=Y[rt.materialIndex];Mt&&Mt.visible&&m.push(T,X,Mt,I,Vt.z,rt)}}else Y.visible&&m.push(T,X,Y,I,Vt.z,null)}}let V=T.children;for(let X=0,Y=V.length;X<Y;X++)ai(V[X],z,I,F)}function _i(T,z,I,F){let P=T.opaque,V=T.transmissive,X=T.transparent;f.setupLightsView(I),he===!0&&it.setGlobalState(g.clippingPlanes,I),F&&Rt.viewport(C.copy(F)),P.length>0&&Jn(P,z,I),V.length>0&&Jn(V,z,I),X.length>0&&Jn(X,z,I),Rt.buffers.depth.setTest(!0),Rt.buffers.depth.setMask(!0),Rt.buffers.color.setMask(!0),Rt.setPolygonOffset(!1)}function ji(T,z,I,F){if((I.isScene===!0?I.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[F.id]===void 0&&(f.state.transmissionRenderTarget[F.id]=new Je(1,1,{generateMipmaps:!0,type:qt.has("EXT_color_buffer_half_float")||qt.has("EXT_color_buffer_float")?On:ei,minFilter:zi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:oe.workingColorSpace}));let V=f.state.transmissionRenderTarget[F.id],X=F.viewport||C;V.setSize(X.z*g.transmissionResolutionScale,X.w*g.transmissionResolutionScale);let Y=g.getRenderTarget(),nt=g.getActiveCubeFace(),gt=g.getActiveMipmapLevel();g.setRenderTarget(V),g.getClearColor(H),j=g.getClearAlpha(),j<1&&g.setClearColor(16777215,.5),g.clear(),ee&&Et.render(I);let ft=g.toneMapping;g.toneMapping=Mi;let rt=F.viewport;if(F.viewport!==void 0&&(F.viewport=void 0),f.setupLightsView(F),he===!0&&it.setGlobalState(g.clippingPlanes,F),Jn(T,I,F),Xt.updateMultisampleRenderTarget(V),Xt.updateRenderTargetMipmap(V),qt.has("WEBGL_multisampled_render_to_texture")===!1){let Mt=!1;for(let Yt=0,Ee=z.length;Yt<Ee;Yt++){let _e=z[Yt],fe=_e.object,kt=_e.geometry,Ue=_e.material,de=_e.group;if(Ue.side===Be&&fe.layers.test(F.layers)){let yn=Ue.side;Ue.side=nn,Ue.needsUpdate=!0,li(fe,I,F,kt,Ue,de),Ue.side=yn,Ue.needsUpdate=!0,Mt=!0}}Mt===!0&&(Xt.updateMultisampleRenderTarget(V),Xt.updateRenderTargetMipmap(V))}g.setRenderTarget(Y,nt,gt),g.setClearColor(H,j),rt!==void 0&&(F.viewport=rt),g.toneMapping=ft}function Jn(T,z,I){let F=z.isScene===!0?z.overrideMaterial:null;for(let P=0,V=T.length;P<V;P++){let X=T[P],Y=X.object,nt=X.geometry,gt=X.group,ft=X.material;ft.allowOverride===!0&&F!==null&&(ft=F),Y.layers.test(I.layers)&&li(Y,z,I,nt,ft,gt)}}function li(T,z,I,F,P,V){T.onBeforeRender(g,z,I,F,P,V),T.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),P.onBeforeRender(g,z,I,F,T,V),P.transparent===!0&&P.side===Be&&P.forceSinglePass===!1?(P.side=nn,P.needsUpdate=!0,g.renderBufferDirect(I,z,F,P,T,V),P.side=En,P.needsUpdate=!0,g.renderBufferDirect(I,z,F,P,T,V),P.side=Be):g.renderBufferDirect(I,z,F,P,T,V),T.onAfterRender(g,z,I,F,P,V)}function wi(T,z,I){z.isScene!==!0&&(z=Ht);let F=Ct.get(T),P=f.state.lights,V=f.state.shadowsArray,X=P.state.version,Y=J.getParameters(T,P.state,V,z,I),nt=J.getProgramCacheKey(Y),gt=F.programs;F.environment=T.isMeshStandardMaterial?z.environment:null,F.fog=z.fog,F.envMap=(T.isMeshStandardMaterial?Pe:Ie).get(T.envMap||F.environment),F.envMapRotation=F.environment!==null&&T.envMap===null?z.environmentRotation:T.envMapRotation,gt===void 0&&(T.addEventListener("dispose",Q),gt=new Map,F.programs=gt);let ft=gt.get(nt);if(ft!==void 0){if(F.currentProgram===ft&&F.lightsStateVersion===X)return hs(T,Y),ft}else Y.uniforms=J.getUniforms(T),T.onBeforeCompile(Y,g),ft=J.acquireProgram(Y,nt),gt.set(nt,ft),F.uniforms=Y.uniforms;let rt=F.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(rt.clippingPlanes=it.uniform),hs(T,Y),F.needsLights=co(T),F.lightsStateVersion=X,F.needsLights&&(rt.ambientLightColor.value=P.state.ambient,rt.lightProbe.value=P.state.probe,rt.directionalLights.value=P.state.directional,rt.directionalLightShadows.value=P.state.directionalShadow,rt.spotLights.value=P.state.spot,rt.spotLightShadows.value=P.state.spotShadow,rt.rectAreaLights.value=P.state.rectArea,rt.ltc_1.value=P.state.rectAreaLTC1,rt.ltc_2.value=P.state.rectAreaLTC2,rt.pointLights.value=P.state.point,rt.pointLightShadows.value=P.state.pointShadow,rt.hemisphereLights.value=P.state.hemi,rt.directionalShadowMap.value=P.state.directionalShadowMap,rt.directionalShadowMatrix.value=P.state.directionalShadowMatrix,rt.spotShadowMap.value=P.state.spotShadowMap,rt.spotLightMatrix.value=P.state.spotLightMatrix,rt.spotLightMap.value=P.state.spotLightMap,rt.pointShadowMap.value=P.state.pointShadowMap,rt.pointShadowMatrix.value=P.state.pointShadowMatrix),F.currentProgram=ft,F.uniformsList=null,ft}function Ki(T){if(T.uniformsList===null){let z=T.currentProgram.getUniforms();T.uniformsList=es.seqWithValue(z.seq,T.uniforms)}return T.uniformsList}function hs(T,z){let I=Ct.get(T);I.outputColorSpace=z.outputColorSpace,I.batching=z.batching,I.batchingColor=z.batchingColor,I.instancing=z.instancing,I.instancingColor=z.instancingColor,I.instancingMorph=z.instancingMorph,I.skinning=z.skinning,I.morphTargets=z.morphTargets,I.morphNormals=z.morphNormals,I.morphColors=z.morphColors,I.morphTargetsCount=z.morphTargetsCount,I.numClippingPlanes=z.numClippingPlanes,I.numIntersection=z.numClipIntersection,I.vertexAlphas=z.vertexAlphas,I.vertexTangents=z.vertexTangents,I.toneMapping=z.toneMapping}function Ai(T,z,I,F,P){z.isScene!==!0&&(z=Ht),Xt.resetTextureUnits();let V=z.fog,X=F.isMeshStandardMaterial?z.environment:null,Y=R===null?g.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:ir,nt=(F.isMeshStandardMaterial?Pe:Ie).get(F.envMap||X),gt=F.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,ft=!!I.attributes.tangent&&(!!F.normalMap||F.anisotropy>0),rt=!!I.morphAttributes.position,Mt=!!I.morphAttributes.normal,Yt=!!I.morphAttributes.color,Ee=Mi;F.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(Ee=g.toneMapping);let _e=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,fe=_e!==void 0?_e.length:0,kt=Ct.get(F),Ue=f.state.lights;if(he===!0&&(Z===!0||T!==w)){let un=T===w&&F.id===E;it.setState(F,T,un)}let de=!1;F.version===kt.__version?(kt.needsLights&&kt.lightsStateVersion!==Ue.state.version||kt.outputColorSpace!==Y||P.isBatchedMesh&&kt.batching===!1||!P.isBatchedMesh&&kt.batching===!0||P.isBatchedMesh&&kt.batchingColor===!0&&P.colorTexture===null||P.isBatchedMesh&&kt.batchingColor===!1&&P.colorTexture!==null||P.isInstancedMesh&&kt.instancing===!1||!P.isInstancedMesh&&kt.instancing===!0||P.isSkinnedMesh&&kt.skinning===!1||!P.isSkinnedMesh&&kt.skinning===!0||P.isInstancedMesh&&kt.instancingColor===!0&&P.instanceColor===null||P.isInstancedMesh&&kt.instancingColor===!1&&P.instanceColor!==null||P.isInstancedMesh&&kt.instancingMorph===!0&&P.morphTexture===null||P.isInstancedMesh&&kt.instancingMorph===!1&&P.morphTexture!==null||kt.envMap!==nt||F.fog===!0&&kt.fog!==V||kt.numClippingPlanes!==void 0&&(kt.numClippingPlanes!==it.numPlanes||kt.numIntersection!==it.numIntersection)||kt.vertexAlphas!==gt||kt.vertexTangents!==ft||kt.morphTargets!==rt||kt.morphNormals!==Mt||kt.morphColors!==Yt||kt.toneMapping!==Ee||kt.morphTargetsCount!==fe)&&(de=!0):(de=!0,kt.__version=F.version);let yn=kt.currentProgram;de===!0&&(yn=wi(F,z,P));let vr=!1,Mn=!1,fs=!1,Le=yn.getUniforms(),Dn=kt.uniforms;if(Rt.useProgram(yn.program)&&(vr=!0,Mn=!0,fs=!0),F.id!==E&&(E=F.id,Mn=!0),vr||w!==T){Rt.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),Le.setValue(N,"projectionMatrix",T.projectionMatrix),Le.setValue(N,"viewMatrix",T.matrixWorldInverse);let mn=Le.map.cameraPosition;mn!==void 0&&mn.setValue(N,Tt.setFromMatrixPosition(T.matrixWorld)),Wt.logarithmicDepthBuffer&&Le.setValue(N,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial)&&Le.setValue(N,"isOrthographic",T.isOrthographicCamera===!0),w!==T&&(w=T,Mn=!0,fs=!0)}if(P.isSkinnedMesh){Le.setOptional(N,P,"bindMatrix"),Le.setOptional(N,P,"bindMatrixInverse");let un=P.skeleton;un&&(un.boneTexture===null&&un.computeBoneTexture(),Le.setValue(N,"boneTexture",un.boneTexture,Xt))}P.isBatchedMesh&&(Le.setOptional(N,P,"batchingTexture"),Le.setValue(N,"batchingTexture",P._matricesTexture,Xt),Le.setOptional(N,P,"batchingIdTexture"),Le.setValue(N,"batchingIdTexture",P._indirectTexture,Xt),Le.setOptional(N,P,"batchingColorTexture"),P._colorsTexture!==null&&Le.setValue(N,"batchingColorTexture",P._colorsTexture,Xt));let Un=I.morphAttributes;if((Un.position!==void 0||Un.normal!==void 0||Un.color!==void 0)&&lt.update(P,I,yn),(Mn||kt.receiveShadow!==P.receiveShadow)&&(kt.receiveShadow=P.receiveShadow,Le.setValue(N,"receiveShadow",P.receiveShadow)),F.isMeshGouraudMaterial&&F.envMap!==null&&(Dn.envMap.value=nt,Dn.flipEnvMap.value=nt.isCubeTexture&&nt.isRenderTargetTexture===!1?-1:1),F.isMeshStandardMaterial&&F.envMap===null&&z.environment!==null&&(Dn.envMapIntensity.value=z.environmentIntensity),Mn&&(Le.setValue(N,"toneMappingExposure",g.toneMappingExposure),kt.needsLights&&lo(Dn,fs),V&&F.fog===!0&&et.refreshFogUniforms(Dn,V),et.refreshMaterialUniforms(Dn,F,K,tt,f.state.transmissionRenderTarget[T.id]),es.upload(N,Ki(kt),Dn,Xt)),F.isShaderMaterial&&F.uniformsNeedUpdate===!0&&(es.upload(N,Ki(kt),Dn,Xt),F.uniformsNeedUpdate=!1),F.isSpriteMaterial&&Le.setValue(N,"center",P.center),Le.setValue(N,"modelViewMatrix",P.modelViewMatrix),Le.setValue(N,"normalMatrix",P.normalMatrix),Le.setValue(N,"modelMatrix",P.matrixWorld),F.isShaderMaterial||F.isRawShaderMaterial){let un=F.uniformsGroups;for(let mn=0,Ll=un.length;mn<Ll;mn++){let Ji=un[mn];Jt.update(Ji,yn),Jt.bind(Ji,yn)}}return yn}function lo(T,z){T.ambientLightColor.needsUpdate=z,T.lightProbe.needsUpdate=z,T.directionalLights.needsUpdate=z,T.directionalLightShadows.needsUpdate=z,T.pointLights.needsUpdate=z,T.pointLightShadows.needsUpdate=z,T.spotLights.needsUpdate=z,T.spotLightShadows.needsUpdate=z,T.rectAreaLights.needsUpdate=z,T.hemisphereLights.needsUpdate=z}function co(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return M},this.getActiveMipmapLevel=function(){return _},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(T,z,I){let F=Ct.get(T);F.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,F.__autoAllocateDepthBuffer===!1&&(F.__useRenderToTexture=!1),Ct.get(T.texture).__webglTexture=z,Ct.get(T.depthTexture).__webglTexture=F.__autoAllocateDepthBuffer?void 0:I,F.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,z){let I=Ct.get(T);I.__webglFramebuffer=z,I.__useDefaultFramebuffer=z===void 0};let uo=N.createFramebuffer();this.setRenderTarget=function(T,z=0,I=0){R=T,M=z,_=I;let F=!0,P=null,V=!1,X=!1;if(T){let nt=Ct.get(T);if(nt.__useDefaultFramebuffer!==void 0)Rt.bindFramebuffer(N.FRAMEBUFFER,null),F=!1;else if(nt.__webglFramebuffer===void 0)Xt.setupRenderTarget(T);else if(nt.__hasExternalTextures)Xt.rebindTextures(T,Ct.get(T.texture).__webglTexture,Ct.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){let rt=T.depthTexture;if(nt.__boundDepthTexture!==rt){if(rt!==null&&Ct.has(rt)&&(T.width!==rt.image.width||T.height!==rt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Xt.setupDepthRenderbuffer(T)}}let gt=T.texture;(gt.isData3DTexture||gt.isDataArrayTexture||gt.isCompressedArrayTexture)&&(X=!0);let ft=Ct.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(ft[z])?P=ft[z][I]:P=ft[z],V=!0):T.samples>0&&Xt.useMultisampledRTT(T)===!1?P=Ct.get(T).__webglMultisampledFramebuffer:Array.isArray(ft)?P=ft[I]:P=ft,C.copy(T.viewport),U.copy(T.scissor),B=T.scissorTest}else C.copy(Lt).multiplyScalar(K).floor(),U.copy(te).multiplyScalar(K).floor(),B=ae;if(I!==0&&(P=uo),Rt.bindFramebuffer(N.FRAMEBUFFER,P)&&F&&Rt.drawBuffers(T,P),Rt.viewport(C),Rt.scissor(U),Rt.setScissorTest(B),V){let nt=Ct.get(T.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+z,nt.__webglTexture,I)}else if(X){let nt=z;for(let gt=0;gt<T.textures.length;gt++){let ft=Ct.get(T.textures[gt]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+gt,ft.__webglTexture,I,nt)}}else if(T!==null&&I!==0){let nt=Ct.get(T.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,nt.__webglTexture,I)}E=-1},this.readRenderTargetPixels=function(T,z,I,F,P,V,X,Y=0){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let nt=Ct.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&X!==void 0&&(nt=nt[X]),nt){Rt.bindFramebuffer(N.FRAMEBUFFER,nt);try{let gt=T.textures[Y],ft=gt.format,rt=gt.type;if(!Wt.textureFormatReadable(ft)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Wt.textureTypeReadable(rt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=T.width-F&&I>=0&&I<=T.height-P&&(T.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+Y),N.readPixels(z,I,F,P,Pt.convert(ft),Pt.convert(rt),V))}finally{let gt=R!==null?Ct.get(R).__webglFramebuffer:null;Rt.bindFramebuffer(N.FRAMEBUFFER,gt)}}},this.readRenderTargetPixelsAsync=async function(T,z,I,F,P,V,X,Y=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let nt=Ct.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&X!==void 0&&(nt=nt[X]),nt)if(z>=0&&z<=T.width-F&&I>=0&&I<=T.height-P){Rt.bindFramebuffer(N.FRAMEBUFFER,nt);let gt=T.textures[Y],ft=gt.format,rt=gt.type;if(!Wt.textureFormatReadable(ft))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Wt.textureTypeReadable(rt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Mt=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,Mt),N.bufferData(N.PIXEL_PACK_BUFFER,V.byteLength,N.STREAM_READ),T.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+Y),N.readPixels(z,I,F,P,Pt.convert(ft),Pt.convert(rt),0);let Yt=R!==null?Ct.get(R).__webglFramebuffer:null;Rt.bindFramebuffer(N.FRAMEBUFFER,Yt);let Ee=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await Eh(N,Ee,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,Mt),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,V),N.deleteBuffer(Mt),N.deleteSync(Ee),V}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,z=null,I=0){let F=Math.pow(2,-I),P=Math.floor(T.image.width*F),V=Math.floor(T.image.height*F),X=z!==null?z.x:0,Y=z!==null?z.y:0;Xt.setTexture2D(T,0),N.copyTexSubImage2D(N.TEXTURE_2D,I,0,0,X,Y,P,V),Rt.unbindTexture()};let Ul=N.createFramebuffer(),qi=N.createFramebuffer();this.copyTextureToTexture=function(T,z,I=null,F=null,P=0,V=null){V===null&&(P!==0?(Or("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),V=P,P=0):V=0);let X,Y,nt,gt,ft,rt,Mt,Yt,Ee,_e=T.isCompressedTexture?T.mipmaps[V]:T.image;if(I!==null)X=I.max.x-I.min.x,Y=I.max.y-I.min.y,nt=I.isBox3?I.max.z-I.min.z:1,gt=I.min.x,ft=I.min.y,rt=I.isBox3?I.min.z:0;else{let Un=Math.pow(2,-P);X=Math.floor(_e.width*Un),Y=Math.floor(_e.height*Un),T.isDataArrayTexture?nt=_e.depth:T.isData3DTexture?nt=Math.floor(_e.depth*Un):nt=1,gt=0,ft=0,rt=0}F!==null?(Mt=F.x,Yt=F.y,Ee=F.z):(Mt=0,Yt=0,Ee=0);let fe=Pt.convert(z.format),kt=Pt.convert(z.type),Ue;z.isData3DTexture?(Xt.setTexture3D(z,0),Ue=N.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(Xt.setTexture2DArray(z,0),Ue=N.TEXTURE_2D_ARRAY):(Xt.setTexture2D(z,0),Ue=N.TEXTURE_2D),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,z.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,z.unpackAlignment);let de=N.getParameter(N.UNPACK_ROW_LENGTH),yn=N.getParameter(N.UNPACK_IMAGE_HEIGHT),vr=N.getParameter(N.UNPACK_SKIP_PIXELS),Mn=N.getParameter(N.UNPACK_SKIP_ROWS),fs=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,_e.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,_e.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,gt),N.pixelStorei(N.UNPACK_SKIP_ROWS,ft),N.pixelStorei(N.UNPACK_SKIP_IMAGES,rt);let Le=T.isDataArrayTexture||T.isData3DTexture,Dn=z.isDataArrayTexture||z.isData3DTexture;if(T.isDepthTexture){let Un=Ct.get(T),un=Ct.get(z),mn=Ct.get(Un.__renderTarget),Ll=Ct.get(un.__renderTarget);Rt.bindFramebuffer(N.READ_FRAMEBUFFER,mn.__webglFramebuffer),Rt.bindFramebuffer(N.DRAW_FRAMEBUFFER,Ll.__webglFramebuffer);for(let Ji=0;Ji<nt;Ji++)Le&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Ct.get(T).__webglTexture,P,rt+Ji),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Ct.get(z).__webglTexture,V,Ee+Ji)),N.blitFramebuffer(gt,ft,X,Y,Mt,Yt,X,Y,N.DEPTH_BUFFER_BIT,N.NEAREST);Rt.bindFramebuffer(N.READ_FRAMEBUFFER,null),Rt.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(P!==0||T.isRenderTargetTexture||Ct.has(T)){let Un=Ct.get(T),un=Ct.get(z);Rt.bindFramebuffer(N.READ_FRAMEBUFFER,Ul),Rt.bindFramebuffer(N.DRAW_FRAMEBUFFER,qi);for(let mn=0;mn<nt;mn++)Le?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Un.__webglTexture,P,rt+mn):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Un.__webglTexture,P),Dn?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,un.__webglTexture,V,Ee+mn):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,un.__webglTexture,V),P!==0?N.blitFramebuffer(gt,ft,X,Y,Mt,Yt,X,Y,N.COLOR_BUFFER_BIT,N.NEAREST):Dn?N.copyTexSubImage3D(Ue,V,Mt,Yt,Ee+mn,gt,ft,X,Y):N.copyTexSubImage2D(Ue,V,Mt,Yt,gt,ft,X,Y);Rt.bindFramebuffer(N.READ_FRAMEBUFFER,null),Rt.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else Dn?T.isDataTexture||T.isData3DTexture?N.texSubImage3D(Ue,V,Mt,Yt,Ee,X,Y,nt,fe,kt,_e.data):z.isCompressedArrayTexture?N.compressedTexSubImage3D(Ue,V,Mt,Yt,Ee,X,Y,nt,fe,_e.data):N.texSubImage3D(Ue,V,Mt,Yt,Ee,X,Y,nt,fe,kt,_e):T.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,V,Mt,Yt,X,Y,fe,kt,_e.data):T.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,V,Mt,Yt,_e.width,_e.height,fe,_e.data):N.texSubImage2D(N.TEXTURE_2D,V,Mt,Yt,X,Y,fe,kt,_e);N.pixelStorei(N.UNPACK_ROW_LENGTH,de),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,yn),N.pixelStorei(N.UNPACK_SKIP_PIXELS,vr),N.pixelStorei(N.UNPACK_SKIP_ROWS,Mn),N.pixelStorei(N.UNPACK_SKIP_IMAGES,fs),V===0&&z.generateMipmaps&&N.generateMipmap(Ue),Rt.unbindTexture()},this.initRenderTarget=function(T){Ct.get(T).__webglFramebuffer===void 0&&Xt.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?Xt.setTextureCube(T,0):T.isData3DTexture?Xt.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?Xt.setTexture2DArray(T,0):Xt.setTexture2D(T,0),Rt.unbindTexture()},this.resetState=function(){M=0,_=0,R=null,Rt.reset(),xt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Xn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=oe._getDrawingBufferColorSpace(t),e.unpackColorSpace=oe._getUnpackColorSpace()}};var is={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var Rn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},wx=new qr(-1,1,1,-1,0,1),nu=class extends xe{constructor(){super(),this.setAttribute("position",new Gt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Gt([0,2,0,0,2,0],2))}},Ax=new nu,Vi=class{constructor(t){this._mesh=new zt(Ax,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,wx)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var vl=class extends Rn{constructor(t,e="tDiffuse"){super(),this.textureID=e,this.uniforms=null,this.material=null,t instanceof ve?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=cn.clone(t.uniforms),this.material=new ve({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new Vi(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var io=class extends Rn{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){let r=t.getContext(),s=t.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),s.buffers.stencil.setFunc(r.ALWAYS,o,4294967295),s.buffers.stencil.setClear(a),s.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(r.EQUAL,1,4294967295),s.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),s.buffers.stencil.setLocked(!0)}},yl=class extends Rn{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var Ml=class{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){let n=t.getSize(new st);this._width=n.width,this._height=n.height,e=new Je(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:On}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new vl(is),this.copyPass.material.blending=Kn,this.clock=new qs}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());let e=this.renderer.getRenderTarget(),n=!1;for(let r=0,s=this.passes.length;r<s;r++){let o=this.passes[r];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),o.needsSwap){if(n){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}io!==void 0&&(o instanceof io?n=!0:o instanceof yl&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){let e=this.renderer.getSize(new st);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;let n=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(n,r),this.renderTarget2.setSize(n,r);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,r)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Sl=class extends Rn{constructor(t,e,n=null,r=null,s=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=r,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new yt}render(t,e,n){let r=t.autoClear;t.autoClear=!1;let s,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(s=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),t.autoClear=r}};var of={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new yt(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var rs=class i extends Rn{constructor(t,e=1,n,r){super(),this.strength=e,this.radius=n,this.threshold=r,this.resolution=t!==void 0?new st(t.x,t.y):new st(256,256),this.clearColor=new yt(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Je(s,o,{type:On}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let h=new Je(s,o,{type:On});h.texture.name="UnrealBloomPass.h"+u,h.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(h);let d=new Je(s,o,{type:On});d.texture.name="UnrealBloomPass.v"+u,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),s=Math.round(s/2),o=Math.round(o/2)}let a=of;this.highPassUniforms=cn.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=r,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new ve({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new st(1/s,1/o),s=Math.round(s/2),o=Math.round(o/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new L(1,1,1),new L(1,1,1),new L(1,1,1),new L(1,1,1),new L(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=cn.clone(is.uniforms),this.blendMaterial=new ve({uniforms:this.copyUniforms,vertexShader:is.vertexShader,fragmentShader:is.fragmentShader,blending:Oe,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new yt,this._oldClearAlpha=1,this._basic=new se,this._fsQuad=new Vi(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),r=Math.round(e/2);this.renderTargetBright.setSize(n,r);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(n,r),this.renderTargetsVertical[s].setSize(n,r),this.separableBlurMaterials[s].uniforms.invSize.value=new st(1/n,1/r),n=Math.round(n/2),r=Math.round(r/2)}render(t,e,n,r,s){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();let o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),s&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this._fsQuad.render(t),a=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(n),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=o}_getSeparableBlurMaterial(t){let e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new ve({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new st(.5,.5)},direction:{value:new st(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
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
				}`})}_getCompositeMaterial(t){return new ve({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}};rs.BlurDirectionX=new st(1,0);rs.BlurDirectionY=new st(0,1);var ro={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var bl=class extends Rn{constructor(){super(),this.uniforms=cn.clone(ro.uniforms),this.material=new js({name:ro.name,uniforms:this.uniforms,vertexShader:ro.vertexShader,fragmentShader:ro.fragmentShader}),this._fsQuad=new Vi(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},oe.getTransfer(this._outputColorSpace)===me&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Ea?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===_a?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===wa?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Jr?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Ta?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Ra?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Aa&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var El=class extends zt{constructor(t,e={}){super(t),this.isWater=!0;let n=this,r=e.textureWidth!==void 0?e.textureWidth:512,s=e.textureHeight!==void 0?e.textureHeight:512,o=e.clipBias!==void 0?e.clipBias:0,a=e.alpha!==void 0?e.alpha:1,l=e.time!==void 0?e.time:0,c=e.waterNormals!==void 0?e.waterNormals:null,u=e.sunDirection!==void 0?e.sunDirection:new L(.70707,.70707,0),h=new yt(e.sunColor!==void 0?e.sunColor:16777215),d=new yt(e.waterColor!==void 0?e.waterColor:8355711),p=e.eye!==void 0?e.eye:new L(0,0,0),x=e.distortionScale!==void 0?e.distortionScale:20,v=e.side!==void 0?e.side:En,m=e.fog!==void 0?e.fog:!1,f=new gn,y=new L,S=new L,g=new L,b=new Se,M=new L(0,0,-1),_=new Ce,R=new L,E=new L,w=new Ce,C=new Se,U=new qe,B=new Je(r,s),H={name:"MirrorShader",uniforms:cn.merge([pt.fog,pt.lights,{normalSampler:{value:null},mirrorSampler:{value:null},alpha:{value:1},time:{value:0},size:{value:1},distortionScale:{value:20},textureMatrix:{value:new Se},sunColor:{value:new yt(8355711)},sunDirection:{value:new L(.70707,.70707,0)},eye:{value:new L},waterColor:{value:new yt(5592405)}}]),vertexShader:`
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
				}`},j=new ve({name:H.name,uniforms:cn.clone(H.uniforms),vertexShader:H.vertexShader,fragmentShader:H.fragmentShader,lights:!0,side:v,fog:m});j.uniforms.mirrorSampler.value=B.texture,j.uniforms.textureMatrix.value=C,j.uniforms.alpha.value=a,j.uniforms.time.value=l,j.uniforms.normalSampler.value=c,j.uniforms.sunColor.value=h,j.uniforms.waterColor.value=d,j.uniforms.sunDirection.value=u,j.uniforms.distortionScale.value=x,j.uniforms.eye.value=p,n.material=j,n.onBeforeRender=function(k,tt,K){if(S.setFromMatrixPosition(n.matrixWorld),g.setFromMatrixPosition(K.matrixWorld),b.extractRotation(n.matrixWorld),y.set(0,0,1),y.applyMatrix4(b),R.subVectors(S,g),R.dot(y)>0)return;R.reflect(y).negate(),R.add(S),b.extractRotation(K.matrixWorld),M.set(0,0,-1),M.applyMatrix4(b),M.add(g),E.subVectors(S,M),E.reflect(y).negate(),E.add(S),U.position.copy(R),U.up.set(0,1,0),U.up.applyMatrix4(b),U.up.reflect(y),U.lookAt(E),U.far=K.far,U.updateMatrixWorld(),U.projectionMatrix.copy(K.projectionMatrix),C.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),C.multiply(U.projectionMatrix),C.multiply(U.matrixWorldInverse),f.setFromNormalAndCoplanarPoint(y,S),f.applyMatrix4(U.matrixWorldInverse),_.set(f.normal.x,f.normal.y,f.normal.z,f.constant);let ut=U.projectionMatrix;w.x=(Math.sign(_.x)+ut.elements[8])/ut.elements[0],w.y=(Math.sign(_.y)+ut.elements[9])/ut.elements[5],w.z=-1,w.w=(1+ut.elements[10])/ut.elements[14],_.multiplyScalar(2/_.dot(w)),ut.elements[2]=_.x,ut.elements[6]=_.y,ut.elements[10]=_.z+1-o,ut.elements[14]=_.w,p.setFromMatrixPosition(K.matrixWorld);let bt=k.getRenderTarget(),Lt=k.xr.enabled,te=k.shadowMap.autoUpdate;n.visible=!1,k.xr.enabled=!1,k.shadowMap.autoUpdate=!1,k.setRenderTarget(B),k.state.buffers.depth.setMask(!0),k.autoClear===!1&&k.clear(),k.render(tt,U),n.visible=!0,k.xr.enabled=Lt,k.shadowMap.autoUpdate=te,k.setRenderTarget(bt);let ae=K.viewport;ae!==void 0&&k.state.viewport(ae)}}};function lf(i,t=!1){let e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),r=new Set(Object.keys(i[0].morphAttributes)),s={},o={},a=i[0].morphTargetsRelative,l=new xe,c=0;for(let u=0;u<i.length;++u){let h=i[u],d=0;if(e!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let p in h.attributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;s[p]===void 0&&(s[p]=[]),s[p].push(h.attributes[p]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let p in h.morphAttributes){if(!r.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[p]===void 0&&(o[p]=[]),o[p].push(h.morphAttributes[p])}if(t){let p;if(e)p=h.index.count;else if(h.attributes.position!==void 0)p=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,p,u),c+=p}}if(e){let u=0,h=[];for(let d=0;d<i.length;++d){let p=i[d].index;for(let x=0;x<p.count;++x)h.push(p.getX(x)+u);u+=i[d].attributes.position.count}l.setIndex(h)}for(let u in s){let h=af(s[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,h)}for(let u in o){let h=o[u][0].length;if(h===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let d=0;d<h;++d){let p=[];for(let v=0;v<o[u].length;++v)p.push(o[u][v][d]);let x=af(p);if(!x)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(x)}}return l}function af(i){let t,e,n,r=-1,s=0;for(let c=0;c<i.length;++c){let u=i[c];if(t===void 0&&(t=u.array.constructor),t!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=u.itemSize),e!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(r===-1&&(r=u.gpuType),r!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=u.count*e}let o=new t(s),a=new Fe(o,e,n),l=0;for(let c=0;c<i.length;++c){let u=i[c];if(u.isInterleavedBufferAttribute){let h=l/e;for(let d=0,p=u.count;d<p;d++)for(let x=0;x<e;x++){let v=u.getComponent(d,x);a.setComponent(d+h,x,v)}}else o.set(u.array,l);l+=u.count*e}return r!==void 0&&(a.gpuType=r),a}var be=Math.PI/180,ht=150,$t=(i,t=ht,e=0)=>new L(Math.cos(i*be)*t,e,-Math.sin(i*be)*t);function ue(i){return()=>{i|=0,i=i+1831565813|0;let t=Math.imul(i^i>>>15,1|i);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}var Dt=new yt(1,.7,.36),Ut=new yt(1,.8,.52),Ve=new yt(.72,.84,1),Al=new yt(1,.2,.12),Cn=new yt(.3,1,.85),si=new yt(1,.4,.6),Tl=new L(0,1,0),uf=[],su=[],wl=new Wr(new Uint8Array([255,255,255,255]),1,1);wl.needsUpdate=!0;wl.colorSpace=Ke;var _l=new Wr(new Uint8Array([0,0,0,255]),1,1);_l.needsUpdate=!0;var ou=[],hf=new Set,zn=i=>(hf.add(i),i),Si=new Map;function $({map:i=wl,emissiveMap:t=_l,glow:e=1.5,tint:n=16777215,side:r=En,key:s=null,cut:o=!1}={}){let a=s||(i===wl&&t===_l?"plain"+n+r:null);if(a&&Si.has(a))return Si.get(a);let l=new ve({uniforms:cn.merge([pt.fog,{map:{value:null},emissiveMap:{value:null},glow:{value:e},tint:{value:new yt(n)}}]),vertexShader:`varying vec3 vC; varying vec2 vUv;
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
      }`,vertexColors:!0,fog:!0,side:o?Be:r,defines:o?{CUT:""}:{}});return l.uniforms.map.value=i,l.uniforms.emissiveMap.value=t,l.userData.glow=e,t!==_l&&ou.push(l),a&&Si.set(a,l),l}var iu=new Map;function wt(i,t,e){let n=i+","+t+","+e;return iu.has(n)||iu.set(n,new se({color:new yt(i,t,e)})),iu.get(n)}var Kt=class{constructor(){this.bins=new Map,this.lights=[],this.sparks=[]}put(t,...e){this.bins.has(t)||this.bins.set(t,[]);let n=this.bins.get(t);for(let r of e.flat(3))n.push(r);return this}light(t,e,n,r,s,o,a=0){return this.lights.push({x:t,y:e,z:n,colour:r,power:s,reach:o}),a&&this.spark(t,e,n,r,a),this}spark(t,e,n,r,s,o=0,a=0){return this.sparks.push({x:t,y:e,z:n,colour:r,size:s,flicker:o,drift:a}),this}stamp(t,e=0,n=0,r=0,s=1,o=0){let a=new Se().compose(new L(e,o,n),new Nn().setFromAxisAngle(Tl,r),new L(s,s,s)),l=new L;for(let[c,u]of t.bins)this.put(c,u.map(h=>h.clone().applyMatrix4(a)));for(let c of t.lights)l.set(c.x,c.y,c.z).applyMatrix4(a),this.lights.push({...c,x:l.x,y:l.y,z:l.z,reach:c.reach*s});for(let c of t.sparks)l.set(c.x,c.y,c.z).applyMatrix4(a),this.sparks.push({...c,x:l.x,y:l.y,z:l.z,size:c.size*s});return this}build(){for(let e of this.lights)uf.push({x:e.x,y:e.y,z:e.z,r:e.colour.r*e.power,g:e.colour.g*e.power,b:e.colour.b*e.power,reach2:e.reach*e.reach,far:e.reach*6});su.push(...this.sparks);let t=new $e;for(let[e,n]of this.bins)if(n.length){let r=new zt(lf(n.map(s=>s.index?s.toNonIndexed():s),!1),e);hf.has(e)&&r.layers.set(1),t.add(r)}return t}};function Rl(i){let e=new Map,n=(c,u)=>c*4096+u;for(let c of uf)for(let u=Math.floor((c.x-c.far)/48);u<=Math.floor((c.x+c.far)/48);u++)for(let h=Math.floor((c.z-c.far)/48);h<=Math.floor((c.z+c.far)/48);h++){let d=n(u+2048,h+2048);e.has(d)||e.set(d,[]),e.get(d).push(c)}i.updateMatrixWorld(!0);let r=new L,s=new L,o=new Qt,a=new L(-.35,.62,.7).normalize(),l=[];i.traverse(c=>{if(!c.isMesh||!c.material.vertexColors||c.userData.lit)return;let u=c.geometry,h=u.attributes.position,d=u.attributes.normal,p=new Float32Array(h.count*3);o.getNormalMatrix(c.matrixWorld);for(let x=0;x<h.count;x++){r.fromBufferAttribute(h,x).applyMatrix4(c.matrixWorld),s.fromBufferAttribute(d,x).applyMatrix3(o).normalize();let v=.55+.45*s.y,m=Math.max(0,s.dot(a))*.78,f=Math.abs(s.y)<.6?.5+.5*Math.min(1,Math.max(0,(r.y-1.5)/3)):s.y<-.6?.55:1,y=.45+.55*f,S=(.03*v+.05*m)*f,g=(.04*v+.062*m)*f,b=(.075*v+.1*m)*f;for(let M of e.get(n(Math.floor(r.x/48)+2048,Math.floor(r.z/48)+2048))||l){let _=M.x-r.x,R=M.y-r.y,E=M.z-r.z,w=_*_+R*R+E*E;if(w>M.far*M.far)continue;let C=Math.sqrt(w)||1,U=Math.max(0,((s.x*_+s.y*R+s.z*E)/C+.22)/1.22),B=U/(1+w/M.reach2)*y;S+=M.r*B,g+=M.g*B,b+=M.b*B}p[x*3]=S,p[x*3+1]=g,p[x*3+2]=b}u.setAttribute("color",new Fe(p,3)),c.userData.lit=!0})}var Zt=i=>{let t=i.attributes.uv;if(t)for(let e=0;e<t.count;e++)t.setXY(e,.004,.004);return i};function pe(i,t,e,n,r,s,o,a=0){let l=new ge(i,t,e,Math.max(1,Math.round(i/5)),Math.max(1,Math.round(t/3)),Math.max(1,Math.round(e/6))),c=l.attributes.uv,u=l.attributes.normal,h=l.attributes.position;for(let d=0;d<c.count;d++){if(Math.abs(u.getY(d))>.5||!o){c.setXY(d,.004,.004);continue}let p=Math.abs(u.getX(d))>.5?h.getZ(d)+e/2+7:h.getX(d)+i/2;c.setXY(d,p/o.u+a,(h.getY(d)+t/2)/o.v)}return l.translate(n,r+t/2,s)}var At=(i,t,e,n,r,s)=>pe(i,t,e,n,r,s,null),G=(i,t,e,n,r,s)=>Zt(new ge(i,t,e)).translate(n,r+t/2,s);function vt(i,t,e,n,r,s=8,o=null,a=i){let l=new ye(a,i,t,s,Math.max(1,Math.round(t/4))),c=l.attributes.uv,u=l.attributes.normal;for(let h=0;h<c.count;h++)!o||Math.abs(u.getY(h))>.9?c.setXY(h,.004,.004):c.setXY(h,c.getX(h)*2*Math.PI*i/o.u,c.getY(h)*t/o.v);return l.rotateY(Math.PI/s).translate(e,n+t/2,r)}var Ot=(i,t,e,n,r=10)=>Zt(new en(i,r,Math.max(6,r-2))).translate(t,e,n),Ye=(i,t,e,n,r,s=8)=>Zt(new $n(i,t,s)).rotateY(Math.PI/s).translate(e,n+t/2,r);function Bt(i,t,e=.08,n=5){let r=new L(...i),s=new L(...t),o=s.clone().sub(r);return Zt(new ye(e,e,o.length(),n)).applyQuaternion(new Nn().setFromUnitVectors(Tl,o.clone().normalize())).translate((r.x+s.x)/2,(r.y+s.y)/2,(r.z+s.z)/2)}function Me(i,t,e,n,r,{seg:s=20,swell:o=.1,finial:a=.32}={}){let l=[];for(let u=0;u<=18;u++){let h=u/18;l.push(new st(Math.max(.001,i*Math.sqrt(1-Math.pow(h,1.75))*(.93+o*2.6*Math.sin(Math.PI*Math.min(1,h*1.5))*(1-h))),t*h))}let c=[Zt(new Bi(l,s)).translate(e,n,r)];if(a){let u=t*a;c.push(Zt(new ye(.02*i,.09*i,u,6)).translate(e,n+t+u/2-.05,r),Ot(.11*i,e,n+t+u*.25,r,8),Ot(.07*i,e,n+t+u*.62,r,6))}return c}function Ze(i,t,e,n,r){let s=i*.42,o=i*.1,a=[];for(let[l,c]of[[-1,-1],[1,-1],[-1,1],[1,1]])a.push(G(o,t,o,e+l*s,n,r+c*s));return a.push(G(i*1.28,i*.12,i*1.28,e,n+t,r),...Me(i*.56,i*.72,e,n+t+i*.12,r,{seg:10})),a}function De(i,t,e,n,r,s=0){let o=new Ni,a=i/2,l=t-a*(1+s);return o.moveTo(-a,0),o.lineTo(-a,l),s?(o.quadraticCurveTo(-a,l+a*.9,0,t),o.quadraticCurveTo(a,l+a*.9,a,l)):o.absarc(0,l,a,Math.PI,0,!0),o.lineTo(a,0),o.lineTo(-a,0),Zt(new lr(o,10)).translate(e,n,r)}var dn=(i,t,e,n=0,r=360,s=96)=>Zt(new ar(i,t,Math.max(3,Math.round(s*r/360)),2,n*be,r*be)).rotateX(-Math.PI/2).translate(0,e,0);function au(i,t,e,n=0,r=360,s=96){let o=Zt(new ye(i,i,e,Math.max(3,Math.round(s*r/360)),1,!0,(n+90)*be,r*be)).translate(0,t+e/2,0),a=o.attributes.normal.array;for(let l=0;l<a.length;l++)a[l]=-a[l];return o}var ri=(i,t=!0,e=8)=>{let n=new Qn(i);return t&&(n.wrapS=n.wrapT=xi),n.colorSpace=Ke,n.anisotropy=e,n};function In({cols:i=8,rows:t=4,lit:e=.3,seed:n=1,stone:r=[205,172,128],shadow:s=[46,34,26],glow:o=["#ffd27a","#ffb65a","#ffe2a8"],opening:a=.5,pointed:l=!1,jali:c=.25}){let d=ue(n),p=i*64,x=t*96,v=document.createElement("canvas"),m=document.createElement("canvas");v.width=m.width=p,v.height=m.height=x;let f=v.getContext("2d"),y=m.getContext("2d");y.fillStyle="#000",y.fillRect(0,0,p,x);let S=(b,M)=>"rgb("+b.map(_=>Math.max(0,Math.min(255,_*M))|0).join(",")+")";f.fillStyle=S(r,1),f.fillRect(0,0,p,x);for(let b=0;b<3200;b++)f.fillStyle=S(r,.9+d()*.2),f.fillRect(d()*p,d()*x,2+d()*5,1+d()*2);let g=(b,M,_,R,E)=>{b.beginPath(),b.moveTo(M-R/2,_),b.lineTo(M-R/2,_-E+R/2),l?(b.quadraticCurveTo(M-R/2,_-E+R*.05,M,_-E),b.quadraticCurveTo(M+R/2,_-E+R*.05,M+R/2,_-E+R/2)):b.arc(M,_-E+R/2,R/2,Math.PI,0),b.lineTo(M+R/2,_),b.closePath()};for(let b=0;b<t;b++)for(let M=0;M<i;M++){let _=M*64+32,R=(b+1)*96-14,E=64*a,w=96*.62;if(b*i+M!==0){if(f.fillStyle=S(r,.8),g(f,_,R+2,E+12,w+9),f.fill(),f.fillStyle=S(r,1.12),g(f,_,R,E+8,w+5),f.fill(),f.fillStyle=S(s,1),g(f,_,R,E,w),f.fill(),d()<c){f.strokeStyle=S(r,.62),f.lineWidth=1;for(let C=-E/2+4;C<E/2;C+=5)f.beginPath(),f.moveTo(_+C,R-9),f.lineTo(_+C,R-w*.62),f.stroke()}if(f.fillStyle=S(r,.78),f.fillRect(_-E/2-2,R-10,E+4,4),f.fillStyle=S(r,1.1),f.fillRect(_-E/2-3,R-12,E+6,2),f.fillStyle=S(r,1.16),f.beginPath(),f.arc(_,R-w-7,3,0,7),f.fill(),d()<e){let C=y.createLinearGradient(0,R-w,0,R),U=o[d()*o.length|0];C.addColorStop(0,U),C.addColorStop(1,"#7a4a1c"),y.fillStyle=C,y.globalAlpha=.55+d()*.45,g(y,_,R-11,E-2,w-12),y.fill(),y.globalAlpha=1}f.fillStyle=S(r,.84),f.fillRect(M*64,b*96,3,96),f.fillStyle=S(r,1.1),f.fillRect(M*64+3,b*96,2,96)}}for(let b=0;b<t;b++){f.fillStyle=S(r,1.16),f.fillRect(0,b*96,p,5),f.fillStyle=S(r,.68),f.fillRect(0,b*96+5,p,2);for(let M=0;M<p;M+=8)f.fillStyle=S(r,.8),f.fillRect(M,b*96+8,4,3)}return{map:ri(v),emissiveMap:ri(m),cols:i,rows:t}}function Cl({cols:i=8,rows:t=8,lit:e=.16,seed:n=1,wall:r=[84,90,110]}){let a=ue(n),l=document.createElement("canvas"),c=document.createElement("canvas");l.width=c.width=i*32,l.height=c.height=t*32;let u=l.getContext("2d"),h=c.getContext("2d");h.fillStyle="#000",h.fillRect(0,0,c.width,c.height);let d=p=>"rgb("+r.map(x=>x*p|0).join(",")+")";u.fillStyle=d(1),u.fillRect(0,0,l.width,l.height);for(let p=0;p<900;p++)u.fillStyle=d(.86+a()*.26),u.fillRect(a()*l.width,a()*l.height,3+a()*8,1+a()*3);for(let p=0;p<t;p++){u.fillStyle=d(.7),u.fillRect(0,p*32,l.width,2);for(let x=0;x<i;x++){if(x+p===0)continue;let v=x*32+8,m=p*32+8;u.fillStyle=d(.36),u.fillRect(v,m,16,17),u.fillStyle=d(1.2),u.fillRect(v-1,m+17,18,2),a()<.3&&(u.fillStyle=d(.75),u.fillRect(v-3,m+19,22,3)),a()<e&&(h.fillStyle=a()<.78?["#ffcf80","#ffb45c","#ffe0a6"][a()*3|0]:"#9fd0ff",h.globalAlpha=.35+a()*.65,h.fillRect(v+1,m+1,14,15),h.globalAlpha=1,a()<.5&&(h.fillStyle="#000",h.fillRect(v+7,m+1,1,15)))}}return{map:ri(l,!0,4),emissiveMap:ri(c,!0,4)}}function Pn(i=128,t=0,e=1){let n=document.createElement("canvas");n.width=n.height=i;let r=n.getContext("2d"),s=r.createRadialGradient(i/2,i/2,i*t,i/2,i/2,i/2);return s.addColorStop(0,"rgba(255,255,255,1)"),s.addColorStop(.25*e,"rgba(255,255,255,.42)"),s.addColorStop(Math.min(.99,.6*e),"rgba(255,255,255,.1)"),s.addColorStop(1,"rgba(255,255,255,0)"),r.fillStyle=s,r.fillRect(0,0,i,i),ri(n,!1,1)}function ss(i,t,e=8,n=!0){let r=document.createElement("canvas");r.width=r.height=64;let s=r.getContext("2d");for(let o=0;o<e;o++)s.fillStyle=o%2?i:t,n?s.fillRect(o*64/e,0,64/e+1,64):s.fillRect(0,o*64/e,64,64/e+1);return ri(r)}function ff(i,{w:t=1024,h:e=320,ground:n="#0d1326",edge:r="#f2c66a"}={}){let s=document.createElement("canvas");s.width=t,s.height=e;let o=s.getContext("2d");o.fillStyle=n,o.fillRect(0,0,t,e),r&&(o.strokeStyle=r,o.lineWidth=6,o.strokeRect(9,9,t-18,e-18));for(let{text:a,y:l,size:c,colour:u,font:h="Geist, Arial, sans-serif",weight:d=600,fit:p=t-108}of i){let x=c;do o.font=d+" "+x+"px "+h,x-=4;while(o.measureText(a).width>p&&x>24);o.fillStyle=u,o.textBaseline="middle",o.fillText(a,54,l)}return ri(s,!1)}function Wi(i,t,e=null,n=520){let r="leaf"+t;if(Si.has(r))return Si.get(r);let s=document.createElement("canvas");s.width=s.height=128;let o=s.getContext("2d"),a=ue(t.length*31+i[1]),l=c=>"rgb("+i.map(u=>Math.max(0,Math.min(255,u*c))|0).join(",")+")";o.fillStyle=l(.62),o.fillRect(0,0,128,128);for(let c=0;c<1500;c++){let u=a()*128,h=a()*128,d=a();o.fillStyle=d<.16?l(.3):l(.75+a()*.95),o.beginPath(),o.ellipse(u,h,1.5+a()*3,.8+a()*1.4,a()*3.14,0,6.3),o.fill()}if(e)for(let c=0;c<n;c++)o.fillStyle=e[a()*e.length|0],o.beginPath(),o.arc(a()*128,a()*128,1+a()*2.2,0,6.3),o.fill();return $({map:ri(s,!0,2),key:r})}function bi(i,t,e,n,r=0,s=.8,o=2.4){let a=new or(1,1),l=a.attributes.position,c=a.attributes.uv;for(let u=0;u<l.count;u++){let h=l.getX(u),d=l.getY(u),p=l.getZ(u),x=1+.2*Math.sin(h*3.1+r)*Math.sin(d*2.7+r*1.7)+.15*Math.sin(p*4.3+r*2.3+h*2);l.setXYZ(u,h*x*i,(d<0?d*.62:d)*x*i*s,p*x*i),c.setXY(u,c.getX(u)*o*2,c.getY(u)*o)}return a.translate(t,e,n)}var cf=null,Qe=()=>cf||(cf=zn(new se({color:0,map:Pn(64,.05,1.45),transparent:!0,opacity:.62,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}))),He=(i,t,e,n,r)=>new an(i*2,t*2).rotateX(-Math.PI/2).translate(e,n+.07,r);function oi(i,t,e=null,n=0){let r="spray"+t;if(Si.has(r))return Si.get(r);let s=document.createElement("canvas");s.width=s.height=256;let o=s.getContext("2d"),a=ue(t.length*17+i[0]),l=c=>"rgb("+i.map(u=>Math.max(0,Math.min(255,u*c))|0).join(",")+")";for(let c=0;c<4;c++){let u=c%2*128+64,h=(c/2|0)*128+64;for(let d=0;d<150;d++){let p=a()*6.283,x=Math.pow(a(),.6)*50;o.fillStyle=a()<.2?l(.4):l(.68+a()*.95),o.beginPath(),o.ellipse(u+Math.cos(p)*x,h+Math.sin(p)*x*.88,5+a()*6,2.2+a()*2.6,a()*3.14,0,6.3),o.fill()}if(e)for(let d=0;d<n;d++){let p=a()*6.283,x=Math.pow(a(),.6)*50;o.fillStyle=e[a()*e.length|0],o.beginPath(),o.arc(u+Math.cos(p)*x,h+Math.sin(p)*x*.88,2.4+a()*3.6,0,6.3),o.fill()}}return $({map:ri(s,!1,4),key:r,cut:!0})}function df(){if(Si.has("frond"))return Si.get("frond");let i=document.createElement("canvas");i.width=256,i.height=64;let t=i.getContext("2d");t.lineCap="round";for(let e=6;e<250;e+=5){let n=28*(1-Math.pow(e/256,1.6))+3,r=.75+e*7%5*.09;t.strokeStyle="rgb("+[44*r,104*r,62*r].map(s=>s|0).join(",")+")",t.lineWidth=3.4;for(let s of[-1,1])t.beginPath(),t.moveTo(e,32),t.lineTo(e+12,32+s*n),t.stroke()}return t.strokeStyle="rgb(70,120,70)",t.lineWidth=2.5,t.beginPath(),t.moveTo(0,32),t.lineTo(254,32),t.stroke(),$({map:ri(i,!1,4),key:"frond",cut:!0})}function Il(i,t,e,n=0,r=1){let s=new L(...i),o=new L(...t),a=new L().subVectors(o,s).cross(Tl).normalize().multiplyScalar(e/2),l=new xe,c=[s.clone().sub(a),s.clone().add(a),o.clone().add(a),o.clone().sub(a)],u=[],h=[0,1,2,0,2,3],d=[[n,0],[n,1],[r,1],[r,0]],p=[],x=[];for(let v of h)u.push(c[v].x,c[v].y,c[v].z),p.push(...d[v]),x.push(0,1,0);return l.setAttribute("position",new Gt(u,3)),l.setAttribute("normal",new Gt(x,3)),l.setAttribute("uv",new Gt(p,2)),l}function so(i,t,e,n,r,s,o,a,l=2.8){let c=ue(a*13+5),u=[],h=[],d=[],p=new L,x=new L,v=new L,m=new L,f=new L;for(let S=0;S<o;S++){let g=c()*2-1,b=c()*6.283,M=Math.sqrt(1-g*g),_=.5+c()*.55,R=g<-.25?g*.45:g,E=l*(.72+c()*.6)/2,w=c()*4|0,C=w%2*.5,U=(w/2|0)*.5;m.set(i+Math.cos(b)*M*n*_,t+R*r*_,e+Math.sin(b)*M*s*_),p.set(Math.cos(b)*M+(c()-.5)*1.1,R+(c()-.5)*1.1,Math.sin(b)*M+(c()-.5)*1.1).normalize(),x.crossVectors(p,Math.abs(p.y)>.9?new L(1,0,0):Tl).normalize(),v.crossVectors(x,p);let B=Math.cos(b)*M,H=R+.3,j=Math.sin(b)*M,k=Math.hypot(B,H,j)||1;for(let[tt,K]of[[-1,-1],[1,-1],[1,1],[-1,-1],[1,1],[-1,1]])f.copy(m).addScaledVector(x,tt*E).addScaledVector(v,K*E),u.push(f.x,f.y,f.z),h.push(B/k,H/k,j/k),d.push(C+(tt+1)*.25,U+(K+1)*.25)}let y=new xe;return y.setAttribute("position",new Gt(u,3)),y.setAttribute("normal",new Gt(h,3)),y.setAttribute("uv",new Gt(d,2)),y}var ru=new Map,Pl=(i=1,t=.76,e=.46)=>{let n=i+","+t+","+e;return ru.has(n)||ru.set(n,zn(new se({color:new yt(i,t,e),map:Pn(64,.02,1.1),transparent:!0,opacity:.34,depthWrite:!1,blending:Oe,polygonOffset:!0,polygonOffsetFactor:-3,polygonOffsetUnits:-3}))),ru.get(n)};function lu(i,t=16,e=.1){let n=new Bi(i,t*2),r=n.attributes.position,s=i.length;for(let a=0;a<r.count;a++)(a/s|0)%2&&(r.setX(a,r.getX(a)*(1-e)),r.setZ(a,r.getZ(a)*(1-e)));let o=n.toNonIndexed();return o.computeVertexNormals(),Zt(o)}var pf=[],rn=i=>zn($(i)),os=(i,t,e,n)=>pf.push({x:i,z:t,hw:e,hd:n}),as=(i,t,e=0)=>pf.every(n=>Math.abs(i-n.x)>n.hw+e||Math.abs(t-n.z)>n.hd+e),Fl=i=>{let t=(i%360+360)%360;return t>204&&t<336};function Tx(){let i=new Kt,t=rn({tint:3158586});i.put(t,vt(.34,.7,0,0,0,8,null,.2),Bt([0,.7,0],[0,5.6,0],.09,6),Bt([-.95,5.3,0],[.95,5.3,0],.05,4),G(.2,.3,.2,0,5.6,0),Ye(.16,.5,0,5.9,0,6));for(let e of[-1,1])i.put(t,Bt([e*.95,5.3,0],[e*.95,4.95,0],.03,4)),i.put(wt(1.9,1.5,.9),Ot(.3,e*.95,4.7,0,8));return i.light(0,4.9,0,Ut,.95,6.2).spark(-.95,4.7,0,Ut,4.2).spark(.95,4.7,0,Ut,4.2),i.put(Pl(),He(5.6,5.6,0,.03,0)),i.put(Qe(),He(.7,.7,0,0,0)),i}function Rx(){let i=new Kt,t=rn({tint:8019008}),e=rn({tint:3158586});i.put(t,G(2.2,.1,.6,0,.5,0),G(2.2,.5,.08,0,.72,-.3));for(let n of[-.95,.95])i.put(e,G(.08,.5,.6,n,0,0));return i}function We(i,t="neem",e=!1,n=!1){let r=new Kt,s=ue(i*7+t.length),o=rn({tint:6048314}),a=n?"f":"",l=g=>n?zn(g):g,c=[oi([44,100,62],"a"+a),oi([58,116,70],"b"+a),oi([38,86,66],"c"+a),oi([66,108,52],"d"+a)].map(l),u=l(Wi([30,70,46],"in"+a)),h=(g,b,M,_,R,E,w,C)=>r.put(g,so(b,M,_,R,E,R,n?Math.round(w*.6):w,s()*1e4|0,C*(n?1.2:1)));if(t==="ashoka"){let g=9+s()*4;return r.put(o,Bt([0,0,0],[0,g*.9,0],.16,5)),r.put(u,bi(.95,0,g*.55,0,i,3.4)),h(c[2],0,g*.56,0,1.25,g*.42,26,1.9),h(c[3],0,g*.62,0,1,g*.36,10,1.7),r.put(Qe(),He(2.2,2.2,0,0,0)),r}let d=t==="gulmohar",p=t==="amaltas",x=t==="peepal",v=(d?4.4:x?6:4.8)+s()*2.2,m=d?5.4:x?5.2:3.8,f=d?1.7:x?3.6:2.8,y=[(s()-.5)*.9,(s()-.5)*.9],S=v+f*(d?.9:.75);r.put(o,Bt([0,0,0],[y[0]*.5,v*.66,y[1]*.5],x?.42:.28,6));for(let g=0;g<(n?0:4);g++){let b=g*1.571+s(),M=m*.55;r.put(o,Bt([y[0]*.5,v*.66,y[1]*.5],[y[0]+Math.cos(b)*M,S-f*.25,y[1]+Math.sin(b)*M],.1,4))}if(r.put(u,bi(m*.56,y[0],S,y[1],i,f/m*.9)),h(c[i%4],y[0],S,y[1],m,f,x?44:34,2.9),h(c[(i+2)%4],y[0],S+f*.12,y[1],m*.78,f*.8,14,2.5),d&&h(l(oi([70,104,54],"flame"+a,["#ff7a30","#ff9a3c","#e8402a","#ff5a2a","#d83a22"],120)),y[0],S+f*.5,y[1],m*.95,f*.55,24,2.7),p&&h(l(oi([84,112,56],"gold"+a,["#ffe26a","#f6c33a","#ffd84a"],110)),y[0],S-f*.25,y[1],m*.96,f*.8,24,2.6),e)for(let g=0;g<9;g++){let b=g/9,M=b*12;r.spark(Math.cos(M)*.36+y[0]*.5*b,.5+b*v*.6,Math.sin(M)*.36+y[1]*.5*b,g%3?Ut:Dt,.9,1)}return r.put(Qe(),He(m*1.15,m*1.15,y[0],0,y[1])),r}function xr(i){let t=new Kt,e=ue(i),n=rn({tint:7297604}),r=df(),s=8+e()*4,o=(e()-.5)*1.6;t.put(n,Bt([0,0,0],[o*.4,s*.5,0],.26,6),Bt([o*.4,s*.5,0],[o,s,0],.2,6),vt(.34,.5,o,s-.2,0,6));for(let a=0;a<13;a++){let l=a/13*6.283+e()*.4,c=3.6+e()*1.5,u=.5+e()*1.3,h=Math.cos(l),d=Math.sin(l),p=[o,s,0],x=[o+h*c*.36,s+u,d*c*.36],v=[o+h*c*.72,s+u*.5,d*c*.72],m=[o+h*c,s-1.2-e()*1.4,d*c];t.put(r,Il(p,x,1.5,0,.36),Il(x,v,1.5,.36,.72),Il(v,m,1.4,.72,1))}return t.put(Qe(),He(3.4,3.4,o,0,0)),t}function oo(i){let t=ue(i),e=new Kt,n=rn({tint:[8138554,3100028,12035194,3107413,9080732,11822126,5913194][t()*7|0]}),r=rn({tint:10119756}),s=rn({tint:2763830}),o=t()<.4;return e.put(o?n:s,o?Ye(.36,.95,0,0,0,7):[G(.16,.85,.2,-.11,0,0),G(.16,.85,.2,.11,0,0)]),e.put(n,vt(.2,.62,0,.85,0,7,null,.24),Bt([-.27,1.4,0],[-.31,.86,.06],.065,4),Bt([.27,1.4,0],[.31,.86,.06],.065,4)),e.put(r,Ot(.14,0,1.63,0,5)),e.put(Qe(),He(.6,.6,0,0,0)),e}function Dl(i){let t=ue(i),e=new Kt,n=rn({tint:7031860}),r=rn({tint:11120054}),s=rn({tint:3158586}),o=rn({map:ss(["#b33a2e","#1f6f6a","#c98a1e","#2e4f9a"][i%4],"#efe6d2",8),key:"awning"+i%4,side:Be});e.put(n,G(2.6,.16,1.4,0,.9,0),G(2.6,.5,.06,0,.42,.7));for(let[c,u]of[[-1,.72],[1,.72],[-1,-.72],[1,-.72]])e.put(s,Zt(new ye(.34,.34,.06,10)).rotateX(Math.PI/2).translate(c,.34,u));for(let[c,u]of[[-1.25,.66],[1.25,.66],[-1.25,-.66],[1.25,-.66]])e.put(s,Bt([c,1,u],[c,2.7,u],.03,4));let a=new an(3.1,1.2);a.rotateX(-Math.PI/2+.28).translate(0,2.78,.42);let l=new an(3.1,1.2);l.rotateX(-Math.PI/2-.28).translate(0,2.78,-.42),e.put(o,a,l);for(let c=0;c<5;c++)e.put(r,vt(.16+t()*.1,.16+t()*.2,-1+c*.5,1.06,(t()-.5)*.7,8));return e.put(r,vt(.3,.1,.9,1.06,.2,10)),e.put(wt(2.2,1.7,.9),Ot(.11,0,2.3,.2,6)),e.light(0,2.3,.2,Dt,1.1,3.4,2.6),e.put(Qe(),He(2.3,1.5,0,0,0)),e.put(Pl(1,.66,.34),He(3.6,3.6,0,.03,.9)),e}function Cx(){let i=new Kt,t=rn({tint:3111498}),e=rn({tint:14856762}),n=rn({tint:1842466});i.put(t,G(1.3,.75,2.2,0,.3,0)),i.put(e,G(1.3,.12,2.3,0,1.75,-.05),G(1.2,.7,.08,0,1.05,-1.1)),i.put(n,G(1.22,.7,1.2,0,1.05,-.45),G(.5,.5,.5,0,.5,1.2));for(let[r,s]of[[0,1.35],[-.62,-.75],[.62,-.75]])i.put(n,Zt(new ye(.26,.26,.14,10)).rotateZ(Math.PI/2).translate(r,.26,s));for(let r of[-.6,.6])i.put(n,Bt([r,1.05,.2],[r,1.75,.5],.03,4));return i.put(wt(2,1.8,1.3),Ot(.09,0,.9,1.46,6)),i.put(Qe(),He(1.3,1.8,0,0,0)),i}function Ix(){let i=new Kt,t=$({map:ss("#8a6a4c","#73573d",10),key:"planks"}),e=$({tint:4866104}),n=$({tint:12166524}),r=new ge(5.4,.36,21),s=r.attributes.uv,o=r.attributes.position;for(let a=0;a<s.count;a++)s.setXY(a,o.getZ(a)/3.2,o.getX(a)/5.4);i.put(t,r.translate(0,1.22,10.5));for(let a=1.5;a<=20;a+=3.7)for(let l of[-2.5,2.5])i.put(e,vt(.22,3.6,l,-1.4,a,6)),a>2&&i.put(n,Bt([l,2.1,a-3.7],[l,2.1,a],.035,3));for(let a of[-2.5,2.5])i.put(e,Bt([a,1.4,20.2],[a,5.2,20.2],.07,5)),i.put(wt(1.9,1.45,.85),Ot(.3,a,5.4,20.2,8)),i.light(a,5.4,20.2,Ut,.85,5.6,3.6);return i.put(e,G(1,.8,1,1.4,1.4,3),G(.8,.7,.8,1.6,1.4,4.2),G(.7,.6,.7,1.5,2.2,3.1)),i.put(n,Zt(new An(.45,.12,5,10)).rotateX(Math.PI/2).translate(-1.6,1.52,5)),i}function mf(i,t=[]){let e=new Kt,n=ue(21),r=i.map(C=>Math.sin(C*be)<-.3?C+10:C),s=(C,U)=>Math.abs((C-U+540)%360-180),o=C=>t.every(U=>s(C,U)>4.5)&&r.every(U=>s(C,U)>3.3),a=$({tint:9274488}),l=$({tint:11774098}),c=$({tint:5591114,side:Be}),u=rn({tint:3158586}),h=$({tint:3355708}),d=$({tint:1848100}),p=$({tint:10326914,side:Be});e.put(a,dn(ht+.6,ht+16,1.7,0,360,240)),e.put(l,dn(ht-.6,ht+.6,1.96,0,360,240),dn(ht+15.6,ht+16.4,1.86,0,360,240)),e.put(c,au(ht-.6,-1.2,3.2,0,360,240)),e.put(h,dn(ht+16.4,ht+27,1.6,0,360,240)),e.put(l,dn(ht+27,ht+28,1.78,0,360,240)),e.put(d,dn(ht+28,960,1.5,0,360,96));for(let C=0;C<360;C+=2){let U=$t(C,ht+.2);e.put(u,G(.13,1.15,.13,U.x,1.96,U.z))}for(let C of[2.55,3.05])e.put(u,Zt(new An(ht+.2,.045,4,360)).rotateX(Math.PI/2).translate(0,C,0));let x=rn({tint:4864556});for(let C=0;C<660;C++){let U=C/660*360,B=$t(U,ht+14.9);e.put(x,Zt(new ge(.3,.1,1.5)).rotateY(U*be).translate(B.x,1.74,B.z))}for(let C of[14.4,15.4])e.put(u,Zt(new An(ht+C,.05,4,360)).rotateX(Math.PI/2).translate(0,1.84,0));for(let C of[114,66,41,-27,144,180,222,318,250,292])for(let U=0;U<7;U++)e.put(p,dn(ht-.6-(U+1)*1.05,ht-.6-U*1.05,1.7-(U+1)*.32,C-4.2,8.4,240),au(ht-.6-(U+1)*1.05,1.7-(U+2)*.32,.32,C-4.2,8.4,240));let v=Tx(),m=Rx(),f=C=>Math.atan2(-Math.cos(C*be),Math.sin(C*be));for(let C=3;C<360;C+=7.5){let U=$t(C,ht+3.2);e.stamp(v,U.x,U.z,f(C)+Math.PI/2,1,1.7);let B=$t(C+3.75,ht+2.6);e.stamp(m,B.x,B.z,f(C+3.75),1,1.7)}for(let C=0;C<360;C+=10){let U=$t(C,ht+27.6),B=$t(C,ht+25.2);e.put(u,Bt([U.x,1.7,U.z],[U.x,8.2,U.z],.1,5),Bt([U.x,8.2,U.z],[B.x,8.5,B.z],.07,4)),e.put(wt(1.5,1.7,1.9),Ot(.26,B.x,8.4,B.z,6)),e.light(B.x,8.3,B.z,Ve,.75,8.5,4.4),e.put(Pl(.6,.74,1),He(7.5,7.5,B.x,1.63,B.z))}let y=[We(1,"neem"),We(2,"gulmohar"),We(3,"neem"),We(4,"peepal"),We(5,"amaltas"),We(6,"ashoka"),We(7,"ashoka"),We(8,"peepal")],S=[We(1,"neem",!1,!0),We(2,"gulmohar",!1,!0),We(3,"neem",!1,!0),We(4,"peepal",!1,!0),We(5,"amaltas",!1,!0),We(6,"ashoka",!1,!0),We(7,"ashoka",!1,!0),We(8,"peepal",!1,!0)],g=[We(1,"neem",!0),We(2,"gulmohar",!0),We(5,"amaltas",!0)],b=[xr(1),xr(2),xr(3)];for(let C=1.5;C<360;C+=5){if(Fl(C)&&n()<.6||!o(C))continue;let U=$t(C+n()*2,ht+12.2+n()*1.2),B=n()*3|0;e.stamp(Fl(C)||n()<.55?y[[0,1,4][B]]:g[B],U.x,U.z,n()*6.28,Fl(C)?.62:.8+n()*.3,1.7)}for(let C=0;C<520;C++){let U=n()*360,B=ht+32+n()*n()*300,H=$t(U,B);Fl(U)||!as(H.x,H.z,8)||e.stamp(S[n()*8|0],H.x,H.z,n()*6.28,.9+n()*.7,1.5)}for(let C of[118,110,70,62,45,37,-23,-31,148,140,190,176]){if(!o(C))continue;let U=$t(C,ht+8+n()*4);e.stamp(b[n()*3|0],U.x,U.z,n()*6.28,1,1.7)}let M=[0,1,2,3,4,5].map(Dl),_=Array.from({length:14},(C,U)=>oo(U+1)),R=Cx(),E=(C,U,B,H)=>{for(let j=0;j<B;j++){let k=C+(n()-.5)*H,tt=$t(k,U+(n()-.5)*5);e.stamp(_[n()*14|0],tt.x,tt.z,n()*6.28,.92+n()*.2,1.7)}};for(let[C,U,B]of[[212,332,9.5],[-12,34,11],[136,196,12],[50,130,13]])for(let H=C;H<=U;H+=B){let j=$t(H+n()*2,ht+11.5);if(e.stamp(M[n()*6|0],j.x,j.z,f(H),1.15,1.7),E(H,ht+8.6,4+(n()*4|0),3.4),n()<.7){let k=$t(H+3.5,ht+18.2);e.stamp(R,k.x,k.z,f(H)+Math.PI/2,1.2,1.6)}}for(let C=0;C<360;C+=3.1)n()<.75&&E(C,ht+5+n()*6,1+(n()*2|0),2);for(let[C,U]of[[214,330],[-10,32],[140,192]])for(let B=C;B<U;B+=7.5)for(let H=1;H<12;H++){let j=H/12,k=$t(B+3+j*7.5,ht+3.2),tt=Math.sin(j*Math.PI)*1.1;e.spark(k.x,7.2-tt,k.z,[Dt,Dt,si,Cn,Ut][H%5],1.05,1)}let w=Ix();for(let C of i){let U=$t(C,ht+.6);e.stamp(w,U.x,U.z,f(C),1,0)}return e}function gf(){let i=In({cols:8,rows:4,lit:.22,seed:3}),t={u:8*3.3,v:24},e=$({map:i.map,emissiveMap:i.emissiveMap,glow:1.5,key:"palace"}),n=$({tint:14467222}),r=$({tint:10191192}),s=wt(.74,.43,.17),o=wt(1.9,1.35,.42),a=new Kt,l=ue(8),c=(g,b,M,_,R,{cupolas:E=!0,balconies:w=!0}={})=>{let C=b-g,U=(g+b)/2,B=R-_/2;a.put(e,pe(C,M,_,U,0,B,t,g*.031));for(let H=6;H<M-1;H+=6)a.put(n,At(C+.8,.42,_+.8,U,H-.2,B));a.put(n,At(C+1.1,.6,_+1.1,U,M-.1,B),G(C+.6,.14,.2,U,M+1.25,R+.2));for(let H=g+.4;H<=b-.2;H+=1.3)a.put(n,G(.2,.78,.2,H,M+.5,R+.2));for(let H=g+.15;H<=b;H+=3.3)a.put(n,G(.36,M,.28,H,0,R+.14));if(E)for(let H=g+2.6;H<b-1.5;H+=5.6)a.put(n,Ze(1.5,1.6,H,M+.5,R-1.5));if(w)for(let H=g+4.95;H<b-3;H+=9.9){a.put(n,G(2.9,.3,1.5,H,6.3,R+.75),G(2.5,.9,.12,H,6.6,R+1.44),G(3.1,.25,1.7,H,9.7,R+.85),Me(1.1,.9,H,9.95,R+.8,{seg:8,finial:.5}));for(let j of[-1.25,1.25])a.put(n,G(.16,3.1,.16,H+j,6.6,R+1.36));a.put(r,G(.5,.8,1.1,H-1,5.5,R+.55),G(.5,.8,1.1,H+1,5.5,R+.55)),l()<.55&&a.put(s,De(1.5,2.5,H,6.75,R+.33))}},u=(g,b,M,_=1)=>a.put(o,Ot(.32*_,g,b,M,8)),h=(g,b,M,_,R)=>{a.put(e,vt(R,_-M,g,M,b,8,t)),a.put(n,vt(R+.5,.5,g,_,b,8),Me(R*1.05,R*1.5,g,_+.5,b)),u(g,_+.5+R*1.5*1.3,b)};a.put(n,At(158,1.2,46,0,0,-14));for(let g=0;g<5;g++)a.put(n,G(16-g*.6,.24,1.1,12.5,.96-g*.24,6.2+g*1.1));c(-75,-67,7,6,3,{cupolas:!1,balconies:!1}),a.put(s,De(3.4,5.2,-71,1.2,3.06)),c(-67,-26,16,24,0);for(let[g,b,M,_]of[[-58,7,20,3.2],[-46,10,21.5,4.8],[-33,7,19.5,3.2]]){let R=1.5-b/2;a.put(e,pe(b,M,b,g,0,R,t,g*.07)),a.put(n,At(b+1,.6,b+1,g,M,R)),a.put(e,vt(_,_*.8,g,M+.6,R,8,t)),a.put(n,vt(_+.4,.4,g,M+.6+_*.8,R,8),Me(_*1.06,_*1.55,g,M+1+_*.8,R)),u(g,M+1+_*.8+_*1.55*1.3,R,_/3.2);for(let[E,w]of[[-1,1],[1,1],[-1,-1],[1,-1]])a.put(n,Ze(1.3,1.5,g+E*(b/2-.8),M+.6,R+w*(b/2-.8)));a.put(s,De(b*.34,4.4,g,12.6,1.56))}c(-26,-4,19,22,0);let d=-19.5,p=-2.5;for(let[g,b,M]of[[8.6,0,30],[7.6,30.8,38],[6.8,38.7,45]]){a.put(e,pe(g,M-b,g,d,b,p,t,.2+b)),a.put(n,At(g+2.6,.75,g+2.6,d,M,p));for(let _ of[-1,1])a.put(r,G(.5,.9,.9,d+_*(g/2+.7),M-.9,p+g/2+.6),G(.9,.9,.5,d+_*(g/2+.6),M-.9,p+g/2+.7));for(let _=-g/2-1.1;_<=g/2+1.1;_+=1.1)a.put(n,G(.16,.8,.16,d+_,M+.75,p+g/2+1.2));a.put(s,De(g*.26,3.4,d,M-5.6,p+g/2+.06))}for(let[g,b]of[[-1,-1],[1,-1],[-1,1],[1,1]])a.put(n,vt(.8,3.6,d+g*4.1,45.7,p+b*4.1,8),Me(.9,1.5,d+g*4.1,49.3,p+b*4.1,{seg:8})),u(d+g*4.1,51.4,p+b*4.1,.6);a.put(e,vt(3.2,5.3,d,45.7,p,8,t)),a.put(n,vt(4.3,.6,d,51,p,8),Me(3.3,4.6,d,51.6,p)),u(d,57.7,p,1.2),a.put(n,Bt([d,57.6,p],[d,62.5,p],.07)),a.put(wt(1.6,.5,.2),G(2.6,1.5,.05,d+1.35,60.8,p)),c(-4,30,21,34,5,{balconies:!1}),a.put(e,pe(19,7,20,12.5,21,-5,t,.4)),a.put(n,At(20.2,.6,21.2,12.5,28,-5)),a.put(s,De(8.4,15,12.5,1.2,5.08),De(2.6,5.6,5.2,13,5.08),De(2.6,5.6,19.8,13,5.08),De(2.2,4.4,1.2,2,5.08),De(2.2,4.4,23.8,2,5.08)),a.put(n,G(11,.5,2.2,12.5,12.2,6.1));for(let g=-5.2;g<=5.2;g+=1.3)a.put(n,G(.18,.9,.18,12.5+g,12.7,7.1));for(let g of[-5.2,5.2])a.put(n,vt(.6,11,12.5+g,1.2,6.4,10));for(let[g,b]of[[-1,-1],[1,-1],[-1,1],[1,1]])a.put(n,Ze(2.6,3,12.5+g*8,28.6,-5+b*8.4));a.put(e,vt(6.8,5.4,12.5,28.6,-5,8,t)),a.put(n,vt(7.6,.7,12.5,34,-5,8),Me(6.9,9.4,12.5,34.7,-5,{seg:28,swell:.12})),u(12.5,47.2,-5,1.6);for(let g=0;g<8;g++){let b=(g+.5)*Math.PI/4;a.put(n,Ze(1.5,1.5,12.5+Math.cos(b)*7.9,34.7,-5+Math.sin(b)*7.9))}h(.6,3.6,0,22.5,2.6),h(24.6,3.6,0,22.5,2.6),c(30,42,16.5,22,0),c(42,75,19,26,2,{cupolas:!1,balconies:!1});for(let[g,b]of[[47.2,2.5],[58.2,3.3],[69.2,2.5]])a.put(s,De(6.2,11.5,g,1.2,2.08)),a.put(n,G(7.4,.5,.5,g,13.4,2.3)),a.put(e,vt(b,b*.75,g,19.5,-2,8,t)),a.put(n,vt(b+.4,.4,g,19.5+b*.75,-2,8),Me(b*1.05,b*1.5,g,19.9+b*.75,-2)),u(g,19.9+b*.75+b*1.5*1.32,-2,b/3);for(let g of[42.8,52.7,63.7,74.2])a.put(n,Ze(1.8,2,g,19.5,.4));h(-67,.4,0,17.5,1.6),h(75,2.4,0,20.5,1.7);let x=$({tint:2906682}),v=$({tint:12035980}),m=$({tint:2050604}),f=$({tint:7297604}),y=wt(.35,.6,.9),S=$({tint:3355965});a.put(x,At(160,.3,30,0,1.36,24)),a.put(v,At(7,.34,30,12.5,1.36,24),At(150,.34,3.4,0,1.36,11.4));for(let g=12;g<=37;g+=5)for(let b of[-4.3,4.3])a.put(S,G(.16,.9,.16,12.5+b,1.7,g)),a.put(wt(1.8,1.4,.8),Ot(.16,12.5+b,2.7,g,6)),a.light(12.5+b,2.7,g,Ut,.5,3.2,1.4);for(let g of[-32,52]){a.put(v,vt(5.2,.7,g,1.6,24,16),vt(1.1,1.3,g,2.3,24,10)),a.put(y,Px(new fn(4.7,20)).rotateX(-Math.PI/2).translate(g,2.32,24)),a.light(g,3.2,24,Ve,.8,5);for(let b=0;b<14;b++)a.spark(g+(l()-.5)*1.4,3.6+l()*3.6,24+(l()-.5)*1.4,Ve,.9,1)}{let g=[xr(4),xr(5),xr(6)],b=0;for(let M=-70;M<=70;M+=14)if(Math.abs(M-12.5)>8){let _=17+(Math.abs(M)%28?0:3);a.stamp(g[b++%3],M,_,b*1.3,1,1.6)}}for(let g=-76;g<=76;g+=4)Math.abs(g-12.5)>5&&a.put(m,G(3.6,1.3,1.5,g,1.6,38.2));for(let g of[-5.2,5.2])a.put(n,G(1.8,5.4,1.8,12.5+g,1.5,38.4),G(2.3,.4,2.3,12.5+g,6.9,38.4),Me(.9,1.1,12.5+g,7.3,38.4,{seg:8})),a.put(wt(1.8,1.4,.8),Ot(.34,12.5+g,6.3,39.5,8)),a.light(12.5+g,6.3,39.8,Ut,.8,5,2.4);for(let g=-72;g<=72;g+=9)a.light(g,.6,20,Ut,.3,12);return a.light(d,24,14,Ut,.4,13).light(d,40,11,Ut,.36,10).light(d,52,9,Ut,.29,8).light(12.5,30,16,Ut,.5,13).light(12.5,40,12,Ut,.32,10).light(58,20,14,Ut,.29,9).light(-46,21,13,Ut,.29,9).light(-58,20,12,Ut,.22,8).light(-33,20,12,Ut,.22,8),a}var Px=i=>{let t=i.attributes.uv;for(let e=0;e<t.count;e++)t.setXY(e,.004,.004);return i};var Xi=()=>wt(1.9,1.35,.42),xf=()=>wt(1.8,1.4,.8);function vf(){let i=In({cols:6,rows:2,lit:.16,seed:9,stone:[208,196,172],opening:.36,jali:.5}),t={u:6*4.4,v:2*8.5},e=$({map:i.map,emissiveMap:i.emissiveMap,glow:1.3,key:"kirti"}),n=$({tint:14274747}),r=wt(.74,.43,.17),s=new Kt;s.put(e,pe(40,17,26,0,0,-13,t),pe(22,5,16,0,17,-12,t,.3)),s.put(n,At(42,.7,28,0,8.3,-13),At(43,.8,29,0,17,-13),At(24,.6,18,0,22,-12),At(46,1,32,0,0,-13));for(let l=-20.6;l<=20.6;l+=1.4)s.put(n,G(.2,.8,.2,l,17.8,1.1));s.put(n,G(42,.14,.22,0,18.6,1.1));for(let l=0;l<6;l++)s.put(n,G(12-l*.5,.26,1,0,.9-l*.2,1+l));s.put(r,De(6.4,11,0,1,.08,.5)),s.put(n,G(9,.6,2.4,0,12.4,1.2));for(let l of[-3.9,3.9])s.put(n,vt(.45,11.4,l,1,1.9,8));for(let l of[-1,1]){let c=l*14.2;s.put(n,At(10.4,1.4,10.4,c,17.8,-6));for(let[u,h]of[[-1,-1],[1,-1],[-1,1],[1,1],[0,1],[0,-1],[1,0],[-1,0]])s.put(n,G(.7,5,.7,c+u*4.2,19.2,-6+h*4.2));s.put(n,At(12.4,.7,12.4,c,24.2,-6),Me(4.6,3.6,c,24.9,-6,{seg:12,swell:.02})),s.put(Xi(),Ot(.4,c,29.9,-6,8)),s.put(r,G(5,.2,5,c,19.3,-6)),s.light(c,21,-6,Dt,.6,5);for(let u of[-1,1])s.put(n,Ze(1.6,1.7,l*20,17.8,-13+u*11.5))}let o=[],a=$({tint:13222578});for(let l=0;l<=22;l++){let c=l/22,u=Math.max(.5,9.2*(1-Math.pow(c,1.9)*.93));o.push(new st(u,20*c)),l%3===2&&l<21&&o.push(new st(u*1.06,20*c+.05),new st(u*1.06,20*c+.4),new st(u*.99,20*c+.45))}s.put(a,lu(o,16,.085).translate(0,22.6,-12),lu([[.02,0],[1.7,.1],[2.4,.6],[1.7,1.1],[.02,1.2]].map(l=>new st(...l)),12,.16).translate(0,42.5,-12)),s.put(n,Ot(1,0,44.5,-12));for(let l=0;l<8;l++){let c=l*Math.PI/4;s.put(n,Me(1.3,2.2,Math.cos(c)*8.2,22.6,-12+Math.sin(c)*8.2,{seg:8}))}s.put(Xi(),Zt(new An(1,.16,6,14,Math.PI)).rotateZ(Math.PI).translate(0,47.2,-12),Ot(.75,0,48.3,-12),Ot(.5,0,46.2,-12,8));for(let l=-16;l<=16;l+=8)s.light(l,.6,16,Ut,.34,15);return s.light(0,26,9,Ut,.6,13).light(0,38,4,Ut,.4,9).light(-14,19,4,Ut,.35,7).light(14,19,4,Ut,.35,7),s}function yf(){let i=In({cols:6,rows:2,lit:.5,seed:17,stone:[228,206,160],opening:.46,pointed:!0,jali:.5}),t={u:6*2.5,v:2*5.6},e=$({map:i.map,emissiveMap:i.emissiveMap,glow:1.4,key:"mandvi"}),n=$({tint:15392708}),r=wt(.74,.43,.17),s=$({tint:7031350}),o=new Kt;o.put(e,pe(34,10.5,34,0,0,-17,{u:34/3,v:21},.02)),o.put(n,At(35.5,1.6,35.5,0,10.5,-17));for(let l of[-10.5,0,10.5]){o.put(r,De(7.6,8.2,l,.3,.08,.55));let c=De(7.6,8.2,0,.3,0,.55).rotateY(Math.PI/2).translate(17.08,0,-17+l);o.put(r,c,c.clone().rotateY(Math.PI).translate(0,0,-34))}for(let l=-17;l<=17;l+=1.7)o.put(n,G(.4,.5,.6,l,9.9,.3));let a=12.1;for(let[l,c]of[[21,6.2],[14,5.6],[7,4.8]]){o.put(e,pe(l,c,l,0,a,-17,{u:t.u,v:c*2},.04)),o.put(n,At(l+4.4,.5,l+4.4,0,a+c,-17));for(let u=-l/2-1.6;u<=l/2+1.6;u+=1.3)o.put(s,G(.1,1,.1,u,a,-17+l/2+1.7));o.put(s,G(l+3.4,.1,.1,0,a+1,-17+l/2+1.7)),a+=c+.5}o.put(n,G(2.6,2.6,2.6,0,a,-17),Me(1.7,1.6,0,a+2.6,-17,{seg:8,swell:0})),o.put(Xi(),Ot(.3,0,a+5,-17,8)),o.put(xf(),Zt(new fn(1.25,20)).translate(0,a-2.9,-13.45)),o.put(s,G(.1,.9,.05,0,a-2.9,-13.4),G(.7,.1,.05,.3,a-2.9,-13.4));for(let l of[-2.8,2.8])o.put(s,Bt([l,a-8,-15],[l,a-4.6,-15],.05)),o.put(wt(1.5,.3,.2),G(1.3,.8,.04,l+.7,a-5.4,-15));o.put(n,vt(3.3,13.4,16.2,0,-1,14),vt(3.7,.6,16.2,13.4,-1,14),Ze(3.2,2.4,16.2,14,-1));for(let l of[-12,0,12])o.light(l,.6,14,Ut,.36,14);return o.light(0,16,9,Ut,.5,12).light(22,3,-6,Ut,.4,12).light(-22,3,-17,Ut,.3,12).light(0,4,-4,Dt,.7,9),o}function Mf(){let i=In({cols:8,rows:2,lit:.26,seed:15,stone:[196,150,112],opening:.46,pointed:!0,jali:.1}),t={u:8*3.4,v:14},e=$({map:i.map,emissiveMap:i.emissiveMap,glow:1.4,key:"nyay"}),n=$({tint:14205600}),r=$({tint:9132612}),s=wt(.74,.43,.17),o=new Kt;o.put(e,pe(72,14,24,0,0,-12,t),pe(18,18.5,28,0,0,-11,t,.2)),o.put(n,At(74,.6,26,0,6.9,-12),At(75,.8,27,0,14,-12),At(20,.8,30,0,18.5,-11),At(76,1,30,0,0,-12));for(let a=-36;a<=36;a+=1.5)Math.abs(a)>10&&o.put(n,G(.2,.8,.2,a,14.8,.4));o.put(s,De(7,10.5,0,1,3.08,.5),De(2.4,4.6,-5.6,9.4,3.08,.5),De(2.4,4.6,5.6,9.4,3.08,.5));for(let a=0;a<5;a++)o.put(n,G(13-a*.6,.24,1,0,.8-a*.2,3.6+a));o.put(e,vt(6.4,4.4,0,19.3,-11,12,t)),o.put(n,vt(7,.6,0,23.7,-11,12),Me(6.4,7.2,0,24.3,-11,{seg:24,swell:.03})),o.put(Xi(),Ot(.5,0,33.8,-11,8));for(let a of[-1,1])o.put(e,pe(9,20,9,a*33,0,-3.5,t,.6)),o.put(n,At(10.2,.6,10.2,a*33,20,-3.5)),o.put(r,Ye(6.4,6,a*33,20.6,-3.5,4)),o.put(Xi(),Ot(.34,a*33,27,-3.5,8)),o.put(e,vt(2.6,2.4,a*17,14.8,-8,8,t)),o.put(n,Me(2.7,3,a*17,17.2,-8,{seg:12}));for(let a=-32;a<=32;a+=8)o.light(a,.6,15,Dt,.34,14);return o.light(0,22,8,Dt,.55,11).light(-33,18,8,Dt,.3,8).light(33,18,8,Dt,.3,8),o}function Sf(){let i=In({cols:8,rows:3,lit:.24,seed:21,stone:[178,104,78],shadow:[40,24,20],opening:.44,jali:.15}),t={u:8*3.2,v:3*5.4},e=$({map:i.map,emissiveMap:i.emissiveMap,glow:1.4,key:"arts"}),n=$({tint:14733230}),r=$({tint:11823696}),s=wt(.74,.43,.17),o=new Kt;o.put(e,pe(30,19,30,0,0,-15,t),pe(24,11,20,-27,0,-12,t,.3),pe(24,11,20,27,0,-12,t,.5)),o.put(n,At(31.4,.7,31.4,0,19,-15),At(25.2,.6,21.2,-27,11,-12),At(25.2,.6,21.2,27,11,-12),At(82,1,34,0,0,-14));for(let a of[5.4,10.8])o.put(n,At(30.8,.4,30.8,0,a,-15));o.put(n,At(24.8,.4,20.8,-27,5.4,-12),At(24.8,.4,20.8,27,5.4,-12)),o.put(s,De(6,12,0,1,.08,.4)),o.put(e,vt(12,8,0,19.7,-15,16,t));for(let a of[22.3,25])o.put(n,vt(12.3,.4,0,a,-15,16));o.put(n,vt(13,.8,0,27.7,-15,16),Me(12,13,0,28.5,-15,{seg:32,swell:.02,finial:.2})),o.put(Xi(),Ot(.7,0,44.6,-15,8));for(let[a,l]of[[-1,-1],[1,-1],[-1,1],[1,1]]){let c=a*13.4,u=-15+l*13.4;o.put(r,vt(2.3,25,c,0,u,8)),o.put(n,vt(2.8,.5,c,25,u,8),Ze(3,2.6,c,25.5,u))}for(let a of[-1,1]){o.put(r,vt(2,15,a*38.5,0,-3,8)),o.put(n,Me(2.2,2.6,a*38.5,15,-3,{seg:10}));for(let l=16;l<=38;l+=5.5)o.put(n,Ze(1.4,1.5,a*l,11.6,-3.2))}for(let a=-36;a<=36;a+=9)o.light(a,.6,15,Dt,.36,15);return o.light(0,24,8,Dt,.6,13).light(0,36,4,Dt,.5,12).light(-13,26,2,Dt,.3,7).light(13,26,2,Dt,.3,7),o}function bf(){let i=In({cols:6,rows:1,lit:.5,seed:31,stone:[170,96,74],shadow:[34,22,18],opening:.56}),t={u:18,v:6},e=$({map:i.map,emissiveMap:i.emissiveMap,glow:1.5,key:"clock"}),n=$({tint:14865076}),r=$({tint:11561554}),s=$({tint:7293504}),o=new Kt;o.put(e,pe(34,6,14,0,0,-7,t)),o.put(n,At(35,.5,15,0,6,-7)),o.put(s,G(33,1.6,13,0,6.5,-7));let a=0;for(let[l,c]of[[8,16],[7.2,8],[6.4,6]]){o.put(r,At(l,c,l,0,a,-7)),o.put(n,At(l+1.4,.6,l+1.4,0,a+c,-7));for(let u of[-1,1])o.put(n,G(.5,c,.5,u*(l/2-.1),a,-7+l/2-.1));a+=c+.6}for(let[l,c,u]of[[0,1,0],[1,0,Math.PI/2],[-1,0,-Math.PI/2]]){let h=Zt(new fn(2.1,24)).rotateY(u).translate(l*3.25,27.8,-7+c*3.25);o.put(wt(1.7,1.5,1.1),h),o.put(s,G(.14,1.5,.14,l*3.3,27.8,-7+c*3.3),Zt(new ge(1.1,.14,.14)).rotateY(u).translate(l*3.3+(c?.45:0),27.9,-7+c*3.3+(l?-l*.45:0)))}o.put(s,Ye(5,6.4,0,a,-7,4)),o.put(Xi(),Ot(.4,0,a+6.7,-7,8)),o.put(n,Bt([0,a+6.6,-7],[0,a+9.4,-7],.06));for(let l of[-12,0,12])o.light(l,.6,9,Ut,.34,11);return o.light(0,14,6,Dt,.5,11).light(0,26,5,Ut,.5,8).light(0,3,1.5,Ut,.6,7,2.2),o}function Ef(){let i=$({tint:14015202}),t=$({tint:12175062}),e=new Kt;e.put(i,At(30,1.2,30,0,0,-15),At(24,5.4,24,0,1.2,-15),At(26,.5,26,0,6.6,-15));let n=new or(10,2),r=n.attributes.position;for(let o=0;o<r.count;o++)r.getY(o)<0&&r.setY(o,0);n.computeVertexNormals(),Zt(n);let s=n.toNonIndexed();s.computeVertexNormals(),e.put(t,s.scale(1,.92,1).translate(0,7.1,-15)),e.put(Xi(),Ot(.55,0,16.9,-15,8),Ye(.3,1.6,0,16.9,-15,6));for(let o=0;o<4;o++)e.put(i,G(8-o*.4,.3,1,0,.9-o*.3,.6+o));e.put(wt(.9,1.1,1.4),De(3.2,4.4,0,1.2,-2.94));for(let[o,a]of[[-13,-2],[13,-2],[-13,-28],[13,-28]])e.put(i,vt(.25,4.6,o,1.2,a,6)),e.put(wt(1.2,1.5,1.9),Ot(.4,o,6.2,a,8)),e.light(o,6.2,a,Ve,.9,6,2.6);for(let o of[-9,0,9])e.light(o,.8,4,Ve,.5,12);return e.light(0,12,2,Ve,.8,11).light(-12,9,-15,Ve,.4,9).light(12,9,-15,Ve,.4,9),e}function _f(){let i=$({tint:12035980}),t=$({tint:3354926}),e=$({tint:3355965}),n=new Kt;n.put(i,At(7,.6,10,0,0,0),G(3.6,5,6.6,0,.6,0),G(4.4,.5,7.4,0,5.6,0),G(3.2,.5,6,0,6.1,0));let r=6.6,s=o=>n.put(t,o);s(Zt(new en(1,12,10)).scale(.95,1.05,2.3).translate(0,r+3.2,0)),s(Bt([0,r+3.7,1.7],[0,r+5.5,2.8],.55,8)),s(Zt(new en(.5,8,6)).scale(.8,.85,1.5).translate(0,r+5.7,3.4));for(let[o,a,l]of[[-.55,1.5,.7],[.55,1.5,0],[-.55,-1.6,0],[.55,-1.6,0]])s(Bt([o,r+2.6,a],[o,r+1.3+l,a+(l?.7:.1)],.24,6)),s(Bt([o,r+1.3+l,a+(l?.7:.1)],[o,r+l*1.2,a+(l?.3:0)],.19,6));s(Bt([0,r+3.6,-2.1],[0,r+1.9,-2.9],.2,6)),s(Bt([0,r+4,.1],[0,r+5.9,0],.5,8)),s(Ot(.42,0,r+6.5,.05,8)),s(Zt(new en(.5,8,6)).scale(1,.5,1).translate(0,r+6.85,0)),s(Bt([-.5,r+5.5,.1],[-.6,r+4.4,1.2],.15,5)),s(Bt([.5,r+5.5,.1],[.6,r+4.4,1.2],.15,5));for(let o=0;o<16;o++){let a=o*Math.PI/8,l=Math.cos(a)*6.4,c=Math.sin(a)*6.4;n.put(e,G(.12,1.1,.12,l,.6,c))}n.put(e,Zt(new An(6.4,.05,4,32)).rotateX(Math.PI/2).translate(0,1.7,0));for(let[o,a]of[[-4.6,6],[4.6,6],[-4.6,-6],[4.6,-6]])n.put(e,G(.14,3.4,.14,o,.6,a)),n.put(xf(),Ot(.3,o,4.2,a,8)),n.light(o,4.2,a,Ut,.7,5,2);return n.light(0,2,8,Dt,.7,8).light(0,2,-8,Dt,.4,8),n}function cu(i=4){let t=$({tint:6969414}),e=Wi([30,70,46],"in"),n=e,r=$({tint:10524292}),s=new Kt,o=ue(i);s.put(r,vt(8.5,1.1,0,0,0,20),vt(9.3,.3,0,1.1,0,20));for(let a=0;a<7;a++){let l=o()*6.28,c=a?1.2+o()*3:0,u=Math.cos(l)*c,h=Math.sin(l)*c;s.put(t,Bt([u,1.2,h],[u*1.9+(o()-.5)*2,11+o()*3,h*1.9+(o()-.5)*2],a?.5+o()*.5:1.3,7))}for(let a=0;a<9;a++){let l=a/9*6.28+o(),c=9+o()*9;s.put(t,Bt([Math.cos(l)*2,10,Math.sin(l)*2],[Math.cos(l)*c,11.5+o()*3,Math.sin(l)*c],.34,5))}for(let a=0;a<9;a++){let l=o()*6.28,c=3+o()*11;s.put(e,bi(4.6+o()*2,Math.cos(l)*c,14.5+o()*3,Math.sin(l)*c,a,.6,3.4))}s.put(oi([44,100,62],"a"),so(0,16.6,0,20,6.4,20,130,i,4.6)),s.put(oi([58,116,70],"b"),so(0,17.6,0,15,5.4,15,60,i+3,4.2)),s.put(Qe(),He(24,24,0,0,0));for(let a=0;a<46;a++){let l=o()*6.28,c=5+o()*13,u=Math.cos(l)*c,h=Math.sin(l)*c,d=11+o()*2;s.put(t,Bt([u,d,h],[u+(o()-.5)*.6,c>9.5?0:1.3+o()*5,h+(o()-.5)*.6],.05+o()*.07,4))}for(let a=0;a<16;a++){let l=o()*6.28,c=3+o()*13,u=Math.cos(l)*c,h=Math.sin(l)*c,d=6.5+o()*3.5;s.put(t,Bt([u,d,h],[u,11.5,h],.03,3)),s.put(wt(2,1.3,.5),Ot(.24,u,d,h,6)),s.light(u,d,h,Dt,.5,4.2,1.9)}return s.light(0,2.4,7,Dt,.5,8).light(0,2.4,-7,Dt,.4,8),s}function wf(){let i=$({tint:2906682}),t=$({tint:12035980}),e=$({tint:14866626}),n=$({tint:3158586}),r=$({tint:4864556}),s=[wt(1.6,.5,.6),wt(1.7,1.3,.3),wt(1,.5,1.5)],o=new Kt;o.put(i,vt(34,.3,0,0,0,40)),o.put(t,vt(27.2,.36,0,0,0,40)),o.put(i,vt(24.8,.42,0,0,0,40));for(let a=0;a<72;a++){let l=a/72*6.283;o.put(r,Zt(new ge(2,.12,.34)).rotateY(-l).translate(Math.cos(l)*26,.42,Math.sin(l)*26))}for(let a of[25.4,26.6])o.put(n,Zt(new An(a,.06,4,96)).rotateX(Math.PI/2).translate(0,.52,0));o.put(e,vt(6.4,1.1,0,.4,0,8),vt(7.4,.4,0,6.2,0,8),Me(6.6,3.4,0,6.6,0,{seg:16,swell:.02})),o.put(wt(1.9,1.35,.42),Ot(.34,0,11.4,0,8));for(let a=0;a<8;a++){let l=(a+.5)*Math.PI/4;o.put(e,vt(.24,4.7,Math.cos(l)*5.6,1.5,Math.sin(l)*5.6,8)),o.put(wt(1.8,1.4,.8),Ot(.22,Math.cos(l)*5.6,5.6,Math.sin(l)*5.6,6))}o.light(0,5,0,Dt,1.1,8,3).light(0,3,9,Dt,.5,8),o.put(i,Zt(new ye(6,6,.5,28)).rotateX(.5).translate(0,1.5,15.5));for(let a=0;a<12;a++){let l=a/12*6.283;o.put(s[a%3],Ot(.34,Math.sin(l)*4.8,1.75+Math.cos(l)*2.3,15.9-Math.cos(l)*4.2+4.1,6))}o.put(e,Zt(new ge(.2,.1,3.4)).rotateX(.5).translate(0,2.4,14.4),Zt(new ge(2.4,.1,.2)).rotateX(.5).translate(1.2,1.8,15.6)),o.light(0,5,20,Ut,.9,8,3);for(let a=0;a<16;a++){let l=a/16*6.283,c=Math.cos(l)*31,u=Math.sin(l)*31;o.put(n,Bt([c,.3,u],[c,4.6,u],.07,4)),o.put(wt(1.8,1.4,.8),Ot(.26,c,4.8,u,6)),o.light(c,4.8,u,Ut,.7,5.5,3.2)}return o}function Af(){let i=new $e,t=[];return[[12597547,1],[3046747,0],[14262305,0],[3104680,0]].forEach(([e,n],r)=>{let s=new $e,o=new se({color:new yt(e).multiplyScalar(.7)}),a=new se({color:15260864}),l=new se({color:1381914}),c=new zt(new ge(1.6,n?1.5:.9,3.2),o);if(c.position.y=n?1.25:.95,s.add(c),n){let u=new zt(new ye(.6,.6,1.8,10).rotateX(Math.PI/2),o);u.position.set(0,1.5,1.9),s.add(u);let h=new zt(new ye(.22,.16,.9,8),l);h.position.set(0,2.5,2.3),s.add(h);let d=new zt(new en(.2,8,6),new se({color:new yt(3,2.6,1.8)}));d.position.set(0,1.6,2.9),s.add(d)}else{let u=new zt(new ge(1.8,.12,3.3),a);u.position.y=2.6,s.add(u);for(let[d,p]of[[-.75,-1.5],[.75,-1.5],[-.75,1.5],[.75,1.5]]){let x=new zt(new ge(.08,1.3,.08),a);x.position.set(d,2,p),s.add(x)}let h=new zt(new ge(1.5,.08,3),new se({color:new yt(2.4,1.7,.8)}));h.position.y=2.5,s.add(h)}for(let u of[-1,1]){let h=new zt(new ye(.36,.36,1.8,10).rotateZ(Math.PI/2),l);h.position.set(0,.5,u),s.add(h)}i.add(s),t.push(s)}),{g:i,cars:t}}var Fx=i=>{let t=(i%360+360)%360;return t>204&&t<336};function Tf(){let i=new Kt,t=ue(5),e={u:8*3.3,v:8*3.2},n=[[84,90,110],[104,94,84],[72,84,104],[112,104,96]].map((M,_)=>{let R=Cl({seed:40+_,lit:.13+_*.04,wall:M});return $({map:R.map,emissiveMap:R.emissiveMap,glow:1.3,key:"block"+_})}),r=zn($({tint:4869208})),s=zn($({tint:1842468})),o=zn($({tint:6975356})),a=zn($({tint:3158586})),l=[wt(1.9,1.2,.5),wt(1.8,.35,.3),wt(.4,1.6,1.4),wt(1.7,.5,1.1),wt(1.5,1.6,1.8),wt(.5,1.5,.5)],c=[Dt,Al,Cn,si,Ve,Cn],u=0;for(let M=0;M<620&&u<430;M++){let _=t()*360,R=t()<.36,E=R?ht+32+t()*10:ht+44+t()*t()*420,w=$t(_,E);if(Fx(_)||!as(w.x,w.z,12))continue;let C=10+t()*22,U=9+t()*16,B=R?7+t()*9:6+t()*t()*(E>ht+130?52:24),H=t()*4|0,j=Math.atan2(-Math.cos(_*be),Math.sin(_*be))+(t()-.5)*.4,k=new Kt;if(k.put(n[H],pe(C,B,U,0,0,-U/2,e,t()*3)),k.put(r,G(C+.5,.5,U+.5,0,B,-U/2)),t()<.7){let tt=(t()-.5)*(C-4),K=-U/2+(t()-.5)*(U-4);k.put(o,G(2.2,1.1,2.2,tt,B+.5,K)),k.put(s,vt(.9,1.5,tt,B+1.6,K,10))}if(t()<.6&&k.put(n[H],G(3,2.6,3.4,(t()-.5)*(C-5),B+.5,-U/2+(t()-.5)*(U-5))),t()<.3){let tt=(t()-.5)*(C-2);k.put(a,Bt([tt,B,-U/2],[tt,B+4+t()*3,-U/2],.04,3))}if(t()<.25)for(let tt=0;tt<3;tt++)k.put(o,G(.9,.6,.5,-C/2+2+tt*3,3+tt*3.2,.25));if(R||t()<.2){let tt=t()*6|0;k.put(wt(1.5,1.1,.6),G(C-1.2,2.3,.08,0,.4,.05)),k.put(r,G(C,.2,1.6,0,3,.8));for(let K=0;K<1+(t()*3|0);K++)k.put(l[(tt+K)%6],G(2.4+t()*3,.9,.12,(t()-.5)*(C-5),3.3+t()*1.2,.12));k.light(0,2,2.6,c[tt],.7,7).light(0,2,2.6,Dt,.5,9)}i.stamp(k,w.x,w.z,j,1,1.5),u++,t()<.2&&i.light(w.x+(t()-.5)*14,4.5,w.z+(t()-.5)*14,Ut,.5,9,3.4)}let h=$({tint:13351322}),d=$({tint:14672614}),p=$({tint:4160092}),x=wt(1.9,1.35,.42),v=$({tint:9080988}),m=(M,_,R)=>{let E=$t(M,_);as(E.x,E.z,6)&&i.stamp(R(),E.x,E.z,Math.atan2(-Math.cos(M*be),Math.sin(M*be)),1,1.5)},f=()=>{let M=new Kt,_=[];for(let R=0;R<=12;R++){let E=R/12;_.push(new st(Math.max(.3,3.4*(1-Math.pow(E,1.7)*.93)),11*E))}return M.put(h,G(8,5,8,0,0,0),Zt(new Bi(_,10)).translate(0,5,0),G(5,4,5,0,0,5.5),Ye(3.6,3,0,4,5.5,4)),M.put(x,Ot(.4,0,16.4,0,8)),M.put(wt(1.7,.6,.2),G(1.2,.8,.04,.7,17.6,0)),M.put(v,Bt([0,16.4,0],[0,18.4,0],.04,3)),M.light(0,3,9,Dt,.7,9).light(0,9,5,Dt,.5,8,3),M},y=()=>{let M=new Kt;return M.put(d,G(12,6,12,0,0,0),vt(4.2,1.2,0,6,0,12),Me(4.2,4.6,0,7.2,0,{seg:16,swell:.06}),vt(1,19,7.5,0,5,8),vt(1.5,.5,7.5,13,5,8),vt(1.5,.5,7.5,17,5,8)),M.put(p,Ye(1.2,3,7.5,19,5,8)),M.put(x,Ot(.3,7.5,22.2,5,6),Ot(.34,0,12.6,0,6)),M.put(wt(.5,1.7,.8),G(.5,1.2,.5,7.5,14,5)),M.light(0,3,9,Cn,.5,9).light(7.5,15,5,Cn,.6,6,3.2),M},S=()=>{let M=new Kt;for(let[_,R]of[[-2.6,-2.6],[2.6,-2.6],[-2.6,2.6],[2.6,2.6]])M.put(d,Bt([_,0,R],[_*.8,17,R*.8],.32,6));for(let _ of[6,12])M.put(d,G(5.4,.3,.3,0,_,2.4),G(5.4,.3,.3,0,_,-2.4),G(.3,.3,5.4,2.4,_,0),G(.3,.3,5.4,-2.4,_,0));return M.put(d,vt(4.6,5,0,17,0,14,null,5.2),Ye(5.4,1.6,0,22,0,14)),M.light(0,2,6,Ut,.4,9),M},g=()=>{let M=new Kt;for(let[_,R]of[[-1.5,-1.5],[1.5,-1.5],[-1.5,1.5],[1.5,1.5]])M.put(v,Bt([_,0,R],[_*.2,44,R*.2],.09,4));for(let _=4;_<44;_+=5){let R=1.5*(1-_/55);M.put(v,Bt([-R,_,-R],[R,_+5,-R],.05,3),Bt([R,_,R],[-R,_+5,R],.05,3),Bt([R,_,-R],[R,_+5,R],.05,3),Bt([-R,_,R],[-R,_+5,-R],.05,3))}for(let _ of[30,36,40])M.put(d,G(.5,2,.3,.9,_,0),G(.5,2,.3,-.9,_,0));return M.spark(0,45,0,Al,5,2).spark(0,24,0,Al,3.4,2),M},b=M=>()=>{let _=new Kt,R=ue(M),E=R()*6|0;for(let w of[-4.5,4.5])_.put(v,Bt([w,0,0],[w,13,0],.16,5));return _.put(v,G(11.4,5.6,.3,0,8.4,-.2)),_.put(wt(.5,.52,.6),G(11,5.2,.1,0,8.6,.05)),_.put(l[E],G(11,1.6,.12,0,8.6,.08),G(3,3.4,.12,-3.2,10.4,.08)),_.light(0,11,5,c[E],.8,10).light(0,9,4,Ve,.5,9),_};for(let[M,_]of[[20,96],[74,150],[112,170],[146,110],[176,84],[60,240],[128,250],[-12,130]])m(M,ht+_,f);for(let[M,_]of[[32,128],[100,220],[166,150],[-24,100]])m(M,ht+_,y);for(let[M,_]of[[24,200],[140,200],[84,280]])m(M,ht+_,S);for(let[M,_]of[[40,170],[118,130],[158,230],[4,210],[78,330]])m(M,ht+_,g);return[[26,34],[64,36],[120,34],[150,60],[186,36],[-4,34],[-30,64],[96,150]].forEach(([M,_],R)=>m(M,ht+_,b(R+3))),i}var Ei={cols:96,rows:246,aspect:.38971,height:"data:image/png;base64,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",mask:"data:image/png;base64,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",shade:"data:image/jpeg;base64,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"};var uu=i=>new Promise(t=>{let e=new Image;e.onload=()=>t(e),e.src=i});async function Rf(i){let[t,e,n]=await Promise.all([uu(Ei.height),uu(Ei.mask),uu(Ei.shade)]),r=document.createElement("canvas");r.width=Ei.cols,r.height=Ei.rows;let s=r.getContext("2d",{willReadFrequently:!0});s.drawImage(t,0,0);let o=s.getImageData(0,0,r.width,r.height).data,a=31,l=a*Ei.aspect,c=2.2,u=Ei.cols,h=Ei.rows,d=(g,b)=>o[(Math.max(0,Math.min(h-1,b))*u+Math.max(0,Math.min(u-1,g)))*4]/255,p=[],x=[],v=[];for(let g=0;g<h;g++)for(let b=0;b<u;b++)p.push((b/(u-1)-.5)*l,(1-g/(h-1))*a,d(b,g)*c),x.push(b/(u-1),1-g/(h-1));for(let g=0;g<h-1;g++)for(let b=0;b<u-1;b++){let M=g*u+b;v.push(M,M+u,M+1,M+1,M+u,M+u+1)}let m=new xe;m.setAttribute("position",new Gt(p,3)),m.setAttribute("uv",new Gt(x,2)),m.setIndex(v);let f=g=>{let b=new tn(g);return b.needsUpdate=!0,b.anisotropy=8,b.colorSpace=qn,b},y=new ve({uniforms:cn.merge([pt.fog,{shade:{value:null},mask:{value:null}}]),fog:!0,vertexShader:`varying vec2 vUv;
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
      }`});y.uniforms.shade.value=f(n),y.uniforms.mask.value=f(e);let S=new zt(m,y);S.position.set(.6,16.6,0),i.add(S)}function Cf(){let i=new Kt,t=$({tint:9208696}),e=$({tint:11818558}),n=$({tint:9322544}),r=$({tint:13220256}),s=$({tint:3158586}),o=wt(1.9,1.4,.8),a=wt(1.7,.7,.15);i.put(t,At(58,1,22,0,3.2,0),At(62,.5,26,0,4.2,0));for(let m=-26;m<=26;m+=6.5)for(let f of[-9,9])i.put(t,vt(.55,3.4,m,-.2,f,8));for(let m=0;m<7;m++)i.put(t,G(14-m*.2,4.8-m*.55,1.2,0,-.6,11.6+m*1.2));for(let m=-30.5;m<=30.5;m+=1.9)for(let f of[-12.6,12.6])(Math.abs(m)>7.5||f<0)&&i.put(s,G(.12,1.1,.12,m,4.7,f));for(let m=-12.6;m<=12.6;m+=1.8)for(let f of[-30.5,30.5])i.put(s,G(.12,1.1,.12,f,4.7,m));for(let m of[-12.6,12.6])i.put(s,G(61,.07,.07,0,5.75,m));for(let m of[-30.5,30.5])i.put(s,G(.07,.07,25.2,m,5.75,0));i.put(e,At(12.6,6,12.6,0,4.7,0),At(10,4.6,10,0,11.4,0)),i.put(n,G(13.8,.7,13.8,0,10.7,0),G(11.2,.7,11.2,0,16,0),G(13.6,.5,13.6,0,4.7,0));for(let[m,f]of[[0,1],[0,-1],[1,0],[-1,0]]){for(let y of[-3.6,0,3.6])i.put(n,m?G(.12,3.4,2.6,m*6.32,6.2,y):G(2.6,3.4,.12,y,6.2,f*6.32));for(let y of[-2.3,2.3])i.put(n,m?G(.12,2.6,2.8,m*5.02,12.4,y):G(2.8,2.6,.12,y,12.4,f*5.02))}for(let[m,f]of[[-24,8],[24,8],[-24,-8],[24,-8],[-12,10.5],[12,10.5]])i.put(r,vt(.5,5.2,m,4.7,f,8),vt(.8,.3,m,9.8,f,8)),i.put(o,Ot(.4,m,10.5,f,10)),i.light(m,10.6,f,Ut,.9,7,4.6);for(let m of[-28,28])i.put(s,Bt([m,4.7,-10],[m,13.5,-10],.07,4)),i.put(a,G(2.6,1.5,.06,m+1.35,11.9,-10));for(let m of[-52,52])for(let f of[26,-22]){for(let y=0;y<4;y++){i.put(r,vt(1.9-y*.3,.5,m,2.2+y*2.6,f,10));for(let S=0;S<6;S++){let g=S*Math.PI/3;i.spark(m+Math.cos(g)*(1.9-y*.3),2.9+y*2.6,f+Math.sin(g)*(1.9-y*.3),Dt,1.3,1)}}i.put(r,vt(.55,11,m,0,f,8)),i.put(o,Ot(.5,m,11.5,f,10)),i.light(m,11.6,f,Ut,.9,7,5)}i.light(0,6,15,Dt,.7,11).light(-11,5,12,Dt,.5,8).light(11,5,12,Dt,.5,8);let l=$({tint:14272162}),c=$({tint:15262938}),u=wt(1.25,.62,.1),h=wt(1.7,1,.42);i.put(l,G(13.1,.22,13.1,0,5.5,0),G(13,.2,13,0,9.9,0),G(10.4,.22,10.4,0,12.1,0),G(10.4,.2,10.4,0,15.4,0),G(12.2,.3,12.2,0,16.7,0));for(let[m,f]of[[-1,-1],[1,-1],[-1,1],[1,1]])i.put(n,G(.9,5.2,.9,m*6,5.5,f*6),G(.75,3.6,.75,m*4.75,12.1,f*4.75));for(let[m,f]of[[0,1],[0,-1],[1,0],[-1,0]])i.put(h,m?G(.1,.9,.55,m*6.42,5.9,0):G(.55,.9,.1,0,5.9,f*6.42));for(let[m,f]of[[0,1],[0,-1],[1,0],[-1,0]])for(let y=0;y<=16;y++){let S=y/16*4,g=S%1-.5,b=10.4-(.25-g*g)*3,M=-6.6+y/16*13.2;i.put(u,Ot(.17,m?m*6.95:M,b,f?f*6.95:M,5))}i.put(l,G(2.2,.7,3.4,0,4.7,10)),i.put(c,Zt(new en(1,10,8)).scale(.72,.6,1.25).translate(0,6,10.1),Ot(.4,0,6.55,9.75,8),Ot(.42,0,6.5,8.75,8),Zt(new en(1,8,6)).scale(.26,.24,.42).translate(0,6.3,8.35),Ye(.07,.3,-.22,6.82,8.8,5),Ye(.07,.3,.22,6.82,8.8,5)),i.light(0,7.4,11.4,Dt,.6,3.2);for(let m of[-13.5,13.5]){i.put(r,vt(.7,.5,m,4.7,9.6,8),vt(.42,7.4,m,5.2,9.6,8,null,.26)),i.put(o,Ot(.36,m,12.9,9.6,8));for(let f=0;f<6;f++){let y=.95-f*.1,S=6+f*1.1;i.put(r,vt(y,.12,m,S,9.6,8));for(let g=0;g<6;g++){let b=g*Math.PI/3+f*.5;i.spark(m+Math.cos(b)*y,S+.3,9.6+Math.sin(b)*y,Dt,1,1)}}i.light(m,9,9.6,Dt,.6,5)}let d=Wi([52,108,66],"b"),p=$({tint:10835258}),x=Array.from({length:8},(m,f)=>oo(f+51)),v=ue(14);for(let m=-27;m<=27;m+=4.5)for(let f of[-11.4,11.4])(Math.abs(m)>8||f<0)&&(i.put(p,vt(.4,.6,m,4.7,f,7,null,.5)),i.put(d,bi(.62,m,5.9,f,m,1)));for(let m=0;m<16;m++){let f=(v()-.5)*54,y=(v()<.7?1:-1)*(9.8+v()*1.2);Math.abs(f)<2.6||i.stamp(x[v()*8|0],f,y,v()*6.28,1,4.7)}return i.put(Qe(),He(11.5,11.5,0,4.7,0)),i}function If(i){let t=new Kt,e=ue(77),n=$({tint:9208696});for(let o=0;o<150;o++){let a=e()*6.28,l=52+e()*80;t.spark(Math.cos(a)*l,.35,Math.sin(a)*l,Dt,1.25,3)}for(let o of i.concat([114,66,41,-27,144,180]))for(let a=0;a<12;a++){let l=$t(o+(e()-.5)*8,ht-8-e()*16);t.spark(l.x,.35,l.z,Dt,1.35,3)}for(let o=0;o<46;o++){let a=e()*6.28,l=36+e()*12;t.spark(Math.cos(a)*l*1.3,.35,Math.sin(a)*l,Dt,1.3,3)}let r=-78,s=-46;t.put(n,vt(1.2,1.4,r,0,s,10));for(let o=0;o<10;o++){let a=o/10*6.28;for(let l=0;l<9;l++){let c=l/8,u=6-c*5.2;t.spark(r+Math.cos(a)*u,.6+Math.sin(c*Math.PI*.62)*7.5,s+Math.sin(a)*u,[Ve,Cn,si][o%3],1.6,1)}}for(let o=0;o<16;o++)t.spark(r+(e()-.5)*.6,1.5+o*.95,s+(e()-.5)*.6,Ve,1.9,1);return t.light(r,2,s,Cn,.9,8),t}function Pf(i){let t=[],e=Pn(64);return[[14240570,86,44,.05,.3],[3837913,-64,78,-.04,2.1],[14856762,30,-84,.045,4],[4829306,-98,-8,-.05,5.2],[15262418,100,-52,.04,1.2]].forEach(([n,r,s,o,a])=>{let l=new $e,c=new se({color:new yt(n).multiplyScalar(.55)}),u=new se({color:new yt(n).multiplyScalar(.85)}),h=new zt(new en(1,12,6,0,Math.PI*2,Math.PI/2,Math.PI/2).scale(1.3,.8,2.2),c);h.position.y=.7,l.add(h);let d=new zt(new ge(2.3,.14,2.8),u);d.position.y=2.5,l.add(d);for(let[x,v]of[[-1,-1.2],[1,-1.2],[-1,1.2],[1,1.2]]){let m=new zt(new ye(.05,.05,1.8),c);m.position.set(x,1.6,v),l.add(m)}let p=new Bn(new _n({map:e,color:16760944,blending:Oe,depthWrite:!1,transparent:!0}));p.scale.set(5,5,1),p.position.set(0,2.2,0),l.add(p),l.scale.setScalar(1.5),i.add(l),t.push({g:l,cx:r,cz:s,speed:o,phase:a,rx:16+Math.abs(r)*.1,rz:11})}),t}function Ff(){let i=new $e,t=ss("#1f7480","#185e68",12,!1),e=new se({map:t,color:13158600}),n=new se({color:12159566}),r=new se({color:4007959}),s=new se({color:new yt(3,2,.9)}),o=new se({map:ss("#b33a2e","#efe6d2",8),color:10263708,side:Be}),a=new zt(new en(1,20,10,0,Math.PI*2,Math.PI/2,Math.PI/2).scale(1.75,1.15,5.4),e);a.position.y=1,i.add(a);let l=new zt(new fn(1,24).rotateX(-Math.PI/2).scale(1.62,1,5.2),r);l.position.y=.86,i.add(l);let c=new zt(new An(1,.07,6,40).rotateX(Math.PI/2).scale(1.75,1,5.4),n);c.position.y=1.02,i.add(c);for(let v of[-2.6,-.6,1.6,3.2]){let m=new zt(new ge(3.3-Math.abs(v)*.32,.14,.6),n);m.position.set(0,.98,v),i.add(m)}let u=new zt(new ye(1.7,1.7,3.6,14,1,!0,-Math.PI/2,Math.PI).rotateX(Math.PI/2).rotateZ(Math.PI/2),o);u.position.set(0,1.5,.4),u.scale.set(1,.9,1),i.add(u);for(let[v,m]of[[-1.5,-1.4],[1.5,-1.4],[-1.5,2.2],[1.5,2.2]]){let f=new zt(new ye(.05,.05,1.6),n);f.position.set(v,1.8,m),i.add(f)}for(let v of[-1,1]){let m=new zt(new ye(.05,.05,4.4),n);m.position.set(v*2.6,1,-.8),m.rotation.set(.25,0,v*1.15),i.add(m);let f=new zt(new ge(.5,.06,1),n);f.position.set(v*4.5,.2,-1.3),i.add(f)}let h=[];for(let[v,m,f]of[[5,3.4,4.2],[-4.8,4.2,5]]){let y=new zt(new ye(.06,.06,m-.9),n);y.position.set(0,.9+(m-.9)/2,v),i.add(y);let S=new zt(new ge(.56,.74,.56),s);S.position.set(0,m+.3,v),i.add(S);let g=new zt(new $n(.5,.36,4).rotateY(Math.PI/4),r);g.position.set(0,m+.86,v),i.add(g);let b=new Bn(new _n({map:Pn(),color:16758880,blending:Oe,depthWrite:!1,transparent:!0,opacity:.6}));b.scale.set(f,f,1),b.position.copy(S.position),i.add(b),h.push(b)}let d=new zt(new an(1.5,.8),new se({color:14609752,side:Be}));d.position.set(.8,5.6,-4.8),i.add(d);let p=new zt(new ye(.03,.03,1.4),n);p.position.set(0,5.4,-4.8),i.add(p);let x=new zt(new fn(12,24).rotateX(-Math.PI/2),new se({map:Pn(),color:16752704,blending:Oe,transparent:!0,opacity:.13,depthWrite:!1}));return x.position.set(0,.12,0),i.add(x),i.scale.setScalar(1.7),i.userData={lights:h,flag:d},i}var hu=()=>wt(1.9,1.35,.42),Df=()=>$({tint:10835258}),Uf=(i,t,e,n,r,s=.42)=>[1,-1].map(o=>Zt(new ge(i,.3,t/2/Math.cos(s)+.5)).rotateX(o*s).translate(e,n+Math.tan(s)*t/4,r+o*t/4)),Lf=(i,t,e,n,r,s)=>Zt(new $n(i*1.42,e,4)).rotateY(Math.PI/4).scale(1,1,t/i).translate(n,r+e/2,s),ls=i=>Array.from({length:i},(t,e)=>oo(e+31));function Nf(){let i=In({cols:8,rows:2,lit:.36,seed:31,stone:[222,198,152],opening:.56,pointed:!0,jali:.4}),t={u:8*3.4,v:2*5.4},e=$({map:i.map,emissiveMap:i.emissiveMap,glow:1.4,key:"khanderao"}),n=$({tint:15261642}),r=wt(.74,.43,.17),s=new Kt,o=ue(31);for(let l of[-1,1]){s.put(e,pe(15,10.8,11,l*14.5,0,-5.5,t,l*.2)),s.put(n,At(15.6,.5,11.6,l*14.5,5.3,-5.5),At(16,.6,12,l*14.5,10.8,-5.5));for(let u=7.8;u<=21.4;u+=1.36)s.put(n,G(.6,.75,.3,l*u,11.4,.3));let c=l*22.6;s.put(e,pe(7,14.4,12.6,c,0,-5.5,t,.5)),s.put(n,At(7.8,.6,13.4,c,14.4,-5.5),vt(3.1,1.2,c,15,-5.5,8),Me(3.1,3.6,c,16.2,-5.5,{seg:14,swell:.08}));for(let[u,h]of[[-1,-1],[1,-1],[-1,1],[1,1]])s.put(n,Ze(1.3,1.5,c+u*2.9,15,-5.5+h*5.4));s.put(n,At(2.6,3.2,1.3,c,7.4,1.2),G(3.2,.25,1.7,c,7.2,1.3),Me(1.3,1.1,c,10.6,1.2,{seg:8,finial:0}))}s.put(e,pe(14,16.5,14,0,0,-6,t,.1)),s.put(r,De(6.2,11.2,0,0,1.06,.6)),s.put(n,At(15,.7,15,0,16.5,-6),G(8.4,.5,.5,0,12.2,1.2));for(let l of[-1,1])s.put(n,vt(1.7,20.5,l*6.2,0,1,8),vt(2.2,.5,l*6.2,12,1,8),vt(2.2,.5,l*6.2,17,1,8),Me(1.9,2.6,l*6.2,20.5,1,{seg:10,swell:.1})),s.put(r,G(.7,1.6,.1,l*6.2,13.4,2.72),G(.7,1.6,.1,l*6.2,8.4,2.72));s.put(n,vt(5.6,3,0,17.2,-6,12),vt(6.1,.5,0,20.2,-6,12),Me(5.5,6.8,0,20.7,-6,{seg:20,swell:.1})),s.put(hu(),Ot(.5,0,30,-6,8));for(let[l,c]of[[-1,-1],[1,-1],[-1,1],[1,1]])s.put(n,Ze(2.2,2.4,l*5.6,17.2,-6+c*5.6));for(let l=0;l<4;l++)s.put(n,G(10-l*.6,.22,.8,0,.66-l*.22,1.6+l*.8));let a=ls(8);[-20.5,-12.5,11,16,21.5].forEach((l,c)=>s.stamp(Dl(c+1),l,8.5+c%2*1.6,0,1.1,0));for(let l=0;l<26;l++)s.stamp(a[o()*8|0],(o()-.5)*46,4.5+o()*8,o()*6.28,1,0);for(let l=-22;l<=22;l+=8.8)s.light(l,.6,9,Ut,.36,13);return s.light(0,6,5,Dt,.9,9).light(0,23,5,Ut,.5,11).light(-22.6,12,4,Ut,.35,8).light(22.6,12,4,Ut,.35,8),s.put(Qe(),He(34,13,0,0,-3)),s}function Bf(){let i=In({cols:6,rows:1,lit:.5,seed:44,stone:[216,180,124],opening:.44,pointed:!0,jali:.6}),t={u:6*2.6,v:5.2},e=$({map:i.map,emissiveMap:i.emissiveMap,glow:1.4,key:"lehripura"}),n=$({tint:14201980}),r=$({tint:15391156}),s=$({tint:3355708}),o=$({tint:3158586}),a=new Kt,l=ue(44);for(let h of[-10.6,-4.6,4.6,10.6])a.put(n,At(2.8,11,7,h,0,-3.5)),a.put(r,G(3.2,.4,7.4,h,0,-3.5),G(3.1,.3,7.3,h,6.6,-3.5));a.put(n,At(6.4,1.6,7,0,9.4,-3.5));for(let h of[-1,1])a.put(n,At(3.2,4,7,h*7.6,7,-3.5));let c=(h,d,p)=>Zt(new ge(p,p,6.9)).rotateZ(Math.PI/4).translate(h,d,-3.5);a.put(n,c(-3.2,9.4,2.6),c(3.2,9.4,2.6));for(let h of[-1,1])a.put(n,c(h*6,7,1.5),c(h*9.2,7,1.5));a.put(e,pe(24,5.2,7,0,11,-3.5,t)),a.put(r,At(24.8,.5,7.8,0,11,-3.5),At(24.8,.5,7.8,0,16.2,-3.5));for(let h=-11.8;h<=11.8;h+=1.31)a.put(r,G(.62,.8,.3,h,16.7,.1),G(.62,.8,.3,h,16.7,-7.1));for(let h of[-1,1])a.put(r,At(2.5,3,1.2,h*7.6,12,.6),G(3,.25,1.6,h*7.6,11.8,.7),Me(1.25,1.1,h*7.6,15,.6,{seg:8,finial:0})),a.put(wt(1.4,.9,.42),G(1.5,1.7,.08,h*7.6,12.5,1.22));for(let h of[-2.6,0,2.6])for(let d of[-5.3,-1.7])a.put(r,G(.28,3.2,.28,h,16.7,d));a.put(r,G(6.4,.3,4.6,0,19.9,-3.5),Zt(new ye(2.3,2.3,6.6,10,1,!1,0,Math.PI)).rotateZ(Math.PI/2).translate(0,20.1,-3.5)),a.put(hu(),Ot(.3,0,22.7,-3.5,6),Ot(.24,-2.6,22.5,-3.5,6),Ot(.24,2.6,22.5,-3.5,6));for(let h of[-1,1])a.put(r,Ze(1.9,2,h*9.8,16.7,-3.5));for(let h of[-1,1])a.put(o,Bt([h*4.4,16.7,-.4],[h*4.4,22,-.4],.05,4)),a.put(wt(1.7,.7,.15),G(1.9,1.1,.05,h*4.4+.98,21.3,-.4));a.put(s,G(6.2,.1,70,0,.02,-24));for(let h=-12;h>-58;h-=13)for(let d of[-1,1])a.put(o,Bt([d*3.6,0,h],[d*3.6,5,h],.07,5)),a.put(wt(1.9,1.5,.9),Ot(.24,d*3.6,5.2,h,6)),a.light(d*3.6,5,h,Ut,.8,6,3.4);let u=ls(8);for(let h=0;h<12;h++)a.stamp(u[l()*8|0],(l()-.5)*16,2+l()*7,l()*6.28,1,0);a.light(0,8.2,-3.5,Dt,1.1,6.5,3.2).light(-7.6,5.6,-3.5,Dt,.7,4.5,2.4).light(7.6,5.6,-3.5,Dt,.7,4.5,2.4).light(0,18.4,-3.5,Dt,.7,4.5,2.2);for(let h=-9;h<=9;h+=6)a.light(h,.6,7.5,Ut,.38,12);return a.put(Qe(),He(17,8,0,0,-3.5)),a}function Of(){let i=In({cols:9,rows:2,lit:.44,seed:52,stone:[228,208,162],opening:.6,jali:.1}),t={u:9*3.6,v:2*4.8},e=$({map:i.map,emissiveMap:i.emissiveMap,glow:1.4,key:"music"}),n=$({tint:15721672}),r=Df(),s=$({tint:2906682}),o=$({tint:3158586}),a=new Kt,l=ue(52);a.put(e,pe(34,9.6,12,0,0,-6,t)),a.put(n,At(34.8,.5,12.8,0,9.6,-6)),a.put(r,Uf(35.4,13.6,0,10.1,-6)),a.put(n,G(34,.3,1.9,0,4.6,.9),G(34.6,.3,2.2,0,9.3,1));for(let u=-16.2;u<=16.2;u+=3.6)for(let h of[0,4.9])a.put(n,vt(.26,4.5,u,h,1.7,8),G(.7,.3,.7,u,h+4.3,1.7));for(let u=-16;u<=16;u+=.9)a.put(n,G(.1,.8,.1,u,4.9,1.75));a.put(n,G(34,.1,.14,0,5.7,1.75)),a.put(e,pe(9,14.4,13.5,0,0,-6.2,t,.33)),a.put(n,At(9.8,.6,14.3,0,14.4,-6.2),vt(3,1.2,0,15,-6.2,8),Me(2.9,3.4,0,16.2,-6.2,{seg:14,swell:.06})),a.put(wt(.74,.43,.17),De(3.2,5.6,0,.3,.6));for(let[u,h]of[[-1,-1],[1,-1],[-1,1],[1,1]])a.put(n,Ze(1.3,1.4,u*3.8,15,-6.2+h*6));for(let u of[-1,1])a.put(e,pe(6.5,11.4,13.2,u*15.5,0,-6,t,.6)),a.put(n,At(7.2,.5,13.9,u*15.5,11.4,-6)),a.put(r,Lf(3.9,7.3,3.4,u*15.5,11.9,-6)),a.put(hu(),Ot(.24,u*15.5,15.5,-6,6));for(let u=0;u<5;u++)a.put(n,G(7-u*.4,.2,.7,0,.8-u*.2,2.6+u*.7));a.put(s,G(38,.2,9,0,0,10));for(let u of[-15,-5,5,15])a.put(o,Bt([u,0,12],[u,4.2,12],.07,5)),a.put(wt(1.9,1.5,.9),Ot(.26,u,4.4,12,6)),a.light(u,4.4,12,Ut,.75,6,3.4);let c=ls(8);for(let u=0;u<9;u++)a.stamp(c[l()*8|0],(l()-.5)*30,4+l()*9,l()*6.28,1,.2);for(let u=-14.4;u<=14.4;u+=7.2)a.light(u,3.6,.9,Dt,.55,4.6).light(u,8.2,.9,Dt,.45,4.2);return a.light(0,12,5,Ut,.5,9).light(0,.6,9,Ut,.3,12),a.put(Qe(),He(24,11,0,0,-4)),a}function Hf(){let i=In({cols:10,rows:2,lit:.3,seed:61,stone:[186,92,64],shadow:[40,22,18],opening:.5,jali:.5}),t={u:10*3.4,v:2*6.2},e=$({map:i.map,emissiveMap:i.emissiveMap,glow:1.4,key:"museum"}),n=$({tint:15391932}),r=$({tint:5913128}),s=Df(),o=new Kt,a=ue(61);o.put(e,pe(48,12.4,14,0,0,-7,t)),o.put(n,At(48.6,.45,14.6,0,6.1,-7),At(49.2,.7,15.2,0,12.4,-7),At(49,.8,15,0,0,-7)),o.put(s,Uf(49.8,15.8,0,13.1,-7)),o.put(r,G(48,.25,1.5,0,6.3,.75),G(48.4,.2,1.9,0,11.3,.85),G(48,.1,.12,0,7.4,1.4));for(let c=-23.6;c<=23.6;c+=3.37)o.put(r,G(.2,5,.2,c,6.4,1.35));o.put(e,pe(12,18,16,0,0,-7,t,.25)),o.put(n,At(12.8,.7,16.8,0,18,-7),At(12.6,.45,16.6,0,9,-7),vt(4.4,2.2,0,18.7,-7,10),Me(4.3,5.2,0,20.9,-7,{seg:16,swell:.07})),o.put(wt(.74,.43,.17),De(4.4,8,0,.8,1.06));for(let[c,u]of[[-1,-1],[1,-1],[-1,1],[1,1]])o.put(n,Ze(1.8,1.9,c*5,18.7,-7+u*7));for(let c of[-1,1])o.put(e,pe(8,15,15.4,c*22,0,-7,t,.7)),o.put(n,At(8.8,.6,16.2,c*22,15,-7),At(8.6,.45,16,c*22,7.6,-7)),o.put(s,Lf(4.7,8.5,4,c*22,15.6,-7)),o.put(n,Ze(1.3,1.3,c*22,18.6,-7));for(let c=0;c<6;c++)o.put(n,G(9-c*.4,.22,.8,0,.9-c*.18,1.4+c*.8));let l=ls(8);for(let c=0;c<10;c++)o.stamp(l[a()*8|0],(a()-.5)*36,5+a()*8,a()*6.28,1,0);for(let c=-20;c<=20;c+=8)o.light(c,.6,10,Ut,.36,14);o.light(0,22,6,Ut,.5,10).light(0,5,4,Dt,.8,7).light(-22,12,5,Ut,.3,8).light(22,12,5,Ut,.3,8);for(let c=-20.2;c<=20.2;c+=6.74)o.light(c,9.6,.9,Dt,.4,4.2);return o.put(Qe(),He(32,13,0,0,-5)),o}function zf(){let i=new Kt,t=ue(91),e={u:24,v:8*2.9},n=[[150,126,100],[128,112,104],[156,140,118],[112,120,132],[146,110,96]].map((v,m)=>{let f=Cl({seed:70+m,lit:.26,wall:v});return $({map:f.map,emissiveMap:f.emissiveMap,glow:1.4,key:"pol"+m})}),r=[$({tint:11117980}),$({tint:11972772}),$({tint:10196878})],s=$({tint:12169892}),o=$({tint:1381915}),a=$({tint:8225420}),l=$({tint:6047280}),c=$({tint:10130046}),u=Wi([52,108,66],"b"),h=[12728906,3108784,14725690,15262418,3115626,13656110,9063080].map(v=>$({tint:v})),d=ls(8),p=wt(2,1.5,.8);i.put($({tint:4867648}),dn(ht+28.2,ht+150,1.53,206,128,96));let x=v=>Math.atan2(-Math.cos(v*be),Math.sin(v*be));for(let v=ht+37;v<ht+136;){let m=8+t()*4,f=Math.min(12.5,4.2+(v-ht-37)*.1);for(let y=207;y<333;){let S=6.5+t()*6.5,g=t()<.2,b=y+S/(v*be)/2,M=$t(b,v+m/2);if(y+=(S+(g?2.6:.3))/(v*be),!as(M.x,M.z,7)||v>ht+100&&t()<.3)continue;let _=f*(.62+t()*.38),R=t()*5|0,E=new Kt,w=r[t()*3|0],C=()=>(t()-.5)*(S-2.4),U=()=>(t()-.5)*(m-2.4);if(E.put(n[R],pe(S,_,m,0,0,0,e,t()*3)),E.put(w,G(S,.18,m,0,_,0)),E.put(s,G(S,.6,.22,0,_,m/2-.11),G(S,.6,.22,0,_,-m/2+.11),G(.22,.6,m,S/2-.11,_,0),G(.22,.6,m,-S/2+.11,_,0)),t()<.62){let B=C(),H=U();E.put(a,G(1.5,.9,1.5,B,_+.18,H)),E.put(o,vt(.62,1.2,B,_+1.08,H,9))}if(t()<.42){let B=C()*.6,H=-m/2+1.5;E.put(n[R],G(2.4,2.3,2.6,B,_+.18,H)),E.put(w,G(2.7,.14,2.9,B,_+2.48,H)),t()<.6&&(E.put(p,Ot(.1,B,_+2.1,H+1.42,5)),E.light(B,_+2,H+1.8,Dt,.75,3.6,1.7))}if(t()<.28){let B=U();E.put(c,Bt([-S/2+.4,_+1.9,B],[S/2-.4,_+1.9,B],.02,3),Bt([-S/2+.4,_+.2,B],[-S/2+.4,_+1.9,B],.04,4),Bt([S/2-.4,_+.2,B],[S/2-.4,_+1.9,B],.04,4));for(let H=-S/2+1;H<S/2-1;H+=.9+t()*.5)t()<.75&&E.put(h[t()*7|0],G(.62,.95,.03,H,_+.92,B))}if(t()<.2){let B=C(),H=U();E.put(l,G(1.9,.08,.9,B,_+.62,H));for(let[j,k]of[[-1,-1],[1,-1],[-1,1],[1,1]])E.put(l,G(.07,.44,.07,B+j*.88,_+.18,H+k*.38))}if(t()<.3)for(let B=0;B<3;B++){let H=C(),j=m/2-.6;E.put(l,vt(.2,.3,H,_+.18,j,6)),E.put(u,bi(.34,H,_+.72,j,B,1))}if(t()<.24){let B=C(),H=U();E.stamp(d[t()*8|0],B,H,t()*6.28,1,_+.18),t()<.5&&E.stamp(d[t()*8|0],B+.7,H+.3,t()*6.28,1,_+.18),E.light(B,_+2.2,H,Dt,.5,3.4)}if(t()<.08)for(let B=0;B<=8;B++)E.spark(-S/2+B*S/8,_+.82,m/2,[Dt,si,Cn,Ut][B%4],1.1,1);if(t()<.16){let B=C(),H=U();E.put(a,Zt(new ye(.42,.05,.22,10)).rotateX(-.7).translate(B,_+1.05,H),Bt([B,_+.18,H],[B,_+.95,H],.03,4))}t()<.46&&(E.put(p,Ot(.13,0,3.4,m/2+.5,5)),E.light(0,3.4,m/2+1.1,Dt,.95,6,2.2)),i.stamp(E,M.x,M.z,x(b),1,1.52)}v+=m+2.8}return i}function kf(){let i=new Kt,t=ue(123),e=$({tint:10259052}),n=$({tint:15327174}),r=$({tint:3158586}),s=$({tint:7031860}),o=$({tint:11680306}),a=20,l=15.5;i.put($({tint:6971212}),dn(a+1,a+7.5,.05,0,360,40)),i.put($({tint:8746592}),dn(a+1,a+4.6,.1,0,360,40)),i.put(e,vt(a+3,.16,0,0,0,40)),i.put(Qe(),He(a+11,a+11,0,0,0)),i.put(wt(.9,.3,.3),dn(3.2,3.5,.2,0,360,32)),i.put(wt(.9,.75,.2),dn(4,4.2,.2,0,360,32)),i.put(wt(.85,.85,.8),dn(2.5,2.7,.2,0,360,32)),i.put(n,vt(2.2,.5,0,.16,0,8));for(let[y,S]of[[-1,-1],[1,-1],[-1,1],[1,1]])i.put(n,G(.16,2.6,.16,y*1.1,.66,S*1.1));i.put(o,G(2.9,.14,2.9,0,3.26,0)),i.put(n,Me(1.2,1.3,0,3.4,0,{seg:10})),i.put(wt(2.4,1.6,.6),Ot(.3,0,1.3,0,8)),i.light(0,1.6,0,Dt,1.5,6,4),i.put(r,Bt([.9,0,.9],[.9,l,.9],.14,6)),i.put(wt(2.2,1.8,1),Ot(.4,.9,l+.3,.9,8));let c=[Dt,Ut,si,Dt,Cn,Ut];for(let y=0;y<18;y++){let S=y/18*6.283,g=Math.cos(S)*(a+1.6),b=Math.sin(S)*(a+1.6);i.put(r,Bt([g,0,b],[g,6.2,b],.08,5)),i.put(wt(1.9,1.5,.9),Ot(.2,g,6.3,b,6)),i.light(g,6,b,Ut,.6,6.5);for(let M=1;M<19;M++){let _=M/19,R=Math.sin(_*Math.PI)*1.5;i.spark(.9+(g-.9)*_,l+(6.2-l)*_-R,.9+(b-.9)*_,c[(y+M)%6],1.2,1)}y%3===0&&i.light(g*.55,8.5,b*.55,Dt,1,9.5)}i.put(s,At(11,1.1,4.4,0,.16,-(a+6.2))),i.put(o,G(11.4,4.6,.2,0,1.26,-(a+8.5))),i.put(wt(1.5,1,.45),G(9,.5,.1,0,5.2,-(a+8.3)));for(let y of[-6.6,6.6])i.put(r,G(1.4,2.6,1.2,y,.16,-(a+5.6)));let u=ls(8);for(let y=0;y<5;y++)i.stamp(u[y],-3+y*1.5,-(a+6.2),0,1,1.26);i.light(0,4.6,-(a+3.6),si,.9,7).light(-4,4.6,-(a+4),Ve,.6,6).light(4,4.6,-(a+4),Dt,.8,6);for(let y=0;y<52;y++){let S=t()*6.283;if(Math.abs(S-4.712)<.42)continue;let g=a+3.6+t()*3.2;i.stamp(u[t()*8|0],Math.cos(S)*g,Math.sin(S)*g,t()*6.28,1,.16)}for(let[y,S]of[[.5,2],[2.64,4]])i.stamp(Dl(S),Math.cos(y)*(a+8),Math.sin(y)*(a+8),-y+Math.PI/2,1.1,0);let h=[14696544,15771688,2930070,4221152,13650112,15756352,9067232,15257664],d=$({tint:10119756}),p=$({tint:15262422}),x=$({tint:2763830}),v=y=>{let S=new Kt,g=$({tint:h[y%8]}),b=$({tint:h[(y+3)%8]}),M=y%3;return y%4!==3?(S.put(g,Ye(.62,1,0,0,0,9)),S.put(b,vt(.2,.5,0,.92,0,7,null,.22),G(.5,.08,.5,0,.3,0))):(S.put(x,G(.16,.85,.2,-.11,0,0),G(.16,.85,.2,.11,0,0)),S.put(p,Ye(.42,.75,0,.72,0,8)),S.put(g,Ot(.17,0,1.7,0,6))),S.put(d,Ot(.14,0,1.58,0,7),Bt([-.24,1.36,0],M?[-.42,1.78,.2]:[-.5,1.1,.25],.055,4),Bt([.24,1.36,0],M?[.42,1.78,.2]:[.5,1.1,.25],.055,4)),S},m=Array.from({length:12},(y,S)=>v(S)),f=[[6.6,22],[10,34],[13.4,46],[16.8,58]].map(([y,S],g)=>{let b=new Kt;for(let M=0;M<S;M++){let _=M/S*6.283;b.stamp(m[(M*5+g*3)%12],Math.cos(_)*y,Math.sin(_)*y,-_,.95+M*7%5*.03,0)}return{rad:y,q:b}});return{b:i,rings:f}}function Gf(){let i=new Kt,t=ue(57),e=[3107396,3832396,2644540].map(s=>zn($({tint:s}))),n=wt(.95,.45,.62),r=wt(1,.8,.86);for(let s of[90,66,41,17,114,144,174,200,235,305,-62]){let o=$t(s+(t()-.5)*3,ht-6-t()*7);for(let a=0;a<20;a++){let l=t()*6.283,c=Math.sqrt(t())*6.5,u=.42+t()*.55;i.put(e[a%3],Zt(new fn(u,9,.4,5.9)).rotateX(-Math.PI/2).rotateY(t()*6.28).translate(o.x+Math.cos(l)*c,.05,o.z+Math.sin(l)*c*.7))}for(let a=0;a<4;a++){let l=t()*6.283,c=Math.sqrt(t())*5,u=o.x+Math.cos(l)*c,h=o.z+Math.sin(l)*c*.7;i.put(e[1],Bt([u,0,h],[u,.42,h],.025,3)),i.put(a%2?n:r,Zt(new $n(.24,.42,6)).rotateX(Math.PI).translate(u,.6,h),Ye(.13,.34,u,.46,h,5))}}return i}var ao=[126,102,78,54,28,6,-16,-38,162,-90],fu=[9,8,0,1,2,3,4,5,6,7],cs={zenith:263692,mid:660006,horizon:1780302,fog:1186872,water:264726};function Dx(i,t,e={}){let n=new gl({canvas:i,antialias:!1,powerPreference:"high-performance"});n.toneMapping=Jr,n.toneMappingExposure=1.12,n.outputColorSpace=Ke;let r=new Ds;r.fog=new Fs(cs.fog,8e-4),r.background=new yt(cs.mid);let s=new qe(38,1,2,4200),o=matchMedia("(prefers-reduced-motion: reduce)"),a=ue(11);r.add(new zt(new en(3600,32,16),new ve({side:nn,depthWrite:!1,fog:!1,uniforms:{zenith:{value:new yt(cs.zenith)},mid:{value:new yt(cs.mid)},horizon:{value:new yt(cs.horizon)}},vertexShader:"varying vec3 d; void main(){ d = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`uniform vec3 zenith; uniform vec3 mid; uniform vec3 horizon; varying vec3 d;
      void main(){ float y = max(d.y, 0.0); vec3 c = mix(horizon, mid, smoothstep(0.0, 0.22, y)); c = mix(c, zenith, smoothstep(0.18, 0.8, y)); c += vec3(0.16, 0.09, 0.05) * exp(-y * 18.0) * 0.3; gl_FragColor = vec4(c, 1.0);
      #include <tonemapping_fragment>
      #include <colorspace_fragment>
      }`})));let l=[],c=[],u=[];for(let I=0;I<3200;I++){let F=a()*2-1,P=a()*Math.PI*2,V=Math.abs(F)*.96+.035,X=Math.sqrt(1-V*V);l.push(Math.cos(P)*X*3300,V*3300,Math.sin(P)*X*3300);let Y=a();c.push(Y<.03?3.6:Y<.2?2.3:1.35),u.push(a()*6.28)}let h=new xe;h.setAttribute("position",new Gt(l,3)),h.setAttribute("size",new Gt(c,1)),h.setAttribute("phase",new Gt(u,1));let d=new Xr(h,new ve({transparent:!0,depthWrite:!1,fog:!1,blending:Oe,uniforms:{time:{value:0},dpr:{value:1}},vertexShader:"attribute float size; attribute float phase; uniform float time; uniform float dpr; varying float tw; void main(){ tw = 0.72 + 0.28 * sin(time * (0.6 + phase * 0.25) + phase * 9.0); gl_PointSize = size * dpr; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:"varying float tw; void main(){ float d = length(gl_PointCoord - 0.5); float a = smoothstep(0.5, 0.05, d) * tw; gl_FragColor = vec4(vec3(0.92, 0.95, 1.0) * a * 1.5, a); }"}));r.add(d);let p=document.createElement("canvas");p.width=p.height=256;{let I=p.getContext("2d");I.fillStyle="#fff6e0",I.beginPath(),I.arc(128,128,96,0,7),I.fill(),I.fillStyle="rgba(190,180,160,.5)";for(let[F,P,V]of[[150,100,16],[176,150,11],[130,170,9],[190,110,7]])I.beginPath(),I.arc(F,P,V,0,7),I.fill();I.globalCompositeOperation="destination-out",I.beginPath(),I.arc(72,116,92,0,7),I.fill()}let x=new Bn(new _n({map:new Qn(p),color:new yt(2.4,2.3,2),fog:!1,depthWrite:!1}));x.scale.set(150,150,1),x.position.set(980,600,-2900),r.add(x);let v=new Bn(new _n({map:Pn(256),color:7311320,fog:!1,depthWrite:!1,blending:Oe,opacity:.32}));v.scale.set(1500,1500,1),v.position.copy(x.position),r.add(v);let m=document.createElement("canvas");m.width=m.height=256;{let I=m.getContext("2d"),F=I.createImageData(256,256),P=ue(19),V=[];for(let X=0;X<22;X++)V.push([1+(P()*5|0),1+(P()*5|0),P()*6.28,P()]);for(let X=0;X<256;X++)for(let Y=0;Y<256;Y++){let nt=0;for(let[rt,Mt,Yt,Ee]of V)nt+=Math.sin((Y*rt+X*Mt)/256*6.2832+Yt)*Ee/(rt+Mt);let gt=Math.max(0,Math.min(1,nt*.9-.12)),ft=(X*256+Y)*4;F.data[ft]=150,F.data[ft+1]=170,F.data[ft+2]=215,F.data[ft+3]=gt*gt*255}I.putImageData(F,0,0)}let f=new Qn(m);f.wrapS=f.wrapT=xi,f.repeat.set(3,3);let y=new zt(new an(9e3,9e3).rotateX(Math.PI/2),new se({map:f,transparent:!0,opacity:.2,depthWrite:!1,fog:!1}));y.position.y=620,y.layers.set(1),r.add(y);{let I=new Ni,F=[[-290,0],[-215,14],[-165,24],[-125,44],[-85,58],[-55,80],[-30,92],[-10,104],[9,108],[30,98],[55,92],[85,64],[130,42],[170,26],[225,12],[300,0]];I.moveTo(-290,-40);for(let[X,Y]of F)I.lineTo(X,Y);I.lineTo(300,-40);let P=new zt(new lr(I),new se({color:1055286,fog:!1})),V=$t(91.5,3350);P.position.set(V.x,0,V.z),P.lookAt(0,0,0),r.add(P),P.userData.at=V,r.userData.hill=P}let S=document.createElement("canvas");S.width=S.height=256;{let I=S.getContext("2d"),F=I.createImageData(256,256),P=ue(3),V=[];for(let Y=0;Y<30;Y++)V.push([3+(P()*14|0),3+(P()*14|0),P()*6.28,.4+P()]);let X=(Y,nt)=>{let gt=0;for(let[ft,rt,Mt,Yt]of V)gt+=Math.sin((Y*ft+nt*rt)/256*6.2832+Mt)*Yt/(ft+rt);return gt};for(let Y=0;Y<256;Y++)for(let nt=0;nt<256;nt++){let gt=X(nt+1,Y)-X(nt-1,Y),ft=X(nt,Y+1)-X(nt,Y-1),rt=Math.hypot(gt*4,ft*4,1),Mt=(Y*256+nt)*4;F.data[Mt]=(-gt*4/rt*.5+.5)*255,F.data[Mt+1]=(-ft*4/rt*.5+.5)*255,F.data[Mt+2]=(1/rt*.5+.5)*255,F.data[Mt+3]=255}I.putImageData(F,0,0)}let g=new Qn(S);g.wrapS=g.wrapT=xi;let b=new El(new fn(ht+1,96),{textureWidth:innerWidth<700?512:1024,textureHeight:innerWidth<700?512:1024,waterNormals:g,sunDirection:new L(.3,.34,-.9).normalize(),sunColor:2766688,waterColor:cs.water,distortionScale:2.4,fog:!0});b.rotation.x=-Math.PI/2,b.material.uniforms.size.value=.95,b.material.fragmentShader=b.material.fragmentShader.replace("vec3( 0.1 )","vec3( 0.006, 0.01, 0.022 )"),r.add(b);let M=b.onBeforeRender,_=0;b.onBeforeRender=function(...I){(_i<1||(_++&1)===0)&&M.apply(this,I)};let R=new Kt,E=I=>{let F=$t(I,1);return Math.atan2(-F.x,-F.z)*.62},w=(I,F,P,V,X=E(F))=>{let Y=$t(F,P),nt=$t(F,P+V[2]);return os(nt.x,nt.z,V[0],V[1]),R.stamp(I(),Y.x,Y.z,X,1,1.5),Y},C=$t(60,ht+70),U=E(60),B=(I,F)=>new L(I,0,F).applyAxisAngle(new L(0,1,0),U).add(C);for(let I of[-58,0,58]){let F=B(I,4);os(F.x,F.z,40,50)}R.stamp(gf(),C.x,C.z,U,1,.3),w(vf,110,ht+44,[30,30,14]),w(Mf,177,ht+46,[44,36,14]),w(Sf,20,ht+54,[40,42,15]),w(yf,-11,ht+44,[26,26,17]),w(bf,197,ht+40,[24,18,7]),w(Ef,-38,ht+42,[22,22,15]),w(()=>cu(4),146,ht+47,[21,21,0],0),w(()=>cu(9),86,ht+150,[21,21,0],0),w(wf,128,ht+74,[36,36,0],0);{let I=$t(129,ht+8);os(I.x,I.z,7,7),R.stamp(_f(),I.x,I.z,Math.atan2(-I.x,-I.z),1,1.7)}w(Nf,3.5,ht+50,[28,20,6]),w(Of,-24.5,ht+46,[21,16,5]),w(Hf,132,ht+126,[27,18,6]);{let I=$t(158.5,ht+36),F=$t(158.5,ht+60);os(F.x,F.z,30,22),R.stamp(Bf(),I.x,I.z,Math.atan2(-I.x,-I.z),1,1.5)}let H=kf(),j=$t(96,ht+52),k=Math.atan2(-j.x,-j.z);os(j.x,j.z,28,28),R.stamp(H.b,j.x,j.z,k,1,1.5),R.stamp(Cf()),R.stamp(If(ao)),R.stamp(Gf()),R.stamp(mf(ao,[158.5,3.5,60])),R.stamp(Tf());let tt=new Kt;tt.stamp(zf());let K=R.build(),ut=tt.build();ut.traverse(I=>I.layers.set(1)),s.layers.enable(1),r.add(K,ut);let bt=H.rings.map(({rad:I,q:F})=>{let P=F.build();return P.position.set(j.x,1.66,j.z),P.userData.rad=I,P.traverse(V=>V.layers.set(1)),r.add(P),P});Rl(K),Rl(ut),bt.forEach(Rl);let Lt=new $e;r.add(Lt),Rf(Lt);{let I=new Bn(new _n({map:Pn(128,0,1.3),color:16754762,transparent:!0,opacity:.14,depthWrite:!1,blending:Oe,fog:!1}));I.scale.set(44,62,1),I.position.set(.6,33,-1.5),I.layers.set(1),r.add(I);let F=new Bn(new _n({map:Pn(128,0,1.5),color:10470655,transparent:!0,opacity:.13,depthWrite:!1,blending:Oe}));F.scale.set(20,17,1),F.position.set(-78,6.5,-46),F.layers.set(1),r.add(F)}let te=()=>new ve({transparent:!0,depthWrite:!1,fog:!1,blending:Oe,uniforms:{map:{value:Pn(64)},time:{value:0},scale:{value:800}},vertexShader:`attribute vec3 tint; attribute float size; attribute float phase; attribute float mode; uniform float time; uniform float scale; varying vec3 vC;
      void main(){ vec3 p = position; float k = 1.0;
        if (mode > 2.5) { p.x += sin(time * 0.11 + phase * 6.0) * 2.4; p.z += cos(time * 0.09 + phase * 4.0) * 2.4; k = 0.72 + 0.28 * sin(time * 7.0 + phase * 30.0); }
        else if (mode > 1.5) { k = step(0.5, fract(time * 0.7 + phase)); }
        else if (mode > 0.5) { k = 0.72 + 0.28 * sin(time * 9.0 + phase * 40.0) * sin(time * 5.3 + phase * 17.0); }
        vC = tint * k; vec4 mv = modelViewMatrix * vec4(p, 1.0); gl_PointSize = min(size * scale / -mv.z, 96.0); gl_Position = projectionMatrix * mv; }`,fragmentShader:"uniform sampler2D map; varying vec3 vC; void main(){ float a = texture2D(map, gl_PointCoord).a; gl_FragColor = vec4(vC * a, a); }"}),ae=I=>{let F=I.length,P=new xe,V=new Float32Array(F*3),X=new Float32Array(F*3),Y=new Float32Array(F),nt=new Float32Array(F),gt=new Float32Array(F);I.forEach((rt,Mt)=>{V.set([rt.x,rt.y,rt.z],Mt*3),X.set([rt.colour.r,rt.colour.g,rt.colour.b],Mt*3),Y[Mt]=rt.size,nt[Mt]=a(),gt[Mt]=rt.flicker||0}),P.setAttribute("position",new Fe(V,3)),P.setAttribute("tint",new Fe(X,3)),P.setAttribute("size",new Fe(Y,1)),P.setAttribute("phase",new Fe(nt,1)),P.setAttribute("mode",new Fe(gt,1));let ft=new Xr(P,te());return ft.frustumCulled=!1,r.add(ft),ft},Ae=ae(su);{let I=r.userData.hill,F=[];for(let P=0;P<13;P++){let V=P/12,X=new L(-120+V*128+Math.sin(V*9)*16,20+V*86,4).applyMatrix4(I.matrixWorld.identity().compose(I.position,I.quaternion,I.scale));F.push({x:X.x,y:X.y,z:X.z,colour:new yt(1,.74,.4),size:P===12?15:6,flicker:1})}ae(F)}let he=new yt(1,.95,.85),Z=new yt(1,.16,.1),ot=[];for(let I=0;I<26;I++)ot.push({a:a()*360,v:(I%2?1:-1)*(5+a()*5),d:I%2?ht+19.4:ht+24});let Tt=ae(ot.flatMap(()=>[{x:0,y:2.3,z:0,colour:he,size:3.2},{x:0,y:2.3,z:0,colour:Z,size:2.4}])),Vt=document.createElement("canvas");Vt.width=4,Vt.height=128;{let I=Vt.getContext("2d"),F=I.createLinearGradient(0,128,0,0);F.addColorStop(0,"rgba(255,255,255,1)"),F.addColorStop(.3,"rgba(255,255,255,.4)"),F.addColorStop(.7,"rgba(255,255,255,.08)"),F.addColorStop(1,"rgba(255,255,255,0)"),I.fillStyle=F,I.fillRect(0,0,4,128)}let Ht=new Qn(Vt),ee=(I,F,P,V,X=16761466,Y=.042)=>{let nt=new zt(new ye(V,1.2,P,20,1,!0),new se({map:Ht,color:X,transparent:!0,opacity:Y,depthWrite:!1,blending:Oe,side:Be,fog:!1}));return nt.position.set(I,P/2+1,F),nt.layers.set(1),r.add(nt),nt};for(let[I,F,P,V]of[[-19.5,6,74,9],[12.5,8,62,12],[-46,8,44,8],[58,8,40,8]]){let X=B(I,F);ee(X.x,X.z,P,V)}{let I=$t(110,ht+50),F=$t(20,ht+62),P=$t(197,ht+44),V=$t(-38,ht+52);ee(I.x,I.z,60,9),ee(F.x,F.z,58,12),ee(P.x,P.z,50,6),ee(V.x,V.z,40,10,10470655,.04)}let Xe=Pn(256,0,1.6),N=[];for(let I=0;I<10;I++){let F=new Bn(new _n({map:Xe,color:3360890,transparent:!0,opacity:.07,depthWrite:!1,blending:Oe})),P=$t(10+I*17+a()*10,ht-14-a()*22,5);F.position.copy(P),F.scale.set(190+a()*110,26+a()*10,1),F.userData.a=a()*6.28,F.layers.set(1),N.push(F),r.add(F)}t.forEach((I,F)=>{let P=ao[F],V=Math.sin(P*be)<-.3,X=$t(V?P+10:P,ht+9,V?6.4:8.6),Y=ff([{text:String(F+1).padStart(2,"0")+"   "+I.group.toUpperCase(),y:84,size:44,colour:"#f2c66a",font:'"Geist Mono", ui-monospace, monospace',weight:500},{text:I.name,y:206,size:132,colour:"#fff6e2"}]),nt=new zt(new an(15,4.7),new se({map:Y,color:new yt(1.35,1.35,1.35)}));nt.position.copy(X),nt.layers.set(1),r.add(nt);for(let gt of[-6.7,6.7]){let ft=new zt(new ye(.2,.2,X.y-1.4),new se({color:1711402}));ft.position.set(X.x+gt,(X.y+1.4)/2-1.4,X.z-.1),ft.layers.set(1),r.add(ft)}for(let gt of[-5.4,0,5.4]){let ft=new zt(new ge(1,.18,.45),new se({color:new yt(2,1.6,.9)}));ft.position.set(X.x+gt,X.y+2.7,X.z+.8),ft.layers.set(1),r.add(ft)}});let Te=Pf(r),qt=Ff();r.add(qt);let Wt=Af();r.add(Wt.g);let Rt=[];for(let I=0;I<30;I++){let F=new zt(new ar(.82,1,28).rotateX(-Math.PI/2),new se({color:10336767,transparent:!0,opacity:0,depthWrite:!1,blending:Oe}));F.position.y=.07,F.userData.age=9,Rt.push(F),r.add(F)}let le=new zt(new an(1,1),new se({map:Pn(64,0,.6),color:14674175,transparent:!0,opacity:0,depthWrite:!1,blending:Oe,fog:!1,side:Be}));le.scale.set(260,5,1),r.add(le);let Ct=9+a()*6,Xt=-1,Ie=70,Pe=[0,1,2].map(()=>({t:-1,o:new L,c:[1,1,1]})),D=[];for(let I=0;I<3*Ie;I++){let F=a()*2-1,P=a()*6.283,V=Math.sqrt(1-F*F),X=.55+a()*.45;D.push(Math.cos(P)*V*X,F*X,Math.sin(P)*V*X)}let A=ae(D.map((I,F)=>F%3?null:{x:0,y:-80,z:0,colour:new yt(0,0,0),size:6.5}).filter(Boolean)),W=7;function J(I){if(W-=I,W<=0){let X=Pe.find(Y=>Y.t<0);X&&(X.t=0,X.o.set(C.x+(a()-.5)*260,120+a()*80,C.z-80-a()*120),X.c=[[1,.7,.3],[1,.35,.3],[.5,.9,1],[1,.5,.9],[.7,1,.5],[1,.95,.8]][a()*6|0]),W=a()<.55?.5+a()*.9:10+a()*14}let F=A.geometry.attributes.position,P=A.geometry.attributes.tint,V=!1;Pe.forEach((X,Y)=>{if(X.t<0)return;X.t+=I,V=!0;let nt=X.t/2.4,gt=66*(1-Math.exp(-X.t*2.6)),ft=nt>=1?0:Math.pow(1-nt,1.4)*2.2;for(let rt=0;rt<Ie;rt++){let Mt=(Y*Ie+rt)*3;F.setXYZ(Y*Ie+rt,X.o.x+D[Mt]*gt,X.o.y+D[Mt+1]*gt-7*X.t*X.t,X.o.z+D[Mt+2]*gt),P.setXYZ(Y*Ie+rt,X.c[0]*ft,X.c[1]*ft,X.c[2]*ft)}nt>=1&&(X.t=-1)}),V&&(F.needsUpdate=!0,P.needsUpdate=!0)}let et=new Ml(n);et.addPass(new Sl(r,s));let q=new rs(new st(256,256),.34,.55,1);et.addPass(q),et.addPass(new bl);let Nt=$t(ao[9],ht-27),it=new st(Nt.x,Nt.z),St=new st,Et=new Set,lt=Math.PI,mt=null,It=9,Pt=0,xt=3.5,Jt=-99,O=0,ct=0,dt=!0,_t=I=>{let F=$t(ao[I],ht-27);return new st(F.x,F.z)},at=I=>{mt={i:I,p:_t(I)},It=-1};function Q(I){let F=0,P=0;if((Et.has("ArrowUp")||Et.has("w"))&&(P-=1),(Et.has("ArrowDown")||Et.has("s"))&&(P+=1),(Et.has("ArrowLeft")||Et.has("a"))&&(F-=1),(Et.has("ArrowRight")||Et.has("d"))&&(F+=1),F||P)mt=null,Jt=O,It>=0&&(It=-1,e.leave&&e.leave());else if(mt){let rt=mt.p.clone().sub(it),Mt=rt.length();if(Mt<2.2&&St.length()<2.5)mt.i!==void 0&&(It=mt.i,xt=6.5,e.arrive&&e.arrive(It)),mt=null;else{let Yt=rt.clone().normalize(),Ee=-it.dot(Yt);if(Ee>0&&Ee<Mt){let fe=it.clone().addScaledVector(Yt,Ee);if(fe.length()<62){let kt=fe.lengthSq()>1?fe.clone().normalize():new st(-Yt.y,Yt.x);Yt.addScaledVector(kt,1.5*(1-fe.length()/62)+.35).normalize()}}let _e=Math.min(1,Mt/26);F=Yt.x*_e,P=Yt.y*_e}}else o.matches||(xt-=I,xt<=0&&O-Jt>9&&(Pt=It>=0?(fu.indexOf(It)+1)%fu.length:Pt,It>=0&&e.leave&&e.leave(),at(fu[Pt])));let V=Math.hypot(F,P)||1;V>1&&(F/=V,P/=V),St.x+=(F*30-St.x*1.5)*I,St.y+=(P*30-St.y*1.5)*I,it.addScaledVector(St,I);let X=it.length();if(X>ht-12){it.multiplyScalar((ht-12)/X);let rt=it.clone().normalize();St.addScaledVector(rt,-Math.max(0,St.dot(rt)))}let Y=it.x/44,nt=it.y/26,gt=Math.hypot(Y,nt);if(gt<1){let rt=new st(Y/44,nt/26).normalize();it.set(it.x/Math.max(gt,.01),it.y/Math.max(gt,.01)),St.addScaledVector(rt,-Math.min(0,St.dot(rt)))}let ft=St.length();if(ft>.6){let Mt=Math.atan2(St.x,St.y)-lt;Mt=Math.atan2(Math.sin(Mt),Math.cos(Mt)),lt+=Mt*Math.min(1,I*3.2)}qt.position.set(it.x,Math.sin(O*1.7)*.06-.12,it.y),qt.rotation.set(Math.sin(O*1.3)*.02-Math.min(.06,ft*.003),lt,Math.sin(O*1.1)*.03),qt.userData.flag.rotation.y=Math.sin(O*6)*.3;for(let rt of qt.userData.lights)rt.material.opacity=.52+Math.sin(O*11+rt.position.z)*.07;if(ct-=I,ft>2&&ct<=0){ct=.16;let rt=Rt.reduce((Mt,Yt)=>Mt.userData.age>Yt.userData.age?Mt:Yt);rt.userData.age=0,rt.position.set(it.x-Math.sin(lt)*7,.07,it.y-Math.cos(lt)*7),rt.userData.s=Math.min(1,ft/16)}for(let rt of Rt){rt.userData.age+=I;let Mt=rt.userData.age,Yt=Math.min(1,Mt/3.2);rt.scale.setScalar(1.6+Yt*11),rt.material.opacity=Mt<3.2?(1-Yt)*.3*(rt.userData.s||0):0}}let Ft=new L;function jt(I){b.material.uniforms.time.value=O*.42,d.material.uniforms.time.value=O,Ae.material.uniforms.time.value=O,f.offset.x=O*.0016;for(let P of ou)P.uniforms.glow.value=P.userData.glow*(.94+Math.sin(O*.7+P.id)*.08);for(let P of N)P.position.x+=Math.sin(O*.05+P.userData.a)*I*1.2;let F=Tt.geometry.attributes.position;ot.forEach((P,V)=>{P.a+=P.v/P.d/be*I;let X=P.v>0?.55:-.55,Y=$t(P.a+X,P.d),nt=$t(P.a-X,P.d);F.setXYZ(V*2,Y.x,2.3,Y.z),F.setXYZ(V*2+1,nt.x,2.3,nt.z)}),F.needsUpdate=!0;for(let P of Te){let V=O*P.speed+P.phase;P.g.position.set(P.cx+Math.cos(V)*P.rx,Math.sin(O*1.5+P.phase)*.05,P.cz+Math.sin(V)*P.rz),P.g.rotation.y=Math.atan2(-Math.sin(V)*P.rx*Math.sign(P.speed),Math.cos(V)*P.rz*Math.sign(P.speed))}if(o.matches||J(I),bt.forEach((P,V)=>{P.rotation.y=O*1.15/P.userData.rad,P.scale.setScalar(1+Math.sin(O*2.6+V*.6)*.016)}),Wt.cars.forEach((P,V)=>{let X=2.2+O*.05-V*.0245;P.position.set(Math.cos(X)*(ht+14.9),1.42,Math.sin(X)*(ht+14.9)),P.rotation.y=-X}),Ct-=I,Ct<=0&&Xt<0&&(Xt=0,Ct=14+a()*16,le.userData={x:(a()-.5)*2400,y:1500+a()*500,vx:(a()<.5?-1:1)*(700+a()*500)},le.rotation.z=le.userData.vx>0?-.32:.32),Xt>=0){Xt+=I;let P=le.userData;le.position.set(P.x+P.vx*Xt,P.y-380*Xt,-3e3),le.material.opacity=Math.max(0,Math.sin(Math.min(1,Xt/.9)*Math.PI))*.9,Xt>.9&&(Xt=-1)}}let re=new L,ce=188,Fn=31,pn=-.03,us=0,kn=1.6,ai=0,_i=0;function ji(){let I=i.clientWidth,F=i.clientHeight,P=F>I;if(s.aspect=I/F,s.fov=I/F<1.5?44:38,ce=P?240:188,Fn=P?40:31,pn=-.03,P){let Y=e.band&&e.band(),nt=Y?Y[0]:F*.42,gt=Y?Y[1]:F*.74,ft=3*be,rt=10.4*be,Mt=Math.max(80,gt-nt)/(Math.tan(ft)+Math.tan(rt));s.fov=Math.min(54,Math.max(34,2*Math.atan(F/2/Mt)/be)),Mt=F/2/Math.tan(s.fov*be/2),pn=Math.tan((ft-rt)/2-Math.atan((F/2-(nt+gt)/2)/Mt))}s.updateProjectionMatrix();let V=Math.min(devicePixelRatio||1,P?kn+.4:kn);n.setPixelRatio(V),n.setSize(I,F,!1),et.setPixelRatio(V),et.setSize(I,F),d.material.uniforms.dpr.value=V;let X=F*V/(2*Math.tan(s.fov*be/2));Ae.material.uniforms.scale.value=X,Tt.material.uniforms.scale.value=X,A.material.uniforms.scale.value=X}let Jn=null;function li(I,F){if(Jn){s.position.set(...Jn.from),s.lookAt(...Jn.to);return}let P=i.clientHeight>i.clientWidth,V=it.x*(P?.9:.86)+us,X=Math.max(it.y+ce,P?240:105),Y=F?1:1-Math.exp(-I*1.7);re.x+=(V-re.x)*Y,re.z+=(X-re.z)*Y,re.y=Fn+Math.sin(O*.31)*.5,s.position.copy(re),s.lookAt(re.x,re.y+pn*100,re.z-100)}let wi=performance.now(),Ki=0;function hs(I){Ki=requestAnimationFrame(hs);let F=Math.min(.05,(I-wi)/1e3);wi=I,O+=F,Q(F),li(F),jt(F),et.render(),O>4&&(ai=F>.034?ai+F:Math.max(0,ai-F*.5),ai>2.5&&_i<3&&(_i++,ai=0,kn=[1.6,1.25,1,1][_i],_i===3&&(q.enabled=!1),ji()))}let Ai=()=>{cancelAnimationFrame(Ki),wi=performance.now(),dt&&!document.hidden&&(o.matches?(Q(.016),li(0,!0),jt(0),et.render()):Ki=requestAnimationFrame(hs))},lo=()=>{ji(),o.matches&&Ai()};addEventListener("resize",lo),document.fonts&&document.fonts.ready&&document.fonts.ready.then(lo),document.addEventListener("visibilitychange",Ai),o.addEventListener("change",Ai),addEventListener("keydown",I=>{let F=I.key.length===1?I.key.toLowerCase():I.key;["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","w","a","s","d"].includes(F)&&!I.metaKey&&!I.ctrlKey&&!/^(INPUT|TEXTAREA|SELECT)$/.test(document.activeElement.tagName)&&(Et.add(F),F.startsWith("Arrow")&&I.preventDefault())}),addEventListener("keyup",I=>Et.delete(I.key.length===1?I.key.toLowerCase():I.key)),addEventListener("blur",()=>Et.clear());let co=new Js,uo=new st,Ul=new gn(new L(0,1,0),0),qi=new L;i.addEventListener("pointerdown",I=>{let F=i.getBoundingClientRect();if(uo.set((I.clientX-F.left)/F.width*2-1,-((I.clientY-F.top)/F.height)*2+1),co.setFromCamera(uo,s),co.ray.intersectPlane(Ul,qi)&&Math.hypot(qi.x,qi.z)<ht+30){let P=new st(qi.x,qi.z),V=P.length();V>ht-14&&P.multiplyScalar((ht-14)/V),Math.hypot(P.x/48,P.y/30)<1&&P.multiplyScalar(1/Math.max(.05,Math.hypot(P.x/48,P.y/30)));let X=-1,Y=22;t.forEach((nt,gt)=>{let ft=_t(gt).distanceTo(P);ft<Y&&(Y=ft,X=gt)}),Jt=O,It>=0&&e.leave&&e.leave(),X>=0?at(X):(mt={p:P},It=-1)}}),addEventListener("pointermove",I=>{us=(I.clientX/innerWidth-.5)*10});let T=I=>{O+=I,Q(I),li(I),jt(I),et.render()},z={look(I,F,P){Jn=I?{from:I,to:F}:null,ji(),Jn&&P&&(s.fov=P,s.updateProjectionMatrix())},step(I){dt=!1,cancelAnimationFrame(Ki),T(I)},skip(I){for(let F=0;F<I;F+=1/30)O+=1/30,Q(1/30),li(1/30);jt(1/30),et.render()},sail(I){Jt=O,It!==I&&(It>=0&&e.leave&&e.leave(),o.matches?(z.jump(I),e.arrive&&e.arrive(I),jt(0),et.render()):at(I))},stop(){dt=!1,Ai()},resume(){dt=!0,Ai()},where:()=>({x:it.x,z:it.y,docked:It}),jump(I){let F=_t(I);it.copy(F),St.set(0,0),mt=null,It=I,xt=1e9,li(0,!0)},renderer:n,scene:r,camera:s};return ji(),li(0,!0),Ai(),z}window.Scene3D={start:Dx};})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2025 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
