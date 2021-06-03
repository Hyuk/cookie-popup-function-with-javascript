var cookieBlock = document.getElementsByClassName("use-of-cookies")[0];
var cookiePopupClose = document.getElementById('cookie-popup-close');

function getCookie(name) {
  function escape(s) { return s.replace(/([.*+?\^$(){}|\[\]\/\\])/g, '\\$1'); }
  var match = document.cookie.match(RegExp('(?:^|;\\s*)' + escape(name) + '=([^;]*)'));
  return match ? match[1] : null;
}

function getNow() {
  var now = new Date();
  return now.getTime();
}

if(getCookie("anr-bc-cookie") == "agree") {
  cookieBlock.style.display = "none";
} else {
  cookieBlock.style.display = "block";
}

cookiePopupClose.onclick = function() {
  cookieBlock.style.display = "none";
  var now = new Date();
  var minutes = 60 * 24 * 30 * 6;
  now.setTime(now.getTime() + (minutes * 60 * 1000));
  cookievalue = "agree;";
  document.cookie = "anr-bc-cookie=" + cookievalue + "; expires=" + now.toUTCString() + ";";
}

body = document.getElementsByTagName('body')[0];
if (window.innerWidth == body.clientWidth) {
  cookieBlock.setAttribute("style", "width:100%")
}