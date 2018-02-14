//cielo-me.po.js

'use strict';  
var helper = require('../../helper/helper.js');

var cieloPage = function() {
	//Cielo
	this.optionFormPagCielo = element(by.id('p_method_nitrocielo'));
	this.inputNumeroCCCielo = element(by.id('nitrocielo_numero_cartao_cielo'));
	this.inputNomeTitularCCCielo = element(by.id('nitrocielo_portador_cielo'));
	this.mesValidadeCCCielo = element(by.id('nitrocielo_expiracao_mes_cielo'));
	this.anoValidadeCCCielo = element(by.id('nitrocielo_expiracao_ano_cielo'));
	this.codSegCCCielo = element(by.id('nitrocielo_codigo_seguranca_cielo'));
	this.inputNumParcelaCCCielo = element(by.id('nitrocielo_parcelas_cielo'));
	this.selecionaUnicaParcelaCCCielo = element(by.css('#nitrocielo_parcelas_cielo > option'));

	this.selecionaFormaPagCielo = function() {
		browser.driver.sleep(3000);
		var formaPagCCCielo = this.optionFormPagCielo;

		helper.waitElementVisibility(formaPagCCCielo);
		formaPagCCCielo.sendKeys(protractor.Key.ENTER);
		formaPagCCCielo.isSelected().then (function(status) {
			if (status === true) {
				console.log('cielo foi selecionada pelo evento protractor.Key.ENTER');
			} else {
				formaPagCCCielo.click();
				if (status === true) {
					console.log('cielo foi selecionada pelo evento click().');
				} else {
					formaPagCCCielo.checked = true;
					console.log('Foi utilizado checked = true. Status Cielo: ' + status);
				};
			};
		});
		browser.driver.sleep(9900);
	};

	this.preencheDadosCCCielo = function(numberCart, nameCart, monthCart,yearCart, codCart) {
		helper.waitElementVisibility(this.inputNumeroCCCielo);
		this.inputNumeroCCCielo.sendKeys(numberCart);
		browser.driver.sleep(1000);
		this.inputNomeTitularCCCielo.sendKeys(nameCart);
		this.mesValidadeCCCielo.sendKeys(monthCart);
		this.anoValidadeCCCielo.sendKeys(yearCart);
		this.codSegCCCielo.sendKeys(codCart);
		browser.driver.sleep(2000);
	};

	this.selecionaPrimeiraParcela = function() {
		helper.waitElementVisibility(this.inputNumParcelaCCCielo);
		this.inputNumParcelaCCCielo.click();
		helper.waitElementVisibility(this.selecionaUnicaParcelaCCCielo);
		this.selecionaUnicaParcelaCCCielo.click();
		browser.driver.sleep(1000);
	};

};

module.exports = new cieloPage();



