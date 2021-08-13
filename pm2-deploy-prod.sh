#!/usr/bin/env bash
git pull origin master
cp my-app.conf /etc/nginx/conf.d
cp redirect.conf /etc/nginx/conf.d
sudo nginx -t
sudo service nginx restart
pm2 delete "fe"
cd frontend
yarn
yarn upgrade
yarn run build
pm2 start npm --name "fe" -- run startProd
cd ..
sudo nginx -t
sudo service nginx restart
