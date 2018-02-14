//pag-seguro.po.js

'use strict';  
var helper = require('../../helper/helper.js');

var pagSeguroPage = function() {

	//PagSeguro cc
	this.optionFormPagCCPagSeguro = element(by.id('p_method_rm_pagseguro_cc'));
	this.nomeCCPagSeguro = element(by.id('rm_pagseguro_cc_cc_owner'));
	this.diaAniversarioCCPagSeguro = element(by.id('pagseguro_ps_cc_owner_birthday_day'));
	this.mesAniversarioCCPagSeguro = element(by.id('pagseguro_ps_cc_owner_birthday_month'));
	this.anoAniversarioCCPagSeguro = element(by.id('pagseguro_ps_cc_owner_birthday_year'));
	this.cpfCCPagSeguro = element(by.id('rm_pagseguro_cc_cpf'));
	this.numeroCCPagSeguro = element(by.id('rm_pagseguro_cc_cc_number'));
	this.mesValidCCPagSeguro = element(by.id('rm_pagseguro_cc_expiration'));
	this.anoValidCCPagSeguro = element(by.id('rm_pagseguro_cc_expiration_yr'));
	this.codVerificacaoPagSeguro = element(by.id('rm_pagseguro_cc_cc_cid'));
	this.selecionaNumParcPagSeguro = element(by.id('rm_pagseguro_cc_cc_installments'));
	this.selecionaPrimeiraParcPagSeguro = element(by.css('#rm_pagseguro_cc_cc_installments > option:nth-child(1)'));
	//PagSeguro Boleto
	this.optionFormPagBoletoPagSeguro = element(by.id('p_method_pagseguropro_boleto'));
	this.inputCPF = element(by.id('pagseguropro_boleto_cpf'));

	this.selecionaFormPagCCPagSeguro = function() {
		browser.driver.sleep(8000);
		var checkPagSeguro = this.optionFormPagCCPagSeguro;
		helper.waitElementVisibility(checkPagSeguro);
		checkPagSeguro.sendKeys(protractor.Key.ENTER);
		checkPagSeguro.isSelected().then (function (status) {
			if (status === true) {
				console.log('método de pagamento foi selecionado por meio do evento protractor.Key.ENTER.');
			} else {
				checkPagSeguro.click();
				if (status === true) {
					console.log('método de pagamento foi selecionado por meio do evento click().');
				} else {
					checkPagSeguro.checked = true;
					console.log('Foi utilizado checked=true. Status CC PagSeguro: ' + status);
				};
			};
		});
		browser.driver.sleep(8000);
	};

	this.selecionarFormBoletoPagSeguro = function() {
		browser.driver.sleep(8000);
		var checkboxBoleto = this.optionFormPagBoletoPagSeguro;
		helper.waitElementVisibility(checkboxBoleto);
		checkboxBoleto.sendKeys(protractor.Key.ENTER);
		checkboxBoleto.isSelected().then (function (status) {
			if (status === true) {
				console.log('Boleto PagSeguro foi acionado pelo evento protractor.Key.ENTER');
			} else {
				checkboxBoleto.click();
				if (status === true) {
					console.log('Boleto PagSeguro foi acionado pelo evento click().');
				} else {
					console.log('Boleto PagSeguro não foi acionado, ocorreu ao usar eventos de seleção.');
				};
			};
		});	
		browser.driver.sleep(8000);
	};

	this.preencheDadosCCPagSeguro = function(nome, diaNive, mesNive, anoNive, cpf, numeroCC, mesValidCC, anoValidCC, codVerificacao) {
		this.nomeCCPagSeguro.sendKeys(nome);
		this.diaAniversarioCCPagSeguro.sendKeys(diaNive);
		this.mesAniversarioCCPagSeguro.sendKeys(mesNive);
		this.anoAniversarioCCPagSeguro.sendKeys(anoNive);
		this.cpfCCPagSeguro.sendKeys(cpf);
		this.numeroCCPagSeguro.sendKeys(numeroCC);
		this.mesValidCCPagSeguro.sendKeys(mesValidCC);
		this.anoValidCCPagSeguro.sendKeys(anoValidCC);
		this.codVerificacaoPagSeguro.sendKeys(codVerificacao);
	};

	this.selecionaUmaParcelaPagSeguro = function() {
		browser.driver.sleep(1000);
		this.selecionaNumParcPagSeguro.click();
		helper.waitElementVisibility(this.selecionaPrimeiraParcPagSeguro);
		this.selecionaPrimeiraParcPagSeguro.click();
		browser.driver.sleep(1000);
	};

	this.informarCPFCompraBoleto = function(CPFCompraBoleto) {
		helper.waitElementVisibility(this.inputCPF);
		this.inputCPF.sendKeys(CPFCompraBoleto);
	};	

};

module.exports  = new pagSeguroPage();

