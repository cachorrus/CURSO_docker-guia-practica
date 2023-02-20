# alpine ya tiene este directorio /app 
#FROM --platform=linux/arm/v6 node:19.2-alpine3.16

#Ejecutando con buildx
#docker buildx build --platform linux/amd64,linux/arm64,linux/arm/v7,linux/386 \
#-t cachorrus/cron-ticker:latest --push .
FROM --platform=$BUILDPLATFORM node:19.2-alpine3.16

#FROM node:19.2-alpine3.16

# cd app
WORKDIR /app

# Dest /app
COPY package.json ./

# Instalar las dependencias de la app
RUN npm install

# Dest /app
# COPY app.js ./
COPY . ./

# TEST
RUN npm run test

# Eliminar archivos y directorios de DEV
RUN rm -rf tests && rm -rf node_modules

# Instalar las dependencias de PROD
RUN npm install --prod

# Comando RUN de la aplicacion
CMD ["node", "app.js"]