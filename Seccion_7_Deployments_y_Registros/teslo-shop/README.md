<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>


# Teslo API

1. Clonar proyecto
2. ```yarn install```
3. Clonar el archivo ```.env.template``` y renombrarlo a ```.env```
4. Cambiar las variables de entorno
5. Levantar la base de datos
```
docker-compose up -d
```

6. Levantar: ```yarn start:dev```

7. Ejecutar SEED 
```
http://localhost:3000/api/seed
```


# Variables de entorno (.env)
[Markdown Guide](https://www.markdownguide.org/basic-syntax/)

Variables de entorno | Ejemplo | Descripción
| --- | --- | --- |
|APP_VERSION | 1.0.1 | Versión de la aplicación
|STAGE | prod | dev, stage, prod
|DB_PASSWORD | algun-password | Password de la base de datos Postgress
|DB_NAME | TesloDB | Nombre de la base de datos
|DB_HOST | TesloDB | Host donde se encuentra la BD (Contenedor, localhost)
|DB_PORT | 5432 | Puerto de la base de datos
|DB_USERNAME | postgres | usuario de la BD
|PORT | 3000 | Puerto donde se ejecuta la aplicacion http
|HOST_API | http://localhost:3000/api | Path donde se encuentra la API
|JWT_SECRET | seed-valido-para-JWT | Secret de nuetro JWTs


# Production notes:

Ejecutar este comando
```
docker compose -f docker-compose.prod.yml build
```

Para construir solo una imagen en específico del docker-compose se declare el nombre del servicio ex.: ${\color{red}app}$

```
docker compose -f docker-compose.prod.yml build app
```

Para construir una imagen para multiples plataformas usaremos el comando [buildx](https://docs.docker.com/build/building/multi-platform/#getting-started)

```
docker buildx build --platform linux/amd64,linux/arm64 -t cachorrus/teslo-shop:1.1.0 --push .
```
