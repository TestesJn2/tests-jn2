//faturas.po.js

'use strict';  
var helper = require('../../../helper/helper.js');

var faturasPage = function() {
	//Elemento Titulo
	this.tituloFaturas = element(by.cssContainingText('h3','Faturas'));

	//Botões do Cabeçalho
	this.btnFiltrar = element(by.buttonText('Filtrar'));
	this.btnLimparFiltros = element(by.buttonText('Limpar Filtros'));
	this.btnExportarCSV = element(by.buttonText('Exportar'));

	//Tabela Faturas
	this.inputBuscaCodFatura = element(by.id('sales_invoice_grid_filter_increment_id'));
	this.columnCodFatura = element(by.name('increment_id'));
	this.inputBuscaDataFaturaInic = element(by.id('sales_invoice_grid_filter_created_at1516278774.2094_from'));
	this.inputBuscaDataFaturaFinal = element(by.id('sales_invoice_grid_filter_created_at1516278774.2094_to'));
	this.columnDataFatura = element(by.name('created_at'));
	this.inputCodPedido = element(by.id('sales_invoice_grid_filter_order_increment_id'));
	this.columnCodPedido = element(by.name('order_increment_id'));
	this.inputBuscaDataPedidoInic = element(by.id('sales_invoice_grid_filter_order_created_at1516279274.555_from'));
	this.inputBuscaDataPedidoFinal = element(by.id('sales_invoice_grid_filter_order_created_at1516279274.555_to'));
	this.columnDataPedido = element(by.name('order_created_at'));
	this.inputBuscaNmCliente = element(by.id('sales_invoice_grid_filter_billing_name'));
	this.columnNmCliente = element(by.name('billing_name'));
	this.optionStatus = element(by.id('sales_invoice_grid_filter_state'));
	this.columnStatus = element(by.id('state'));
	this.inputVlrInicial = element(by.id('sales_invoice_grid_filter_grand_total_from'));
	this.inputVlrFinal = element(by.id('sales_invoice_grid_filter_grand_total_to'));
	this.columnVlrPago = element(by.name('grand_total'));
	this.columnAcao = element(by.cssContainingText('span', 'Ação'));

	//Detalhes da Fatura
	this.listaFaturas = element.all(by.css('#sales_invoice_grid_table > tbody > tr'));
	this.tituloDetalhesFatura = element(by.css('#messages div h3'));
	this.btnVoltar = element(by.buttonText('Voltar'));
	this.btnEnviarEmail = element(by.buttonText('Enviar Email'));
	this.btnImprimir = element(by.buttonText('Imprimir'));
	//Detalhes da Fatura > Box E-mail Confirmação
	this.boxEmailConfirmacaoPedido = element(by.css('.form-list tbody tr td'));
	//Detalhes da Fatura > Box Dados do Cliente
	this.tituloDadosCliente = element(by.cssContainingText('h4', 'Dados do Cliente'));
	this.labelNmCliente = element(by.cssContainingText('label', 'Nome do Cliente'));
	this.labelEmail = element(by.cssContainingText('label','Email'));
	this.labelGrupoCliente = element(by.cssContainingText('label','Grupo do Cliente'));
	this.labelDataAniversario = element(by.cssContainingText('label', 'Date Of Birth'));
	this.labelCPFouCNPJ = element(by.cssContainingText('label', 'Tax/VAT Number'));
	//Detalhes da Fatura > Box Dados do Cliente
	this.tituloEndCobranca = element(by.cssContainingText('h4', 'Endereço de Cobrança'));
	this.boxEndCobranca = element(by.css('.box-left div fieldset address'));
	//Detalhes da Fatura > Endereço de Entrega
	this.tituloEndEntrega = element(by.cssContainingText('h4', 'Endereço de Entrega'));
	this.boxEndEntrega = element(by.css('.box-right div div fieldset address'));
	//Detalhes da Fatura > Informações de Pagamento
	this.tituloInfoPagamento = element(by.cssContainingText('h4', 'Informações de Pagamento'));
	//Detalhes da Fatura > Informações da Entrega
	this.tituloInfoEntrega = element(by.cssContainingText('h4', 'Informações da Entrega'));
	//Detalhes da Fatura > Itens Faturados
	this.tituloItensFaturados = element(by.cssContainingText('h4', 'Itens Faturados'));
	this.boxItensFaturados = element(by.id('invoice_item_container'));
	//Detalhes da Fatura > Histórico da Fatura
	this.tituloHistoricoFatura = element(by.cssContainingText('h4','Histórico da Fatura'));
	this.labelComentario = element(by.cssContainingText('.normal', 'Comentário'));
	this.inputComentario = element(by.id('history_comment'));
	this.labelAvisarClientePorEmail = element(by.cssContainingText('label', 'Avisar Cliente por e-mail'));
	this.checkAvisarClientePorEmail = element(by.id('history_notify'));
	this.labelVisivelFronEnd = element(by.cssContainingText('label',' Visível no Frontend'));
	this.checkVisivelFrontEnd = element(by.id('history_visible'));
	this.btnSalvarComentario = element(by.buttonText('Salvar Comentário'));
	//Detalhes da Fatura > Total da Fatura
	this.tituloTotalFatura = element(by.cssContainingText('h4', 'Total da Fatura'));
	this.labelSubTotal = element(by.cssContainingText('.label', 'Sub-Total'));
	this.labelFrete = element(by.cssContainingText('.label', 'Frete'));
	this.labelValorTotal = element(by.cssContainingText('strong', 'Valor Total'));
	this.labelTotalPago = element(by.cssContainingText('strong','Total Pago'));
	this.labelTotalReembolso = element(by.cssContainingText('strong', 'Total Reembolsado'));
	this.labelTotalDevido = element(by.cssContainingText('strong', 'Total Devido'));

	//Metodos
	this.selecionaPrimeiraFaturaListada = function() {
		helper.waitElementVisibility(this.listaFaturas);
		this.listaFaturas.filter (function (element, index) {
			return element.getText().then( function (txt) {
				element(by.css('#sales_invoice_grid_table > tbody > tr > td')).getText().then(function(nomeFatura) {
					return txt === nomeFatura;
				});
			});
		}).first().click();
	};
};

module.exports = new faturasPage();
