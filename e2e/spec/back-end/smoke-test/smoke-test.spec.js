//smoke-test.spec.js
//Back-End


browser.ignoreSynchronization = true;

'use strict';
//Geral
var geralPage = require ('../../page-objects/back-end-menu/geral/geral.po');
var autenticacaoPage = require ('../../page-objects/back-end-menu/geral/autenticacao.po');
var dashboardPage = require ('../../page-objects/back-end-menu/geral/dashboard.po');
var menuPage = require ('../../page-objects/back-end-menu/geral/menu.po');
//Menu Painel
var painelCarrinhoAbandonadoPage =  require ('../../page-objects/back-end-menu/painel/painel-carrinho-abandonado.po');
//Menu Vendas
var pedidosPage =  require ('../../page-objects/back-end-menu/vendas/pedidos.po');
var pedidosCanceladosPage = require ('../../page-objects/back-end-menu/vendas/pedidos-cancelados.po');
var faturasPage = require ('../../page-objects/back-end-menu/vendas/faturas.po');
var entregasPage = require ('../../page-objects/back-end-menu/vendas/entregas.po');
var reembolsosPage = require ('../../page-objects/back-end-menu/vendas/reembolsos.po');
var etiquetasCorreiosPage = require ('../../page-objects/back-end-menu/vendas/etiquetas-correios.po');
//Modulos de Pagamento
var pagarmePage = require ('../../page-objects/modulos-pagamentos/pagar-me.po');


var helper = require ('../../helper/helper');

beforeEach(function() {
	browser.get('http://homol:5945d16a075541a5@homologacao.jn2.xyz/index.php/controle');
	browser.driver.sleep(500);
});

afterEach(function() {
	browser.driver.sleep(800);
});

describe ('1. Back-End: Autenticação', function() {

	it ('1.1  Valida elementos Login: logo, título, nome da label e input de usuário e senha, botão de confirmação, link esqueci minha senha.', function() {
		expect (autenticacaoPage.imgLogo.isPresent()).toBe(true);
		expect (autenticacaoPage.tituloPainelAdmin.isPresent()).toBe(true);
		expect (autenticacaoPage.labelUsuario.isPresent()).toBe(true);
		expect (autenticacaoPage.labelUsuario.getAttribute('for')).toEqual('username');
		expect (autenticacaoPage.inputUsuario.isDisplayed()).toBe(true);
		expect (autenticacaoPage.labelSenha.isPresent()).toBe(true);
		expect (autenticacaoPage.labelSenha.getAttribute('for')).toEqual('login');
		expect (autenticacaoPage.inputSenha.isDisplayed()).toBe(true);
		expect (autenticacaoPage.btnConfirmacao.isDisplayed()).toBe(true);
		expect (autenticacaoPage.linkEsqueceuSenha.isDisplayed()).toBe(true);
	});

	it ('1.2 Login inválido: verifica a mensagem - You did not sign in correctly or your account is temporarily disabled.', function() {
		autenticacaoPage.login('jn2', '123456');
		helper.waitElementVisibility(autenticacaoPage.msgLoginInvalido);
		expect (autenticacaoPage.msgLoginInvalido.getText()).toEqual('You did not sign in correctly or your account is temporarily disabled.');
	});

	fit ('1.3 Login Válido: Verifica se no menu é habilitado botão logout mais os elementos título Painel, Ciclo de Vendas, Média dos Pedidos, Últimos 5 Pedidos, Últimas 5 Pesquisas, Top 5 Termos Procurados e Painel de pedidos.', function() {
		autenticacaoPage.login('jn2', 'P4ssw0rd');
		browser.driver.sleep(500);
		browser.refresh();
		helper.waitElementVisibility(dashboardPage.msgAmbienteTeste);
		helper.waitElementVisibility(menuPage.btnLogout);
		expect (menuPage.btnLogout.isDisplayed()).toBe(true);
		expect (dashboardPage.tituloPainel.isPresent()).toBe(true);
		expect (dashboardPage.tituloCicloVendas.isPresent()).toBe(true);
		expect (dashboardPage.tituloMediaPedidos.isPresent()).toBe(true);
		expect (dashboardPage.tituloUltimosPedidos.isPresent()).toBe(true);
		expect (dashboardPage.tituloUltimasPesquisas.isPresent()).toBe(true);
		expect (dashboardPage.tituloTermosProcurados.isPresent()).toBe(true);
		expect (dashboardPage.btnSectionPedidos.isPresent()).toBe(true);
	});
});

describe ('2. Back-End: Painel de Carrinho Abandonado', function() {

	it ('2.1 ', function() {
		menuPage.acessaSubMenuPainelCarrinhoAbandonado();
	});
});

describe ('3. Menu Vendas > Pedidos', function() {
	it ('3.1 Criar um Pedido Manual', function() {
		menuPage.acessaSubMenuPedidos();
		pedidosPage.clickCriarPedido();			
		pedidosPage.informaEmailParaBuscaClienteSelecao('USUARIO TESTE AUTOMATIZADO LOGIN','tests@teste.com.br');
		pedidosPage.clickConfirmaFiltroSelecaoClientes();
		pedidosPage.selecionaClienteAutomacaoParaCriacaoPedidos('tests@teste.com.br');
		pedidosPage.selecionaIdioma();
		pedidosPage.clickCriarProduto();
		pedidosPage.selecionaPrimeiroProdutoListado();
		pedidosPage.clickBtnAdicionarProdutoSelecionado();
		pedidosPage.clickUtilizaBoletoBancario();
		pedidosPage.clickObterMetodosEntrega();
		pedidosPage.selecionaPrimeiroMetodoPagamentoDisponivel();
		pedidosPage.clickBtnSalvarPedidos();
		//Não pode ser validado, pois, no tema antigo, mesmo selecionando a forma de entrega, a mesma não é reconhecida.Obs: No cenário não havia frete grátis.
	});
});

