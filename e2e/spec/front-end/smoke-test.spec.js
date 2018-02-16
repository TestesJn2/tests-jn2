/*smoke-test.spec.js - Front-End

| Informações Gerais
| Usuário: homol
| Senha: 0bc9c279f8bf352b
| Senha Nginx: 5945d16a075541a5
| Acesso DB Produção: homol_p => 17f2c306344e4bdd
*/

browser.ignoreSynchronization = true;

'use strict';

var 
	//Page-Objects - Front-end
	autenticacaoPage = require ('../../page-objects/front-end/autenticacao.po'),
    pedidosPage = require ('../../page-objects/front-end/pedidos.po'),
    homePage = require ('../../page-objects/front-end/home.po'),
    carrinhoComprasPage = require ('../../page-objects/front-end/carrinho-de-compras.po'),
    menuPage = require ('../../page-objects/front-end/menu.po'),
    detalheProdutoPage = require ('../../page-objects/front-end/detalhe-produto.po'),
    finalizarCompraPage = require ('../../page-objects/front-end/finalizar-compra.po'),
    confirmaPedidoCompradoPage =  require ('../../page-objects/front-end/confirma-pedido-comprado.po'),
	minhaContaGeralPage = require ('../../page-objects/front-end/minha-conta-geral.po'),
	minhaContaMeusEnderecosPage = require ('../../page-objects/front-end/minha-conta-meus-enderecos.po'),
	minhaContaDadosAcessoPage = require ('../../page-objects/front-end/minha-conta-dados-de-acesso.po'),
	minhaContaMeusPedidosPage = require ('../../page-objects/front-end/minha-conta-meus-pedidos.po'),
	minhaContaMeusComentariosPage = require ('../../page-objects/front-end/minha-conta-meus-comentarios.po'),

	//Page-obects - Back-end
	menuBackEndPage = require ('../../page-objects/back-end/geral/menu.po'),
	dashboardPage = require ('../../page-objects/back-end/geral/dashboard.po'),
	autenticacaoBackEndPage = require ('../../page-objects/back-end/geral/autenticacao.po'),
	gerenciarClientesPage = require ('../../page-objects/back-end/menu-clientes/gerenciar-clientes.po'),
	funcoesGeralPage = require ('../../page-objects/back-end/geral/funcoes-geral.po'),

	//Page-Objects - Formas de Pagamento
	cieloPage = require ('../../page-objects/modulos-pagamentos/cielo.po'),
	pagarmePage = require ('../../page-objects/modulos-pagamentos/pagar-me.po'),
	pagSeguroPage =  require ('../../page-objects/modulos-pagamentos/pag-seguro.po'),

	//Helper
	helper = require ('../../helper/helper')
;

//Antes de Cada Teste
beforeEach(function() {
	funcoesGeralPage.url();
});

//Após cada Teste
afterEach(function() {
	//verificar o screenshot
});


describe ('1. Front-End: Tela de Login de Cliente - Valida existência de elementos necessários para logi e novo cadastro.', function () {

	fit ('1.1. Seção Já sou cadastrado: verifica se têm título, input e texto dos campos de e-mail e senha, opção recuperar senha e botão entrar.', function() {
		helper.selecionarElemento(menuPage.linkCadastrarNovoCliente, autenticacaoPage.tituloUsuarioCadastrado);
		helper.waitElementVisibility(autenticacaoPage.tituloUsuarioCadastrado);
		expect (autenticacaoPage.tituloUsuarioCadastrado.isPresent()).toBe(true);
		expect (autenticacaoPage.inputEmailUsuario.isDisplayed()).toBe(true);
		expect (autenticacaoPage.textoEmailUsuario.isPresent()).toBe(true);
		expect (autenticacaoPage.textoSenhaUsuario.isPresent()).toBe(true);
		expect (autenticacaoPage.inputSenhaUsuario.isDisplayed()).toBe(true);
		expect (autenticacaoPage.opcaoEsqueceuSuaSenha.isDisplayed()).toBe(true);
		expect (autenticacaoPage.btnLogin.isDisplayed()).toBe(true);
	});

	it ('1.2. Seção Sou um novo cliente: verifica se têm título, input de e-mail e botão continuar.', function() {
		menuPage.acessoPagCadastroNovoCliente();
		helper.waitElementVisibility(autenticacaoPage.tituloNovoUsuario);
		expect (autenticacaoPage.tituloNovoUsuario.getText()).toContain('Sou um novo cliente');
		expect (autenticacaoPage.inputEmailNovoCadastro.isDisplayed()).toBe(true);
		expect (autenticacaoPage.btnContinuar.isDisplayed()).toBe(true);
	});
});

describe ('2. Front-End: Tela Criar Nova Conta - Verifica os elementos nome da label, se a label está vinculada ao input correspondente, se o input está habilitado e as mensagens de obrigatoriedade quando necessário.', function() {

	it ('2.1 Seção Dados de Acesso: Campos de e-mail, senha, confirmação de senha e título da seção.', function() {
		menuPage.acessoPagCadastroNovoCliente();
		autenticacaoPage.informaEmailNovoCliente('tests@teste.com.br');
		autenticacaoPage.clickBtnContinuar();
		autenticacaoPage.clickBtnContinuar();
		helper.waitElementVisibility(autenticacaoPage.tituloIdentificacao);
		//Título
		expect (autenticacaoPage.tituloIdentificacao.getText()).toContain('Identificação');
		expect (autenticacaoPage.textoIndicativoObrigatoriedade.getText()).toContain('* Campos Obrigatórios');
		expect (autenticacaoPage.tituloDadosAcesso.isPresent()).toBe(true);
		expect (autenticacaoPage.statusProcessoIdentificacao.isPresent()).toBe(true);
		//E-mail
		expect (autenticacaoPage.nmLabelEmailNovoCadastro.isPresent()).toBe(true);
		expect (autenticacaoPage.nmLabelEmailNovoCadastro.getAttribute('for')).toEqual('email_address');
		expect (autenticacaoPage.inputEmailInformado.getAttribute('value')).toContain('tests@teste.com.br');
		//Senha
		expect (autenticacaoPage.nmLabelSenhaNovoCadastro.isPresent()).toBe(true);
		expect (autenticacaoPage.nmLabelSenhaNovoCadastro.getAttribute('for')).toEqual('password');
		expect (autenticacaoPage.inputSenhaNovoCadastro.isDisplayed()).toBe(true);
		expect (autenticacaoPage.msgSenhaObrigatoria.getText()).toContain('Campo obrigatório.');
		expect (autenticacaoPage.msgSenhaObrigatoria.isDisplayed()).toBe(true);
		//Confirmação de Senha
		expect (autenticacaoPage.nmLabelConfirmaSenha.isPresent()).toBe(true);
		expect (autenticacaoPage.nmLabelConfirmaSenha.getAttribute('for')).toEqual('confirmation');
		expect (autenticacaoPage.inputConfirmaSenha.isDisplayed()).toBe(true);
		expect (autenticacaoPage.msgConfirmaSenhaObrigatoria.getText()).toContain('Campo obrigatório.');
		expect (autenticacaoPage.msgConfirmaSenhaObrigatoria.isDisplayed()).toBe(true);
	});

	it ('2.2 Seção Dados Pessoais - Pessoa Física: Campos de nome, cpf, telefone, título da seção e a opção receber promoção.', function() {
		menuPage.acessoPagCadastroNovoCliente();
		autenticacaoPage.informaEmailNovoCliente('tests@teste.com.br');
		autenticacaoPage.clickBtnContinuar();
		autenticacaoPage.clickBtnContinuar();
		helper.waitElementVisibility(autenticacaoPage.nmLabelNomeCompleto);
		//Título
		expect (autenticacaoPage.opcaoPessoaFisica.isDisplayed()).toBe(true);

		//Nome Completo
		expect (autenticacaoPage.nmLabelNomeCompleto.isPresent()).toBe(true);
		expect (autenticacaoPage.nmLabelNomeCompleto.getAttribute('for')).toContain('firstname');
		expect (autenticacaoPage.inputNomeCompleto.isDisplayed()).toBe(true);
		expect (autenticacaoPage.msgNomeCompletoObrigatorio.getText()).toContain('Por favor informe o nome completo.');
		expect (autenticacaoPage.msgNomeCompletoObrigatorio.isDisplayed()).toBe(true);
		//CPF
		expect (autenticacaoPage.nmLabelCPF.isPresent()).toBe(true);
		expect (autenticacaoPage.nmLabelCPF.getAttribute('for')).toContain('taxvat');
		expect (autenticacaoPage.inputCPF.isDisplayed()).toBe(true);
		expect (autenticacaoPage.msgCPFObrigatorio.getText()).toContain('O CPF/CNPJ informado é inválido');
		expect (autenticacaoPage.msgCPFObrigatorio.isDisplayed()).toBe(true);
		//Telefone
		expect (autenticacaoPage.nmLabelTelefone.isPresent()).toBe(true);
		expect (autenticacaoPage.nmLabelTelefone.getAttribute('for')).toContain('telephone');
		expect (autenticacaoPage.inputTelefone.isDisplayed()).toBe(true);
		expect (autenticacaoPage.msgTelefoneObrigatorio.getText()).toContain('Campo obrigatório.');
		expect (autenticacaoPage.msgTelefoneObrigatorio.isPresent()).toBe(true);
		// Receber promoção
		expect (autenticacaoPage.checkboxReceberPromocao.isDisplayed()).toBe(true);
		expect (autenticacaoPage.msgReceberPromocao.getText()).toContain('Desejo receber ofertas por email');
	});

	it ('2.3 - Seção Informações de Endereço: Campos de CEP, não sei meu CEP, Logradouro, número, bairro, cidade, estado, título da seção e os botões de voltar a loja e salvar.', function() {
		menuPage.acessoPagCadastroNovoCliente();
		autenticacaoPage.informaEmailNovoCliente('tests@teste.com.br');
		autenticacaoPage.clickBtnContinuar();
		autenticacaoPage.clickBtnContinuar();
		helper.waitElementVisibility(autenticacaoPage.inputCEP);
		autenticacaoPage.inputCEP.sendKeys(1);
		autenticacaoPage.clickBtnContinuar();
		helper.waitElementVisibility(autenticacaoPage.inputLogradouro);
		//Título
		expect (autenticacaoPage.tituloInformacaoEndereco.isPresent()).toBe(true);
		//CEP 
		expect (autenticacaoPage.nmLabelCEP.isPresent()).toBe(true);
		expect (autenticacaoPage.nmLabelCEP.getAttribute('for')).toContain('postcode');
		expect (autenticacaoPage.inputCEP.isDisplayed()).toBe(true);
		expect (autenticacaoPage.msgCEPObrigatorio.getText()).toContain('Campo obrigatório.');
		expect (autenticacaoPage.msgCEPObrigatorio.isPresent()).toBe(true);
		expect (autenticacaoPage.linkNaoSeiMeuCEP.isDisplayed()).toBe(true);
		//Logradouro
		expect (autenticacaoPage.nmLabelLogradouro.isPresent()).toBe(true);
		expect (autenticacaoPage.nmLabelLogradouro.getAttribute('for')).toContain('street_1');
		expect (autenticacaoPage.inputLogradouro.isDisplayed()).toBe(true);
		expect (autenticacaoPage.msgLogradouroObrigatorio.isPresent()).toBe(true);
		expect (autenticacaoPage.msgLogradouroObrigatorio.getText()).toContain('Campo obrigatório.');
		//Número
		expect (autenticacaoPage.nmLabelNumero.isPresent()).toBe(true);
		expect (autenticacaoPage.nmLabelNumero.getAttribute('for')).toContain('street_2');
		expect (autenticacaoPage.inputNumero.isDisplayed()).toBe(true);
		expect (autenticacaoPage.msgNumeroObrigatorio.getText()).toContain('Campo obrigatório.');
		expect (autenticacaoPage.msgNumeroObrigatorio.isPresent()).toBe(true);
		//Bairro
		expect (autenticacaoPage.nmLabelBairro.isPresent()).toBe(true);
		expect (autenticacaoPage.nmLabelBairro.getAttribute('for')).toContain('street_4');
		expect (autenticacaoPage.inputBairro.isDisplayed()).toBe(true);
		expect (autenticacaoPage.msgBairroObrigatorio.getText()).toContain('Campo obrigatório.');
		expect (autenticacaoPage.msgBairroObrigatorio.isPresent()).toBe(true);
		//Cidade
		expect (autenticacaoPage.nmLabelCidade.isPresent()).toBe(true);
		expect (autenticacaoPage.nmLabelCidade.getAttribute('for')).toContain('city');
		expect (autenticacaoPage.inputCidade.isDisplayed()).toBe(true);
		expect (autenticacaoPage.msgCidadeObrigatorio.getText()).toContain('Campo obrigatório.');
		expect (autenticacaoPage.msgCidadeObrigatorio.isPresent()).toBe(true);
		//Estado
		expect (autenticacaoPage.nmLabelEstado.isPresent()).toBe(true);
		expect (autenticacaoPage.nmLabelEstado.getAttribute('for')).toContain('region_id');
		expect (autenticacaoPage.inputEstado.isDisplayed()).toBe(true);
		expect (autenticacaoPage.msgEstadoObrigatorio.getText()).toContain('Selecione uma opção.');
		expect (autenticacaoPage.msgEstadoObrigatorio.isPresent()).toBe(true);
		//Botões Voltar a Loja e Salvar Cadastro
		expect (autenticacaoPage.btnContinuar.isDisplayed()).toBe(true);
		expect (autenticacaoPage.btnVoltarLoja.isDisplayed()).toBe(true);
	});

});

describe ('3. Front-End: Rotinas de Cadastro de Novo Cliente, Logout e Login', function() {

	it ('3.1 Cadastrar novo cliente: Após preeencher campos obrigatórios e confirmar, verificar acesso a página minha conta.', function() {
		menuPage.url();
		menuPage.acessoPagCadastroNovoCliente();
		autenticacaoPage.informaEmailNovoCliente('tests@teste.com.br');
		autenticacaoPage.clickBtnContinuar();
		helper.waitElementVisibility(autenticacaoPage.tituloIdentificacao);
		autenticacaoPage.informaDadosPessoaisESenha('1472589', '1472589', 'USUARIO TESTE AUTOMATIZADO LOGIN', '07834874608', '31986032586')
		autenticacaoPage.informaDadosEndereco('30130009','Avenida Afonso Pena', '700', 'Cruzeiro', 'Belo Horizonte');
		autenticacaoPage.clickBtnContinuar();
		helper.waitElementVisibility(menuPage.linkMinhaContaOptionMenu);
		expect (menuPage.linkMinhaContaOptionMenu.isDisplayed()).toBe(true);
	});

	it ('3.2 Realizar Logout: Selecionar opção Sair e validar se a opção entrar é habilitada no menu.', function () {
		menuPage.efetuaLogout();
		helper.waitElementVisibility(menuPage.linkLogin);
		expect (menuPage.linkLogin.isDisplayed()).toBe(true);
		expect (menuPage.linkCadastrarNovoCliente.isDisplayed()).toBe(true);
	});

	it ('3.3 Tentar logar com senha inválida: Verificar o retorno da mensagem "Login ou senha inválido".', function() {
		menuPage.acessaPagLogin();
		autenticacaoPage.login ('tests@teste.com.br', '147258');
		autenticacaoPage.clickBtnLogin();
		browser.driver.sleep(500);
		helper.waitElementVisibility(autenticacaoPage.msgLoginInvalid);
		expect (autenticacaoPage.msgLoginInvalid.getText()).toContain('Login ou senha inválido.');
	});

	it ('3.4 Efetuar Login com autenticação válida: Verificar se a opção minha conta é habilitada no menu e a mensagem de recepção do usuário, na página Minha Conta', function() {
		menuPage.acessaPagLogin();
		browser.driver.sleep(500);
		autenticacaoPage.login ('tests@teste.com.br', '1472589');
		autenticacaoPage.clickBtnLogin();
		helper.waitElementVisibility(menuPage.linkMinhaContaOptionMenu);
		expect (menuPage.linkMinhaContaOptionMenu.isDisplayed()).toBe(true);
		expect (pedidosPage.msgBoasVindas.isPresent()).toBe(true);
		expect (pedidosPage.msgBoasVindas.getText()).toContain('Olá, USUARIO TESTE AUTOMATIZADO LOGIN!');
	});
});

describe ('4. Front-End: Tela Visitar Produtos.', function() {

	it ('4.1 Validar os lementos: título, imagem, preço, descrição curta, descrição do campo quantidade, input quantidade, botão favoritos, descrição para cálculo de frete, input de frete, botão de frete, botão comprar e descrição.', function() {
		helper.waitElementVisibility(homePage.gridInitProdutos);
		homePage.primeiroProdListado.getAttribute('title').then (function(tituloProdSelecionado) {
			homePage.selecionaPrimeiroProdListado();
			expect (detalheProdutoPage.imgProdutoVisitado.isPresent()).toBe(true);
			expect (detalheProdutoPage.tituloProduto.isPresent()).toBe(true); 
			expect (detalheProdutoPage.precoProduto.getText()).not.toEqual('');
			expect (detalheProdutoPage.descricaoCurta.getText()).not.toEqual('');
			expect (detalheProdutoPage.descricaoQtde.isPresent()).toBe(true);
			expect (detalheProdutoPage.descricaoQtde.getAttribute('for')).toEqual('qty');
			expect (detalheProdutoPage.inputQuantidade.isDisplayed()).toBe(true);
			expect (detalheProdutoPage.descricaoCalculoFrete.isPresent()).toBe(true);
			expect (detalheProdutoPage.descricaoCalculoFrete.getAttribute('for')).toEqual('estimate_postcode');
			expect (detalheProdutoPage.inputCalculoFrete.isDisplayed()).toBe(true);
			expect (detalheProdutoPage.btnCalculoFrete.isDisplayed()).toBe(true);
			expect (detalheProdutoPage.tituloDescricao.isPresent()).toBe(true);
			expect (detalheProdutoPage.btnComprar.isDisplayed()).toBe(true);
			detalheProdutoPage.iconFavoritos.isPresent().then (function(statusIconFavoritos) {
				console.log('Icon Favoritos ao visitar o produto: ' + statusIconFavoritos);
				if (statusIconFavoritos === true) {
					expect (detalheProdutoPage.iconFavoritos.isDisplayed()).toBe(true);
				} else {
					console.log('construir automação para parametrizar o favoritos em configuração > Clientes > Favoritos');
				};
			});
		});
	});
}); 

