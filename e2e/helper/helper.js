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

//
var elementToBeClickable = function(element) {
	this.element = element;
	browser.wait(EC.elementToBeClickable(element), 9000);
};

//Verifica se radiobutton, ou um checkbox foi seleciado antes de avançar para os próximos testes
var elementToBeSelected = function(element) {
	this.element = element;
	browser.wait(EC.elementToBeSelected(element), 9000);
}

// Métodos Gerais de Interação
Helper.prototype.selecionarElementoClick = function(element)	{
	elementToBeClickable.call(this, element);
	element.click();
};

Helper.prototype.selecionarElementoENTER = function(element) {
	elementToBeClickable.call(this, element);
	element.sendKeys(protractor.Key.ENTER);
};

Helper.prototype.informarTextoElemento = function (element, txt) {
	this.txt = txt;
	waitElementVisibility.call(this, element);
	element.clear().sendKeys(txt);
};

Helper.prototype.selecionarRadioButtonCheckbox = function (element) {
	waitElementVisibility.call(this, element);
	var teste = element.checked;
	element.isSelected().then(function (statusElement) {
		if (statusElement === true) {
			console.log ('nenhuma ação precisa ser realizada, opção já está selecionada.');
		} else {
			element.checked = true;
			elementToBeSelected.call(this, element);
			console.log('Foi utilizado checked = true. Status do radioButton: ' + statusElement);
		};
	});
	browser.driver.sleep(2000);
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