FROM node:14

# Cria diretório do app
WORKDIR /usr/src/app

# Copia o package.json e nstala as dependências
COPY package*.json ./

RUN npm install

# Copia arquivos para a imagem
COPY . .

# Porta utilizada
EXPOSE 3000

# Roda o server
CMD [ "node", "index.js" ]