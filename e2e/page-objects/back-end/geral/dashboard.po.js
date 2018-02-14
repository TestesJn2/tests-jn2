//dashboard.po.js

'use strict';  
var helper = require('../../../helper/helper.js');

var dashboardPage = function() {

	//Elementos Dashboard
	this.tituloPainel = element(by.cssContainingText('.head-dashboard', 'Painel'));
	this.tituloCicloVendas = element(by.cssContainingText('h4','Ciclo de Vendas'));
	this.tituloMediaPedidos = element(by.cssContainingText('h4', 'Média dos Pedidos'));
	this.tituloUltimosPedidos = element(by.cssContainingText('h4', 'Últimos 5 Pedidos'));
	this.tituloUltimasPesquisas = element(by.cssContainingText('h4', 'Últimas 5 Pesquisas'));
	this.tituloTermosProcurados = element(by.cssContainingText('h4', 'Top 5 Termos Mais Procurados'));
	this.btnSectionPedidos = element(by.id('diagram_tab_orders'));
	this.msgAmbienteTeste = element(by.cssContainingText('.message-text', '[UOL_PagSeguro] Suas transações serão feitas em um ambiente de testes.'));
}

module.exports = new dashboardPage();