describe ('4. Pedidos Cancelados Automaticamente', function() {
	it ('4.1 Acessar a tela Produtos Cancelados e selecionar um registro', function() {
		//Gerar código para cancelar um pedido
		menuPage.acessaSubMenuPedidosCancelados();
	    expect (pedidosCanceladosPage.tituloPedidosCancelados.isPresent()).toBe(true);
	    expect (pedidosCanceladosPage.btnCriarPedido.isDisplayed()).toBe(true);
	    expect (pedidosCanceladosPage.selecionaPrimeiroPedidoCancelado.isPresent()).toBe(true);
	});

	it ('4.2 Visualizar Detalhes do Pedido > Informações > Section Dados do Cliente', function() {
		menuPage.acessaSubMenuPedidos();
		pedidosCanceladosPage.selecionaPrimeiroPedidoCancelado();
		helper.waitElementVisibility(pedidosCanceladosPage.tituloDetalhesPedidoCancelado);
		expect (pedidosCanceladosPage.tituloDetalhesPedidoCancelado.isPresent()).toBe(true);
		expect (pedidosCanceladosPage.boxDetalhesPedidoCanceladoMenuInformacoes.getAttribute('class')).toContain('(O e-mail de confirmação do pedido foi enviado)');
		expect (pedidosCanceladosPage.tituloPedidoCanceladoMenuInformacaoes.isPresent()).toBe(true);
		expect (pedidosCanceladosPage.labelNomeClienteSectionDadosClientes.isPresent()).toBe(true);
		expect (pedidosCanceladosPage.labelEmailClienteSectionDadosClientes.isPresent()).toBe(true);
		expect (pedidosCanceladosPage.labelGrupoClienteSectionDadosClientes.isPresent()).toBe(true);
		expect (pedidosCanceladosPage.labelDataAniversarioSectionDadosClientes.isPresent()).toBe(true);
		expect (pedidosCanceladosPage.labelCPFSectionDadosClientes.isPresent()).toBe(true);
		//A validade dos dados pessoais fica condicionado a criar um pedido especifico que será criado nos próximos testes
	});

	it ('4.3 Visualizar Detalhes do Pedido > Informações > Section- Endereço de Cobrança', function() {
		menuPage.acessaSubMenuPedidos();
		pedidosCanceladosPage.selecionaPrimeiroPedidoCancelado();
		helper.waitElementVisibility(pedidosCanceladosPage.tituloEnderecoCobranca);
		expect (pedidosCanceladosPage.tituloEnderecoCobranca.isPresent()).toBe(true);
		expect (pedidosCanceladosPage.infoEnderecoCobranca.getText()).not.toEqual('');
		expect (pedidosCanceladosPage.linkEditarEndereco.isDisplayed()).toBe(true); //Ver que possui mais de um link de edição
	});

	it ('4.4 Visualizar Detalhes do Pedido > Informações > Section Endereço de Entrega', function () {
		menuPage.acessaSubMenuPedidos();
		pedidosCanceladosPage.selecionaPrimeiroPedidoCancelado();
		helper.waitElementVisibility(pedidosCanceladosPage.tituloEnderecoEntrega);
		expect (pedidosCanceladosPage.tituloEnderecoEntrega.isPresent()).toBe(true);
		expect (pedidosCanceladosPage.infoEnderecoEntrega.getText()).not.toEqual('');
	});

	it ('4.5 Visualizar Detalhes do Pedido > Informações > Section Informações de Pagamento', function() {
		menuPage.acessaSubMenuPedidos();
		pedidosCanceladosPage.selecionaPrimeiroPedidoCancelado();
		helper.waitElementVisibility(pedidosCanceladosPage.tituloInformacaoPagamento);
		expect (pedidosCanceladosPage.tituloInformacaoPagamento.isPresent()).toBe(true);
		expect (pedidosCanceladosPage.infoInformacaoPagamento.getText()).not.toEqual('');
	});

	it ('4.6 Visualizar Detalhes do Pedido > Informações > Section Informações de Embalagem e Entrega', function() {
		menuPage.acessaSubMenuPedidos();
		pedidosCanceladosPage.selecionaPrimeiroPedidoCancelado();
		helper.waitElementVisibility(pedidosCanceladosPage.tituloInfoEmbalagemEntrega);
		expect (pedidosCanceladosPage.tituloInfoEmbalagemEntrega.isPresent()).toBe(true);
		expect (pedidosCanceladosPage.infoInfoEmbalagemEntrega.getText()).not.toEqual('');
	});

	it ('4.7 Visualizar Detalhes do Pedido > Informações > Section Opções de Presente', function() {
		menuPage.acessaSubMenuPedidos();
		pedidosCanceladosPage.selecionaPrimeiroPedidoCancelado();
		helper.waitElementVisibility(pedidosCanceladosPage.tituloOpcoesPresente)
		expect (pedidosCanceladosPage.tituloOpcoesPresente.isPresent()).toBe(true);
		expect (pedidosCanceladosPage.subTituloOpcoesPresente.isPresent()).toBe(true);
		expect (pedidosCanceladosPage.labelDeNomeCartao.isPresent()).toBe(true);
		expect (pedidosCanceladosPage.inputDeNomeCartao.isDisplayed()).toBe(true);
		expect (pedidosCanceladosPage.labelParaNomeCartao.isPresent()).toBe(true);
		expect (pedidosCanceladosPage.inputParaNomeCartao.isDisplayed()).toBe(true);
		expect (pedidosCanceladosPage.labelMsgCartao.isPresent()).toBe(true);
		expect (pedidosCanceladosPage.inputMsgCartao.isDisplayed()).toBe(true);
		expect (pedidosCanceladosPage.btnSalvarMsgPresente.isDisplayed()).toBe(true);
	});

	it ('4.8 Visualizar Detalhes do Pedido > Informações > Section Itens do Pedido', function() {
		menuPage.acessaSubMenuPedidos();
		pedidosCanceladosPage.selecionaPrimeiroPedidoCancelado();
		helper.waitElementVisibility(pedidosCanceladosPage.tituloComentariosHistorico);
		expect (pedidosCanceladosPage.tituloComentariosHistorico.isPresent()).toBe(true);
		expect (pedidosCanceladosPage.labelComentarioHistorico.isPresent()).toBe(true);
		expect (pedidosCanceladosPage.inputComentarioHistorico.isDisplayed()).toBe(true);
		expect (pedidosCanceladosPage.labelAvisarClientePorEmail.isPresent()).toBe(true);
		expect (pedidosCanceladosPage.btnSalvarComentario.isDisplayed()).toBe(true);
	});

	it ('4.9 Visualizar Detalhes do Pedido > Informações > Section Totais do Pedido', function() {
		menuPage.acessaSubMenuPedidos();
		pedidosCanceladosPage.selecionaPrimeiroPedidoCancelado();
		helper.waitElementVisibility(pedidosCanceladosPage.tituloTotaisPedido);
		expect (pedidosCanceladosPage.tituloTotaisPedido.isPresent()).toBe(true);
		expect (pedidosCanceladosPage.infoTotaisPedidos.getText()).not.toContain('');
	});

	it ('4.10 Visualizar Detalhes do Pedido > Faturas', function() {
		menuPage.acessaSubMenuPedidos();
		pedidosCanceladosPage.selecionaPrimeiroPedidoCancelado();
		pedidosCanceladosPage.acessaMenuFaturasDetalhesPedido();
		helper.waitElementVisibility(pedidosCanceladosPage.tituloFaturas);
		expect (pedidosCanceladosPage.tituloFaturas.getText()).toContain('Pedido');
		expect (pedidosCanceladosPage.btnLimparFiltro.isDisplayed()).toBe(true);
		expect (pedidosCanceladosPage.btnFiltrar.isDisplayed()).toBe(true);
		expect (pedidosCanceladosPage.inputFiltroFatura.isDisplayed()).toBe(true);
		expect (pedidosCanceladosPage.inputFiltroCliente.isDisplayed()).toBe(true);
		expect (pedidosCanceladosPage.inputOptionStatus.isDisplayed()).toBe(true);
	});

	it ('4.15 Visualizar Detalhes do Pedido > Reembolso', function() {
		menuPage.acessaSubMenuPedidos();
		pedidosCanceladosPage.selecionaPrimeiroPedidoCancelado();
		pedidosCanceladosPage.acessaMenuReembolsoDetalhesPedido();
		helper.waitElementVisibility(pedidosCanceladosPage.tituloReembolso);
		expect (pedidosCanceladosPage.tituloReembolso.isPresent()).toBe(true);
		expect (pedidosCanceladosPage.columCodReembolso.isPresent()).toBe(true);
		expect (pedidosCanceladosPage.inputFiltroReembolso.isDisplayed()).toBe(true);
		expect (pedidosCanceladosPage.inputFiltroCliente.isDisplayed()).toBe(true);
		expect (pedidosCanceladosPage.optionFiltroStatus.isDisplayed()).toBe(true);
	});

	it ('4.16 Visualizar Detalhes do Pedido > Entregas', function() {
		menuPage.acessaSubMenuPedidos();
		pedidosCanceladosPage.selecionaPrimeiroPedidoCancelado();
		pedidosCanceladosPage.acessaMenuEntregasDetalhesPedido();
		helper.waitElementVisibility(pedidosCanceladosPage.tituloEntregas);
		expect (pedidosCanceladosPage.tituloEntregas.isPresent()).toBe(true);
		expect (pedidosCanceladosPage.inputFiltroEntrega.isDisplayed()).toBe(true);
		expect (pedidosCanceladosPage.inputFiltroEntregaPara.isDisplayed()).toBe(true);
	});

	it ('4.17 Visualizar Detalhes do Pedido > Comentários Histórico', function() {
		menuPage.acessaSubMenuPedidos();
		pedidosCanceladosPage.selecionaPrimeiroPedidoCancelado();
		pedidosCanceladosPage.acessaMenuComentariosPedido();
		helper.waitElementVisibility(pedidosCanceladosPage.tituloComentariosHistorico);
		expect (pedidosCanceladosPage.tituloComentariosHistorico.isPresent()).toBe(true);
		expect (pedidosCanceladosPage.boxComentariosHististorico.isPresent()).toBe(true);
	});

	it ('4.18 Visualizar Detalhes do Pedido > Transações', function() {
		menuPage.acessaSubMenuPedidos();
		pedidosCanceladosPage.selecionaPrimeiroPedidoCancelado();
		pedidosCanceladosPage.acessaMenuTransacoes();
		helper.waitElementVisibility(pedidosCanceladosPage.tituloTransacoes);
		expect (pedidosCanceladosPage.tituloTransacoes.isPresent()).toBe(true);
		expect (pedidosCanceladosPage.inputFiltroIDPedido.isDisplayed()).toBe(true);
		expect (pedidosCanceladosPage.inputFiltroIDTransacoes.isDisplayed()).toBe(true);
		expect (pedidosCanceladosPage.optionFiltroNomeMetodoPagamento.isDisplayed()).toBe(true);
		expect (pedidosCanceladosPage.optionFiltroTipoTransacao.isDisplayed()).toBe(true);
		expect (pedidosCanceladosPage.optionFiltroEstaFechado.isDisplayed()).toBe(true);
		expect (pedidosCanceladosPage.columnIDTransacao.isPresent()).toBe(true);
	});

	it ('4.19 Visualizar Detalhes do Pedido >  Histórico de Mudanças', function() {
		menuPage.acessaSubMenuPedidos();
		pedidosCanceladosPage.selecionaPrimeiroPedidoCancelado();
		pedidosCanceladosPage.acessaMenuHistoricoMudancas();
		helper.waitElementVisibility(pedidosCanceladosPage.tituloHistoricoMudancas);
		expect (pedidosCanceladosPage.tituloHistoricoMudancas.isPresent()).toBe(true);
		expect (pedidosCanceladosPage.inputFiltroNomeUsuario.isDisplayed()).toBe(true);
		expect (pedidosCanceladosPage.inputFiltroTipoAcao.isDisplayed()).toBe(true);
		expect (pedidosCanceladosPage.columnNomeUsuario.isPresent()).toBe(true);
	});

	it ('4.20 Visualizar Detalhes do Pedido > Split Order Details', function() {
		menuPage.acessaSubMenuPedidos();
		pedidosCanceladosPage.selecionaPrimeiroPedidoCancelado();
		pedidosCanceladosPage.acessaMenuPrecoTotal();
		helper.waitElementVisibility(pedidosCanceladosPage.tituloValorTotal);
		expect (pedidosCanceladosPage.tituloValorTotal.isPresent()).toBe(true);
		expect (pedidosCanceladosPage.boxValorTotal.getText()).not.toContain('');
		expect (pedidosCanceladosPage.btnVoltar.isDisplayed()).toBe(true);
	});
});

