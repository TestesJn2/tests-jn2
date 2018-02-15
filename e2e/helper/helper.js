//helper.js

'use strict';
var	EC = protractor.ExpectedConditions;

var	Helper	=	function()	{};

var waitElementVisibility	= function(element)	{
	this.element = element;		
	browser.wait(EC.visibilityOf(element),	9000); 
};

Helper.prototype.waitElementVisibility = function() {};

Helper.prototype.selecionarElemento = function(element)	{	
	waitElementVisibility.call(this, element);
	element.sendKeys(protractor.Key.ENTER); 
};

Helper.prototype.editarElemento = function (element, txt) {
	waitElementVisibility.call(this, element);
	this.txt = txt;
	element.clear().sendKeys(txt);
};

module.exports	=	new Helper();