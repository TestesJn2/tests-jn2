//gerenciar-clientes.po.js

'use strict';  
var helper = require('../../../helper/helper.js');

var gerenciarClientesPage = function() {
	this.tituloGerenciarClientes = element(by.cssContainingText ('h3', 'Gerenciar Clientes'));
	this.inputBuscaEmail = element(by.id('customerGrid_filter_email'));
	this.valueTesteAutomatizado = element(by.cssContainingText('td', 'USUARIO TESTE AUTOMATIZADO LOGIN'));
	this.valueUserPagSeguro = element(by.cssContainingText('td', 'TESTE PAGSEGURO'));
	this.inputAcoes = element(by.id('customerGrid_massaction-select'));
	this.inputAcoesOptionExcluir = element(by.css('#customerGrid_massaction-select > option:nth-child(2)'));


	this.InformarEmailParaBusca = function(email) {
		helper.waitElementVisibility(this.inputBuscaEmail);
		this.inputBuscaEmail.sendKeys(email);
	};	

	this.selecionarAcaoExcluir = function() {
		helper.waitElementVisibility(this.inputAcoes);
		this.inputAcoes.click();
		helper.waitElementVisibility(this.inputAcoesOptionExcluir);
		this.inputAcoesOptionExcluir.click();
	};
};

module.exports = new gerenciarClientesPage();