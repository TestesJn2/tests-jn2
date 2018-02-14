//minha-conta-meus-comentarios.po.js

'use strict';  

var helper = require('../../helper/helper.js');

var minhaContaMeusComentariosPage = function() {
	//Menu
	this.menuMeusComentarios = element(by.linkText('Meus Comentários'));

	//Elementos da Página
	this.tituloMeusComentarios = element(by.cssContainingText('h1',' Meus Comentários'));
	this.linkVoltar = element(by.cssContainingText('a', 'Voltar'));

	this.selecionarMenuMeusPedidos = function() {
		helper.waitElementVisibility(this.menuMeusComentarios);
		this.menuMeusComentarios.click();
		this.tituloMeusComentarios.isPresent().then (function (statusMenuMeusComentarios) {
			if (statusMenuMeusComentarios === true) {
				console.log ('Menu Meus Pedidos foi acionado por click().');
			} else {
				this.menuMeusComentarios.sendKeys(protractor.Key.ENTER);
				if (statusMenuMeusComentarios === true) {
					console.log('Menu Meus Pediso foi acionado com sendKeys(protractor.Key.ENTER).');
				} else {
					console.log ('Ocorreu um erro na seleção do menu Meus Pedidos.');
				};
			};
		});
	};
};

module.exports = new minhaContaMeusComentariosPage();