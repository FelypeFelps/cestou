
## Arquitetura

O Cestou utiliza o padrão MVC (Model, View, Controller), separando as responsabilidades da aplicação para facilitar o desenvolvimento e a manutenção.

- **Model:** acesso ao banco de dados MySQL e regras de negócio.
- **View:** interfaces desenvolvidas com EJS, HTML, CSS e Bootstrap.
- **Controller:** recebe as requisições, consulta o Model e seleciona a View.
- **Routes:** direcionamento das requisições aos Controllers.

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