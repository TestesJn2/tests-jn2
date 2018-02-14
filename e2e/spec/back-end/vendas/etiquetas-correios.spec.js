//etiquetas-correios.spec.js
//Back-End

browser.ignoreSynchronization = true;

'use strict';

var autenticacaoPage = require ('../../../page-objects/back-end-menu/autenticacao.po');
var dashboardPage = require ('../../../page-objects/back-end-menu/dashboard.po');
var menuPage = require ('../../../page-objects/back-end-menu/menu.po');
var etiquetasCorreiosPage = require ('../../page-objects/modulos/vendas/etiquetas-correios.po');

var helper = require ('../../../helper/helper');

beforeEach(function() {
	browser.get('http://treinamento:f4ec4b20654ebc54@treinamento-jn2.agile.jn2.xyz/index.php/controle');
	browser.driver.sleep(500);
});

afterEach(function() {
	browser.driver.sleep(800);
});

describe ('Iniciar Testes - Login', function() {
	it ('login', function() {
		dashboardPage.msgAmbienteTeste.isPresent().then (function (value) {
			if (value === true) {
				console.log('login já realizado, continuar testes');
			} else {
				autenticacaoPage.login('jn2', 'P4ssw0rd');
				browser.driver.sleep(500);
				browser.refresh();
				helper.waitElementVisibility(dashboardPage.msgAmbienteTeste);
			};
		});
	});
});

