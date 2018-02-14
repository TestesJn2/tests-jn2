//etiquetas-correios.po.js

'use strict';  
var helper = require('../../../helper/helper.js');

var etiquetasCorreiosPage = function() {
	//Tela Principal
	this.tituloEtiquetaCorreio = element(by.cssContainingText('h3', 'Etiquetas de Endereçamento - Correios'));
	this.btnLimparFiltros = element(by.buttonText('Limpar Filtros'));
	this.btnFiltros = element(by.buttonText('Filtrar'));
	this.inputExecutar = element(by.id('etiquetaendereco_grid_massaction-select'));
	this.btnExecutar = element(by.buttonText('Executar'));	

	//Tabela Etiquetas
	this.labelCodPedido = element(by.name('real_order_id'));
	this.inputCodPedido = element(by.id('etiquetaendereco_grid_filter_real_order_id'));
	this.labelData = element(by.name('created_at'));
	this.inputDataIni = element(by.id('etiquetaendereco_grid_filter_created_at1516369936.3393_from'));
	this.inputDataFinal = element(by.id('etiquetaendereco_grid_filter_created_at1516369936.3393_to'));
	this.labelNmCliente = element(by.name('billing_name'));
	this.inputNmCliente = element(by.id('etiquetaendereco_grid_filter_billing_name'));
	this.labelEntregaPara = element(by.name('shipping_name'));
	this.inputEntregaPara = element(by.id('etiquetaendereco_grid_filter_shipping_name'));
	this.labelVlrCobrado = element(by.name('base_grand_total'));
	this.inputVlrCobradoIni = element(by.id('etiquetaendereco_grid_filter_base_grand_total_from'));
	this.inputVlrCobradoFinal = element(by.id('etiquetaendereco_grid_filter_grand_total_to'));
	this.labelVlrPago = element(by.name('grand_total'));
	this.inputVlrPagoIni = element(by.id('etiquetaendereco_grid_filter_grand_total_from'));
	this.inputVlrPagoFinal = element(by.id('etiquetaendereco_grid_filter_grand_total_to'));
	this.labelStatus = element(by.name('status'));
	this.inputStatus = element(by.id('etiquetaendereco_grid_filter_status'));
	this.labelAcao = element(by.cssContainingText('.nobr', 'Ação')); 

	//Detalhes - Etiquetas Correios > Menu Informações > Cabeçalho
	this.listaPedidosEtiquetaCorreios = element.all(by.css('#sales_order_grid_table > tbody > tr'));
	this.tituloDetalhesPedidoEtiquetaCorreio = element(by.css('.content-header h3'));
	this.btnVoltar = element(by.buttonText('Voltar'));
	this.btnEditar = element(by.buttonText('Editar'));
	this.btnEnviarEmail = element(by.buttonText('Enviar Email'));
	this.btnReembolso = element(by.buttonText('Reembolso'));
	this.btnSegurar = element(by.buttonText('Segurar'));
	this.btnEntrega = element(by.buttonText('Recomprar'));

	//Detalhes - Etiquetas Correios > Menu Informações > Confirmação de E-mail
	this.tituloConfirmaEmail = element(by.css('.box-left div div h4'));
	this.labelDataPedido = element(by.cssContainingText('label', 'Data do Pedido'));
	this.labelStatusPedido = element(by.cssContainingText('label', 'Status do Pedido'));
	this.labelCompradoEm = element(by.cssContainingText('label', 'Comprado Em'));
	this.labelIPOrigem = element(by.cssContainingText('label', 'IP de Origem'));

	//Detalhes - Etiquetas Correios > Menu Informações > Dados do Cliente
	this.tituloDadosCliente = element(by.cssContainingText('h4', 'Dados do Cliente'));
	this.labelNmDadosCliente = element(by.cssContainingText('label', 'Nome do Cliente'));
	this.labelEmailDadosCliente = element(by.cssContainingText('label', 'Email'));
	this.labelGrupoCliente = element(by.cssContainingText('label', 'Grupo do Cliente'));
	this.labelDataAniversario = element(by.cssContainingText('label', 'Date Of Birth'));
	this.labelCPFouCNPJ = element(by.cssContainingText('label', 'Tax/VAT Number'));

	//Detalhes - Etiquetas Correios > Menu Informações > Endereço de Cobrança
	this.tituloEndCobranca = element(by.cssContainingText('h4', 'Endereço de Cobrança'));
	this.boxEndCobranca = element(by.css('.box-left div fieldset address'));

	//Detalhes - Etiquetas Correios > Menu Informações > Endereço de Entrega
	this.tituloEndEntrega = element(by.cssContainingText('h4', 'Endereço de Entrega'));
	this.boxEndEntrega = element (by.css('.box-right div fieldset address'));

	//Detalhes - Etiquetas Correios > Menu Informações > Informações de Pagamento
	this.tituloInfoPagamento = element(by.cssContainingText('h4', 'Informações de Pagamento'));
	this.boxInfoPagamento = element(by.css('.entry-edit fieldset div'));

	//Detalhes - Etiquetas Correios > Menu Informações > Opções de Presente
	this.tituloOpcaoPresente = element(by.cssContainingText('h4', 'Opções de Presente'));
	this.labelMsgPresentePedido = element(by.cssContainingText('.entry-edit div', 'Mensagem de Presente para Todo o Pedido'));
	this.labelDeNome = element(by.cssContainingText('label', 'De Nome'));
	this.inputDeNome = element(by.id('giftmessage_order_38_sender'));
	this.labelParaNome = element(by.cssContainingText('label', 'Para Nome'));
	this.inputParaNome = element(by.id('giftmessage_order_38_recipient'));
	this.labelMsgParaPresente = element(by.cssContainingText('label', 'Mensagem de Presente'));
	this.txtareaMsgParaPresente = element(by.id('giftmessage_order_38_message'));
	this.btnSalvarMsgPresente = element(by.buttonText('Salvar Mensagem Presente'));

	//Detalhes - Etiquetas Correios > Menu Informações > Itens do Pedido
	this.tituloItensPedido = element(by.cssContainingText('h4', 'Itens do Pedido'));
	this.tableCabecalhoItensPedido = element(by.css('.headings th'));
	this.tableCorpoItensPedido = element(by.css('.even tr td'));

	//Detalhes - Etiquetas Correios > Menu Informações > Comentários Histórico
	this.tituloComentariosHistorico = element(by.cssContainingText('h4', 'Comentários Histórico'));
	this.labelIncluirComentario = element(by.cssContainingText('div', 'Incluir Comentários'));
	this.labelStatus = element(by.cssContainingText('label', 'Status'));
	this.inputStatus = element(by.id('history_status'));
	this.labelComentario = element(by.cssContainingText('label', 'Comentário'));
	this.txtareaComentario = element(by.id('history_comment'));
	this.checkAvisarClientePorEmail = element(by.id('history_notify'));
	this.labelAvisarClientePorEmail = element(by.cssContainingText('label', ' Avisar Cliente por e-mail'));
	this.checkVisivelFrontEnd = element(by.id('history_visible'));
	this.labelVisivelFrontEnd = element(by.cssContainingText('label', 'Visível no Frontend'));
	this.btnSalvarComentario = element(by.buttonText('Salvar Comentário'));

	//Detalhes - Etiquetas Correios > Menu Informações > Totais do Pedido
	this.tituloTotaisPedido = element(by.cssContainingText('h4', 'Totais do Pedido'));
	this.labelSubTotal = element(by.cssContainingText('.label', 'Sub-Total'));
	this.labelFrete = element(by.cssContainingText('.label','Frete'));
	this.labelDesconto = element(by.cssContainingText('.label', 'Desconto'));
	this.labelVlrTotal = element(by.cssContainingText('.label strong', 'Valor Total'));
	this.labelTotalPago = element(by.cssContainingText('.label strong', 'Total Pago'));
	this.labelTotalReembolsado = element(by.cssContainingText('.label strong', 'Total Reembolsado'));
	this.labelTotalDevido = element(by.cssContainingText('.label strong', 'Total Devido'));

	//Detalhes - Etiquetas Correios > Faturas
	this.opcaoFaturas = element(by.id('sales_order_view_tabs_order_invoices'));
	this.columnCodFatura = element(by.name('increment_id'));
	this.inputCodFatura = element(by.id('order_invoices_filter_increment_id'));
	this.columnNmCliente = element(by.name('billing_name'));
	this.inputNmCliente = element(by.id('order_invoices_filter_billing_name'));
	this.columnDtFatura = element(by.name('created_at'));
	this.inputDtFaturaIni = element(by.id('order_invoices_filter_created_at1516385576.5629_from'));
	this.inputDtFaturaFinal = element(by.id('order_invoices_filter_created_at1516385576.5629_to'));
	this.columnStatus = element(by.name('state'));
	this.inputStatus = element(by.id('order_invoices_filter_state'));
	this.columnVlrPago = element(by.name('base_grand_total'));
	this.inputVlrPagoIni = element(by.id('order_invoices_filter_base_grand_total_from'));
	this.inputVlrPagoFinal = element(by.id('order_invoices_filter_base_grand_total_to'));

	//Detalhes - Etiquetas Correios > Reembolsos
	this.opcaoReembolsos = element(by.id('sales_order_view_tabs_order_creditmemos'));
	this.columnCodReembolso = element(by.name('increment_id'));
	this.inputCodReembolso = element(by.id('order_creditmemos_filter_increment_id'))
	this.columnNmClienteReembolso = element(by.name('billing_name'));
	this.inputNmClienteReembolso = element(by.id('order_creditmemos_filter_billing_name'));
	this.columnDtCriadoEm = element(by.name('created_at'));
	this.inputDtCriadoEmIni = element(by.id('order_creditmemos_filter_created_at1516385576.5791_from'));
	this.inputDtCriadoEmFinal = element(by.id('order_creditmemos_filter_created_at1516385576.5791_to'));
	this.columnStatusReembolso = element(by.name('state'));
	this.inputStatusReembolso = element(by.id('order_creditmemos_filter_state'));
	this.columnDtReembolso = element(by.name('base_grand_total'));
	this.inputDtReembolsoIni = element(by.id('order_creditmemos_filter_base_grand_total_from'));
	this.inputDtReembolsoFinal = element(by.id('order_creditmemos_filter_base_grand_total_to'));

	//Detalhes - Etiquetas Correios > Entregas
	this.opcaoEntregas = element(by.id('sales_order_view_tabs_order_shipments'));
	this.columnCodEntrega = element(by.name('increment_id'));
	this.inputCodEntrega = element(by.id('order_shipments_filter_increment_id'));
	this.columnEntregaPara = element(by.name('shipping_name'));
	this.inputEntregaPara = element(by.id('order_shipments_filter_shipping_name'));
	this.columnDtEntrega = element(by.name('created_at'));
	this.inputDtEntregaIni = element(by.id('order_shipments_filter_created_at1516385576.5912_from'));
	this.inputDtEntregaFinal = element(by.id('order_shipments_filter_created_at1516385576.5912_to'));
	this.columnQuantidade = element(by.name('total_qty'));
	this.inputQtdeInicial = element(by.id('order_shipments_filter_total_qty_from'));
	this.inputQtdeFinal = element(by.id('order_shipments_filter_total_qty_to'));

	//Detalhes - Etiquetas Correios > Comentários Histórico
	this.opcaoComentariosHistorico = element(by.id('sales_order_view_tabs_order_history'));
	this.boxComentarioHistorico = element(by.css('#sales_order_view_tabs_order_history_content div fieldset ul'));

	//Verificar arquivos pelos localizadores name

	//Detalhes - Etiquetas Correios > Transações
	this.opcaoTransacoes = element(by.id('sales_order_view_tabs_order_transactions'));
	this.columnId = element(by.cssContainingText('.sort-title', 'ID Transação Parente'));
	this.inputIdDe = element(by.id('order_transactions_filter_transaction_id_from'));
	this.inputIdPara = element(by.id('order_transactions_filter_transaction_id_to'));
	this.columnIdPedido = element(by.cssContainingText('.sort-title', 'ID do Pedido'));
	this.inputIdPedido = element(by.id('order_transactions_filter_increment_id'));
	this.columnIdTransacoes = element(by.cssContainingText('.sort-title', 'ID da Transação'));
	this.inputIdTransacoes = element(by.id('order_transactions_filter_txn_id'));
	this.columnIdTransacoesParente = element(by.cssContainingText('.sort-title', 'ID Transação Parente'));
	this.inputIdTransacoesParente = element(by.id('order_transactions_filter_parent_txn_id'));
	this.columnNmMetodoPagamento = element(by.cssContainingText('.sort-title', 'Nome do Método de Pagamento'));
	this.inputNmMetodoPagamento = element(by.id('order_transactions_filter_method'));
	this.columnTipoTransacao = element(by.cssContainingText('.sort-title', 'Tipo da Transação'));
	this.inputTipoTransacao = element(by.id('order_transactions_filter_txn_type'));
	this.columnEstaFechado = element(by.cssContainingText('.sort-title', 'Está Fechado'));
	this.inputEstaFechado = element(by.id('order_transactions_filter_is_closed'));
	this.columnCriadoEm = element(by.cssContainingText('.sort-title', 'Criado Em'));
	this.inputCriadoEmIniTransacao = element(by.id('order_transactions_filter_created_at1516620017.7759_from'));
	this.inputCriadoEmFinalTransacao = element(by.id('order_transactions_filter_created_at1516620017.7759_to'));

	//Detalhes - Etiquetas Correios > Histórico de Mudanças
	this.opcaoHistMudancas = element(by.id('sales_order_view_tabs_tabid'));
	this.columnDataHistMudancas = element(by.cssContainingText('.sort-title', 'Data'));
	this.inputDtHistMudancasIni = element(by.id('audit_history_filter_date_time1516622847.8254_from'));
	this.inputDtHistMudancasFinal = element(by.id('audit_history_filter_date_time1516622847.8254_to'));
	this.columnNmUsuario = element(by.cssContainingText('.sort-title', 'Nome de usuário'));
	this.inputNmUsuario = element(by.id('audit_history_filter_username'));
	this.columnNmCompleto = element(by.cssContainingText('.sort-title', 'Nome completo'));
	this.inputNmCompleto = element(by.id('audit_history_filter_fullname'));
	this.columnTipoAcao = element(by.cssContainingText('.sort-title', 'Tipo de ação'));
	this.inputTipoAcao = element(by.id('audit_history_filter_type'));
	this.columnAcoes = element(by.cssContainingText('.nobr', 'Ações'));

	//Detalhes - Etiquetas Correios > Split Order Details
	this.opcaoSplitOrderDetails = element(by.id('sales_order_view_tabs_order_view_tab_splitorder'));
	this.boxSplitOrderDetails = element(by.css('#split-details-container > div.split-amount-wrapper.paid > p'));
	this.msgSemRegrasSlit = element(by.cssContainingText('h1', 'Não existem regras de split neste pedido'));

	this.selecionaPrimeiroPedidoEtiquetasCorreios = function() {
		helper.waitElementVisibility(this.listaPedidosEtiquetaCorreios);
		this.listaPedidosEtiquetaCorreios.filter(function (elemento, index) {
			return elemento.getText().then(function (txt) {
				return element.all(by.css('#sales_order_grid_table > tbody > tr > th')).getText().then (function (primeiroPedido) {
					return txt === primeiroPedido;
				});
			});
		}).first().click();
	};

	this.selecionaOpcaoFaturas = function() {
		helper.waitElementVisibility(this.opcaoFaturas);
		this.opcaoFaturas.click();
	};

	this.selecionaOpcaoReembolso = function() {
		helper.waitElementVisibility(this.opcaoReembolsos);
		this.opcaoReembolsos.click();
	};

	this.selecionaOpcaoEntrega = function() {
		helper.waitElementVisibility(this.opcaoEntregas);
		this.opcaoEntregas.click();
	};

	this.selecionaOpcaoComentarioHistorico = function() {
		helper.waitElementVisibility(this.opcaoComentariosHistorico);
		this.opcaoComentariosHistorico.click();
	};

	this.selecionaOpcaoTransacoes = function() {
		helper.waitElementVisibility(this.opcaoTransacoes);
		this.opcaoTransacoes.click();
	};

	this.selecionaOpcaoHistoricoMudancas = function() {
		helper.waitElementVisibility(this.opcaoHistMudancas);
		this.opcaoHistMudancas.click();
	};

	this.selecionaOpcaoSplitOrderDetails = function() {
		helper.waitElementVisibility(this.opcaoSplitOrderDetails);
		this.opcaoSplitOrderDetails.click();
	};
};

module.exports = new etiquetasCorreiosPage();