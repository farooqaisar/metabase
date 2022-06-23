#!/bin/bash


version=$(cat package.json | jq -r .version)
docker build -f Dockerfile-jar -t eii/eii-irt-source:${version} .
