//termos-de-pesquisa.po.js

'use strict';  
var helper = require('../../../helper/helper.js');

var termosDePesquisaPage = function () {
	this.tituloBuscar = element(by.cssContainingText('h3', 'Buscar'));
	this.btnCriarTermosPesquisa = element(by.buttonText('Criar Termo de Pesquisa'));
	this.btnSalvarTermosPesquisa = element(by.buttonText('Save Search'));

	//Tabela
	this.columnTermosPesquisa = element(by.linkText('Termos Digitados'));
	this.inputTermosPesquisa = element(by.id('catalog_search_grid_filter_search_query'));
	this.columnResultados = element(by.linkText('Resultados'));
	this.inputResultadosDe = element(by.id('catalog_search_grid_filter_num_results_from'));
	this.inputResultadosAte = element(by.id('catalog_search_grid_filter_num_results_to'));
	this.columnNumeroUsos = element(by.linkText('Número de Usos'));
	this.inputNumeroUsosDe = element(by.id('catalog_search_grid_filter_popularity_from'));
	this.inputNumeroUsoAte = element(by.id('catalog_search_grid_filter_popularity_to'));
	this.columnRedirecionar = element(by.linkText('Redirecionar'));
	this.inputRedirecionar = element(by.id('catalog_search_grid_filter_redirect'));
	this.columnExibirTermosConhecinhecidos = element(by.linkText('Exibir em Termos Sugeridos'));
	this.inputExibirTermosConhecinhecidos = element(by.id('catalog_search_grid_filter_display_in_terms'));
	this.listaTermosPesquisa = element.all(by.css('#catalog_search_grid_table > tbody > tr'));

	//Edição e Criar Termos de Pesquisa
	this.tituloInfoGerais = element(by.cssContainingText('h4', 'Informações Gerais'));
	this.labelTermosDigitados = element(by.cssContainingText('label', 'Termos Digitados'));
	this.inputTermosDigitados = element(by.id('query_text'));
	this.labelNumeroResultados = element(by.cssContainingText('label', 'Number of results'));
	this.inputNumeroResultados = element(by.id('num_results'));
	this.labelNumeroUsos = element(by.cssContainingText('label', 'Número de Usos'));
	this.inputNumeroUsos = element(by.id('popularity'));
	this.labelRedirecionamentoURL = element(by.cssContainingText('label', 'Redirect URL'));
	this.inputRedirecionamentoURL = element(by.id('redirect'));
	this.labelExibirTermosSugeridos = element(by.cssContainingText('label', 'Exibir em Termos Sugeridos'));
	this.inputExibirTermosSugeridos = element(by.id('display_in_terms'));
};

module.exports = new termosDePesquisaPage();