describe ('5. Menu Vendas > Faturas', function() {

	it ('5.1 Verifica principais elementos da página do cabeçalho e também da tabela Faturas.', function() {
		menuPage.acessaSubMenuFaturas();
		helper.waitElementVisibility(faturasPage.tituloFaturas);
		expect (faturasPage.tituloFaturas.isPresent()).toBe(true);
		expect (faturasPage.btnFiltrar.isDisplayed()).toBe(true);
		expect (faturasPage.btnLimparFiltros.isDisplayed()).toBe(true);
		expect (faturasPage.btnExportarCSV.isDisplayed()).toBe(true);
		expect (faturasPage.inputBuscaCodFatura.isDisplayed()).toBe(true);
		expect (faturasPage.columnCodFatura.isPresent()).toBe(true);
		expect (faturasPage.inputBuscaDataFaturaInic.isDisplayed()).toBe(true);
		expect (faturasPage.inputBuscaDataFaturaFinal.isDisplayed()).toBe(true);
		expect (faturasPage.columnDataFatura.isPresent()).toBe(true);
		expect (faturasPage.inputCodPedido.isDisplayed()).toBe(true);
		expect (faturasPage.columnCodPedido.isPresent()).toBe(true);
		expect (faturasPage.inputBuscaDataPedidoInic.isDisplayed()).toBe(true);
		expect (faturasPage.inputBuscaDataPedidoFinal.isDisplayed()).toBe(true);
		expect (faturasPage.columnDataPedido.isPresent()).toBe(true);
		expect (faturasPage.inputBuscaNmCliente.isDisplayed()).toBe(true);
		expect (faturasPage.columnNmCliente.isPresent()).toBe(true);
		expect (faturasPage.optionStatus.isDisplayed()).toBe(true);
		expect (faturasPage.columnStatus.isPresent()).toBe(true);
		expect (faturasPage.inputVlrInicial.isDisplayed()).toBe(true);
		expect (faturasPage.inputVlrFinal.isDisplayed()).toBe(true);
		expect (faturasPage.columnVlrPago.isPresent()).toBe(true);
		expect (faturasPage.columnAcao.isPresent()).toBe(true);
	});

	it ('5.2 Detalhes da primeira fatura listada > cabeçalho', function() {
		menuPage.acessaSubMenuFaturas;
		faturasPage.selecionaPrimeiraFaturaListada();
		helper.waitElementVisibility(faturasPage.tituloDetalhesFatura);
		expect (faturasPage.tituloDetalhesFatura.isPresent()).toBe(true);
		expect (faturasPage.btnVoltar.isDisplayed()).toBe(true);
		expect (faturasPage.btnEnviarEmail.isDisplayed()).toBe(true);
		expect (faturasPage.btnImprimir.isDisplayed()).toBe(true);
	});

	it ('5.3 Detalhes da primeira fatura listada > Caixa Email de Confirmação.', function () {
		menuPage.acessaSubMenuFaturas();
		faturasPage.selecionaPrimeiraFaturaListada();
		helper.waitElementVisibility(faturasPage.boxEmailConfirmacaoPedido);
		expect (faturasPage.boxEmailConfirmacaoPedido.getText()).not.toContain('');
	});

	it ('5.4 Detalhes da primeira fatura listada > Dados do Cliente.', function() {
		menuPage.acessaSubMenuFaturas();
		faturasPage.selecionaPrimeiraFaturaListada();
		helper.waitElementVisibility(faturasPage.tituloDadosCliente);
		expect (faturasPage.tituloDadosCliente.isPresent()).toBe(true);
		expect (faturasPage.labelNmCliente.isPresent()).toBe(true);
		expect (faturasPage.labelEmail.isPresent()).toBe(true);
		expect (faturasPage.labelGrupoCliente.isPresent()).toBe(true);
		expect (faturasPage.labelDataAniversario.isPresent()).toBe(true);
		expect (faturasPage.labelCPFouCNPJ.isPresent()).toBe(true);
	});

	it ('5.5 Detalhes da primeira fatura listada > Endereço de Cobrança.', function() {
		menuPage.acessaSubMenuFaturas();
		faturasPage.selecionaPrimeiraFaturaListada();
		helper.waitElementVisibility(faturasPage.tituloEndCobranca);
		expect (faturasPage.tituloEndCobranca.isPresent()).toBe(true);
		expect (faturasPage.boxEndCobranca.getText()).not.toContain('');
	});

	it ('5.6 Detalhes da primeira fatura listada > Endereco de Entrega.', function() {
		menuPage.acessaSubMenuFaturas();
		faturasPage.selecionaPrimeiraFaturaListada();
		helper.waitElementVisibility(faturasPage.tituloEndEntrega);
		expect (faturasPage.tituloEndEntrega.isPresent()).toBe(true);
		expect (faturasPage.boxEndEntrega.getText()).not.toContain('');
	});

	it ('5.7 Detalhes da primeira fatura listada > Informações de Pagamento.', function() {
		menuPage.acessaSubMenuFaturas();
		faturasPage.selecionaPrimeiraFaturaListada();
		helper.waitElementVisibility(faturasPage.tituloInfoPagamento);
		expect (faturasPage.tituloInfoPagamento.isPresent()).toBe(true);
	});

	it ('5.8 Detalhes da primeira fatura listada > Informações da Entrega.', function() {
		menuPage.acessaSubMenuFaturas();
		faturasPage.selecionaPrimeiraFaturaListada();
		helper.waitElementVisibility(faturasPage.tituloInfoEntrega);
		expect (faturasPage.tituloInfoEntrega.isPresent()).toBe();
	});

	it ('5.9 Detalhes da primeira fatura listada > Itens Faturados.', function() {
		menuPage.acessaSubMenuFaturas();
		faturasPage.selecionaPrimeiraFaturaListada();
		helper.waitElementVisibility(faturasPage.tituloItensFaturados);
		expect (faturasPage.tituloItensFaturados.isPresent()).toBe(true);
		expect (faturasPage.boxItensFaturados.isPresent()).toBe(true);
	});

	it ('5.10 Detalhes da primeira fatura listada > Histórico da Fatura.', function() {
		menuPage.acessaSubMenuFaturas();
		faturasPage.selecionaPrimeiraFaturaListada();
		helper.waitElementVisibility(faturasPage.tituloHistoricoFatura);
		expect (faturasPage.tituloHistoricoFatura.isPresent()).toBe(true);
		expect (faturasPage.labelComentario.isPresent()).toBe(true);
		expect (faturasPage.inputComentario.isDisplayed()).toBe(true);
		expect (faturasPage.labelAvisarClientePorEmail.isPresent()).toBe(true);
		expect (faturasPage.checkAvisarClientePorEmail.isDisplayed()).toBe(true);
		expect (faturasPage.labelVisivelFronEnd.isPresent()).toBe(true);
		expect (faturasPage.checkVisivelFrontEnd.isDisplayed()).toBe(true);
		expect (faturasPage.btnSalvarComentario.isDisplayed()).toBe(true);
	});

	it ('5.11 Detalhes da primeira fatura listada > Total da Fatura.', function() {
		menuPage.acessaSubMenuFaturas();
		faturasPage.selecionaPrimeiraFaturaListada();
		helper.waitElementVisibility(faturasPage.tituloTotalFatura);
		expect (faturasPage.tituloTotalFatura.isPresent()).toBe(true);
		expect (faturasPage.labelSubTotal.isPresent()).toBe(true);
		expect (faturasPage.labelFrete.isPresent()).toBe(true);
		expect (faturasPage.labelValorTotal.isPresent()).toBe(true);
		expect (faturasPage.labelTotalPago.isPresent()).toBe(true);
		expect (faturasPage.labelTotalReembolso.isPresent()).toBe(true);
		expect (faturasPage.labelTotalDevido.isPresent()).toBe(true);
	});
});

