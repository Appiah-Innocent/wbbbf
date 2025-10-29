#!/bin/bash
set -e

# 1. Build frontend
npm install
npm run build

# 2. Copy dist to backend resources
rm -rf ../hope-wxwbb/src/main/resources/static/*
cp -r dist/* ../hope-wxwbb/src/main/resources/static/

# 3. Build Spring Boot
cd ../hope-wxwbb
./mvnw clean package
