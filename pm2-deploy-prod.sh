#!/usr/bin/env bash
cp my-app.conf /etc/nginx/conf.d
sudo nginx -t
sudo service nginx restart
git pull origin master
pm2 delete "be"
pm2 delete "fe"
pm2 start npm --name "be" -- run start
pm2 start npm --name "fe" -- run start