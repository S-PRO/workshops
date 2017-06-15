#!/bin/bash

while ! (timeout 3 bash -c "</dev/tcp/$MYSQL_HOST/$MYSQL_PORT") &> /dev/null;
do
    echo waiting for MySQL to start...;
    sleep 3;
done;

if [ "$NODE_ENV" = "development" ]; then
  npm run dev
elif [ "$NODE_ENV" = "production" ]; then
  npm start
fi
