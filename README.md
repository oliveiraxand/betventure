# API de Site de Apostas

Este é um projeto de uma API desenvolvida para um site de apostas esportivas, com foco em fornecer funcionalidades completas para autenticação, informações de eventos esportivos, realização de apostas, resultados de eventos, gerenciamento de contas de usuário e transações financeiras.

## ENDPOINTS API

**Eventos (Events)**

    GET /events: Retorna todos os eventos.
    GET /events/past: Retorna eventos passados.
    GET /events/future: Retorna eventos futuros.
    POST /events: Cria um novo evento.
    GET /events/:id: Retorna detalhes de um evento específico.
    PUT /events/:id: Atualiza um evento existente.
    DELETE /events/:id: Exclui um evento.

**Apostas (Bets)**

    GET /bets/history/:userId: Retorna o histórico de apostas de um usuário.
    GET /bets: Retorna todas as apostas.
    GET /bets/:id: Retorna detalhes de uma aposta específica.
    POST /bets: Cria uma nova aposta.
    PUT /bets/:id: Atualiza uma aposta existente.
    DELETE /bets/:id: Exclui uma aposta.
    POST /bets/:id/finish: Finaliza uma aposta.

**Esportes (Sports)**

    GET /sports: Retorna todos os esportes.
    GET /sports/:id: Retorna detalhes de um esporte específico.
    POST /sports: Cria um novo esporte.
    PUT /sports/:id: Atualiza um esporte existente.
    DELETE /sports/:id: Exclui um esporte.

**Equipes (Teams)**

    GET /teams: Retorna todas as equipes.
    GET /teams/:id: Retorna detalhes de uma equipe específica.
    POST /teams: Cria uma nova equipe.
    PUT /teams/:id: Atualiza uma equipe existente.
    DELETE /teams/:id: Exclui uma equipe.

**Histórico de Transações (Transaction History)**

    GET /transaction: Retorna todas as transações.
    GET /transaction/:id: Retorna detalhes de uma transação específica.
    POST /transaction: Cria uma nova transação.
    PUT /transaction/:id: Atualiza uma transação existente.
    DELETE /transaction/:id: Exclui uma transação.
    GET /transaction/history/:userId: Retorna o histórico de transações de um usuário.

**Usuários (Users)**

    GET /users: Retorna todos os usuários.
    GET /users/:id: Retorna detalhes de um usuário específico.
    POST /users: Cria um novo usuário.
    POST /users/login: Realiza o login de um usuário.
    PUT /users/:id: Atualiza um usuário existente.
    DELETE /users/:id: Exclui um usuário.
    POST /users/:id/saque: Realiza um saque para um usuário.
    POST /users/:id/deposito: Realiza um depósito para um usuário.
## ENDPOINTS API

**Eventos (Events)**

    GET /events: Retorna todos os eventos.
    GET /events/past: Retorna eventos passados.
    GET /events/future: Retorna eventos futuros.
    POST /events: Cria um novo evento.
    GET /events/:id: Retorna detalhes de um evento específico.
    PUT /events/:id: Atualiza um evento existente.
    DELETE /events/:id: Exclui um evento.

**Apostas (Bets)**

    GET /bets/history/:userId: Retorna o histórico de apostas de um usuário.
    GET /bets: Retorna todas as apostas.
    GET /bets/:id: Retorna detalhes de uma aposta específica.
    POST /bets: Cria uma nova aposta.
    PUT /bets/:id: Atualiza uma aposta existente.
    DELETE /bets/:id: Exclui uma aposta.
    POST /bets/:id/finish: Finaliza uma aposta.

**Esportes (Sports)**

    GET /sports: Retorna todos os esportes.
    GET /sports/:id: Retorna detalhes de um esporte específico.
    POST /sports: Cria um novo esporte.
    PUT /sports/:id: Atualiza um esporte existente.
    DELETE /sports/:id: Exclui um esporte.

**Equipes (Teams)**

    GET /teams: Retorna todas as equipes.
    GET /teams/:id: Retorna detalhes de uma equipe específica.
    POST /teams: Cria uma nova equipe.
    PUT /teams/:id: Atualiza uma equipe existente.
    DELETE /teams/:id: Exclui uma equipe.

**Histórico de Transações (Transaction History)**

    GET /transaction: Retorna todas as transações.
    GET /transaction/:id: Retorna detalhes de uma transação específica.
    POST /transaction: Cria uma nova transação.
    PUT /transaction/:id: Atualiza uma transação existente.
    DELETE /transaction/:id: Exclui uma transação.
    GET /transaction/history/:userId: Retorna o histórico de transações de um usuário.

**Usuários (Users)**

    GET /users: Retorna todos os usuários.
    GET /users/:id: Retorna detalhes de um usuário específico.
    POST /users: Cria um novo usuário.
    POST /users/login: Realiza o login de um usuário.
    PUT /users/:id: Atualiza um usuário existente.
    DELETE /users/:id: Exclui um usuário.
    POST /users/:id/saque: Realiza um saque para um usuário.
    POST /users/:id/deposito: Realiza um depósito para um usuário.

## Como Utilizar

Certifique-se de ter o Docker instalado em sua máquina.

1. Clone o repositório:

   ```bash
   git clone git@github.com:oliveiraxand/betventure.git
   cd betventure
   ```
2. Crie e inicie os contêineres Docker usando o Docker Compose:

```bash
docker-compose up -d
```
Isso iniciará a aplicação e os serviços necessários.

Acesse a API em http://localhost:PORTA (substitua PORTA pela porta configurada em seu docker-compose.yml). Padrão(back-end:3000, banco de dados: 3306)

## Tecnologias Utilizadas

TypeScript<br> 
Sequelize<br> 
Node.js<br>
EXPRESS<br> 
MOCHA<br>
SINON<br>
CHAI<br>

## Contribuição

Contribuições são bem-vindas! Se você quiser adicionar novos recursos, melhorar funcionalidades existentes ou corrigir problemas, fique à vontade para fazer um fork deste repositório e abrir um pull request.


