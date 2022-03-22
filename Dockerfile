FROM node:16

COPY . .

RUN npm install

ENTRYPOINT ["node", "./dist/main.js"]