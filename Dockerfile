FROM node:16

WORKDIR /usr/src/app

COPY package.json yarn.lock .env  ./

RUN yarn

ADD . /usr/src/app

RUN yarn build

CMD yarn start