describe ('5. Front-End: Tela Carrinho de Compras.', function() {

	it ('5.1 Carrinho Vazio - verificar os as mensagens "Carrinho de Compras Vazio" e "clique aqui para continuar comprando".', function() {
		menuPage.clickCarrinhoDeCompras();	
		browser.driver.sleep(500);
		carrinhoComprasPage.primeiroProdCarrinho.isPresent().then (function(itemCarrinho) {
			if (itemCarrinho === true) {
				carrinhoComprasPage.excluirProdutoCarrinho();
				helper.waitElementVisibility(carrinhoComprasPage.msgCarrinhoComprasVazio);
				expect (carrinhoComprasPage.msgCarrinhoComprasVazio.isPresent()).toBe(true);
				expect (carrinhoComprasPage.msgCliqueAquiParaContinuarComprando.isDisplayed()).toBe(true);
			} else {
				helper.waitElementVisibility(carrinhoComprasPage.msgCarrinhoComprasVazio);
				expect (carrinhoComprasPage.msgCarrinhoComprasVazio.isPresent()).toBe(true);
				expect (carrinhoComprasPage.msgCliqueAquiParaContinuarComprando.isDisplayed()).toBe(true);
			};
		});
	});

	it ('5.2 Carrinho com item - validar os elementos: nome, imagem, preço e quantidade do produto. Mais a mensagem produto adicionado, linha de progresso, título da tela, cep (input e botão), lixeira, campo de cupom, sub-total e botão finalizar.', function () {
		helper.waitElementVisibility(homePage.gridInitProdutos);
		homePage.selecionaPrimeiroProdListado();
		helper.waitElementVisibility(detalheProdutoPage.produtoVisitado);
		carrinhoComprasPage.addProdutVisitadoCarrinhho();
		helper.waitElementVisibility(carrinhoComprasPage.primeiroProdCarrinho);
		expect (carrinhoComprasPage.msgProdAddNoCarrinho.isPresent()).toBe(true);
		expect (carrinhoComprasPage.primeiroProdCarrinho.isDisplayed()).toBe(true);
		expect (carrinhoComprasPage.imgProdCarrinho.isDisplayed()).toBe(true);
		expect (carrinhoComprasPage.precoProdCarrinho.getText()).not.toEqual('');
		expect (carrinhoComprasPage.btnQtdeProduto.isDisplayed()).toBe(true);
		expect (carrinhoComprasPage.linhaProgresso.isPresent()).toBe(true);
		expect (carrinhoComprasPage.inputCEP.isDisplayed()).toBe(true);
		expect (carrinhoComprasPage.titleCarrinhoDeCompras.isPresent()).toBe(true);
		expect (carrinhoComprasPage.btnCalculaEntrega.isDisplayed()).toBe(true);
		expect (carrinhoComprasPage.linkLixeira.isPresent()).toBe(true);
		expect (carrinhoComprasPage.inputCupomDesconto.isDisplayed()).toBe(true);
		expect (carrinhoComprasPage.dsSubTotal.isPresent()).toBe(true);
		expect (carrinhoComprasPage.dsVrTotal.isPresent()).toBe(true);
		expect (carrinhoComprasPage.btnFinalizarCompra.isDisplayed()).toBe(true);
	});
});

describe ('6. Front-End: Tela Finalizar Compra.', function() {
	it ('6.1 Cabeçalho: título da tela, linha de progresso, dados do usuário e opção de logout.', function() {
		//Teste depende do cadastro de usuário ter sido realizado.
		//Alterações no código deste teste devem ser repassadas para os testes 4.5, 4.6 e 4.7
		menuPage.url();
		menuPage.linkMinhaContaOptionMenu.isPresent().then (function(linkMinhaConta){
			if (linkMinhaConta === true) {
				menuPage.clickCarrinhoDeCompras();	
				browser.driver.sleep(500);
				carrinhoComprasPage.primeiroProdCarrinho.isPresent().then (function(itemCarrinho){
					if (itemCarrinho === true) {
						carrinhoComprasPage.clickFinalizarCompra();		
						helper.waitElementVisibility(finalizarCompraPage.labelCabecalho);
						expect (finalizarCompraPage.titleFinalizSuaCompra.isPresent()).toBe(true);
						expect (finalizarCompraPage.linhaProgresso.isPresent()).toBe(true);
						expect (finalizarCompraPage.linkNmUsuario.isDisplayed()).toBe(true);
						expect (finalizarCompraPage.linkLogout.isDisplayed()).toBe(true);
					} else {
						menuPage.url();
						helper.waitElementVisibility(homePage.gridInitProdutos);
						homePage.selecionaPrimeiroProdListado();
						helper.waitElementVisibility(detalheProdutoPage.produtoVisitado);
						carrinhoComprasPage.addProdutVisitadoCarrinhho();
						helper.waitElementVisibility(carrinhoComprasPage.primeiroProdCarrinho);
						carrinhoComprasPage.clickFinalizarCompra();		
						helper.waitElementVisibility(finalizarCompraPage.labelCabecalho);
						expect (finalizarCompraPage.titleFinalizSuaCompra.isPresent()).toBe(true);
						expect (finalizarCompraPage.linhaProgresso.isPresent()).toBe(true);
						expect (finalizarCompraPage.linkNmUsuario.isDisplayed()).toBe(true);
						expect (finalizarCompraPage.linkLogout.isDisplayed()).toBe(true);
					};
				});
			} else {
				menuPage.acessaPagLogin();
				browser.driver.sleep(500);
				autenticacaoPage.login ('tests@teste.com.br', '1472589');
				autenticacaoPage.clickBtnLogin();
				menuPage.url();
				menuPage.clickCarrinhoDeCompras();	
				browser.driver.sleep(500);
				carrinhoComprasPage.primeiroProdCarrinho.isPresent().then (function(itemCarrinho){
					if (itemCarrinho === true) {
						carrinhoComprasPage.clickFinalizarCompra();		
						helper.waitElementVisibility(finalizarCompraPage.labelCabecalho);
						expect (finalizarCompraPage.titleFinalizSuaCompra.isPresent()).toBe(true);
						expect (finalizarCompraPage.linhaProgresso.isPresent()).toBe(true);
						expect (finalizarCompraPage.linkNmUsuario.isDisplayed()).toBe(true);
						expect (finalizarCompraPage.linkLogout.isDisplayed()).toBe(true);
					} else {
						menuPage.url();
						helper.waitElementVisibility(homePage.gridInitProdutos);
						homePage.selecionaPrimeiroProdListado();
						helper.waitElementVisibility(detalheProdutoPage.produtoVisitado);
						carrinhoComprasPage.addProdutVisitadoCarrinhho();
						helper.waitElementVisibility(carrinhoComprasPage.primeiroProdCarrinho);
						carrinhoComprasPage.clickFinalizarCompra();		
						helper.waitElementVisibility(finalizarCompraPage.labelCabecalho);
						expect (finalizarCompraPage.titleFinalizSuaCompra.isPresent()).toBe(true);
						expect (finalizarCompraPage.linhaProgresso.isPresent()).toBe(true);
						expect (finalizarCompraPage.linkNmUsuario.isDisplayed()).toBe(true);
						expect (finalizarCompraPage.linkLogout.isDisplayed()).toBe(true);
					};
				});
			};
		});
	});

	it ('6.2 Seção Endereço de Combrança e validar os elementos: informações do endereço de entrega, opção de frete, título da tela, título da seção, opção de enviar para o mesmo endereço de combrança e botão seguir.', function() {
		//Teste depende do cadastro de usuário ter sido realizado e trata-se utiliza parte do código do item 4.4, logo, manutenção no mesmo deve ser replicada para este teste.
		menuPage.url();
		menuPage.linkMinhaContaOptionMenu.isPresent().then (function(linkMinhaConta){
			if (linkMinhaConta === true) {
				menuPage.clickCarrinhoDeCompras();	
				browser.driver.sleep(500);
				carrinhoComprasPage.primeiroProdCarrinho.isPresent().then (function(itemCarrinho){
					if (itemCarrinho === true) {
						carrinhoComprasPage.clickFinalizarCompra();		
						helper.waitElementVisibility(finalizarCompraPage.tituloEnderecoCobranca);
						expect (finalizarCompraPage.tituloEnderecoCobranca.isPresent()).toBe(true);
						expect (finalizarCompraPage.selectEnderecoCadastrado.isDisplayed()).toBe(true);
						expect (finalizarCompraPage.checkEnderecoEntrega.isDisplayed()).toBe(true);
						expect (finalizarCompraPage.tituloEnderecoEntrega.isPresent()).toBe(true);
						expect (finalizarCompraPage.tituloFormaEntrega.isPresent()).toBe(true);
						expect (finalizarCompraPage.divEntregaGratis.isPresent()).toBe(true);
						expect (finalizarCompraPage.btnSeguirEntrega.isDisplayed()).toBe(true);
						console.log('if 1');
					
					} else {
						menuPage.url();
						helper.waitElementVisibility(homePage.gridInitProdutos);
						homePage.selecionaPrimeiroProdListado();
						helper.waitElementVisibility(detalheProdutoPage.produtoVisitado);
						carrinhoComprasPage.addProdutVisitadoCarrinhho();
						helper.waitElementVisibility(carrinhoComprasPage.primeiroProdCarrinho);
						carrinhoComprasPage.clickFinalizarCompra();		
						helper.waitElementVisibility(finalizarCompraPage.tituloEnderecoCobranca);
						expect (finalizarCompraPage.tituloEnderecoCobranca.isPresent()).toBe(true);
						expect (finalizarCompraPage.selectEnderecoCadastrado.isDisplayed()).toBe(true);
						expect (finalizarCompraPage.checkEnderecoEntrega.isDisplayed()).toBe(true);
						expect (finalizarCompraPage.tituloEnderecoEntrega.isPresent()).toBe(true);
						expect (finalizarCompraPage.tituloFormaEntrega.isPresent()).toBe(true);
						expect (finalizarCompraPage.divEntregaGratis.isPresent()).toBe(true);
						expect (finalizarCompraPage.btnSeguirEntrega.isDisplayed()).toBe(true);
						console.log('if 2');
					};
				});
			} else {
				menuPage.acessaPagLogin();
				browser.driver.sleep(500);
				autenticacaoPage.login ('tests@teste.com.br', '1472589');
				autenticacaoPage.clickBtnLogin();
				menuPage.url();
				menuPage.clickCarrinhoDeCompras();	
				browser.driver.sleep(500);
				carrinhoComprasPage.primeiroProdCarrinho.isPresent().then (function(itemCarrinho){
					if (itemCarrinho === true) {
						carrinhoComprasPage.clickFinalizarCompra();		
						helper.waitElementVisibility(finalizarCompraPage.tituloEnderecoCobranca);
						expect (finalizarCompraPage.tituloEnderecoCobranca.isPresent()).toBe(true);
						expect (finalizarCompraPage.selectEnderecoCadastrado.isDisplayed()).toBe(true);
						expect (finalizarCompraPage.checkEnderecoEntrega.isDisplayed()).toBe(true);
						expect (finalizarCompraPage.tituloEnderecoEntrega.isPresent()).toBe(true);
						expect (finalizarCompraPage.tituloFormaEntrega.isPresent()).toBe(true);
						expect (finalizarCompraPage.divEntregaGratis.isPresent()).toBe(true);
						expect (finalizarCompraPage.btnSeguirEntrega.isDisplayed()).toBe(true);
						console.log('if 3');
					} else {
						menuPage.url();
						helper.waitElementVisibility(homePage.gridInitProdutos);
						homePage.selecionaPrimeiroProdListado();
						helper.waitElementVisibility(detalheProdutoPage.produtoVisitado);
						carrinhoComprasPage.addProdutVisitadoCarrinhho();
						helper.waitElementVisibility(carrinhoComprasPage.primeiroProdCarrinho);
						carrinhoComprasPage.clickFinalizarCompra();		
						helper.waitElementVisibility(finalizarCompraPage.tituloEnderecoCobranca);
						expect (finalizarCompraPage.tituloEnderecoCobranca.isPresent()).toBe(true);
						expect (finalizarCompraPage.selectEnderecoCadastrado.isDisplayed()).toBe(true);
						expect (finalizarCompraPage.checkEnderecoEntrega.isDisplayed()).toBe(true);
						expect (finalizarCompraPage.tituloEnderecoEntrega.isPresent()).toBe(true);
						expect (finalizarCompraPage.tituloFormaEntrega.isPresent()).toBe(true);
						expect (finalizarCompraPage.divEntregaGratis.isPresent()).toBe(true);
						expect (finalizarCompraPage.btnSeguirEntrega.isDisplayed()).toBe(true);
						console.log('if 4');
					};
				});
			};
		});
	});

	it('6.3  Seção Forma de Pagamento e validar os elementos: opção de desconto, título e botões de voltar e seguir.', function() {
		//Teste depende do cadastro de usuário ter sido realizado e trata-se utiliza parte do código do item 4.4, logo, manutenção no mesmo deve ser replicada para este teste.
		menuPage.url();
		menuPage.linkMinhaContaOptionMenu.isPresent().then (function(linkMinhaConta){
			if (linkMinhaConta === true) {
				menuPage.clickCarrinhoDeCompras();	
				browser.driver.sleep(500);
				carrinhoComprasPage.primeiroProdCarrinho.isPresent().then (function(itemCarrinho){
					if (itemCarrinho === true) {
						carrinhoComprasPage.clickFinalizarCompra();		
						finalizarCompraPage.clickSeguirSectionFormaPagamento();
						helper.waitElementVisibility(finalizarCompraPage.tituloCupomDesconto);
						expect (finalizarCompraPage.tituloCupomDesconto.isPresent()).toBe(true);
						expect (finalizarCompraPage.inputCupomDesconto.isDisplayed()).toBe(true);
						expect (finalizarCompraPage.btnCupomDesconto.isDisplayed()).toBe(true);
						expect (finalizarCompraPage.tituloFormaPagamento.isPresent()).toBe(true);
						expect (finalizarCompraPage.btnVoltar.isDisplayed()).toBe(true);
						expect (finalizarCompraPage.btnSeguirFinalizarCompra.isDisplayed()).toBe(true);
						console.log('if 1');
					} else {
						menuPage.url();
						helper.waitElementVisibility(homePage.gridInitProdutos);
						homePage.selecionaPrimeiroProdListado();
						helper.waitElementVisibility(detalheProdutoPage.produtoVisitado);
						carrinhoComprasPage.addProdutVisitadoCarrinhho();
						helper.waitElementVisibility(carrinhoComprasPage.primeiroProdCarrinho);
						carrinhoComprasPage.clickFinalizarCompra();		
						finalizarCompraPage.clickSeguirSectionFormaPagamento();
						helper.waitElementVisibility(finalizarCompraPage.tituloCupomDesconto);
						expect (finalizarCompraPage.tituloCupomDesconto.isPresent()).toBe(true);
						expect (finalizarCompraPage.inputCupomDesconto.isDisplayed()).toBe(true);
						expect (finalizarCompraPage.btnCupomDesconto.isDisplayed()).toBe(true);
						expect (finalizarCompraPage.tituloFormaPagamento.isPresent()).toBe(true);
						expect (finalizarCompraPage.btnVoltar.isDisplayed()).toBe(true);
						expect (finalizarCompraPage.btnSeguirFinalizarCompra.isDisplayed()).toBe(true);
						console.log('if 2');
					};
				});
			} else {
				menuPage.acessaPagLogin();
				browser.driver.sleep(500);
				autenticacaoPage.login ('tests@teste.com.br', '1472589');
				autenticacaoPage.clickBtnLogin();
				menuPage.url();
				menuPage.clickCarrinhoDeCompras();	
				browser.driver.sleep(500);
				carrinhoComprasPage.primeiroProdCarrinho.isPresent().then (function(itemCarrinho){
					if (itemCarrinho === true) {
						carrinhoComprasPage.clickFinalizarCompra();		
						finalizarCompraPage.clickSeguirSectionFormaPagamento();
						helper.waitElementVisibility(finalizarCompraPage.tituloCupomDesconto);
						expect (finalizarCompraPage.tituloCupomDesconto.isPresent()).toBe(true);
						expect (finalizarCompraPage.inputCupomDesconto.isDisplayed()).toBe(true);
						expect (finalizarCompraPage.btnCupomDesconto.isDisplayed()).toBe(true);
						expect (finalizarCompraPage.tituloFormaPagamento.isPresent()).toBe(true);
						expect (finalizarCompraPage.btnVoltar.isDisplayed()).toBe(true);
						expect (finalizarCompraPage.btnSeguirFinalizarCompra.isDisplayed()).toBe(true);
						console.log('if 3');
					} else {
						menuPage.url();
						helper.waitElementVisibility(homePage.gridInitProdutos);
						homePage.selecionaPrimeiroProdListado();
						helper.waitElementVisibility(detalheProdutoPage.produtoVisitado);
						carrinhoComprasPage.addProdutVisitadoCarrinhho();
						helper.waitElementVisibility(carrinhoComprasPage.primeiroProdCarrinho);
						carrinhoComprasPage.clickFinalizarCompra();		
						finalizarCompraPage.clickSeguirSectionFormaPagamento();
						helper.waitElementVisibility(finalizarCompraPage.tituloCupomDesconto);
						expect (finalizarCompraPage.tituloCupomDesconto.isPresent()).toBe(true);
						expect (finalizarCompraPage.inputCupomDesconto.isDisplayed()).toBe(true);
						expect (finalizarCompraPage.btnCupomDesconto.isDisplayed()).toBe(true);
						expect (finalizarCompraPage.tituloFormaPagamento.isPresent()).toBe(true);
						expect (finalizarCompraPage.btnVoltar.isDisplayed()).toBe(true);
						expect (finalizarCompraPage.btnSeguirFinalizarCompra.isDisplayed()).toBe(true);
						console.log('if 4');						
					};
				});
			};
		});
	});

	it ('6.4  Seção Revisão do Pedido: ',function() {
		//Teste depende do cadastro de usuário ter sido realizado e trata-se utiliza parte do código do item 4.4, logo, manutenção no mesmo deve ser replicada para este teste.
		menuPage.url();
		menuPage.linkMinhaContaOptionMenu.isPresent().then (function(linkMinhaConta){
			if (linkMinhaConta === true) {
				menuPage.clickCarrinhoDeCompras();	
				browser.driver.sleep(500);
				carrinhoComprasPage.primeiroProdCarrinho.isPresent().then (function(itemCarrinho){
					if (itemCarrinho === true) {
						carrinhoComprasPage.clickFinalizarCompra();		
						finalizarCompraPage.clickSeguirSectionFormaPagamento();
						finalizarCompraPage.clickSeguirFinalizarCompra();
						helper.waitElementVisibility(finalizarCompraPage.tituloRevisaoPedido);
						expect (finalizarCompraPage.tituloRevisaoPedido.isPresent()).toBe(true);
						expect (finalizarCompraPage.columnNmProduto.isPresent()).toBe(true);
						expect (finalizarCompraPage.columnQtde.isPresent()).toBe(true);
						expect (finalizarCompraPage.columnSubTotal.isPresent()).toBe(true);
						expect (finalizarCompraPage.labelComentarios.isPresent()).toBe(true);
						expect (finalizarCompraPage.inputComentarios.isDisplayed()).toBe(true);
						expect (finalizarCompraPage.checkReceberNovidades.isDisplayed()).toBe(true);
						expect (finalizarCompraPage.labelReceberNovidades.isPresent()).toBe(true);
						expect (finalizarCompraPage.btnFinalizarPedido.isDisplayed()).toBe(true);
						expect (finalizarCompraPage.blocoAmbienteSeguro.isPresent()).toBe(true);
						expect (finalizarCompraPage.btnVoltarFormaPagamento.isDisplayed()).toBe(true);
						console.log('if 1');
					} else {
						menuPage.url();
						helper.waitElementVisibility(homePage.gridInitProdutos);
						homePage.selecionaPrimeiroProdListado();
						helper.waitElementVisibility(detalheProdutoPage.produtoVisitado);
						carrinhoComprasPage.addProdutVisitadoCarrinhho();
						helper.waitElementVisibility(carrinhoComprasPage.primeiroProdCarrinho);
						carrinhoComprasPage.clickFinalizarCompra();		
						finalizarCompraPage.clickSeguirSectionFormaPagamento();
						finalizarCompraPage.clickSeguirFinalizarCompra();
						helper.waitElementVisibility(finalizarCompraPage.tituloRevisaoPedido);
						expect (finalizarCompraPage.tituloRevisaoPedido.isPresent()).toBe(true);
						expect (finalizarCompraPage.columnNmProduto.isPresent()).toBe(true);
						expect (finalizarCompraPage.columnQtde.isPresent()).toBe(true);
						expect (finalizarCompraPage.columnSubTotal.isPresent()).toBe(true);
						expect (finalizarCompraPage.labelComentarios.isPresent()).toBe(true);
						expect (finalizarCompraPage.inputComentarios.isDisplayed()).toBe(true);
						expect (finalizarCompraPage.checkReceberNovidades.isDisplayed()).toBe(true);
						expect (finalizarCompraPage.labelReceberNovidades.isPresent()).toBe(true);
						expect (finalizarCompraPage.btnFinalizarPedido.isDisplayed()).toBe(true);
						expect (finalizarCompraPage.blocoAmbienteSeguro.isPresent()).toBe(true);
						expect (finalizarCompraPage.btnVoltarFormaPagamento.isDisplayed()).toBe(true);
						console.log('if 2');
					};
				});
			} else {
				menuPage.acessaPagLogin();
				browser.driver.sleep(500);
				autenticacaoPage.login ('tests@teste.com.br', '1472589');
				autenticacaoPage.clickBtnLogin();
				menuPage.url();
				menuPage.clickCarrinhoDeCompras();	
				browser.driver.sleep(500);
				carrinhoComprasPage.primeiroProdCarrinho.isPresent().then (function(itemCarrinho){
					if (itemCarrinho === true) {
						carrinhoComprasPage.clickFinalizarCompra();		
						finalizarCompraPage.clickSeguirSectionFormaPagamento();
						finalizarCompraPage.clickSeguirFinalizarCompra();
						helper.waitElementVisibility(finalizarCompraPage.tituloRevisaoPedido);
						expect (finalizarCompraPage.tituloRevisaoPedido.isPresent()).toBe(true);
						expect (finalizarCompraPage.columnNmProduto.isPresent()).toBe(true);
						expect (finalizarCompraPage.columnQtde.isPresent()).toBe(true);
						expect (finalizarCompraPage.columnSubTotal.isPresent()).toBe(true);
						expect (finalizarCompraPage.labelComentarios.isPresent()).toBe(true);
						expect (finalizarCompraPage.inputComentarios.isDisplayed()).toBe(true);
						expect (finalizarCompraPage.checkReceberNovidades.isDisplayed()).toBe(true);
						expect (finalizarCompraPage.labelReceberNovidades.isPresent()).toBe(true);
						expect (finalizarCompraPage.btnFinalizarPedido.isDisplayed()).toBe(true);
						expect (finalizarCompraPage.blocoAmbienteSeguro.isPresent()).toBe(true);
						expect (finalizarCompraPage.btnVoltarFormaPagamento.isDisplayed()).toBe(true);
						console.log('if 3');
					} else {
						menuPage.url();
						helper.waitElementVisibility(homePage.gridInitProdutos);
						homePage.selecionaPrimeiroProdListado();
						helper.waitElementVisibility(detalheProdutoPage.produtoVisitado);
						carrinhoComprasPage.addProdutVisitadoCarrinhho();
						helper.waitElementVisibility(carrinhoComprasPage.primeiroProdCarrinho);
						carrinhoComprasPage.clickFinalizarCompra();		
						finalizarCompraPage.clickSeguirSectionFormaPagamento();
						finalizarCompraPage.clickSeguirFinalizarCompra();
						helper.waitElementVisibility(finalizarCompraPage.tituloRevisaoPedido);
						expect (finalizarCompraPage.tituloRevisaoPedido.isPresent()).toBe(true);
						expect (finalizarCompraPage.columnNmProduto.isPresent()).toBe(true);
						expect (finalizarCompraPage.columnQtde.isPresent()).toBe(true);
						expect (finalizarCompraPage.columnSubTotal.isPresent()).toBe(true);
						expect (finalizarCompraPage.labelComentarios.isPresent()).toBe(true);
						expect (finalizarCompraPage.inputComentarios.isDisplayed()).toBe(true);
						expect (finalizarCompraPage.checkReceberNovidades.isDisplayed()).toBe(true);
						expect (finalizarCompraPage.labelReceberNovidades.isPresent()).toBe(true);
						expect (finalizarCompraPage.btnFinalizarPedido.isDisplayed()).toBe(true);
						expect (finalizarCompraPage.blocoAmbienteSeguro.isPresent()).toBe(true);
						expect (finalizarCompraPage.btnVoltarFormaPagamento.isDisplayed()).toBe(true);
						console.log('if 4');						
					};
				});
			};
		});
	});
	
});

