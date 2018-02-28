//widgets.po.js

'use strict';  
var helper = require('../../../helper/helper.js');

var widgetsPage = function () {

	//Cabeçalho
	this.tituloGerenciarWidgets = element(by.cssContainingText('h3', 'Gerenciar Widgets'));
	this.btnCriarWidgets = element(by.id('id_92e51e7a128ba28f8e51a684fa49e248'));

	//Tabela
	this.columnTitulo = element(by.linkText('Título'));
	this.inputTitulo = element(by.id('widgetInstanceGrid_filter_title'));
	this.columnTipo = element(by.linkText('Tipo'));
	this.inputTipo = element(by.id('widgetInstanceGrid_filter_type'));
	this.columnTemplate = element(by.linkText('Template'));
	this.inputTemplate = element(by.id('widgetInstanceGrid_filter_package_theme'));
	this.columnOrdem = element(by.linkText('Ordem'));
	this.inputOrdem = element(by.id('widgetInstanceGrid_filter_sort_order'));
	this.listaWidgetCadastrados = element.all(by.css('#widgetInstanceGrid_table > tbody > tr'));

	//Editar ou Criar Widget
	this.tituloConfiguracoes = element(by.cssContainingText('h4', 'Configurações'));
	this.labelTipo = element(by.cssContainingText('label', 'Tipo'));
	this.inputTipo = element(by.id('type'));Ordem
	this.labelTemplate = element(by.cssContainingText('label', 'Template'));
	this.inputTemplate = element(by.id('package_theme'));
	this.btnContinuar = element(by.id('id_49a03d2a7197ab737fe983ffc7edcc1a'));
	this.labelTitulo = element(by.cssContainingText('label', 'Título'));
	this.inputTitulo = element(by.id('title'));
	this.labelOrdem = element(by.cssContainingText('label', 'Ordem'));
	this.inputOrdem = element(by.id('sort_order'));
	this.tituloAddLayout = element(by.cssContainingText('h4','Atualizar Layout'));
	this.btnAddAtualizacaoLayout = element(by.id('id_ed4b88029fd6fa7a908294ecddb734dc'));
	this.labelDisplayOn = element(by.cssContainingText('label', 'Display On'));
	this.btnExcluirAtualizacaoLayout = element(by.id('id_c83a1ef776f00ef9bd8c916b73ecd45e'));
	//Opções Widget
	this.opcaoWidget = element(by.id('widget_instace_tabs_properties_section'));
	this.tituloOpcaoWidget = element(by.cssContainingText('h4', 'Opções de Widget'));
	this.labelBloco = element(by.cssContainingText('label', 'Bloco'));
	this.btnSelecionar = element(by.id('options_fieldsete84e3b5e56bf0cb551d56a21dc4df56a_block_id814ff7553dc4190d1118b0afc2cdef31control'));
};

module.exports = new widgetsPage();