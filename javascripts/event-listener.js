"use strict";

console.log("event-listener.js loaded");

let $ = require('jquery');

$("#btn-1").click(function(event){
	console.log("btn one was clicked");
});

$("#btn-2").click(function(event) {
	console.log("btn two was clicked");
});

$("#btn-3").click(function(event) {
	console.log("btn three was clicked");
});

$("#btn-4").click(function(event){
	console.log("btn four was clicked");
});