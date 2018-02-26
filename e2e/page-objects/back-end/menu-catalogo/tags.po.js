//tags.po.js

'use strict';  
var helper = require('../../../helper/helper.js');

var tagsPage = function() {

	//Todas as Tags
	this.tituloGerenciarTag = element(by.cssContainingText('h3', 'Gerenciar Tags'));
	this.btnCriarTag = element(by.buttonText('Criar Tag'));

	//Tags Pendentes
	this.tituloTagsPendentes = element(by.cssContainingText('h3', 'Tags Pendentes'));


	//Tabela
	this.columnTags = element(by.linkText('Tag'));
	this.inputTodasTags = element(by.id('tag_tag_grid_filter_name'));
	this.inputTagsPendentes = element(by.id('pending_grid_filter_name'));
	this.columnProdutos = element(by.linkText('Produtos'));
	this.inputTodasTagsProdutosDe = element(by.id('tag_tag_grid_filter_products_from'));
	this.inputTodasTagsProdutosAte = element(by.id('tag_tag_grid_filter_products_to'));
	this.inputTagsPendentesProdutosDe = element(by.id('pending_grid_filter_products_from'));
	this.inputTagsPendentesProdutosAte = element(by.id('pending_grid_filter_products_to'));
	this.columnClientes = element(by.linkText('Clientes'));
	this.inputTodasTagsClientesDe = element(by.id('tag_tag_grid_filter_customers_from'));
	this.inputTodasTagsClientesAte = element(by.id('tag_tag_grid_filter_customers_to'));
	this.inputTagsPendentesClientesDe = element(by.id('pending_grid_filter_customers_from'));
	this.inputTagsPendentesClientesAte = element(by.id('pending_grid_filter_customers_to	'));
};

module.exports = new tagsPage();