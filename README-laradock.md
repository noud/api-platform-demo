# API-Platform on [Laradock](http://laradock.io)
## API-Platform API demo
### Configure database in api/.env
```
DATABASE_URL=pgsql://default:secret@postgres/api
```
### Configure Mercure in api/.env
```
MERCURE_PUBLISH_URL=http://localhost:1337/.well-known/mercure
```
### Add Rewrite Rules for Apache2 to API-Platform API demo
```
cd api && composer require symfony/apache-pack
```
## Mercure JWT token and key
- Put the existing value of MERCURE_JWT_TOKEN from api/.env into the debugger on https://jwt.io/ in the Encoded field.
- Put a new value for MERCURE_PUBLISHER_JWT_KEY to ../laradock/.env and in the "your-256-bit-secret" field on https://jwt.io/ to obtain the new Encoded value.
- Fill this new encoded value from https://jwt.io/ in api/.env for MERCURE_JWT_TOKEN
## Laradock
### Start Laradock services
```
docker-compose up -d apache2 mercure postgres
```
### Run the database migrations and seed the database in workspace
```
bin/console doctrine:database:create
bin/console doctrine:schema:create
bin/console doctrine:migrations:migrate
bin/console hautelook:fixtures:load
```
The API can be used.