describe ('7. Front-End: Compras utilizando os métodos Pagar.Me, Cielo 3.0 e PagSeguro.', function () {

	it ('7.1 CC Pagar.Me - Finalizar Compra e verificar o status do pedido.', function() {
		//Teste depende do cadastro de usuário ter sido realizado e trata-se utiliza parte do código do item 4.4, logo, manutenção no mesmo deve ser replicada para este teste.
		menuPage.url();
		menuPage.linkMinhaContaOptionMenu.isPresent().then (function(linkMinhaConta){
			if (linkMinhaConta === true) {
				console.log('usuário logado');
				menuPage.clickCarrinhoDeCompras();	
				browser.driver.sleep(500);
				carrinhoComprasPage.primeiroProdCarrinho.isPresent().then (function(itemCarrinho){
					if (itemCarrinho === true) {
						console.log('usuário logado e possui item no carrinho');
						carrinhoComprasPage.clickFinalizarCompra();		
						browser.driver.sleep(500);
						finalizarCompraPage.radioEntregaGratis.isPresent().then (function (checkedFreteGratis) {
							if (checkedFreteGratis === true) {
								console.log('usuário logado, possui item no carrinho e tem a opção de utilizar frete grátis.');
								finalizarCompraPage.selecionaOptionFreteGratis();
								finalizarCompraPage.clickSeguirSectionFormaPagamento();
								browser.driver.sleep(500);
								pagarmePage.optionPagarMeCC.isPresent().then (function (PagarMeHabilit) {
									if (PagarMeHabilit === true) {
										console.log('usuário logado, possui item no carrinho, utiliza frete grátis e utilizará CC PagarMe.');
										pagarmePage.selecionaFormaPagCCPagarMe();
										pagarmePage.selecionaPrimeiraParcela();
										pagarmePage.preencheDadosDoCCPagarMe('4024007169408340','TESTE PAGARMECC', '12', '2019','504');
										finalizarCompraPage.clickSeguirFinalizarCompra();
										finalizarCompraPage.clickFinalizarPedido();
										helper.waitElementVisibility(confirmaPedidoCompradoPage.tituloAcompanheSeuPedido);										
										expect (confirmaPedidoCompradoPage.tituloAcompanheSeuPedido.isPresent()).toBe(true);
										expect (confirmaPedidoCompradoPage.linhaProgressoConfirmacao.getCssValue('color')).toEqual('rgba(255, 215, 151, 1)');
										expect (confirmaPedidoCompradoPage.linkMeusPedidos.isDisplayed()).toBe(true);
										expect (confirmaPedidoCompradoPage.boxAcompanhamentoPedido.isPresent()).toBe(true);
										expect (confirmaPedidoCompradoPage.logoConfirmacao.isPresent()).toBe(true);
										expect (confirmaPedidoCompradoPage.tituloResumoPedido.isPresent()).toBe(true);
										expect (confirmaPedidoCompradoPage.sectionEnderecoEntrega.isPresent()).toBe(true);
										expect (confirmaPedidoCompradoPage.sectionEnderecoCobranca.isPresent()).toBe(true);
										expect (confirmaPedidoCompradoPage.sectionFormaEntrega.isPresent()).toBe(true);
										expect (confirmaPedidoCompradoPage.sectionFormaPagamento.isPresent()).toBe(true);
										expect (confirmaPedidoCompradoPage.sectionItens.isPresent()).toBe(true);
									} else {
										console.log('forma de pagamento CC Pagar.Me deve ser configurada no back-end!');
									};
								});
							} else {
								finalizarCompraPage.radioPACCorreios.isPresent().then (function (checkedPAC) {
									if (checkedPAC === true) {
										console.log('usuário logado, possui item no carrinho e vai utilizar o método de entrega PAC Correios.');
										finalizarCompraPage.selecionaOptionPACCorreios();
										finalizarCompraPage.clickSeguirSectionFormaPagamento();
										browser.driver.sleep(500);
										pagarmePage.optionPagarMeCC.isPresent().then (function (PagarMeHabilit) {
											if (PagarMeHabilit === true) {
												console.log('usuário logado, possui item no carrinho, utiliza PAC Correios e utilizará CC PagarMe.');
												pagarmePage.selecionaFormaPagCCPagarMe();
												pagarmePage.selecionaPrimeiraParcela();
												pagarmePage.preencheDadosDoCCPagarMe('4024007169408340','TESTE PAGARMECC', '12', '2019','504');
												finalizarCompraPage.clickSeguirFinalizarCompra();
												finalizarCompraPage.clickFinalizarPedido();
												helper.waitElementVisibility(confirmaPedidoCompradoPage.tituloAcompanheSeuPedido);										
												expect (confirmaPedidoCompradoPage.tituloAcompanheSeuPedido.isPresent()).toBe(true);
												expect (confirmaPedidoCompradoPage.linhaProgressoConfirmacao.getCssValue('color')).toEqual('rgba(255, 215, 151, 1)');
												expect (confirmaPedidoCompradoPage.linkMeusPedidos.isDisplayed()).toBe(true);
												expect (confirmaPedidoCompradoPage.boxAcompanhamentoPedido.isPresent()).toBe(true);
												expect (confirmaPedidoCompradoPage.logoConfirmacao.isPresent()).toBe(true);
												expect (confirmaPedidoCompradoPage.tituloResumoPedido.isPresent()).toBe(true);
												expect (confirmaPedidoCompradoPage.sectionEnderecoEntrega.isPresent()).toBe(true);
												expect (confirmaPedidoCompradoPage.sectionEnderecoCobranca.isPresent()).toBe(true);
												expect (confirmaPedidoCompradoPage.sectionFormaEntrega.isPresent()).toBe(true);
												expect (confirmaPedidoCompradoPage.sectionFormaPagamento.isPresent()).toBe(true);
												expect (confirmaPedidoCompradoPage.sectionItens.isPresent()).toBe(true);
											} else {
												console.log('forma de pagamento CC Pagar.Me deve ser configurada no back-end!');
											};
										});
									} else {
										console.log ('a base de dados não contém as formas de entrega frete grátis ou PAC e por isso, não foi possíve dar andamento aos testes.');
									};
								});
							};
						});
					} else { 
						console.log('Usuário está logado, mas, não tem item no carrinho, logo os mesmos serão adicionados.');
						menuPage.url();
						helper.waitElementVisibility(homePage.gridInitProdutos);
						homePage.selecionaPrimeiroProdListado();
						helper.waitElementVisibility(detalheProdutoPage.produtoVisitado);
						carrinhoComprasPage.addProdutVisitadoCarrinhho();
						helper.waitElementVisibility(carrinhoComprasPage.primeiroProdCarrinho);
						carrinhoComprasPage.clickFinalizarCompra();	
						browser.driver.sleep(500);	
						finalizarCompraPage.radioEntregaGratis.isPresent().then (function (checkedFreteGratis) { 
							if (checkedFreteGratis === true) {
								console.log('Usuário logado, frete grátis adicionado.');
								finalizarCompraPage.selecionaOptionFreteGratis();
								finalizarCompraPage.clickSeguirSectionFormaPagamento();
								browser.driver.sleep(1000);
								pagarmePage.optionPagarMeCC.isPresent().then (function (PagarMeHabilit) {
									if (PagarMeHabilit === true) {
										console.log('usuário logado, frete grátis e será feito a compra com CC Pagar.Me.');
										pagarmePage.selecionaFormaPagCCPagarMe();
										pagarmePage.selecionaPrimeiraParcela();
										pagarmePage.preencheDadosDoCCPagarMe('4024007169408340','TESTE PAGARMECC', '12', '2019','504');
										finalizarCompraPage.clickSeguirFinalizarCompra();
										finalizarCompraPage.clickFinalizarPedido();
										helper.waitElementVisibility(confirmaPedidoCompradoPage.tituloAcompanheSeuPedido);										
										expect (confirmaPedidoCompradoPage.tituloAcompanheSeuPedido.isPresent()).toBe(true);
										expect (confirmaPedidoCompradoPage.linhaProgressoConfirmacao.getCssValue('color')).toEqual('rgba(255, 215, 151, 1)');
										expect (confirmaPedidoCompradoPage.linkMeusPedidos.isDisplayed()).toBe(true);
										expect (confirmaPedidoCompradoPage.boxAcompanhamentoPedido.isPresent()).toBe(true);
										expect (confirmaPedidoCompradoPage.logoConfirmacao.isPresent()).toBe(true);
										expect (confirmaPedidoCompradoPage.tituloResumoPedido.isPresent()).toBe(true);
										expect (confirmaPedidoCompradoPage.sectionEnderecoEntrega.isPresent()).toBe(true);
										expect (confirmaPedidoCompradoPage.sectionEnderecoCobranca.isPresent()).toBe(true);
										expect (confirmaPedidoCompradoPage.sectionFormaEntrega.isPresent()).toBe(true);
										expect (confirmaPedidoCompradoPage.sectionFormaPagamento.isPresent()).toBe(true);
										expect (confirmaPedidoCompradoPage.sectionItens.isPresent()).toBe(true);
									} else {
										console.log('forma de pagamento CC Pagar.Me deve ser configurada no back-end!');
									};
								});
							} else {
								console.log('usuário logado, mas, não possui opção de frete grátis disponível.');
								finalizarCompraPage.radioPACCorreios.isPresent().then (function (checkedPAC) {
									if (checkedPAC === true) {
										console.log('Usuário logado e o método PAC Correios foi acionada.');
										finalizarCompraPage.selecionaOptionPACCorreios();
										finalizarCompraPage.clickSeguirSectionFormaPagamento();
										pagarmePage.optionPagarMeCC.isPresent().then (function (PagarMeHabilit) {
											if (PagarMeHabilit === true) {
												console.log ('usuário logado, método de entrega PAC e a compra com CC Pagar.Me.');
												pagarmePage.selecionaFormaPagCCPagarMe();
												pagarmePage.selecionaPrimeiraParcela();
												pagarmePage.preencheDadosDoCCPagarMe('4024007169408340','TESTE PAGARMECC', '12', '2019','504');
												finalizarCompraPage.clickSeguirFinalizarCompra();
												finalizarCompraPage.clickFinalizarPedido();
												helper.waitElementVisibility(confirmaPedidoCompradoPage.tituloAcompanheSeuPedido);										
												expect (confirmaPedidoCompradoPage.tituloAcompanheSeuPedido.isPresent()).toBe(true);
												expect (confirmaPedidoCompradoPage.linhaProgressoConfirmacao.getCssValue('color')).toEqual('rgba(255, 215, 151, 1)');
												expect (confirmaPedidoCompradoPage.linkMeusPedidos.isDisplayed()).toBe(true);
												expect (confirmaPedidoCompradoPage.boxAcompanhamentoPedido.isPresent()).toBe(true);
												expect (confirmaPedidoCompradoPage.logoConfirmacao.isPresent()).toBe(true);
												expect (confirmaPedidoCompradoPage.tituloResumoPedido.isPresent()).toBe(true);
												expect (confirmaPedidoCompradoPage.sectionEnderecoEntrega.isPresent()).toBe(true);
												expect (confirmaPedidoCompradoPage.sectionEnderecoCobranca.isPresent()).toBe(true);
												expect (confirmaPedidoCompradoPage.sectionFormaEntrega.isPresent()).toBe(true);
												expect (confirmaPedidoCompradoPage.sectionFormaPagamento.isPresent()).toBe(true);
												expect (confirmaPedidoCompradoPage.sectionItens.isPresent()).toBe(true);
											} else {
												console.log('forma de pagamento CC Pagar.Me deve ser configurada no back-end!');
											};
										});
									} else {
										console.log ('a base não contém as formas de entrega frete grátis ou PAC e por isso, não foi possíve dar andamento aos testes.');
									};
								});
							};
						});
					};
				});
			} else {
				console.log('usuário deslogado, logo, login será realizado com os dados do usuário criado no teste automatizado.');
				menuPage.acessaPagLogin();
				browser.driver.sleep(500);
				autenticacaoPage.login ('tests@teste.com.br', '1472589');
				autenticacaoPage.clickBtnLogin();
				menuPage.url();
				menuPage.clickCarrinhoDeCompras();	
				browser.driver.sleep(500);
				carrinhoComprasPage.primeiroProdCarrinho.isPresent().then (function(itemCarrinho){
					if (itemCarrinho === true) {
						console.log('após login, verifica que existe item no carrinho.');
						carrinhoComprasPage.clickFinalizarCompra();		
						browser.driver.sleep(500);
						finalizarCompraPage.radioEntregaGratis.isPresent().then (function (checkedFreteGratis) {
							if (checkedFreteGratis === true) {
								console.log('Frete grátis foi acionado.');
								finalizarCompraPage.selecionaOptionFreteGratis();
								finalizarCompraPage.clickSeguirSectionFormaPagamento();
								pagarmePage.optionPagarMeCC.isPresent().then (function (PagarMeHabilit) {
									if (PagarMeHabilit === true) {
										console.log('forma de pagamento CC Pagar.Me foi acionada.');
										pagarmePage.selecionaFormaPagCCPagarMe();
										pagarmePage.selecionaPrimeiraParcela();
										pagarmePage.preencheDadosDoCCPagarMe('4024007169408340','TESTE PAGARMECC', '12', '2019','504');
										finalizarCompraPage.clickSeguirFinalizarCompra();
										finalizarCompraPage.clickFinalizarPedido();
										helper.waitElementVisibility(confirmaPedidoCompradoPage.tituloAcompanheSeuPedido);										
										expect (confirmaPedidoCompradoPage.tituloAcompanheSeuPedido.isPresent()).toBe(true);
										expect (confirmaPedidoCompradoPage.linhaProgressoConfirmacao.getCssValue('color')).toEqual('rgba(255, 215, 151, 1)');
										expect (confirmaPedidoCompradoPage.linkMeusPedidos.isDisplayed()).toBe(true);
										expect (confirmaPedidoCompradoPage.boxAcompanhamentoPedido.isPresent()).toBe(true);
										expect (confirmaPedidoCompradoPage.logoConfirmacao.isPresent()).toBe(true);
										expect (confirmaPedidoCompradoPage.tituloResumoPedido.isPresent()).toBe(true);
										expect (confirmaPedidoCompradoPage.sectionEnderecoEntrega.isPresent()).toBe(true);
										expect (confirmaPedidoCompradoPage.sectionEnderecoCobranca.isPresent()).toBe(true);
										expect (confirmaPedidoCompradoPage.sectionFormaEntrega.isPresent()).toBe(true);
										expect (confirmaPedidoCompradoPage.sectionFormaPagamento.isPresent()).toBe(true);
										expect (confirmaPedidoCompradoPage.sectionItens.isPresent()).toBe(true);
									} else {
										console.log('forma de pagamento CC Pagar.Me deve ser configurada no back-end!');
									};
								});
							} else {
								finalizarCompraPage.radioPACCorreios.isPresent().then (function (checkedPAC) {
									if (checkedPAC === true) {
										console.log ('A forma de pagamento PAC Correios foi acionada.');
										finalizarCompraPage.selecionaOptionPACCorreios();
										finalizarCompraPage.clickSeguirSectionFormaPagamento();
										browser.driver.sleep(500);
										pagarmePage.optionPagarMeCC.isPresent().then (function (PagarMeHabilit) {
											if (PagarMeHabilit === true) {
												console.log('forma de pagamento CC Pagar.Me foi acionada.');
												pagarmePage.selecionaFormaPagCCPagarMe();
												pagarmePage.selecionaPrimeiraParcela();
												pagarmePage.preencheDadosDoCCPagarMe('4024007169408340','TESTE PAGARMECC', '12', '2019','504');
												finalizarCompraPage.clickSeguirFinalizarCompra();
												finalizarCompraPage.clickFinalizarPedido();
												helper.waitElementVisibility(confirmaPedidoCompradoPage.tituloAcompanheSeuPedido);										
												expect (confirmaPedidoCompradoPage.tituloAcompanheSeuPedido.isPresent()).toBe(true);
												expect (confirmaPedidoCompradoPage.linhaProgressoConfirmacao.getCssValue('color')).toEqual('rgba(255, 215, 151, 1)');
												expect (confirmaPedidoCompradoPage.linkMeusPedidos.isDisplayed()).toBe(true);
												expect (confirmaPedidoCompradoPage.boxAcompanhamentoPedido.isPresent()).toBe(true);
												expect (confirmaPedidoCompradoPage.logoConfirmacao.isPresent()).toBe(true);
												expect (confirmaPedidoCompradoPage.tituloResumoPedido.isPresent()).toBe(true);
												expect (confirmaPedidoCompradoPage.sectionEnderecoEntrega.isPresent()).toBe(true);
												expect (confirmaPedidoCompradoPage.sectionEnderecoCobranca.isPresent()).toBe(true);
												expect (confirmaPedidoCompradoPage.sectionFormaEntrega.isPresent()).toBe(true);
												expect (confirmaPedidoCompradoPage.sectionFormaPagamento.isPresent()).toBe(true);
												expect (confirmaPedidoCompradoPage.sectionItens.isPresent()).toBe(true);
											} else {
												console.log('forma de pagamento CC Pagar.Me deve ser configurada no back-end!');
											};
										});
									} else {
										console.log ('a base não contém as formas de entrega frete grátis ou PAC e por isso, não foi possíve dar andamento aos testes.');
									};
								});
							};
						});
					} else {
						console.log('login realizado, mas, não tem item no carrinho. Itens serão adicionados.');
						menuPage.url();
						helper.waitElementVisibility(homePage.gridInitProdutos);
						homePage.selecionaPrimeiroProdListado();
						helper.waitElementVisibility(detalheProdutoPage.produtoVisitado);
						carrinhoComprasPage.addProdutVisitadoCarrinhho();
						helper.waitElementVisibility(carrinhoComprasPage.primeiroProdCarrinho);
						carrinhoComprasPage.clickFinalizarCompra();		
						browser.driver.sleep(800);
						finalizarCompraPage.radioEntregaGratis.isPresent().then (function (checkedFreteGratis) {
							if (checkedFreteGratis === true) {
								console.log('frete grátis adicionado.');
								finalizarCompraPage.selecionaOptionFreteGratis();
								finalizarCompraPage.clickSeguirSectionFormaPagamento();
								browser.driver.sleep(500);
								pagarmePage.optionPagarMeCC.isPresent().then (function (PagarMeHabilit) {
									if (PagarMeHabilit === true) {
										console.log('CC Pagar.Me foi adicionado');
										pagarmePage.selecionaFormaPagCCPagarMe();
										pagarmePage.selecionaPrimeiraParcela();
										pagarmePage.preencheDadosDoCCPagarMe('4024007169408340','TESTE PAGARMECC', '12', '2019','504');
										finalizarCompraPage.clickSeguirFinalizarCompra();
										finalizarCompraPage.clickFinalizarPedido();
										helper.waitElementVisibility(confirmaPedidoCompradoPage.tituloAcompanheSeuPedido);										
										expect (confirmaPedidoCompradoPage.tituloAcompanheSeuPedido.isPresent()).toBe(true);
										expect (confirmaPedidoCompradoPage.linhaProgressoConfirmacao.getCssValue('color')).toEqual('rgba(255, 215, 151, 1)');
										expect (confirmaPedidoCompradoPage.linkMeusPedidos.isDisplayed()).toBe(true);
										expect (confirmaPedidoCompradoPage.boxAcompanhamentoPedido.isPresent()).toBe(true);
										expect (confirmaPedidoCompradoPage.logoConfirmacao.isPresent()).toBe(true);
										expect (confirmaPedidoCompradoPage.tituloResumoPedido.isPresent()).toBe(true);
										expect (confirmaPedidoCompradoPage.sectionEnderecoEntrega.isPresent()).toBe(true);
										expect (confirmaPedidoCompradoPage.sectionEnderecoCobranca.isPresent()).toBe(true);
										expect (confirmaPedidoCompradoPage.sectionFormaEntrega.isPresent()).toBe(true);
										expect (confirmaPedidoCompradoPage.sectionFormaPagamento.isPresent()).toBe(true);
										expect (confirmaPedidoCompradoPage.sectionItens.isPresent()).toBe(true);
									} else {
										console.log('forma de pagamento CC Pagar.Me deve ser configurada no back-end!');
									};
								});
							} else {
								console.log('Opção de entrega grátis não habilitada.');
								finalizarCompraPage.radioPACCorreios.isPresent().then (function (checkedPAC) {
									if (checkedPAC === true) {
										console.log('Será utilizado o método de entrega PAC Correios.');
										finalizarCompraPage.selecionaOptionPACCorreios();
										finalizarCompraPage.clickSeguirSectionFormaPagamento();
										browser.driver.sleep(500);
										pagarmePage.optionPagarMeCC.isPresent().then (function (PagarMeHabilit) {
											if (PagarMeHabilit === true) {
												console.log('CC Pagar.Me foi adicionado');
												pagarmePage.selecionaFormaPagCCPagarMe();
												pagarmePage.selecionaPrimeiraParcela();
												pagarmePage.preencheDadosDoCCPagarMe('4024007169408340','TESTE PAGARMECC', '12', '2019','504');
												finalizarCompraPage.clickSeguirFinalizarCompra();
												finalizarCompraPage.clickFinalizarPedido();
												helper.waitElementVisibility(confirmaPedidoCompradoPage.tituloAcompanheSeuPedido);										
												expect (confirmaPedidoCompradoPage.tituloAcompanheSeuPedido.isPresent()).toBe(true);
												expect (confirmaPedidoCompradoPage.linhaProgressoConfirmacao.getCssValue('color')).toEqual('rgba(255, 215, 151, 1)');
												expect (confirmaPedidoCompradoPage.linkMeusPedidos.isDisplayed()).toBe(true);
												expect (confirmaPedidoCompradoPage.boxAcompanhamentoPedido.isPresent()).toBe(true);
												expect (confirmaPedidoCompradoPage.logoConfirmacao.isPresent()).toBe(true);
												expect (confirmaPedidoCompradoPage.tituloResumoPedido.isPresent()).toBe(true);
												expect (confirmaPedidoCompradoPage.sectionEnderecoEntrega.isPresent()).toBe(true);
												expect (confirmaPedidoCompradoPage.sectionEnderecoCobranca.isPresent()).toBe(true);
												expect (confirmaPedidoCompradoPage.sectionFormaEntrega.isPresent()).toBe(true);
												expect (confirmaPedidoCompradoPage.sectionFormaPagamento.isPresent()).toBe(true);
												expect (confirmaPedidoCompradoPage.sectionItens.isPresent()).toBe(true);
											} else {
												console.log('forma de pagamento CC Pagar.Me deve ser configurada no back-end!');
											};

										});
									} else {
										console.log ('a base não contém as formas de entrega frete grátis ou PAC e por isso, não foi possíve dar andamento aos testes.');
									};
								});
							};
						});							
					};
				});
			};
		});
	});

	it ('7.2 Boleto Pagar.Me - Finalizar Compra e verificar o status do pedido.', function() {
		//Teste depende do cadastro de usuário ter sido realizado e trata-se utiliza parte do código do item 4.4, logo, manutenção no mesmo deve ser replicada para este teste.
		menuPage.url();
		menuPage.linkMinhaContaOptionMenu.isPresent().then (function(linkMinhaConta){
			if (linkMinhaConta === true) {
				console.log('usuário logado');
				menuPage.clickCarrinhoDeCompras();	
				browser.driver.sleep(500);
				carrinhoComprasPage.primeiroProdCarrinho.isPresent().then (function(itemCarrinho){
					if (itemCarrinho === true) {
						console.log('usuário logado e possui item no carrinho');
						carrinhoComprasPage.clickFinalizarCompra();		
						browser.driver.sleep(500);
						finalizarCompraPage.radioEntregaGratis.isPresent().then (function (checkedFreteGratis) {
							if (checkedFreteGratis === true) {
								console.log('usuário logado, possui item no carrinho e tem a opção de utilizar frete grátis.');
								finalizarCompraPage.selecionaOptionFreteGratis();
								finalizarCompraPage.clickSeguirSectionFormaPagamento();
								browser.driver.sleep(500);
								pagarmePage.optionPagarMeBoleto.isPresent().then (function (PagarMeHabilit) {
									if (PagarMeHabilit === true) {
										console.log('Boleto Pagar.Me foi adicionado');
										pagarmePage.selecionaFormPagBoleto();
										finalizarCompraPage.clickSeguirFinalizarCompra();
										finalizarCompraPage.clickFinalizarPedido();
										helper.waitElementVisibility(confirmaPedidoCompradoPage.tituloAcompanheSeuPedido);										
										expect (confirmaPedidoCompradoPage.tituloAcompanheSeuPedido.isPresent()).toBe(true);
										expect (confirmaPedidoCompradoPage.linhaProgressoConfirmacao.getCssValue('color')).toEqual('rgba(255, 215, 151, 1)');
										expect (confirmaPedidoCompradoPage.linkMeusPedidos.isDisplayed()).toBe(true);
										expect (confirmaPedidoCompradoPage.boxAcompanhamentoPedido.isPresent()).toBe(true);
										expect (confirmaPedidoCompradoPage.logoConfirmacao.isPresent()).toBe(true);
										expect (confirmaPedidoCompradoPage.msgImprimaSeuBoleto.isPresent()).toBe(true);
										expect (confirmaPedidoCompradoPage.tituloResumoPedido.isPresent()).toBe(true);
										expect (confirmaPedidoCompradoPage.sectionEnderecoEntrega.isPresent()).toBe(true);
										expect (confirmaPedidoCompradoPage.sectionEnderecoCobranca.isPresent()).toBe(true);
										expect (confirmaPedidoCompradoPage.sectionFormaEntrega.isPresent()).toBe(true);
										expect (confirmaPedidoCompradoPage.sectionFormaPagamento.isPresent()).toBe(true);
										expect (confirmaPedidoCompradoPage.sectionItens.isPresent()).toBe(true);
									} else {
										console.log('forma de pagamento Pagar.Me - Boleto deve ser configurada no back-end!');
									};
								});
							} else {
								finalizarCompraPage.radioPACCorreios.isPresent().then (function (checkedPAC) {
									if (checkedPAC === true) {
										console.log('usuário logado, possui item no carrinho e vai utilizar o método de entrega PAC Correios.');
										finalizarCompraPage.selecionaOptionPACCorreios();
										finalizarCompraPage.clickSeguirSectionFormaPagamento();
										browser.driver.sleep(500);
										pagarmePage.optionPagarMeBoleto.isPresent().then (function (PagarMeHabilit) {
											if (PagarMeHabilit === true) {
												console.log('Boleto Pagar.Me foi adicionado');
												pagarmePage.selecionaFormPagBoleto();
												finalizarCompraPage.clickSeguirFinalizarCompra();
												finalizarCompraPage.clickFinalizarPedido();
												helper.waitElementVisibility(confirmaPedidoCompradoPage.tituloAcompanheSeuPedido);										
												expect (confirmaPedidoCompradoPage.tituloAcompanheSeuPedido.isPresent()).toBe(true);
												expect (confirmaPedidoCompradoPage.linhaProgressoConfirmacao.getCssValue('color')).toEqual('rgba(255, 215, 151, 1)');
												expect (confirmaPedidoCompradoPage.linkMeusPedidos.isDisplayed()).toBe(true);
												expect (confirmaPedidoCompradoPage.boxAcompanhamentoPedido.isPresent()).toBe(true);
												expect (confirmaPedidoCompradoPage.logoConfirmacao.isPresent()).toBe(true);
												expect (confirmaPedidoCompradoPage.msgImprimaSeuBoleto.isPresent()).toBe(true);
												expect (confirmaPedidoCompradoPage.tituloResumoPedido.isPresent()).toBe(true);
												expect (confirmaPedidoCompradoPage.sectionEnderecoEntrega.isPresent()).toBe(true);
												expect (confirmaPedidoCompradoPage.sectionEnderecoCobranca.isPresent()).toBe(true);
												expect (confirmaPedidoCompradoPage.sectionFormaEntrega.isPresent()).toBe(true);
												expect (confirmaPedidoCompradoPage.sectionFormaPagamento.isPresent()).toBe(true);
												expect (confirmaPedidoCompradoPage.sectionItens.isPresent()).toBe(true);
											} else {
												console.log('forma de pagamento Pagar.Me - Boleto deve ser configurada no back-end!');
											};
										});
									} else {
										console.log ('a base de dados não contém as formas de entrega frete grátis ou PAC e por isso, não foi possíve dar andamento aos testes.');
									};
								});
							};
						});
					} else { 
						console.log('Usuário está logado, mas, não tem item no carrinho, logo os mesmos serão adicionados.');
						menuPage.url();
						helper.waitElementVisibility(homePage.gridInitProdutos);
						homePage.selecionaPrimeiroProdListado();
						helper.waitElementVisibility(detalheProdutoPage.produtoVisitado);
						carrinhoComprasPage.addProdutVisitadoCarrinhho();
						helper.waitElementVisibility(carrinhoComprasPage.primeiroProdCarrinho);
						carrinhoComprasPage.clickFinalizarCompra();	
						browser.driver.sleep(500);	
						finalizarCompraPage.radioEntregaGratis.isPresent().then (function (checkedFreteGratis) { 
							if (checkedFreteGratis === true) {
								console.log('Usuário logado, frete grátis adicionado.');
								finalizarCompraPage.selecionaOptionFreteGratis();
								finalizarCompraPage.clickSeguirSectionFormaPagamento();
								browser.driver.sleep(1000);
								pagarmePage.optionPagarMeBoleto.isPresent().then (function (PagarMeHabilit) {
									if (PagarMeHabilit === true) {
										console.log('Boleto Pagar.Me foi adicionado');
										pagarmePage.selecionaFormPagBoleto();
										finalizarCompraPage.clickSeguirFinalizarCompra();
										finalizarCompraPage.clickFinalizarPedido();
										helper.waitElementVisibility(confirmaPedidoCompradoPage.tituloAcompanheSeuPedido);										
										expect (confirmaPedidoCompradoPage.tituloAcompanheSeuPedido.isPresent()).toBe(true);
										expect (confirmaPedidoCompradoPage.linhaProgressoConfirmacao.getCssValue('color')).toEqual('rgba(255, 215, 151, 1)');
										expect (confirmaPedidoCompradoPage.linkMeusPedidos.isDisplayed()).toBe(true);
										expect (confirmaPedidoCompradoPage.boxAcompanhamentoPedido.isPresent()).toBe(true);
										expect (confirmaPedidoCompradoPage.logoConfirmacao.isPresent()).toBe(true);
										expect (confirmaPedidoCompradoPage.msgImprimaSeuBoleto.isPresent()).toBe(true);
										expect (confirmaPedidoCompradoPage.tituloResumoPedido.isPresent()).toBe(true);
										expect (confirmaPedidoCompradoPage.sectionEnderecoEntrega.isPresent()).toBe(true);
										expect (confirmaPedidoCompradoPage.sectionEnderecoCobranca.isPresent()).toBe(true);
										expect (confirmaPedidoCompradoPage.sectionFormaEntrega.isPresent()).toBe(true);
										expect (confirmaPedidoCompradoPage.sectionFormaPagamento.isPresent()).toBe(true);
										expect (confirmaPedidoCompradoPage.sectionItens.isPresent()).toBe(true);
									} else {
										console.log('forma de pagamento Pagar.Me - Boleto deve ser configurada no back-end!');
									};
								});
							} else {
								console.log('usuário logado, mas, não possui opção de frete grátis disponível.');
								finalizarCompraPage.radioPACCorreios.isPresent().then (function (checkedPAC) {
									if (checkedPAC === true) {
										console.log('Usuário logado e o método PAC Correios foi acionada.');
										finalizarCompraPage.selecionaOptionPACCorreios();
										finalizarCompraPage.clickSeguirSectionFormaPagamento();
										pagarmePage.optionPagarMeBoleto.isPresent().then (function (PagarMeHabilit) {
											if (PagarMeHabilit === true) {
												console.log('Boleto Pagar.Me foi adicionado');
												pagarmePage.selecionaFormPagBoleto();
												finalizarCompraPage.clickSeguirFinalizarCompra();
												finalizarCompraPage.clickFinalizarPedido();
												helper.waitElementVisibility(confirmaPedidoCompradoPage.tituloAcompanheSeuPedido);										
												expect (confirmaPedidoCompradoPage.tituloAcompanheSeuPedido.isPresent()).toBe(true);
												expect (confirmaPedidoCompradoPage.linhaProgressoConfirmacao.getCssValue('color')).toEqual('rgba(255, 215, 151, 1)');
												expect (confirmaPedidoCompradoPage.linkMeusPedidos.isDisplayed()).toBe(true);
												expect (confirmaPedidoCompradoPage.boxAcompanhamentoPedido.isPresent()).toBe(true);
												expect (confirmaPedidoCompradoPage.logoConfirmacao.isPresent()).toBe(true);
												expect (confirmaPedidoCompradoPage.msgImprimaSeuBoleto.isPresent()).toBe(true);
												expect (confirmaPedidoCompradoPage.tituloResumoPedido.isPresent()).toBe(true);
												expect (confirmaPedidoCompradoPage.sectionEnderecoEntrega.isPresent()).toBe(true);
												expect (confirmaPedidoCompradoPage.sectionEnderecoCobranca.isPresent()).toBe(true);
												expect (confirmaPedidoCompradoPage.sectionFormaEntrega.isPresent()).toBe(true);
												expect (confirmaPedidoCompradoPage.sectionFormaPagamento.isPresent()).toBe(true);
												expect (confirmaPedidoCompradoPage.sectionItens.isPresent()).toBe(true);
											} else {
												console.log('forma de pagamento Pagar.Me - Boleto deve ser configurada no back-end!');
											};
										});
									} else {
										console.log ('a base não contém as formas de entrega frete grátis ou PAC e por isso, não foi possíve dar andamento aos testes.');
									};
								});
							};
						});
					};
				});
			} else {
				console.log('usuário deslogado, logo, login será realizado com os dados do usuário criado no teste automatizado.');
				menuPage.acessaPagLogin();
				browser.driver.sleep(500);
				autenticacaoPage.login ('tests@teste.com.br', '1472589');
				autenticacaoPage.clickBtnLogin();
				menuPage.url();
				menuPage.clickCarrinhoDeCompras();	
				browser.driver.sleep(500);
				carrinhoComprasPage.primeiroProdCarrinho.isPresent().then (function(itemCarrinho){
					if (itemCarrinho === true) {
						console.log('após login, verifica que existe item no carrinho.');
						carrinhoComprasPage.clickFinalizarCompra();		
						browser.driver.sleep(500);
						finalizarCompraPage.radioEntregaGratis.isPresent().then (function (checkedFreteGratis) {
							if (checkedFreteGratis === true) {
								console.log('Frete grátis foi acionado.');
								finalizarCompraPage.selecionaOptionFreteGratis();
								finalizarCompraPage.clickSeguirSectionFormaPagamento();
								pagarmePage.optionPagarMeBoleto.isPresent().then (function (PagarMeHabilit) {
									if (PagarMeHabilit === true) {
										console.log('Boleto Pagar.Me foi adicionado');
										pagarmePage.selecionaFormPagBoleto();
										finalizarCompraPage.clickSeguirFinalizarCompra();
										finalizarCompraPage.clickFinalizarPedido();
										helper.waitElementVisibility(confirmaPedidoCompradoPage.tituloAcompanheSeuPedido);										
										expect (confirmaPedidoCompradoPage.tituloAcompanheSeuPedido.isPresent()).toBe(true);
										expect (confirmaPedidoCompradoPage.linhaProgressoConfirmacao.getCssValue('color')).toEqual('rgba(255, 215, 151, 1)');
										expect (confirmaPedidoCompradoPage.linkMeusPedidos.isDisplayed()).toBe(true);
										expect (confirmaPedidoCompradoPage.boxAcompanhamentoPedido.isPresent()).toBe(true);
										expect (confirmaPedidoCompradoPage.logoConfirmacao.isPresent()).toBe(true);
										expect (confirmaPedidoCompradoPage.msgImprimaSeuBoleto.isPresent()).toBe(true);
										expect (confirmaPedidoCompradoPage.tituloResumoPedido.isPresent()).toBe(true);
										expect (confirmaPedidoCompradoPage.sectionEnderecoEntrega.isPresent()).toBe(true);
										expect (confirmaPedidoCompradoPage.sectionEnderecoCobranca.isPresent()).toBe(true);
										expect (confirmaPedidoCompradoPage.sectionFormaEntrega.isPresent()).toBe(true);
										expect (confirmaPedidoCompradoPage.sectionFormaPagamento.isPresent()).toBe(true);
										expect (confirmaPedidoCompradoPage.sectionItens.isPresent()).toBe(true);
									} else {
										console.log('forma de pagamento Pagar.Me - Boleto deve ser configurada no back-end!');
									};
								});
							} else {
								finalizarCompraPage.radioPACCorreios.isPresent().then (function (checkedPAC) {
									if (checkedPAC === true) {
										console.log ('A forma de pagamento PAC Correios foi acionada.');
										finalizarCompraPage.selecionaOptionPACCorreios();
										finalizarCompraPage.clickSeguirSectionFormaPagamento();
										browser.driver.sleep(500);
										pagarmePage.optionPagarMeBoleto.isPresent().then (function (PagarMeHabilit) {
											if (PagarMeHabilit === true) {
												console.log('Boleto Pagar.Me foi adicionado');
												pagarmePage.selecionaFormPagBoleto();
												finalizarCompraPage.clickSeguirFinalizarCompra();
												finalizarCompraPage.clickFinalizarPedido();
												helper.waitElementVisibility(confirmaPedidoCompradoPage.tituloAcompanheSeuPedido);										
												expect (confirmaPedidoCompradoPage.tituloAcompanheSeuPedido.isPresent()).toBe(true);
												expect (confirmaPedidoCompradoPage.linhaProgressoConfirmacao.getCssValue('color')).toEqual('rgba(255, 215, 151, 1)');
												expect (confirmaPedidoCompradoPage.linkMeusPedidos.isDisplayed()).toBe(true);
												expect (confirmaPedidoCompradoPage.boxAcompanhamentoPedido.isPresent()).toBe(true);
												expect (confirmaPedidoCompradoPage.logoConfirmacao.isPresent()).toBe(true);
												expect (confirmaPedidoCompradoPage.msgImprimaSeuBoleto.isPresent()).toBe(true);
												expect (confirmaPedidoCompradoPage.tituloResumoPedido.isPresent()).toBe(true);
												expect (confirmaPedidoCompradoPage.sectionEnderecoEntrega.isPresent()).toBe(true);
												expect (confirmaPedidoCompradoPage.sectionEnderecoCobranca.isPresent()).toBe(true);
												expect (confirmaPedidoCompradoPage.sectionFormaEntrega.isPresent()).toBe(true);
												expect (confirmaPedidoCompradoPage.sectionFormaPagamento.isPresent()).toBe(true);
												expect (confirmaPedidoCompradoPage.sectionItens.isPresent()).toBe(true);
											} else {
												console.log('forma de pagamento Pagar.Me - Boleto deve ser configurada no back-end!');
											};
										});
									} else {
										console.log ('a base não contém as formas de entrega frete grátis ou PAC e por isso, não foi possíve dar andamento aos testes.');
									};
								});
							};
						});
					} else {
						console.log('login realizado, mas, não tem item no carrinho. Itens serão adicionados.');
						menuPage.url();
						helper.waitElementVisibility(homePage.gridInitProdutos);
						homePage.selecionaPrimeiroProdListado();
						helper.waitElementVisibility(detalheProdutoPage.produtoVisitado);
						carrinhoComprasPage.addProdutVisitadoCarrinhho();
						helper.waitElementVisibility(carrinhoComprasPage.primeiroProdCarrinho);
						carrinhoComprasPage.clickFinalizarCompra();		
						browser.driver.sleep(800);
						finalizarCompraPage.radioEntregaGratis.isPresent().then (function (checkedFreteGratis) {
							if (checkedFreteGratis === true) {
								console.log('frete grátis adicionado.');
								finalizarCompraPage.selecionaOptionFreteGratis();
								finalizarCompraPage.clickSeguirSectionFormaPagamento();
								browser.driver.sleep(500);
								pagarmePage.optionPagarMeBoleto.isPresent().then (function (PagarMeHabilit) {
									if (PagarMeHabilit === true) {
										console.log('Boleto Pagar.Me foi adicionado');
										pagarmePage.selecionaFormPagBoleto();
										finalizarCompraPage.clickSeguirFinalizarCompra();
										finalizarCompraPage.clickFinalizarPedido();
										helper.waitElementVisibility(confirmaPedidoCompradoPage.tituloAcompanheSeuPedido);										
										expect (confirmaPedidoCompradoPage.tituloAcompanheSeuPedido.isPresent()).toBe(true);
										expect (confirmaPedidoCompradoPage.linhaProgressoConfirmacao.getCssValue('color')).toEqual('rgba(255, 215, 151, 1)');
										expect (confirmaPedidoCompradoPage.linkMeusPedidos.isDisplayed()).toBe(true);
										expect (confirmaPedidoCompradoPage.boxAcompanhamentoPedido.isPresent()).toBe(true);
										expect (confirmaPedidoCompradoPage.logoConfirmacao.isPresent()).toBe(true);
										expect (confirmaPedidoCompradoPage.msgImprimaSeuBoleto.isPresent()).toBe(true);
										expect (confirmaPedidoCompradoPage.tituloResumoPedido.isPresent()).toBe(true);
										expect (confirmaPedidoCompradoPage.sectionEnderecoEntrega.isPresent()).toBe(true);
										expect (confirmaPedidoCompradoPage.sectionEnderecoCobranca.isPresent()).toBe(true);
										expect (confirmaPedidoCompradoPage.sectionFormaEntrega.isPresent()).toBe(true);
										expect (confirmaPedidoCompradoPage.sectionFormaPagamento.isPresent()).toBe(true);
										expect (confirmaPedidoCompradoPage.sectionItens.isPresent()).toBe(true);
									} else {
										console.log('forma de pagamento Pagar.Me - Boleto deve ser configurada no back-end!');
									};
								});
							} else {
								console.log('Opção de entrega grátis não habilitada.');
								finalizarCompraPage.radioPACCorreios.isPresent().then (function (checkedPAC) {
									if (checkedPAC === true) {
										console.log('Será utilizado o método de entrega PAC Correios.');
										finalizarCompraPage.selecionaOptionPACCorreios();
										finalizarCompraPage.clickSeguirSectionFormaPagamento();
										browser.driver.sleep(500);
										pagarmePage.optionPagarMeBoleto.isPresent().then (function (PagarMeHabilit) {
											if (PagarMeHabilit === true) {
												console.log('Boleto Pagar.Me foi adicionado');
												pagarmePage.selecionaFormPagBoleto();
												finalizarCompraPage.clickSeguirFinalizarCompra();
												finalizarCompraPage.clickFinalizarPedido();
												helper.waitElementVisibility(confirmaPedidoCompradoPage.tituloAcompanheSeuPedido);										
												expect (confirmaPedidoCompradoPage.tituloAcompanheSeuPedido.isPresent()).toBe(true);
												expect (confirmaPedidoCompradoPage.linhaProgressoConfirmacao.getCssValue('color')).toEqual('rgba(255, 215, 151, 1)');
												expect (confirmaPedidoCompradoPage.linkMeusPedidos.isDisplayed()).toBe(true);
												expect (confirmaPedidoCompradoPage.boxAcompanhamentoPedido.isPresent()).toBe(true);
												expect (confirmaPedidoCompradoPage.logoConfirmacao.isPresent()).toBe(true);
												expect (confirmaPedidoCompradoPage.msgImprimaSeuBoleto.isPresent()).toBe(true);
												expect (confirmaPedidoCompradoPage.tituloResumoPedido.isPresent()).toBe(true);
												expect (confirmaPedidoCompradoPage.sectionEnderecoEntrega.isPresent()).toBe(true);
												expect (confirmaPedidoCompradoPage.sectionEnderecoCobranca.isPresent()).toBe(true);
												expect (confirmaPedidoCompradoPage.sectionFormaEntrega.isPresent()).toBe(true);
												expect (confirmaPedidoCompradoPage.sectionFormaPagamento.isPresent()).toBe(true);
												expect (confirmaPedidoCompradoPage.sectionItens.isPresent()).toBe(true);
											} else {
												console.log('forma de pagamento Pagar.Me - Boleto deve ser configurada no back-end!');
											};

										});
									} else {
										console.log ('a base não contém as formas de entrega frete grátis ou PAC e por isso, não foi possíve dar andamento aos testes.');
									};
								});
							};
						});							
					};
				});
			};
		});
	});


	
	it ('7.3 CC Cielo 3.0 Nitro - Finalizar Compra e verificar o status do pedido.', function() {
		//Teste depende do cadastro de usuário ter sido realizado e trata-se utiliza parte do código do item 4.4, logo, manutenção no mesmo deve ser replicada para este teste.
		menuPage.url();
		menuPage.linkMinhaContaOptionMenu.isPresent().then (function(linkMinhaConta){
			if (linkMinhaConta === true) {
				console.log('usuário logado');
				menuPage.clickCarrinhoDeCompras();	
				browser.driver.sleep(500);
				carrinhoComprasPage.primeiroProdCarrinho.isPresent().then (function(itemCarrinho){
					if (itemCarrinho === true) {
						console.log('usuário logado e possui item no carrinho');
						carrinhoComprasPage.clickFinalizarCompra();		
						browser.driver.sleep(800);
						finalizarCompraPage.radioEntregaGratis.isPresent().then (function (checkedFreteGratis) {
							if (checkedFreteGratis === true) {
								console.log('usuário logado, possui item no carrinho e tem a opção de utilizar frete grátis.');
								finalizarCompraPage.selecionaOptionFreteGratis();
								finalizarCompraPage.clickSeguirSectionFormaPagamento();
								browser.driver.sleep(500);
								cieloPage.optionFormPagCielo.isPresent().then (function (CieloHabilit) {
									if (CieloHabilit === true) {
										console.log('CC Cielo 3.0 foi adicionado');
										cieloPage.selecionaFormaPagCielo();
										cieloPage.preencheDadosCCCielo (4024007169408340, 'TESTE CIELO', 12, 2020,504);
										cieloPage.selecionaPrimeiraParcela();
										finalizarCompraPage.clickSeguirFinalizarCompra();
										finalizarCompraPage.clickFinalizarPedido();
										helper.waitElementVisibility(confirmaPedidoCompradoPage.tituloAcompanheSeuPedido);										
										expect (confirmaPedidoCompradoPage.tituloAcompanheSeuPedido.isPresent()).toBe(true);
										expect (confirmaPedidoCompradoPage.linhaProgressoConfirmacao.getCssValue('color')).toEqual('rgba(255, 215, 151, 1)');
										expect (confirmaPedidoCompradoPage.linkMeusPedidos.isDisplayed()).toBe(true);
										expect (confirmaPedidoCompradoPage.boxAcompanhamentoPedido.isPresent()).toBe(true);
										expect (confirmaPedidoCompradoPage.logoConfirmacao.isPresent()).toBe(true);										
										expect (confirmaPedidoCompradoPage.tituloResumoPedido.isPresent()).toBe(true);
										expect (confirmaPedidoCompradoPage.sectionEnderecoEntrega.isPresent()).toBe(true);
										expect (confirmaPedidoCompradoPage.sectionEnderecoCobranca.isPresent()).toBe(true);
										expect (confirmaPedidoCompradoPage.sectionFormaEntrega.isPresent()).toBe(true);
										expect (confirmaPedidoCompradoPage.sectionFormaPagamento.isPresent()).toBe(true);
										expect (confirmaPedidoCompradoPage.sectionItens.isPresent()).toBe(true);
									} else {
										console.log('forma de pagamento CC Cielo 3.0 deve ser configurada no back-end!');
									};
								});
							} else {
								finalizarCompraPage.radioPACCorreios.isPresent().then (function (checkedPAC) {
									if (checkedPAC === true) {
										console.log('usuário logado, possui item no carrinho e vai utilizar o método de entrega PAC Correios.');
										finalizarCompraPage.selecionaOptionPACCorreios();
										finalizarCompraPage.clickSeguirSectionFormaPagamento();
										browser.driver.sleep(500);
										cieloPage.optionFormPagCielo.isPresent().then (function (CieloHabilit) {
											if (PagarMeHabilit === true) {
												console.log('CC Cielo 3.0 foi adicionado');
												cieloPage.selecionaFormaPagCielo();
												cieloPage.preencheDadosCCCielo (4024007169408340, 'TESTE CIELO', 12, 2020,504);
												cieloPage.selecionaPrimeiraParcela();
												finalizarCompraPage.clickSeguirFinalizarCompra();
												finalizarCompraPage.clickFinalizarPedido();
												helper.waitElementVisibility(confirmaPedidoCompradoPage.tituloAcompanheSeuPedido);										
												expect (confirmaPedidoCompradoPage.tituloAcompanheSeuPedido.isPresent()).toBe(true);
												expect (confirmaPedidoCompradoPage.linhaProgressoConfirmacao.getCssValue('color')).toEqual('rgba(255, 215, 151, 1)');
												expect (confirmaPedidoCompradoPage.linkMeusPedidos.isDisplayed()).toBe(true);
												expect (confirmaPedidoCompradoPage.boxAcompanhamentoPedido.isPresent()).toBe(true);
												expect (confirmaPedidoCompradoPage.logoConfirmacao.isPresent()).toBe(true);												
												expect (confirmaPedidoCompradoPage.tituloResumoPedido.isPresent()).toBe(true);
												expect (confirmaPedidoCompradoPage.sectionEnderecoEntrega.isPresent()).toBe(true);
												expect (confirmaPedidoCompradoPage.sectionEnderecoCobranca.isPresent()).toBe(true);
												expect (confirmaPedidoCompradoPage.sectionFormaEntrega.isPresent()).toBe(true);
												expect (confirmaPedidoCompradoPage.sectionFormaPagamento.isPresent()).toBe(true);
												expect (confirmaPedidoCompradoPage.sectionItens.isPresent()).toBe(true);
											} else {
												console.log('forma de pagamento CC Cielo 3.0 deve ser configurada no back-end!');
											};
										});
									} else {
										console.log ('a base de dados não contém as formas de entrega frete grátis ou PAC e por isso, não foi possíve dar andamento aos testes.');
									};
								});
							};
						});
					} else { 
						console.log('Usuário está logado, mas, não tem item no carrinho, logo os mesmos serão adicionados.');
						menuPage.url();
						helper.waitElementVisibility(homePage.gridInitProdutos);
						homePage.selecionaPrimeiroProdListado();
						helper.waitElementVisibility(detalheProdutoPage.produtoVisitado);
						carrinhoComprasPage.addProdutVisitadoCarrinhho();
						helper.waitElementVisibility(carrinhoComprasPage.primeiroProdCarrinho);
						carrinhoComprasPage.clickFinalizarCompra();	
						browser.driver.sleep(500);	
						finalizarCompraPage.radioEntregaGratis.isPresent().then (function (checkedFreteGratis) { 
							if (checkedFreteGratis === true) {
								console.log('Usuário logado, frete grátis adicionado.');
								finalizarCompraPage.selecionaOptionFreteGratis();
								finalizarCompraPage.clickSeguirSectionFormaPagamento();
								browser.driver.sleep(1000);
								cieloPage.optionFormPagCielo.isPresent().then (function (CieloHabilit) {
									if (CieloHabilit === true) {
										console.log('CC Cielo 3.0 foi adicionado');
										cieloPage.selecionaFormaPagCielo();
										cieloPage.preencheDadosCCCielo (4024007169408340, 'TESTE CIELO', 12, 2020,504);
										cieloPage.selecionaPrimeiraParcela();
										finalizarCompraPage.clickSeguirFinalizarCompra();
										finalizarCompraPage.clickFinalizarPedido();
										helper.waitElementVisibility(confirmaPedidoCompradoPage.tituloAcompanheSeuPedido);										
										expect (confirmaPedidoCompradoPage.tituloAcompanheSeuPedido.isPresent()).toBe(true);
										expect (confirmaPedidoCompradoPage.linhaProgressoConfirmacao.getCssValue('color')).toEqual('rgba(255, 215, 151, 1)');
										expect (confirmaPedidoCompradoPage.linkMeusPedidos.isDisplayed()).toBe(true);
										expect (confirmaPedidoCompradoPage.boxAcompanhamentoPedido.isPresent()).toBe(true);
										expect (confirmaPedidoCompradoPage.logoConfirmacao.isPresent()).toBe(true);										
										expect (confirmaPedidoCompradoPage.tituloResumoPedido.isPresent()).toBe(true);
										expect (confirmaPedidoCompradoPage.sectionEnderecoEntrega.isPresent()).toBe(true);
										expect (confirmaPedidoCompradoPage.sectionEnderecoCobranca.isPresent()).toBe(true);
										expect (confirmaPedidoCompradoPage.sectionFormaEntrega.isPresent()).toBe(true);
										expect (confirmaPedidoCompradoPage.sectionFormaPagamento.isPresent()).toBe(true);
										expect (confirmaPedidoCompradoPage.sectionItens.isPresent()).toBe(true);
									} else {
										console.log('forma de pagamento CC Cielo 3.0 deve ser configurada no back-end!');
									};
								});
							} else {
								console.log('usuário logado, mas, não possui opção de frete grátis disponível.');
								finalizarCompraPage.radioPACCorreios.isPresent().then (function (checkedPAC) {
									if (checkedPAC === true) {
										console.log('Usuário logado e o método PAC Correios foi acionada.');
										finalizarCompraPage.selecionaOptionPACCorreios();
										finalizarCompraPage.clickSeguirSectionFormaPagamento();
										cieloPage.optionFormPagCielo.isPresent().then (function (CieloHabilit) {
											if (CieloHabilit === true) {
												console.log('CC Cielo 3.0 foi adicionado');
												cieloPage.selecionaFormaPagCielo();
												cieloPage.preencheDadosCCCielo (4024007169408340, 'TESTE CIELO', 12, 2020,504);
												cieloPage.selecionaPrimeiraParcela();
												finalizarCompraPage.clickSeguirFinalizarCompra();
												finalizarCompraPage.clickFinalizarPedido();
												helper.waitElementVisibility(confirmaPedidoCompradoPage.tituloAcompanheSeuPedido);										
												expect (confirmaPedidoCompradoPage.tituloAcompanheSeuPedido.isPresent()).toBe(true);
												expect (confirmaPedidoCompradoPage.linhaProgressoConfirmacao.getCssValue('color')).toEqual('rgba(255, 215, 151, 1)');
												expect (confirmaPedidoCompradoPage.linkMeusPedidos.isDisplayed()).toBe(true);
												expect (confirmaPedidoCompradoPage.boxAcompanhamentoPedido.isPresent()).toBe(true);
												expect (confirmaPedidoCompradoPage.logoConfirmacao.isPresent()).toBe(true);												
												expect (confirmaPedidoCompradoPage.tituloResumoPedido.isPresent()).toBe(true);
												expect (confirmaPedidoCompradoPage.sectionEnderecoEntrega.isPresent()).toBe(true);
												expect (confirmaPedidoCompradoPage.sectionEnderecoCobranca.isPresent()).toBe(true);
												expect (confirmaPedidoCompradoPage.sectionFormaEntrega.isPresent()).toBe(true);
												expect (confirmaPedidoCompradoPage.sectionFormaPagamento.isPresent()).toBe(true);
												expect (confirmaPedidoCompradoPage.sectionItens.isPresent()).toBe(true);
											} else {
												console.log('forma de pagamento CC Cielo 3.0 deve ser configurada no back-end!');
											};
										});
									} else {
										console.log ('a base não contém as formas de entrega frete grátis ou PAC e por isso, não foi possíve dar andamento aos testes.');
									};
								});
							};
						});
					};
				});
			} else {
				console.log('usuário deslogado, logo, login será realizado com os dados do usuário criado no teste automatizado.');
				menuPage.acessaPagLogin();
				browser.driver.sleep(800);
				autenticacaoPage.login ('tests@teste.com.br', '1472589');
				autenticacaoPage.clickBtnLogin();
				menuPage.url();
				menuPage.clickCarrinhoDeCompras();	
				browser.driver.sleep(800);
				carrinhoComprasPage.primeiroProdCarrinho.isPresent().then (function(itemCarrinho){
					if (itemCarrinho === true) {
						console.log('após login, verifica que existe item no carrinho.');
						carrinhoComprasPage.clickFinalizarCompra();		
						browser.driver.sleep(500);
						finalizarCompraPage.radioEntregaGratis.isPresent().then (function (checkedFreteGratis) {
							if (checkedFreteGratis === true) {
								console.log('Frete grátis foi acionado.');
								finalizarCompraPage.selecionaOptionFreteGratis();
								finalizarCompraPage.clickSeguirSectionFormaPagamento();
								cieloPage.optionFormPagCielo.isPresent().then (function (CieloHabilit) {
									if (CieloHabilit === true) {
										console.log('CC Cielo 3.0 foi adicionado');
										cieloPage.selecionaFormaPagCielo();
										cieloPage.preencheDadosCCCielo(4024007169408340, 'TESTE CIELO', 12, 2020,504);
										cieloPage.selecionaPrimeiraParcela();
										finalizarCompraPage.clickSeguirFinalizarCompra();
										finalizarCompraPage.clickFinalizarPedido();
										helper.waitElementVisibility(confirmaPedidoCompradoPage.tituloAcompanheSeuPedido);										
										expect (confirmaPedidoCompradoPage.tituloAcompanheSeuPedido.isPresent()).toBe(true);
										expect (confirmaPedidoCompradoPage.linhaProgressoConfirmacao.getCssValue('color')).toEqual('rgba(255, 215, 151, 1)');
										expect (confirmaPedidoCompradoPage.linkMeusPedidos.isDisplayed()).toBe(true);
										expect (confirmaPedidoCompradoPage.boxAcompanhamentoPedido.isPresent()).toBe(true);
										expect (confirmaPedidoCompradoPage.logoConfirmacao.isPresent()).toBe(true);		
										expect (confirmaPedidoCompradoPage.tituloResumoPedido.isPresent()).toBe(true);
										expect (confirmaPedidoCompradoPage.sectionEnderecoEntrega.isPresent()).toBe(true);
										expect (confirmaPedidoCompradoPage.sectionEnderecoCobranca.isPresent()).toBe(true);
										expect (confirmaPedidoCompradoPage.sectionFormaEntrega.isPresent()).toBe(true);
										expect (confirmaPedidoCompradoPage.sectionFormaPagamento.isPresent()).toBe(true);
										expect (confirmaPedidoCompradoPage.sectionItens.isPresent()).toBe(true);
									} else {
										console.log('forma de pagamento CC Cielo 3.0 deve ser configurada no back-end!');
									};
								});
							} else {
								finalizarCompraPage.radioPACCorreios.isPresent().then (function (checkedPAC) {
									if (checkedPAC === true) {
										console.log ('A forma de pagamento PAC Correios foi acionada.');
										finalizarCompraPage.selecionaOptionPACCorreios();
										finalizarCompraPage.clickSeguirSectionFormaPagamento();
										browser.driver.sleep(500);
										cieloPage.optionFormPagCielo.isPresent().then (function (CieloHabilit) {
											if (CieloHabilit === true) {
												console.log('CC Cielo 3.0 foi adicionado');
												cieloPage.selecionaFormaPagCielo();
												cieloPage.preencheDadosCCCielo(4024007169408340, 'TESTE CIELO', 12, 2020,504);
												cieloPage.selecionaPrimeiraParcela();
												finalizarCompraPage.clickSeguirFinalizarCompra();
												finalizarCompraPage.clickFinalizarPedido();
												helper.waitElementVisibility(confirmaPedidoCompradoPage.tituloAcompanheSeuPedido);										
												expect (confirmaPedidoCompradoPage.tituloAcompanheSeuPedido.isPresent()).toBe(true);
												expect (confirmaPedidoCompradoPage.linhaProgressoConfirmacao.getCssValue('color')).toEqual('rgba(255, 215, 151, 1)');
												expect (confirmaPedidoCompradoPage.linkMeusPedidos.isDisplayed()).toBe(true);
												expect (confirmaPedidoCompradoPage.boxAcompanhamentoPedido.isPresent()).toBe(true);
												expect (confirmaPedidoCompradoPage.logoConfirmacao.isPresent()).toBe(true);												
												expect (confirmaPedidoCompradoPage.tituloResumoPedido.isPresent()).toBe(true);
												expect (confirmaPedidoCompradoPage.sectionEnderecoEntrega.isPresent()).toBe(true);
												expect (confirmaPedidoCompradoPage.sectionEnderecoCobranca.isPresent()).toBe(true);
												expect (confirmaPedidoCompradoPage.sectionFormaEntrega.isPresent()).toBe(true);
												expect (confirmaPedidoCompradoPage.sectionFormaPagamento.isPresent()).toBe(true);
												expect (confirmaPedidoCompradoPage.sectionItens.isPresent()).toBe(true);
											} else {
												console.log('forma de pagamento CC Cielo 3.0 deve ser configurada no back-end!');
											};
										});
									} else {
										console.log ('a base não contém as formas de entrega frete grátis ou PAC e por isso, não foi possíve dar andamento aos testes.');
									};
								});
							};
						});
					} else {
						console.log('login realizado, mas, não tem item no carrinho. Itens serão adicionados.');
						menuPage.url();
						helper.waitElementVisibility(homePage.gridInitProdutos);
						homePage.selecionaPrimeiroProdListado();
						helper.waitElementVisibility(detalheProdutoPage.produtoVisitado);
						carrinhoComprasPage.addProdutVisitadoCarrinhho();
						helper.waitElementVisibility(carrinhoComprasPage.primeiroProdCarrinho);
						carrinhoComprasPage.clickFinalizarCompra();		
						browser.driver.sleep(800);
						finalizarCompraPage.radioEntregaGratis.isPresent().then (function (checkedFreteGratis) {
							if (checkedFreteGratis === true) {
								console.log('frete grátis adicionado.');
								finalizarCompraPage.selecionaOptionFreteGratis();
								finalizarCompraPage.clickSeguirSectionFormaPagamento();
								browser.driver.sleep(500);
								cieloPage.optionFormPagCielo.isPresent().then (function (CieloHabilit) {
									if (CieloHabilit === true) {
										console.log('CC Cielo 3.0 foi adicionado');
										cieloPage.selecionaFormaPagCielo();
										cieloPage.preencheDadosCCCielo (4024007169408340, 'TESTE CIELO', 12, 2020,504);
										cieloPage.selecionaPrimeiraParcela();
										finalizarCompraPage.clickSeguirFinalizarCompra();
										finalizarCompraPage.clickFinalizarPedido();
										helper.waitElementVisibility(confirmaPedidoCompradoPage.tituloAcompanheSeuPedido);										
										expect (confirmaPedidoCompradoPage.tituloAcompanheSeuPedido.isPresent()).toBe(true);
										expect (confirmaPedidoCompradoPage.linhaProgressoConfirmacao.getCssValue('color')).toEqual('rgba(255, 215, 151, 1)');
										expect (confirmaPedidoCompradoPage.linkMeusPedidos.isDisplayed()).toBe(true);
										expect (confirmaPedidoCompradoPage.boxAcompanhamentoPedido.isPresent()).toBe(true);
										expect (confirmaPedidoCompradoPage.logoConfirmacao.isPresent()).toBe(true);
										expect (confirmaPedidoCompradoPage.tituloResumoPedido.isPresent()).toBe(true);
										expect (confirmaPedidoCompradoPage.sectionEnderecoEntrega.isPresent()).toBe(true);
										expect (confirmaPedidoCompradoPage.sectionEnderecoCobranca.isPresent()).toBe(true);
										expect (confirmaPedidoCompradoPage.sectionFormaEntrega.isPresent()).toBe(true);
										expect (confirmaPedidoCompradoPage.sectionFormaPagamento.isPresent()).toBe(true);
										expect (confirmaPedidoCompradoPage.sectionItens.isPresent()).toBe(true);
									} else {
										console.log('forma de pagamento CC Cielo 3.0 deve ser configurada no back-end!');
									};
								});
							} else {
								console.log('Opção de entrega grátis não habilitada.');
								finalizarCompraPage.radioPACCorreios.isPresent().then (function (checkedPAC) {
									if (checkedPAC === true) {
										console.log('Será utilizado o método de entrega PAC Correios.');
										finalizarCompraPage.selecionaOptionPACCorreios();
										finalizarCompraPage.clickSeguirSectionFormaPagamento();
										browser.driver.sleep(500);
										cieloPage.optionFormPagCielo.isPresent().then (function (CieloHabilit) {
											if (CieloHabilit === true) {
												console.log('CC Cielo 3.0 foi adicionado');
												cieloPage.selecionaFormaPagCielo();
												cieloPage.preencheDadosCCCielo (4024007169408340, 'TESTE CIELO', 12, 2020,504);
												cieloPage.selecionaPrimeiraParcela();
												finalizarCompraPage.clickSeguirFinalizarCompra();
												finalizarCompraPage.clickFinalizarPedido();
												helper.waitElementVisibility(confirmaPedidoCompradoPage.tituloAcompanheSeuPedido);										
												expect (confirmaPedidoCompradoPage.tituloAcompanheSeuPedido.isPresent()).toBe(true);
												expect (confirmaPedidoCompradoPage.linhaProgressoConfirmacao.getCssValue('color')).toEqual('rgba(255, 215, 151, 1)');
												expect (confirmaPedidoCompradoPage.linkMeusPedidos.isDisplayed()).toBe(true);
												expect (confirmaPedidoCompradoPage.boxAcompanhamentoPedido.isPresent()).toBe(true);
												expect (confirmaPedidoCompradoPage.logoConfirmacao.isPresent()).toBe(true);
												expect (confirmaPedidoCompradoPage.tituloResumoPedido.isPresent()).toBe(true);
												expect (confirmaPedidoCompradoPage.sectionEnderecoEntrega.isPresent()).toBe(true);
												expect (confirmaPedidoCompradoPage.sectionEnderecoCobranca.isPresent()).toBe(true);
												expect (confirmaPedidoCompradoPage.sectionFormaEntrega.isPresent()).toBe(true);
												expect (confirmaPedidoCompradoPage.sectionFormaPagamento.isPresent()).toBe(true);
												expect (confirmaPedidoCompradoPage.sectionItens.isPresent()).toBe(true);
											} else {
												console.log('forma de pagamento CC Cielo 3.0 deve ser configurada no back-end!');
											};

										});
									} else {
										console.log ('a base não contém as formas de entrega frete grátis ou PAC e por isso, não foi possíve dar andamento aos testes.');
									};
								});
							};
						});							
					};
				});
			};
		});
	});

it ('7.4 CC PagSeguro - Finalizar Compra e verificar o status do pedido.', function() {
		//Teste depende do cadastro de usuário ter sido realizado e trata-se utiliza parte do código do item 4.4, logo, manutenção no mesmo deve ser replicada para este teste.
		funcoesGeralPage.url();
		menuPage.linkMinhaContaOptionMenu.isPresent().then (function(linkMinhaConta){
			if (linkMinhaConta === true) {
				console.log('usuário logado, deve efetuar cadastro com usuário de compra do PagSeguro.');
				helper.selecionarElemento(menuPage.linkLogout);

				//Análise da existência do usuário PagSeguro no back-end para saber se é preciso entrar ou cadastratar-se na loja
				browser.get('http://homol:5945d16a075541a5@homologacao.jn2.xyz/index.php/controle');
				autenticacaoBackEndPage.login('jn2', 'P4ssw0rd');
				browser.driver.sleep(500);
				browser.refresh();
				menuBackEndPage.acessaSubMenuGerenciarClientes();
				helper.waitElementVisibility(gerenciarClientesPage.tituloGerenciarClientes);
				gerenciarClientesPage.InformarEmailParaBusca('teste@sandbox.pagseguro.com.br');
				helper.selecionarElemento(funcoesGeralPage.btnFiltrar);
				browser.driver.sleep(1000);
				gerenciarClientesPage.valueUserPagSeguro.isPresent().then(function (status) {
					if (status === true) {
						menuPage.url();
						menuPage.acessaPagLogin();
						autenticacaoPage.login ('teste@sandbox.pagseguro.com.br', '1472589');
						autenticacaoPage.clickBtnLogin();
						helper.waitElementVisibility(menuPage.linkMinhaContaOptionMenu);
						menuPage.url();
					} else { 
						menuPage.url();
						menuPage.acessaPagLogin();
						browser.driver.sleep(800);
						autenticacaoPage.informaEmailNovoCliente('teste@sandbox.pagseguro.com.br');
						autenticacaoPage.clickBtnContinuar();
						autenticacaoPage.informaDadosPessoaisESenha('1472589', '1472589', 'TESTE PAGSEGURO', '71771102403', '31998475863');
						autenticacaoPage.informaDadosEndereco('30130009','Avenida Afonso Pena', '700', 'Cruzeiro', 'Belo Horizonte');
						autenticacaoPage.clickBtnContinuar();
						helper.waitElementVisibility(menuPage.linkMinhaContaOptionMenu);
						menuPage.url();
					};
				});
				
				//Continuar Testes
				menuPage.clickCarrinhoDeCompras();	
				browser.driver.sleep(800);
				carrinhoComprasPage.primeiroProdCarrinho.isPresent().then (function(itemCarrinho){
					if (itemCarrinho === true) {
						console.log('usuário logado e possui item no carrinho');
						carrinhoComprasPage.clickFinalizarCompra();		
						browser.driver.sleep(800);
						finalizarCompraPage.radioEntregaGratis.isPresent().then (function (checkedFreteGratis) {
							if (checkedFreteGratis === true) {
								console.log('usuário logado, possui item no carrinho e tem a opção de utilizar frete grátis.');
								finalizarCompraPage.selecionaOptionFreteGratis();
								finalizarCompraPage.clickSeguirSectionFormaPagamento();
								browser.driver.sleep(500);
								pagSeguroPage.optionFormPagCCPagSeguro.isPresent().then (function (CCPagSeguroHabilit) {
									if (CCPagSeguroHabilit === true) {
										console.log('CC PagSeguro foi adicionado');
										pagSeguroPage.selecionaFormPagCCPagSeguro();
										pagSeguroPage.preencheDadosCCPagSeguro('TESTE PAGSEGURO', 22, 12, 1964, 71771102403, 4024007169408340, 12, 2020, 504);
										pagSeguroPage.selecionaUmaParcelaPagSeguro();
										finalizarCompraPage.clickSeguirFinalizarCompra();
										finalizarCompraPage.clickFinalizarPedido();
										browser.driver.sleep(2000);
										helper.waitElementVisibility(confirmaPedidoCompradoPage.tituloAcompanheSeuPedido);										
										expect (confirmaPedidoCompradoPage.tituloAcompanheSeuPedido.isPresent()).toBe(true);
										expect (confirmaPedidoCompradoPage.linhaProgressoConfirmacao.getCssValue('color')).toEqual('rgba(255, 215, 151, 1)');
										expect (confirmaPedidoCompradoPage.linkMeusPedidos.isDisplayed()).toBe(true);
										expect (confirmaPedidoCompradoPage.boxAcompanhamentoPedido.isPresent()).toBe(true);
										expect (confirmaPedidoCompradoPage.logoConfirmacao.isPresent()).toBe(true);										
										expect (confirmaPedidoCompradoPage.tituloResumoPedido.isPresent()).toBe(true);
										expect (confirmaPedidoCompradoPage.sectionEnderecoEntrega.isPresent()).toBe(true);
										expect (confirmaPedidoCompradoPage.sectionEnderecoCobranca.isPresent()).toBe(true);
										expect (confirmaPedidoCompradoPage.sectionFormaEntrega.isPresent()).toBe(true);
										expect (confirmaPedidoCompradoPage.sectionFormaPagamento.isPresent()).toBe(true);
										expect (confirmaPedidoCompradoPage.sectionItens.isPresent()).toBe(true);
									} else {
										console.log('forma de pagamento CC PagSeguro deve ser configurada no back-end!');
									};
								});
							} else {
								finalizarCompraPage.radioPACCorreios.isPresent().then (function (checkedPAC) {
									if (checkedPAC === true) {
										console.log('usuário logado, possui item no carrinho e vai utilizar o método de entrega PAC Correios.');
										finalizarCompraPage.selecionaOptionPACCorreios();
										finalizarCompraPage.clickSeguirSectionFormaPagamento();
										browser.driver.sleep(500);
										pagSeguroPage.optionFormPagCCPagSeguro.isPresent().then (function (CCPagSeguroHabilit) {
											if (CCPagSeguroHabilit === true) {
												console.log('CC PagSeguro foi adicionado');
												pagSeguroPage.selecionaFormPagCCPagSeguro();
												pagSeguroPage.preencheDadosCCPagSeguro('TESTE PAGSEGURO', 22, 12, 1964, 71771102403, 4024007169408340, 12, 2020, 504);
												pagSeguroPage.selecionaUmaParcelaPagSeguro();
												finalizarCompraPage.clickSeguirFinalizarCompra();
												finalizarCompraPage.clickFinalizarPedido();
												browser.driver.sleep(2000);
												helper.waitElementVisibility(confirmaPedidoCompradoPage.tituloAcompanheSeuPedido);										
												expect (confirmaPedidoCompradoPage.tituloAcompanheSeuPedido.isPresent()).toBe(true);
												expect (confirmaPedidoCompradoPage.linhaProgressoConfirmacao.getCssValue('color')).toEqual('rgba(255, 215, 151, 1)');
												expect (confirmaPedidoCompradoPage.linkMeusPedidos.isDisplayed()).toBe(true);
												expect (confirmaPedidoCompradoPage.boxAcompanhamentoPedido.isPresent()).toBe(true);
												expect (confirmaPedidoCompradoPage.logoConfirmacao.isPresent()).toBe(true);												
												expect (confirmaPedidoCompradoPage.tituloResumoPedido.isPresent()).toBe(true);
												expect (confirmaPedidoCompradoPage.sectionEnderecoEntrega.isPresent()).toBe(true);
												expect (confirmaPedidoCompradoPage.sectionEnderecoCobranca.isPresent()).toBe(true);
												expect (confirmaPedidoCompradoPage.sectionFormaEntrega.isPresent()).toBe(true);
												expect (confirmaPedidoCompradoPage.sectionFormaPagamento.isPresent()).toBe(true);
												expect (confirmaPedidoCompradoPage.sectionItens.isPresent()).toBe(true);
											} else {
												console.log('forma de pagamento CC PagSeguro deve ser configurada no back-end!');
											};
										});
									} else {
										console.log ('a base de dados não contém as formas de entrega frete grátis ou PAC e por isso, não foi possíve dar andamento aos testes.');
									};
								});
							};
						});
					} else { 
						console.log('Usuário está logado, mas, não tem item no carrinho, logo os mesmos serão adicionados.');
						menuPage.url();
						helper.waitElementVisibility(homePage.gridInitProdutos);
						homePage.selecionaPrimeiroProdListado();
						helper.waitElementVisibility(detalheProdutoPage.produtoVisitado);
						carrinhoComprasPage.addProdutVisitadoCarrinhho();
						helper.waitElementVisibility(carrinhoComprasPage.primeiroProdCarrinho);
						carrinhoComprasPage.clickFinalizarCompra();	
						browser.driver.sleep(500);	
						finalizarCompraPage.radioEntregaGratis.isPresent().then (function (checkedFreteGratis) { 
							if (checkedFreteGratis === true) {
								console.log('Usuário logado, frete grátis adicionado.');
								finalizarCompraPage.selecionaOptionFreteGratis();
								finalizarCompraPage.clickSeguirSectionFormaPagamento();
								browser.driver.sleep(1000);
								pagSeguroPage.optionFormPagCCPagSeguro.isPresent().then (function (CCPagSeguroHabilit) {
									if (CCPagSeguroHabilit === true) {
										console.log('CC PagSeguro foi adicionado');
										pagSeguroPage.selecionaFormPagCCPagSeguro();
										pagSeguroPage.preencheDadosCCPagSeguro('TESTE PAGSEGURO', 22, 12, 1964, 71771102403, 4024007169408340, 12, 2020, 504);
										pagSeguroPage.selecionaUmaParcelaPagSeguro();
										finalizarCompraPage.clickSeguirFinalizarCompra();
										finalizarCompraPage.clickFinalizarPedido();
										browser.driver.sleep(2000);
										helper.waitElementVisibility(confirmaPedidoCompradoPage.tituloAcompanheSeuPedido);										
										expect (confirmaPedidoCompradoPage.tituloAcompanheSeuPedido.isPresent()).toBe(true);
										expect (confirmaPedidoCompradoPage.linhaProgressoConfirmacao.getCssValue('color')).toEqual('rgba(255, 215, 151, 1)');
										expect (confirmaPedidoCompradoPage.linkMeusPedidos.isDisplayed()).toBe(true);
										expect (confirmaPedidoCompradoPage.boxAcompanhamentoPedido.isPresent()).toBe(true);
										expect (confirmaPedidoCompradoPage.logoConfirmacao.isPresent()).toBe(true);										
										expect (confirmaPedidoCompradoPage.tituloResumoPedido.isPresent()).toBe(true);
										expect (confirmaPedidoCompradoPage.sectionEnderecoEntrega.isPresent()).toBe(true);
										expect (confirmaPedidoCompradoPage.sectionEnderecoCobranca.isPresent()).toBe(true);
										expect (confirmaPedidoCompradoPage.sectionFormaEntrega.isPresent()).toBe(true);
										expect (confirmaPedidoCompradoPage.sectionFormaPagamento.isPresent()).toBe(true);
										expect (confirmaPedidoCompradoPage.sectionItens.isPresent()).toBe(true);
									} else {
										console.log('forma de pagamento CC PagSeguro deve ser configurada no back-end!');
									};
								});
							} else {
								console.log('usuário logado, mas, não possui opção de frete grátis disponível.');
								finalizarCompraPage.radioPACCorreios.isPresent().then (function (checkedPAC) {
									if (checkedPAC === true) {
										console.log('Usuário logado e o método PAC Correios foi acionada.');
										finalizarCompraPage.selecionaOptionPACCorreios();
										finalizarCompraPage.clickSeguirSectionFormaPagamento();
										pagSeguroPage.optionFormPagCCPagSeguro.isPresent().then (function (CCPagSeguroHabilit) {
											if (CCPagSeguroHabilit === true) {
												console.log('CC PagSeguro foi adicionado');
												pagSeguroPage.selecionaFormPagCCPagSeguro();
												pagSeguroPage.preencheDadosCCPagSeguro('TESTE PAGSEGURO', 22, 12, 1964, 71771102403, 4024007169408340, 12, 2020, 504);
												pagSeguroPage.selecionaUmaParcelaPagSeguro();
												finalizarCompraPage.clickSeguirFinalizarCompra();
												finalizarCompraPage.clickFinalizarPedido();
												browser.driver.sleep(2000);
												helper.waitElementVisibility(confirmaPedidoCompradoPage.tituloAcompanheSeuPedido);										
												expect (confirmaPedidoCompradoPage.tituloAcompanheSeuPedido.isPresent()).toBe(true);
												expect (confirmaPedidoCompradoPage.linhaProgressoConfirmacao.getCssValue('color')).toEqual('rgba(255, 215, 151, 1)');
												expect (confirmaPedidoCompradoPage.linkMeusPedidos.isDisplayed()).toBe(true);
												expect (confirmaPedidoCompradoPage.boxAcompanhamentoPedido.isPresent()).toBe(true);
												expect (confirmaPedidoCompradoPage.logoConfirmacao.isPresent()).toBe(true);												
												expect (confirmaPedidoCompradoPage.tituloResumoPedido.isPresent()).toBe(true);
												expect (confirmaPedidoCompradoPage.sectionEnderecoEntrega.isPresent()).toBe(true);
												expect (confirmaPedidoCompradoPage.sectionEnderecoCobranca.isPresent()).toBe(true);
												expect (confirmaPedidoCompradoPage.sectionFormaEntrega.isPresent()).toBe(true);
												expect (confirmaPedidoCompradoPage.sectionFormaPagamento.isPresent()).toBe(true);
												expect (confirmaPedidoCompradoPage.sectionItens.isPresent()).toBe(true);
											} else {
												console.log('forma de pagamento CC PagSeguro deve ser configurada no back-end!');
											};
										});
									} else {
										console.log ('a base não contém as formas de entrega frete grátis ou PAC e por isso, não foi possíve dar andamento aos testes.');
									};
								});
							};
						});
					};
				});
			} else {
				console.log('usuário deslogado, deve ser feito cadastro com usuário de teste PagSeguro.');

				//Análise da existência do usuário PagSeguro, no back-end
				browser.get('http://homol:5945d16a075541a5@homologacao.jn2.xyz/index.php/controle');
				autenticacaoBackEndPage.login('jn2', 'P4ssw0rd');
				browser.driver.sleep(500);
				browser.refresh();
				menuBackEndPage.acessaSubMenuGerenciarClientes();
				helper.waitElementVisibility(gerenciarClientesPage.tituloGerenciarClientes);
				gerenciarClientesPage.InformarEmailParaBusca('teste@sandbox.pagseguro.com.br');
				funcoesGeralPage.confirmarBusca();
				browser.driver.sleep(1000);
				gerenciarClientesPage.valueUserPagSeguro.isPresent().then(function (status) {
					console.log('status valor PagSeguro: ' + status);
					if (status === true) {
						menuPage.url();
						menuPage.acessaPagLogin();
						autenticacaoPage.login ('teste@sandbox.pagseguro.com.br', '1472589');
						autenticacaoPage.clickBtnLogin();
						helper.waitElementVisibility(menuPage.linkMinhaContaOptionMenu);
					} else { 
						menuPage.url();
						menuPage.acessaPagLogin();
						browser.driver.sleep(800);
						autenticacaoPage.informaEmailNovoCliente('teste@sandbox.pagseguro.com.br');
						autenticacaoPage.clickBtnContinuar();
						autenticacaoPage.informaDadosPessoaisESenha('1472589', '1472589', 'TESTE PAGSEGURO', '71771102403', '31998475863');
						autenticacaoPage.informaDadosEndereco('30130009','Avenida Afonso Pena', '700', 'Cruzeiro', 'Belo Horizonte');
						autenticacaoPage.clickBtnContinuar();
						helper.waitElementVisibility(menuPage.linkMinhaContaOptionMenu);
					};
				});

				//Continuar Testes
				menuPage.clickCarrinhoDeCompras();	
				browser.driver.sleep(800);
				carrinhoComprasPage.primeiroProdCarrinho.isPresent().then (function(itemCarrinho){
					if (itemCarrinho === true) {
						console.log('após login, verifica que existe item no carrinho.');
						carrinhoComprasPage.clickFinalizarCompra();		
						browser.driver.sleep(500);
						finalizarCompraPage.radioEntregaGratis.isPresent().then (function (checkedFreteGratis) {
							if (checkedFreteGratis === true) {
								console.log('Frete grátis foi acionado.');
								finalizarCompraPage.selecionaOptionFreteGratis();
								finalizarCompraPage.clickSeguirSectionFormaPagamento();
								pagSeguroPage.optionFormPagCCPagSeguro.isPresent().then (function (CCPagSeguroHabilit) {
									if (CCPagSeguroHabilit === true) {
										console.log('CC Cielo 3.0 foi adicionado');
										cieloPage.selecionaFormaPagCielo();
										cieloPage.preencheDadosCCCielo('4024007169408340','TESTE CIELO', '12', '2019','504');
										cieloPage.selecionaPrimeiraParcela();
										finalizarCompraPage.clickSeguirFinalizarCompra();
										finalizarCompraPage.clickFinalizarPedido();
										browser.driver.sleep(2000);
										helper.waitElementVisibility(confirmaPedidoCompradoPage.tituloAcompanheSeuPedido);										
										expect (confirmaPedidoCompradoPage.tituloAcompanheSeuPedido.isPresent()).toBe(true);
										expect (confirmaPedidoCompradoPage.linhaProgressoConfirmacao.getCssValue('color')).toEqual('rgba(255, 215, 151, 1)');
										expect (confirmaPedidoCompradoPage.linkMeusPedidos.isDisplayed()).toBe(true);
										expect (confirmaPedidoCompradoPage.boxAcompanhamentoPedido.isPresent()).toBe(true);
										expect (confirmaPedidoCompradoPage.logoConfirmacao.isPresent()).toBe(true);		
										expect (confirmaPedidoCompradoPage.tituloResumoPedido.isPresent()).toBe(true);
										expect (confirmaPedidoCompradoPage.sectionEnderecoEntrega.isPresent()).toBe(true);
										expect (confirmaPedidoCompradoPage.sectionEnderecoCobranca.isPresent()).toBe(true);
										expect (confirmaPedidoCompradoPage.sectionFormaEntrega.isPresent()).toBe(true);
										expect (confirmaPedidoCompradoPage.sectionFormaPagamento.isPresent()).toBe(true);
										expect (confirmaPedidoCompradoPage.sectionItens.isPresent()).toBe(true);
									} else {
										console.log('forma de pagamento CC PagSeguro deve ser configurada no back-end!');
									};
								});
							} else {
								finalizarCompraPage.radioPACCorreios.isPresent().then (function (checkedPAC) {
									if (checkedPAC === true) {
										console.log ('A forma de pagamento PAC Correios foi acionada.');
										finalizarCompraPage.selecionaOptionPACCorreios();
										finalizarCompraPage.clickSeguirSectionFormaPagamento();
										browser.driver.sleep(500);
										pagSeguroPage.optionFormPagCCPagSeguro.isPresent().then (function (CCPagSeguroHabilit) {
											if (CCPagSeguroHabilit === true) {
												console.log('CC PagSeguro foi adicionado');
												pagSeguroPage.selecionaFormPagCCPagSeguro();
												pagSeguroPage.preencheDadosCCPagSeguro('TESTE PAGSEGURO', 22, 12, 1964, 71771102403, 4024007169408340, 12, 2020, 504);
												pagSeguroPage.selecionaUmaParcelaPagSeguro();
												finalizarCompraPage.clickSeguirFinalizarCompra();
												finalizarCompraPage.clickFinalizarPedido();
												browser.driver.sleep(2000);
												helper.waitElementVisibility(confirmaPedidoCompradoPage.tituloAcompanheSeuPedido);										
												expect (confirmaPedidoCompradoPage.tituloAcompanheSeuPedido.isPresent()).toBe(true);
												expect (confirmaPedidoCompradoPage.linhaProgressoConfirmacao.getCssValue('color')).toEqual('rgba(255, 215, 151, 1)');
												expect (confirmaPedidoCompradoPage.linkMeusPedidos.isDisplayed()).toBe(true);
												expect (confirmaPedidoCompradoPage.boxAcompanhamentoPedido.isPresent()).toBe(true);
												expect (confirmaPedidoCompradoPage.logoConfirmacao.isPresent()).toBe(true);												
												expect (confirmaPedidoCompradoPage.tituloResumoPedido.isPresent()).toBe(true);
												expect (confirmaPedidoCompradoPage.sectionEnderecoEntrega.isPresent()).toBe(true);
												expect (confirmaPedidoCompradoPage.sectionEnderecoCobranca.isPresent()).toBe(true);
												expect (confirmaPedidoCompradoPage.sectionFormaEntrega.isPresent()).toBe(true);
												expect (confirmaPedidoCompradoPage.sectionFormaPagamento.isPresent()).toBe(true);
												expect (confirmaPedidoCompradoPage.sectionItens.isPresent()).toBe(true);
											} else {
												console.log('forma de pagamento CC PagSeguro deve ser configurada no back-end!');
											};
										});
									} else {
										console.log ('a base não contém as formas de entrega frete grátis ou PAC e por isso, não foi possíve dar andamento aos testes.');
									};
								});
							};
						});
					} else {
						console.log('login realizado, mas, não tem item no carrinho. Itens serão adicionados.');
						menuPage.url();
						helper.waitElementVisibility(homePage.gridInitProdutos);
						homePage.selecionaPrimeiroProdListado();
						helper.waitElementVisibility(detalheProdutoPage.produtoVisitado);
						carrinhoComprasPage.addProdutVisitadoCarrinhho();
						helper.waitElementVisibility(carrinhoComprasPage.primeiroProdCarrinho);
						carrinhoComprasPage.clickFinalizarCompra();		
						browser.driver.sleep(800);
						finalizarCompraPage.radioEntregaGratis.isPresent().then (function (checkedFreteGratis) {
							if (checkedFreteGratis === true) {
								console.log('frete grátis adicionado.');
								finalizarCompraPage.selecionaOptionFreteGratis();
								finalizarCompraPage.clickSeguirSectionFormaPagamento();
								browser.driver.sleep(500);
								pagSeguroPage.optionFormPagCCPagSeguro.isPresent().then (function (CCPagSeguroHabilit) {
									if (CCPagSeguroHabilit === true) {
										console.log('CC PagSeguro foi adicionado');
										pagSeguroPage.selecionaFormPagCCPagSeguro();
										pagSeguroPage.preencheDadosCCPagSeguro('TESTE PAGSEGURO', 22, 12, 1964, 71771102403, 4024007169408340, 12, 2020, 504);
										pagSeguroPage.selecionaUmaParcelaPagSeguro();
										finalizarCompraPage.clickSeguirFinalizarCompra();
										finalizarCompraPage.clickFinalizarPedido();
										browser.driver.sleep(2000);
										helper.waitElementVisibility(confirmaPedidoCompradoPage.tituloAcompanheSeuPedido);										
										expect (confirmaPedidoCompradoPage.tituloAcompanheSeuPedido.isPresent()).toBe(true);
										expect (confirmaPedidoCompradoPage.linhaProgressoConfirmacao.getCssValue('color')).toEqual('rgba(255, 215, 151, 1)');
										expect (confirmaPedidoCompradoPage.linkMeusPedidos.isDisplayed()).toBe(true);
										expect (confirmaPedidoCompradoPage.boxAcompanhamentoPedido.isPresent()).toBe(true);
										expect (confirmaPedidoCompradoPage.logoConfirmacao.isPresent()).toBe(true);
										expect (confirmaPedidoCompradoPage.tituloResumoPedido.isPresent()).toBe(true);
										expect (confirmaPedidoCompradoPage.sectionEnderecoEntrega.isPresent()).toBe(true);
										expect (confirmaPedidoCompradoPage.sectionEnderecoCobranca.isPresent()).toBe(true);
										expect (confirmaPedidoCompradoPage.sectionFormaEntrega.isPresent()).toBe(true);
										expect (confirmaPedidoCompradoPage.sectionFormaPagamento.isPresent()).toBe(true);
										expect (confirmaPedidoCompradoPage.sectionItens.isPresent()).toBe(true);
										console.log('trabalhando neste if');
									} else {
										console.log('forma de pagamento CC PagSeguro deve ser configurada no back-end!');
									};
								});
							} else {
								console.log('Opção de entrega grátis não habilitada.');
								finalizarCompraPage.radioPACCorreios.isPresent().then (function (checkedPAC) {
									if (checkedPAC === true) {
										console.log('Será utilizado o método de entrega PAC Correios.');
										finalizarCompraPage.selecionaOptionPACCorreios();
										finalizarCompraPage.clickSeguirSectionFormaPagamento();
										browser.driver.sleep(500);
										pagSeguroPage.optionFormPagCCPagSeguro.isPresent().then (function (CCPagSeguroHabilit) {
											if (CCPagSeguroHabilit === true) {
												console.log('CC PagSeguro foi adicionado');
												pagSeguroPage.selecionaFormPagCCPagSeguro();
												pagSeguroPage.preencheDadosCCPagSeguro('TESTE PAGSEGURO', 22, 12, 1964, 71771102403, 4024007169408340, 12, 2020, 504);
												pagSeguroPage.selecionaUmaParcelaPagSeguro();
												finalizarCompraPage.clickSeguirFinalizarCompra();
												finalizarCompraPage.clickFinalizarPedido();
												browser.driver.sleep(2000);
												helper.waitElementVisibility(confirmaPedidoCompradoPage.tituloAcompanheSeuPedido);										
												expect (confirmaPedidoCompradoPage.tituloAcompanheSeuPedido.isPresent()).toBe(true);
												expect (confirmaPedidoCompradoPage.linhaProgressoConfirmacao.getCssValue('color')).toEqual('rgba(255, 215, 151, 1)');
												expect (confirmaPedidoCompradoPage.linkMeusPedidos.isDisplayed()).toBe(true);
												expect (confirmaPedidoCompradoPage.boxAcompanhamentoPedido.isPresent()).toBe(true);
												expect (confirmaPedidoCompradoPage.logoConfirmacao.isPresent()).toBe(true);
												expect (confirmaPedidoCompradoPage.tituloResumoPedido.isPresent()).toBe(true);
												expect (confirmaPedidoCompradoPage.sectionEnderecoEntrega.isPresent()).toBe(true);
												expect (confirmaPedidoCompradoPage.sectionEnderecoCobranca.isPresent()).toBe(true);
												expect (confirmaPedidoCompradoPage.sectionFormaEntrega.isPresent()).toBe(true);
												expect (confirmaPedidoCompradoPage.sectionFormaPagamento.isPresent()).toBe(true);
												expect (confirmaPedidoCompradoPage.sectionItens.isPresent()).toBe(true);
											} else {
												console.log('forma de pagamento CC PagSeguro deve ser configurada no back-end!');
											};

										});
									} else {
										console.log ('a base não contém as formas de entrega frete grátis ou PAC e por isso, não foi possíve dar andamento aos testes.');
									};
								});
							};
						});							
					};
				});
			};
		});
	});	
});

