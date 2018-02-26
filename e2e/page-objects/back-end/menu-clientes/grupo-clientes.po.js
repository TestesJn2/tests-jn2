//grupo-clientes.po.js

'use strict';  
var helper = require('../../../helper/helper.js');

var grupoClientesPage = function() {

	this.tituloGrupoClientes = element(by.cssContainingText('Grupo de Clientes'));
	this.btnCriarGrupo = element(by.buttonText('Criar Grupo'));

	//Tabela
	this.columnNome = element(by.linkText('Nome'));
	this.inputNome = element(by.id('customerGroupGrid_filter_type'));
	this.columnClasseImposto = element(by.linkText('Classe de Impostos'));
	this.inputClasseImposto = element(by.id('customerGroupGrid_filter_class_name'));
	this.listaGrupoCliente = element.all('#customerGroupGrid_table > tbody > tr');

	//Editar Grupo de Clientes
	this.tituloInfoGrupo = element(by.cssContainingText('h4', 'Informações de Grupo'));
	this.labelNome = element(by.cssContainingText('label', 'Nome'));
	this.inputNome = element(by.id('customer_group_code'));
	this.labelClasseImpostos = element(by.cssContainingText('label', 'Classe de Impostos'));
	this.inputClasseImpostos = element(by.id('tax_class_id'));
};

module.exports = new grupoClientesPage();
