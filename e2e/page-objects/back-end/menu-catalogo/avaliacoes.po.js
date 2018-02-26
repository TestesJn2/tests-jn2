//avaliacoes.po.js

'use strict';  
var helper = require('../../../helper/helper.js');

var avaliacoesPage = function() {
	this.tituloAvaliacoes = element(by.cssContainingText('h3', 'Avaliações'));
	this.btnCriarAvaliacoes = element(by.buttonText('Criar Avaliação'));

	//Tabela
	this.columnNome = element(by.cssContainingText('label', 'Criar Avaliação'));
	this.inputNome = element(by.id('ratingsGrid_filter_rating_code'));
	this.columnOrdemExibicao = element(by.linkText('Ordem de exibição'));
	this.inputOrdemExibicao = element(by.id('ratingsGrid_filter_position'));
	this.listaAvaliacoes = element.all(by.css('#ratingsGrid_table > tbody > tr'));

	//Editar Avaliação
	this.tituloEditAvaliacao = element(by.cssContainingText('h3', 'Editar Avaliação'));
	this.labelVlrPadrao = element(by.cssContainingText('label', 'Valor Padrão'));
	this.inputVlrPadrao = element(by.id('rating_code'));
	this.labelPortugues = element(by.cssContainingText('label', 'Português'));
	this.inputPortugues = element(by.id('rating_code_1'));
	this.labelVisivelEm = element(by.cssContainingText('label', 'Visível Em'));
	this.inputVisivelEm = element(by.id('stores'));
	this.labelOrdemExibicao = element(by.cssContainingText('label', 'Ordem de exibição'));
	this.inputOrdemExibicao = element(by.id('position'));

};

module.exports = new avaliacoesPage();