describe ('8. Front-end: Minha Conta > Geral', function() {

	it ('8.1 Válida títulos e as seções da página.', function() { 
		menuPage.linkMinhaContaOptionMenu.isPresent().then (function(minhaContaStatus) {
			if (minhaContaStatus === true) {
				menuPage.efetuaLogout(); 
				//Como p/ os testes do PagSeguro é preciso um e-mail específico, foi feito logout para garantir os dados da validação neste teste.
				helper.waitElementVisibility(menuPage.linkLogin);
				menuPage.acessaPagLogin();
				browser.driver.sleep(500);
				autenticacaoPage.login ('tests@teste.com.br', '1472589');
				autenticacaoPage.clickBtnLogin();
				menuPage.url();
				menuPage.selecionarLinkMinhaConta();
				helper.waitElementVisibility(minhaContaGeralPage.tituloGeral);
				expect (minhaContaGeralPage.tituloGeral.isPresent()).toBe(true);
				expect (minhaContaGeralPage.tituloMinhaConta.isPresent()).toBe(true);
				expect (minhaContaGeralPage.tituloDadosAcesso.isPresent()).toBe(true);
				expect (minhaContaGeralPage.linkAlterarSenha.isDisplayed()).toBe(true);
				expect (minhaContaGeralPage.tituloMeusEnderecos.isPresent()).toBe(true);
				expect (minhaContaGeralPage.linkEditarEndereco.isDisplayed()).toBe(true);
				expect (minhaContaGeralPage.linkGerenciarEndereco.isDisplayed()).toBe(true);
				expect (minhaContaGeralPage.tituloInfoContato.isPresent()).toBe(true);
				expect (minhaContaGeralPage.boxNmCliente.isPresent()).toBe(true);
				expect (minhaContaGeralPage.boxEnderecoCobrancaPrincipal.isPresent()).toBe(true);
				expect (minhaContaGeralPage.boxEnderecoEntregaPrincipal.isPresent()).toBe(true);
			} else {
				menuPage.acessaPagLogin();
				browser.driver.sleep(500);
				autenticacaoPage.login ('tests@teste.com.br', '1472589');
				autenticacaoPage.clickBtnLogin();
				menuPage.url();
				menuPage.selecionarLinkMinhaConta();
				helper.waitElementVisibility(minhaContaGeralPage.tituloGeral);
				expect (minhaContaGeralPage.tituloGeral.isPresent()).toBe(true);
				expect (minhaContaGeralPage.tituloMinhaConta.isPresent()).toBe(true);
				expect (minhaContaGeralPage.tituloDadosAcesso.isPresent()).toBe(true);
				expect (minhaContaGeralPage.linkAlterarSenha.isDisplayed()).toBe(true);
				expect (minhaContaGeralPage.tituloMeusEnderecos.isPresent()).toBe(true);
				expect (minhaContaGeralPage.linkEditarEndereco.isDisplayed()).toBe(true);
				expect (minhaContaGeralPage.linkGerenciarEndereco.isDisplayed()).toBe(true);
				expect (minhaContaGeralPage.tituloInfoContato.isPresent()).toBe(true);
				expect (minhaContaGeralPage.boxNmCliente.isPresent()).toBe(true);
				expect (minhaContaGeralPage.boxEnderecoCobrancaPrincipal.isPresent()).toBe(true);
				expect (minhaContaGeralPage.boxEnderecoEntregaPrincipal.isPresent()).toBe(true);
			};
		});
	});
});

