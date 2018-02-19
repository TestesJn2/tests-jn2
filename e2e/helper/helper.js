//helper.js

'use strict';
var	EC = protractor.ExpectedConditions;

var	Helper	=	function()	{};

//Esperas Explicitas e Implicitas

var waitElementVisibility	= function(element)	{
	this.element = element;		
	browser.wait(EC.visibilityOf(element),	9000); 
};

Helper.prototype.waitElementVisibility = function() {};

var  alertElementPresent = function(element) {
	this.element = element;
	browser.wait(EC.alertIsPresent(element), 9000);
};

var elementToBeClickable = function(element) {
	this.element = element;
	browser.wait(EC.elementToBeClickable(element), 9000);
};

// Métodos Gerais
Helper.prototype.selecionarElementoClick = function(element)	{
	elementToBeClickable.call(this, element);
	element.click();
};

Helper.prototype.informarTextoElemento = function (element, txt) {
	this.txt = txt;
	waitElementVisibility.call(this, element);
	element.clear().sendKeys(txt);
};

Helper.prototype.selecionarRadioButton = function (element) {

};

Helper.prototype.selecionarElementoIFrame = function (idIFrame, Element) {

};

Helper.prototype.editarElementoIFrame = function (idIFrame, Element, txt) {

};

Helper.prototype.interagirPopUp = function(element) {

};

Helper.prototype.selecionarElementoEmLista = function (element, index) {

};

module.exports	=	new Helper();