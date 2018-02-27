//promocoes-carrinho.po.js

'use strict';  
var helper = require('../../../helper/helper.js');

var promocoesCarrinhoPage = function () {
	this.tituloPromoCarrinho = element(by.cssContainingText('h3', 'Promoção de Carrinho'));
	this.btnCriarRegra = element(by.id('id_a5a3ca45408540ef826226afc7f6b619'));

	//Tabela
	this.columnNmRegra = element(by.linkText('Nome da Regra'));
	this.inputNmRegra = element(by.id('promo_quote_grid_filter_name'));
	this.columnCodCupom = element(by.linkText('Código Cupom'));
	this.inputCodCupom = element(by.id('promo_quote_grid_filter_coupon_code'));
	this.columnDtInicio = element(by.linkText('Data Início'));
	this.inputDtInicioDe = element(by.id('promo_quote_grid_filter_from_date1519732358.8266_from'));
	this.inputDtInicioAte = element(by.id('promo_quote_grid_filter_from_date1519732358.8266_to'));
	this.columnDtFim = element(by.linkText('Data Fim'));
	this.inputDtFimDe = element(by.id('promo_quote_grid_filter_to_date1519732358.8271_from'));
	this.inputDtFimAte = element(by.id('promo_quote_grid_filter_to_date1519732358.8271_to'));
	this.columnStatus = element(by.linkText('Status'));
	this.inputStatus = element(by.id('promo_quote_grid_filter_is_active'));
	this.columnPropriedade = element(by.linkText('Prioridade'));
	this.inputPropriedade = element(by.id('promo_quote_grid_filter_sort_order'));
	this.listaRegrasCarrinho = element.all(by.css('#promo_quote_grid_table > tbody > tr'));

	//Criar Regra
	this.tituloNovaRegra = element(by.cssContainingText('h3', 'Nova Regra'));
	//Opção Informações da Regra
	this.opcaoInfoRegra = element(by.id('promo_catalog_edit_tabs_main_section'));	
	this.tituloInfoGerais = element(by.cssContainingText('h4', 'Informações Gerais'));
	this.labelNmRegra = element(by.cssContainingText('label', 'Nome da Regra'));
	this.inputNmRegra = element(by.id('rule_name'));
	this.labelDescricao = element(by.cssContainingText('label', 'Descrição'));
	this.inputDescricao = element(by.id('rule_description'));
	this.labelStatus = element(by.cssContainingText('label', 'Status'));
	this.inputStatus = element(by.id('rule_is_active'));
	this.labelGrupoClientes = element(by.cssContainingText('label', 'Grupo de Clientes'));
	this.inputGrupoClientes = element(by.id('rule_customer_group_ids'));
	this.labelCupom = element(by.cssContainingText('label', 'Cupom'));
	this.inputCupom = element(by.id('rule_coupon_type'));
	this.labelUsosCliente = element(by.cssContainingText('label', 'Usos por cliente'));
	this.inputUsosCliente = element(by.id('rule_uses_per_customer'));
	this.labelDaData = element(by.cssContainingText('label', 'Da Data'));
	this.inputDaData = element(by.id('rule_from_date'));
	this.labelParaData = element(by.cssContainingText('label', 'Para Data'));
	this.inputParaData = element(by.id('rule_to_date'));
	this.labelPrioridade = element(by.cssContainingText('label', 'Prioridade'));
	this.inputPrioridade = element(by.id('rule_sort_order'));
	this.labelPublicarRSS = element(by.cssContainingText('label', 'Publicar na Lista RSS'));
	this.inputPublicarRSS = element(by.id('rule_is_rss'));
	//Condições
	this.opcaoCondicoes = element(by.id('promo_catalog_edit_tabs_conditions_section'));
	this.labeltituloAplicarRegra = element(by.cssContainingText('h4', 'Aplicar regra somente para as seguintes condições (deixe em branco para todos os produtos)'));
	this.linkTodas = element(by.linkText('TODAS'));
	this.linkVerdadeira = element(by.linkText('VERDADEIRA'));
	this.linkAddRegras = element(by.css('#conditions__1__children > li > span > a > img'));
	//Ações
	this.opcaoAcoes = element(by.id('promo_catalog_edit_tabs_actions_section'));
	this.tituloAtualizarPrecos = element(by.cssContainingText('h4','Atualizar os Preços com as Informações Abaixo'));
	this.labelAplicar = element(by.cssContainingText('label', 'Aplicar'));
	this.inputAplicar = element(by.id('rule_simple_action'));
	this.labelVlrDesconto = element(by.cssContainingText('label', 'Valor do Desconto'));
	this.inputVlrDesconto = element(by.id('rule_discount_amount'));
	this.labelMaxProdDesconto = element(by.cssContainingText('label', 'Máx. de Produtos com Desconto'));
	this.inputMaxProdDesconto = element(by.id('rule_discount_qty'));
	this.labelQtdeProdutos = element(by.cssContainingText('label', 'Qtd de Produtos (Compre X)'));
	this.inputQtdeProdutos = element(by.id('rule_discount_step'));
	this.labelAplicarVlrEntrega = element(by.cssContainingText('label', 'Aplicar ao Valor de Entrega'));
	this.inputAplicarVlrEntrega = element(by.id('rule_apply_to_shipping'));
	this.labelFreteGratis = element(by.cssContainingText('label', 'Frete Grátis'));
	this.inputFreteGratis = element(by.id('rule_simple_free_shipping'));
	this.labelAplicarSomenteEssaRegra = element(by.cssContainingText('label', 'Aplicar Somente esta Regra'));
	this.inputAplicarSomenteEssaRegra = element(by.id('rule_stop_rules_processing'));
	this.tituloAplicarSomenteItensCarrinho = element(by.cssContainingText('h4', 'Aplicar somente para os itens do carrinho com as condições abaixo (deixe em branco para todos os itens)'));
	this.linkAddRegrasSomenteItensCarrinho = element(by.css('#actions__1__children > li > span > a > img'));
	//Legendas
	this.opcaoLegendas = element(by.id('promo_catalog_edit_tabs_labels_section'));
	this.labelLegendaParaTodasVisoes = element(by.cssContainingText('label', 'Legenda para todas as visões'));
	this.inputLegendaParaTodasVisoes = element(by.id('rule_store_default_label'));
	this.tituloLegendaEspecPorVisao = element(by.cssContainingText('h4', 'Legenda Específica por Visão'));
	this.inputLegendaEspecPorVisao - element(by.id('rule_s_1'));
};

module.exports = new promocoesCarrinhoPage();