// config requirejs
/*
require.config({
    urlArgs: "bust=" + (new Date()).getTime()
});
*/

require(["/static/scripts/pages/ScrumBoard/Application.js"], function(Application) {
	Application.start();
});