#!/bin/sh
sed -i "s/VERSION/${TRAVIS_BUILD_NUMBER}/g" kube/deployment.yml
cat kube/deployment.yml