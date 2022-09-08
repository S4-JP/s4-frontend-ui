#!/bin/bash

# ライブラリ削除
rm -rf .next
rm -rf node_modules
echo "ライブラリ [ .next / node_modules ] 削除"

# docker docker-build
docker-compose build --no-cache
docker-compose up -d

##  frontend yarn
docker-compose exec ui yarn install
docker-compose exec ui yarn build

# fin
echo "setup complete."