describe ('6. Menu Vendas > Entegas', function() {
	it ('6.1 Análise dos Elementos página principal > Cabeçalho', function() {
		menuPage.acessaSubMenuEntregas();
		helper.waitElementVisibility(entregasPage.tituloEntregas);
		expect (entregasPage.tituloEntregas.isPresent()).toBe(true);
		expect (entregasPage.btnExportar.isDisplayed()).toBe(true);
		expect (entregasPage.inputExportar.isDisplayed()).toBe(true);
		expect (entregasPage.btnLimparFiltro.isDisplayed()).toBe(true);
		expect (entregasPage.btnFiltrar.isDisplayed()).toBe(true);
		expect (entregasPage.inputAcoes.isDisplayed()).toBe(true);
		expect (entregasPage.btnExecutar.isDisplayed()).toBe(true);
	});

	it ('6.2 Análise dos Elementos página principal > Tabela Pedidos Entregues', function() {
		menuPage.acessaSubMenuEntregas();
		helper.waitElementVisibility(entregasPage.labelCodEntrega);
		expect (entregasPage.labelCodEntrega.isPresent()).toBe(true);
		expect (entregasPage.inputCodEntrega.isDisplayed()).toBe(true);
		expect (entregasPage.labelDataEntrega.isPresent()).toBe(true);
		expect (entregasPage.inputDataEntregaIni.isDisplayed()).toBe(true);
		expect (entregasPage.inputDataEntregaFinal.isDisplayed()).toBe(true);
		expect (entregasPage.labelCodPedido.isPresent()).toBe(true);
		expect (entregasPage.inputCodPedido.isDisplayed()).toBe(true);
		expect (entregasPage.labelDataPedido.isPresent()).toBe(true);
		expect (entregasPage.inputDataPedidoIni.isDisplayed()).toBe(true);
		expect (entregasPage.inputDataPedidoFinal.isDisplayed()).toBe(true);
		expect (entregasPage.labelEntregasPara.isPresent()).toBe(true);
		expect (entregasPage.inputEntregasPara.isDisplayed()).toBe(true);
		expect (entregasPage.labelQuantidade.isPresent()).toBe(true);
		expect (entregasPage.inputQuantidadeIni.isDisplayed()).toBe(true);
		expect (entregasPage.inputQuantidadeFinal.isDisplayed()).toBe(true);
		expect (entregasPage.labelAcoes.isPresent()).toBe(true);
	});

	it ('6.3 Análise dos Elementos do Detalhes da Entrega > Cabeçalho e Caixa E-mail Confirmação', function () {
		menuPage.acessaSubMenuEntregas();
		entregasPage.selecionaPrimeiraEntregaListada();
		helper.waitElementVisibility(entregasPage.tituloDetalheEntrega);
		expect (entregasPage.tituloDetalheEntrega.getText()).toContain('Entrega');
		expect (entregasPage.labelDataPedido.isPresent()).toBe(true);
		expect (entregasPage.labelStatusPedido.isPresent()).toBe(true);
		expect (entregasPage.labelCompradoEm.isPresent()).toBe(true);
		expect (entregasPage.labelIPOrigem.isPresent()).toBe(true);
	});

	it ('6.4 Análise dos Elementos do Detalhes da Entrega > Dados do Cliente.', function() {
		menuPage.acessaSubMenuEntregas();
		entregasPage.selecionaPrimeiraEntregaListada();
		helper.waitElementVisibility(entregasPage.tituloDadosCliente);
		expect (entregasPage.tituloDadosCliente.isPresent()).toBe(true);
		expect (entregasPage.labelNmCliente.isPresent()).toBe(true);
		expect (entregasPage.labelEmailCliente.isPresent()).toBe(true);
		expect (entregasPage.labelGrupoCliente.isPresent()).toBe(true);
		expect (entregasPage.labelDataAniversario.isPresent()).toBe(true);
		expect (entregasPage.labelCNPJouCPF.isPresent()).toBe(true);
	});

	it ('6.5 Análise dos Elementos do Detalhes da Entrega > Endereço de Cobrança.', function() {
		menuPage.acessaSubMenuEntregas();
		entregasPage.selecionaPrimeiraEntregaListada();
		helper.waitElementVisibility(entregasPage.tituloEndCobranca);
		expect (entregasPage.tituloEndCobranca.isPresent()).toBe(true);
		expect (entregasPage.boxEndCobranca.getText()).not.toContain('');
	});

	it ('6.6 Análise dos Elementos do Detalhes da Entrega > Endereço de Entrega.', function() {
		menuPage.acessaSubMenuEntregas();
		entregasPage.selecionaPrimeiraEntregaListada();
		helper.waitElementVisibility(entregasPage.tituloEndEntrega);
		expect (entregasPage.tituloEndEntrega.isPresent()).toBe(true);
		expect (entregasPage.boxEndEntrega.getText()).not.toContain('');
	});

	it ('6.7 Análise dos Elementos do Detalhes da Entrega > Informações de Pagamento', function() {
		menuPage.acessaSubMenuEntregas();
		entregasPage.selecionaPrimeiraEntregaListada();
		helper.waitElementVisibility(entregasPage.tituloInfoPagamento);
		expect (entregasPage.tituloInfoPagamento.isPresent()).toBe(true);
	});

	it ('6.8 Análise dos Elementos do Detalhes da Entrega > Informações de Entrega e Rastreamento', function() {
		menuPage.acessaSubMenuEntregas();
		entregasPage.selecionaPrimeiraEntregaListada();
		helper.waitElementVisibility(entregasPage.tituloInfoEntregaRastreamento);
		expect (entregasPage.tituloInfoEntregaRastreamento.isPresent()).toBe(true);
		expect (entregasPage.columnFormEntrega.isPresent()).toBe(true);
		expect (entregasPage.inputFormEntrega.isDisplayed()).toBe(true);
		expect (entregasPage.columnTitulo.isPresent()).toBe(true);
		expect (entregasPage.inputTitulo.isDisplayed()).toBe(true);
		expect (entregasPage.columnNumero.isPresent()).toBe(true);
		expect (entregasPage.inputNumero.isDisplayed()).toBe(true);
		expect (entregasPage.columnAcao.isPresent()).toBe(true);
		expect (entregasPage.btnAddAcao.isDisplayed()).toBe();
	});

	it ('6.9 Análise dos Elementos do Detalhes da Entrega > Itens Entregues', function() {
		menuPage.acessaSubMenuEntregas();
		entregasPage.selecionaPrimeiraEntregaListada();
		helper.waitElementVisibility(entregasPage.tituloItensEntregues);	
		expect (entregasPage.tituloItensEntregues.isPresent()).toBe(true);
		expect (entregasPage.boxItensEntregues.isDisplayed()).toBe(true);
	});

	it ('6.10 Análise dos Elementos do Detalhes da Entrega > Histórico da Entrega', function() {
		menuPage.acessaSubMenuEntregas();
		entregasPage.selecionaPrimeiraEntregaListada();
		helper.waitElementVisibility(entregasPage.tituloHistoricoEntrega);	
		expect (entregasPage.tituloHistoricoEntrega.isPresent()).toBe(true);
		expect (entregasPage.labelComentario.getText()).toEqual('Comentário');
		expect (entregasPage.txtareaComentario.isDisplayed()).toBe(true);
		expect (entregasPage.checkAvisarEmailCliente.isDisplayed()).toBe(true);
		expect (entregasPage.labelAvisarEmailCliente.isPresent()).toBe(true);
		expect (entregasPage.checkVisivelFrontEnd.isDisplayed()).toBe(true);
		expect (entregasPage.labelVisivelFrontEnd.isPresent()).toBe(true);
		expect (entregasPage.btnSalvarComentario.isDisplayed()).toBe(true);
	});
});

