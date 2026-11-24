# Cestou

Plataforma web de comparação de preços do comércio local.

## Problema que resolve

Quem compra em mercadinhos e pequenos comércios do bairro não tem uma forma fácil de saber onde um produto está mais barato: é preciso ir de loja em loja ou perguntar. Ao mesmo tempo, muitos desses comerciantes não têm presença na internet e acabam perdendo clientes para as grandes redes.

O Cestou reúne em um só lugar os produtos e preços dos comércios locais. O cliente pesquisa um produto (por exemplo, um pacote de arroz) e compara os preços entre as lojas, enquanto o lojista cadastra e mantém atualizados os produtos e preços da sua loja.

## Tecnologias

| Item | Escolha |
|---|---|
| Linguagem | JavaScript, executado no servidor com Node.js |
| Framework | Express (servidor web e rotas) com EJS (renderização das telas) |
| Interface | HTML, CSS e Bootstrap 5 |
| Banco de dados | MySQL (relacional) |
| Versionamento | Git e GitHub |

## Arquitetura

O Cestou utiliza o padrão MVC (Model, View, Controller), separando as responsabilidades da aplicação para facilitar o desenvolvimento e a manutenção.

- **Model:** acesso ao banco de dados MySQL e regras de negócio.
- **View:** interfaces desenvolvidas com EJS, HTML, CSS e Bootstrap.
- **Controller:** recebe as requisições, consulta o Model e seleciona a View.
- **Routes:** direcionamento das requisições aos Controllers.

Fluxo de uma requisição:

```text
Requisição → Route → Controller → Model → MySQL
                         ↓
                        View → Resposta ao usuário
```

Exemplo: ao pesquisar "arroz", a rota encaminha o pedido ao Controller, que pede ao Model os produtos encontrados no banco e envia o resultado para a View exibir.

O cabeçalho, o menu e o rodapé ficam em `src/views/components` e são reaproveitados em todas as telas com `include` do EJS.

## Organização dos diretórios

| Diretório | Responsabilidade |
|---|---|
| src/config | Configurações e conexão com o banco de dados |
| src/models | Consultas SQL e regras de negócio |
| src/views | Interfaces e componentes reutilizáveis |
| src/controllers | Controle das requisições |
| src/routes | Definição das rotas |
| public | CSS, JavaScript e imagens |
| database | Scripts SQL do banco de dados |
| docs | Documentação e protótipos |

### Pré-requisitos

- [Node.js](https://nodejs.org/) 18 ou superior
- [MySQL](https://dev.mysql.com/downloads/) 8
- [Git](https://git-scm.com/)

## Equipe
| Felipe da Costa Mota 
| Luís Felype Monteiro da Silva Sousa 
| Luan Lucas Oliveira Sousa 
| Renan Cardoso da Rocha 
| Vitor Sâmile Silva Santos 