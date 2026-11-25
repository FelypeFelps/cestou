
# Cestou

Projeto acadêmico de Programação Web II desenvolvido por cinco integrantes. O Cestou propõe facilitar a comparação de preços e a localização de produtos nos mercadinhos da cidade, valorizando o comércio local.

Esta versão corresponde à **primeira etapa (P1)**: estrutura inicial em MVC, protótipos da área do cliente, componentes reutilizáveis e página inicial. O sistema completo ainda não está implementado.

## Problema e proposta

Quem compra em mercadinhos e pequenos comércios do bairro não tem uma forma fácil de saber onde um produto está mais barato: é preciso ir de loja em loja ou perguntar. Ao mesmo tempo, muitos desses comerciantes não têm presença na internet e acabam perdendo clientes para as grandes redes.

A proposta do Cestou é reunir produtos, preços e disponibilidade dos comércios locais em um só lugar. Nas próximas etapas, o consumidor poderá pesquisar e comparar produtos, enquanto o lojista poderá cadastrar e atualizar as informações da sua loja.

## Integrantes e responsabilidades

Contribuições registradas nesta etapa do projeto:

| Integrante | Responsabilidades e contribuições |
|---|---|
| Felipe da Costa Mota | Menu de navegação, organização complementar dos diretórios e documentação inicial. |
| Luís Felype Monteiro da Silva Sousa | Inicialização do projeto, estrutura inicial MVC, configuração das dependências, implementação do Model, integração das camadas MVC e correção do layout compartilhado. |
| Luan Lucas Oliveira Sousa | Protótipos da área do cliente, página inicial, implementação inicial do Home Controller, CSS específico da Home e documentação. |
| Renan Cardoso da Rocha | Componentes reutilizáveis de cabeçalho e rodapé. |
| Vitor Sâmile Silva Santos | Configuração do servidor Express e da rota inicial. |

## Tecnologias

| Item | Escolha |
|---|---|
| Linguagem e ambiente | JavaScript com Node.js, utilizando módulos CommonJS |
| Framework web | Express 5 |
| Templates | EJS |
| Interface | HTML, CSS e Bootstrap 5, carregado por CDN |
| Banco de dados escolhido | MySQL, com o pacote `mysql2`; integração prevista para etapas posteriores |
| Variáveis de ambiente | `dotenv` |
| Desenvolvimento | `nodemon` para reiniciar o servidor após alterações |
| Versionamento | Git e GitHub |

## O que funciona nesta versão

- Página inicial em `GET /`, renderizada pelo Controller e pela View EJS.
- Integração entre Model, View e Controller.
- Cabeçalho, menu e rodapé reutilizados por meio de includes do EJS.
- Layout responsivo com menu recolhível no celular.
- Exemplo de comparação de preços renderizado dinamicamente a partir dos dados ilustrativos fornecidos pelo Model.
- Identificação e destaque do menor preço entre os estabelecimentos com produtos disponíveis.
- Protótipos da área do cliente disponíveis na documentação.

Busca, comparação real de preços, autenticação, mapa, lista de compras, pedidos e área do lojista ainda não estão implementados. Os links do menu representam telas previstas; apenas a rota inicial está disponível. O item “Meu bairro” ainda é um link sem destino definido.

Não há consultas ao banco de dados. Os arquivos `src/config/database.js` e `database/schema.sql` estão reservados para a implementação futura.

## Organização MVC

O projeto segue o MVC tradicional, com rotas Express direcionando as requisições aos Controllers:

- **Model:** responsável pelos dados e pelas regras de negócio. Nesta etapa, `produtoModel.js` fornece os dados ilustrativos da comparação de preços e identifica o menor preço entre os estabelecimentos. O acesso ao MySQL será implementado nas próximas etapas.
- **View:** apresenta a interface com EJS, HTML e Bootstrap. As telas do cliente ficam em `src/views/cliente` e os componentes compartilhados em `src/views/components`.
- **Controller:** recebe a requisição, consulta o Model e seleciona a View. Nesta etapa, `homeController.index` consulta o `produtoModel.js` e encaminha os dados para `cliente/index`.
- **Routes:** associa endereços e métodos HTTP às funções dos Controllers. `homeRoutes.js` associa `GET /` a `homeController.index`.