describe ('9. Front-end: Minha Conta > Meus Endereços.', function() {

	it ('9.1 Válida títulos e as seções da página.', function() { 
		menuPage.linkMinhaContaOptionMenu.isPresent().then (function(minhaContaStatus) {
			if (minhaContaStatus === true) {
				menuPage.efetuaLogout(); 
				//Como para os testes do PagSeguro é preciso um e-mail específico, foi feito logout para garantir os dados da validação neste teste.
				helper.waitElementVisibility(menuPage.linkLogin);
				menuPage.acessaPagLogin();
				browser.driver.sleep(500);
				autenticacaoPage.login ('tests@teste.com.br', '1472589');
				autenticacaoPage.clickBtnLogin();
				menuPage.url();
				menuPage.selecionarLinkMinhaConta();
				helper.waitElementVisibility(minhaContaGeralPage.tituloGeral);
				minhaContaMeusEnderecosPage.selecionarMenuMeusEnderecos();
				expect (minhaContaMeusEnderecosPage.tituloMeusEnderecos.isPresent()).toBe(true);
				expect (minhaContaMeusEnderecosPage.btnAdicionarEndereco.isDisplayed()).toBe(true);
				expect (minhaContaMeusEnderecosPage.tituloEndCobrancaPrincipal.isPresent()).toBe(true);
				expect (minhaContaMeusEnderecosPage.boxEnderecoPrincipal.isPresent()).toBe(true);
				expect (minhaContaMeusEnderecosPage.btnAlterarEndereco.isDisplayed()).toBe(true);
				expect (minhaContaMeusEnderecosPage.tituloOutrosEnderecos.isPresent()).toBe(true);
				expect (minhaContaMeusEnderecosPage.linkVoltar.isDisplayed()).toBe(true);
			} else {
				menuPage.acessaPagLogin();
				browser.driver.sleep(500);
				autenticacaoPage.login ('tests@teste.com.br', '1472589');
				autenticacaoPage.clickBtnLogin();
				menuPage.url();
				menuPage.selecionarLinkMinhaConta();
				helper.waitElementVisibility(minhaContaGeralPage.tituloGeral);
				minhaContaMeusEnderecosPage.selecionarMenuMeusEnderecos();
				expect (minhaContaMeusEnderecosPage.tituloMeusEnderecos.isPresent()).toBe(true);
				expect (minhaContaMeusEnderecosPage.btnAdicionarEndereco.isDisplayed()).toBe(true);
				expect (minhaContaMeusEnderecosPage.tituloEndCobrancaPrincipal.isPresent()).toBe(true);
				expect (minhaContaMeusEnderecosPage.boxEnderecoPrincipal.isPresent()).toBe(true);
				expect (minhaContaMeusEnderecosPage.btnAlterarEndereco.isDisplayed()).toBe(true);
				expect (minhaContaMeusEnderecosPage.tituloOutrosEnderecos.isPresent()).toBe(true);
				expect (minhaContaMeusEnderecosPage.linkVoltar.isDisplayed()).toBe(true);
			};
		});
	});
});

