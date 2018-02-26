//clientes-online.po.js

'use strict';  
var helper = require('../../../helper/helper.js');

var clientesOnlinePage = function () {
	this.tituloClientesOnline = element(by.cssContainingText('h3', 'Clientes Online'));

	//Tabela
	this.columnNome = element(by.linkText('Nome'));
	this.inputNome = element(by.id('onlineGrid_filter_firstname'));
	this.columnNomeMeio = element(by.linkText('Middle Name'));
	this.inputNomeMeio = element(by.id('onlineGrid_filter_middlename'));
	this.columnSobrenome = element(by.linkText('Sobrenome'));
	this.inputSobrenome = element(by.id('onlineGrid_filter_lastname'));
	this.columnEmail = element(by.linkText('Email'));
	this.inputEmail = element(by.id('onlineGrid_filter_email'));
	this.columnHrEntrada= element(by.linkText('Hora de Entrada'));
	this.inputHrEntradaDe = element(by.id('onlineGrid_filter_session_start_time1519671840.0528_from'));
	this.inputHrEntradaAte = element(by.id('onlineGrid_filter_session_start_time1519671840.0528_to'));
	this.columnUltimaAtividade = element(by.linkText('Última Atividade'));
	this.inputUltimaAtividadeDe = element(by.id('onlineGrid_filter_last_activity1519671840.0643_from'));
	this.inputUltimaAtividadeAte = element(by.id('onlineGrid_filter_last_activity1519671840.0643_to'));
	this.columnTipo = element(by.linkText('Tipo'));
	this.inputTipo = element(by.id('onlineGrid_filter_type'));
	this.columnUltimaURL = element(by.linkText('Última Url'));
	this.inputUltimaURL = element(by.id('onlineGrid_filter_last_url'));
	this.listaClientesOnline = element(by.css('#onlineGrid_table > tbody > tr'));
};

module.exports = new clientesOnlinePage();