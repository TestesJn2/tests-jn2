//confirma-pedido-comprado.po.js

'use strict';  
var helper = require('../../helper/helper.js');

var confirmaPedidoCompradoPage = function() {

	this.tituloAcompanheSeuPedido = element(by.cssContainingText('h4', 'Acompanhe seu pedido'));
	this.linhaProgressoConfirmacao = element(by.css('.bs-wizard>.bs-wizard-step.active .bs-wizard-stepnum'));
	this.linkMeusPedidos = element(by.linkText('Meus Pedidos'));
	this.boxAcompanhamentoPedido = element(by.css('.center-block'));
	this.logoConfirmacao = element(by.css('.msg-default div'));
	//Compras com Boleto
	this.msgImprimaSeuBoleto = element(by.cssContainingText('span', 'Imprimir Boleto'));
	//Dados do Pedido
	this.tituloResumoPedido = element(by.cssContainingText('h4', 'Resumo do Pedido'));
	this.sectionEnderecoEntrega = element(by.cssContainingText('h5', 'Endereço de entrega'));
	this.sectionEnderecoCobranca = element(by.cssContainingText('h5', 'Endereço de Cobrança'));
	this.sectionFormaEntrega = element(by.cssContainingText('h5', 'Forma de Entrega'));
	this.sectionFormaPagamento = element(by.cssContainingText('h5', 'Forma de Pagamento'));
	this.sectionItens = element(by.cssContainingText('th', 'Item'));

};

module.exports = new confirmaPedidoCompradoPage();