describe ('10. Front-end: Minha Conta > Dados de Acesso.', function() {

	it ('10.1 Válida títulos e as seções da página.', function() { 
		menuPage.linkMinhaContaOptionMenu.isPresent().then (function(minhaContaStatus) {
			if (minhaContaStatus === true) {
				menuPage.efetuaLogout(); 
				//Como p/ os testes do PagSeguro é preciso um e-mail específico, foi feito logout para garantir os dados da validação neste teste.
				helper.waitElementVisibility(menuPage.linkLogin);
				menuPage.acessaPagLogin();
				browser.driver.sleep(500);
				autenticacaoPage.login ('tests@teste.com.br', '1472589');
				autenticacaoPage.clickBtnLogin();
				menuPage.url();
				menuPage.selecionarLinkMinhaConta();
				helper.waitElementVisibility(minhaContaGeralPage.tituloGeral);
				minhaContaDadosAcessoPage.selecionarMenuDadosAcesso();
				helper.waitElementVisibility(minhaContaDadosAcessoPage.tituloEditarDadosAcesso);
				expect (minhaContaDadosAcessoPage.tituloEditarDadosAcesso.isPresent()).toBe(true);
				expect (minhaContaDadosAcessoPage.labelNmCompleto.isPresent()).toBe(true);
				expect (minhaContaDadosAcessoPage.inputNmCompleto.getAttribute('value')).toEqual('USUARIO TESTE AUTOMATIZADO LOGIN');
				expect (minhaContaDadosAcessoPage.labelEndEmail.isPresent()).toBe(true);
				expect (minhaContaDadosAcessoPage.inputEndEmail.getAttribute('value')).toEqual('tests@teste.com.br');
				expect (minhaContaDadosAcessoPage.checkAlterarSenha.isDisplayed()).toBe(true);
				expect (minhaContaDadosAcessoPage.labelAlterarSenha.isPresent()).toBe(true);
				expect (minhaContaDadosAcessoPage.msgCamposObrigatorios.isPresent()).toBe(true);
				expect (minhaContaDadosAcessoPage.btnSalvar.isDisplayed()).toBe(true);
				expect (minhaContaDadosAcessoPage.linkVoltar.isDisplayed()).toBe(true);
			} else {
				menuPage.acessaPagLogin();
				browser.driver.sleep(500);
				autenticacaoPage.login ('tests@teste.com.br', '1472589');
				autenticacaoPage.clickBtnLogin();
				menuPage.url();
				menuPage.selecionarLinkMinhaConta();
				helper.waitElementVisibility(minhaContaGeralPage.tituloGeral);
				minhaContaDadosAcessoPage.selecionarMenuDadosAcesso();
				helper.waitElementVisibility(minhaContaDadosAcessoPage.tituloEditarDadosAcesso);
				expect (minhaContaDadosAcessoPage.tituloEditarDadosAcesso.isPresent()).toBe(true);
				expect (minhaContaDadosAcessoPage.labelNmCompleto.isPresent()).toBe(true);
				expect (minhaContaDadosAcessoPage.inputNmCompleto.getAttribute('value')).toEqual('USUARIO TESTE AUTOMATIZADO LOGIN');
				expect (minhaContaDadosAcessoPage.labelEndEmail.isPresent()).toBe(true);
				expect (minhaContaDadosAcessoPage.inputEndEmail.getAttribute('value')).toEqual('tests@teste.com.br');
				expect (minhaContaDadosAcessoPage.checkAlterarSenha.isDisplayed()).toBe(true);
				expect (minhaContaDadosAcessoPage.labelAlterarSenha.isPresent()).toBe(true);
				expect (minhaContaDadosAcessoPage.msgCamposObrigatorios.isPresent()).toBe(true);
				expect (minhaContaDadosAcessoPage.btnSalvar.isDisplayed()).toBe(true);
				expect (minhaContaDadosAcessoPage.linkVoltar.isDisplayed()).toBe(true);
			};
		});
	});
});

