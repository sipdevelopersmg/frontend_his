#!/usr/bin/env bash
echo "############# starting deployment... ##############"
./versioning.sh

BUILD_DATE=$(sed -n 's/^BUILD_DATE=\(.*\)/\1/p' < /var/jenkins_home/envstore/frontend_app_testing.env)
BUILD_VERSION=$(sed -n 's/^BUILD_VERSION=\(.*\)/\1/p' < /var/jenkins_home/envstore/frontend_app_testing.env)

IMAGE_NAME=his/frontend_app_testing:$BUILD_DATE.$BUILD_VERSION

echo "1. building new image : $IMAGE_NAME"

#docker-compose build
docker-compose --env-file /var/jenkins_home/envstore/frontend_app_testing.env build

echo "2. update container with new image : $IMAGE_NAME"

docker-compose --env-file /var/jenkins_home/envstore/frontend_app_testing.env up -d

echo "############# deployment completed ... ##############"

# author : Andre Kurniawan
# email  : andrekurniawan@gmail.com
# deploy from ci/cd






