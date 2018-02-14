//entregas.po.js

'use strict';  
var helper = require('../../../helper/helper.js');

var entregasPage = function() {
	//Elementos da página principal > Cabeçalho
	this.tituloEntregas = element(by.cssContainingText('h3', 'Entregas'));
	this.btnExportar = element(by.buttonText('Exportar'));
	this.inputExportar = element(by.id('sales_shipment_grid_export'));
	this.btnLimparFiltro = element(by.buttonText('Limpar Filtros'));
	this.btnFiltrar = element(by.buttonText('Filtrar'));
	this.inputAcoes = element(by.id('sales_shipment_grid_massaction-select'));
	this.btnExecutar = element(by.buttonText('Executar'));

	//Elementos da página principal > Tabela Pedidos Entregues
	this.labelCodEntrega = element(by.name('increment_id'));
	this.inputCodEntrega = element(by.id('sales_shipment_grid_filter_increment_id'));
	this.labelDataEntrega = element (by.name('created_at'));
	this.inputDataEntregaIni = element(by.id('sales_shipment_grid_filter_created_at1516293030.3467_from')) ;
	this.inputDataEntregaFinal = element (by.id('sales_shipment_grid_filter_created_at1516293030.3467_to'));
	this.labelCodPedido = element (by.name('order_increment_id'));
	this.inputCodPedido = element (by.id('sales_shipment_grid_filter_order_increment_id'));
	this.labelDataPedido = element(by.name('order_created_at'));
	this.inputDataPedidoIni = element(by.id('sales_shipment_grid_filter_order_created_at1516294947.8568_from'));
	this.inputDataPedidoFinal = element(by.id('sales_shipment_grid_filter_order_created_at1516294947.8568_to'));
	this.labelEntregasPara = element (by.name('shipping_name'));
	this.inputEntregasPara = element (by.id('sales_shipment_grid_filter_shipping_name'));
	this.labelQuantidade = element (by.name('total_qty'));
	this.inputQuantidadeIni = element(by.id('sales_shipment_grid_filter_total_qty_from'));
	this.inputQuantidadeFinal = element(by.id('sales_shipment_grid_filter_total_qty_to'));
	this.labelAcoes = element(by.cssContainingText('.nobr', 'Ação'));

	//Detalhes da Entrega
	this.listaEntregas = element.all(by.css('#sales_shipment_grid_table > tbody > tr'));
	this.tituloDetalheEntrega = element(by.css('#anchor-content div div h3'));
	//Detalhes da Entrega > E-mail Confirmação
	this.tituloEmailConfirmacao = element(by.cssContainingText('strong', '(O e-mail de confirmação do pedido foi enviado)'));
	this.labelDataPedido = element(by.cssContainingText('label', 'Data do Pedido'));
	this.labelStatusPedido = element(by.cssContainingText('label', 'Status do Pedido'));
	this.labelCompradoEm = element(by.cssContainingText('label', 'Comprado Em'));
	this.labelIPOrigem = element(by.cssContainingText('label', 'IP de Origem'));
	//Detalhes da Entrega > Dados do Cliente
	this.tituloDadosCliente = element(by.cssContainingText('h4', 'Dados do Cliente'));
	this.labelNmCliente = element(by.cssContainingText('label', 'Nome do Cliente'));
	this.labelEmailCliente = element(by.cssContainingText('label', 'Email'));
	this.labelGrupoCliente = element(by.cssContainingText('label', 'Grupo do Cliente'));
	this.labelDataAniversario = element(by.cssContainingText('label', 'Date Of Birth'));
	this.labelCNPJouCPF = element(by.cssContainingText('label', 'Tax/VAT Number'));
	//Detalhes da Entrega > Endereço de Cobrança
	this.tituloEndCobranca = element(by.cssContainingText('h4', 'Endereço de Cobrança'));
	this.boxEndCobranca = element(by.css('.box-left div fieldset address'));
	//Detalhes da Entrega > Endereço de Entrega
	this.tituloEndEntrega = element(by.cssContainingText('h4', 'Endereço de Entrega'));
	this.boxEndEntrega = element(by.css('.box-right div fieldset address'));
	//Detalhes da Entrega > Informações de Pagamento
	this.tituloInfoPagamento = element(by.cssContainingText('h4', 'Informações de Pagamento'));
	//Detalhes da Entrega > Informações de Entrega e Rastreamento
	this.tituloInfoEntregaRastreamento = element(by.cssContainingText('h4', 'Informações de Entrega e Rastreamento'));
	this.columnFormEntrega = element(by.cssContainingText('.headings th', 'Forma de Entrega'));
	this.inputFormEntrega = element(by.name('carrier'));
	this.columnTitulo = element(by.cssContainingText('.headings th', 'Título'));
	this.inputTitulo = element(by.id('tracking_title'));
	this.columnNumero = element(by.cssContainingText('.headings th', 'Número'));
	this.inputNumero = 	element(by.id('tracking_number'));
	this.columnAcao = element(by.cssContainingText('.headings th', 'Ação'));
	this.btnAddAcao = element(by.buttonText('Adicionar'));
	//Detalhes da Entrega > Itens Entregues
	this.tituloItensEntregues = element(by.cssContainingText('h4', 'Itens Entregues'));
	this.boxItensEntregues = element(by.css('.data order-tables thead'));
	//Detalhes da Entrega > Histórico da Entrega
	this.tituloHistoricoEntrega = element(by.cssContainingText('h4', 'Histórico da Entrega'));
	this.labelComentario = element(by.css('#comments_block span label'));
	this.txtareaComentario = element(by.css('#comments_block span texarea'));
	this.checkAvisarEmailCliente = element(by.id('history_notify'));
	this.labelAvisarEmailCliente = element(by.cssContainingText('.normal','Avisar Cliente por e-mail'));
	this.checkVisivelFrontEnd = element(by.id('history_visible'));
	this.labelVisivelFrontEnd = element(by.cssContainingText('.normal', ' Visível no Frontend'));
	this.btnSalvarComentario  = element(by.buttonText('Salvar Comentário'));




	//Metodos
	this.selecionaPrimeiraEntregaListada = function() {
		helper.waitElementVisibility (this.listaEntregas);
		this.listaEntregas.filter( function (element, index) {
			return element.getText().then (function (txt) {
				element(by.css('#sales_shipment_grid_table > tbody > tr > td')).getText().then(function (nomeEntrega) {
					return txt === nomeEntrega;
				});
			});
		}).first().click();
	};

};
module.exports = new entregasPage();