/*
 Copyright (c) 2013 Gildas Lormeau. All rights reserved.

 Redistribution and use in source and binary forms, with or without
 modification, are permitted provided that the following conditions are met:

 1. Redistributions of source code must retain the above copyright notice,
 this list of conditions and the following disclaimer.

 2. Redistributions in binary form must reproduce the above copyright
 notice, this list of conditions and the following disclaimer in
 the documentation and/or other materials provided with the distribution.

 3. The names of the authors may not be used to endorse or promote products
 derived from this software without specific prior written permission.

 THIS SOFTWARE IS PROVIDED ``AS IS'' AND ANY EXPRESSED OR IMPLIED WARRANTIES,
 INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND
 FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL JCRAFT,
 INC. OR ANY CONTRIBUTORS TO THIS SOFTWARE BE LIABLE FOR ANY DIRECT, INDIRECT,
 INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA,
 OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
 LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
 EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */
'use strict';(function(n){function B(){this.crc=-1}function J(){}function Y(c,a,b){if(0>a||0>b||a+b>c.size)throw new RangeError("offset:"+a+", length:"+b+", size:"+c.size);if(c.slice)return c.slice(a,a+b);if(c.webkitSlice)return c.webkitSlice(a,a+b);if(c.mozSlice)return c.mozSlice(a,a+b);if(c.msSlice)return c.msSlice(a,a+b)}function v(c,a){var b,g;b=new ArrayBuffer(c);g=new Uint8Array(b);a&&g.set(a,0);return{buffer:b,array:g,view:new DataView(b)}}function C(){}function D(c){var a=this,b;a.size=0;
a.init=function(g,h){var d=new Blob([c],{type:K});b=new y(d);b.init(function(){a.size=b.size;g()},h)};a.readUint8Array=function(c,a,d,f){b.readUint8Array(c,a,d,f)}}function E(c){var a=this,b;a.size=0;a.init=function(g){for(var h=c.length;"="==c.charAt(h-1);)h--;b=c.indexOf(",")+1;a.size=Math.floor(0.75*(h-b));g()};a.readUint8Array=function(a,h,d){var f=v(h),k=4*Math.floor(a/3),m=4*Math.ceil((a+h)/3),m=n.atob(c.substring(k+b,m+b));for(a=k=a-3*Math.floor(k/4);a<k+h;a++)f.array[a-k]=m.charCodeAt(a);
d(f.array)}}function y(c){var a=this;a.size=0;a.init=function(b){a.size=c.size;b()};a.readUint8Array=function(b,a,h,d){var f=new FileReader;f.onload=function(b){h(new Uint8Array(b.target.result))};f.onerror=d;try{f.readAsArrayBuffer(Y(c,b,a))}catch(k){d(k)}}}function w(){}function F(c){var a;this.init=function(b){a=new Blob([],{type:K});b()};this.writeUint8Array=function(b,c){a=new Blob([a,L?b:b.buffer],{type:K});c()};this.getData=function(b,g){var h=new FileReader;h.onload=function(c){b(c.target.result)};
h.onerror=g;h.readAsText(a,c)}}function G(c){var a="",b="";this.init=function(b){a+="data:"+(c||"")+";base64,";b()};this.writeUint8Array=function(c,h){var d,f=b.length,k=b;b="";for(d=0;d<3*Math.floor((f+c.length)/3)-f;d++)k+=String.fromCharCode(c[d]);for(;d<c.length;d++)b+=String.fromCharCode(c[d]);2<k.length?a+=n.btoa(k):b=k;h()};this.getData=function(c){c(a+n.btoa(b))}}function H(c){var a;this.init=function(b){a=new Blob([],{type:c});b()};this.writeUint8Array=function(b,g){a=new Blob([a,L?b:b.buffer],
{type:c});g()};this.getData=function(c){c(a)}}function M(c,a,b,g,h,d,f,k,m,x){function r(){c.removeEventListener("message",q,!1);k(e,O)}function q(b){b=b.data;var a=b.data,k=b.error;if(k)k.toString=function(){return"Error: "+this.message},m(k);else if(b.sn===l)switch("number"===typeof b.codecTime&&(c.codecTime+=b.codecTime),"number"===typeof b.crcTime&&(c.crcTime+=b.crcTime),b.type){case "append":a?(e+=a.length,g.writeUint8Array(a,function(){p()},x)):p();break;case "flush":O=b.crc;a?(e+=a.length,
g.writeUint8Array(a,function(){r()},x)):r();break;case "progress":f&&f(s+b.loaded,d);break;case "importScripts":case "newTask":case "echo":break;default:console.warn("zip.js:launchWorkerProcess: unknown message: ",b)}}function p(){s=t*I;s<d?b.readUint8Array(h+s,Math.min(I,d-s),function(b){f&&f(s,d);var e=0===s?a:{sn:l};e.type="append";e.data=b;try{c.postMessage(e,[b.buffer])}catch(k){c.postMessage(e)}t++},m):c.postMessage({sn:l,type:"flush"})}var t=0,s,e,l=a.sn,O;e=0;c.addEventListener("message",
q,!1);p()}function N(c,a,b,g,h,d,f,k,m,x){function r(){var d;p=q*I;if(p<h)a.readUint8Array(g+p,Math.min(I,h-p),function(a){var k;try{k=c.append(a,function(b){f&&f(p+b,h)})}catch(d){m(d);return}k?(t+=k.length,b.writeUint8Array(k,function(){q++;setTimeout(r,1)},x),e&&l.append(k)):(q++,setTimeout(r,1));s&&l.append(a);f&&f(p,h)},m);else{try{d=c.flush()}catch(n){m(n);return}d?(e&&l.append(d),t+=d.length,b.writeUint8Array(d,function(){k(t,l.get())},x)):k(t,l.get())}}var q=0,p,t=0,s="input"===d,e="output"===
d,l=new B;r()}function P(c,a,b,g,h,d,f,k,m,x,r){n.zip.useWebWorkers&&f?M(c,{sn:a,codecClass:"NOOP",crcType:"input"},b,g,h,d,m,k,x,r):N(new J,b,g,h,d,"input",m,k,x,r)}function Q(c){var a,b="",g,h="\u00c7\u00fc\u00e9\u00e2\u00e4\u00e0\u00e5\u00e7\u00ea\u00eb\u00e8\u00ef\u00ee\u00ec\u00c4\u00c5\u00c9\u00e6\u00c6\u00f4\u00f6\u00f2\u00fb\u00f9\u00ff\u00d6\u00dc\u00f8\u00a3\u00d8\u00d7\u0192\u00e1\u00ed\u00f3\u00fa\u00f1\u00d1\u00aa\u00ba\u00bf\u00ae\u00ac\u00bd\u00bc\u00a1\u00ab\u00bb___\u00a6\u00a6\u00c1\u00c2\u00c0\u00a9\u00a6\u00a6++\u00a2\u00a5++--+-+\u00e3\u00c3++--\u00a6-+\u00a4\u00f0\u00d0\u00ca\u00cb\u00c8i\u00cd\u00ce\u00cf++__\u00a6\u00cc_\u00d3\u00df\u00d4\u00d2\u00f5\u00d5\u00b5\u00fe\u00de\u00da\u00db\u00d9\u00fd\u00dd\u00af\u00b4\u00ad\u00b1_\u00be\u00b6\u00a7\u00f7\u00b8\u00b0\u00a8\u00b7\u00b9\u00b3\u00b2_ ".split("");
for(a=0;a<c.length;a++)g=c.charCodeAt(a)&255,b=127<g?b+h[g-128]:b+String.fromCharCode(g);return b}function R(c){var a,b="";for(a=0;a<c.length;a++)b+=String.fromCharCode(c[a]);return b}function S(c,a,b,g,h){c.version=a.view.getUint16(b,!0);c.bitFlag=a.view.getUint16(b+2,!0);c.compressionMethod=a.view.getUint16(b+4,!0);c.lastModDateRaw=a.view.getUint32(b+6,!0);var d;a:{var f=c.lastModDateRaw,k=(f&4294901760)>>16,f=f&65535;try{d=new Date(1980+((k&65024)>>9),((k&480)>>5)-1,k&31,(f&63488)>>11,(f&2016)>>
5,2*(f&31),0);break a}catch(m){}d=void 0}c.lastModDate=d;if(1===(c.bitFlag&1))h(Z);else{if(g||8!=(c.bitFlag&8))c.crc32=a.view.getUint32(b+10,!0),c.compressedSize=a.view.getUint32(b+14,!0),c.uncompressedSize=a.view.getUint32(b+18,!0);4294967295===c.compressedSize||4294967295===c.uncompressedSize?h($):(c.filenameLength=a.view.getUint16(b+22,!0),c.extraFieldLength=a.view.getUint16(b+24,!0))}}function aa(c,a,b){function g(){}function h(a){function d(g,p){c.readUint8Array(c.size-g,g,function(b){for(var c=
b.length-f;0<=c;c--)if(80===b[c]&&75===b[c+1]&&5===b[c+2]&&6===b[c+3]){a(new DataView(b.buffer,c,f));return}p()},function(){b(T)})}var f=22;if(c.size<f)b(z);else{var g=f+65536;d(f,function(){d(Math.min(g,c.size),function(){b(z)})})}}var d=0;g.prototype.getData=function(a,f,g,h){function q(b){var c=v(4);c.view.setUint32(0,b);return e.crc32==c.view.getUint32(0)}function p(c,e){h&&!q(e)?b(ba):a.getData(function(b){f(b)})}function t(c){b(c||U)}function s(c){b(c||ca)}var e=this;c.readUint8Array(e.offset,
30,function(f){f=v(f.length,f);var q;1347093252!=f.view.getUint32(0)?b(z):(S(e,f,4,!1,b),q=e.offset+30+e.filenameLength+e.extraFieldLength,a.init(function(){if(0===e.compressionMethod)P(e._worker,d++,c,a,q,e.compressedSize,h,p,g,t,s);else{var b=d++,f=c,l=a,m=e.compressedSize,v=h?"output":"none";n.zip.useWebWorkers?M(e._worker,{sn:b,codecClass:"Inflater",crcType:v},f,l,q,m,g,p,t,s):N(new n.zip.Inflater,f,l,q,m,v,g,p,t,s)}},s))},t)};var f={getEntries:function(a){var f=this._worker;h(function(d){var h,
q;h=d.getUint32(16,!0);q=d.getUint16(8,!0);0>h||h>=c.size?b(z):c.readUint8Array(h,c.size-h,function(c){var d=0,h=[],e,l,n=v(c.length,c);for(c=0;c<q;c++){e=new g;e._worker=f;if(1347092738!=n.view.getUint32(d)){b(z);return}S(e,n,d+6,!0,b);e.commentLength=n.view.getUint16(d+32,!0);e.directory=16==(n.view.getUint8(d+38)&16);e.offset=n.view.getUint32(d+42,!0);l=R(n.array.subarray(d+46,d+46+e.filenameLength));e.filename=2048===(e.bitFlag&2048)?decodeURIComponent(escape(l)):Q(l);e.directory||"/"!=e.filename.charAt(e.filename.length-
1)||(e.directory=!0);l=R(n.array.subarray(d+46+e.filenameLength+e.extraFieldLength,d+46+e.filenameLength+e.extraFieldLength+e.commentLength));e.comment=2048===(e.bitFlag&2048)?decodeURIComponent(escape(l)):Q(l);h.push(e);d+=46+e.filenameLength+e.extraFieldLength+e.commentLength}a(h)},function(){b(T)})})},close:function(b){this._worker&&(this._worker.terminate(),this._worker=null);b&&b()},_worker:null};n.zip.useWebWorkers?V("inflater",function(b){f._worker=b;a(f)},function(c){b(c)}):a(f)}function W(c){var a,
b=[];for(a=0;a<c.length;a++)b.push(c.charCodeAt(a));return b}function da(c,a,b,g){function h(c){b(c||ea)}function d(c){b(c||U)}var f={},k=[],m=0,x=0,r={add:function(a,p,t,s,e){function l(b){var d;A=e.lastModDate||new Date;u=v(26);f[a]={headerArray:u.array,directory:e.directory,filename:w,offset:m,comment:W(unescape(encodeURIComponent(e.comment||"")))};u.view.setUint32(0,335546376);e.version&&u.view.setUint8(0,e.version);g||0===e.level||e.directory||u.view.setUint16(4,2048);u.view.setUint16(6,(A.getHours()<<
6|A.getMinutes())<<5|A.getSeconds()/2,!0);u.view.setUint16(8,(A.getFullYear()-1980<<4|A.getMonth()+1)<<5|A.getDate(),!0);u.view.setUint16(22,w.length,!0);d=v(30+w.length);d.view.setUint32(0,1347093252);d.array.set(u.array,4);d.array.set(w,30);m+=d.array.length;c.writeUint8Array(d.array,b,h)}function r(b,a){var d=v(16);m+=b||0;d.view.setUint32(0,1347094280);"undefined"!=typeof a&&(u.view.setUint32(10,a,!0),d.view.setUint32(4,a,!0));p&&(d.view.setUint32(8,b,!0),u.view.setUint32(14,b,!0),d.view.setUint32(12,
p.size,!0),u.view.setUint32(18,p.size,!0));c.writeUint8Array(d.array,function(){m+=16;t()},h)}function y(){e=e||{};a=a.trim();e.directory&&"/"!=a.charAt(a.length-1)&&(a+="/");f.hasOwnProperty(a)?b(fa):(w=W(unescape(encodeURIComponent(a))),k.push(a),l(function(){if(p)if(g||0===e.level)P(z,x++,p,c,0,p.size,!0,r,s,d,h);else{var b=x++,a=p,f=c,k=r,l=s,m=d,q=h;n.zip.useWebWorkers?M(z,{sn:b,options:{level:e.level},codecClass:"Deflater",crcType:"input"},a,f,0,a.size,l,k,m,q):N(new n.zip.Deflater,a,f,0,a.size,
"input",l,k,m,q)}else r()},h))}var u,w,A,z=this._worker;p?p.init(y,d):y()},close:function(b){this._worker&&(this._worker.terminate(),this._worker=null);var a,d=0,g=0,e,l;for(e=0;e<k.length;e++)l=f[k[e]],d+=46+l.filename.length+l.comment.length;a=v(d+22);for(e=0;e<k.length;e++)l=f[k[e]],a.view.setUint32(g,1347092738),a.view.setUint16(g+4,5120),a.array.set(l.headerArray,g+6),a.view.setUint16(g+32,l.comment.length,!0),l.directory&&a.view.setUint8(g+38,16),a.view.setUint32(g+42,l.offset,!0),a.array.set(l.filename,
g+46),a.array.set(l.comment,g+46+l.filename.length),g+=46+l.filename.length+l.comment.length;a.view.setUint32(g,1347093766);a.view.setUint16(g+8,k.length,!0);a.view.setUint16(g+10,k.length,!0);a.view.setUint32(g+12,d,!0);a.view.setUint32(g+16,m,!0);c.writeUint8Array(a.array,function(){c.getData(b)},h)},_worker:null};n.zip.useWebWorkers?V("deflater",function(b){r._worker=b;a(r)},function(a){b(a)}):a(r)}function ga(c){var a=document.createElement("a");return c.map(function(b){a.href=b;return a.href})}
function V(c,a,b){function g(c){c=c.data;c.error?(f.terminate(),b(c.error)):"importScripts"===c.type&&(f.removeEventListener("message",g),f.removeEventListener("error",h),a(f))}function h(a){f.terminate();b(a)}if(null!==n.zip.workerScripts&&null!==n.zip.workerScriptsPath)b(Error("Either zip.workerScripts or zip.workerScriptsPath may be set, not both."));else{var d;if(n.zip.workerScripts){d=n.zip.workerScripts[c];if(!Array.isArray(d)){b(Error("zip.workerScripts."+c+" is not an array!"));return}d=ga(d)}else d=
ha[c].slice(0),d[0]=(n.zip.workerScriptsPath||"")+d[0];var f=new Worker(d[0]);f.codecTime=f.crcTime=0;f.postMessage({type:"importScripts",scripts:d.slice(1)});f.addEventListener("message",g);f.addEventListener("error",h)}}function X(c){console.error(c)}var z="File format is not recognized.",ba="CRC failed.",Z="File contains encrypted entry.",$="File is using Zip64 (4gb+ file size).",T="Error while reading zip file.",ea="Error while writing zip file.",ca="Error while writing file data.",U="Error while reading file data.",
fa="File already exists.",I=524288,K="text/plain",L;try{L=0===(new Blob([new DataView(new ArrayBuffer(0))])).size}catch(ia){}B.prototype.append=function(c){for(var a=this.crc|0,b=this.table,g=0,h=c.length|0;g<h;g++)a=a>>>8^b[(a^c[g])&255];this.crc=a};B.prototype.get=function(){return~this.crc};B.prototype.table=function(){var c,a,b,g=[];for(c=0;256>c;c++){b=c;for(a=0;8>a;a++)b=b&1?b>>>1^3988292384:b>>>1;g[c]=b}return g}();J.prototype.append=function(c,a){return c};J.prototype.flush=function(){};D.prototype=
new C;D.prototype.constructor=D;E.prototype=new C;E.prototype.constructor=E;y.prototype=new C;y.prototype.constructor=y;w.prototype.getData=function(c){c(this.data)};F.prototype=new w;F.prototype.constructor=F;G.prototype=new w;G.prototype.constructor=G;H.prototype=new w;H.prototype.constructor=H;var ha={deflater:["z-worker.js","deflate.js"],inflater:["z-worker.js","inflate.js"]};n.zip={Reader:C,Writer:w,BlobReader:y,Data64URIReader:E,TextReader:D,BlobWriter:H,Data64URIWriter:G,TextWriter:F,createReader:function(c,
a,b){b=b||X;c.init(function(){aa(c,a,b)},b)},createWriter:function(c,a,b,g){b=b||X;g=!!g;c.init(function(){da(c,a,b,g)},b)},useWebWorkers:!0,workerScriptsPath:null,workerScripts:null}})(this);
