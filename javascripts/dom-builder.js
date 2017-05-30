"use strict";

console.log("dom builder has loaded");

let $ = require('jquery'),
	mainTemplate = require('../templates/main.hbs');

function buildDOM(build){
	let mainOutput = mainTemplate(build);
	$("#output").html(mainOutput);
}

module.exports = {buildDOM};