describe ('Etiquetas dos Correios', function() {
	it ('Análise dos Elementos página principal > Cabeçalho', function() {
		menuPage.acessaSubMenuEtiquetasCorreios();
		helper.waitElementVisibility(etiquetasCorreiosPage.tituloEtiquetaCorreio);
		expect (etiquetasCorreiosPage.tituloEtiquetaCorreio.isPresent()).toBe(true);
		expect (etiquetasCorreiosPage.btnLimparFiltros.isDisplayed()).toBe(true);
		expect (etiquetasCorreiosPage.btnFiltros.isDisplayed()).toBe(true);
		expect (etiquetasCorreiosPage.inputExecutar.isDisplayed()).toBe(true);
		expect (etiquetasCorreiosPage.btnExecutar.isDisplayed()).toBe(true);
	});

	it ('Análise dos Elementos página principal > Tabela Etiquetas Correio', function() {
		menuPage.acessaSubMenuEtiquetasCorreios();
		helper.waitElementVisibility(etiquetasCorreiosPage.labelCodPedido);
		expect (etiquetasCorreiosPage.labelCodPedido.isPresent()).toBe(true);
		expect (etiquetasCorreiosPage.inputCodPedido.isDisplayed()).toBe(true);
		expect (etiquetasCorreiosPage.labelData.isPresent()).toBe(true);
		expect (etiquetasCorreiosPage.inputDataIni.isDisplayed()).toBe(true);
		expect (etiquetasCorreiosPage.inputDataFinal.isDisplayed()).toBe(true);
		expect (etiquetasCorreiosPage.labelNmCliente.isPresent()).toBe(true);
		expect (etiquetasCorreiosPage.inputNmCliente.isDisplayed()).toBe();
		expect (etiquetasCorreiosPage.labelEntregaPara.isPresent()).toBe(true);
		expect (etiquetasCorreiosPage.inputEntregaPara.isDisplayed()).toBe(true);
		expect (etiquetasCorreiosPage.labelVlrCobrado.isPresent()).toBe(true);
		expect (etiquetasCorreiosPage.inputVlrCobradoIni.isDisplayed()).toBe(true);
		expect (etiquetasCorreiosPage.inputVlrCobradoFinal.isDisplayed()).toBe(true);
		expect (etiquetasCorreiosPage.labelVlrPago.isPresent()).toBe(true);
		expect (etiquetasCorreiosPage.inputVlrPagoIni.isDisplayed()).toBe(true);
		expect (etiquetasCorreiosPage.inputVlrPagoFinal.isDisplayed()).toBe(true);
		expect (etiquetasCorreiosPage.labelStatus.isPresent()).toBe(true);
		expect (etiquetasCorreiosPage.inputStatus.isDisplayed()).toBe(true);
		expect (etiquetasCorreiosPage.labelAcao.isPresent()).toBe(true);
	});

	it ('Análise dos Elementos página principal > Detalhes > Informações > Cabeçalho', function () {
		menuPage.acessaSubMenuEtiquetasCorreios();
		etiquetasCorreiosPage.selecionaPrimeiroPedidoEtiquetasCorreios();
		helper.waitElementVisibility(etiquetasCorreiosPage.tituloDetalhesPedidoEtiquetaCorreio);
		expect (etiquetasCorreiosPage.tituloDetalhesPedidoEtiquetaCorreio.getText()).toContain('Pedido');
		expect (etiquetasCorreiosPage.btnVoltar.isDisplayed()).toBe(true);
		expect (etiquetasCorreiosPage.btnEditar.isDisplayed()).toBe(true);
		expect (etiquetasCorreiosPage.btnEnviarEmail.isDisplayed()).toBe(true);
		expect (etiquetasCorreiosPage.btnReembolso.isDisplayed()).toBe(true);
		expect (etiquetasCorreiosPage.btnSegurar.isDisplayed()).toBe(true);
		expect (etiquetasCorreiosPage.btnEntrega.isDisplayed()).toBe(true);
	});

	it ('Análise dos Elementos página principal > Detalhes > Informações > Confirmação de Email', function() {
		menuPage.acessaSubMenuEtiquetasCorreios();
		etiquetasCorreiosPage.selecionaPrimeiroPedidoEtiquetasCorreios();
		helper.waitElementVisibility(etiquetasCorreiosPage.tituloConfirmaEmail);
		expect (etiquetasCorreiosPage.tituloConfirmaEmail.isPresent()).toBe(true);
		expect (etiquetasCorreiosPage.labelDataPedido.isPresent()).toBe(true);
		expect (etiquetasCorreiosPage.labelStatusPedido.isPresent()).toBe(true);
		expect (etiquetasCorreiosPage.labelCompradoEm.isPresent()).toBe(true);
		expect (etiquetasCorreiosPage.labelIPOrigem.isPresent()).toBe(true);
	});

	it ('Análise dos Elementos página principal > Detalhes > Informações > Dados do Cliente', function() {
		menuPage.acessaSubMenuEtiquetasCorreios();
		etiquetasCorreiosPage.selecionaPrimeiroPedidoEtiquetasCorreios();
		helper.waitElementVisibility(etiquetasCorreiosPage.tituloDadosCliente);
		expect (etiquetasCorreiosPage.tituloDadosCliente.isPresent()).toBe(true);
		expect (etiquetasCorreiosPage.labelNmDadosCliente.isPresent()).toBe(true);
		expect (etiquetasCorreiosPage.labelEmailDadosCliente.isPresent()).toBe(true);
		expect (etiquetasCorreiosPage.labelGrupoCliente.isPresent()).toBe(true);
		expect (etiquetasCorreiosPage.labelDataAniversario.isPresent()).toBe(true);
		expect (etiquetasCorreiosPage.labelCPFouCNPJ.isPresent()).toBe(true);
	});

	it ('Análise dos Elementos página principal > Detalhes > Informações > Endereço de Cobrança', function() {
		menuPage.acessaSubMenuEtiquetasCorreios();
		etiquetasCorreiosPage.selecionaPrimeiroPedidoEtiquetasCorreios();
		helper.waitElementVisibility(etiquetasCorreiosPage.tituloEndCobranca);
		expect (etiquetasCorreiosPage.tituloEndCobranca.isPresent()).toBe(true);
		expect (etiquetasCorreiosPage.boxEndCobranca.getText()).not.toContain('');
	});

	it ('Análise dos Elementos página principal > Detalhes > Informações > Endereço de Entrega', function() {
		menuPage.acessaSubMenuEtiquetasCorreios();
		etiquetasCorreiosPage.selecionaPrimeiroPedidoEtiquetasCorreios();
		helper.waitElementVisibility(etiquetasCorreiosPage.tituloEndEntrega);
		expect (etiquetasCorreiosPage.tituloEndEntrega.isPresent()).toBe(true);
		expect (etiquetasCorreiosPage.boxEndEntrega.getText()).not.toContain('');
	});

	it ('Análise dos Elementos página principal > Detalhes > Informações > Informações de Pagamento', function() {
		menuPage.acessaSubMenuEtiquetasCorreios();
		etiquetasCorreiosPage.selecionaPrimeiroPedidoEtiquetasCorreios();
		helper.waitElementVisibility(etiquetasCorreiosPage.tituloInfoPagamento);
		expect (etiquetasCorreiosPage.tituloInfoPagamento.isPresent()).toBe(true);
		expect (etiquetasCorreiosPage.boxInfoPagamento.getText()).not.toContain('');
	});

	it ('Análise dos Elementos página principal > Detalhes > Informações > Opções de Presente', function() {
		menuPage.acessaSubMenuEtiquetasCorreios();
		etiquetasCorreiosPage.selecionaPrimeiroPedidoEtiquetasCorreios();
		helper.waitElementVisibility(etiquetasCorreiosPage.tituloOpcaoPresente);
		expect (etiquetasCorreiosPage.tituloOpcaoPresente.isPresent()).toBe(true);
		expect (etiquetasCorreiosPage.labelMsgPresentePedido.isPresent()).toBe(true);
		expect (etiquetasCorreiosPage.labelDeNome.isPresent()).toBe(true);
		expect (etiquetasCorreiosPage.inputDeNome.isDisplayed()).toBe(true);
		expect (etiquetasCorreiosPage.labelParaNome.isPresent()).toBe(true);
		expect (etiquetasCorreiosPage.inputParaNome.isDisplayed()).toBe(true);
		expect (etiquetasCorreiosPage.labelMsgParaPresente.isPresent()).toBe(true);
		expect (etiquetasCorreiosPage.txtareaMsgParaPresente.isDisplayed()).toBe(true);
		expect (etiquetasCorreiosPage.btnSalvarMsgPresente.isDisplayed()).toBe(true);
	});

	it ('Análise dos Elementos página principal > Detalhes > Informações > Itens do Pedido', function() {
		menuPage.acessaSubMenuEtiquetasCorreios();
		etiquetasCorreiosPage.selecionaPrimeiroPedidoEtiquetasCorreios();
		helper.waitElementVisibility(etiquetasCorreiosPage.tituloItensPedido);
		expect (etiquetasCorreiosPage.tituloItensPedido.isPresent()).toBe(true);
		expect (etiquetasCorreiosPage.tableCabecalhoItensPedido.isDisplayed()).toBe(true);
		expect (etiquetasCorreiosPage.tableCorpoItensPedido.isDisplayed()).toBe(true);
	});

	it ('Análise dos Elementos página principal > Detalhes > Informações > Comentários Histórico', function() {
		menuPage.acessaSubMenuEtiquetasCorreios();
		etiquetasCorreiosPage.selecionaPrimeiroPedidoEtiquetasCorreios();
		helper.waitElementVisibility(etiquetasCorreiosPage.tituloComentariosHistorico);
		expect (etiquetasCorreiosPage.tituloComentariosHistorico.isPresent()).toBe(true);
		expect (etiquetasCorreiosPage.labelIncluirComentario.isPresent()).toBe(true);
		expect (etiquetasCorreiosPage.labelStatus.isPresent()).toBe(true);
		expect (etiquetasCorreiosPage.inputStatus.isDisplayed()).toBe(true);
		expect (etiquetasCorreiosPage.labelComentario.isPresent()).toBe(true);
		expect (etiquetasCorreiosPage.txtareaComentario.isDisplayed()).toBe(true);
		expect (etiquetasCorreiosPage.checkAvisarClientePorEmail.isDisplayed()).toBe(true);
		expect (etiquetasCorreiosPage.labelAvisarClientePorEmail.isPresent()).toBe(true);
		expect (etiquetasCorreiosPage.labelAvisarClientePorEmail.getAttribute('for')).toEqual('history_notify');
		expect (etiquetasCorreiosPage.checkVisivelFrontEnd.isDisplayed()).toBe(true);
		expect (etiquetasCorreiosPage.labelVisivelFrontEnd.isPresent()).toBe(true);
		expect (etiquetasCorreiosPage.labelVisivelFrontEnd.getAttribute('for')).toEqual('history_visible');
		expect (etiquetasCorreiosPage.btnSalvarComentario.isDisplayed()).toBe(true);
	});

	it ('Análise dos Elementos página principal > Detalhes > Informações > Totais do Pedido', function() {
		menuPage.acessaSubMenuEtiquetasCorreios();
		etiquetasCorreiosPage.selecionaPrimeiroPedidoEtiquetasCorreios();
		helper.waitElementVisibility(etiquetasCorreiosPage.tituloTotaisPedido);
		expect (etiquetasCorreiosPage.tituloTotaisPedido.isPresent()).toBe(true);
		expect (etiquetasCorreiosPage.labelSubTotal.isPresent()).toBe(true);
		expect (etiquetasCorreiosPage.labelFrete.isPresent()).toBe(true);
		expect (etiquetasCorreiosPage.labelDesconto.isPresent()).toBe(true);
		expect (etiquetasCorreiosPage.labelVlrTotal.isPresent()).toBe(true);
		expect (etiquetasCorreiosPage.labelTotalPago.isPresent()).toBe(true);
		expect (etiquetasCorreiosPage.labelTotalReembolsado.isPresent()).toBe(true);
		expect (etiquetasCorreiosPage.labelTotalDevido.isPresent()).toBe(true);
	});

	it ('Análise dos Elementos página principal > Detalhes > Faturas', function() {
		menuPage.acessaSubMenuEtiquetasCorreios();
		etiquetasCorreiosPage.selecionaPrimeiroPedidoEtiquetasCorreios();
		etiquetasCorreiosPage.selecionaOpcaoFaturas()
		helper.waitElementVisibility(etiquetasCorreiosPage.columnCodFatura);
		expect (etiquetasCorreiosPage.columnCodFatura.isPresent()).toBe(true);
		expect (etiquetasCorreiosPage.inputCodFatura.isDisplayed()).toBe(true);
		expect (etiquetasCorreiosPage.columnNmCliente.isPresent()).toBe(true);
		expect (etiquetasCorreiosPage.inputNmCliente.isDisplayed()).toBe(true);
		expect (etiquetasCorreiosPage.columnDtFatura.isPresent()).toBe(true);
		expect (etiquetasCorreiosPage.inputDtFaturaIni.isDisplayed()).toBe(true);
		expect (etiquetasCorreiosPage.inputDtFaturaFinal.isDisplayed()).toBe(true);
		expect (etiquetasCorreiosPage.columnStatus.isPresent()).toBe(true);
		expect (etiquetasCorreiosPage.inputStatus.isDisplayed()).toBe(true);
		expect (etiquetasCorreiosPage.columnVlrPago.isPresent()).toBe(true);
		expect (etiquetasCorreiosPage.inputVlrPagoIni.isDisplayed()).toBe(true);
		expect (etiquetasCorreiosPage.inputVlrPagoFinal.isDisplayed()).toBe(true);
	});

	it ('Análise dos Elementos página principal > Detalhes > Reembolso', function() {
		menuPage.acessaSubMenuEtiquetasCorreios();
		etiquetasCorreiosPage.selecionaPrimeiroPedidoEtiquetasCorreios();
		etiquetasCorreiosPage.selecionaOpcaoReembolso();
		helper.waitElementVisibility(etiquetasCorreiosPage.columnCodReembolso);
		expect (etiquetasCorreiosPage.columnCodReembolso.isPresent()).toBe(true);
		expect (etiquetasCorreiosPage.inputCodReembolso.isDisplayed()).toBe(true);
		expect (etiquetasCorreiosPage.columnNmClienteReembolso.isPresent()).toBe(true);
		expect (etiquetasCorreiosPage.inputNmClienteReembolso.isDisplayed()).toBe(true);
		expect (etiquetasCorreiosPage.columnDtCriadoEm.isPresent()).toBe(true);
		expect (etiquetasCorreiosPage.inputDtCriadoEmIni.isDisplayed()).toBe(true);
		expect (etiquetasCorreiosPage.inputDtCriadoEmFinal.isDisplayed()).toBe(true);
		expect (etiquetasCorreiosPage.columnStatusReembolso.isPresent()).toBe(true);
		expect (etiquetasCorreiosPage.inputStatusReembolso.isDisplayed()).toBe(true);
		expect (etiquetasCorreiosPage.columnDtReembolso.isPresent()).toBe(true);
		expect (etiquetasCorreiosPage.inputDtReembolsoIni.isDisplayed()).toBe(true);
		expect (etiquetasCorreiosPage.inputDtReembolsoFinal.isDisplayed()).toBe(true);
	});

	it ('Análise dos Elementos página principal > Detalhes > Entrega', function() {
		menuPage.acessaSubMenuEtiquetasCorreios();
		etiquetasCorreiosPage.selecionaPrimeiroPedidoEtiquetasCorreios();
		etiquetasCorreiosPage.selecionaOpcaoEntrega();
		helper.waitElementVisibility(etiquetasCorreiosPage.columnCodEntrega);
		expect (etiquetasCorreiosPage.columnCodEntrega.isPresent()).toBe(true);
		expect (etiquetasCorreiosPage.inputCodEntrega.isDisplayed()).toBe(true);
		expect (etiquetasCorreiosPage.columnEntregaPara.isPresent()).toBe(true);
		expect (etiquetasCorreiosPage.inputEntregaPara.isDisplayed()).toBe(true);
		expect (etiquetasCorreiosPage.columnDtEntrega.isPresent()).toBe(true);
		expect (etiquetasCorreiosPage.inputDtEntregaIni.isDisplayed()).toBe(true);
		expect (etiquetasCorreiosPage.inputDtEntregaFinal.isDisplayed()).toBe(true);
		expect (etiquetasCorreiosPage.columnQuantidade.isPresent()).toBe(true);
		expect (etiquetasCorreiosPage.inputQtdeInicial.isDisplayed()).toBe(true);
		expect (etiquetasCorreiosPage.inputQtdeFinal.isDisplayed()).toBe(true);
	});

	it ('Análise dos Elementos página principal > Detalhes > Comentários Histórico', function() {
		menuPage.acessaSubMenuEtiquetasCorreios();
		etiquetasCorreiosPage.selecionaPrimeiroPedidoEtiquetasCorreios();
		etiquetasCorreiosPage.selecionaOpcaoComentarioHistorico();
		helper.waitElementVisibility(etiquetasCorreiosPage.boxComentarioHistorico.isPresent()).toBe(true);
		expect (etiquetasCorreiosPage.boxComentarioHistorico.isPresent()).toBe(true);
	});

	it ('Análise dos Elementos página principal > Detalhes > Transações', function() {
		menuPage.acessaSubMenuEtiquetasCorreios();
		etiquetasCorreiosPage.selecionaPrimeiroPedidoEtiquetasCorreios();
		etiquetasCorreiosPage.selecionaOpcaoTransacoes();
		helper.waitElementVisibility(etiquetasCorreiosPage.columnId);
		expect (etiquetasCorreiosPage.columnId.isPresent()).toBe(true);
		expect (etiquetasCorreiosPage.inputIdDe.isDisplayed()).toBe(true);
		expect (etiquetasCorreiosPage.inputIdPara.isDisplayed()).toBe(true);
		expect (etiquetasCorreiosPage.columnIdPedido.isPresent()).toBe(true);
		expect (etiquetasCorreiosPage.inputIdPedido.isDisplayed()).toBe(true);
		expect (etiquetasCorreiosPage.columnIdTransacoes.isPresent()).toBe(true);
		expect (etiquetasCorreiosPage.inputIdTransacoes.isDisplayed()).toBe(true);
		expect (etiquetasCorreiosPage.columnIdTransacoesParente.isPresent()).toBe(true);
		expect (etiquetasCorreiosPage.inputIdTransacoesParente.isDisplayed()).toBe(true);
		expect (etiquetasCorreiosPage.columnNmMetodoPagamento.isPresent()).toBe(true);
		expect (etiquetasCorreiosPage.inputNmMetodoPagamento.isDisplayed()).toBe(true);
		expect (etiquetasCorreiosPage.columnTipoTransacao.isPresent()).toBe(true);
		expect (etiquetasCorreiosPage.inputTipoTransacao.isDisplayed()).toBe(true);
		expect (etiquetasCorreiosPage.columnEstaFechado.isPresent()).toBe(true);
		expect (etiquetasCorreiosPage.inputEstaFechado.isDisplayed()).toBe(true);
		expect (etiquetasCorreiosPage.columnCriadoEm.isPresent()).toBe(true);
		expect (etiquetasCorreiosPage.inputCriadoEmIniTransacao.isDisplayed()).toBe(true);
		expect (etiquetasCorreiosPage.inputCriadoEmFinalTransacao.isDisplayed()).toBe(true);
	});

	it ('Análise dos Elementos página principal > Detalhes > Histórico de Mudanças', function() {
		menuPage.acessaSubMenuEtiquetasCorreios();
		etiquetasCorreiosPage.selecionaPrimeiroPedidoEtiquetasCorreios();
		etiquetasCorreiosPage.selecionaOpcaoHistoricoMudancas();
		helper.waitElementVisibility(etiquetasCorreiosPage.columnDataHistMudancas);
		expect (etiquetasCorreiosPage.columnDataHistMudancas.isPresent()).toBe(true);
		expect (etiquetasCorreiosPage.inputDtHistMudancasIni.isDisplayed()).toBe(true);
		expect (etiquetasCorreiosPage.inputDtHistMudancasFinal.isDisplayed()).toBe(true);
		expect (etiquetasCorreiosPage.columnNmUsuario.isPresent()).toBe(true);
		expect (etiquetasCorreiosPage.inputNmUsuario.isDisplayed()).toBe(true);
		expect (etiquetasCorreiosPage.columnNmCompleto.isPresent()).toBe(true);
		expect (etiquetasCorreiosPage.inputNmCompleto.isDisplayed()).toBe(true);
		expect (etiquetasCorreiosPage.columnTipoAcao.isPresent()).toBe(true);
		expect (etiquetasCorreiosPage.inputTipoAcao.isDisplayed()).toBe(true);
		expect (etiquetasCorreiosPage.columnAcoes.isPresent()).toBe(true);
	});

	it ('Análise dos Elementos página principal > Detalhes > Split Order Details', function() {
		menuPage.acessaSubMenuEtiquetasCorreios();
		etiquetasCorreiosPage.selecionaPrimeiroPedidoEtiquetasCorreios();
		etiquetasCorreiosPage.selecionaOpcaoSplitOrderDetails();
		etiquetasCorreiosPage.boxSplitOrderDetails.getText().then (function (txt) {
			if (txt <> '') {
				expect (etiquetasCorreiosPage.boxComentarioHistorico.getText()).not.toContain('');
			} else {
				expect (etiquetasCorreiosPage.msgSemRegrasSlit.isPresent()).toBe(true);
			};
		});
	});
});
