//assinatura-newsletter.po.js

'use strict';  
var helper = require('../../../helper/helper.js');

var assinaturaNewsletterPage = function () {
	this.tituloAssinaturaNewsletter = element(by.cssContainingText('h3', 'Assinaturas de Newsletter'));

	//Tabela
	this.columnEmail = element(by.linkText('Email'));
	this.inputEmail = element(by.id('subscriberGrid_filter_email'));
	this.columnTipo = element(by.linkText('Tipo'));
	this.inputTipo = element(by.id('subscriberGrid_filter_type'));
	this.columnNome = element(by.linkText('Nome'));
	this.inputNome = element(by.id('subscriberGrid_filter_firstname'));
	this.columnNmMeio = element(by.linkText('Customer Middle Name'));
	this.inputNmMeio = element(by.id('subscriberGrid_filter_middlename'));
	this.columnSobrenome = element(by.linkText('Sobrenome'));
	this.inputSobrenome = element(by.id('subscriberGrid_filter_lastname'));
	this.columnStatus = element(by.linkText('Status'));
	this.inputStatus = element(by.id('subscriberGrid_filter_status'));
	this.columnWebsite = element(by.linkText('Website'));
	this.inputWebSite = element(by.id('subscriberGrid_filter_group'));
	this.columnLoja = element(by.linkText('Loja'));
	this.inputLoja = element(by.id('subscriberGrid_filter_group'));
	this.columnVisao = element(by.linkText('Visão'));
	this.inputVisao = element(by.id('subscriberGrid_filter_store'));

};

module.exports  = new assinaturaNewsletterPage();