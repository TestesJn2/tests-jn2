//autenticacao.po.js

'use strict';  
var helper = require('../../helper/helper.js');

var autenticacaoPage = function () {

  //Head - Atual status do Processo
  this.statusProcessoIdentificacao = element(by.id('Path_36'));

  // Login
  this.tituloUsuarioCadastrado = element(by.cssContainingText('h2', 'Já sou cadastrado'));
  this.textoEmailUsuario = element(by.cssContainingText('label', 'Digite seu email'));
  this.inputEmailUsuario = element(by.id('email'));
  this.textoSenhaUsuario = element (by.cssContainingText('label', 'Digite sua senha'));
  this.inputSenhaUsuario = element(by.id('pass')); 
  this.opcaoEsqueceuSuaSenha = element (by.linkText('Esqueceu sua Senha?'));
  this.msgLoginInvalid = element(by.cssContainingText('span', 'Login ou senha inválido.'));

  //Novo Cliente - Tela Login
  this.tituloNovoUsuario = element(by.cssContainingText('h2', 'Sou um novo cliente'));
  //Tela Novo Cadastro  - Títulos 
  this.tituloIdentificacao = element(by.css('.page-title'));
  this.textoIndicativoObrigatoriedade = element(by.css('.required'));
  this.tituloDadosAcesso = element(by.cssContainingText('h2', 'Dados de Acesso'));
  this.tituloDadosPessoais = element(by.cssContainingText('h2', 'Dados pessoais'));
  this.opcaoPessoaFisica = element(by.id('check-pessoa-fisica'));
  this.tituloInformacaoEndereco = element(by.cssContainingText('h2', 'Informações de Endereço'));
  //Tela Novo Cadastro  - E-mail
  this.nmLabelEmailNovoCadastro = element(by.cssContainingText('label','Endereço de Email'));
  this.inputEmailNovoCadastro = element(by.id('email-register'));
  this.inputEmailInformado = element(by.id('email_address'));
  ////Tela Novo Cadastro  - Senha
  this.nmLabelSenhaNovoCadastro = element(by.cssContainingText('label', 'Senha'));
  this.inputSenhaNovoCadastro = element(by.id('password'));
  this.msgSenhaObrigatoria = element(by.id('advice-required-entry-password'));
  //Tela Novo Cadastro  - Confirma Senha
  this.nmLabelConfirmaSenha = element(by.cssContainingText('label', 'Confirmar Senha'));
  this.inputConfirmaSenha = element(by.id('confirmation'));
  this.msgConfirmaSenhaObrigatoria = element(by.id('advice-required-entry-confirmation'));
  //Tela Novo Cadastro  - Nome Completo
  this.nmLabelNomeCompleto = element(by.cssContainingText('label', 'Nome Completo'));
  this.inputNomeCompleto = element(by.id('firstname'));
  this.msgNomeCompletoObrigatorio = element(by.id('advice-validate-fullname-firstname'));
  //Tela Novo Cadastro  - CPF
  this.nmLabelCPF = element(by.cssContainingText('label', 'CPF'));
  this.inputCPF = element(by.id('taxvat'));
  this.msgCPFObrigatorio = element(by.id('advice-validate-taxvat-taxvat'));
  //Tela Novo Cadastro  - Telefone
  this.nmLabelTelefone = element(by.cssContainingText('label', 'Telefone'));
  this.inputTelefone = element(by.id('telephone'));
  this.msgTelefoneObrigatorio = element(by.id('advice-required-entry-telephone'));
  //Tela Novo Cadastro - Receber promoção
  this.checkboxReceberPromocao = element(by.id('is_subscribed'));
  this.msgReceberPromocao = element(by.cssContainingText('label', 'Desejo receber ofertas por email'));
  //Tela Novo Cadastro  - CEP
  this.nmLabelCEP = element(by.cssContainingText('label', 'Cep'));
  this.inputCEP = element(by.id('postcode'));
  this.msgCEPObrigatorio = element(by.id('advice-required-entry-postcode'));
  this.linkNaoSeiMeuCEP = element(by.id('btnBuscaCep'));
  //Tela Novo Cadastro  - Logradouro
  this.nmLabelLogradouro = element(by.cssContainingText('label', 'Logradouro'));
  this.inputLogradouro = element(by.id('street_1'));
  this.msgLogradouroObrigatorio = element(by.id('advice-required-entry-street_1'));
  //Tela Novo Cadastro  - Número
  this.nmLabelNumero = element(by.cssContainingText('label', 'Número'));
  this.inputNumero = element(by.id('street_2'));
  this.msgNumeroObrigatorio = element(by.id('advice-required-entry-street_2'));
  //Tela Novo Cadastro  - Bairro
  this.nmLabelBairro = element(by.cssContainingText('label', 'Bairro'));
  this.inputBairro = element(by.id('street_4'));
  this.msgBairroObrigatorio = element (by.id('advice-required-entry-street_4'));
  //Tela Novo Cadastro  - Cidade
  this.nmLabelCidade = element (by.cssContainingText('label', 'Cidade'));
  this.inputCidade = element(by.id('city'));
  this.msgCidadeObrigatorio = element(by.id('advice-required-entry-city'));
  //Tela Novo Cadastro  - Estado
  this.nmLabelEstado = element (by.cssContainingText('label', 'Estado'));
  this.inputEstado = element(by.id('region_id'));
  this.msgEstadoObrigatorio = element(by.id('advice-validate-select-region_id'));
  this.optionEstadoMG = element(by.cssContainingText('option', 'Minas Gerais'));
  //Tela Novo Cadastro  - Confirma Senha
  this.btnContinuar = element(by.id('btn-register'));
  this.btnVoltarLoja = element(by.id('btn-back-store'));
  this.btnLogin = element(by.id('btn-login'));


  this.clickBtnContinuar = function() {
    helper.waitElementVisibility(this.btnContinuar);
    this.btnContinuar.click();
  };

  this.login = function (user, password) {
    helper.waitElementVisibility(this.inputEmailUsuario);
    this.inputEmailUsuario.clear().sendKeys(user);
    this.inputSenhaUsuario.clear().sendKeys(password);
  };

  this.clickBtnLogin = function() {
    var btnConfirmarLogin = this.btnLogin;
    helper.waitElementVisibility(btnConfirmarLogin);
    btnConfirmarLogin.sendKeys(protractor.Key.ENTER);
    browser.driver.sleep(1000);
    btnConfirmarLogin.isPresent().then (function (status) {
      if (status === true) {
        btnConfirmarLogin.click();
      } else {
        console.log('Login foi realizado.');
      };
    });
    browser.driver.sleep(800);
  };

  this.informaEmailNovoCliente = function (emailClient) {
    helper.waitElementVisibility(this.inputEmailNovoCadastro);
    this.inputEmailNovoCadastro.clear().sendKeys(emailClient);
  };

  this.informaDadosPessoaisESenha = function (password, confirmationPassword, fullName, cpf, telephone) {
    helper.waitElementVisibility(this.inputSenhaNovoCadastro);
    this.inputSenhaNovoCadastro.sendKeys (password);
    this.inputConfirmaSenha.sendKeys(confirmationPassword);
    this.inputNomeCompleto.sendKeys(fullName);
    this.inputCPF.sendKeys(cpf);
    this.inputTelefone.sendKeys(telephone);
  };

  this.informaDadosEndereco = function(cep, street, numberStreet, neighborhood, city) {
    this.inputCEP.sendKeys(cep);
    helper.waitElementVisibility(this.inputLogradouro);
    this.inputLogradouro.sendKeys(street);
    this.inputNumero.clear().sendKeys(numberStreet);    
    this.inputBairro.clear().sendKeys(neighborhood);
    this.inputCidade.clear().sendKeys(city);
    this.inputEstado.click();
    this.optionEstadoMG.click();
  };
};

module.exports = new autenticacaoPage();