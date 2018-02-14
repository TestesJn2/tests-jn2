//minha-conta-dados-de-acesso.po.js

'use strict';  
var helper = require('../../helper/helper.js');

var minhaContaDadosAcessoPage = function() {
	//Menu
	this.menuDadosAcesso = element(by.linkText('Dados de Acesso'));
	
	//Elementos da Página
	this.tituloEditarDadosAcesso = element(by.cssContainingText('h1', ' Editar Dados de Acesso'));
	this.labelNmCompleto = element(by.cssContainingText('label', 'Nome Completo'));
	this.inputNmCompleto = element(by.id('firstname'));
	this.labelEndEmail = element(by.cssContainingText('label', 'Endereço de Email'));
	this.inputEndEmail = element(by.id('email'));
	this.checkAlterarSenha = element(by.id('change_password'));
	this.labelAlterarSenha = element(by.cssContainingText('label', 'Alterar Senha'));
	this.msgCamposObrigatorios = element(by.cssContainingText('.buttons-set p', '* Campos Obrigatórios'));
	this.btnSalvar = element(by.id('btn-save'));
	this.linkVoltar = element(by.cssContainingText('a', 'Voltar'));	


	this.selecionarMenuDadosAcesso = function() {
		helper.waitElementVisibility(this.menuDadosAcesso);
		this.menuDadosAcesso.click();
		this.tituloEditarDadosAcesso.isPresent().then( function(statusEditarDadosAcesso) {
			if (statusEditarDadosAcesso === true) {
				console.log('menu Dados de Acesso foi acionado por meio click().');
			} else {
				this.menuDadosAcesso.sendKeys(protractor.Key.ENTER);
				if (statusEditarDadosAcesso === true) {
					console.log('menu Dados de Acesso foi acionado por meio sendKeys(protractor.Key.ENTER).');
				} else {
					console.log('algum erro de seleção ocorreu. Menu Dados de Acesso não pode ser acionado pelos métodos click() e sendKeys(protractor.Key.ENTER).');
				};
			};
		});
	};
};

module.exports = new minhaContaDadosAcessoPage();