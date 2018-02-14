//transacoes.spec.js
//Back-End

browser.ignoreSynchronization = true;

'use strict';

//Gerais
var autenticacaoPage = require ('../../../page-objects/back-end-menu/geral/autenticacao.po');
var dashboardPage = require ('../../../page-objects/back-end-menu/geral/dashboard.po');
var menuPage = require ('../../../page-objects/back-end-menu/geral/menu.po');
//Menu Vendas
var transacoesPage = ('../../../page-objects/back-end-menu/vendas/transacoes.po');

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

describe ('Menu Vendas > Transações', function() {
	
	it ('Validar Elementos presença dos elementos principais', function() {
		menuPage.acessaSubMenuTransacoes();
		helper.waitElementVisibility(transacoesPage.tituloTransacoes);
		expec (transacoesPage.tituloTransacoes.isPresent()).toBe(true);
		expec (transacoesPage.btnLimparFiltros.isDisplayed()).toBe(true);
		expec (transacoesPage.btnFiltrar.isDisplayed()).toBe(true);
		expec (transacoesPage.columnId.isPresent()).toBe(true);
		expec (transacoesPage.inputIdIni.isDisplayed()).toBe(true);
		expec (transacoesPage.inputIdFinal.isDisplayed()).toBe(true);
		expec (transacoesPage.columnIdPedido.isPresent()).toBe(true);
		expec (transacoesPage.inputIdPedido.isDisplayed()).toBe(true);
		expec (transacoesPage.columnIdTransacao.isPresent()).toBe(true);
		expec (transacoesPage.inputIdTransacao.isDisplayed()).toBe(true);
		expec (transacoesPage.columnIdTransacaoParente.isPresent()).toBe(true);
		expec (transacoesPage.inputIdTransacaoParente.isDisplayed()).toBe(true);
		expec (transacoesPage.columnNmMetodoPagamento.isPresent()).toBe(true);
		expec (transacoesPage.inputNmMetodoPagamento.isDisplayed()).toBe(true);
		expec (transacoesPage.columnTipoTransacao.isPresent()).toBe(true);
		expec (transacoesPage.inputTipoTransacao.isDisplayed()).toBe(true);
		expec (transacoesPage.columnEstaFechado.isPresent()).toBe(true);
		expec (transacoesPage.inputEstaFechado.isDisplayed()).toBe(true);
		expec (transacoesPage.columnCriadoEm.isPresent()).toBe(true);
		expec (transacoesPage.inputCriadoEmIni.isDisplayed()).toBe(true);
		expec (transacoesPage.inputCriadoEmFinal.isDisplayed()).toBe(true);
	});
});	