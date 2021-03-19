#!/bin/sh
sed -i "s/VERSION/${TRAVIS_BUILD_NUMBER}/g" kube/barbearia.yml
cat kube/barbearia.yml