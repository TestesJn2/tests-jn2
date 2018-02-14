//finalizar-compra.po.js

'use strict';  
var helper = require('../../helper/helper.js');

var finalizarCompraPage = function() {
	//Título
	this.titleFinalizSuaCompra = element(by.cssContainingText('h1', 'Finalize sua compra'));
	this.labelCabecalho = element(by.id('onestepcheckout-title-description'));

	//Cabeçalho
	this.linhaProgresso = element(by.css('body > div.wrapper.pt-lang-class > div.col-xs-12.visible-xs.visible-sm > div > div.col-xs-3.bs-wizard-step.active'));
	this.linkNmUsuario = element(by.linkText('Olá, USUARIO TESTE AUTOMATIZADO LOGIN!'));
	this.linkLogout = element(by.css('.link-ico-logout'));

	//Seção Endereço de Cobrança
	this.tituloEnderecoCobranca = element(by.cssContainingText('h2', 'ENDEREÇO DE COBRANÇA'));
	this.selectEnderecoCadastrado = element(by.id('billing-address-select'));
	this.checkEnderecoEntrega = element(by.id('billing:use_for_shipping'));
	this.tituloEnderecoEntrega = element(by.cssContainingText('h2', 'Endereço de Entrega'));
	this.tituloFormaEntrega = element(by.cssContainingText('h3','FORMA DE ENTREGA'));
	this.divEntregaGratis = element(by.id('onestepcheckout-shipping-method'));
	this.btnSeguirEntrega = element(by.css('#step1 > div.tab-pane-button > button')); //Não foi possível utilizar buttonText, pois, têm dois botões com o mesmo nome

	//Seção Forma de Pagamento
	this.tituloCupomDesconto = element(by.cssContainingText('h2', 'Cupom de Desconto'));
	this.inputCupomDesconto = element(by.id('coupon_code'));
	this.btnCupomDesconto = element(by.id('onestepcheckout-coupon-code-apply-btn'));
	this.tituloFormaPagamento = element(by.cssContainingText('h2', 'FORMA PAGAMENTO'));
	this.btnVoltar = element(by.id('arrow-right'));
	this.btnSeguirFinalizarCompra = element(by.css('#step2 > div.tab-pane-button > div:nth-child(2) > button')); //Não foi possível utilizar buttonText, pois, têm dois botões com o mesmo nome

	//Seção Revisão do Pedido
	this.tituloRevisaoPedido = element(by.cssContainingText('h2', 'REVISÃO DO PEDIDO'));
	this.columnNmProduto = element(by.cssContainingText('.name', 'Nome do Produto'));
	this.columnQtde = element(by.cssContainingText('.qty', 'Qtde'));
	this.columnSubTotal = element(by.cssContainingText('.total', 'Subtotal'));
	this.labelComentarios = element(by.cssContainingText('label', 'Comentários'));
	this.inputComentarios = element(by.id('comments'));
	this.checkReceberNovidades = element(by.id('newsletter_simple'));
	this.labelReceberNovidades = element(by.cssContainingText('label', 'Receber novidades'));
	this.btnFinalizarPedido = element(by.id('onestepcheckout-place-order-button'));
	this.blocoAmbienteSeguro = element(by.css('.secure-block'));
	this.btnVoltarFormaPagamento = element(by.css('#step3 > button'));

	//Formas de Entrega
	this.radioEntregaGratis = element(by.id('s_method_freeshipping_freeshipping'));
	this.radioPACCorreios = element(by.id('s_method_pedroteixeira_correios_41106'));

	this.selecionaOptionFreteGratis = function() {
		browser.driver.sleep(1000);
		var opcaofreteGratis = this.radioEntregaGratis;
		helper.waitElementVisibility(opcaofreteGratis);
		opcaofreteGratis.isSelected().then (function (freteGratisStatus) {
			console.log('informações do frete grátis: '+ freteGratisStatus);
			if (freteGratisStatus === true) {
				console.log('nenhuma ação precisa ser realizada, opção já está selecionada.');
			} else {
				console.log('Será acionado o evento protractor.Key.ENTER para selecionar Frete Grátis.');
				opcaofreteGratis.sendKeys(protractor.Key.ENTER);
			
				if (freteGratisStatus === true) {
					console.log('a seleção foi realizada com protractor.Key.ENTER.');
				} else {
					opcaofreteGratis.click();
					if (freteGratisStatus === true) {
						console.log ('a seleção foi realizada com click().');
					} else {
						opcaofreteGratis.checked = true;
						console.log('Foi utilizado checked = true. Status do Frete: ' + freteGratisStatus);
					};					
				};
			};
		});
		browser.driver.sleep(2000);
	};

	this.selecionaOptionPACCorreios = function() {
		var opcaoPACCorreios = this.radioPACCorreios;
		helper.waitElementVisibility(opcaoPACCorreios);
		opcaoPACCorreios.isSelected().then (function (PACStatus) {
			if (PACStatus === true) {
				console.log('nenhuma ação precisa ser realizada, opção já está selecionada.');
			} else {
				opcaoPACCorreios.sendKeys(protractor.Key.ENTER);
				if (PACStatus === true) {
					console.log('a seleção foi realizada com protractor.Key.ENTER.');
				} else {
					console.log ('opcaoPACCorreios.click(), linha descontinuada temporariamente');
					if (PACStatus === true) {
						console.log ('a seleção foi realizada com click().');
					} else {
						opcaoPACCorreios.checked = true;
						console.log('Foi utilizado checked = true. Status do Frete: ' + PACStatus);
					};
				};
			};
		});
		browser.driver.sleep(2000);
	};

	this.clickSeguirSectionFormaPagamento = function() {
		helper.waitElementVisibility(this.btnSeguirEntrega);
		this.btnSeguirEntrega.sendKeys(protractor.Key.ENTER);
	};

	this.clickSeguirFinalizarCompra = function() {
		helper.waitElementVisibility(this.btnSeguirFinalizarCompra);
		this.btnSeguirFinalizarCompra.sendKeys(protractor.Key.ENTER);
		browser.driver.sleep(2000);
	};

	this.clickFinalizarPedido = function() {
		browser.driver.sleep(4000);
		helper.waitElementVisibility(this.btnFinalizarPedido);
		this.btnFinalizarPedido.sendKeys(protractor.Key.ENTER);
	};

};

module.exports = new finalizarCompraPage();