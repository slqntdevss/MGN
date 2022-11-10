if (getCookie("icon") == "")
{
    setCookie("icon", "google.ico", 365*100);
}
if (getCookie("title") == "")
{
    setCookie("title", "Google", 365*100);
}
var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
link.type = 'image/x-icon';
link.rel = 'shortcut icon';
link.href = getCookie("icon");
document.getElementsByTagName('head')[0].appendChild(link);

document.title = getCookie("title");
document.getElementsByTagName("TITLE")[0].text = getCookie("title");

function setIcon(lnk)
{
    var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/x-icon';
    link.rel = 'shortcut icon';
    link.href = lnk;
    document.getElementsByTagName('head')[0].appendChild(link);
    setCookie("icon", lnk, 365*100);
}
function setTitle(title)
{
    document.title = title;
    document.getElementsByTagName("TITLE")[0].text = title;
    setCookie("title", title, 365*100);
}
//cookie functions from w3schools
function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  let expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
function getCookie(cname) {
  let name = cname + "=";
  let ca = document.cookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
