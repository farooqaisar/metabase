#!/bin/bash

# Get package.json from eii-metabase-source/eii-metabase/
version=$(cat package.json | jq -r .version)

id=$(docker create eii/eii-irt-source:${version})
docker cp $id:/app/target/uberjar/metabase.jar metabase.jar
docker rm -v $id
