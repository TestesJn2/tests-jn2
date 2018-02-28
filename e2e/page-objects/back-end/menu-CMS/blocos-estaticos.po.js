//blocos-estaticos.po.js

'use strict';  
var helper = require('../../../helper/helper.js');

var blocosEstaticosPage = function() {
	//Cabeçalho
	this.tituloBlocosEstaticos = element(by.cssContainingText('h3', 'Blocos Estáticos'));
	this.btnCriarBloco = element(by.id('id_3759f6dbeaf90796921be98356e80039'));

	//Tabela
	this.columnTitulo = element(by.linkText('Título'));
	this.inputTitulo = element(by.id('cmsBlockGrid_filter_title'));
	this.columnIdentificador = element(by.linkText('Identificador'));
	this.inputIdentificador = element(by.id('cmsBlockGrid_filter_identifier'));
	this.columnStatus = element(by.linkText('Status'));
	this.inputStatus = element(by.id('cmsBlockGrid_filter_is_active'));
	this.columnDtCriacao = element(by.linkText('Data Criação'));
	this.inputDtCriacaoDe = element(by.id('cmsBlockGrid_filter_creation_time1519828080.655_from'));
	this.inputDtCriacaoPara = element(by.id('cmsBlockGrid_filter_creation_time1519828080.655_to'));
	this.columnUltimaModificacao = element(by.linkText('Última Modificação'));
	this.inputUltimaModificacaoDe = element(by.id('cmsBlockGrid_filter_update_time1519828080.6555_from'));
	this.inputUltimaModificacaoPara = element(by.id('cmsBlockGrid_filter_update_time1519828080.6555_to'));
	this.listaBlocosEstaticos = element.all(by.css('#cmsBlockGrid_table > tbody > tr'));

	//Criar ou Editar Bloco
	this.tituloInfoGerais = element(by.cssContainingText('h4', 'Informações Gerais'));
	this.labelTitulo = element(by.cssContainingText('label', 'Título'));
	this.inputTitulo = element(by.id('block_title'));
	this.labelIdentificador = element(by.cssContainingText('label', 'Identificador'));
	this.inputIdentificador = element(by.id('block_identifier'));
	this.labelStatus = element(by.cssContainingText('label', 'Status'));
	this.inputStatus = element(by.id('block_is_active'));
	this.labelConteudo = element(by.cssContainingText('label', 'Conteúdo'));
	this.inputConteudo = element(by.id('block_content'));
};

module.exports = new blocosEstaticosPage();