describe ('11. Front-end: Minha Conta > Meus Pedidos.', function() {

	it ('11.1 Válida títulos e as seções da página.', function() { 
		menuPage.linkMinhaContaOptionMenu.isPresent().then (function(minhaContaStatus) {
			if (minhaContaStatus === true) {
				menuPage.efetuaLogout(); 
				//Como p/ os testes do PagSeguro é preciso um e-mail específico, foi feito logout para garantir os dados da validação neste teste.
				helper.waitElementVisibility(menuPage.linkLogin);
				menuPage.acessaPagLogin();
				browser.driver.sleep(500);
				autenticacaoPage.login ('tests@teste.com.br', '1472589');
				autenticacaoPage.clickBtnLogin();
				menuPage.url();
				menuPage.selecionarLinkMinhaConta();
				helper.waitElementVisibility(minhaContaGeralPage.tituloGeral);	
				minhaContaMeusPedidosPage.selecionarMenuMeusPedidos();	
				expect (minhaContaMeusPedidosPage.tituloMeusPedidos.isPresent()).toBe(true);
				expect (minhaContaMeusPedidosPage.linkVoltar.isDisplayed()).toBe(true);
			} else {
				menuPage.acessaPagLogin();
				browser.driver.sleep(500);
				autenticacaoPage.login ('tests@teste.com.br', '1472589');
				autenticacaoPage.clickBtnLogin();
				menuPage.url();
				menuPage.selecionarLinkMinhaConta();
				helper.waitElementVisibility(minhaContaGeralPage.tituloGeral);	
				minhaContaMeusPedidosPage.selecionarMenuMeusPedidos();	
				expect (minhaContaMeusPedidosPage.tituloMeusPedidos.isPresent()).toBe(true);
				expect (minhaContaMeusPedidosPage.linkVoltar.isDisplayed()).toBe(true);
			};
		});
	});
});

