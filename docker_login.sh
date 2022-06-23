#!/bin/bash


token=$(aws ecr --region us-east-1 get-authorization-token --registry-ids 434313288222 --output text --query authorizationData[].authorizationToken | base64 --decode | cut -d: -f2)
docker login -u AWS -p $token 434313288222.dkr.ecr.us-east-1.amazonaws.com
