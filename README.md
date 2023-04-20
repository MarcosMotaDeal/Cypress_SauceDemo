# Teste de Login e Logout com Cypress

Este é um teste automatizado para validar a funcionalidade de login e logout do site https://www.saucedemo.com/.

## Pré-requisitos

- Node.js instalado na máquina
- NPM instalado na máquina
- Cypress instalado na máquina

## Instalação

1. Clone o repositório:

   ```
   git clone https://github.com/seu-usuario/nome-do-repositorio.git
   ```

2. Instale as dependências:

   ```
   npm install
   ```

## Execução do teste

1. Para executar o teste, execute o seguinte comando no terminal:

   ```
   npx cypress run
   ```

   O Cypress irá abrir uma janela de navegador e executar o teste automaticamente.

2. Para executar o teste em modo interativo, execute o seguinte comando no terminal:

   ```
   npx cypress open
   ```

   O Cypress irá abrir uma janela de navegador com o painel de controle do Cypress. Clique no teste "login_logout.spec.js" para executá-lo.

## Funcionalidades testadas

- Efetuar login com sucesso
- Realizar logout com sucesso
- Exibir mensagem de erro para login ou senha inválidos

## Como funciona o teste

O teste é dividido em duas partes: 

- Login e Logout com sucesso
- Exibição de mensagem de erro para login ou senha inválidos

Na primeira parte do teste, é feito o preenchimento correto dos campos de login e senha e o clique no botão "LOGIN". Em seguida, é validado se o login foi realizado com sucesso, verificando se a URL da página contém "/inventory.html". Depois disso, é realizado o logout, clicando no botão de menu e, em seguida, no botão "Logout". Por fim, é validado se o logout foi realizado com sucesso, verificando se a URL da página é a página inicial do site.

Na segunda parte do teste, é feito o preenchimento dos campos de login e senha com informações inválidas e o clique no botão "LOGIN". Em seguida, é validado se a mensagem de erro é exibida na tela, verificando se o elemento ".error-message-container" está visível na página.

Os screenshots são tirados em pontos importantes do teste para facilitar a análise do resultado do teste.
