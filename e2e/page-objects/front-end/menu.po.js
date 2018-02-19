//menu.po.js

'use strict';  
var helper = require('../../helper/helper.js');

var menuPage = function () {

	//Minha Conta
   	this.linkMinhaContaOptionMenu = element(by.linkText('minha conta'));

  	//Elements Login/Logout Descktop
    this.linkLogout = element(by.cssContainingText('a', 'Sair'));
    this.linkLogin = element(by.cssContainingText('strong', 'Entre'));
    this.linkCadastrarNovoCliente = element(by.cssContainingText('span', 'Cadastre-se'));
    this.linkCarrinhoCompras = element(by.css('.cart-header'));

	  this.url = function () {
    	browser.get('');
  	};

  	/*this.acessoPagCadastroNovoCliente = function() { 
  		helper.waitElementVisibility(this.linkCadastrarNovoCliente);
  		this.linkCadastrarNovoCliente.click();
  	};*/

  	/*this.acessaPagLogin = function() {
  		helper.waitElementVisibility(this.linkLogin)
    	this.linkLogin.click();
  	};*/

  	/*this.efetuaLogout = function() {
  		helper.waitElementVisibility(this.linkLogout);
    	this.linkLogout.click();
 	};*/

 /*	this.clickCarrinhoDeCompras = function() {
 		helper.waitElementVisibility(this.linkCarrinhoCompras);
 		this.linkCarrinhoCompras.click();
 	};*/

  this.selecionarLinkMinhaConta = function() {
    helper.waitElementVisibility(this.linkMinhaContaOptionMenu);
    this.linkMinhaContaOptionMenu.click();
  };
};

module.exports = new menuPage();