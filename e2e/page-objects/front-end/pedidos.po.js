//pedidos.po.js

'use strict';  
var helper = require('../../helper/helper.js');

var pedidosPage = function() {

	this.msgBoasVindas = element(by.css('.hello'));
	this.listRequests = element(by.id('my-orders-table'));
	this.menuMeusPedidos = element(by.cssContainingText('span', 'Meus Pedidos'));
	this.titlePageMeusPedidos = element(by.cssContainingText('.page-title h1', ' Meus Pedidos'));

	this.selecionaMenuMeusPedidos = function() {
		this.menuMeusPedidos.click();
		helper.waitElementVisibility(this.titlePageMeusPedidos);
	};
};

module.exports = new pedidosPage();