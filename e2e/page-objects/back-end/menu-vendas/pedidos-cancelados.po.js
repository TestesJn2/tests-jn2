//pedidos-cancelados.po.js

'use strict';  
var helper = require('../../../helper/helper.js');

var pedidosCanceladosPage = function() {
	//Elementos Principais
	this.tituloPedidosCancelados = element(by.cssContainingText('Pedidos Cancelados Automaticamente'));
	this.btnCriarPedido = element(by.buttonText('Criar Pedido'));
	this.listPedidosCancelados = element.all(by.css('#sales_order_canceled_grid_table > tbody > tr'));
	this.menuFaturasDetalhesPedido = element(by.id('sales_order_view_tabs_order_invoices'));
	this.menuReembolsoDetalhesPedido = element(by.id('sales_order_view_tabs_order_creditmemos'));
	this.menuEntregasDetalhasPedido = element(by.id('sales_order_view_tabs_order_shipments'));
	this.menuComentariosPedidoDetalhesPedido = element(by.id('sales_order_view_tabs_order_history'));
	this.menuTransacoesDetalhesPedidos = element(by.id('sales_order_view_tabs_order_transactions'));
	this.menuHistoricoDeMudancas = element(by.id('sales_order_view_tabs_tabid'));
	this.menuValorTotal = element(by.id('sales_order_view_tabs_order_view_tab_splitorder'));

	//1 Detalhes do Pedido > Informações
	this.tituloDetalhesPedidoCancelado = element(by.cssContainingText('.side-col', 'Detalhes do Pedido'));
	this.boxDetalhesPedidoCanceladoMenuInformacoes = element(by.css('.entry-edit-head'));

	//1.1 Dados do Cliente
	this.tituloPedidoCanceladoMenuInformacaoes = element(by.cssContainingText('h4', 'Dados do Cliente'));
	this.labelNomeClienteSectionDadosClientes = element(by.cssContainingText('label', 'Nome do Cliente'));
	this.labelEmailClienteSectionDadosClientes = element(by.cssContainingText('label', 'Email'));
	this.labelGrupoClienteSectionDadosClientes = element(by.cssContainingText('label', 'Grupo do Cliente'));
	this.labelDataAniversarioSectionDadosClientes = element(by.cssContainingText('label', 'Date Of Birth'));
	this.labelCPFSectionDadosClientes = element(by.cssContainingText('label', 'Tax/VAT Number'));

	//1.2 Endereço de Cobrança
	this.tituloEnderecoCobranca = element(by.cssContainingText('h4', 'Endereço de Cobrança'));
	this.infoEnderecoCobranca = element(by.css('#sales_order_view_tabs_order_info_content > div:nth-child(1) > div:nth-child(5) > div > fieldset > address'));
	this.linkEditarEndereco = element(by.linKText('Editar'));

	//1.3 Endereço de Entrega
	this.tituloEnderecoEntrega = element(by.cssContainingText('h4', 'Endereço de Entrega'));
	this.infoEnderecoEntrega = element(by.css('#sales_order_view_tabs_order_info_content > div:nth-child(1) > div:nth-child(6) > div > fieldset > address'));

	//1.4 Informações de Pagamento
	this.tituloInformacaoPagamento = element(by.cssContainingText('h4', 'Informações de Pagamento'));
	this.infoInformacaoPagamento = element(by.css('#sales_order_view_tabs_order_info_content > div:nth-child(1) > div:nth-child(9) > div > fieldset'));

	//1.5 Informações de Embalagem e Entrega
	this.tituloInfoEmbalagemEntrega = element(by.cssContainingText('h4', 'Informações de Embalagem e Entrega'));
	this.infoInfoEmbalagemEntrega = element(by.css('#sales_order_view_tabs_order_info_content > div:nth-child(1) > div:nth-child(10) > div > fieldset'))

	//1.6 Opções de Presente
	this.tituloOpcoesPresente = element(by.cssContainingText('h4', 'Opções de Presente'));
	this.subTituloOpcoesPresente = element(by.cssContainingText('.entry-edit', 'Mensagem de Presente para Todo o Pedido'));
	this.labelDeNomeCartao = element(by.cssContainingText('label', 'De Nome'));
	this.inputDeNomeCartao = element (by.id('giftmessage_order_32_sender'));
	this.labelParaNomeCartao = element (by.cssContainingText('label', 'Para Nome'));
	this.inputParaNomeCartao = element(by.id('giftmessage_order_32_recipient'));
	this.labelMsgCartao = element(by.cssContainingText('label', 'Mensagem de Presente'));
	this.inputMsgCartao = element(by.id('giftmessage_order_32_message'));
	this.btnSalvarMsgPresente = element(by.buttonText('Salvar Mensagem Presente'));

	//1.7 Itens do Pedido
	this.tituloItensPedido = element (by.cssContainingText('h4', 'Itens do Pedido'));

	//1.8 Comentários Histórico
	this.tituloComentariosHistorico = element(by.cssContainingText('h4', 'Comentários Histórico'));
	this.labelComentarioHistorico = element(by.cssContainingText('label', 'Comentário'));
	this.inputComentarioHistorico = element(by.id('history_comment'));
	this.labelAvisarClientePorEmail = element(by.cssContainingText('label', ' Avisar Cliente por e-mail'));
	this.btnSalvarComentario = element(by.buttonText('Salvar Comentário'));

	//1.9 Totais do Pedido
	this.tituloTotaisPedido = element (by.cssContainingText('.entry-edit-head', 'Totais do Pedido'));
	this.infoTotaisPedidos = element(by.css('.order-totals'));

	//2 Detalhes do Pedido > Faturas
	this.tituloFaturas = element(by.css('#content > div > div.content-header > h3'));
	this.btnLimparFiltro = element(by.buttonText('Limpar Filtros'));
	this.btnFiltrar = element(by.buttonText('Filtrar'));
	this.inputFiltroFatura = element(by.id('increment_id'));
	this.inputFiltroCliente = element(by.id('order_invoices_filter_billing_name'));
	this.inputOptionStatus = element(by.id('order_invoices_filter_billing_name'));

	//3 Detalhes do Pedido > Reembolso
	this.tituloReembolso = element(by.css('#content > div > div.content-header > h3'));
	this.columCodReembolso = element(by.name('increment_id'));
	this.inputFiltroReembolso = element(by.id('increment_id'));
	this.inputFiltroCliente = element(by.id('order_creditmemos_filter_billing_name'));
	this.optionFiltroStatus = element(by.id('order_creditmemos_filter_state'));

	//4 Detalhes do Pedido > Entregas
	this.tituloEntregas = element(by.css('#content > div > div.content-header > h3'));
	this.inputFiltroEntrega = element(by.id('order_shipments_filter_increment_id'));
	this.inputFiltroEntregaPara = element(by.id('order_shipments_filter_shipping_name'));

	//5 Detalhes do Pedido > Comentários Históricos
	this.tituloComentariosHistorico = element(by.css('#content > div > div.content-header > h3'));
	this.boxComentariosHististorico = element(by.id('sales_order_view_tabs_order_history_content'));

	//6 Detalhes do Pedido > Transações
	this.tituloTransacoes = element(by.css('#content > div > div.content-header > h3'));
	this.inputFiltroIDPedido = element(by.id('order_transactions_filter_increment_id'));
	this.inputFiltroIDTransacoes = element(by.id('order_transactions_filter_txn_id'));
	this.optionFiltroNomeMetodoPagamento = element(by.id('order_transactions_filter_method'));
	this.optionFiltroTipoTransacao = element(by.id('order_transactions_filter_txn_type'));
	this.optionFiltroEstaFechado = element(by.id('order_transactions_filter_is_closed'));
	this.columnIDTransacao = element(by.linKText('ID da Transação'));

	//7 Detalhes do Pedido > Histórico de Mudanças
	this.tituloHistoricoMudancas = element(by.css('#content > div > div.content-header > h3'));
	this.inputFiltroNomeUsuario = element(by.id('audit_history_filter_username'));
	this.inputFiltroTipoAcao = element(by.id('audit_history_filter_type'));
	this.columnNomeUsuario = element(by.linKText('Nome de usuário'));

	//8 Detalhes do Pedido > Split Order Details
	this.tituloValorTotal = element(by.css('#content > div > div.content-header > h3'));
	this.boxValorTotal = element(by.css('#split-details-container > div.split-amount-wrapper.paid > p'));
	this.btnVoltar = element(by.id('id_9fe68fe6bf1aca82fe026cccf1ecc47f'));
	

	//Metodos
	this.selecionaPrimeiroPedidoCancelado = function() {
		helper.waitElementVisibility(this.listPedidosCancelados);
		this.listPedidosCancelados.filter(function (element, index) {
			return element.getText().then (function(txt) {
				return txt === element(by.css('#sales_order_canceled_grid_table > tbody > tr > td'));
			});
		}).first().click();
	};


	this.acessaMenuFaturasDetalhesPedido = function() {
		helper.waitElementVisibility(this.menuFaturasDetalhesPedido);
		this.menuFaturasDetalhesPedido.sendKeys(protractor.Key.ENTER);
	};

	this.acessaMenuReembolsoDetalhesPedido = function() {
		helper.waitElementVisibility(this.menuReembolsoDetalhesPedido);
		this.menuReembolsoDetalhesPedido.sendKeys(protractor.Key.ENTER);
	};

	this.acessaMenuEntregasDetalhesPedido = function() {
		helper.waitElementVisibility(this.menuEntregasDetalhasPedido);
		this.menuEntregasDetalhasPedido.sendKeys(protractor.Key.ENTER);
	};

	this.acessaMenuComentariosPedido = function() {
		helper.waitElementVisibility(this.menuComentariosPedidoDetalhesPedido);
		this.menuComentariosPedidoDetalhesPedido.sendKeys(protractor.Key.ENTER);
	};

	this.acessaMenuTransacoes = function() {
		helper.waitElementVisibility(this.menuTransacoesDetalhesPedidos);
		this.menuTransacoesDetalhesPedidos.sendKeys(protractor.Key.ENTER);
	};

	this.acessaMenuHistoricoMudancas = function() {
		helper.waitElementVisibility(this.menuHistoricoDeMudancas);
		this.menuHistoricoDeMudancas.sendKeys(protractor.Key.ENTER);
	};

	this.acessaMenuPrecoTotal = function() {
		helper.waitElementVisibility(this.menuValorTotal);
		this.menuValorTotal.sendKeys(protractor.Key.ENTER);
	};
};

module.exports = new pedidosCanceladosPage();