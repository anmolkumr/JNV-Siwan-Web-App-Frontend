    function onLoad() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    }
    function onDeviceReady() {
      window.plugins.PushbotsPlugin.initialize("5c4313900540a3572f1fcda3", {"android":{"sender_id":"355622521099"}});
// Only with First time registration
window.plugins.PushbotsPlugin.on("registered", function(token){
	console.log("Registration Id:" + token);
});

//Get user registrationId/token and userId on PushBots, with evey launch of the app even launching with notification
window.plugins.PushbotsPlugin.on("user:ids", function(data){
	console.log("user:ids" + JSON.stringify(data));
});

       window.plugins.preventscreenshot.enable(successCallback, errorCallback);

function successCallback(result) {
 console.log(result); // true - enabled, false - disabled
}

function errorCallback(error) {
 console.log(error);
}
      window.plugins.headerColor.tint("#2e4991");
      document.getElementById("openBrowser").addEventListener("click", openBrowser);
      function openBrowser() {
   var url = 'http://jnvapp.co.nf';
   var target = '_blank';
   var options = "location=no"
   var ref = cordova.InAppBrowser.open(url, target, options);

   ref.addEventListener('loadstart', loadstartCallback);
   ref.addEventListener('loadstop', loadstopCallback);
   ref.addEventListener('loaderror', loaderrorCallback);
   ref.addEventListener('exit', exitCallback);

   function loadstartCallback(event) {
      console.log('Loading started: '  + event.url)
   }

   function loadstopCallback(event) {
      console.log('Loading finished: ' + event.url)
   }

   function loaderrorCallback(error) {
      console.log('Loading error: ' + error.message)
   }

   function exitCallback() {
      console.log('Browser is closed...')
   }
 }//openBrowser

 }//onDeviceReady
