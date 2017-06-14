FROM node:latest

RUN curl -o- -L https://yarnpkg.com/install.sh | bash
RUN npm i -g typescript ts-node
RUN echo "source /var/www/typeorm-api/docker/export.sh" >> /etc/bash.bashrc

WORKDIR /var/www/typeorm-api

ADD . /var/www/typeorm-api

RUN yarn install

EXPOSE 3000

CMD ["docker/start.sh"]
