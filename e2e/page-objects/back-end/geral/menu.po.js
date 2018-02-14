//menu.po.js

'use strict';  
var helper = require('../../../helper/helper.js');

var menuPage = function() {

	//Elementos
	this.btnLogout = element(by.linkText('Sair'));

	//Menu Painel
	this.menuPainel = element(by.linkText('Painel'));
	this.subMenuPainelCarrinhoAbandonado = element(by.cssContainingText('span', 'Painel de Carrinho Abandonado'));	

	//Menu Vendas
	this.menuVendas = element(by.linkText('Vendas'));
	this.subMenuPedidos = element(by.linkText('Pedidos'));
	this.subMenuPedidosCancelados = element(by.linkText('Pedidos Cancelados Automaticamente'));
	this.subMenuFaturas = element(by.linkText('Faturas'));
	this.subMenuEntregas = element(by.linkText('Entregas'));
	this.subMenuReembolsos = element(by.linkText('Reembolsos'));
	this.subMenuEtiquetasCorreios = element(by.linkText('Etiquetas Correios'));
	this.subMenuTransacoes = element(by.linkText('Transações'));

	//Menu Clientes
	this.menuClientes = element(by.linkText('Clientes'));
	this.subMenuGerenciarClientes = element(by.linkText('Gerenciar Clientes'));

	//Menu Catálogo
	this.menuCatalogo = element(by.linkText('Catálogo'));
	this.subMenuGerenciarProdutos = element(by.linkText('Gerenciar Produtos'));
	this.subMenuGerenciarCategorias = element(by.linkText('Gerenciar Categorias'));

	//Menu Painel
	this.clickMenuPainel = function() {
		helper.waitElementVisibility(this.menuPainel);
		this.menuPainel.click();
	};

	this.acessaSubMenuPainelCarrinhoAbandonado = function() {
		this.clickMenuPainel();
		browser.driver.sleep(500);
		helper.waitElementVisibility(this.subMenuPainelCarrinhoAbandonado);
		this.subMenuPainelCarrinhoAbandonado.click();
	};

	//Menu Vendas
	this.clickMenuVendas = function() {
		helper.waitElementVisibility(this.menuVendas);
		this.menuVendas.click();
	};

	this.acessaSubMenuPedidos = function() {
		this.clickMenuVendas();
		browser.driver.sleep(500);
		helper.waitElementVisibility(this.subMenuPedidos);
		this.subMenuPedidos.click();
	};

	this.acessaSubMenuPedidosCancelados = function() {
		this.clickMenuVendas();
		browser.driver.sleep(500);
		helper.waitElementVisibility(this.subMenuPedidosCancelados);
		this.subMenuPedidosCancelados.click();
	};

	this.acessaSubMenuFaturas = function() {
		this.clickMenuVendas;
		browser.driver.sleep(500);
		helper.waitElementVisibility(this.subMenuFaturas);
		this.subMenuFaturas.click();
	};

	this.acessaSubMenuEntregas = function() {
		this.clickMenuVendas();
		browser.driver.sleep(500);
		helper.waitElementVisibility(this.subMenuEntregas);
		this.subMenuEntregas.click();
	};

	this.acessaSubMenuReembolsos = function() {
		this.clickMenuVendas();
		browser.driver.sleep(500);
		helper.waitElementVisibility(this.subMenuReembolsos);
		this.subMenuReembolsos.click();
	};

	this.acessaSubMenuEtiquetasCorreios = function() {
		this.clickMenuVendas();
		browser.driver.sleep(500);
		helper.waitElementVisibility(this.subMenuEtiquetasCorreios);
		this.subMenuEtiquetasCorreios.click();
	};

	this.acessaSubMenuTransacoes = function() {
		this.clickMenuVendas();
		browser.driver.sleep(500);
		helper.waitElementVisibility(this.subMenuTransacoes);
		this.subMenuTransacoes.click();
	};

	//Menu Clientes
	this.acessaMenuClientes = function() {
		helper.waitElementVisibility(this.menuClientes);
		this.menuClientes.click();
	};

	this.acessaSubMenuGerenciarClientes = function() {
		this.acessaMenuClientes();
		browser.driver.sleep(500);
		helper.waitElementVisibility(this.subMenuGerenciarClientes);
		this.subMenuGerenciarClientes.click();
	};

	//Seleção de Menu e Submenu
	this.selecionarMenu = function(menu) {
		var nmMenu = menu;
		helper.waitElementVisibility(nmMenu);
		nmMenu.click();
	};

	this.acessarSubMenu = function(menu, subMenu) {
		var nmSubmenu = subMenu;
		this.selecionarMenu(menu);
		helper.waitElementVisibility(nmSubmenu);
		nmSubmenu.click();
	};
};

module.exports = new menuPage();