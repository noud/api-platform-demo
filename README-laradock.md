# API-Platform on [Laradock](http://laradock.io)
## Add Rewrite Rules for Apache2 to API
```
cd api && composer require symfony/apache-pack
```
## Start Laradock services
```
docker-compose up -d apache2 mercure postgres
```
## Database
### Configure database in api/.env
```
DATABASE_URL=pgsql://default:secret@postgres/api
```
### Run the database migrations and seed the database
Go to the demo project in your Laradock workspace
```
bin/console doctrine:database:create
bin/console doctrine:schema:create
bin/console doctrine:migrations:migrate
```
The database now has tables and is populated. The API can be used by a client.
## Mercure
### Configure Mercure in api/.env
```
MERCURE_PUBLISH_URL=http://http://localhost:1337/.well-known/mercure
```
### Run 
For instance triggered by:
```
bin/console hautelook:fixtures:load
```
gives
```
Careful, database will be purged. Do you want to continue y/N ?y
[error] Error thrown while running command "hautelook:fixtures:load". Message: "HTTP/1.1 401 Unauthorized returned for "http://localhost:1337/.well-known/mercure"."


In TraceableResponse.php line 200:
                                                                                     
  HTTP/1.1 401 Unauthorized returned for "http://localhost:1337/.well-known/mercure".  
                                                                                     
```