O componente `header.ejs` abre o documento HTML, carrega os arquivos CSS e inclui o menu de navegação. O componente `footer.ejs` apresenta o rodapé, carrega o JavaScript do Bootstrap e encerra o documento HTML.

A View da Home inclui esses dois componentes, evitando a repetição do menu e das estruturas compartilhadas.

Fluxo atual da página inicial:

```text
GET /
  ↓
homeRoutes.js
  ↓
homeController.js ←→ produtoModel.js
  ↓
cliente/index.ejs
  ↓
HTML
```

Nesta etapa, o Model utiliza dados ilustrativos, sem conexão com o banco de dados.

Estrutura do repositório:

```text
cestou/
├── app.js                       # Servidor Express, EJS, arquivos estáticos e rotas
├── package.json                 # Dependências e comandos npm
├── package-lock.json            # Versões das dependências
├── .env.example                 # Arquivo reservado para variáveis de ambiente
├── .gitignore                   # Arquivos ignorados pelo Git
├── README.md                    # Documentação do projeto
├── database/
│   └── schema.sql               # Reservado para a estrutura do banco
├── docs/
│   └── prototipos/cliente.pdf    # Protótipos da área do cliente
├── public/
│   ├── css/
│   │   ├── home.css             # Estilos limitados à página inicial
│   │   └── style.css            # Reservado para a estilização global
│   ├── images/                  # Espaço para imagens
│   └── js/                      # Espaço para scripts do navegador
└── src/
    ├── config/database.js       # Reservado para a conexão com MySQL
    ├── controllers/
    │   └── homeController.js    # Consulta ao Model e renderização da página inicial
    ├── models/
    │   └── produtoModel.js      # Dados ilustrativos e regra de menor preço
    ├── routes/
    │   └── homeRoutes.js        # Rota GET /
    └── views/
        ├── cliente/
        │   └── index.ejs        # Página inicial do cliente
        └── components/
            ├── header.ejs       # Cabeçalho reutilizável
            ├── menu.ejs         # Menu de navegação
            └── footer.ejs       # Rodapé reutilizável
```

## Como instalar e rodar

### Pré-requisitos

- Node.js 22 ou superior e npm, compatível com os requisitos das dependências no `package-lock.json`.
- Git para clonar o repositório.
- Acesso à internet para instalar as dependências e carregar o Bootstrap via CDN.

**MySQL não é necessário para executar a página inicial nesta etapa.** A escolha do banco já foi definida, mas a conexão e o esquema ainda não estão implementados.

### Instalação

No terminal:

```bash
git clone https://github.com/FelypeFelps/cestou.git
cd cestou
npm ci
npm start
```

Abra [http://localhost:3000](http://localhost:3000) no navegador. Para encerrar o servidor, pressione `Ctrl+C` no terminal.

### Desenvolvimento

Para reiniciar automaticamente o servidor quando os arquivos forem alterados:

```bash
npm run dev
```

Use `npm start` ou `npm run dev`, um de cada vez, para evitar que os dois tentem usar a mesma porta.

### Porta opcional

Não é necessário criar um arquivo `.env` para executar a Home. O servidor utiliza a porta `3000` por padrão.

Para escolher outra porta, crie um arquivo `.env` na raiz e defina, por exemplo:

```dotenv
PORT=3001
```

Depois de iniciar o servidor, acesse `http://localhost:3001`. O arquivo `.env` é ignorado pelo Git.

### Testes

```bash
npm test
```

O comando executa `node --test`. Ainda não há testes automatizados versionados. Para uma conferência manual, abra a Home, confira o comparador ilustrativo, o destaque do menor preço, a indicação de indisponibilidade dos produtos e o menu em uma largura de celular.

## Protótipos

- [Protótipos da área do cliente (PDF)](docs/prototipos/cliente.pdf)
