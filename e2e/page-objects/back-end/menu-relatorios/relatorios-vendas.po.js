//geral-relatorios.po.js

'use strict';  
var helper = require('../../../helper/helper.js');

var geralRelatoriosPage = function () {
	//Titulo
	this.tituloRelatorioVendas = element(by.cssContainingText('h3', 'Relatório de Vendas'));

	//Filtro
	this.labelCoincidirPeriodoPara = element(by.cssContainingText('label', 'Coincidir Período Para'));
	this.inputCoincidirPeriodoPara = element(by.id('sales_report_report_type'));
	this.labelPeriodo = element(by.cssContainingText('label','sales_report_period_type'));
	this.inputPeriodo = element(by.id('sales_report_period_type'));
	this.labelDe = element(by.cssContainingText('label', 'De'));
	this.inputDe = element(by.id('sales_report_from'));
	this.labelPara = element(by.cssContainingText('label', 'Para'));
	this.inputPara = element(by.id('sales_report_to'));
	this.labelSituacaoPedido = element(by.cssContainingText('label', 'Situação do Pedido'));
	this.inputSituacaoPedido = element(by.id('sales_report_show_order_statuses'));
	this.labelLinhasVazias = element(by.cssContainingText('label', 'sales_report_show_empty_rows'));
	this.inputLinhasVazias = element(by.id('sales_report_show_empty_rows'));
	this.labelExibirValoresAtuais = element(by.cssContainingText('label', 'Exibir Valores Atuais'));
	this.inputExibirValoresAtuais = element(by.id('sales_report_show_actual_columns'));
};

module.exports = new geralRelatoriosPage();