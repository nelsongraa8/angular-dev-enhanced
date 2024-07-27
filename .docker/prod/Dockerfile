FROM node:alpine

WORKDIR /usr/src/app

COPY . /usr/src/app

RUN npm install -g pnpm

RUN pnpm install

RUN pnpm build:prod

# Usa una imagen base de Nginx para servir la aplicación
FROM nginx:alpine

COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
