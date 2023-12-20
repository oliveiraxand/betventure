# Usar a imagem node:16.14-alpine como base
FROM node:16.14-alpine

# Mudar para o diretório de trabalho /app-backend
WORKDIR /app-backend

# Copiar os package.json, package-lock.json e packages.npm para o container
COPY package*.json ./

# Instalar as dependências Node
RUN npm install && npm install jsonwebtoken

# Copiar o restante dos arquivos da aplicação para o container
COPY ./ ./

# Sinalize que aplicação expõe a porta 3001
EXPOSE 3000

# Configurar os comandos para iniciar a aplicação de acordo com as boas práticas
CMD ["npm", "run", "database:create"]
# ENTRYPOINT ["npm", "run"]

# Comando para criar o banco de dados apenas durante a construção da imagem
# CMD sleep 10 && npx tsc && npx sequelize-cli db:create && npx sequelize-cli db:migrate && npx sequelize-cli db:seed:all
