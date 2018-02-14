//reembolsos.po.js

'use strict';  
var helper = require('../../../helper/helper.js');

var reembolsosPage = function() {
	//Cabeçalho
	this.tituloReembolsos = element(by.cssContainingText('h3', 'Reembolsos'));
	this.inputExportaCSV = element(by.id('sales_creditmemo_grid_export'));
	this.btnExportarCSV = element(by.buttonText('Exportar'));
	this.btnLimparFiltros = element(by.buttonText('Limpar Filtros'));
	this.btnFiltrar = element(by.buttonText('Filtrar'));
	this.inputAcoes = element(by.id('sales_creditmemo_grid_massaction-select'));
	this.btnExecutar = element(by.buttonText('Executar'));

	//Tabela Reembolsos
	this.columnCodReembolsos = element(by.name('increment_id'));
	this.inputCodReembolsos = element(by.id('sales_creditmemo_grid_filter_increment_id'));
	this.columnCriadoEm = element(by.name('created_at'));
	this.inputDataCriadoEmIni = element(by.id('sales_creditmemo_grid_filter_created_at1516303422.7083_from'));
	this.inputDataCriadoEmFinal = element(by.id('sales_creditmemo_grid_filter_created_at1516303422.7083_to'));
	this.columnCodPedido = element(by.name('order_increment_id'));
	this.inputCodPedido = element(by.id('sales_creditmemo_grid_filter_order_increment_id'));
	this.columnDataPedido = element(by.name('order_created_at'));
	this.inputDataPedidoIni = element(by.id('sales_creditmemo_grid_filter_order_created_at1516303422.7087_from'));
	this.inputDataPedidoFinal = element(by.id('sales_creditmemo_grid_filter_order_created_at1516303422.7087_to'));
	this.columnCliente = element(by.name('billing_name'));
	this.inputCliente = element(by.id('sales_creditmemo_grid_filter_billing_name'));
	this.columnStatus = element(by.name('state'));
	this.inputStatus = element(by.id('sales_creditmemo_grid_filter_state'));
	this.columnVlrReembolsado = element(by.name('grand_total'));
	this.inputVlrReembolsoIni = element(by.id('sales_creditmemo_grid_filter_grand_total_from'));
	this.inputVlrReembolsoFinal = element(by.id('sales_creditmemo_grid_filter_grand_total_to'));
	this.columnAcao = element(by.cssContainingText('span', 'Ação'));

	// Detalhes Reembolso
	this.listaReembolsos = element.all(by.css('#sales_creditmemo_grid_table > tbody > tr'));
	// Detalhes Reembolso > Cabeçalho
	this.tituloDetalhesReembolso = element(by.css('#anchor-content div div h3'));
	this.btnVoltar = element(by.buttonText('Voltar'));
	this.btnEnviarEmail = element(by.buttonText('Enviar Email'));
	this.btnImprimir = element(by.buttonText('Imprimir'));
	// Detalhes Reembolso > Box O e-mail de confirmação do pedido foi enviado
	this.tituloEmailConfirmado = element(by.css('.entry-edit-head strong'));
	this.labelDtPedido = element(by.cssContainingText('label','Data do Pedido'));
	this.labelStatusPedido = element(by.cssContainingText('label', 'Status do Pedido'));
	this.labelCompraEm = element(by.cssContainingText('label', 'Comprado Em'));
	// Detalhes Reembolso > Dados do Cliente
	this.tituloDadosCliente = element(by.cssContainingText('h4', 'Dados do Cliente'));
	this.labelNmCliente = element(by.cssContainingText('label', 'Nome do Cliente'));
	this.labelEmailCliente = element(by.cssContainingText('label', 'Email'));
	this.labelGrupoCliente = element(by.cssContainingText('label', 'Grupo do Cliente'));
	this.labelDataAniversario = element(by.cssContainingText('label', 'Date Of Birth'));
	this.labelCPFouCNPJ = element(by.cssContainingText('label', 'Tax/VAT Number')); 
	// Detalhes Reembolso > Endereço de Cobrança
	this.tituloEndCobranca = element(by.cssContainingText('label', 'Endereço de Cobrança'));
	this.boxEndCobranca = element(by.css('.box-left div fieldset address'));
	// Detalhes Reembolso > Endereço de Entrega
	this.tituloEndEntrega = element(by.cssContainingText('h4', 'Endereço de Entrega'));
	this.boxEndEntrega = element(by.css('.box-right div fieldset address'));
	// Detalhes Reembolso > Informações de Pagamento
	this.tituloInfoPagamento = element(by.cssContainingText('h4', 'Informações de Pagamento'));
	this.boxInfoPagamento = element(by.css('.box-left div fieldset div a'));
	// Detalhes Reembolso > Informações da Entrega
	this.tituloInfoEntrega = element(by.cssContainingText('h4', 'Informações da Entrega'));
	this.boxInfoEntrega = element(by.css('.box-right div fieldset strong'));
	// Detalhes Reembolso > Itens Reembolsados
	this.tituloItensReembolso = element(by.cssContainingText('h4','Itens Reembolsados'));
	this.columnTabelaReembolso = element(by.css('.headings th'));
	this.linhasTabelaReembolso = element(by.css('.border th'));
	// Detalhes Reembolso > Histórico de Reembolso
	this.tituloHistReembolso = element(by.cssContainingText('h4', 'Histórico de Reembolso'));
	this.labelComentario = element(by.cssContainingText('label', 'Comentário'));
	this.txtareaComentario = element(by.id('history_comment'));
	this.checkAvisarEmailCliente = element(by.id('history_notify'));
	this.labelAvisarEmailCliente = element(by.cssContainingText('label', 'Avisar Cliente por e-mail'));
	this.checkVisivelFrontEnd = element(by.id('history_visible'));
	this.labelVisivelFrontEnd = element(by.cssContainingText('label', ' Visível no Frontend'));
	this.btnSalvarComentario = element(by.buttonText('Salvar Comentário'));
	// Detalhes Reembolso > Total de Reembolso
	this.tituloTotalReembolso = element(by.cssContainingText('h4', 'Total de Reembolso'));
	this.labelSubTotal = element(by.cssContainingText('.label', 'Sub-Total'));
	this.labelAjustarReembolso = element(by.cssContainingText('.label', 'Ajustar Reembolso'));
	this.labelTxManutencao = element(by.cssContainingText('.label', 'Taxa de Manutenção'));
	this.VlrTotal = element(by.cssContainingText('.label strong', 'Valor Total'));

	//Metodos
	this.selecionaPrimeiroReembolsoListado = function() {
		helper.waitElementVisibility(this.listaReembolsos);
		this.listaReembolsos.filter (function (linha, index) {
			return linha.getText().then (function (texto) {
				return element(by.css('#sales_creditmemo_grid_table > tbody > tr > td')).getText().then(function (value) {
					return texto === value;
				});
			});	
		}).first().click();
	};
};

module.exports = new reembolsosPage();