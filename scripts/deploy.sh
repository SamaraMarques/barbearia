# !/bin/sh
# muda a versão de latest para a build do travis
sed -i "s/latest/${TRAVIS_BUILD_NUMBER}/g" kube/barbearia-app.yaml
cat kube/barbearia-app.yaml