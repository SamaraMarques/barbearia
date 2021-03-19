#!/bin/sh
sed -i "s/VERSION/${TRAVIS_BUILD_NUMBER}/g" kube/barbearia.yaml
cat kube/barbearia.yaml