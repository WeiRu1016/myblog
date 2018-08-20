#!/bin/bash
cd code/myblog
git pull origin master
pm2 start server/pm2.json
echo 'travis build done!'
