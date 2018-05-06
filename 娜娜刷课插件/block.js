chrome.webRequest.onBeforeRequest.addListener(
function(info) {
	alert(info);
  return {cancel: true};
},
{
  urls: [
  "http://passport2.chaoxing.com/api/passport2-onlineinfo.js*"
]
}, ['blocking']);
