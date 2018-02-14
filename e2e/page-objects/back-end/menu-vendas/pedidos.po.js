//pedidos.po.js

'use strict';  
var helper = require('../../../helper/helper.js');

var pedidosPage = function() {
	//Elementos - Lançamento de Pedido Manual
	this.btnCriarPedido = element(by.buttonText('Criar Pedido'));
	this.filtroEmailSelecionaCliente = element(by.id('sales_order_create_customer_grid_filter_email'));
	this.filtroNmSelecionaCliente = element(by.id('sales_order_create_customer_grid_filter_name'));
	this.clientePedManual = element(by.buttonText('Criar Cliente'));
	this.btnConfirmaFiltroSelecaoClientes = element(by.buttonText('Filtrar'));
	this.selecionaClienteListado = element(by.css('#sales_order_create_customer_grid_table > tbody > tr'));
	this.emailclientePedManual = element(by.cssContainingText('td', 'tests@teste.com.br'));
	this.optIdioma = element(by.id('store_1'));
	this.inputCPF = element(by.id('taxvat'));
	this.inputNome = element(by.id('order-billing_address_firstname'));
	this.inputLogradouro = element(by.id('order-billing_address_street0'));
	this.inputCidade = element(by.id('order-billing_address_city'));
	this.inputPais = element(by.id('order-billing_address_country_id'));
	this.inputEstado = element.all(by.css('.value option'));
	this.inputCEP = element(by.id('order-billing_address_postcode'));
	this.inputTelefone = element(by.id('order-billing_address_telephone'));
	this.btnCriarProduto = element(by.buttonText('Criar Produtos'));
	this.selecionaPrimeiroProduto = element.all(by.css('#sales_order_create_search_grid_table > tbody > tr')).get(0);
	this.btnAdicionarProdutoSelecionado = element(by.buttonText('Adicionar Produtos Selecionados ao Pedido'));
	this.btnSalvarPedido = element(by.buttonText('Salvar Pedido'));
	this.listaProduto = element.all(by.css('#sales_order_create_search_grid_table > tbody > tr'));
	this.optionBoletoBancario = element(by.id('p_method_boleto_bancario'));
	this.linkObterMetodoEntrega = element(by.linkText('Obter métodos e taxas'));
	this.listaMetodosEntregaDisponivel = element.all(by.css('#order-shipping-method-choose > dl > dd > ul'));

	
	//Métodos - Lançamento de Pedido Manual
	this.clickCriarPedido = function() {
		helper.waitElementVisibility(this.btnCriarPedido);
		this.btnCriarPedido.sendKeys(protractor.Key.ENTER);
	};

	this.informaEmailParaBuscaClienteSelecao = function(nmSelecaoCliente, emailSelecaoCliente) {
		helper.waitElementVisibility(this.filtroNmSelecionaCliente);
		helper.waitElementVisibility(this.filtroEmailSelecionaCliente)
		this.filtroNmSelecionaCliente.sendKeys(nmSelecaoCliente);
		this.filtroEmailSelecionaCliente.sendKeys(emailSelecaoCliente);
	};

	this.selecionaClienteAutomacaoParaCriacaoPedidos = function (emailUsuarioAutomacao) { 
		helper.waitElementVisibility(this.selecionaClienteListado);
		this.selecionaClienteListado.filter (function (element, inddex) {
			return element.getText().then (function (txt) {
				return txt === emailUsuarioAutomacao;
			});
		}).first().click();
	};

	this.clickConfirmaFiltroSelecaoClientes = function() {
		browser.driver.sleep(800);
		helper.waitElementVisibility(this.btnConfirmaFiltroSelecaoClientes);
		this.btnConfirmaFiltroSelecaoClientes.sendKeys(protractor.Key.ENTER);
	};

	
	this.selecionaClientePedidoManual = function() {
		helper.waitElementVisibility(this.clientePedManual);
		this.clientePedManual.sendKeys(protractor.Key.ENTER);
	};

	this.selecionaIdioma = function() {
		helper.waitElementVisibility(this.optIdioma);
		this.optIdioma.click();
	};

	this.informaCPF = function(cpf) {
		helper.waitElementVisibility(this.inputCPF);
		this.inputCPF.sendKeys(cpf);
	};

	this.informaEnderecoCobranca = function(nome, logradouro, cidade, cep, telefone) {
		helper.waitElementVisibility(this.inputNome);
		this.inputNome.sendKeys(nome);
		helper.waitElementVisibility(this.inputLogradouro);
		this.inputLogradouro.sendKeys(logradouro);
		helper.waitElementVisibility(this.inputCidade);
		this.inputCidade.sendKeys(cidade);
		helper.waitElementVisibility(this.inputCEP);
		this.inputCEP.sendKeys(cep);
		helper.waitElementVisibility(this.inputTelefone);
		this.inputTelefone.sendKeys(telefone);
		helper.waitElementVisibility(this.inputEstado);
		this.inputEstado.filter( function(elemento, value) {
			return elemento.getText().then (function(estado) {
				return estado === 'Minas Gerais';
			});
		}).first().click();
	};

	this.clickCriarProduto = function() {
		helper.waitElementVisibility(this.btnCriarProduto);
		this.btnCriarProduto.sendKeys(protractor.Key.ENTER);
	};

	this.selecionaPrimeiroProdutoListado = function() {
		helper.waitElementVisibility(this.listaProduto);
		this.listaProduto.filter (function (element, index) {
			return element.getText().then (function (txt) {
				return txt = element(by.css('#sales_order_create_search_grid_table tbody tr td'));
			});
		}).first().click();
	};

	this.clickBtnAdicionarProdutoSelecionado = function() {
		helper.waitElementVisibility(this.btnAdicionarProdutoSelecionado);
		this.btnAdicionarProdutoSelecionado.sendKeys(protractor.Key.ENTER);
	};

	this.clickUtilizaBoletoBancario = function() {
		helper.waitElementVisibility(this.optionBoletoBancario);
		this.optionBoletoBancario.click();
	};

	this.clickObterMetodosEntrega = function() {
		helper.waitElementVisibility(this.linkObterMetodoEntrega);
		this.linkObterMetodoEntrega.click();
	};

	this.selecionaPrimeiroMetodoPagamentoDisponivel = function() {
		helper.waitElementVisibility(this.listaMetodosEntregaDisponivel);
		this.listaMetodosEntregaDisponivel.filter(function(element, index) {
			return element.getText().then (function (txt) {
				return txt ==== element(by.css('#order-shipping-method-choose > dl > dd > ul > li > input'));
			});
		});
	};

	this.clickBtnSalvarPedidos = function() {
		helper.waitElementVisibility(this.btnSalvarPedido);
		this.btnSalvarPedido.sendKeys(protractor.Key.ENTER);
	};
};

module.exports = new pedidosPage();