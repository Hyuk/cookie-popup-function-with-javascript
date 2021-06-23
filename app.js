var cookieBlock = document.getElementsByClassName("use-of-cookies")[0];
var cookiePopupClose = document.getElementById('cookie-popup-close');
var body = body = document.getElementsByTagName('body')[0];

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
  if(window.innerWidth == body.clientWidth) {
    cookieBlock.setAttribute("style", "display:block; width:100%;");
  }
}

cookiePopupClose.onclick = function() {
  cookieBlock.style.display = "none";
  var now = new Date();
  var minutes = 60 * 24 * 30 * 6;
  now.setTime(now.getTime() + (minutes * 60 * 1000));
  cookievalue = "agree;";
  document.cookie = "anr-bc-cookie=" + cookievalue + "; expires=" + now.toUTCString() + ";";
}