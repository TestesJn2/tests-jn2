//pagar-me.po.js

'use strict';  
var helper = require('../../helper/helper.js');

var pagarmePage = function () {

	//Pagar.me
	this.optionPagarMeBoleto = element(by.id('p_method_pagarme_boleto'));
	this.optionPagarMeCC = element(by.id('p_method_pagarme_cc'));
	this.inputNumeroParcelas = element(by.id('pagarme_cc_installments'));
	this.optionPrimeiraParcela = element(by.css('#pagarme_cc_installments > option:nth-child(2)'));								
	this.inputNumberPagarme = element(by.id('pagarme_cc_cc_number'));
	this.inputNamePagarme = element(by.id('pagarme_cc_cc_owner'));
	this.dateMonthPagarme = element(by.id('pagarme_cc_expiration'));
	this.dateYearPagarme = element(by.id('pagarme_cc_expiration_yr'));
	this.codeSegurityPagarme = element(by.id('pagarme_cc_cc_cid'));

	/*this.selecionaFormaPagCCPagarMe = function () {
		helper.waitElementVisibility(this.optionPagarMeCC);
		this.optionPagarMeCC.click();
		browser.driver.sleep(8000);
	};*/

	this.selecionaFormPagBoleto = function() {
		helper.waitElementVisibility(this.optionPagarMeBoleto);
		this.optionPagarMeBoleto.click();
		browser.driver.sleep(8000);
	};

	this.selecionaPrimeiraParcela = function() {
		helper.waitElementVisibility(this.inputNumeroParcelas);
		this.inputNumeroParcelas.click();
		helper.waitElementVisibility(this.optionPrimeiraParcela);
		this.optionPrimeiraParcela.click();
		browser.driver.sleep(500);	
	};

	this.preencheDadosDoCCPagarMe = function(numberCart, nameCart, monthCart, yearCart, codCart) {
		this.inputNumberPagarme.sendKeys(numberCart);
		this.inputNamePagarme.sendKeys(nameCart);
		this.dateMonthPagarme.sendKeys(monthCart);
		this.dateYearPagarme.sendKeys(yearCart);
		this.codeSegurityPagarme.sendKeys(codCart);
	};
};

module.exports = new pagarmePage();