describe ('12. Front-end: Minha Conta > Meus Comentários.', function() {

	it ('12.1 Válida títulos e as seções da página.', function() { 
		menuPage.linkMinhaContaOptionMenu.isPresent().then (function(minhaContaStatus) {
			if (minhaContaStatus === true) {
				menuPage.efetuaLogout(); 
				//Como p/ os testes do PagSeguro é preciso um e-mail específico, foi feito logout para garantir os dados da validação neste teste.
				helper.waitElementVisibility(menuPage.linkLogin);
				menuPage.acessaPagLogin();
				browser.driver.sleep(500);
				autenticacaoPage.login ('tests@teste.com.br', '1472589');
				autenticacaoPage.clickBtnLogin();
				menuPage.url();
				menuPage.selecionarLinkMinhaConta();
				helper.waitElementVisibility(minhaContaGeralPage.tituloGeral);	
				minhaContaMeusComentariosPage.selecionarMenuMeusPedidos();
				helper.waitElementVisibility(minhaContaMeusComentariosPage.tituloMeusComentarios);
				expect (minhaContaMeusComentariosPage.tituloMeusComentarios.isPresent()).toBe(true);
				expect (minhaContaMeusComentariosPage.linkVoltar.isDisplayed()).toBe(true);
			} else {
				menuPage.acessaPagLogin();
				browser.driver.sleep(500);
				autenticacaoPage.login ('tests@teste.com.br', '1472589');
				autenticacaoPage.clickBtnLogin();
				menuPage.url();
				menuPage.selecionarLinkMinhaConta();
				helper.waitElementVisibility(minhaContaGeralPage.tituloGeral);	
				minhaContaMeusComentariosPage.selecionarMenuMeusPedidos();
				helper.waitElementVisibility(minhaContaMeusComentariosPage.tituloMeusComentarios);
				expect (minhaContaMeusComentariosPage.tituloMeusComentarios.isPresent()).toBe(true);
				expect (minhaContaMeusComentariosPage.linkVoltar.isDisplayed()).toBe(true);
			};
		});
	});
});






