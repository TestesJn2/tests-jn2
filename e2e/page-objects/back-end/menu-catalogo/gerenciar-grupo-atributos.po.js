//gerenciar-grupo-atributos.po.js

'use strict';  
var helper = require('../../../helper/helper.js');

var gerenciarGrupoAtributosPage = function () {
	//Cabeçalho
	this.tituloGerenciarGrupoAtributo = element(by.cssContainingText('h3', 'Gerenciar Grupo de Atributos'));
	this.btnCriarGrupo = element(by.buttonText('Criar Grupo'));

	//Tabela
	this.colSetName = element(by.name('set_name'));
	this.inputSetName = element(by.id('setGrid_filter_set_name'));
	this.listaGrupoAtributos = element.all(by.css('#setGrid_table > tbody > tr.even.pointer.on-mouse'));

	//Criar Grupo de Atributo
	this.tituloNovoGrupoAtributo  = element(by.cssContainingText('h3', 'Novo Grupo de Atributos'));
	this.btnSalvarAtributoSet = element(by.buttonText('Save Attribute Set'));

	//Formulário de Criação de Grupo de Atributo
	this.tituloNmGrupo = element(by.cssContainingText('h4', 'Editar Nome do Grupo'));
	this.labelName = element(by.cssContainingText('label', 'Nome'));
	this.inputName = element(by.id('attribute_set_name'));
	this.labelComBaseEm = element(by.cssContainingText('label', 'Com Base Em'));
	this.inputComBaseEm = element.all(by.id('skeleton_set'));

	//Exibir Dados dos Grupos de Atributo
	this.tituloEditNmGrupo = element(by.cssContainingText('h4', 'Editar Nome do Grupo'));
	this.labelNomeGrupo = element(by.cssContainingText('label', 'Nome'));
	this.inputNomeGrupo = element(by.id('attribute_set_name'));
	this.tituloArvoreGrupos = element(by.cssContainingText('h3', 'Grupos'));
	this.listaArvoreGrupos = element.all(by.css('#ext-gen5 .x-tree-root-node'));
	this.btnCriarPasta = element(by.buttonText('Criar Pasta'));
	this.btnExcluirPasta = element(by.buttonText('Excluir Pasta'));
	this.tituloAtributos = element(by.cssContainingText('h3', 'Unassigned Attributes'));
	this.listaAtributos = element.all(by.css('#ext-gen491 .x-tree-root-node'));
	this.btnExcluirGrupoAtributos = element(by.buttonText('Excluir Grupo de Atributos'));
	this.btnSalvaAtributosAlterados = element(by.buttonText('Save Attribute Set'));
};

module.exports = new gerenciarGrupoAtributosPage();