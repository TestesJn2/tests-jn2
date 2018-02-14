//transacoes.po.js

'use strict';  
var helper = require('../../../helper/helper.js');

var transacoesPage = function() {
	this.tituloTransacoes = element(by.cssContainingText('h3', 'Transações'));
	this.btnLimparFiltros = element(by.buttonText('Limpar Filtros'));
	this.btnFiltrar = element(by.buttonText('Filtrar'));
	this.columnId = element(by.cssContainingText('.sort-title', 'ID #'));
	this.inputIdIni = element(by.id('order_transactions_filter_transaction_id_from'));
	this.inputIdFinal = element(by.id('order_transactions_filter_transaction_id_to'));
	this.columnIdPedido = element(by.cssContainingText('.sort-title', 'ID do Pedido'));
	this.inputIdPedido = element(by.id('order_transactions_filter_increment_id'));
	this.columnIdTransacao = element(by.cssContainingText('.sort-title', 'ID da Transação'));
	this.inputIdTransacao = element(by.id('order_transactions_filter_txn_id'));
	this.columnIdTransacaoParente = element(by.cssContainingText('.sort-title', 'ID Transação Parente'));
	this.inputIdTransacaoParente = element(by.id('order_transactions_filter_parent_txn_id'));
	this.columnNmMetodoPagamento = element(by.cssContainingText('.sort-title', 'Nome do Método de Pagamento'));
	this.inputNmMetodoPagamento = element(by.id('order_transactions_filter_method'));
	this.columnTipoTransacao = element(by.cssContainingText('.sort-title', 'Tipo da Transação'));
	this.inputTipoTransacao = element(by.id('order_transactions_filter_txn_type'));
	this.columnEstaFechado = element(by.cssContainingText('.sort-title','Está Fechado'));
	this.inputEstaFechado = element(by.id('order_transactions_filter_is_closed'));
	this.columnCriadoEm = element(by.cssContainingText('.sort-title', 'Criado Em'));
	this.inputCriadoEmIni = element(by.id('order_transactions_filter_created_at1516625193.5375_from'));
	this.inputCriadoEmFinal = element(by.id('order_transactions_filter_created_at1516625193.5375_to'));

};

module.exports = new transacoesPage();