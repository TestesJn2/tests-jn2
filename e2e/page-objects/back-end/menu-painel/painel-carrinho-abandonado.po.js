//painel-carrinho-abandonado.po.js

'use strict';  
var helper = require('../../helper/helper.js');

var painelCarrinhoAbandonadoPage = function() {

	this.tituloCarrinhoAbandonado = element(by.cssContainingText('h3', 'Painel de Carrinho Abandonado (Ebizmarts)'));
	this.tituloReceitaGerada = element(by.cssContainingText('h4', 'Receita Gerada ao Longo da Vida'));
	this.tituloMedidasPedido = element(by.cssContainingText('h4', 'Média de Pedidos'));
	this.tituloReceita = element(by.cssContainingText('h4', 'Receita'));
	this.tituloImpostos = element(by.cssContainingText('h4', 'Impostos'));
	this.tituloEnvios = element(by.cssContainingText('h4', 'Envios'));
	this.tituloPedidos = element(by.cssContainingText('h4', 'Pedidos'));
	this.tituloTaxa = element(by.cssContainingText('h4', 'Taxa'));
	this.labelPrecos = element(by.css('.price'));
	
};

module.exports = new painelCarrinhoAbandonadoPage();