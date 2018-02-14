//transacoes.spec.js
//Back-End

browser.ignoreSynchronization = true;

'use strict';

//Gerais
var autenticacaoPage = require ('../../../page-objects/back-end-menu/geral/autenticacao.po');
var dashboardPage = require ('../../../page-objects/back-end-menu/geral/dashboard.po');
var menuPage = require ('../../../page-objects/back-end-menu/geral/menu.po');
var botoesGeraisPage = require ('../../../page-objects/back-end-menu/geral/botoes-gerais.po');
var termosCobrancaPage = require ('../../../page-objects/back-end-menu/vendas/termos-de-cobranca.po');

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

describe ('Menu Vendas > Termos de Cobrança', function() {

	it ('Valida principais elementos da tela', function() {

	});
});