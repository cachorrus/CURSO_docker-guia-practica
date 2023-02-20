
FROM node:19-alpine3.15 as dev-deps
WORKDIR /app
COPY package.json package.json
RUN yarn install --frozen-lockfile


FROM node:19-alpine3.15 as builder
WORKDIR /app
COPY --from=dev-deps /app/node_modules ./node_modules
COPY . .
# RUN yarn test
RUN yarn build

# NO es necesario este paso porque la aplicacion esta contruida con vite
# FROM node:19-alpine3.15 as prod-deps
# WORKDIR /app
# COPY package.json package.json
# RUN yarn install --prod --frozen-lockfile


#FROM node:19-alpine3.15 as prod
FROM nginx:1.23.3 as prod
EXPOSE 80
COPY --from=builder /app/dist /usr/share/nginx/html
COPY assets/ /usr/share/nginx/html/assets
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d

#https://stackoverflow.com/questions/25970711/what-is-the-difference-between-nginx-daemon-on-off-option
CMD [ "nginx","-g", "daemon off;"]