describe ('7. Menu Vendas > Reembolsos', function () {
	it ('7.1 Análise dos Elementos página principal > Cabeçalho', function() {
		menuPage.acessaSubMenuReembolsos();
		helper.waitElementVisibility(reembolsosPage.tituloReembolsos);
		expect (reembolsosPage.tituloReembolsos.isPresent()).toBe(true);
		expect (reembolsosPage.inputExportaCSV.isDisplayed()).toBe(true);
		expect (reembolsosPage.btnExportarCSV.isDisplayed()).toBe(true);
		expect (reembolsosPage.btnLimparFiltros.isDisplayed()).toBe(true);
		expect (reembolsosPage.btnFiltrar.isDisplayed()).toBe(true);
		expect (reembolsosPage.inputAcoes.isDisplayed()).toBe(true);
		expect (reembolsosPage.btnExecutar.isDisplayed()).toBe(true);
	});

	it ('7.2 Análise dos Elementos página principal > Tabela Reembolsos', function() {
		menuPage.acessaSubMenuReembolsos();
		helper.waitElementVisibility(reembolsosPage.columnCodReembolsos);
		expect (reembolsosPage.columnCodReembolsos.isPresent()).toBe(true);
		expect (reembolsosPage.inputCodReembolsos.isDisplayed()).toBe(true);
		expect (reembolsosPage.columnCriadoEm.isPresent()).toBe(true);
		expect (reembolsosPage.inputDataCriadoEmIni.isDisplayed()).toBe(true);
		expect (reembolsosPage.inputDataCriadoEmFinal.isDisplayed()).toBe(true);
		expect (reembolsosPage.columnCodPedido.isPresent()).toBe(true);
		expect (reembolsosPage.inputCodPedido.isDisplayed()).toBe(true);
		expect (reembolsosPage.columnDataPedido.isPresent()).toBe(true);
		expect (reembolsosPage.inputDataPedidoIni.isDisplayed()).toBe(true);
		expect (reembolsosPage.inputDataPedidoFinal.isDisplayed()).toBe(true);
		expect (reembolsosPage.columnCliente.isPresent()).toBe(true);
		expect (reembolsosPage.inputCliente.isDisplayed()).toBe(true);
		expect (reembolsosPage.columnStatus.isPresent()).toBe(true);
		expect (reembolsosPage.inputStatus.isDisplayed()).toBe(true);
		expect (reembolsosPage.columnVlrReembolsado.isPresent()).toBe(true);
		expect (reembolsosPage.inputVlrReembolsoIni.isDisplayed()).toBe(true);
		expect (reembolsosPage.inputVlrReembolsoFinal.isDisplayed()).toBe(true);
		expect (reembolsosPage.columnAcao.isPresent()).toBe(true);
	});

	it ('7.3 Elementos listados ao  verificar detalhes do reembolso > cabeçalho', function() {
		menuPage.acessaSubMenuReembolsos();
		reembolsosPage.selecionaPrimeiroReembolsoListado();
		helper.waitElementVisibility(reembolsosPage.tituloDetalhesReembolso);
		expect (reembolsosPage.tituloDetalhesReembolso.getText()).toContain('Reembolso');
		expect (reembolsosPage.btnVoltar.isDisplayed()).toBe(true);
		expect (reembolsosPage.btnEnviarEmail.isDisplayed()).toBe(true);
		expect (reembolsosPage.btnImprimir.isDisplayed()).toBe(true);
	});

	it ('7.3 Elementos listados ao  verificar detalhes do reembolso > Caixa: O e-mail de confirmação do pedido foi enviado', function() {
		menuPage.acessaSubMenuReembolsos();
		reembolsosPage.selecionaPrimeiroReembolsoListado();
		helper.waitElementVisibility(reembolsosPage.tituloEmailConfirmado);
		expect (reembolsosPage.tituloEmailConfirmado.getText()).toContain('(O e-mail de confirmação do pedido foi enviado)');
		expect (reembolsosPage.labelDtPedido.isPresent()).toBe(true);
		expect (reembolsosPage.labelStatusPedido.isPresent()).toBe(true);
		expect (reembolsosPage.labelCompraEm.isPresent()).toBe(true);
	});

	it ('7.4 Elementos listados ao  verificar detalhes do reembolso > Dados do Cliente', function() {
		menuPage.acessaSubMenuReembolsos();
		reembolsosPage.selecionaPrimeiroReembolsoListado();
		helper.waitElementVisibility(reembolsosPage.tituloDadosCliente);
		expect (reembolsosPage.tituloDadosCliente.isPresent()).toBe(true);
		expect (reembolsosPage.labelNmCliente.isPresent()).toBe(true);
		expect (reembolsosPage.labelEmailCliente.isPresent()).toBe(true);
		expect (reembolsosPage.labelGrupoCliente.isPresent()).toBe(true);
		expect (reembolsosPage.labelDataAniversario.isPresent()).toBe(true);
		expect (reembolsosPage.labelCPFouCNPJ.isPresent()).toBe(true);
	});

	it ('7.8 Elementos listados ao  verificar detalhes do reembolso > Endereço de Cobrança', function() {
		menuPage.acessaSubMenuReembolsos();
		reembolsosPage.selecionaPrimeiroReembolsoListado();
		helper.waitElementVisibility(reembolsosPage.tituloEndCobranca);
		expect (reembolsosPage.tituloEndCobranca.isPresent()).toBe(true);
		expect (reembolsosPage.boxEndCobranca.getText()).not.toEqual('');
	});

	it ('7.9 Elementos listados ao  verificar detalhes do reembolso > Endereço de Entrega', function() {
		menuPage.acessaSubMenuReembolsos();
		reembolsosPage.selecionaPrimeiroReembolsoListado();
		helper.waitElementVisibility(reembolsosPage.tituloEndEntrega);
		expect (reembolsosPage.tituloEndEntrega.isPresent()).toBe(true);
		expect (reembolsosPage.boxEndEntrega.getText()).not.toContain('');
	});

	it ('7.10 Elementos listados ao  verificar detalhes do reembolso > Informações de Pagamento', function() {
		menuPage.acessaSubMenuReembolsos();
		reembolsosPage.selecionaPrimeiroReembolsoListado();
		helper.waitElementVisibility(reembolsosPage.tituloInfoPagamento);
		expect (reembolsosPage.tituloInfoPagamento.isPresent()).toBe(true);	
		expect (reembolsosPage.boxInfoPagamento.isDisplayed()).toBe(true);
	});

	it ('7.11 Elementos listados ao  verificar detalhes do reembolso > Informações da Entrega', function() {
		menuPage.acessaSubMenuReembolsos();
		reembolsosPage.selecionaPrimeiroReembolsoListado();
		helper.waitElementVisibility(reembolsosPage.tituloInfoEntrega);
		expect (reembolsosPage.tituloInfoEntrega.isPresent()).toBe(true);
		expect (reembolsosPage.boxInfoEntrega.getText()).not.toContain('');
	});

	it ('7.12 Elementos listados ao  verificar detalhes do reembolso >  Itens Reembolsados', function() {
		menuPage.acessaSubMenuReembolsos();
		reembolsosPage.selecionaPrimeiroReembolsoListado();
		helper.waitElementVisibility(reembolsosPage.tituloItensReembolso);
		expect (reembolsosPage.tituloItensReembolso.isPresent()).toBe(true);
		expect (reembolsosPage.columnTabelaReembolso.isPresent()).toBe(true);
		expect (reembolsosPage.linhasTabelaReembolso.isPresent()).toBe(true);
	});

	it ('7.13 Elementos listados ao  verificar detalhes do reembolso >  Histórico de Reembolso', function() {
		menuPage.acessaSubMenuReembolsos();
		reembolsosPage.selecionaPrimeiroReembolsoListado();
		helper.waitElementVisibility(reembolsosPage.tituloHistReembolso);
		expect (reembolsosPage.tituloHistReembolso.isPresent()).toBe(true);
		expect (reembolsosPage.labelComentario.isPresent()).toBe(true);
		expect (reembolsosPage.txtareaComentario.isDisplayed()).toBe(true);
		expect (reembolsosPage.checkAvisarEmailCliente.isDisplayed()).toBe(true);
		expect (reembolsosPage.labelAvisarEmailCliente.getAttribute('for')).toEqual('history_notify');
		expect (reembolsosPage.labelAvisarEmailCliente.isPresent()).toBe(true);
		expect (reembolsosPage.checkVisivelFrontEnd.isDisplayed()).toBe(true);
		expect (reembolsosPage.labelVisivelFrontEnd.getAttribute('for')).toEqual('history_visible');
		expect (reembolsosPage.labelVisivelFrontEnd.isPresent()).toBe(true);
		expect (reembolsosPage.btnSalvarComentario.isDisplayed()).toBe(true);
	});

	it ('7.14 Elementos listados ao  verificar detalhes do reembolso >  Total de Reembolso', function() {
		menuPage.acessaSubMenuReembolsos();
		reembolsosPage.selecionaPrimeiroReembolsoListado();
		helper.waitElementVisibility(reembolsosPage.tituloTotalReembolso);
		expect (reembolsosPage.tituloTotalReembolso.isPresent()).toBe(true);
		expect (reembolsosPage.labelSubTotal.isPresent()).toBe(true);
		expect (reembolsosPage.labelAjustarReembolso.isPresent()).toBe(true);
		expect (reembolsosPage.labelTxManutencao.isPresent()).toBe(true);
		expect (reembolsosPage.VlrTotal.isPresent()).toBe(true);
	});
});

