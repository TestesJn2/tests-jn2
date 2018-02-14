//minha-conta-meus-pedidos.po.js

'use strict';  

var helper = require('../../helper/helper.js');

var minhaContaMeusPedidosPage = function() {

	//Elementos da Página
	this.tituloMeusPedidos = element(by.cssContainingText('h1','Meus Pedidos'));
	this.linkVoltar = element(by.cssContainingText('a', 'Voltar'));
	this.menuMeusPedidosDetalhes = element(by.linkText('Meus Pedidos'));


	this.selecionarMenuMeusPedidos = function() {
		helper.waitElementVisibility(this.menuMeusPedidosDetalhes);
		this.menuMeusPedidosDetalhes.click();
		this.tituloMeusPedidos.isPresent().then (function (statusPagMeusPedidos) {
			if (statusPagMeusPedidos === true) {
				console.log ('Menu Meus Pedidos foi acionado por click().');
			} else {
				this.menuMeusPedidosDetalhes.sendKeys(protractor.Key.ENTER);
				if (statusPagMeusPedidos === true) {
					console.log('Menu Meus Pediso foi acionado com sendKeys(protractor.Key.ENTER).');
				} else {
					console.log ('Ocorreu um erro na seleção do menu Meus Pedidos.');
				};
			};
		});
	};
};

module.exports = new minhaContaMeusPedidosPage();