//gerenciar-atributos.po.js

'use strict';  
var helper = require('../../../helper/helper.js');

var gerenciarAtributosPage = function () {
	//Elementos
	this.btnCriarAtributo = element(by.buttonText('Criar Atributo'));
	
	//Colunas Tabela
	this.colLegenda = element(by.linkText('Legenda'));
	this.colObrigatorio = element(by.linkText('Obrigatório'));
	this.colSistema = element(by.linkText('Sistema'));
	this.colVisible = element(by.linkText('Visible'));
	this.colSearchable = element(by.linkText('Searchable'));
	this.colComparavel = element(by.linkText('Comparável'));

	//Inputs de Busca
	this.inputLegenda = element(by.id('attributeGrid_filter_frontend_label'));
	this.inputObrigatorio = element(by.id('attributeGrid_filter_is_required'));
	this.inputSistema = element(by.id('attributeGrid_filter_is_user_defined'));
	this.inputVisible = element(by.id('attributeGrid_filter_is_visible'));
	this.inputSearchable = element(by.id('attributeGrid_filter_is_searchable'));
	this.inputComparavel = element(by.id('attributeGrid_filter_is_comparable'));

	//Detalhes dos Atributos

	//Botões
	this.btnExcluirAtributo = element(by.buttonText('Excluir Atributo'));
	this.btnSalvarAtributo = element(by.buttonText('Excluir Atributo'));

	//Opção Propriedade
	this.opcaoPropriedade = element(by.id('product_attribute_tabs_main'));
	this.tituloPropriedadeAtributo = element(by.cssContainingText('h4', 'Propriedades do Atributo'));
	this.labelCodAtributo = element(by.cssContainingText('label', 'Código do Atributo '));
	this.inputCodAtributo = element(by.id('attribute_code'));
	this.labelEscopo = element(by.cssContainingText('label', 'Scope'));
	this.inputEscopo = element(by.id('is_global'));
	this.labelFormatCampo = element(by.cssContainingText('label', 'Formato do Campo')); //input do campo desabilitado para edição
	this.labelVlrPadrao = element(by.cssContainingText('label', 'Valor Padrão'));
	this.inputVlrPadrao = element(by.id('default_value_text'));
	this.labelVlrUnico = element(by.cssContainingText('label', 'Valor único'));
	this.inputVlrUnico = element(by.id('is_unique'));
	this.labelCampoObrigatorio = element(by.cssContainingText('label', 'Campo Obrigatório'));
	this.inputCampoObrigatorio = element(by.id('is_required'));
	this.labelAplicValidCampo = element(by.cssContainingText('label', 'Aplicar Validação de Campo'));
	this.inputAplicValidCampo = element(by.id('frontend_class'));
	this.labelAplicarPara = element(by.cssContainingText('label', 'Aplicar Para '));
	this.inputAplicarPara = element(by.css('#base_fieldset > div > table > tbody > tr:nth-child(12) > td.value > select:nth-child(1)'));

	//Opção Gerenciar Descrição/Opções
	this.opcaoGerenciarDescricaoOpcoes = element(by.linkText('Gerenciar Descrição/Opções'));
	this.tituloGerenciarDescricao = element(by.cssContainingText('h4', 'Gerenciar Descrição (Tamanho, Cor, etc.)'));
	this.labelAdmin = element(by.cssContainingText('.dynamic-grid tbody tr th', 'Admin'));
	this.labelPortugues = element(by.cssContainingText('.dynamic-grid tbody tr th', 'Português'));
	this.inputAdmin = element(by.css('#attribute-labels-table > tbody > tr:nth-child(2) > td:nth-child(1) > input'));
	this.inputPortugues = element(by.css('#attribute-labels-table > tbody > tr:nth-child(2) > td:nth-child(2) > input'));


};

module.exports = new gerenciarAtributosPage();