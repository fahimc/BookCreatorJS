(function(window) {
  function Main() {
    if(window.addEventListener) {
        window.addEventListener("load", onLoad);
    } else {
        window.attachEvent("onload", onLoad);
    }

}
  function onLoad() {
    // the body has loaded. 
    // start coding here!
    Event.addListener(DataLoader,DataLoader.ON_DATA_LOADED,dataLoaded);
    DataLoader.init();
   
  }
  function dataLoaded()
  {
  	 Controller.init();
  }

Main();
}
)(window);