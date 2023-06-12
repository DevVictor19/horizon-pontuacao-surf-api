# Horizon Surf Api

Hoziron Surf Api é um sistema de gerenciamento de torneios de surf, capaz de fazer cadastros de surfistas, ondas, baterias e calcular o vencedor com base nas notas cadastradas para cada onda.

## Links Importantes

- <a href="https://documenter.getpostman.com/view/27727224/2s93sdYrx2" target="_blank">Documentação da API - Postman</a>

- <a href="https://horizon-surf-api.cyclic.app" target="_blank">Deploy da Api - Cyclic</a>

## Tecnologias Usadas

- TypeScript
- Node
- Express
- PostgresSQL
- TypeORM

## Executando o projeto na sua máquina

1. Instalar dependências com o seguinte comando

```console
npm i
```

2. Criar .env de forma local

3. Executar comando para a criação do banco

```console
npm run typeorm:migrations
```

4. Iniciar o servidor de desenvolvimento

```console
npm run dev
```
