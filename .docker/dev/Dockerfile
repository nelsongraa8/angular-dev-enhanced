FROM node:alpine

WORKDIR /usr/src/app

COPY . /usr/src/app

RUN npm install -g pnpm

RUN pnpm install

RUN pnpm add -g @angular/cli@18

CMD ["pnpm", "start"]
