//veja-avaliacoes-recentes.po.js

'use strict';  
var helper = require('../../../helper/helper.js');

var comentariosPendentesPage = function() {

	//Comentários Pendentes
	this.tituloComentariosPendentes = element(by.cssContainingText('h3', 'Comentários Pendentes'));

	//Todos Comentários
	this.tituloTodosComentariosPage = element(by.cssContainingText('Todos Comentários'));
	this.btnCriarComentario = element(by.buttonText('Criar Comentário'));

	//Tabelas
	this.columnCriadoEm = element(by.linkText('Criado em'));
	this.inputCriadoEmDe = element(by.id('reviwGrid_filter_created_at1519655157.7985_from'));
	this.inputCriadoEmAte = element(by.id('reviwGrid_filter_created_at1519655157.7985_to'));
	this.columnTitulo = element(by.linkText('Título'));
	this.inputTitulo = element(by.id('reviwGrid_filter_title'));
	this.columnNomeSobrenome = element(by.linkText('Nome e Sobrenome'));
	this.inputNomeSobrenome = element(by.id('reviwGrid_filter_nickname'));
	this.columnComentario = element(by.linkText('Comentário'));
	this.inputComentario = element(by.id('reviwGrid_filter_detail'));
	this.columnTipo = element(by.linkText('Tipo'));
	this.inputTipo = element(by.id('reviwGrid_filter_type'));
	this.columnProduto = element(by.linkText('Produto(s)'));
	this.inputProduto = element(by.id('reviwGrid_filter_name'));
	this.columnProdutoSKU = element(by.linkText('Produto SKU'));
	this.inputProdutoSKU = element(by.id('reviwGrid_filter_sku'));

	//Editar Comentários
	this.tituloDetalhesComentarios = element(by.cssContainingText('h4', 'Detalhes do Comentário'));
	this.labelProduto = element(by.cssContainingText('label', 'Produto'));
	this.labelEnviadoPor = element(by.cssContainingText('label', 'Enviado por'));
	this.labelAvaliacao = element(by.cssContainingText('label', 'Resumo da Avaliação'));
	this.labelDetalhesAvaliacao = element(by.cssContainingText('label', 'Detalhes da Avaliação'));
	this.labelStatus = element(by.cssContainingText('label', 'Status'));
	this.inputStatus = element(by.id('status_id'));
	this.labelNomeSobrenome = element(by.cssContainingText('label', 'Nome e Sobrenome'));
	this.inputNomeSobrenome = element(by.id('nickname'));
	this.labelResumoComentario = element(by.cssContainingText('label', 'Resumo do Comentário'));
	this.inputResumoComentario = element(by.id('title'));
	this.labelComentario = element(by.cssContainingText('label', 'Comentário'));
	this.inputComentario = element(by.id('detail'));
};

module.exports = new comentariosPendentesPage();