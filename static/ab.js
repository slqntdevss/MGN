function ab() {
	alert("About Blank cloaking WILL NOT prevent blocking. It just makes it so the URL is hidden.")
 var page = new ABC({
    "type": "blank",
    "url": window.location.origin
  })
  console.log(page.getCode())
  page.open()
}