"use strict";

console.log("main.js and app.js has loaded");

let $ = require('jquery'),
	databaseURL = require('./api-getter.js');

let outputArea = $("#output");

$.ajax({
	url: 'https://api.nasa.gov',
	type: 'GET',
	dataType: 'json',
}).then(function() {
	console.log("shit is fire");
});
