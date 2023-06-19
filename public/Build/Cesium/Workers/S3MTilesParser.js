define(["./createTaskProcessorWorker","./ComponentDatatype-c140a87d","./Color-2a095a27","./getStringFromTypedArray-c37342c0","./S3MCompressType-75aa9ff0","./Cartographic-3309dd0d","./FeatureDetection-806b12f0","./S3MPixelFormat-4f2b7689","./pako_inflate-f73548c4","./when-b60132fc","./Check-7b2a090c","./WebGLConstants-4ae0db90","./Math-119be1a3","./RuntimeError-4a5c8994","./IndexDatatype-8a5eead4","./Cartesian4-3ca25aab"],(function(t,e,r,n,a,i,o,E,s,y,p,T,u,l,A,c){"use strict";function d(t,e,r,n,a,i){this.left=t,this.bottom=e,this.right=r,this.top=n,this.minHeight=a,this.maxHeight=i,this.width=r-t,this.length=n-e,this.height=i-a}function v(t,r,n,E,s,y,p){var T=s.getUint32(y,!0);y+=Uint32Array.BYTES_PER_ELEMENT;var u=0,l={},A=l.vertexAttributes=[],c=l.attrLocation={};l.instanceCount=0,l.instanceMode=0;var d=0;s.getUint32(y,!0),y+=Uint32Array.BYTES_PER_ELEMENT;var v=s.getUint16(y,!0);y+=Uint32Array.BYTES_PER_ELEMENT;var _=v;v>4&&(_=v>>8,v&=15);var f=s.getUint32(y,!0);y+=Uint32Array.BYTES_PER_ELEMENT;var m=void 0,g=void 0;if(f>0){var B=s.getUint16(y,!0);B=v*Float32Array.BYTES_PER_ELEMENT,y+=Uint32Array.BYTES_PER_ELEMENT,u=f*B;var P=E.subarray(y,y+u);if(n){var U=new i.Cartesian3,L=new i.Cartesian3,h=new Float32Array(P.buffer,P.byteOffset,P.byteLength/4),M=new i.Cartographic;m=new i.Cartographic,g=new i.Cartographic;for(var S=new Float32Array(2*f),N=new Float64Array(2*f),R=0;R<f;R++)o.Matrix4.multiplyByPoint(r,i.Cartesian3.fromElements(h[3*R],h[3*R+1],h[3*R+2],U),L),M=i.Cartographic.fromCartesian(L),N[2*R]=M.longitude,N[2*R+1]=M.latitude,0===R?(m.longitude=M.longitude,m.latitude=M.latitude,g.longitude=M.longitude,g.latitude=M.latitude):(m.longitude=Math.max(M.longitude,m.longitude),m.latitude=Math.max(M.latitude,m.latitude),g.longitude=Math.min(M.longitude,g.longitude),g.latitude=Math.min(M.latitude,g.latitude));for(R=0;R<f;R++)S[2*R]=N[2*R]-g.longitude,S[2*R+1]=N[2*R+1]-g.latitude;c.img=d,A.push({index:c.img,typedArray:S,componentsPerAttribute:2,componentDatatype:e.ComponentDatatype.FLOAT,offsetInBytes:0,strideInBytes:2*Float32Array.BYTES_PER_ELEMENT,normalize:!1}),d++}c.aPosition=d,A.push({index:c.aPosition,typedArray:P,componentsPerAttribute:v,componentDatatype:e.ComponentDatatype.FLOAT,offsetInBytes:0,strideInBytes:B,normalize:!1}),d++,y+=u}var D=s.getUint32(y,!0);if(y+=Uint32Array.BYTES_PER_ELEMENT,D>0){var Y=s.getUint16(y,!0);Y=_*Float32Array.BYTES_PER_ELEMENT,y+=Uint32Array.BYTES_PER_ELEMENT,u=D*Y,t.ignoreNormal||(c.aNormal=d,A.push({index:c.aNormal,typedArray:E.subarray(y,y+u),componentsPerAttribute:_,componentDatatype:e.ComponentDatatype.FLOAT,offsetInBytes:0,strideInBytes:Y,normalize:!1}),d++),y+=u}var C=s.getUint32(y,!0);if(y+=Uint32Array.BYTES_PER_ELEMENT,C>0){var I=new Uint8Array(4*C);p.push(I.buffer);var F=s.getUint32(y,!0);F=4*Float32Array.BYTES_PER_ELEMENT,y+=Uint32Array.BYTES_PER_ELEMENT,u=C*F;for(var b=new Float32Array(E.buffer,y,4*f),x=0;x<f;x++)I[4*x]=255*b[4*x],I[4*x+1]=255*b[4*x+1],I[4*x+2]=255*b[4*x+2],I[4*x+3]=255*b[4*x+3];y+=u,c.aColor=d,A.push({index:c.aColor,typedArray:I,componentsPerAttribute:4,componentDatatype:e.ComponentDatatype.UNSIGNED_BYTE,offsetInBytes:0,strideInBytes:4,normalize:!0}),d++}var w=s.getUint32(y,!0);y+=Uint32Array.BYTES_PER_ELEMENT,w>0&&(y+=u=16*w);var O=s.getUint32(y,!0);y+=Uint32Array.BYTES_PER_ELEMENT;for(var k,z,G=-1,H=0;H<O;H++){k=s.getUint32(y,!0),y+=Uint32Array.BYTES_PER_ELEMENT,z=s.getUint16(y,!0),y+=Uint16Array.BYTES_PER_ELEMENT,s.getUint16(y,!0),y+=Uint16Array.BYTES_PER_ELEMENT,u=k*z*Float32Array.BYTES_PER_ELEMENT;var W,V=E.subarray(y,y+u);if(-1!=G||20!=z&&35!=z)if(-1!==G)l.instanceBounds=new Float32Array(E.buffer,y,k*z);else{var X="aTexCoord"+H;c[X]=d++,A.push({index:c[X],typedArray:V,componentsPerAttribute:z,componentDatatype:e.ComponentDatatype.FLOAT,offsetInBytes:0,strideInBytes:z*Float32Array.BYTES_PER_ELEMENT,normalize:!1})}else G=H,l.instanceCount=k,l.instanceMode=z,l.instanceBuffer=V,20===z?(W=20*Float32Array.BYTES_PER_ELEMENT,c.uv2=d++,A.push({index:c.uv2,componentsPerAttribute:4,componentDatatype:e.ComponentDatatype.FLOAT,normalize:!1,offsetInBytes:0,strideInBytes:W,instanceDivisor:1}),c.uv3=d++,A.push({index:c.uv3,componentsPerAttribute:4,componentDatatype:e.ComponentDatatype.FLOAT,normalize:!1,offsetInBytes:4*Float32Array.BYTES_PER_ELEMENT,strideInBytes:W,instanceDivisor:1}),c.uv4=d++,A.push({index:c.uv4,componentsPerAttribute:4,componentDatatype:e.ComponentDatatype.FLOAT,normalize:!1,offsetInBytes:8*Float32Array.BYTES_PER_ELEMENT,strideInBytes:W,instanceDivisor:1}),c.secondary_colour=d++,A.push({index:c.secondary_colour,componentsPerAttribute:4,componentDatatype:e.ComponentDatatype.FLOAT,normalize:!1,offsetInBytes:12*Float32Array.BYTES_PER_ELEMENT,strideInBytes:W,instanceDivisor:1}),c.uv6=d++,A.push({index:c.uv6,componentsPerAttribute:4,componentDatatype:e.ComponentDatatype.FLOAT,normalize:!1,offsetInBytes:16*Float32Array.BYTES_PER_ELEMENT,strideInBytes:W,instanceDivisor:1})):35===z&&(W=35*Float32Array.BYTES_PER_ELEMENT,c.uv1=d++,A.push({index:c.uv1,componentsPerAttribute:4,componentDatatype:e.ComponentDatatype.FLOAT,normalize:!1,offsetInBytes:0,strideInBytes:W,instanceDivisor:1,byteLength:u}),c.uv2=d++,A.push({index:c.uv2,componentsPerAttribute:4,componentDatatype:e.ComponentDatatype.FLOAT,normalize:!1,offsetInBytes:4*Float32Array.BYTES_PER_ELEMENT,strideInBytes:W,instanceDivisor:1}),c.uv3=d++,A.push({index:c.uv3,componentsPerAttribute:4,componentDatatype:e.ComponentDatatype.FLOAT,normalize:!1,offsetInBytes:8*Float32Array.BYTES_PER_ELEMENT,strideInBytes:W,instanceDivisor:1}),c.uv4=d++,A.push({index:c.uv4,componentsPerAttribute:4,componentDatatype:e.ComponentDatatype.FLOAT,normalize:!1,offsetInBytes:12*Float32Array.BYTES_PER_ELEMENT,strideInBytes:W,instanceDivisor:1}),c.uv5=d++,A.push({index:c.uv5,componentsPerAttribute:4,componentDatatype:e.ComponentDatatype.FLOAT,normalize:!1,offsetInBytes:16*Float32Array.BYTES_PER_ELEMENT,strideInBytes:W,instanceDivisor:1}),c.uv6=d++,A.push({index:c.uv6,componentsPerAttribute:4,componentDatatype:e.ComponentDatatype.FLOAT,normalize:!1,offsetInBytes:20*Float32Array.BYTES_PER_ELEMENT,strideInBytes:W,instanceDivisor:1}),c.uv7=d++,A.push({index:c.uv7,componentsPerAttribute:3,componentDatatype:e.ComponentDatatype.FLOAT,normalize:!1,offsetInBytes:24*Float32Array.BYTES_PER_ELEMENT,strideInBytes:W,instanceDivisor:1}),c.secondary_colour=d++,A.push({index:c.secondary_colour,componentsPerAttribute:4,componentDatatype:e.ComponentDatatype.FLOAT,normalize:!1,offsetInBytes:27*Float32Array.BYTES_PER_ELEMENT,strideInBytes:W,instanceDivisor:1}),c.uv9=d++,A.push({index:c.uv9,componentsPerAttribute:4,componentDatatype:e.ComponentDatatype.FLOAT,normalize:!1,offsetInBytes:31*Float32Array.BYTES_PER_ELEMENT,strideInBytes:W,instanceDivisor:1}));y+=u}l.verticesCount=f,l.instanceIndex=G;var j=s.getUint32(y,!0);y+=Uint32Array.BYTES_PER_ELEMENT;var q,J=[];for(H=0;H<j;H++){var K={},Q=s.getUint32(y,!0);y+=Uint32Array.BYTES_PER_ELEMENT;var Z=s.getUint8(y,!0);y+=Uint8Array.BYTES_PER_ELEMENT,s.getUint8(y,!0),y+=Uint8Array.BYTES_PER_ELEMENT;var $=s.getUint8(y,!0);y+=Uint8Array.BYTES_PER_ELEMENT,y+=1,K.indicesCount=Q,K.indexType=Z,K.primitiveType=$;var tt=y;Q>0&&(0==Z?(y+=u=Q*Uint16Array.BYTES_PER_ELEMENT,Q%2==1&&(y+=2)):y+=u=4*Q),K.indicesTypedArray=E.subarray(tt,tt+u);var et=s.getUint32(y,!0);y+=Uint32Array.BYTES_PER_ELEMENT;var rt=s.getUint32(y,!0);y+=Uint32Array.BYTES_PER_ELEMENT*et,K.materialCode=rt,J.push(K)}return 2===J.length&&13===J[1].primitiveType&&J[1].indicesCount>=3&&(q=a.S3MEdgeProcessor.createEdgeDataByIndices(l,J[1],p)),t[T]={vertexPackage:l,arrIndexPackage:J,edgeGeometry:q,cartographicBounds:{max:m,min:g}},y}function _(t,r,n){var a=t.vertexAttributes,i=t.attrLocation,o=a.length;i[1===n?"instanceId":"batchId"]=o,a.push({index:o,typedArray:r,componentsPerAttribute:1,componentDatatype:e.ComponentDatatype.FLOAT,offsetInBytes:0,strideInBytes:0,instanceDivisor:n})}return new r.Color,t((function(t,e){var r=t.buffer,i=t.supportCompressType,o=t.bVolume,p=null,T=null,u=null,l=t.isCoverImageryLayer,A=t.modelMatrix;if(o&&t.volbuffer.byteLength<8&&(o=!1),o){var c=t.volbuffer,f=new Uint8Array(c,8),m=s.pako.inflate(f).buffer,g=new Float64Array(m,0,1),B=new Uint32Array(m,48,1);if(0===g[0]||3200===B[0]||3201===B[0]){var P=0;0===g[0]&&(P=8),e.push(m);var U=new Float64Array(m,P,6),L=U[0],h=U[1],M=U[2],S=U[3],N=U[4]<U[5]?U[4]:U[5],R=U[4]>U[5]?U[4]:U[5];T={left:L,top:h,right:M,bottom:S,minHeight:N,maxHeight:R,width:(p=new d(L,S,M,h,N,R)).width,length:p.length,height:p.height};var D=new Uint32Array(m,48+P,7),Y=D[0],C=D[1],I=D[2],F=D[3];u={nFormat:Y,nSideBlockCount:C,nBlockLength:I,nLength:F,nWidth:D[4],nHeight:D[5],nDepth:D[6],imageArray:new Uint8Array(m,76+P,F*F*4)}}}var b=0,x=new Uint8Array(r,0,4);if(115!==x[0]||51!==x[1]||109!==x[2])return{result:!1};var w=x[3],O=(f=new Uint8Array(r,4),s.pako.inflate(f).buffer),k=new Uint8Array(O);e.push(k.buffer);var z=new DataView(O),G=z.getUint32(b,!0);b+=Uint32Array.BYTES_PER_ELEMENT;var H=new Uint8Array(O,b,G),W=G%4;W&&(W=4-W),b+=G+W;var V=n.getStringFromTypedArray(H,void 0,void 0,"gbk");V=(V=V.replace(new RegExp("\r\n","gm"),"")).replace(new RegExp(":","gm"),""),z.getUint32(b,!0),b+=Uint32Array.BYTES_PER_ELEMENT;var X=z.getUint32(b,!0);b+=Uint32Array.BYTES_PER_ELEMENT;var j={};j.ignoreNormal=t.ignoreNormal;for(var q=0;q<X;q++)b=v(j,A,l,k,z,b,e);z.getUint32(b,!0),b+=Uint32Array.BYTES_PER_ELEMENT;var J=z.getUint32(b,!0);for(b+=Uint32Array.BYTES_PER_ELEMENT,q=0;q<J;q++){var K=z.getUint32(b,!0);b+=Uint32Array.BYTES_PER_ELEMENT;var Q=z.getUint32(b,!0);b+=Uint32Array.BYTES_PER_ELEMENT;var Z={},$=j[K].vertexPackage.instanceIndex,tt=j[K].edgeGeometry;if(-1==$){for(var et=new Float32Array(j[K].vertexPackage.verticesCount),rt=0;rt<Q;rt++){var nt=z.getUint32(b,!0);b+=Uint32Array.BYTES_PER_ELEMENT;var at=z.getUint32(b,!0);b+=Uint32Array.BYTES_PER_ELEMENT;var it=0,ot=0;Z[nt]={batchId:rt};for(var Et=0;Et<at;Et++)if(ot=z.getUint32(b,!0),b+=Uint32Array.BYTES_PER_ELEMENT,it=z.getUint32(b,!0),b+=Uint32Array.BYTES_PER_ELEMENT,et.fill)et.fill(rt,ot,ot+it);else for(var st=ot+ot,yt=ot;yt<st;yt++)et[yt]=rt;Z[nt].vertexColorOffset=ot,Z[nt].vertexColorCount=it}_(j[K].vertexPackage,et,void 0)}else{var pt=j[K].vertexPackage.instanceCount;j[K].vertexPackage.instanceBuffer,j[K].vertexPackage.instanceMode;var Tt=new Float32Array(pt),ut=0;for(rt=0;rt<Q;rt++){nt=z.getUint32(b,!0);b+=Uint32Array.BYTES_PER_ELEMENT;at=z.getUint32(b,!0);b+=Uint32Array.BYTES_PER_ELEMENT;for(Et=0;Et<at;Et++){var lt=z.getUint32(b,!0);b+=Uint32Array.BYTES_PER_ELEMENT,Tt[ut]=ut,void 0===Z[nt]&&(Z[nt]={vertexColorCount:1,instanceIds:[],vertexColorOffset:ut}),Z[nt].instanceIds.push(lt),ut++}}_(j[K].vertexPackage,Tt,1)}j[K].pickInfo=Z;tt=j[K].edgeGeometry;if(y.defined(tt)){var At,ct,dt=tt.regular.instancesData,vt=a.S3MEdgeProcessor.RegularInstanceStride;if(y.defined(dt))for(ct=dt.length,At=0;At<ct;At+=vt){var _t=dt[At+9];dt[At+9]=et[_t]}var ft=tt.silhouette.instancesData;if(vt=a.S3MEdgeProcessor.SilhouetteInstanceStride,y.defined(ft))for(ct=ft.length,At=0;At<ct;At+=vt){_t=ft[At+12];ft[At+12]=et[_t]}}}z.getUint32(b,!0),b+=Uint32Array.BYTES_PER_ELEMENT;var mt=z.getUint32(b,!0);b+=Uint32Array.BYTES_PER_ELEMENT;var gt={};for(q=0;q<mt;q++){var Bt=z.getUint32(b,!0);b+=Uint32Array.BYTES_PER_ELEMENT;var Pt=z.getUint32(b,!0);b+=Uint32Array.BYTES_PER_ELEMENT;var Ut=z.getUint32(b,!0);b+=Uint32Array.BYTES_PER_ELEMENT;var Lt=z.getUint32(b,!0);b+=Uint32Array.BYTES_PER_ELEMENT;at=z.getUint32(b,!0);b+=Uint32Array.BYTES_PER_ELEMENT;var ht=z.getUint32(b,!0);b+=Uint32Array.BYTES_PER_ELEMENT;var Mt=null;if(Lt===a.S3MCompressType.enrS3TCDXTN&&1!==i){var St=null;ht>E.S3MPixelFormat.BGR||ht===E.S3MPixelFormat.LUMINANCE_ALPHA?(St=new Uint8Array(O,b,Pt*Ut),Mt=new Uint8Array(Pt*Ut*4)):(St=new Uint16Array(O,b,at/2),Mt=new Uint16Array(Pt*Ut)),a.DXTTextureDecode.decode(Mt,Pt,Ut,St,ht),e.push(Mt.buffer),Lt=0}else Mt=new Uint8Array(O,b,at);gt[Bt]={id:Bt,width:Pt,height:Ut,compressType:Lt,nFormat:ht,imageBuffer:Mt},b+=at}return{result:!0,version:w,xmlDoc:V,geoPackage:j,texturePackage:gt,volImageBuffer:u,volBounds:T}}))}));