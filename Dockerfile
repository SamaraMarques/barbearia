FROM node:14

# Cria diretório do app
WORKDIR /app

# Copia os arquivos e instala as dependências
ADD . .

RUN npm install

# Porta utilizada
EXPOSE 3000

# Roda o server
CMD [ "npm", "start" ]