/* FileSaver.js
 * A saveAs() FileSaver implementation.
 * 2014-08-29
 *
 * By Eli Grey, http://eligrey.com
 * License: X11/MIT
 *   See https://github.com/eligrey/FileSaver.js/blob/master/LICENSE.md
 */

/*global self */
/*jslint bitwise: true, indent: 4, laxbreak: true, laxcomma: true, smarttabs: true, plusplus: true */

/*! @source http://purl.eligrey.com/github/FileSaver.js/blob/master/FileSaver.js */
'use strict';var saveAs=saveAs||"undefined"!==typeof navigator&&navigator.msSaveOrOpenBlob&&navigator.msSaveOrOpenBlob.bind(navigator)||function(a){if("undefined"===typeof navigator||!/MSIE [1-9]\./.test(navigator.userAgent)){var k=a.document,p=function(){return a.URL||a.webkitURL||a},m=k.createElementNS("http://www.w3.org/1999/xhtml","a"),x="download"in m,y=function(c){var e=k.createEvent("MouseEvents");e.initMouseEvent("click",!0,!1,a,0,0,0,0,0,!1,!1,!1,!1,0,null);c.dispatchEvent(e)},q=a.webkitRequestFileSystem,
u=a.requestFileSystem||q||a.mozRequestFileSystem,z=function(c){(a.setImmediate||a.setTimeout)(function(){throw c;},0)},r=0,s=function(c){var e=function(){"string"===typeof c?p().revokeObjectURL(c):c.remove()};a.chrome?e():setTimeout(e,10)},t=function(c,e,d){e=[].concat(e);for(var a=e.length;a--;){var b=c["on"+e[a]];if("function"===typeof b)try{b.call(c,d||c)}catch(f){z(f)}}},l=function(c,e){var d=this,b=c.type,k=!1,f,n,l=function(){t(d,["writestart","progress","write","writeend"])},g=function(){if(k||
!f)f=p().createObjectURL(c);n?n.location.href=f:void 0==a.open(f,"_blank")&&"undefined"!==typeof safari&&(a.location.href=f);d.readyState=d.DONE;l();s(f)},h=function(c){return function(){if(d.readyState!==d.DONE)return c.apply(this,arguments)}},v={create:!0,exclusive:!1},w;d.readyState=d.INIT;e||(e="download");if(x)f=p().createObjectURL(c),m.href=f,m.download=e,y(m),d.readyState=d.DONE,l(),s(f);else{a.chrome&&b&&"application/octet-stream"!==b&&(w=c.slice||c.webkitSlice,c=w.call(c,0,c.size,"application/octet-stream"),
k=!0);q&&"download"!==e&&(e+=".download");if("application/octet-stream"===b||q)n=a;u?(r+=c.size,u(a.TEMPORARY,r,h(function(a){a.root.getDirectory("saved",v,h(function(a){var b=function(){a.getFile(e,v,h(function(a){a.createWriter(h(function(b){b.onwriteend=function(b){n.location.href=a.toURL();d.readyState=d.DONE;t(d,"writeend",b);s(a)};b.onerror=function(){var a=b.error;a.code!==a.ABORT_ERR&&g()};["writestart","progress","write","abort"].forEach(function(a){b["on"+a]=d["on"+a]});b.write(c);d.abort=
function(){b.abort();d.readyState=d.DONE};d.readyState=d.WRITING}),g)}),g)};a.getFile(e,{create:!1},h(function(a){a.remove();b()}),h(function(a){a.code===a.NOT_FOUND_ERR?b():g()}))}),g)}),g)):g()}},b=l.prototype;b.abort=function(){this.readyState=this.DONE;t(this,"abort")};b.readyState=b.INIT=0;b.WRITING=1;b.DONE=2;b.error=b.onwritestart=b.onprogress=b.onwrite=b.onabort=b.onerror=b.onwriteend=null;return function(a,b){return new l(a,b)}}}("undefined"!==typeof self&&self||"undefined"!==typeof window&&
window||this.content);"undefined"!==typeof module&&null!==module?module.exports=saveAs:"undefined"!==typeof define&&null!==define&&null!=define.amd&&define([],function(){return saveAs});
