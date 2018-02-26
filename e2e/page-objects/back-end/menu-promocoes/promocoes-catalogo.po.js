//promocoes-catalogo.po.js

'use strict';  
var helper = require('../../../helper/helper.js');

var promocoesCatalogoPage = function() {
	this.tituloPromoCatalogo = element(by.cssContainingText('h3', 'Promoção de Catálogo'));
	this.btnAplicarRegras = element(by.buttonText('Aplicar Regras'));
	this.btnCriarRegra = element(by.buttonText('Criar Regra'));

	//Tabela
	this.columnNmRegra = element(by.linkText('Nome da Regra'));
	this.inputNmRegra = element(by.id('promo_catalog_grid_filter_name'));
	this.columnDtInicio = element(by.linkText('Data Início'));
	this.inputDtInicioDe = element(by.id('promo_catalog_grid_filter_from_date1519672857.029_from'));
	this.inputDtInicioAte = element(by.id('promo_catalog_grid_filter_from_date1519672857.029_to'));

	//Criar Regra
	//Informações da Regra
	this.opcaoInfoRegra = element(by.linkText('Informações da Regra'));
	this.tituloNovaRegra = element(by.cssContainingText('h3', 'Nova Regra'));
	this.labelNmRegra = element(by.cssContainingText('label', 'Nome da Regra'));
	this.inputNmRegra = element(by.id('rule_name'));
	this.labelDescricao = element(by.cssContainingText('label', 'Descrição'));
	this.inputDescricao = element(by.id('rule_description'));
	this.labelStatus = element(by.cssContainingText('label', 'Status'));
	this.inputStatus = element(by.id('rule_is_active'));
	this.labelGrupoClientes = element(by.cssContainingText('label', 'Grupo de Clientes'));
	this.inputGrupoClientes = element(by.id('rule_customer_group_ids'));
	this.labelIniciarEm = element(by.cssContainingText('label', 'Iniciar em'));
	this.inputIniciarEm = element(by.id('rule_from_date'));
	this.labelFinalizarEm = element(by.cssContainingText('label','Finalizar em'));
	this.inputFinalizarEm = element(by.id('rule_to_date'));
	this.labelPrioridade = element(by.cssContainingText('label','Prioridade'));
	this.inputPrioridade = element(by.id('rule_sort_order'));
	//Condições
	this.opcaoCondicoes = element(by.linkText('Condições'));
	this.tituloCondicoes = element(by.cssContainingText('h4', 'Condições (deixe em branco para aplicar a todos os produtos)'));
	this.linkOpcaoTodas = element(by.linkText('TODAS'));
	this.linkOpcaoVerdadeira = element(by.linkText('VERDADEIRA'));
	this.iconAddOpcoes = element(by.css('#conditions__1__children > li > span > a > img'));
	this.listaOpcoes = element(by.id('conditions__1__new_child'));
	//Ações
	this.tituloAtualizarPreco = element(by.cssContainingText('h4', 'Atualizar Preços Usando as Seguintes Informações'));
	this.labelAplicar = element(by.cssContainingText('label', 'Aplicar'));
	this.inputAplicar = element(by.id('rule_simple_action'));
	this.labelVlrDesconto = element(by.cssContainingText('label', 'Valor do Desconto'));
	this.inputVlrDesconto = element(by.id('rule_discount_amount'));
	this.labelHabilitarSubProdutos = element(by.cssContainingText('Enable Discount to Subproducts'));
	this.inputHabilitarSubProdutos = element(by.id('rule_sub_is_enable'));
	this.labelParaProcessamentoNovasRegras = element(by.cssContainingText('label', 'Parar processamento de novas regras'));
	this.inputParaProcessamentoNovasRegras = element(by.id('rule_stop_rules_processing'));

};

module.exports = new promocoesCatalogoPage();