main = function() {
  link = "http://sikulix.com";
  worked = App.openLink(link);
  if (!worked) {
    Debug.error("App.openLink(%s): did not work", link);
    return false;
  }
	r = wait("sxpower", 5);
  if (isNull(r)) {
    Debug.error("App.openLink(%s): did not open", link);
    return false;
  }
	use1(r.below(100));
	click("quickstart");
  Sikulix.popup("Click OK:\n- to close the browser window\n- and terminate");
  closeBrowserWindow();
};

Sikulix.popup("Hello from git showcase JavaScript");
main();
