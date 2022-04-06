FROM node:16

WORKDIR /usr/src/app

RUN yarn

RUN yarn build

RUN yarn start