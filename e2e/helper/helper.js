//helper.js

'use strict';
var	EC = protractor.ExpectedConditions;

var	Helper	=	function()	{};

var waitElementVisibility	= function(element)	{
	this.element = element;		
	browser.wait(EC.visibilityOf(element),	9000); 
};

Helper.prototype.waitElementVisibility = function() {};

var selecionarElemento = function(element)	{	
	waitElementVisibility.call(element);
	element.sendKeys(protractor.Key.ENTER); 
};

Helper.prototype.selecionarElemento = function() {};

var editarElemento = function (element, txt) {
	waitElementVisibility.call(element);
	this.texto = txt;
	element.sendKeys(texto);
};

Helper.prototype.editarElemento = function() {};

module.exports	=	new Helper();