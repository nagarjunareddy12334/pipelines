
FROM node:20-alpine

WORKDIR /app

COPY app/package.json .

COPY app/index.js .

RUN npm install

CMD ["npm", "start"]
