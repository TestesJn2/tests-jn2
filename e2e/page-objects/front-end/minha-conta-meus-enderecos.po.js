//minha-conta-meus-enderecos.po.js

'use strict';  
var helper = require('../../helper/helper.js');

var minhaContaMeusEnderecosPage = function() {
	//Menu
	this.menuMeusEnderecos = element(by.cssContainingText('span', 'Meus Endereços'));
	//Elementos da Página
	this.tituloMeusEnderecos = element(by.cssContainingText('h1', ' Meus Endereços'));
	this.btnAdicionarEndereco = element(by.buttonText('Adicionar Endereço'));
	this.tituloEndCobrancaPrincipal = element(by.cssContainingText('h3', 'Endereço de Cobrança Principal'));
	this.boxEnderecoPrincipal = element(by.css('address')); //Primeiro Listado
	this.btnAlterarEndereco = element(by.cssContainingText('a', 'Alterar Endereço de Cobrança')); //Primeiro Listado
	this.tituloOutrosEnderecos = element(by.cssContainingText('h2', 'Outros Endereços'));
	this.linkVoltar = element(by.cssContainingText('a', 'Voltar'));


	this.selecionarMenuMeusEnderecos = function() {
		helper.waitElementVisibility(this.menuMeusEnderecos);
		this.menuMeusEnderecos.click();
		this.tituloMeusEnderecos.isPresent().then( function(statusTituloEndereco) {
			if (statusTituloEndereco === true) {
				console.log('menu endereço foi acionado por meio click().');
			} else {
				this.menuMeusEnderecos.sendKeys(protractor.Key.ENTER);
				if (statusTituloEndereco === true) {
					console.log('menu endereço foi acionado por meio sendKeys(protractor.Key.ENTER).');
				} else {
					console.log('algum erro de seleção ocorreu. Menu endereço não pode ser acionado pelos métodos click() e sendKeys(protractor.Key.ENTER).');
				};
			};
		});
	};


};

module.exports = new minhaContaMeusEnderecosPage();