//reescrever-url.po.js

'use strict';  
var helper = require('../../../helper/helper.js');

var reescreverURLPage = function () {
	this.tituloReescreverURL = element(by.cssContainingText('h3', 'Reescrever URL'));
	this.btnCriarURL = element(by.buttonText('Criar URL'));

	//Tabela
	this.columnTipo = element(by.linkText('Tipo'));
	this.inputTipo = element(by.id('urlrewriteGrid_filter_is_system'));
	this.columnIdentificador = element(by.linkText('Identificador'));
	this.inputIdentificador = element(by.id('urlrewriteGrid_filter_id_path'));
	this.columnNovoCaminho = element(by.linkText('Novo Caminho'));
	this.inputNovoCaminho = element(by.id('urlrewriteGrid_filter_request_path'));
	this.columnCaminhoBase = element(by.linkText('Caminho Base'));
	this.inputCaminhoBase = element(by.id('urlrewriteGrid_filter_target_path'));
	this.columnOpcoes = element(by.linkText('Opções'));
	this.inputOpcoes = element(by.id('urlrewriteGrid_filter_options'));

	//Edição - Reescrever URL
	this.tituloEditReescritaURL = element(by.cssContainingText('h3', 'Editar Reescrita de URL'));
	this.tituloInfoReescritaURL = element(by.cssContainingText('h4', 'Informações de Reescrita de URL'));
	this.labelTipo = element(by.cssContainingText('label', 'Tipo'));
	this.inputTipo = element(by.id('is_system'));
	this.labelIdentificador = element(by.cssContainingText('label', 'Identificador'));
	this.inputIdentificador = element(by.id('id_path'));
	this.labelNovoCaminho = element(by.cssContainingText('label', 'Novo Caminho'));
	this.inputNovoCaminho = element(by.id('Novo Caminho'));
	this.labelCaminhoBase = element(by.cssContainingText('label', 'Caminho Base'));
	this.inputCaminhoBase = element(by.id('target_path'));
	this.labelRedirecionar = element(by.cssContainingText('label', 'Redirecionar'));
	this.inputRedirecionar = element(by.id('options'));
	this.labelDescricao = element(by.cssContainingText('label', 'Descrição'));
	this.inputDescricao = element(by.id('description'));

	//Criar Nova Reescrita URL 
	this.tituloNovaReescritaURL = element(by.cssContainingText('h3', 'Nova Reescrita de URL'));
	this.labelReescritaURLPara = element(by.cssContainingText('label', 'Reescrita de URL Para:'));
	this.inputReescritaURLPara = element(by.css('.select'));
	//Nova Reescrita URL Categoria
	this.tituloSelecionarCategoria = element(by.cssContainingText('h4', 'Selecionar Categoria'));
	this.arvoreCategoria = element(by.css('.x-tree-node'));
	//Nova Reescrita URL Produto
	this.tabelaProduto = element(by.id('productGrid_table'));
};

module.exports = new reescreverURLPage();