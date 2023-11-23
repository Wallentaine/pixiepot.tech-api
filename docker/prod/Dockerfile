FROM node:18.14.0-alpine

WORKDIR /server

RUN npm install pm2 -g

COPY ./docker/prod/ecosystem.config.js .

COPY ./server .

RUN npm install

RUN npm run build

CMD pm2-runtime ecosystem.config.js