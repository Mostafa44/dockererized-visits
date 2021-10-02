#specify a nase image
FROM node:alpine

WORKDIR /usr/app

COPY package.json .
RUN npm install
COPY . .

CMD [ "npm","start" ]