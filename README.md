# tests-jn2

# Testes ponto a ponto (e2e) - Front-end e Back-end

Os testes e2e do projeto, s�o escritos utilizando o Protractor, desligando o controle para aplica��es AngularJS.

browser.ignoreSynchronization = true;

Este projeto de teste, tenta seguir as melhores pr�ticas descritas no site oficial do Protractor.

A arquitetura est� organizada da seguinte forma:

* O arquivo �conf.js�, armazena todas as configura��es necess�rias para que os testes sejam executados. No arquivo, consta o endere�o do sel�nio, dados das bibliotecas requeridas para gera��o de relat�rio, lista dos arquivos de testes, defini��o da url base e dos navegadores ondes os testes ser�o executados.

* Existe tamb�m, o arquivo �/e2e/helper.js� para encapsular as fun��es gerais que s�o utilizadas durante os testes. Como por exemplo, os  m�todo de espera at� que um elemento seja vis�vel, sele��o de dado elemento, entre outras intera��es gen�ricas. 

* O diret�rio �e2e/page-objects�, cont�m os elementos do documento HTML e fun��es espec�ficas ou parciais de cada p�gina. De forma melhorar a manuten��o e divis�o de responsabilidades quando existir mais de uma pessoa criando os testes. Exemplo: Para o menu do Vendas, do back-end, existe um arquivo page-objects de cada p�gina, com elementos �nicos e, um arquivo para gravar informa��es gerais do pedido e que s�o utilizados em todas as telas dispon�veis neste menu.

|--e2e
	|--page-objects
		|--back-end
			|--menu-vendas
				entregas.po.js
				etiquetas-correios.po.js
				faturas.po.js
				informacoes-gerais-pedido.po.js
				

* O diret�rio �e2e/specs� cont�m os testes propriamente ditos. Cada arquivo de especifica��o, ou teste  tem uma se��o de descri��o, em que descreve basicamente a funcionalidade a ser testada (describe nomeia o conjunto de teste), e h� uma se��o para cada teste (it). Nestes arquivos, n�o tem indica��o direta dos elementos DOM do HTML e constru��o de m�todos, pois, para manter escalabilidade, isso sempre � feito por meio de um require nos arquivos dos diret�rios page-objects, ou helper.

## Instala��o local e Execu��o do Protractor:
Para instalar o Protractor localmente, siga as etapas abaixo:

* Instala��o de nodejs
* Pacote Java (jdk)
* No terminal, rode:  npm install -g protractor (ap�s conclu�do, consulte a vers�o por meio do comando protractor --version).
* Ainda no terminal, rode: webdriver-manager update, ap�s � atualiza��o, inicie o webdriver por meio do comando webdriver-manager start.

Com o webdriver iniciado, abra outro terminal, acesse o diret�rio do projeto e rode o comando a seguir para rodar os testes: protractor conf.js

Ou seja, para executar os testes manualmente � preciso que o webdriver esteja iniciado em um terminal e em outro terminal, seja feito a executa��o do arquivo de configura��o dos testes.

## Dicas:

O Protractor usa a sintaxe Jasmine, ent�o:

* se voc� precisa executar apenas um caso de teste espec�fico, altere o 'it' por 'fit';
* se voc� quiser ignorar um caso de teste espec�fico, altere o 'it' para 'xit�;
* se voc� deseja executar apenas um conjunto de teste espec�fico, altere o 'describe' para 'fdescribe ';

Al�m disso:

* Os testes utilizam o padr�o AAA (arrange, act, assert);
* A constru��o de testes segue o princ�pio (red, green, refactoring);
* Foi dado prioridade aos localizadores por id, css e css mais texto, visto que, o projeto n�o passar� por internacionaliza��o;
* De in�cio, o projeto n�o possui uma base isolada para automa��o, logo, foi criado o arquivo de teste �spec/back-end/pre-teste/conf-base-teste.spec.js� para garantir o funcionamento dos scripts de valida��o. Esse script est� configurado para ser executado no in�cio dos testes, devido �s constantes altera��es da base.

## Depend�ncias
* Arquivo json

## Entrega Cont�nua 
* Jenkins

## Pr�ximas A��es
* Commitar os c�digos de teste no reposit�rio do produto final, visto que, os scripts de testes fazem parte do produto. Al�m disso, quando houver su�tes de testes que cobrem todos os n�veis (unit�rio, api e ponto a ponto), os c�digos estar�o estruturados em �nico lugar, dando mais clareza aos envolvidos no projeto.
* Ter uma base espec�fica para teste.

Para mais informa��es, d� uma olhada no documento oficial do Protractor [http://www.protractortest.org/#/].

