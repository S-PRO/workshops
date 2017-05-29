FROM node:latest

RUN curl -o- -L https://yarnpkg.com/install.sh | bash
RUN npm i -g pm2 typescript ts-node
RUN pm2 install typescript

WORKDIR /var/www/workshop

ADD . /var/www/workshop

RUN yarn install
