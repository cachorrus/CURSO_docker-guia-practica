#Stage 1: Dependencias de desarrollo
FROM node:19.2-alpine3.16 as deps
WORKDIR /app
COPY package.json ./
RUN npm install

#Stage 2: Test y Build
FROM node:19.2-alpine3.16 as builder
WORKDIR /app
# Dest from stage deps
COPY --from=deps /app/node_modules ./node_modules
COPY . ./
RUN npm run test
#RUN npm run build

# Stage 3: Dependencias de Producción
FROM node:19.2-alpine3.16 as prod-deps
WORKDIR /app
COPY package.json ./
RUN npm install --prod

# Stage 4: Ejecutar la APP
FROM node:19.2-alpine3.16 as runner
WORKDIR /app
COPY --from=prod-deps /app/node_modules ./node_modules
COPY app.js ./
#Separado para copiar todo el directorio y su contenido en nueva ruta
COPY tasks/ ./tasks 
# Comando RUN de la aplicacion
CMD ["node", "app.js"]