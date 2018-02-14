//autenticacao.po.js

'use strict';  
var helper = require('../../../helper/helper.js');

var autenticacaoPage = function() {

	//Elementos
	this.imgLogo = element(by.css('.logo-login'));
	this.tituloPainelAdmin = element(by.cssContainingText('h2', 'Painel Administrativo'));
	this.labelUsuario = element (by.cssContainingText('label', 'Usuário:'));
	this.inputUsuario = element(by.id('username'));
	this.labelSenha = element(by.cssContainingText('label', 'Senha:'));
	this.inputSenha = element(by.id('login'));
	this.btnConfirmacao = element(by.css('#loginForm > div.login-form > div.form-buttons > input'));
	this.linkEsqueceuSenha = element(by.linkText('Esqueceu sua senha?'));
	this.msgLoginInvalido = element(by.css('.error-msg'));


	this.login = function (user, password) {
		helper.waitElementVisibility(this.inputUsuario);
		this.inputUsuario.clear().sendKeys(user);
		this.inputSenha.clear().sendKeys(password);
		this.btnConfirmacao.click();
	};
};

module.exports = new autenticacaoPage();
