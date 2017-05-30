"use strict";

console.log("event-listener.js loaded");

let $ = require('jquery');

$("#btn-1").click(function(event){
	console.log("btn one was clicked");
});

$("#btn-2").click(function(event) {
	console.log("btn two was clicked");
});