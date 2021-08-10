# Sidekicker Coding Challenge

## Setup
* Install [Docker](https://docs.docker.com/get-started/)
* Build: `docker-compose build`
* Run: `docker-compose up`
* Execute tasks: `docker-compose exec <container_name> <cmd>`. E.g.
  * `docker-compose exec coding-challenge-backend npx sequelize-cli db:create`
  * `docker-compose exec coding-challenge-backend npx sequelize-cli db:migrate`

## Development
* React frontend: http://localhost
* Express backend: http://localhost:8000
