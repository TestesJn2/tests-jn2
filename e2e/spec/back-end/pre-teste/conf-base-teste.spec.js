//conf-base-teste.spec.js

browser.ignoreSynchronization = true;

'use strict';

//Helper
var helper = require ('../../../helper/helper'),
	//Page Objects Back-end
	autenticacaoPage = require ('../../../page-objects/back-end/geral/autenticacao.po');
	menuPage = require ('../../../page-objects/back-end/geral/menu.po');
	gerenciarClientesPage = require ('../../../page-objects/back-end/menu-clientes/gerenciar-clientes.po');
	gerenciarCategoriasPage = require ('../../../page-objects/back-end/menu-catalogo/gerenciar-categorias.po');
	funcoesGeralPage = require ('../../../page-objects/back-end/geral/funcoes-geral.po'); 


//Antes de Cada Teste
beforeEach(function() {
	browser.get('http://homol:5945d16a075541a5@homologacao.jn2.xyz/index.php/controle');
});

describe ('Como o ambiente de homologação é compartilhado, esses testes visam garantir integridade de dados antes de iniciar os testes da loja', function() {

	fit ('Efetua login no back-end', function() {
		var user = 'jn2',
			password = 'P4ssw0rd';
		autenticacaoPage.login(user, password);
		browser.driver.sleep(1000);
		menuPage.btnLogout.isPresent().then(function(statusTelaInicial) {
			if (statusTelaInicial === true) {
				browser.refresh();
				expect (menuPage.btnLogout.isDisplayed()).toBe(true);
				console.log('Login foi realizado com sucesso');
				
			} else {
				console.log('Verificar se houve alteração nos dados de login, o usuário atual: ' + user + ' e a senha: ' + password);
				expect (menuPage.btnLogout.isDisplayed()).toBe(true);
			};
		});
	});

	it ('Impacta no teste 3.1, deve excluir o usuário tests@teste.com.br', function() {
		var emailCliente = 'tests@teste.com.br';
		menuPage.acessaSubMenuGerenciarClientes();
		helper.waitElementVisibility(gerenciarClientesPage.tituloGerenciarClientes);
		gerenciarClientesPage.InformarEmailParaBusca(emailCliente);
		funcoesGeralPage.confirmarBusca();
		browser.driver.sleep(1000);
		gerenciarClientesPage.valueTesteAutomatizado.isPresent().then(function (emailCadastrado) {
			if (emailCadastrado === true) {
				funcoesGeralPage.selecionarTodosResultados();
				browser.driver.sleep(800);
				gerenciarClientesPage.selecionarAcaoExcluir();
				funcoesGeralPage.confirmarExecucao();
				funcoesGeralPage.btnExecutar.sendKeys(protractor.KeY.ENTER);
				console.log ('cliente ' + emailCliente + ' foi excluído');
				//verificar se um expect para esse cenário vai mellhorar a análise
			} else {
				console.log('Na base não tem o cliente ' + emailCliente + '. Teste pode ser iniciado.');
			};
		});
	});

	fit ('Impacta no teste 4.1, visa garantir que o primeiro produto da home contém quantidade em estoque', function() {
		menuPage.acessarSubMenu(menuPage.menuCatalogo, menuPage.subMenuGerenciarCategorias);
		helper.waitElementVisibility(gerenciarCategoriasPage.categoriaHome);
		gerenciarCategoriasPage.selecionarElemento(gerenciarCategoriasPage.linkExpandirCategoria);
		helper.waitElementVisibility(gerenciarCategoriasPage.subCategoriaCriadosMudos); //última subcategoria a ser exibida
		browser.driver.sleep(2000);
		gerenciarCategoriasPage.selecionarElemento(gerenciarCategoriasPage.subCategoriaLancamentos);
		browser.driver.sleep(5000);
		gerenciarCategoriasPage.inputNmCategoria.getAttribute('value').then (function (value) {
			console.log('valor inputNmCategoria: ' + value);
			if (value === 'Lançamentos |O que tem de mais novo para você;)') {
				gerenciarCategoriasPage.selecionarElemento(gerenciarCategoriasPage.optionProdutos);
				gerenciarCategoriasPage.editarElemento(gerenciarCategoriasPage.inputPosicaoDe, -15); // Menor posição de teste
				gerenciarCategoriasPage.editarElemento(gerenciarCategoriasPage.inputPosicaoPara, -15);
				gerenciarCategoriasPage.selecionarElemento(funcoesGeralPage.btnFiltrar);
				browser.driver.sleep(8000); // Tempo para carregar o filtro
				gerenciarCategoriasPage.tabelaProdutos.count().then (function (qtdeProduto) {
					console.log('A qtde. de produtos com posição igual a -15 é: ' + qtdeProduto);
					if (qtdeProduto === 1) {
						gerenciarCategoriasPage.linhaTabelaIndSemRegistro.isPresent().then (function (statusSemRegistro) {
							console.log('Linha da tabela \"Sem Registro\": ' + statusSemRegistro);
							if (statusSemRegistro === true) {
								browser.driver.sleep(4000);
								gerenciarCategoriasPage.selecionarElemento(funcoesGeralPage.btnLimparFiltro);
								gerenciarCategoriasPage.editarElemento(gerenciarCategoriasPage.inputEditOrdemProdutoCategoria, -15);
								gerenciarCategoriasPage.selecionarElemento(gerenciarCategoriasPage.btnSalvarCategoria);
								helper.waitElementVisibility(gerenciarCategoriasPage.msgAltCategoriaSalva);
								gerenciarCategoriasPage.selecionarElemento(funcoesGeralPage.btnLimparFiltro);
								gerenciarCategoriasPage.nmPrimeiroProdListaCategoria.getText().then (function (texto) {
									var nomePrimeiroProdHome = texto;
									console.log('nome do produto: ' + texto);
									//reindexar ao final
								});
							} else {
								console.log ('Já existe posição de teste definida');
							};
						});
					} else {
						console.log ('deve ser criado um método que dentro de while, pecorra as linhas da tabela e altere o valor do input que fica dentro da tr');
					};
				});
			} else {
				console.log ('A subcategoria Lançamentos não foi selecionada.');
				console.log('Estava sendo esperado a categoria de nome: Lançamentos |O que tem de mais novo para você;) e não '+ value);
			};
		});		
		//menuPage.acessarSubMenu(menuPage.menuCatalogo, menuPage.subMenuGerenciarProdutos);
		//Reindexar
	});

	it ('Impacta no teste 7.1 e 7.2, visa garantir a parametrização da Pagar.Me - Configuração', function() {

	});

	it ('Impacta no teste 7.1, visa garantir a parametrização da Pagar.Me - Cartão de Crédito', function() {

	});

	it ('Impacta no teste 7.2, visa garantir a parametrização da Pagar.Me - Boleto', function() {

	});

	it ('Impacta no teste 7.3, visa garantir a parametrização da Cielo 3.0', function() {

	});

	it ('Impacta no teste 7.4, visa garantir a parametrização da PagSeguro - Cartão de Crédito', function() {

	});

	it ('Efetua Logout no back-end', function() {

	});

});